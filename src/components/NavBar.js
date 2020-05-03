/*
This script implements the 
navigation bar component
 */
import React from 'react';

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="content-container">
				<div className="navbar__content">
					<div className="brand">
						<div className="brand__image">
							<img src="/images/danielSprite.png" alt="face-icon" />
						</div>
						<div className="brand__name">
							<h1>DANIEL RODRIGUEZ</h1>
						</div>
					</div>
					<div className="navbar__menu">
						<a className="active" href="#home">Home</a>
						<a href="#aboutMe">About Me</a>
						<a href="#portfolio">Portfolio</a>
						<a href="#contact">Contact Me</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
