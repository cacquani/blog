import React, { Component } from 'react';
import Home from './home';
import Projects from './projects';

class Header extends Component {
  getPage() {
    switch(this.props.pageId) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
    }
  }

  render() {
    return (
      <div className="main">
        {this.getPage()}
      </div>
    );
  }
}

export default Header;
