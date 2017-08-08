import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import posts from './reducers/posts';

export default combineReducers({
  auth,
  posts,
  flashMessages
});
