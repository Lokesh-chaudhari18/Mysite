import React from "react";
import {Container,Nav,Navbar,NavDropdown,Button,Row,Col} from 'react-bootstrap';
import logo from '../assets/hero-img.png'
import '../CSS/Header.css'


function Header() {
  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" id="sizee">ARSHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="nav-pad" >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Button href="#">Get Started</Button> 
      

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>


    
  );
}

export default Header;