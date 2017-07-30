import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function commonValidationsSignup(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = '用户名不能为空';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = '邮箱不能为空';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = '邮箱不合法';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '请输入密码';
  }
  if (Validator.isEmpty(data.passwordConfig)) {
    errors.passwordConfig = '请再次确认密码';
  }
  if (!Validator.equals(data.password, data.passwordConfig)) {
    errors.passwordConfig = '密码必须一致';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}


class SignupForm extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfig: '',
      errors: {},
      isLoading: false
    };
  }

  isValid = () => {
    const { errors, isValid } = commonValidationsSignup(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };

  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerOnSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text:'你已注册成功，欢迎回来！'
          });
          this.props.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }

  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1 className="title">欢迎加入我的博客！</h1>
        <TextFieldGroup
          field='username'
          value={this.state.username}
          label='用户名'
          handlerOnChange={this.handlerOnChange}
          type='text'
          error={errors.username}
        />

        <TextFieldGroup
          field='email'
          value={this.state.email}
          label='邮箱'
          handlerOnChange={this.handlerOnChange}
          type='text'
          error={errors.email}
        />

        <TextFieldGroup
          field='password'
          value={this.state.password}
          label='密码'
          handlerOnChange={this.handlerOnChange}
          type='password'
          error={errors.password}
        />

        <TextFieldGroup
          field='passwordConfig'
          value={this.state.passwordConfig}
          label='确认密码'
          handlerOnChange={this.handlerOnChange}
          type='password'
          error={errors.passwordConfig}
        />

        <div className="field">
          <div className="control">
            <button
              disabled={this.state.isLoading}
              className="button is-primary">
              注册
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
