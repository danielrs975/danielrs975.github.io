import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';
import AboutMe from './AboutMe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <WelcomeMessage />
        <AboutMe />
      </div>
    );
  }
}

export default App;
