import React, { Component } from 'react';
import Link from './link';

class Navbar extends Component {
  generateLinks() {
    return this.props.links.map(link => <Link active={link.active} url={link.url} text={link.text} />);
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
