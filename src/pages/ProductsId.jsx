import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addproductIdThunk } from '../store/slices/addcart.slice';
import { filterProductsCategoryThunk } from '../store/slices/Products.slice';

const ProductsId = () => {


    const { id } = useParams();
    const [products, setProducts] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsSuggested = useSelector((state) => state.products);
    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then((res) => {
                setProducts(res.data)
                dispatch(filterProductsCategoryThunk(res.data.category.id))
                scrollTo(0, 0)

            });

    }, [id]);


    // console.log(products);


    const btnaddProducId = {
        height: '55px',
    }
    const myStylesBtnAddCar = {
        display: 'flex',
        justifyContent: 'center',
        padding: '.8rem',
        borderRadius: '50%'
    }

    const addCart = () => {
        if (localStorage.getItem('token') === '') {
           navigate('/login')
        } else {
            const productId = {
                quantity: quantity,
                productId: products.id
            }
            dispatch(addproductIdThunk(productId))

        }

    }



    const decrementQuantity = () => {
        setQuantity(quantity - 1)
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }


    return (

        <div className='component-productsid'>
            <div className='container-info-productId'>

                <Container>
                    <Row>


                        <Col sm={6}>
                            <div className='Title-productsId'>
                                <Link className='link-producid' as={Link} to={'/'}>Home</Link>
                                <small className='smproducid'></small>
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
                                        <strong>{`$ ${(products.price)* (quantity)}`}</strong>
                                    </div>

                                    <div className='quantity'>
                                        <span>Quantity</span>
                                        <div className='quaintity-info'>
                                            <button disabled={quantity <= 1} onClick={decrementQuantity} className='btn-quantity'> - </button>
                                            <input className='btn-quantity' type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                            <button onClick={incrementQuantity} className='btn-quantity'> + </button>
                                        </div>

                                    </div>

                                </div>

                                <Button onClick={addCart} style={btnaddProducId} variant="danger">Add To Car</Button>

                            </div>


                        </Col>
                    </Row>
                </Container>

            </div>
            <div>

            </div>
            <Link className='title-card-similar'>Discover similar items</Link>

            <Container>
                <Row className=" home-card" >
                    {
                        productsSuggested.map((procductItem) => (
                            <Card className='container-card-product' key={procductItem.id} style={{ width: '18rem' }} onClick={() => navigate(`/produc/${procductItem.id}`)}>
                                <Col>
                                    <div className='card-product'>
                                        <div className='img-card'>
                                            <Card.Body>
                                                <Card.Img className='img-product' variant="top" src={procductItem?.images[0]?.url} />
                                            </Card.Body>
                                        </div>
                                        <div className='card-info'>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='list-group-card'>

                                                </ListGroup.Item>
                                                <Card.Title>
                                                    <span>{procductItem.brand}</span>
                                                    <br />
                                                    {procductItem.title}
                                                    <br />
                                                    <span>Price:</span>
                                                    <br />
                                                    {`$ ${procductItem.price}`}

                                                </Card.Title>
                                            </ListGroup>
                                        </div>
                                    </div>
                                    <div className='containter-btn-add-car'>
                                        <Button style={myStylesBtnAddCar} variant="primary"><i className='bx bxs-cart-add bx-xs' ></i></Button>
                                    </div>
                                </Col>
                            </Card>

                        ))
                    }


                </Row>

            </Container>



        </div>















    );
};

export default ProductsId;