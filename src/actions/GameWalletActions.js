/* Types */
import {
  GET_ALL_GAME_WALLET_SUMMARY,
  GET_GAME_WALLET,
  TRANSFER_ALL_WALLET,
  GAME_DEPOSIT,
  GAME_WITHDRAW,
  TIMEOUT
} from './types';
import {
  API_GAME_WALLET,
  API_SINGLE_GAMES_WALLETS,
  API_TRANSFER_ALL_WALLET,
  API_GAME_WITHDRAW,
  API_GAME_DEPOSIT
} from './api';
import { axiosIns } from "./axiosIns"

export const getAllGameWalletSummary = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_GAME_WALLET,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GET_ALL_GAME_WALLET_SUMMARY,
					gameWalletSummaryRlt: res.data && res.data.content
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

export const getGameWallet = (auth_token, walletId) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_SINGLE_GAMES_WALLETS(walletId),
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GET_GAME_WALLET,
					gameWalletRlt: res.data && res.data.content
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

export const transferAllWallet = auth_token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_TRANSFER_ALL_WALLET,
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: TRANSFER_ALL_WALLET,
					transferAllRlt: res.data && res.data.content
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

export const getGameTransferRecord = (auth_token, data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'get',
        url: API_GET_GAME_TRANSFER_RECORD,
        params: { ...data },
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: TRANSFER_ALL_WALLET,
					transferAllRlt: res.data && res.data.content
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

export const gameDeposit = (auth_token, amount, wallet_id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'post',
        url: API_GAME_DEPOSIT(wallet_id),
        data: { amount },
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GAME_DEPOSIT,
					gameDepositRlt: res.data && res.data.content
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

export const gameWithdraw = (auth_token, amount, wallet_id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axiosIns({
        method: 'post',
        url: API_GAME_WITHDRAW(wallet_id),
        data: { amount },
        headers: { "Auth-Token": auth_token }
      })
      .then( res => {
        dispatch({
					type: GAME_WITHDRAW,
					gemeWithdrawRlt: res.data && res.data.content
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