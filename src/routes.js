import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </App>
      </Router>
    );
  }
}
