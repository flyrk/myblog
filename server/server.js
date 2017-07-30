import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/myblog';

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  app.listen(8080, () => console.log('Server is running on port 8080'));
});
