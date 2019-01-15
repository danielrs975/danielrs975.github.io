import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavBar from './NavBar';
import Welcome from './Welcome';
import Skills from './Skills';

class App extends Component {
  render() {
    const skills = ['Programming Languages', 'Web Development', 'Database', 'Languages']
    return (
      <div className="App">
        <MyNavBar nombre="Daniel Rodríguez" skills={skills}/>
        <Welcome />
        <Skills />
      </div>
    );
  }
}

export default App;
