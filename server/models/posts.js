import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  categories: String,
  content: String,
  createTime: Object
});

export default mongoose.model('Posts', postsSchema);
