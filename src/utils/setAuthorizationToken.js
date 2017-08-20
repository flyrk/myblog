import axios from 'axios';

/*
 * 设置登录用户的token，以便客户端识别当前用户 
*/
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;   // 设置自定义header
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
