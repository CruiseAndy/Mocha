/* Types */
import {
  GET_USER_NOTIFICATION,
  CHANGE_MSG_STATUS,
  TIMEOUT
} from "./types";
import { API_USER_NOTIFICATION, API_USER_NOTIFICATION_UPDATE } from "./api";
import { axiosIns } from "../actions/axiosIns";

export const getUserMsg = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_USER_NOTIFICATION,
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        dispatch({
          type: GET_USER_NOTIFICATION,
          messageRlt: res.data && res.data.content
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

export const changeMsgStatus = ({ auth_token, id }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "put",
        url: API_USER_NOTIFICATION_UPDATE(id),
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        dispatch({
          type: CHANGE_MSG_STATUS,
          messageRlt: res.data && res.data.content
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