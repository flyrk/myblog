import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password_digest: String
});

export default mongoose.model('Users', usersSchema);
