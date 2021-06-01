/*
 * @Author: your name
 * @Date: 2021-05-22 10:47:29
 * @LastEditTime: 2021-06-01 09:17:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\services\user.js
 */
import { post } from "@/utils/request.js";
import { YUN_URL } from "./api.js";
// const yunApi = process.env.VUE_APP_YUN_URL;

// 用户登录
export const loginApi = param => {
  return post(`${YUN_URL}/login`, {
    ...param
  });
};

// 店员登录
export const clerkwebLoginApi = param => {
  return post(`${YUN_URL}/loginout`, {
    ...param
  });
};
