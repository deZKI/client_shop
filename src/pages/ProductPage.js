import {Col, Container, Row} from 'react-bootstrap';
import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ImageSlider from "../components/ImageSlider";
import {fetchOneProduct} from "../http/ProductAPI";
import {BasketContext} from "../store/BasketStore";

const ProductPage = () => {
  const {id} = useParams()
  const {addToCart} = useContext(BasketContext)
  const handleClick = () => {
    addToCart(product.id, product.name, Number(product.price))
  };
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchOneProduct(id);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }
  const changeProductImage = (color) => {
    //заглушка
    alert('изменили цвет')
  };

  return (
      <Container>
        <Row className='my-4'>
          <Col sm={12} md={6}>
            <ImageSlider images={product.images}/>
          </Col>
          <Col sm={12} md={6}>
            <h2 className='mb-4'>{product.name}</h2>
            <p className='mb-4'>{product.description}</p>
            <p className='mb-4'>Цена: {product.price} руб.</p>
             <button className="btn btn-primary" onClick={handleClick}>Добавить в корзину</button>
            <div className='d-flex'>
              <p className='mr-2'>
                Теги:{' '}
                {product.tags.map((tag) => (
                    <span key={tag} className='badge badge-primary mr-1'>
                  {tag}
                </span>
                ))}
              </p>
              <p className='mr-2'>
                Цвета:{' '}
                {product.colors.map((color) => (
                    <span
                        style={{backgroundColor: color.slug, width: '200px'}}
                        onClick={() => changeProductImage(color.slug)}
                    >&nbsp;

                    </span>
                ))}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
  )
      ;
};

export default ProductPage;
