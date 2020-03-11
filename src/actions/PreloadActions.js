import { API_PRELOAD, API_COMMUNITY_QA } from './api';
import { axiosIns } from './axiosIns';

export const getPreload = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'get',
      url: API_PRELOAD
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

export const getQA = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'get',
      url: API_COMMUNITY_QA
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