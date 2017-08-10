import axios from 'axios';
import { SET_POSTS } from './types';

export function postRequest(data) {
  return dispatch => {
    return axios.post('/api/posts', data);
  }
}

export function postResponse() {
  return dispatch => {
    return axios.get('/api/posts');
  }
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  };
}
