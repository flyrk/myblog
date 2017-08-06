import axios from 'axios';
import { SET_POSTS } from './types';

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  };
}

export function getArchieves() {
  return dispatch => {
    return axios.get('/api/posts', {
      params: {
        archieves: true
      }
    });
  };
}
