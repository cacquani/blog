import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './stylesheets/reset.css';
import './stylesheets/app.css';
import './stylesheets/screen.css';
import './stylesheets/phone.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { pageId: 'home' };
  }

  changePage(id) {
    this.setState({ pageId: id })
  }

  render(){
    return(
      <div className="App">
        <Header changePage={this.changePage.bind(this)} />
        <Main pageId={this.state.pageId} />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
