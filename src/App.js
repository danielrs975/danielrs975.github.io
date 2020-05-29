import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// Components
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import AboutMeSection from './components/AboutMeSection';
import PortfolioSection from './components/PortfolioSection'
import ContactMeSection from './components/ContactMeSection';

class App extends Component {
	constructor(props) {
		super(props);
		const lang = !props.match.params.lang? 'en': props.match.params.lang;
		// console.log(lang in ['en', 'es', 'fr'], lang)
		if (!(lang in ['en', 'es', 'fr'])) {
			// Send to the 404 page
			console.log("404 not found")
		}
		this.state = {
			lang
		};
	}
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			const lang = this.props.match.params.lang;
			this.setState({ lang });
		}
	}
	render() {
		return (
			<div className="App">
				<NavBar lang={this.state.lang} />
				<WelcomeSection />
				<AboutMeSection />
				<PortfolioSection />
				<ContactMeSection />
				{/* The notification toast */}
				<ToastContainer autoClose={3000} />
			</div>
		);
	}
}

export default App;
