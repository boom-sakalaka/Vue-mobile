/*
 * @Author: your name
 * @Date: 2021-05-17 18:11:33
 * @LastEditTime: 2021-06-01 09:15:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { Toast } from "vant";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "Homepage" */ "../views/Homepage/index"),
    meta: { requiredLogin: true }
  },
  {
    path: "/login",
    name: "login",
    meta: { requiredLogin: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const { requiredLogin } = to.meta;
  if (requiredLogin) {
    if (!store.getters["user/getToken"]) {
      Toast("登录过期，请重新登录");
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
