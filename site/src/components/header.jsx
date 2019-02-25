import React, { Component } from 'react';
import Title from './title';
import Navbar from './navbar';

import { title, links } from '../config';

class Header extends Component {
  render() {
    return (
      <header>
        <Title title={title} />
        <Navbar links={links} />
      </header>
    );
  }
}

export default Header;
