import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </App>
      </Router>
    );
  }
}
