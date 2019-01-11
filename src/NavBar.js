/*
This script implements the 
navigation bar component
 */
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

function MyNavigationBar(props) {
    bootstrapUtils.addStyle(Navbar.Header, 'my-name')
    return (
        <Navbar inverse collapseOnSelect className="navigation-bar">
            <Navbar.Header bsStyle="my-name">
                <Navbar.Brand>
                    <a href="#brand">{props.nombre}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Profile
                    </NavItem>
                    <Nav>
                        <NavDropdown eventKey={3} title="Skills" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Programming Languages</MenuItem>
                            <MenuItem eventKey={3.2}>Web Development</MenuItem>
                            <MenuItem eventKey={3.3}>Database</MenuItem>
                            <MenuItem eventKey={3.3}>Languages</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <NavItem eventKey={3} href="#">
                        Projects
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavigationBar;