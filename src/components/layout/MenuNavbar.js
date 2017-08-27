import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

class MenuNavbar extends Component {
  render() {
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Draft</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/register">
          <NavItem eventKey={1} >Register</NavItem>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/players">
          <NavItem eventKey={2} >Players</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default MenuNavbar;

  
