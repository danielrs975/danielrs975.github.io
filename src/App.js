import React, { Component } from 'react';
import MyNavBar from './components/NavBar';
import WelcomeMessage from './components/WelcomeMessage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyNavBar />
				<WelcomeMessage />
			</div>
		);
	}
}

export default App;
