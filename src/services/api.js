/*
 * @Author: your name
 * @Date: 2021-05-22 11:12:39
 * @LastEditTime: 2021-05-28 16:44:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\utils\api.js
 */
// 跨域代理前缀
const API_PROXY_PREFIX = "/mapi";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_BASE_URL
    : API_PROXY_PREFIX;

const YUU_API = "/yunapi";
const YUN_URL =
  process.env.NODE_ENV === "production" ? process.env.VUE_APP_YUN_URL : YUU_API;

module.exports = {
  BASE_URL,
  YUN_URL
};
