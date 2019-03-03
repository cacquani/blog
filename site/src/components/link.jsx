import React, { Component } from 'react';

class Link extends Component {
  changePage() {
    event.preventDefault();
    this.props.changePage(this.props.id);
  }

  linkClass() {
    return this.props.active ? 'active' : 'inactive';
  }

  link() {
    return this.props.active
      ? <a href={this.props.url} onClick={this.changePage.bind(this)} >{this.props.text}</a>
      : this.props.text
  }

  render() {
    return (
      <li className={this.linkClass()} >
        {this.link()}
      </li>
    );
  }
}

export default Link;
