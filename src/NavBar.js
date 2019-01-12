/*
This script implements the 
navigation bar component
 */
import React from 'react';

function MyNavBar(props){
    const skills = props.skills
    const skillsList = skills.map((skill, index) => 
        <a key={index} className="dropdown-item" href="#">{skill}</a>
    );
    const navStyle = {
        color: '#dce3e3',
        fontSize: 25
    }
    return (
        <nav className="background navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#2e2e2e'}}>
            <div className="my-name">
                <span className="mb-0 h1" style={navStyle}>{props.nombre}</span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="option-menu">
                    <ul className="navbar-nav" style={navStyle}>
                        <li className="nav-item active"> 
                            <a className="nav-link nav-color" href="#">Profile</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-color" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                                Skills
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {skillsList}
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-color" href="#">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNavBar;