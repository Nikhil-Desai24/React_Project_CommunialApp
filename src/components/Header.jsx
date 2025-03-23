




import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaPrayingHands } from "react-icons/fa"; // Importing the logo icon

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center">
          <FaPrayingHands className="me-2 text-light" size={30} /> 
          <span className="text-light">Communion</span>
        </Navbar.Brand>

        {/* Menu for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="text-light fw-semibold">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light fw-semibold">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
