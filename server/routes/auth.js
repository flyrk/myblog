import express from 'express';
import Users from '../models/users';
import jwt from 'jsonwebtoken';
import config from '../config';
import bcrypt from 'bcrypt';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  Users.findOne({ $or: [
    { username: identifier },
    { email: identifier }
  ] }).exec((err, user) => {
    if (err) {
      res.status(401).json({ form: '无法识别的用户 ' });
    } else {
      if (user) {
        bcrypt.compare(password, user.password_digest).then(function(res) {
          const token = jwt.sign({
            id: user.id,
            username: user.username
          }, config.jwtSecret);
          res.json({ token });    // 创建token以便客户端识别用户
        }).catch((err) => {
          res.status(401).json({ form: '密码错误 ' });
        });
      } else {
        res.status(401).json({ form: '无法识别的用户'});
      }
    }
  });
});

export default router;
