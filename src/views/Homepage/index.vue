<!--
 * @Author: your name
 * @Date: 2021-05-21 16:32:41
 * @LastEditTime: 2021-06-01 09:14:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\views\login.vue
-->
<template>
  <div class="homePage-conter">
    <div class="menu-conter"></div>
    <div class="logout-box" @click="logout">
      <van-icon name="revoke" />退出登录
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "HomePage",
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.setToken();
      this.setUser();
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less">
.homePage-conter {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../assets/home_bg.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .menu-conter {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-wrap: nowrap;
    background-color: rgba(15, 20, 35, 0.8);
    .menu-item {
      padding: 20px;
      text-align: center;
      color: #fff;
      font-size: 15px;
      .menu-icon {
        font-size: 50px;
      }
    }
  }
  .logout-box {
    position: absolute;
    font-size: 20px;
    color: #fff;
    right: 30px;
    top: 10px;
  }
}
</style>
