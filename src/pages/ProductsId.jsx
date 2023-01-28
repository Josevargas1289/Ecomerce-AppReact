import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductsId = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({})

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then((res) => setProducts(res.data));

    }, []);
    console.log(products);
    let counter = 0;

    const btnaddProducId = {
        height: '55px',
    }


    return (
        <div className='component-productsid'>
            <div className='container-info-productId'>

                <Container>
                    <Row>


                        <Col sm={5}>
                            <div className='Title-productsId'>
                                <Link className='link-producid' as={Link} to={'/'}>Home</Link>
                                <small></small>
                                <strong> {products.title}</strong>
                            </div>

                            <div className='carrusel'>
                                <Carousel variant='primary' slide={false}

                                >
                                    <Carousel.Item className='prueba'>
                                        <img
                                            className="d-block w-100"
                                            src={products.images?.[0].url}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={products.images?.[1].url}
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>



                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={products.images?.[2].url}
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                            </div>

                        </Col>

                        <Col sm={3}>
                            <div className='info-productid'>
                                <span>
                                    {products.brand}
                                </span>
                                <strong>
                                    {products.title}
                                </strong>
                                <p className='text-description'>
                                    {products.description}
                                </p>
                                <div className='price-quantity'>
                                    <div className='price-info'>
                                        <span>Price</span>
                                        <strong>{products.price}</strong>
                                    </div>

                                    <div className='quantity'>
                                        <span>Quantity</span>
                                        <div className='quaintity-info'>
                                            <button className='btn-quantity'> - </button>
                                            <div className='btn-quantity'>{counter}</div>
                                            <button className='btn-quantity'> + </button>
                                        </div>

                                    </div>

                                </div>

                                <Button style={btnaddProducId} variant="danger">Add To Car</Button>


                            </div>


                        </Col>
                    </Row>
                </Container>








            </div>

        </div>
    );
};

export default ProductsId;