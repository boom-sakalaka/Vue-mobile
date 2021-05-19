/*
 * @Author: your name
 * @Date: 2021-05-19 10:03:01
 * @LastEditTime: 2021-05-19 16:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\store\user.js
 */
const user = {
  namespaced: true,
  state: {
    user: ""
  },
  getters: {
    user: state => {
      if (!state.user) {
        try {
          const userInfo = localStorage.getItem("userinfo");
          state.user = JSON.parse(userInfo);
        } catch (e) {
          console.error(e);
        }
      }
      return state.user
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
      localStorage.setItem(process.env.VUE_APP_USER_KEY, JSON.stringify(user));
    }
  },
  actions: {},
  modules: {}
};

export default user;
