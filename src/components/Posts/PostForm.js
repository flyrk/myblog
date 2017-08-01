import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './postForm.css';

class PostForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    postRequest: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: '',
      createTime: {
        year: 2017,
        month: 0,
        date: 0,
        hour: 0,
        minutes: 0
      },
      errors: {},
      isLoading: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let curTime = new Date();
    console.log(curTime);
    const year = curTime.getFullYear(),
             month = curTime.getMonth() + 1,
             date = curTime.getDate(),
             hour = curTime.getHours(),
             minutes = curTime.getMinutes();
    console.log(`${year} ${month}`);
    this.setState({
      isLoading: true,
      createTime: {
        year,
        month,
        date,
        hour,
        minutes
      }
    });
    this.props.postRequest(this.state).then(
      res => {
        this.props.history.push('/');
      },
      err => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render() {
    const { title, categories, content, isLoading } = this.state;
    return (
      <form className="post-form-container" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">标题</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={title}
              placeholder="请输入标题..." />
          </div>
        </div>

        <div className="field">
          <label className="label">分类</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={categories}
              placeholder="请输入分类，如: javascript ..." />
          </div>
        </div>

        <div className="field">
          <label className="label">正文</label>
          <div className="control">
            <textarea
              className="textarea"
              value={content}
              placeholder="请输入正文..."></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button disabled={isLoading} className="button is-primary">提交</button>
          </div>
        </div>

      </form>
    );
  }
}

export default withRouter(PostForm);
