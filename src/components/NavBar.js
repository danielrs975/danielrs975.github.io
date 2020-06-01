/*
This script implements the 
navigation bar component
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// Images
import MyIcon from '../images/danielSprite.png';
import Scrollspy from 'react-scrollspy';
// import { Link } from 'react-router-dom';

import translation from '../fixtures/menu';

export default class NavBar extends React.Component {
	state = {
		isOpen: false,
		openLM: null, // This is for toggle the menu with the different languages
		languageSelected: 'English'
	}
	openLanguageMenu = (e) => {
		const openLM = e.currentTarget;
		this.setState({ openLM });
	}
	closeLanguageMenu = (e) => {
		const openLM = null;
		this.setState({ openLM });
	}
	toggleMenu = (e) => {
		const isOpen = !this.state.isOpen;
		this.setState({ isOpen });
	}
	render() {
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
									<a href="#home">{translation[this.props.lang][0]}</a>
									<a href="#aboutMe">{translation[this.props.lang][1]}</a>
									<a href="#portfolio">{translation[this.props.lang][2]}</a>
									<a href="#contact">{translation[this.props.lang][3]}</a>
									{/* <Button 
										aria-controls="simple-menu" 
										aria-haspopup="true" 
										className="button--navbar" 
										onClick={this.openLanguageMenu}
									>
										<FontAwesomeIcon icon={faGlobeAmericas} className="menu-icon" size="sm" />
										{this.props.lang}
									</Button>
									<Menu
										id="simple-menu"
										anchorEl={this.state.openLM}
										keepMounted
										open={Boolean(this.state.openLM)}
										onClose={this.closeLanguageMenu}
										className="language-menu"
									>
										<MenuItem onClick={this.closeLanguageMenu}>
											<Link to="en" className="link">English</Link>
										</MenuItem>
										<MenuItem onClick={this.closeLanguageMenu}>
											<Link to="es" className="link">Spanish</Link>
										</MenuItem>
										<MenuItem onClick={this.closeLanguageMenu}>
											<Link to="fr" className="link">French</Link>	
										</MenuItem>
									</Menu> */}
								</Scrollspy>
							</div>
							<div className="show-for-mobile">
								<FontAwesomeIcon icon={faBars} size="lg" onClick={this.toggleMenu}/>
								<Drawer
									className="drawer"
									variant="persistent"
									anchor="right"
									open={this.state.isOpen}
								>
									<FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={this.toggleMenu} className="right-position"/>
									<a href="#home" onClick={this.toggleMenu}>Home</a>
									<a href="#aboutMe" onClick={this.toggleMenu}>About Me</a>
									<a href="#portfolio" onClick={this.toggleMenu}>Portfolio</a>
									<a href="#contact" onClick={this.toggleMenu}>Contact Me</a>
								</Drawer>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
};
