import { SET_POSTS } from '../actions/types';

const initialState = {
  posts: []
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        posts: action.posts
      };
    default:
      return state;
  }
}
