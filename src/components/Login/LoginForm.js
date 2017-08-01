import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInputAuth(data) {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = '该区域不能为空';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '请输入密码';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  isValid = () => {
    const { errors, isValid } = validateInputAuth(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };

  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnBlur = () => {
    if (this.isValid()) {
      this.setState({
        errors: {}
      });
    }
  };

  handlerOnSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => {
          this.props.addFlashMessage({
            type: 'success',
            text:'你已登录成功，欢迎回来！'
          });
          this.props.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }

  };

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1 className="title">登录</h1>

        { errors.form &&
          <div className='message is-danger'>
            <div className="message-body">{errors.form}</div>
          </div>}
        <TextFieldGroup
          field='identifier'
          value={identifier}
          label='用户名/邮箱'
          handlerOnChange={this.handlerOnChange}
          placeholder='请输入用户名／邮箱'
          handleOnBlur={this.handleOnBlur}
          type='text'
          error={errors.identifier}
        />

        <TextFieldGroup
          field='password'
          value={password}
          label='密码'
          handlerOnChange={this.handlerOnChange}
          placeholder='请输入密码'
          handleOnBlur={this.handleOnBlur}
          type='password'
          error={errors.password}
        />

        <div className="field">
          <div className="control">
            <button
              disabled={isLoading}
              className="button is-primary">
              登录
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
