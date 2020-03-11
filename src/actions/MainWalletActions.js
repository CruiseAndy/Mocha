/* Types */
import {
  GET_MAIN_WALLET,
  GET_PAYMENTS,
  MAIN_WALLET_DEPOSIT,
  GET_MAIN_WALLET_WITHDRAW_LIMIT,
  MAIN_WALLET_WITHDRAW,
  GET_OFFLINE_DEPOSIT_INFO,
  TIMEOUT
} from './types';
import {
  API_GET_MAIN_WALLET,
  API_GET_PAYMENTS,
  API_GET_COMPANY_DEPOSIT_BANK_LIST,
  API_MAIN_WALLET_DEPOSIT,
  API_GET_MAIN_WALLET_WITHDRAW_LINIT,
  API_MAIN_WALLET_WITHDRAW,
  API_GET_OFFLINE_DEPOSIT_INFO
} from './api';
import { axiosIns } from './axiosIns';

export const getMainWalletBalance = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_GET_MAIN_WALLET,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GET_MAIN_WALLET,
					mainWalletRlt: res.data && res.data.content
				})
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
};

export const getPayments = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'get',
      url: API_GET_PAYMENTS
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

export const getDepositBankList = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: 'get',
      url: API_GET_COMPANY_DEPOSIT_BANK_LIST
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

export const mainWalletDeposit = (auth_token, data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'post',
        url: API_MAIN_WALLET_DEPOSIT,
        data,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: MAIN_WALLET_DEPOSIT,
					depositRlt: res.data && res.data.content
				})
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
};

export const getMainWalletWithdrawLimit = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_GET_MAIN_WALLET_WITHDRAW_LINIT,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GET_MAIN_WALLET_WITHDRAW_LIMIT,
					withdrawLimitRlt: res.data && res.data.content
				})
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
};

export const mainWalletWithdraw = (auth_token, data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'post',
        url: API_MAIN_WALLET_WITHDRAW,
        data,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: MAIN_WALLET_WITHDRAW,
					withdrawRlt: res.data && res.data.content
				})
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
};

export const getOfflineDepositInfo = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_GET_OFFLINE_DEPOSIT_INFO,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GET_OFFLINE_DEPOSIT_INFO,
					offlineDepositInfoRlt: res.data && res.data.content
				})
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
};