<!--
 * @Author: your name
 * @Date: 2021-05-21 16:32:41
 * @LastEditTime: 2021-05-21 17:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\views\login.vue
-->
<template>
  <div class="login-conter">
    <div class="login-box">
      <van-tabs v-model="active">
        <van-tab title="用户登录">
          <user-login></user-login>
        </van-tab>
        <van-tab title="店员登录">
          <clerk-login></clerk-login>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /sr
import { Tabs, Tab } from "vant";
import ClerkLogin from "./components/ClerkLogin";
import UserLogin from "./components/UserLogin";
export default {
  name: "Login",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    ClerkLogin,
    UserLogin
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
.login-conter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 300px;
    height: auto;
  }
}
</style>
