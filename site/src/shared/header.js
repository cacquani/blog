import React, { Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <h1>Cristina Acquani</h1>
          <h2>Contract Software Developer</h2>
        </div>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>Projects</li>
            <li>Concepts</li>
            <li>Blog</li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
