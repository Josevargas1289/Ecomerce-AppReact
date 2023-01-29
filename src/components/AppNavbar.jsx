import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (

    <Navbar bg="primary" expand="lg" fixed="top" variant='dark' >
      <Container fluid >
        <Navbar.Brand as={Link} to={'/'}>Ecomerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px', color: 'ligrh' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            {/* <Nav.Link as={Link} to={'/produc/:id'}>Products</Nav.Link> */}
            <Nav.Link as={Link} to={'/purchases'}>Purchases</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default AppNavbar;