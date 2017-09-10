import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';

import './index.css';

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
    this.setState({
      comment: '',
      comments: this.props.comments
    });
  }

  render() {
    const comments = this.state.comments;
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