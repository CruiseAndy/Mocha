/* Types */
import {
  GET_BONUSES_LIST,
  TIMEOUT
} from "./types";
import {
  API_BONUSES,
  API_BONUSES_INFO,
  API_BONUSES_APPLY,
  API_COMMUNITY_BONUSES,
  API_COMMUNITY_BONUSES_INFO
} from "./api";
import { axiosIns } from "./axiosIns";

export const getCommunityPromotionsList = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: "get",
      url: API_COMMUNITY_BONUSES
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

export const getCommunityPromotionDetail = bonus_id => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_COMMUNITY_BONUSES_INFO(bonus_id)
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

// get all bonuses
export const getPromotionsList = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_BONUSES,
        headers: { "Auth-Token": auth_token }
      })
        .then(res => {
          dispatch({
            type: GET_BONUSES_LIST,
            promotionListRlt: res.data && res.data.content
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

export const getPromotionDetail = ( auth_token, bonus_id ) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "get",
        url: API_BONUSES_INFO(bonus_id),
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


export const promotionApply = (auth_token, bonus_id ) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: "post",
        url: API_BONUSES_APPLY(bonus_id),
        data: {
          bonus_id
        },
        headers: {
          "Auth-Token": auth_token
        }
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