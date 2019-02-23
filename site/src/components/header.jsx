import React, { Component } from 'react';
import Navbar from './navbar';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <h1>Cristina Acquani</h1>
          <h2>Contract Software Developer</h2>
        </div>
        <Navbar />
      </header>
    );
  }
}

export default Header;
