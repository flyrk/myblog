import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './index.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar ">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="navbar-burger burger" data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuExample" className="navbar-menu">

          <div className="navbar-end">
            <Link className="navbar-item " to="/">
              <span className="item-link">Home</span>
            </Link>
            <Link className="navbar-item " to="/about">
              <span className="item-link">About</span>
            </Link>

            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-inverted" to="/login">
                    <span>登录</span>
                  </Link>
                </p>
                <p className="control">
                  <Link className="button is-primary is-inverted" to="/signup">
                    <span>注册</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
