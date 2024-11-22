import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../../assets/images/nextlogo1.png';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, scrollPosition) => {
    navigate(path);
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => handleNavigation('/', 0)} style={{ cursor: 'pointer' }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavigation('/', 0)}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/', 1400)}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/', 500)}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/', 1800)}>Career</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/', 900)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
