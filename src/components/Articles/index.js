import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Page from '../common/Page/Page';

import './index.css';

class Articles extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: '',
      createTime: {}
    };
  }

  callStateBack = () => {
    let {year, month, date, title} = this.props.match.params;
    title = title.split('-').join(' ');
    this.props.posts.forEach(post => {
      if (post.title === title
          && post.createTime.year === parseInt(year, 10)
          && post.createTime.month === parseInt(month, 10)
          && post.createTime.date === parseInt(date, 10)) {
        this.setState({
          title: post.title,
          categories: post.categories,
          content: post.content,
          createTime: post.createTime
        });
      }
    });
  }

  componentWillMount() {
    this.callStateBack();
  }

  render() {
    const { title, categories, content, createTime } = this.state;
    return (
      <div className="articles-container">
        <Page
          title={title}
          categories={categories}
          content={content}
          createTime={createTime}
        />
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    posts: state.posts.posts
  };
}

export default withRouter(connect(mapStateProps)(Articles));
