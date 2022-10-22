import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" variant="warning" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Oriental-Fish</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className=" ms-2" active as={Link} to="/">Home</Nav.Link>
            <Nav.Link className=" ms-2" as={Link} to="/order">Order</Nav.Link>
            <Nav.Link className=" ms-2" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className=" ms-2" as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
