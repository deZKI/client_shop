import React, {useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";
import {BasketContext} from "../store/BasketStore";

const ProductItem = ({product}) => {
    const {addToCart} = useContext(BasketContext)
    const history = useNavigate()
    const handleClick = () => {
        addToCart(product.id, product.name, Number(product.price))
    };
    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_MEDIA_URL + product.images[0]}
                       onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}/>
                <div></div>
                <div className="d-flex align-items-center">
                    <div>{product.rating}</div>
                </div>
                <div>{product.name}</div>
                <div>{product.price} руб.</div>
                <button className="btn btn-primary" onClick={handleClick}>Добавить в корзину</button>
            </Card>
        </Col>
    );
};

export default ProductItem;