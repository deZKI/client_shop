import React, {useContext, useEffect, useRef, useState} from 'react';
import {Accordion, Container, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TagBar from "../components/Bars/TagBar";
import ColorBar from "../components/Bars/ColorBar";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchColors, fetchProducts, fetchTags} from "../http/ProductAPI";
import {useLocation, useNavigate} from "react-router-dom";
// import BrandBar from "../components/BrandBar";
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
// import Pages from "../components/Pages";

const Catalog = () => {
    const {products} = useContext(Context)
    const navigate = useNavigate();
    const [timerId, setTimerId] = useState(null);
    const [paramForm, setParamForm] = useState('');
    const formRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tagsData = await fetchTags();
                const colorData = await fetchColors()
                const searchParams = new URLSearchParams(location.search);
                const paramFormFromUrl = Array.from(searchParams.entries())
                    .map(([key, value]) => `${key}=${value}`)
                    .join('&');
                console.log(searchParams.getAll('tags'))

                const tagSlugs = searchParams.get('tags')?.split(',') || [];
                const colorSlugs = searchParams.get('colors')?.split(',') || [];

                for (const tag of tagsData) {
                    tag.isChecked = tagSlugs.includes(tag.slug);
                }
                for (const color of colorData) {
                    color.isChecked = colorSlugs.includes(color.slug);
                }

                const productsData = await fetchProducts(paramFormFromUrl);
                products.setProducts(productsData.products);
                products.setTags(tagsData)
                products.setColors(colorData)
                productsData.setPage(productsData.page_current_number);

                setParamForm(paramFormFromUrl);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [location.search, products]);


    const change = (event) => {
        // event.preventDefault();
        // clearTimeout(timerId);
        //
        const form = formRef.current;
        // if (!form) return;
        //
        const params = new URLSearchParams(new FormData(form));
        const keys = new Set(params.keys());
        let newParamForm = '';

        for (const key of keys) {
            newParamForm = key + '=' + params.getAll(key).join(',') + '&' + newParamForm;
        }
        setParamForm(newParamForm);
        setTimerId(
            setTimeout(() => {
                navigate(`?${newParamForm}`);
            }, 100)
        );
    };


    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <form action="" method="get" id="filter" ref={formRef}>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <TagBar change={change}/>
                            <ColorBar change={change}/>
                        </Accordion>
                    </form>
                </Col>
                <Col md={9}>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
};
export default Catalog