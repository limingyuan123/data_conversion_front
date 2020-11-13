<style scoped>
#subcard {
  width: 280px;
  height: 100%;
  position: fixed;
  z-index: auto;
}
body {
  margin: 0px;
}
</style>
<template>
  <div>
    <!-- 左侧菜单 -->
    <el-card id="subcard" style="min-width: 60px">
      <div slot="header" class="clearfix text-center ">
        <!-- {{ mapService.name }} -->
      </div>
      <el-menu
        :default-active="activeLeftIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="border: aliceblue;"
      >
        <el-menu-item index="1" @click="showHome">
          <i class="el-icon-menu"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-magic-stick"></i>
            <span slot="title">Mapping Service</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="showMapItem"
              >Service Items</el-menu-item
            >
            <el-menu-item index="2-2" @click="showMapCreate"
              >Create Service</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-thumb"></i>
            <span slot="title">Refactor Service</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="showRefactorItem"
              >Service Items</el-menu-item
            >
            <el-menu-item index="3-2" @click="showRefactorCreate"
              >Create Service</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-view"></i>
            <span slot="title">Visualization Service</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="showVisualizationItem"
              >Service Items</el-menu-item
            >
            <!-- <el-menu-item index="4-2">Create Service</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="5">
          <i class="el-icon-paperclip"></i>
          <span slot="title">Sharing</span>
        </el-menu-item> -->
      </el-menu>
    </el-card>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "leftMenu",
  data() {
    return {
      isCollapse: false,
      activeLeftIndex: '1',
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
    showHome() {
      $(".serviceMapItem").hide();
      $(".createMapService").hide();
      $(".serviceRefactorItem").hide();
      $(".createRefactorService").hide();
      $(".serviceVisualizationItem").hide();
      $(".homePage").show();
    },
    showMapItem() {
      $(".serviceMapItem").show();
      $(".createMapService").hide();
      $(".serviceRefactorItem").hide();
      $(".createRefactorService").hide();
      $(".serviceVisualizationItem").hide();
      $(".homePage").hide();
    },
    showMapCreate() {
      $(".serviceMapItem").hide();
      $(".createMapService").show();
      $(".serviceRefactorItem").hide();
      $(".createRefactorService").hide();
      $(".serviceVisualizationItem").hide();
      $(".homePage").hide();
    },
    showRefactorItem() {
      $(".serviceMapItem").hide();
      $(".createMapService").hide();
      $(".serviceRefactorItem").show();
      $(".createRefactorService").hide();
      $(".serviceVisualizationItem").hide();
      $(".homePage").hide();
    },
    showRefactorCreate() {
      $(".serviceMapItem").hide();
      $(".createMapService").hide();
      $(".serviceRefactorItem").hide();
      $(".createRefactorService").show();
      $(".serviceVisualizationItem").hide();
      $(".homePage").hide();
    },
    showVisualizationItem() {
      $(".serviceMapItem").hide();
      $(".createMapService").hide();
      $(".serviceRefactorItem").hide();
      $(".createRefactorService").hide();
      $(".serviceVisualizationItem").show();
      $(".homePage").hide();
    },
  }
};
</script>
