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
        <img th:src="@/assets/images/OGMS.png" id="header_image" />
      </div>
      <el-menu
        :default-active="activeLeftIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="border: aliceblue;"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-magic-stick"></i>
            <span slot="title">Mapping</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">Service Items</el-menu-item>
            <el-menu-item index="2-2">Instance</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-thumb"></i>
          <span slot="title">Refactor</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-view"></i>
          <span slot="title">Visualization</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-paperclip"></i>
          <span slot="title">Sharing</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
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
    }
  }
};
</script>
