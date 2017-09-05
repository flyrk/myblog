import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../actions/commentActions';
import './index.css';

class CommentInputBox extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOnClick() {
    this.props.addComment(this.state);
  }

  render() {
    return (
      <div className="comment-inputbox-wrap box">
        <div className="field">
          <div className="control">
            <input className="input" type="text"
              name="username"
              placeholder="你的名字"
              onChange={this.handleOnChange}
              value={this.state.username}
            />
            <textarea className="textarea" type="text"
              name="comment"
              placeholder="请输入留言..." rows="10"
              onChange={this.handleOnChange}
              value={this.state.comment} 
            />
          </div>
        </div>
        <button className="button" onClick={this.handleOnClick}>评论</button>
      </div>
    )
  }
}

export default connect({}, addComment)(CommentInputBox);