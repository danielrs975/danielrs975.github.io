/*
This script implements the 
navigation bar component
 */
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function MyNavBar(props){
    const skills = props.skills
    const skillsList = skills.map((skill, index) => 
        <MenuItem key={index} eventKey={index}>{skill}</MenuItem>
    );
    const navStyle = {
        color: '#dce3e3',
        fontSize: 25
    }
    return (
        <Navbar inverse fixedTop collapseOnSelect className="font">
            <Navbar.Header>
                <Navbar.Brand>
                    <span className="my-name">Daniel Rodríguez</span>
                </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#" className="menu">
                        Profile
                    </NavItem>
                    <NavDropdown eventKey={2} title="Skills" id="basic-nav-dropdown" className="menu">
                        {skillsList}
                    </NavDropdown>
                    <NavItem eventKey={3} href="#" className="menu">
                        Projects
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavBar;