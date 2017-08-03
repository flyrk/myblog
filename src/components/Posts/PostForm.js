import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import TextFieldGroup from '../common/TextFieldGroup';

import './postForm.css';

import marked from 'marked';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validatePost(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = '标题不能为空';
  }
  if (Validator.isEmpty(data.categories)) {
    errors.categories = '请输入分类';
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = '内容不能为空';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

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
      renderContent: '',
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

  isValid = () => {
    const { errors, isValid } = validatePost(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };



  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'content') {
      console.log(marked(e.target.value));
      this.setState({
        renderContent: marked(e.target.value)
      });
    }
  };

  handleOnBlur = () => {
    if (this.isValid()) {
      this.setState({
        errors: {}
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      let curTime = new Date();
      const year = curTime.getFullYear(),
               month = curTime.getMonth() + 1,
               date = curTime.getDate(),
               hour = curTime.getHours(),
               minutes = curTime.getMinutes();
      let { createTime } = this.state;
      createTime = {
        year,
        month,
        date,
        hour,
        minutes
      };
      console.log(createTime);
      this.setState({
        errors: {},
        isLoading: true,
        createTime
      }, () => {
        console.log(this.state);
        this.props.postRequest(this.state).then(
          res => {
            this.props.history.push('/');
          },
          err => this.setState({ errors: err.response.data, isLoading: false })
        );
      });
    }
  }

  render() {
    const { title, categories, content, isLoading, errors } = this.state;
    return (
      <form className="post-form-container" onSubmit={this.handleSubmit}>
        <TextFieldGroup
          field='title'
          value={title}
          label='标题'
          handlerOnChange={this.handlerOnChange}
          handleOnBlur={this.handleOnBlur}
          type='text'
          error={errors.title}
          placeholder='请输入标题'
        />

        <TextFieldGroup
          field='categories'
          value={categories}
          label='分类'
          handlerOnChange={this.handlerOnChange}
          handleOnBlur={this.handleOnBlur}
          type='text'
          error={errors.categories}
          placeholder='请输入分类...'
        />

        <div className="field">
          <label className="label">正文</label>
          <div className="control">
            <textarea
              className={classnames("textarea", { 'is-danger': errors.content })}
              name="content"
              value={content}
              onChange={this.handlerOnChange}
              onBlur={this.handleOnBlur}
              placeholder="请输入正文..." />

          </div>
          { errors.content && <p className="help is-danger">{errors.content}</p>}
          <hr />
          <div className="field">
            <label className="label">预览:</label>
            <div className="control">
              <div className="markdown-body markdown-rendered-content"
                dangerouslySetInnerHTML={{__html: this.state.renderContent}} />
            </div>
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
