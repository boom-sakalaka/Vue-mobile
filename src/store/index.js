/*
 * @Author: your name
 * @Date: 2021-05-17 18:11:33
 * @LastEditTime: 2021-05-28 10:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules/index";

Vue.use(Vuex);

export default new Vuex.Store({ modules });
