/* Types */
import { GET_USER_PROFILE, SET_USER_PROFILE, TIMEOUT } from "./types";
import { API_USER_PROFILE } from "./api";
import { axiosIns } from "./axiosIns"

export const getUserProfile = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_USER_PROFILE,
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        dispatch({
          type: GET_USER_PROFILE,
          userProfileRlt: res.data && res.data.content
        })
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

export const setUserProfile = ({ auth_token, name, qq, wechat, birth_day, id_number }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "put",
        url: API_USER_PROFILE,
        params: { name, qq, wechat, birth_day, id_number },
        headers: { "Auth-Token": auth_token }
      })
        .then(res => {
          dispatch({
            type: SET_USER_PROFILE,
            setUserProfileRlt: res.data && res.data.content
          })
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