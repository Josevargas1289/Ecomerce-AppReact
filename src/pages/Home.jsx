import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Alert, Button, Card, Col, Container, Form, InputGroup, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addproductIdThunk } from '../store/slices/addcart.slice';
import { filterProductsCategoryThunk, filterTitleThunk, getProductsThunk } from '../store/slices/Products.slice';

const Home = ({ name, ...props }) => {
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.products)
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newSearch, setnewSearch] = useState('')
    

  

    const myStylesBtnAddCar = {
        display: 'flex',
        justifyContent: 'center',
        padding: '.8rem',
        borderRadius: '50%'
    }

    const addCart = (itemId)=>{
        const productId ={
         quantity: 1,
         productId: itemId 
        }
        dispatch(addproductIdThunk(productId))
     }



    useEffect(() => {
        dispatch(getProductsThunk());
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then((res) => setCategories(res.data))
        scrollTo(0, 0)



    }, []);
    // console.log(productsList);

    return (



        <Container className='home'>

            <Row className='container-home'>


                <Col xs={1} md={2} lg={3} className="g-4">
                    <div className='prueba'>
                        <>
                            <Button variant="info" className='d-lg-none ' onClick={handleShow} style={{ color: 'white' }}>
                                <i className='bx bxs-filter-alt bx-xs'> </i>
                            </Button>


                            <Offcanvas show={show} onHide={handleClose} responsive="lg" placement='end'>
                                <Offcanvas.Header closeButton>
                                    <div className='container-btnclose'>
                                        <h1>Filters</h1>
                                        <i onClick={handleClose} className='bx bx-x bx-md'></i>
                                    
                                   
                                    </div>

                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="mb-1">

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
                                                                    <li onClick={handleClose}>{categorie.name}</li>
                                                                </ul>
                                                            ))
                                                        }
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                    </div>


                </Col>


                <Col className='column-car'>
                    <div className='btn-search'>
                        <InputGroup className="mb-3">
                            <Form.Control

                                placeholder="What are you looking for?"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={newSearch}
                                onChange={(e) => setnewSearch(e.target.value)}

                            />
                            <Button bg='success' variant="primary" id="button-addon1"
                                onClick={() => dispatch(filterTitleThunk(newSearch))}
                            >
                                <i className='bx bx-search-alt-2 bx-md '></i>
                            </Button>
                        </InputGroup>
                    </div>






                    <Row className=" home-card">


                        {


                            productsList.map(products => (



                                <Card className='container-card-product card-home' key={products.id} style={{ width: '15rem' }} >
                                    <div className='card-product' onClick={() => navigate(`/produc/${products.id}`)}>
                                        <div className='img-card'>
                                            <Card.Body>
                                                <Card.Img className='img-product' variant="top" src={products?.images[0]?.url} />
                                            </Card.Body>
                                        </div>
                                        <div className='card-info'>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='list-group-card'>

                                                </ListGroup.Item>
                                                <Card.Title>
                                                    <span>{products.brand}</span>
                                                    <br />
                                                    {products.title}
                                                    <br />
                                                    <span>Price:</span>
                                                    <br />
                                                    {`$ ${products.price}`}

                                                </Card.Title>
                                            </ListGroup>
                                        </div>
                                    </div>
                                    <div className='containter-btn-add-car'>
                                        <Button onClick={()=> addCart(products.id)}  style={myStylesBtnAddCar} variant="primary"><i className='bx bxs-cart-add bx-xs' ></i></Button>
                                    </div>
                                </Card>

                            ))


                        }

                    </Row>


                </Col>

            </Row>

        </Container>

    );
};

export default Home;