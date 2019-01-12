import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavBar from './NavBar'

class App extends Component {
  render() {
    const skills = ['Programming Languages', 'Web Development', 'Database', 'Languages']
    return (
      <div className="App">
        <MyNavBar nombre="Daniel Rodríguez" skills={skills}/>
      </div>
    );
  }
}

export default App;
