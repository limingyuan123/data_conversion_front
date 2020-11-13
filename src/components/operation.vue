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
.schema {
  margin-left: 2%;
  width: 45%;
  height: auto;
  float: left;
}
.tran {
  margin-right: 2%;
  width: 45%;
  height: auto;
  float: right;
}
</style>
<template>
  <div>
    <!-- 左侧菜单 -->
    <leftMenu></leftMenu>
    <!-- <el-card id="subcard" style="min-width: 60px">
      <div slot="header" class="clearfix text-center ">
        {{templateData.name}}
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
            <span slot="title">Mapping</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="showMapping1"
              >Service Items</el-menu-item
            >
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
    </el-card> -->

    <!-- home右侧内容 -->
    <div style="margin-left:30%" class="homePage">
      <el-col :span="4" style="padding:10px;height:350px;width:400px">
        <el-card shadow="hover">
          <img
            style="height:150px;width:350px"
            src="@/assets/images/designWorkflow.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Data Mapping</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" style="padding:10px;height:350px;width:400px">
        <el-card shadow="hover">
          <img
            style="height:150px;width:350px"
            src="@/assets/images/designWorkflow.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Data Refactor</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" style="padding:10px;height:350px;width:400px">
        <el-card shadow="hover">
          <img
            style="height:150px;width:350px"
            src="@/assets/images/designWorkflow.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Data Visualization</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" style="padding:10px;height:350px;width:400px">
        <el-card shadow="hover">
          <img
            style="height:150px;width:350px"
            src="@/assets/images/designWorkflow.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Data Sharing</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

    <!-- mapping右侧内容 -->
    <div style="margin-left:25%;display:none" class="mappingPage1">
      <el-card class="schema">
        schema:
        <pre v-if="xml" lang="xml">{{ xml }}</pre>
      </el-card>
      <el-card class="tran">
        transform method:
      </el-card>
    </div>
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
  created() {
    this.getData();
  },
  data() {
    return {
      activeIndex: "1",
      isCollapse: false,
      activeLeftIndex: "1",
      xml: "",
      oid:"",
      templateData:{},
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
      $(".mappingPage1").hide();
      $(".homePage").show();
    },
    showMapping1() {
      $(".homePage").hide();
      $(".mappingPage1").show();
    },
    getData(){
        let that = this;
        this.oid = this.$route.query.oid;
        this.axios
        .get("/dataConversion/data/getXmlData/" + this.oid)
        .then(res => {
          that.templateData = res.data.data;
          that.xml = that.templateData.xml;
        });
    }
  },
  mounted() {
  }
};
</script>
