/*
 * @Author: your name
 * @Date: 2021-05-17 19:05:11
 * @LastEditTime: 2021-08-16 21:21:19
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vue-mobile\vue.config.js
 */
module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/yunapi/": {
        target: `127.0.0.1`, // 代理到 目标路径
        changeOrigin: true,
        pathRewrite: {
          // 修改路径数据
          // ['^' + process.env.VUE_APP_BASE_API]: '', // 举例 '^/api:""' 把路径中的/api字符串删除
        }
      },
      "/mapi/": {
        target: `127.0.0.1`, // 代理到 目标路径
        changeOrigin: true,
        pathRewrite: {
          // 修改路径数据
          // ['^' + process.env.VUE_APP_BASE_API]: '', // 举例 '^/api:""' 把路径中的/api字符串删除
        }
      }
    }
  },
  productionSourceMap: false
};
