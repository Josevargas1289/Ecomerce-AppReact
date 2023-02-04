import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Car from './Car';

const AppNavbar = () => {
  const navigate = useNavigate();

  const directuser=()=>{
    if(localStorage.getItem('token')===''){
      navigate('/login')

    }else{
      navigate('/user')
    }
  }

  return (
    


      <Navbar bg="primary" expand="lg" fixed="top" variant='dark' >
        <Container fluid >

          <Navbar.Brand as={Link} to={'/'}>Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '400px', color: 'ligrh' }}
              navbarScroll
            >
              {/* <Nav.Link as={Link} to={'/login'}>Login</Nav.Link> */}
              <Nav.Link onClick={directuser}>
              <i className='bx bxs-user bx-sm'></i>
              
              </Nav.Link>
              <Nav.Link as={Link} to={'/purchases'}>
              <i className='bx bxs-shopping-bag-alt bx-sm'></i>
              </Nav.Link>
              <Car />
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    

  );
};

export default AppNavbar;