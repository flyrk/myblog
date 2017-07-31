import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginPage extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  render() {
    const { login, addFlashMessage } = this.props;
    return (
      <div className="login-container">
        <div className='columns'>
          <div className='column is-half is-offset-one-quarter'>
            <LoginForm
              login={login}
              addFlashMessage={addFlashMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login, addFlashMessage })(LoginPage);
