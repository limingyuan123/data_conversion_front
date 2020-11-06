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
#container {
  /*保证footer是相对于container位置绝对定位*/
  position: relative;
  width: 100%;
  min-height: 100%;
  /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/
  padding-bottom: 100px;
  box-sizing: border-box;
}
/* .el-col .el-col-4{
  padding: 10px;
} */
</style>
<template>
  <div id="container">
    <div style="margin-left: 3%;margin-right:3%;margin-top:10px">
      <div v-for="(schema, index) in schemaData" :key="index" class="schema">
        <!-- <el-row :gutter="6"> -->
        <el-col :span="4" style="padding:10px;height:350px;width:230px">
          <el-card
            shadow="hover"
            @click.native="turnToOperation"
            class="template"
          >
            <img
              style="height:150px;width:170px"
              src="@/assets/logo.png"
            />
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
      style="text-align: center;margin-top:20px;z-index:1"
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
      dialogVisible: false
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
            name:"operation",
            query:{
              oid:oid,
            }
          })
        }
      }
    }
  },
  mounted() {
    this.getSchema();
  }
};
</script>
