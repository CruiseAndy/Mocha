/* Types */
import {
  GET_VALID_BET_HISTORY,
  GET_ACCOUNT_HISTORY,
  GET_BONUSES_HISTORY,
  GET_BET_HISTORY,
  TIMEOUT
} from "./types";
import {
  API_GET_VALID_BET_HISTORY,
  API_GET_ACCOUNT_HISTORY,
  API_GET_BONUSES_HISTORY,
  API_GET_BET_HISTORY
} from "./api";
import { axiosIns } from "./axiosIns"

// ValidBetHistroy
export const getValidBetHistroy = (auth_token, params) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_GET_VALID_BET_HISTORY,
        params,
        headers: {
          "Auth-Token": auth_token,
          locale: 'th'
        }
      })
      .then(res => {
        dispatch({
          type: GET_VALID_BET_HISTORY,
          data: res.data && res.data.content
        });
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

// AccountHistroy
export const getAccountHistroy = (auth_token, params) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_GET_ACCOUNT_HISTORY,
        params,
        headers: {
          "Auth-Token": auth_token,
          locale: 'th'
        }
      })
      .then(res => {
        dispatch({
          type: GET_ACCOUNT_HISTORY,
          data: res.data && res.data.content
        });
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

// BonusesHistroy
export const getBonusesHistroy = (auth_token, params) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_GET_BONUSES_HISTORY,
        params,
        headers: {
          "Auth-Token": auth_token,
          locale: 'th'
        }
      })
      .then(res => {
        dispatch({
          type: GET_BONUSES_HISTORY,
          data: res.data && res.data.content
        });
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

// BonusesHistroy
export const getBetHistroy = (auth_token, params) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_GET_BET_HISTORY,
        params,
        headers: {
          "Auth-Token": auth_token,
          locale: 'th'
        }
      })
      .then(res => {
        dispatch({
          type: GET_BET_HISTORY,
          data: res.data && res.data.content
        });
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