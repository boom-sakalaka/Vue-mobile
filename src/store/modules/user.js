/*
 * @Author: your name
 * @Date: 2021-05-19 10:03:01
 * @LastEditTime: 2021-05-28 14:09:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\store\modules\user.js
 */
const user = {
  namespaced: true,
  state: {
    userInfo: {},
    token: null
  },
  getters: {
    getUserInfo: state => {
      if (!state.userInfo) {
        try {
          const USERINFO = localStorage.getItem(process.env.VUE_APP_USERINFO);
          state.userInfo = JSON.parse(USERINFO);
        } catch (e) {
          console.error(e);
        }
      }
      return state.userInfo;
    },
    getToken: state => {
      if (!state.token) {
        try {
          const TOKEN = localStorage.getItem(process.env.VUE_APP_USERTOKEN);
          state.token = JSON.parse(TOKEN);
        } catch (e) {
          console.error(e);
        }
      }
      return state.token;
    }
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo;
      localStorage.setItem(
        process.env.VUE_APP_USERINFO,
        JSON.stringify(userInfo)
      );
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(
        process.env.VUE_APP_USERTOKEN,
        JSON.stringify(token)
      );
    }
  },
  actions: {},
  modules: {}
};

export default user;
