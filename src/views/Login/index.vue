<!--
 * @Author: your name
 * @Date: 2021-05-21 16:32:41
 * @LastEditTime: 2021-05-28 14:51:51
 * @LastEditors: Please set LastEditors
 * @Description: 登录页
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
  background: linear-gradient(307deg, #246066, #242866);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 6s ease infinite;
  -moz-animation: AnimationName 6s ease infinite;
  animation: AnimationName 6s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 29%;
    }
    50% {
      background-position: 100% 72%;
    }
    100% {
      background-position: 0% 29%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 29%;
    }
    50% {
      background-position: 100% 72%;
    }
    100% {
      background-position: 0% 29%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 29%;
    }
    50% {
      background-position: 100% 72%;
    }
    100% {
      background-position: 0% 29%;
    }
  }
  .login-box {
    width: 300px;
    height: auto;
    opacity: 0.7;
  }
}
</style>
