import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Categories from './components/Categories';
import Archieve from './components/Archieve';
import About from './components/About';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';
import PostPage from './components/Posts/PostPage';
import Articles from './components/Articles';
import Comments from './components/Comments';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={Categories} />
          <Route path='/archieves' component={Archieve} />
          <Route path='/articles/:year/:month/:date/:title' component={Articles} />
          <Route path='/newposts' component={PostPage} />
          <Route path='/about' component={About} />
          <Route path='/comments' componenet={Comments} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </App>
      </Router>
    );
  }
}
