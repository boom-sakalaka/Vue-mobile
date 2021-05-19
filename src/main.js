/*
 * @Author: your name
 * @Date: 2021-05-17 18:11:33
 * @LastEditTime: 2021-05-19 09:57:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

console.log(process.env.VUE_APP_BASE_URL);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
