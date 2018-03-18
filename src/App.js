import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <h5>Whats up </h5>
      </div>
    );
  }
}

export default App;
