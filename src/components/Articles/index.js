import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../common/Page/Page';

import './index.css';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: '',
      createTime: {}
    };
  }

  componentWillMount() {
    
  }

  render() {
    console.log(this.props.match.params);
    const { year, month, date, title } = this.props.match.params;
    return (
      <div className="articles-container">
        <Page
          title={title}
          content={this.state.content}
          createTime={this.state.createTime}
        />
        Articles
      </div>
    );
  }
}

export default connect(null)(Articles);
