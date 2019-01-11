import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import MyNavigationBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavigationBar nombre="Daniel Rodríguez"/>
        Hello I am Daniel and This is my Portfolio
      </div>
    );
  }
}

export default App;
