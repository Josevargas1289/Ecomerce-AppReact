import { useEffect, useState } from "react";
import { Button, Nav, NavLink, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addproductIdThunk, deleteProductCarThunk, getcartsThunk, purchasescartThunk } from "../store/slices/addcart.slice";


const Car = ({ name, ...props }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();
    
    const addcart = useSelector((state) => state.addcart)
    
    useEffect(() => {
        dispatch(getcartsThunk())

    }, [])
    console.log(addcart);
   
   

    return (


        <div className="car">


            <Nav.Link variant="primary" onClick={handleShow} className="me-2">
                <i className='bx bxs-cart bx-sm'></i>
            </Nav.Link>
            <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        addcart.map((product) => (
                            <div key={product.id} className="cartAside">
                                <div className="containercartAside">
                                    <div className="">
                                        <img className="image-car" src={product.product?.images[0].url} alt="" />
                                    </div>
                                    <div>
                                        <strong>{product.product?.title}</strong>
                                        <div className='quaintity-info'>
                                            <button className='btn-quantity'> - </button>
                                            <div className='btn-quantity'>{product.quantity}</div>
                                            <button className='btn-quantity'> + </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                        onClick={()=> dispatch(deleteProductCarThunk(product.id))}
                                        
                                        className="btndelete-cart"><i className='bx bxs-trash bx-sm'></i></button>
                                    </div>
                                </div>
                                <div className="price-total">
                                <span>Total:</span>
                                    <strong>{`$${(product.quantity)* parseInt(product.product?.price)}`}</strong>
                                </div>
                                 
                            </div>
                            
                        ))
                    }
                   
                   <Button onClick={()=> dispatch(purchasescartThunk())} size="sm" variant="danger">Checkout</Button> 
                </Offcanvas.Body>
                
              
            </Offcanvas>
            
        </div>

    );
};

export default Car;