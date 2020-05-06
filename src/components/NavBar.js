/*
This script implements the 
navigation bar component
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="content-container">
				<div className="navbar__content">
					<div className="brand">
						<div className="brand__image">
							<img src="/images/danielSprite.png" alt="face-icon" />
						</div>
						<div className="brand__name show-for-desktop">
							<h1>DANIEL RODRIGUEZ</h1>
						</div>
					</div>
					<div className="navbar__menu">
						<div className="show-for-desktop">
							<a className="active" href="#home">Home</a>
							<a href="#aboutMe">About Me</a>
							<a href="#portfolio">Portfolio</a>
							<a href="#contact">Contact Me</a>
						</div>
						<div className="show-for-mobile">
							<FontAwesomeIcon icon={faBars} size="lg"/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
