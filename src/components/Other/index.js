import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import './Other.css';

class Other extends Component {
  render() {
    return (
      <div className="Other">
        <header className="Other-header">
          <img src={logo} className="Other-logo" alt="logo" />
          <h1 className="Other-title">Welcome to the Other Page</h1>
        </header>
        <p className="Other-intro">
          To get started, edit <code>src/Other.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Other;
