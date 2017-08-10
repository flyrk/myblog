import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Page from '../common/Page/Page';

import timeSort from '../../utils/timeSort';
import './home.css';
import { postResponse, setPosts } from '../../actions/postActions';

class Home extends Component {
  static propTypes = {
    postResponse: PropTypes.func.isRequired,
    setPosts: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      passages: []
    };
  }

  callbackPassages = () => {
    let { passages } = this.state;
    passages.sort(timeSort);
    this.setState({ passages: passages.splice(0, 5) });
  };

  componentWillMount() {
    this.props.postResponse().then(res => {
      this.props.setPosts(res.data);
      this.setState({
        passages: res.data
      }, this.callbackPassages);
      },
      (err) => this.setState({ errors: err.response.data })
    );

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
              className="button is-info is-outlined">
              more
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { postResponse, setPosts })(Home);
