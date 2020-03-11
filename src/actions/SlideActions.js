/* Types */
import { TIMEOUT } from './types';
import { API_GET_CAROUSEL } from './api';
import { axiosIns } from "./axiosIns";

export const getCarousel = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'get',
      url: API_GET_CAROUSEL
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