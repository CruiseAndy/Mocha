
/* Types */
import { TIMEOUT } from './types';
import { API_USER_LOGIN, API_USER_LOGOUT } from './api';
import { axiosIns } from './axiosIns';

export const userLogin = (account, password) => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'post',
      url: API_USER_LOGIN,
      data: { account, password }
    })
    .then( res => {
      resolve(res.data && res.data.content);
    })
    .catch( error => {
      if (error.request && error.request.readyState == 4 && error.request.status == 0) {
        reject(TIMEOUT);
      }
      else {
        reject(error.response && error.response.data);
      }
    });
  });
};

export const userLogout = auth_token => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'delete',
      url: API_USER_LOGOUT,
      headers: { "Auth-Token": auth_token }
    })
    .then( res => {
      resolve(res.data && res.data.content);
    })
    .catch( error => {
      if (error.request && error.request.readyState == 4 && error.request.status == 0) {
        reject(TIMEOUT);
      }
      else {
        reject(error.response && error.response.data);
      }
    });
  });
};