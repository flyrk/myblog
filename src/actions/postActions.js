import axios from 'axios';

export default function postRequest(data) {
  return dispatch => {
    return axios.post('/api/posts', data);
  }
}
