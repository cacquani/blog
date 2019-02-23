import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <p>Hey! I’m Cristina and I’ve been coding for 16 years.</p>

          <h4>The story so far</h4>
          <p>
            During my career I’ve gone through a variety of languages like Ruby,
            Javascript, Java, C#, Pl/pgSQL and a few others.
          </p>
          <p>
            I’ve worked mostly in small agencies where everyone had to do a bit
            of everything – coding, sysop, even talking with clients to collect
            requirements, and that helped me develop the ability to learn fast
            and a rather eclectic skill set.
          </p>
          <p>
            I’ve even spent a few blissful years cultivating a Slackware and
            compiling my own kernels – but that was before I started to be constantly
            out of time!
          </p>
          <p>
            I fell in love with Ruby in 2008: clean design, follows the principle
            of least surprise, has a wide and welcoming community that encourages
            clean code and best practices.
          </p>
          <p>
            That doesn’t mean I won’t work with other technologies though – I’ve
            maintained Java and C# apps and I’ve recently enjoyed working on a
            big Javascript project, using a Node.js implementation of GraphQL as
            a backend and a React.js frontend.
          </p>

          <h4>Motivation</h4>
          <p>
            While I appreciate a language that doesn’t get in the way, the thing
            I enjoy most about software is the mix of problem solving and creative
            thinking required.
          </p>
          <p>
            It’s never just about the code, it’s about understanding what it’s
            really needed, what’s the best code that can at the same time satisfy
            the end user and remain within budget and time constraints.
          </p>
          <p>
            That’s also why I love agile: it’s down to earth and realistic, it’s
            about setting small archievable goals in small increments, making sure
            it’s OK instead of going on adding more and more stuff built on a wrong
            assumption.
          </p>
          <p>And tests. </p>
          <p>
            Writing tests first is a good reminder to seriously think on what do
            you want to achieve before you start crunching code, wich improves the
            overall quality.
          </p>
          <p>
            Also, with good regression tests newly introduced bugs on old
            functionalities can be caught earlier – and while I can enjoy the
            intellectual challenge of a good bug hunt every now and then, having
            to chase them down manually is all wasted time that could be used to
            deliver value, not to mention the inconvenience to the end user when
            they make it to production.
          </p>

          <h4>Outside Work</h4>
          <p>
            In my spare time I like to cook, read, write, draw and I am (slowly)
            learning to make games with Unity.
          </p>
          <p>
            I also coach at Rails Girls events when I can find some nearby or
            find the time to go to London!
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
