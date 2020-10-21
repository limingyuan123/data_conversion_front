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
  z-index: auto;
}
body {
  margin: 0px;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  margin-left: 22%;
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
            <el-menu-item index="1-1">Service Items</el-menu-item>
            <el-menu-item index="1-2">Instance</el-menu-item>
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

    <!-- 右侧内容 -->
    <div style="margin-left: 22%;margin-right:3%">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <img src="@/assets/images/designWorkflow.png" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <img src="@/assets/images/designWorkflow.png" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <img src="@/assets/images/designWorkflow.png" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div>
              <i
                class="el-icon-plus avatar-uploader-icon" @click="turnToMapping"
              ></i>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      activeIndex2: "1",
      imageUrl: ""
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
    turnToMapping(){
      this.$router.replace('/mapping');
    }
  }
};
</script>
