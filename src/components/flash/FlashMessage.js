import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  handlerOnClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    return (
      <article className={classnames('message is-small', {
        'is-success': type === 'success',
        'is-danger': type === 'error'
      })}>
      <div className="message-header">
        <p>{text}</p>
        <button onClick={this.handlerOnClick} className='delete'><span>&times;</span></button>
      </div>
      </article>
    );
  }
}

export default FlashMessage;
