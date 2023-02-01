import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const purchases = useSelector((state) => state.purchases)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesThunk())

    }, [])

    console.log(purchases);


    return (

        <div className='page-purchases'>
            <div className='container-title-purchases'>
                <Link className='link-producid' as={Link} to={'/'}>Home</Link>
                <small className='smproducid'></small>
                <strong>My Purchases</strong>
            </div>

            {
                purchases.map((purchase) => (
                    <div key={purchase.id} className='container-mypurchases'>
                        <Container>
                            <Link to={`/produc/${purchase.product.id}`} className='myPurchases'>

                                <Row className='rowpurchases'>
                                    <Col><img className='img-purchase' src={purchase.product.images[0].url} alt="" /></Col>
                                    <Col><strong>{purchase.product.title}</strong></Col>
                                    <Col className='date-purchases'><span>{purchase.product.createdAt.slice(0, 10)}</span></Col>
                                    <Col>{purchase.quantity}</Col>
                                    <Col >{`$ ${purchase.product.price}`}</Col>
                                </Row>
                            </Link>

                        </Container>
                    </div>
                ))
            }



        </div>
    );
};

export default Purchases;