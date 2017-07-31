import express from 'express';
import { commonValidationsSignup } from '../shared/validations/signup';
import Users from '../models/users';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInputSignup(data, otherValidations) {
  let { errors } = otherValidations(data);

  return Promise.all([
    Users.find({ username: data.username }).exec((err, user) => {
      if (user.username === data.username ) { errors.username = '用户名已存在！'; }
    }),
    Users.find({ email: data.email }).exec((err, user) => {
      if (user.email === data.email) { errors.email = '邮箱已存在！'; }
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
      const password_digest = password;                          // bugs: cannot use bcrypt
      const users = new Users({
        username,
        email,
        password_digest
      });
      users.save((err) => {
        if (err) res.status(500).json({ error: err });
        res.json({ success: true });
      });
    } else {
      res.status(400).json(errors);
    }
  });
});

export default router;
