import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import AboutMeSection from './components/AboutMeSection';
import PortfolioSection from './components/PortfolioSection'
import ContactMeSection from './components/ContactMeSection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<WelcomeSection />
				<AboutMeSection />
				<PortfolioSection />
				<ContactMeSection />
			</div>
		);
	}
}

export default App;
