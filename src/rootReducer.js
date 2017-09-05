import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import posts from './reducers/posts';
import comments from './reducers/comments';

export default combineReducers({
  auth,
  posts,
  comments,
  flashMessages
});
