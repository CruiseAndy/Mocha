/* Types */
import {
  USER_SIGNUP,
  TIMEOUT
} from './types';
import { API_USER_SIGNUP } from './api';
import { axiosIns } from './axiosIns';

export const userSignup = data => {
  console.log(data);
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'post',
      url: API_USER_SIGNUP,
      data,
    })
    .then( res => {
      console.log(res);
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