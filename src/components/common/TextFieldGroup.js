import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextFieldGroup extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    handlerOnChange: PropTypes.func.isRequired
  }

  static defaultPropTypes = {
    type: 'text'
  }

  render() {
    const { label, field, value, type, error, handlerOnChange } = this.props;
    let faIco = 'fa ';
    switch (field) {
      case "username":
        faIco += 'fa-user';
        break;
      case "email":
        faIco += 'fa-envelope';
        break;
      case "password":
      case "passwordConfig":
        faIco += 'fa-lock';
        break;
      default:
        faIco += 'fa-user';
    }
    return (
      <div className="field">
        <label className='label'>{label}:</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={classnames("input", { 'is-danger': error })}
            type={type}
            onChange={handlerOnChange}
            name={field}
            value={value} />
          <span className="icon is-small is-left">
            <i className={faIco}></i>
          </span>

        </div>

          { error && <p className="help is-danger">{error}</p>}

      </div>
    );
  }
}

export default TextFieldGroup;
