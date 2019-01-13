import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavBar from './NavBar';
import Perfil from './Perfil';

class App extends Component {
  render() {
    const skills = ['Programming Languages', 'Web Development', 'Database', 'Languages']
    return (
      <div className="App">
        <MyNavBar nombre="Daniel Rodríguez" skills={skills}/>
        <Perfil />
      </div>
    );
  }
}

export default App;
