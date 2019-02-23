import React, { Component } from 'react';

class Link extends Component {
  linkClass() {
    return this.props.active ? 'active' : 'inactive';
  }

  link() {
    return this.props.active
      ? <a href={this.props.url}>{this.props.text}</a>
      : this.props.text
  }

  render() {
    return (
      <li className={this.linkClass()}>
        {this.link()}
      </li>
    );
  }
}

export default Link;
