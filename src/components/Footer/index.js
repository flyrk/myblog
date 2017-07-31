import React, { Component } from 'react';

import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <p>
          Blog by Flyrk
        </p>
        <p>
          Copyright&copy;2017 Flyrk. All Rights Reserved.
        </p>
        <p>
          <a className="icon" href="https://github.com/flyrk">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
