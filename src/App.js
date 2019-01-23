import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';


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
