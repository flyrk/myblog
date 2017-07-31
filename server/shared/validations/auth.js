import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputAuth(data) {
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
