import { SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {    // 注销当前账户
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(userData) {
  return dispatch => {
    return axios.post('/api/auth', userData).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);    // 设置localStorage
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt_decode(token)));
    });
  };
}
