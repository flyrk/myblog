import express from 'express';
import Posts from '../models/posts';

let router = express.Router();

router.post('/', (req, res) => {
  const { title, categories, content, createTime } = req.body;
  const post = new Posts({
    title,
    categories,
    content,
    createTime
  });
  post.save(err => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ success: true });
    }
  });
});

router.get('/', (req, res) => {
  if (req.query.home) {
    Posts.find({}).limit(5).exec((err, posts) => {
      if (err) {
        res.status(500).json({ errors: err});
      } else {
        res.status(200).json(posts);
      }
    });
  } else if (req.query.archieves) {
      Posts.find({}).exec((err, posts) => {
        if (err) {
          res.status(500).json({ errors: err});
        } else {
          res.status(200).json(posts);
        }
      });
  } else if (req.query.posts) {
    console.log(req.query.title);
    
  }
});

export default router;
