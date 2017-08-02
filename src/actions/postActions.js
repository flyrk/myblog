import axios from 'axios';

export function postRequest(data) {
  return dispatch => {
    return axios.post('/api/posts', data);
  }
}

export function homePostRequest() {
  return dispatch => {
    return axios.get('/api/posts', {
      params: {
        home: true
      }
    });
  }
}
