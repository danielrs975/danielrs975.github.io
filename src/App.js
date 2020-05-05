import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import AboutMeSection from './components/AboutMeSection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<WelcomeSection />
				<AboutMeSection />
			</div>
		);
	}
}

export default App;
