/*
 * @Author: your name
 * @Date: 2021-05-17 19:05:11
 * @LastEditTime: 2021-06-01 09:18:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue-app\vue.config.js
 */
module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/yunapi/": {
        target: ``, // 代理到 目标路径
        changeOrigin: true,
        pathRewrite: {
          // 修改路径数据
          // ['^' + process.env.VUE_APP_BASE_API]: '', // 举例 '^/api:""' 把路径中的/api字符串删除
        }
      },
      "/mapi/": {
        target: ``, // 代理到 目标路径
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
