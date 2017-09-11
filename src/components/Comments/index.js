import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';

import './index.css';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

class Comments extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      username: '',
      comment: '',
      error: {}
    };
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOnClick = () => {
    if (this.isValid()) {
      this.props.addComment(this.state);
      this.setState({
        comment: '',
        comments: this.props.comments
      });
    }
  }

  isValid = () => {
    const { username, comment } = this.state;
    let error = {};
    if (Validator.isEmpty(username)) {
      error.username = "请输入用户名";
    }
    if (Validator.isEmpty(comment) || !Validator.isLength(comment, { min: 5 })) {
      error.comment = "请输入至少5个字符";
    }
    this.setState({ error });
    return isEmpty(error);
  }

  render() {
    const { comments, error } = this.state;
    const commentBox = (
      <div className="commentbox-wrap box">
        {comments.map((eachComment, id) => (
          <div className="card" key={id}>
            <header className="card-header">
              <p className="card-header-title">{eachComment.username}:</p>
            </header>
            <div className="card-content">
              <p className="content">{eachComment.comment}</p>
            </div>
          </div>
        ))}
      </div>);
    return (
      <div className="comments-container">
        <h1 className="title">留言板</h1>
        <div className="comments-wrap">
          <div className="comment-inputbox-wrap box">
            <div className="field">
              <div className="control">
                <input className="input" type="text"
                  name="username"
                  placeholder="你的名字"
                  onChange={this.handleOnChange}
                  value={this.state.username}
                />
                {error && <p className="help is-danger">{error.username}</p>}
                <textarea className="textarea" type="text"
                  name="comment"
                  placeholder="请输入留言..." rows="10"
                  onChange={this.handleOnChange}
                  value={this.state.comment}
                />
                {error && <p className="help is-danger">{error.comment}</p>}
              </div>
            </div>
            <button className="button" onClick={this.handleOnClick}>评论</button>
          </div>
          {this.state.comments.length !== 0 ? commentBox : ''}
          
        </div>
      </div>
    )
  }
}

function mapStateProps(state) {
  return {
    comments: state.comments
  }
}
export default connect(mapStateProps, { addComment })(Comments);