import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import { connect } from 'react-redux';

import postRequest from '../../actions/postActions';
import { addFlashMessage } from '../../actions/flashMessages';

import './post.css';

class PostPage extends Component {
  static propTypes = {
    postRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  render() {
    const { postRequest, addFlashMessage } = this.props;
    return (
      <div className="post-container">
        <PostForm
          postRequest={postRequest}
          addFlashMessage={addFlashMessage} />
      </div>
    );
  }
}

export default connect(null, { postRequest, addFlashMessage })(PostPage);
