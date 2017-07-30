import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signActions';
import { addFlashMessage } from '../../actions/flashMessages';

import './signup.css';

class SignupPage extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired
  }

  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="signup-container">
        <div className='columns'>
          <div className='column is-half is-offset-one-quarter'>
            <SignupForm
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
