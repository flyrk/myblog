import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Archieve from './components/Archieve';
import About from './components/About';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';
import PostPage from './components/Posts/PostPage';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/archieves' component={Archieve} />
          <Route path='/newposts' component={PostPage} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </App>
      </Router>
    );
  }
}
