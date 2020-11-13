<style scoped>
@import "../assets/css/service.css";
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
            <el-menu-item index="2-1"  @click="showMapItem"
              >Service Items</el-menu-item
            >
            <el-menu-item index="2-2"  @click="showMapCreate"
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
            <el-menu-item index="3-1"  @click="showRefactorItem"
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
            <el-menu-item index="4-1"  @click="showVisualizationItem"
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

    <!-- homePage右侧内容 -->
    <router-view></router-view>
  </div>
</template>
<script>
import leftMenu from "./template/leftMenu.vue";
import $ from "jquery";
export default {
  name: "operation",
  components: {
    leftMenu
  },
  // created() {
  //   this.getData();
  // },
  data() {
    return {
      activeIndex: "1",
      isCollapse: false,
      activeLeftIndex: "1",
      oid: "",
      activeNavIndex: "2",
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
      this.$router.replace('/operationService/home')
    },
    showMapItem(){
      this.$router.replace('/operationService/mapServiceItem')
    },
    showMapCreate() {
     this.$router.replace('/operationService/createMapService')
    },
    showRefactorItem() {
       this.$router.replace('/operationService/refactorServiceItem')
    },
    showRefactorCreate() {
      this.$router.replace('/operationService/createRefactorService')
    },
    showVisualizationItem() {
         this.$router.replace('/operationService/visualServiceItem')
    },
    // invokeMapping() {
    //   let refLink = $(".invokeMap");
    //   for (let i = 0; i < refLink.length; i++) {
    //     if (event.currentTarget === refLink[i]) {
    //       let oid = this.mapService[i].oid;
    //       console.log(oid);
    //       // window.open("http://localhost:8899/datamap/use?id=" + oid);
    //       this.$router.push({
    //         name:"operationService",
    //         query:{
    //           type:"map",
    //           oid:oid
    //         }
    //       })
    //     }
    //   }
    // },
    // invokeRefactor() {
    //   let refLink = $(".invokeRefactor");
    //   for (let i = 0; i < refLink.length; i++) {
    //     if (event.currentTarget === refLink[i]) {
    //       let oid = this.refactorService[i].oid;
    //       console.log(oid);
    //       window.open("http://localhost:8899/refactor/detail?id=" + oid);
    //     }
    //   }
    // },
    // invokeVisualization() {
    //   let refLink = $(".invokeVisualization");
    //   for (let i = 0; i < refLink.length; i++) {
    //     if (event.currentTarget === refLink[i]) {
    //       let oid = this.visualService[i].oid;
    //       console.log(oid);
    //       window.open("http://localhost:8899/visualization/use?id=" + oid);
    //     }
    //   }
    // },
    // invokeCreateMap(){
    //     // window.open("http://localhost:8899/common/uploadservice?type=datamap");
    // },
    // invokeCreateRefactor(){
    //     window.open("http://localhost:8899/common/uploadservice?type=refactor")
    // },
  },
  mounted() {}
};
</script>
