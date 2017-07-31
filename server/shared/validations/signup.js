import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function commonValidationsSignup(data) {
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
