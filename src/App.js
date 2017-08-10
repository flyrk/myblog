import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FlashMessagesList from './components/flash/FlashMessagesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FlashMessagesList />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
