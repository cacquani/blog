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
            <li className="active"><a href="/">Home</a></li>
            <li className="inactive">Projects</li>
            <li className="inactive">Concepts</li>
            <li className="inactive">Blog</li>
            <li className="inactive">Resume</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
