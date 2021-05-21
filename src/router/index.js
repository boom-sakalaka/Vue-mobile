/*
 * @Author: your name
 * @Date: 2021-05-17 18:11:33
 * @LastEditTime: 2021-05-21 17:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiredLogin: false }
  },
  {
    path: "/about",
    name: "About",
    meta: { requiredLogin: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
    if (!store.getters["user/user"]) {
      next("About");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
