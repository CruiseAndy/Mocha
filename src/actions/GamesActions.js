/* Types */
import { GET_GAMES_INFO, TIMEOUT } from './types';
import { API_COMMUNITY_GAMES } from './api';
import { axiosIns } from './axiosIns';

export const getGamesInfo = category => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: "get",
      url: API_COMMUNITY_GAMES,
      params: { category, is_mobile: false }
    })
    .then(res => {
      resolve(res.data && res.data.content);
    })
    .catch(error => {
      if (error.request && error.request.readyState == 4 && error.request.status == 0) {
        reject(TIMEOUT);
      }
      else {
        reject(error.response && error.response.data);
      }
    });
  });
};

export const getGameLogInUrl = ( auth_token, game_url ) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: game_url,
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        resolve(res.data && res.data.content);
      })
      .catch(error => {
        if (error.request && error.request.readyState == 4 && error.request.status == 0) {
          reject(TIMEOUT);
        }
        else {
          reject(error.response && error.response.data);
        }
      });
    });
  };
};