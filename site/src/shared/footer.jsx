import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <footer>
        <div className="half">
          <p>Currently based in Leeds, available for Yorkshire based or remote roles</p>
        </div>
        <div className="half">
          <a className="mail" href="mailto:cacquani@mail.com">
            <i className="far fa-2x fa-envelope">
            <span>Email</span>
          </a>
          <a className="whatsapp" href="whatsap://+44 7468 923163">
            <i className="fab fa-2x fa-whatsapp">
            <span>Whatsapp</span>
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/cristina-acquani-3a613226/">
            <i className="fab fa-2x fa-linkedin-in">
            <span>Linkedin</span>
          </a>
          <a className="gitlab" href="https://gitlab.com/cacquani">
            <i className="fab fa-2x fa-gitlab">
            <span>GitLab</span>
          </a>
          <a className="github" href="https://github.com/cacquani">
            <i className="fab fa-2x fa-github">
            <span>GitHub</span>
          </a>
        </div>
      </footer>
    );
  }
}

export default Header;
