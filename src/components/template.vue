<style scoped>
@import "../assets/css/template.css";
@import "../assets/css/home.css";
</style>
<template>
  <div id="container">
    <el-card>
      <el-input
        v-model="input"
        placeholder="Enter Template Name"
        style="position:absolute;width:40%"
      ></el-input>
      <el-button type="primary" style="margin-left:42%">search</el-button>
      <el-button type="primary" style="float:right">Create New One</el-button>
    </el-card>
    <el-card
      class="leftMenu"
      style="position:absolute;margin-left:5%;margin-top:5%"
    >
      <li id="m2" style="background: #eaeaea;">
        <a class="" style="font-weight:800">Template Category</a>
      </li>
      <li id="m2">
        <a href="#" class="">Mapping</a>
      </li>
      <li id="m3">
        <a href="#" class="">Refactor</a>
      </li>
      <li id="m4">
        <a href="#" class="">Visual</a>
      </li>
    </el-card>
    <div style="margin-left: 25%;margin-right:3%;margin-top:10px">
      <div v-for="(schema, index) in schemaData" :key="index" class="schema">
        <!-- <el-row :gutter="6"> -->
        <el-col :span="4" style="padding:10px;height:350px;width:230px">
          <el-card
            shadow="hover"
            @click.native="turnToOperation"
            class="template"
          >
            <img style="height:150px;width:170px" src="@/assets/logo.png" />
            <div style="padding: 14px;width:170px;height:80px">
              <span>{{ schema.name }}</span>
              <div class="bottom clearfix">
                <el-button
                  type="text"
                  class="button"
                  v-text="schema.author"
                ></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <!-- </el-row> -->
      </div>
      <!-- <el-row>
        <el-col :span="4" style="padding:10px;height:350px">
          <el-card shadow="hover">
            <div>
              <i
                class="el-icon-plus avatar-uploader-icon"
                @click="turnToMapping"
              ></i>
            </div>
          </el-card>
        </el-col>
      </el-row> -->
    </div>
    <el-pagination
      style="text-align: center;margin-left:30%;display:inline-block;"
      @current-change="handleCurrentChange"
      :page-size="pageData.size"
      :current-page="pageData.page"
      layout="total,prev, pager, next, jumper"
      :total="pageData.totalElements"
    >
    </el-pagination>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      activeIndex2: "1",
      imageUrl: "",
      schemaData: [],
      page: 1,
      pageData: {
        totalElements: 0,
        totalPages: 0,
        size: 0
      },
      dialogVisible: false,
      input: ""
    };
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    turnToMapping() {
      this.$router.replace("/mapping");
    },
    getSchema() {
      let that = this;
      this.axios
        .get("/dataConversion/data/getTemplate/" + this.page)
        .then(res => {
          let data = res.data;
          that.schemaData = data.data.content;
          that.pageData.totalElements = data.data.totalElements;
          that.pageData.totalPages = data.data.totalPages;
          that.pageData.size = data.data.size;
        })
        .catch(err => {
          confirm("fail!");
        });
    },
    handleCurrentChange(currentPage) {
      this.page = currentPage;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    turnToOperation() {
      let refLink = $(".template");
      for (let i = 0; i < refLink.length; i++) {
        if (event.currentTarget === refLink[i]) {
          console.log(refLink[i]);
          let oid = this.schemaData[i].oid;
          // window.open("/dataConversion/data/operation/" + oid);
          this.$router.push({
            name: "operation",
            query: {
              oid: oid
            }
          });
        }
      }
    }
  },
  mounted() {
    this.getSchema();
  }
};
</script>
