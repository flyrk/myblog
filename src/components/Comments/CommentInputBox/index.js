import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class CommentInputBox extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="comment-inputbox-wrap box">
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="你的名字" />
            <textarea className="textarea" type="text" placeholder="请输入留言..." rows="10" />
          </div>
        </div>
        <button className="button">评论</button>
      </div>
    )
  }
}
