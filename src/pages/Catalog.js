import React, {useContext, useEffect} from 'react';
import {Accordion, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TagBar from "../components/TagBar";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchTags} from "../http/ProductAPI";
// import BrandBar from "../components/BrandBar";
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
// import Pages from "../components/Pages";

const Catalog = () => {
    const {products} = useContext(Context)
    useEffect(() => {
        fetchTags().then(data => products.setTags(data))
    }, [])
    return (
        <Container>
            <Row className="mt-2">
                <div className="col-md-3">
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <TagBar/>
                    </Accordion>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <ProductList />
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default Catalog