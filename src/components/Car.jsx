import { useEffect, useState } from "react";
import { Button, Nav, NavLink, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcartsThunk } from "../store/slices/addcart.slice";


const Car = ({ name, ...props }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getcartsThunk())

    },[])

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
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

        </div>

    );
};

export default Car;