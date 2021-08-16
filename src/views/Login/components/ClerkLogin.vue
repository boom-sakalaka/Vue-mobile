<!--
 * @Author: gzh
 * @Date: 2021-05-21 17:05:40
 * @LastEditTime: 2021-08-16 21:22:44
 * @LastEditors: GZH
 * @Description: 店员登录
 * @FilePath: \Vue-mobile\src\views\Login\components\ClerkLogin.vue
-->
<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
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
        >店员提交</van-button
      >
    </div>
  </van-form>
</template>
<script>
// @ is an alias to /sr
import { Form, Field, Button, Toast } from "vant";
import { clerkwebLoginApi } from "@/services/userApi";
import { mapMutations } from "vuex";
export default {
  name: "ClerkLogin",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations("user", ["setToken", "setUser"]),
    onSubmit() {
      clerkwebLoginApi({ username: this.username, password: this.password })
        .then(res => {
          // 登录成功 跳转
          if (+res.code === 200) {
            const {
              datas,
              datas: { key = "" }
            } = res;
            this.setToken(key);
            this.setUser(datas);
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
