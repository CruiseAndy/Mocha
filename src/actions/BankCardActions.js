/* Types */
import {
  GET_COMPANY_BANK_LIST,
  GET_USER_BANK_CARDS,
  ADD_BANK_CARD,
  TIMEOUT
} from "./types";
import { API_GET_COMPANY_BANK_LIST, API_GET_USER_BANK_CARDS, API_ADD_BANK_CARDS } from "./api";
import { axiosIns } from "./axiosIns";

export const getCompanyBankList = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: "get",
      url: API_GET_COMPANY_BANK_LIST
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

export const getUserBankCards = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_GET_USER_BANK_CARDS,
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        dispatch({
          type: GET_USER_BANK_CARDS,
          userBankCardsRlt: res.data && res.data.content
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

export const addUserBankCard = (auth_token, {
  user_name,
  bank_account,
  bank_code,
  sub_branch,
  province,
  area
}) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "post",
        url: API_GET_USER_BANK_CARDS,
        data: { user_name, bank_account, bank_code, sub_branch, province, area },
        headers: { "Auth-Token": auth_token }
      })
      .then(res => {
        dispatch({
          type: ADD_BANK_CARD,
          addUserBankCardsRlt: res.data && res.data.content
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