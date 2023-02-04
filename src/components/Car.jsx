import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Nav, NavLink, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addproductIdThunk, deleteProductCarThunk, getcartsThunk, purchasescartThunk } from "../store/slices/addcart.slice";
import getConfig from "../utils/getConfig";



const Car = ({ name, ...props }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();

    const addcart = useSelector((state) => state.addcart)

    let totalCar = 0;
    addcart.forEach( product =>{
        const producTotal = Number(product.product.price) * product.quantity;
        totalCar += producTotal
        
    }) 
   

    useEffect(() => {
     if(localStorage.getItem('token')=== ''){
       getConfig()
     }

    }, [])

    
    // console.log(addcart);

    const totalizar = (quantity, price)=>{
        const total = quantity * price
        return `$${total}`;
    }

    const decrement = (product) =>{
        const data = {
            "quantity": product.quantity -1
            
        }
        axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${product.id}`, data, getConfig())
        .then((res)=> dispatch(getcartsThunk()))

    }


    const increment = (product) =>{
        const data = {
            "quantity": product.quantity + 1
        }
        axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${product.id}`,data, getConfig())
        .then((res)=> dispatch(getcartsThunk()))

    }
    
    return (


        <div className="asidebar">


            <Nav.Link variant="primary" onClick={handleShow} className="me-2">
                <i className='bx bxs-cart bx-sm'> Car</i>
            </Nav.Link>

            <Offcanvas className='ofcanvas-container' placement="end" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="car-body-aside">
                    {
                        addcart.map((product) => (
                            <div key={product.id} className="cartAside">
                                <div className="containercartAside">
                                    <div className="">
                                        <img className="image-car" src={product.product?.images[1].url} alt="" />
                                    </div>
                                    <div>
                                        <strong>{product.product?.title}</strong>
                                        <div className='quaintity-info'>
                                            <button disabled={product.quantity <=1} onClick={()=> decrement(product)} className='btn-quantity'> - </button>
                                            <div className='btn-quantity'>{product.quantity}</div>
                                            <button onClick={()=> increment(product)} className='btn-quantity'> + </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => dispatch(deleteProductCarThunk(product.id))}

                                            className="btndelete-cart"><i className='bx bxs-trash bx-sm'></i></button>
                                    </div>
                                </div>
                                <div className="price-total">

                                    <span>Total:</span>
                                    <strong>{totalizar(product.quantity, product.product?.price)}</strong>

                                </div>

                            </div>

                        ))
                    }



                </Offcanvas.Body>
                <div className="div-car">
                    <div className="sumTotal">
                        <span>Total:</span>
                        <strong>{`$ ${totalCar}`}</strong>
                    </div>
                 
                    <Button onClick={() => dispatch(purchasescartThunk())} size="sm" variant="danger">Checkout</Button>

                </div>


            </Offcanvas>



        </div>

    );
};

export default Car;