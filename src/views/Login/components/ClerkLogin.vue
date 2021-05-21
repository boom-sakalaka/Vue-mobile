<!--
 * @Author: your name
 * @Date: 2021-05-21 17:05:40
 * @LastEditTime: 2021-05-21 17:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\views\Login\components\userLogin.vue
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
    <div style="margin: 16px;">
      <van-button square block type="info" size="small" native-type="submit"
        >店员提交</van-button
      >
    </div>
  </van-form>
</template>
<script>
// @ is an alias to /sr
import { Form, Field, Button } from "vant";
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
    onSubmit() {
      console.log(1);
    }
  }
};
</script>
