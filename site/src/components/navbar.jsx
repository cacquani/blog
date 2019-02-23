import React, { Component } from 'react';
import Link from './link';
import { links } from '../config';

class Navbar extends Component {
  generateLinks() {
    return links.map(link => <Link active={link.active} url={link.url} text={link.text} />);
  }

  render() {
    return (
      <nav>
        <ul>
          {this.generateLinks()}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
