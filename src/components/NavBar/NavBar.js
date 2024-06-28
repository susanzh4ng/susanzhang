import React from 'react';
import logoBlack from '../../images/susanzhang-black.png';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary, NavBar">
        <Container>
        <Navbar.Brand as={Link} to={"/"}>
            <img
              src={logoBlack}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Susan Zhang logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="PROJECTS" id="basic-nav-dropdown" className='link'>
                <NavDropdown.Item as={Link} to={"/projects/uiux"} className='link'>UI/UX</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/projects/full-stack"} className='link'>FULL-STACK</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/projects/marketing"} className='link'>MARKETING</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/about"} className='link'>ABOUT</Nav.Link>
              <Nav.Link href="#link" className='link'>RESUME 🡭</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default NavBar
