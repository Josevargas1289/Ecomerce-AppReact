import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Alert, Button, Card, Col, Container, Form, InputGroup, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductsCategoryThunk, getProductsThunk } from '../store/slices/Products.slice';

const Home = () => {
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.products)
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        dispatch(getProductsThunk());
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then((res) => setCategories(res.data))

    }, []);
    console.log(productsList);

    return (



        <Container className='home'>

            <Row className='container-home'>


                <Col xs={1} md={2} lg={3} className="g-4">
                    <div className='prueba'>
                        <>
                            <Button variant="none" className="d-lg-none" onClick={handleShow}>
                            <i class='bx bxs-filter-alt'> Filter</i>
                            </Button>



                            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                                <Offcanvas.Header closeButton>

                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <p className="mb-1">
                                       
                                            <Accordion className='category' defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Categories</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            {

                                                                categories.map((categorie) => (

                                                                    <ul className='list-category' key={categorie.id}
                                                                        onClick={() => dispatch(filterProductsCategoryThunk(categorie.id))}
                                                                    >
                                                                        <li>{categorie.name}</li>
                                                                    </ul>
                                                                ))
                                                            }
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        
                                    </p>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                    </div>


                </Col>


                <Col>
                    <div className='btn-search'>
                        <InputGroup className="mb-3">
                            <Form.Control

                                placeholder="What are you looking for?"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button bg='success' variant="primary" id="button-addon1">
                            <i class='bx bx-search-alt-2 bx-md '></i>
                            </Button>
                        </InputGroup>
                    </div>


                    <div className='card-container'>



                        <Row className=" home-card">


                            {

                                productsList.map(products => (

                                    <Card className='card-products' key={products.id} style={{ width: '15rem' }} onClick={() => navigate(`/produc/${products.id}`)}>
                                        <Card.Img lg='white' className='img-car' style={{ width: '100%', heigth: '100%' }} variant="center" src={products?.images[0]?.url} />

                                        <Card.Body className='card-body'>

                                        </Card.Body>

                                        <ListGroup className="list-group-flush">
                                            <br />
                                            <span>{products.brand}</span>
                                            <ListGroup.Item>{products.title}</ListGroup.Item>
                                            <span>Price:</span>
                                            <ListGroup.Item>{products.price}</ListGroup.Item>
                                        </ListGroup>

                                        <Button className='btn-add-car' variant="primary"><i className='bx bxs-cart-download bx-sm' ></i> Add-car</Button>



                                    </Card>

                                ))

                            }
                        </Row>
                    </div>

                </Col>

            </Row>

        </Container>

    );
};

export default Home;