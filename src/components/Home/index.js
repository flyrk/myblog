import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Page from './Page';

import timeSort from '../../utils/timeSort';
import './home.css';
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

  callbackPassages = () => {
    const { passages } = this.state;
    passages.sort(timeSort);
    console.log(passages);
    this.setState({ passages });
  };

  componentWillMount() {
    this.props.homePostRequest().then(res => {
      console.log(res);
      this.setState({
        passages: res.data
      }, this.callbackPassages);
    });
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
      <div className="home-container is-fluid">
        {passage}
        <div className="field">
          <div className="control">
            <Link to='/archieves'>
            <button
              className="button is-success is-outlined">
              more
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { homePostRequest })(Home);
