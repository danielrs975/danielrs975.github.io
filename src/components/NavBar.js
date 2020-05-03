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
							DANIEL RODRIGUEZ
						</div>
					</div>
					<div className="navbar__menu">Some navigation menu</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
