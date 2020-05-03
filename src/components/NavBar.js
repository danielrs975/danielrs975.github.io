/*
This script implements the 
navigation bar component
 */
import React from 'react';

function MyNavBar(props) {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ paddingBottom: '0px' }}>
			<div id="nav-header">
				<div className="image-responsive">
					<img id="sprite-daniel" src="/images/danielSprite.png" alt="sprite-daniel" />
					<h2 id="name" className="navbar-brand mb-0 h1">
						DANIEL RODRÍGUEZ
					</h2>
				</div>
			</div>
			<div className="collapse navbar-collapse" id="nav-opciones">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#welcome-section">
						Home
					</a>
					<a className="nav-item nav-link" href="#about-me-section">
						About Me
					</a>
					<a className="nav-item nav-link" href="#portfolio">
						Projects
					</a>
					<a className="nav-item nav-link" href="#footer">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default MyNavBar;
