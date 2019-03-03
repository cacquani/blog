import React, { Component } from 'react';
import Link from './link';

class Navbar extends Component {
  generateLinks() {
    return this.props.links.map(link => {
      return <Link active={link.active}
                   url={link.url}
                   text={link.text}
                   key={link.id}
                   id={link.id}
                   changePage={this.props.changePage} />
    });
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
