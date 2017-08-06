import { GET_POSTS } from '../actions/types';

const initialState = {
  title: '',
  categories: '',
  content: '',
  createTime: {}
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        title: action.title,
        categories: action.categories,
        content: action.content,
        createTime: action.createTime
      };
    default:
      return state;
  }
}
