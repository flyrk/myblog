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
        <FlashMessagesList />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
