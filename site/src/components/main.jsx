import React, { Component } from 'react';
import Home from './home';
import Projects from './projects';
import Resume from './resume';

class Header extends Component {
  getPage() {
    switch(this.props.pageId) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
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
