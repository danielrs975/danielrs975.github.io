import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import AboutMeSection from './components/AboutMeSection';
import PortfolioSection from './components/PortfolioSection'

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<WelcomeSection />
				<AboutMeSection />
				<PortfolioSection />
			</div>
		);
	}
}

export default App;
