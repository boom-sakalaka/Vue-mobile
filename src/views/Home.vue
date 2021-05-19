<!--
 * @Author: your name
 * @Date: 2021-05-17 18:11:33
 * @LastEditTime: 2021-05-19 11:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <van-button type="primary" block>块级元素</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />

    <van-cell title="单元格" icon="location-o" />

    <div class="test-viewport">测试转换</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { Button, Cell, CellGroup } from "vant";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="less" scoped>
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
</style>
