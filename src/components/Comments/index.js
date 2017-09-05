import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentInputBox from './CommentInputBox';
import CommentBox from './CommentBox';

import './index.css';

class Comments extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
    super(props);
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

export default connect()(Comments);