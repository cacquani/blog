import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title.title}</h1>
        <h2>{this.props.title.subtitle}</h2>
      </div>
    )
  }
}

export default Title;
