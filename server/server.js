import express from 'express';
import path from 'path';
import pkg from './package';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import users from './routes/users';
import auth from './routes/auth';

const app = express();
const dbUrl = 'mongodb://localhost/myblog';

mongoose.connect(dbUrl);
mongoose.connection.on('error', function() {
console.info('Error: Could not connect to MongoDB, Did you forget to run `Mongod`?');
});

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * POST /api/users
 * add user to database
 */
app.use('/api/users', users);

/*
 * POST /api/auth
 * sign in user
 */
app.use('/api/auth', auth);

// 监听端口，启动程序
app.listen(8080, () => {
  console.log(`${pkg.name} listening on port 8080`);
});
