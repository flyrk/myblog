import axios from 'axios';

export function getArchieves() {
  return dispatch => {
    return axios.get('/api/posts', {
      params: {
        archieves: true
      }
    });
  };
}
