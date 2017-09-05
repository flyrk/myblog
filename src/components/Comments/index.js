import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentInputBox from './CommentInputBox';
import CommentBox from './CommentBox';

import './index.css';

export default class Comments extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="comments-container">
        <div className="comments-wrap">
          <CommentInputBox />
          <CommentBox />
        </div>
      </div>
    )
  }
}
