import { TIMEOUT } from "./types";
import { API_NEWS } from "./api";
import { axiosIns } from "./axiosIns"

export const getNews = () => {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: "get",
      url: API_NEWS
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
