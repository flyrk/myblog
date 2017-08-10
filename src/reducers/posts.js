import { SET_POSTS } from '../actions/types';

const initialState = [];
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POSTS:
      return [
        ...action.posts
      ];
    default:
      return state;
  }
}
