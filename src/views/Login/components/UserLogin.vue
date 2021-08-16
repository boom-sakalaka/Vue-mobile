<!--
 * @Author: gzh
 * @Date: 2021-05-21 17:05:40
 * @LastEditTime: 2021-08-16 21:22:40
 * @LastEditors: GZH
 * @Description: 用户登录
 * @FilePath: \Vue-mobile\src\views\Login\components\UserLogin.vue
-->
<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="userName"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin-top: 16px;">
      <van-button square block type="info" size="small" native-type="submit"
        >用户提交</van-button
      >
    </div>
  </van-form>
</template>
<script>
// @ is an alias to /src
import { Form, Field, Button, Toast } from "vant";
import { loginApi } from "@/services/userApi";
import { mapMutations } from "vuex";

export default {
  name: "UserLogin",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations("user", ["setToken", "setUser"]),
    onSubmit() {
      loginApi({ userName: this.userName, password: this.password })
        .then(res => {
          // 登录成功 跳转
          if (res.status === "ok") {
            const { ukey = "" } = res;
            this.setToken(ukey);
            this.setUser(res);
            this.$router.push("/");
          }
        })
        .catch(e => {
          console.error(e);
          Toast(e.message || "");
        });
    }
  }
};
</script>
