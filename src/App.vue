<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <side-bar></side-bar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/header";
import SideBar from "./components/sidebar";
// views文件夹放和路由相关的组件
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    AppHeader,
    SideBar
  }
};
</script>

<style>
</style>
