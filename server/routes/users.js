import express from 'express';
import { commonValidationsSignup } from '../shared/validations/signup';
import Users from '../models/users';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';

let router = express.Router();

function validateInputSignup(data, otherValidations) {
  let { errors } = otherValidations(data);

  return Promise.all([
    Users.find({ username: data.username }).exec((err, user) => { // 这里返回的user是一个数组，user[0]才是对象
      if (user[0].username === data.username ) {
        errors.username = '用户名已存在！';
      }
    }),
    Users.find({ email: data.email }).exec((err, user) => {
      if (user[0].email === data.email) {
        errors.email = '邮箱已存在！';
      }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

router.post('/', (req, res, next) => {
  validateInputSignup(req.body, commonValidationsSignup).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, password, email } = req.body;
      const saltRounds = 10;
      let password_digest = '';
      bcrypt.hash(password, saltRounds).then((err, hash) => {
        if (err) {
          password_digest = password;
        } else {
          password_digest = hash;
        }

      });
      const users = new Users({
        username,
        email,
        password_digest
      });
      users.save((err) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json({ success: true });
        }

      });
    } else {
      res.status(400).json(errors);
    }
  });
});

export default router;
