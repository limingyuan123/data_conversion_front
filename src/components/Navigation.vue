<style>
#logo {
  position: absolute;
  width: 129px;
  height: 40px;
  z-index: 1;
  margin-top: 5px;
  margin-left: 2.5%;
  cursor: pointer;
}
#subcard {
  width: 280px;
  height: 100%;
  position: fixed;
  z-index: 2;
}
footer[data-v-0ef2f3f6] {
  background-color: #545c64;
  height: 60px;
  width: 100%;
  bottom: 0;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
}
.footerTop[data-v-0ef2f3f6] {
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 10px;
}
.footerBottom[data-v-0ef2f3f6] {
  text-align: center;
  color: white;
  font-size: 0.8em;
}
body {
  margin: 0px;
}
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
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" style="margin-left:20%"  @click="turnToOperation"
          >Operation center</el-menu-item
        >
        <el-submenu index="2">
          <template slot="title">My workspace</template>
          <el-menu-item index="2-1">option1</el-menu-item>
          <el-menu-item index="2-2">option2</el-menu-item>
          <el-menu-item index="2-3">option3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"
          ><a href="http://opengmsteam.com/" target="_blank"
            >About us</a
          ></el-menu-item
        >
        <el-menu-item index="4" style="margin-left: 35%;">
          <span slot="title" @click="turnToLogin">Login</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title" @click="turnToSign">Sign up</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
    <!-- end -->
    <div style="position: fixed;bottom: 0px;width: 100%;">
      <footer data-v-0ef2f3f6="">
        <h2 data-v-0ef2f3f6="" class="footerTop" style="margin-bottom: 0px;">
          <i data-v-0ef2f3f6="" style="font-size:initial">Open Geographic Modeling and Simulation</i>
        </h2>
        <p data-v-0ef2f3f6="" class="footerBottom"  style="margin-top: 1px;">
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
       activeIndex: "0",
      activeIndex2: "0"
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
    turnToLogin(){
      this.$router.replace('/login');
    },
    turnToSign(){
      this.$router.replace('/register');
    },
    turnToOperation(){
      this.$router.replace('/operation');
    }
  }
};
</script>
