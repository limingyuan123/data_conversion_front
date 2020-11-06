<style>
#subcard {
  width: 280px;
  height: 90%;
  float: left;
  position: absolute;
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
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
<template>
  <div>
    <!-- 左侧菜单 -->
    <el-card id="subcard" style="min-width: 60px">
      <div slot="header" class="clearfix text-center ">
        {{ mapService.name }}
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

    <!-- homePage右侧内容 -->
    <div style="margin-left:30%" class="homePage">
      <el-col :span="4" style="padding:10px;height:350px;width:400px">
        <el-card shadow="hover">
          <img
            style="height:150px;width:350px"
            src="@/assets/logo.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Mapping Service</span>
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
            src="@/assets/logo.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Refactor Service</span>
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
            src="@/assets/logo.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Visualization Service</span>
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
            src="@/assets/logo.png"
            @click="dialogVisible = true"
          />
          <div style="padding: 14px;width:170px;height:80px">
            <span>Sharing Service</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

    <!-- Operation右侧内容 -->
    <!-- mapping service items -->
    <div style="margin-left:30%" class="serviceMapItem">
      <div v-for="(map, index) in mapService" :key="index">
        <el-col :span="8" style="padding:10px;height:350px;width:230px">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/logo.png" class="image" />
            <div style="padding: 14px;">
              <span>{{ map.name }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Detail</el-button>
                <el-button type="text" class="invokeMap" @click="invokeMapping"
                  >Invoke</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>

    <!-- createMappingService -->
    <div style="margin-left:30%;display:none" class="createMapService">
      <el-col
        :span="8"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/logo.png" class="image" />
          <div style="padding: 14px;">
            <span>createMapService</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Detail</el-button>
              <el-button type="text" class="createMap" @click="invokeCreateMap">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

    <!-- refactor service items -->
    <div style="margin-left:30%;display:none" class="serviceRefactorItem">
      <div v-for="(refactor, index) in refactorService" :key="index">
        <el-col :span="8" style="padding:10px;height:350px;width:230px">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/logo.png" class="image" />
            <div style="padding: 14px;">
              <span>{{ refactor.name }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Detail</el-button>
                <el-button
                  type="text"
                  class="invokeRefactor"
                  @click="invokeRefactor"
                  >Invoke</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>

    <!-- createRefactorService -->
    <div style="margin-left:30%;display:none" class="createRefactorService">
      <el-col
        :span="8"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/logo.png" class="image" />
          <div style="padding: 14px;">
            <span>createRefactorService</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Detail</el-button>
              <el-button type="text" class="createRefactor" @click="invokeCreateRefactor">Invoke</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

    <!-- visualization service items -->
    <div style="margin-left:30%;display:none" class="serviceVisualizationItem">
      <div v-for="(visual, index) in visualService" :key="index">
        <el-col :span="8" style="padding:10px;height:350px;width:230px">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/logo.png" class="image" />
            <div style="padding: 14px;">
              <span>{{ visual.name }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Detail</el-button>
                <el-button
                  type="text"
                  class="invokeVisualization"
                  @click="invokeVisualization"
                  >Invoke</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>
    <!-- </el-row> -->
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
      oid: "",
      activeNavIndex: "2",
      mapService: {},
      refactorService: {},
      visualService: {}
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
    getData() {
      let that = this;
      this.axios.get("/dataConversion/data/getDataMap/map").then(res => {
        that.mapService = res.data.data;
        console.log(that.mapService);
      });
      this.axios.get("/dataConversion/data/getDataMap/refactor").then(res => {
        that.refactorService = res.data.data;
        console.log(that.refactorService);
      });
      this.axios.get("/dataConversion/data/getDataMap/visual").then(res => {
        that.visualService = res.data.data;
        console.log(that.visualService);
      });
    },
    invokeMapping() {
      let refLink = $(".invokeMap");
      for (let i = 0; i < refLink.length; i++) {
        if (event.currentTarget === refLink[i]) {
          let oid = this.mapService[i].oid;
          console.log(oid);
          window.open("http://localhost:8899/datamap/use?id=" + oid);
        }
      }
    },
    invokeRefactor() {
      let refLink = $(".invokeRefactor");
      for (let i = 0; i < refLink.length; i++) {
        if (event.currentTarget === refLink[i]) {
          let oid = this.refactorService[i].oid;
          console.log(oid);
          window.open("http://localhost:8899/refactor/detail?id=" + oid);
        }
      }
    },
    invokeVisualization() {
      let refLink = $(".invokeVisualization");
      for (let i = 0; i < refLink.length; i++) {
        if (event.currentTarget === refLink[i]) {
          let oid = this.visualService[i].oid;
          console.log(oid);
          window.open("http://localhost:8899/visualization/use?id=" + oid);
        }
      }
    },
    invokeCreateMap(){
        window.open("http://localhost:8899/common/uploadservice?type=datamap");
    },
    invokeCreateRefactor(){
        window.open("http://localhost:8899/common/uploadservice?type=refactor")
    },
  },
  mounted() {}
};
</script>
