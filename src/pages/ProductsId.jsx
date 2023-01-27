import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsId = () => {
    const {id}= useParams();
    return (
        <div className='component'>
            <h1>Products</h1>
            <h3>Mostrando el producto con el id # <b>{id}</b></h3>
        </div>
    );
};

export default ProductsId;