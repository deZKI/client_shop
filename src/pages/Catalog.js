import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TagBar from "../components/TagBar";
import ProductList from "../components/ProductList";
// import BrandBar from "../components/BrandBar";
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
// import Pages from "../components/Pages";

const Catalog = () => {

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TagBar/>
                </Col>
                <Col md={9}>
                    <ProductList/>
                {/*    <Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
};
export default Catalog