const DOMAINS = "https://admin.fatcatbet.net/api";
const TEST_DOMAINS1 = "https://admin.1a2b333.com/api";
// const TEST_DOMAINS2 = "https://reg-backend-staging.1a2b333.com/api";

/* Tools */
import axios from "axios";

/**
 * zh-TW => '繁體中文'
 * zh-CN => '简体中文'
 * en    => 'English'
 * es    => 'Español'
 * ja    => '日本語'
 * th    => '泰語'
 * vi    => '越語'
 */

export const axios_config = {
  baseURL: TEST_DOMAINS1,
  timeout: 10000,
  headers: {
    company: "fatcat",
    "Accept-Version": "v2",
    locale: "en"
  }
};

export const axiosIns = axios.create(axios_config);