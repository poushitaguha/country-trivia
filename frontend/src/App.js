import React, { Component } from 'react';
import './App.css';
import logo from './images/trivia-logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <h1 className='sr-only'>Country Trivia</h1>
        <img src={logo} alt='Logo for Qurantine Pursuit' />
      </header>
    );
  }
}

export default App;
