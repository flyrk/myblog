import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import logo from '../../assets/logo.png';
import './index.css';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isActived: false
    };
    this.logout = this.logout.bind(this);
    this.handleClickNavbar = this.handleClickNavbar.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClickNavbar() {
    this.setState((preState, props) => ({
      isActived: !preState.isActived
    }));
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLink = (
      <div className="field is-grouped">
        <p className="control">
          <Link className="button is-info is-outlined" to="/login">
            <span>登录</span>
          </Link>
        </p>
        <p className="control">
          <Link className="button is-info is-outlined" to="/signup">
            <span>注册</span>
          </Link>
        </p>
    </div>
    );

    const userLink = (
      <div className="field is-grouped">
        <p className="control">
          <button className="button is-info is-outlined" onClick={this.logout}>
            <span>注销</span>
          </button>
        </p>
      </div>
    );

    const postLink = (
      <Link className="navbar-item " to="/newposts">
        <span className="item-link">新建文章</span>
      </Link>
    );
    return (
      <nav className="navbar ">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className={classnames("navbar-burger burger", {"is-active": this.state.isActived})}
              data-target="navMenuExample"
              onClick={this.handleClickNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuExample" className={classnames("navbar-menu", {"is-active": this.state.isActived})}>

          <div className="navbar-end">
            <Link className="navbar-item " to="/">
              <span className="item-link">首页</span>
            </Link>
            <Link className="navbar-item " to="/categories">
              <span className="item-link">分类</span>
            </Link>
            <Link className="navbar-item " to="/archieves">
              <span className="item-link">归档</span>
            </Link>
            {isAuthenticated ? postLink : ''}
            <Link className="navbar-item " to="/about">
              <span className="item-link">关于</span>
            </Link>
            <Link className="navbar-item " to="/comments">
              <span className="item-link">留言</span>
            </Link>

            <div className="navbar-item">
                { isAuthenticated ? userLink : guestLink }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateProps, { logout })(Header);
