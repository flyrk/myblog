import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from './Page';

import { homePostRequest } from '../../actions/postActions';

class Home extends Component {
  static propTypes = {
    homePostRequest: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      passages: []
    };
  }
  componentWillMount() {
    this.props.homePostRequest().then(res => {
      console.log(res);
      this.setState({
        passages: res.data
      });
    })
  }
  render() {
    const passage = this.state.passages.map((passage, id) => {
      const { title, categories, content, createTime } = passage;
      return (
        <Page
          key={id}
          title={title}
          categories={categories}
          content={content}
          createTime={createTime}
        />
      );
    });
    return (
      <div className="container is-fluid">
        {passage}
      </div>
    );
  }
}

export default connect(null, { homePostRequest })(Home);
