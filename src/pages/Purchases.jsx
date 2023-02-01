import React, { useEffect } from 'react';
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
            <div className='Title-productsId title-purchases'>
                <Link className='link-producid' as={Link} to={'/'}>Home</Link>
                <small className='smproducid'></small>
                <strong> Purchases</strong>
            </div>
            <div>
                <h4>My Purchases</h4>
            </div>
            {
                purchases.map((purchase) => (
                    <div className='container-mypurchases'>
                    <ul key={purchase.id}>
                        <li><img className='img-purchase' src={purchase.product.images[0].url} alt="" /></li>
                        <li><strong>{purchase.product.title}</strong></li>
                        <li><span>{purchase.product.createdAt }</span></li>

                    </ul>
                    </div>
                ))
            }



        </div>
    );
};

export default Purchases;