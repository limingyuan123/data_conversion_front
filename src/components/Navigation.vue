<style>
@import '../assets/css/navigation.css';
</style>
<template>
  <div>
    <!-- menu -->
    <img
      src="@/assets/images/OGMS.png"
      id="logo"
      class="pic"
      style="cursor:pointer;"
    />
    <!-- header -->
    <div>
      <el-menu
        :default-active="activeNavIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#135571"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" style="margin-left:20%" @click="turnToHome"
          >Home</el-menu-item
        >
        <el-menu-item index="2" @click="turnToProject"
          >Project</el-menu-item
        >
        <el-menu-item index="3" @click="turnToService"
          >Service</el-menu-item
        >
        <el-menu-item index="4" @click="turnToTemplate"
          >Code Template</el-menu-item
        >
        <el-menu-item index="5" @click="turnToHelp"
          >Help</el-menu-item
        >
        <!-- <el-submenu index="4">
          <template slot="title">My workspace</template>
          <el-menu-item index="4-1">option1</el-menu-item>
          <el-menu-item index="4-2">option2</el-menu-item>
          <el-menu-item index="4-3">option3</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="6"
          ><a href="http://opengmsteam.com/" target="_blank"
            >About us</a
          ></el-menu-item
        >
        <el-menu-item index="7" style="margin-left: 25%;">
          <span slot="title" @click="turnToLogin">Login</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span slot="title" @click="turnToSign">Sign up</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
    <!-- end -->
    <div id="footer" class="fixed-bottom">
      <footer data-v-0ef2f3f6="" style="backgroud:#135571;">
        <h2 data-v-0ef2f3f6="" class="footerTop" style="margin-bottom: 0px;">
          <i data-v-0ef2f3f6="" style="font-size:initial"
            >Open Geographic Modeling and Simulation</i
          >
        </h2>
        <p data-v-0ef2f3f6="" class="footerBottom" style="margin-top: 1px;">
          Copyright © 2013-2020 OpenGMS. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      activeNavIndex: "",
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    turnToHome() {
      this.$router.replace("/home");
    },
    turnToLogin() {
      this.$router.replace("/login");
    },
    turnToSign() {
      this.$router.replace("/register");
    },
    turnToTemplate() {
      this.$router.replace("/template");
    },
    turnToService(){
      this.$router.replace("/service");
    },
    turnToProject(){
      this.$router.replace("/project");
    },
    turnToHelp(){
      alert("hello im help sir");
    }
  }
};
</script>
