import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlashMessagesList from './components/flash/FlashMessagesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container is-fluid">
          <FlashMessagesList />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
