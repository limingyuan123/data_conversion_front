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
body{
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
    <!-- head头 -->
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
        <el-menu-item index="1" style="margin-left:20%">Operation center</el-menu-item>
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
          <span slot="title">Login</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">Sign up</span>
        </el-menu-item>

      </el-menu>
    </div>
    <!-- 左侧菜单 -->
    <el-card id="subcard" style="min-width: 60px">
      <div slot="header" class="clearfix text-center ">
        <img th:src="@/assets/images/OGMS.png" id="header_image" />
      </div>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="border: aliceblue;"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Mapping</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">service</el-menu-item>
            <el-menu-item index="1-2">service1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Refactor</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">Visualization</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      activeIndex2: "1"
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
    }
  }
};
</script>