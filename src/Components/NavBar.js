import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Col, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";


export default class NavBar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href='/'>
            <i class='fas fa-brain'>Shopify</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav class="mr-auto">

        <Nav.Link href='/history' class='nav-link'>
            <i class="fas fa-store">History</i> 
        </Nav.Link>    
        </Nav>
        </Navbar.Collapse>
 
      </Navbar>
    );
  }
}
