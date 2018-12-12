import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './stylesheets/reset.css';
import './stylesheets/app.css';
import './stylesheets/screen.css';
import './stylesheets/phone.css';
import Header from './shared/header'
import Main from './shared/main'
import Footer from './shared/footer'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
