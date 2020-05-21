/*
This script implements the 
navigation bar component
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Images
import MyIcon from '../images/danielSprite.png';
import Scrollspy from 'react-scrollspy';

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="content-container">
				<div className="navbar__content">
					<div className="brand">
						<div className="brand__image">
							<img src={MyIcon} alt="face-icon" />
						</div>
						<div className="brand__name show-for-desktop">
							<h1>DANIEL RODRIGUEZ</h1>
						</div>
					</div>
					<div className="navbar__menu">
						<div className="show-for-desktop">
							<Scrollspy items={['home', 'aboutMe', 'portfolio', 'contact']} currentClassName="active">
								<a href="#home">Home</a>
								<a href="#aboutMe">About Me</a>
								<a href="#portfolio">Portfolio</a>
								<a href="#contact">Contact Me</a>
							</Scrollspy>
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
