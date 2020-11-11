<style>
.image {
  width: 100%;
  display: block;
}
/* .contain {
  margin: 5%;
  margin-top: 2%;
} */
</style>
<template>
  <div class="contain">
    <div>
      <el-col :span="8" style="padding:70px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img.icons8.com/dusk/64/000000/source-code.png"
            class="image"
          />
          <div style="padding: 14px;">
            <p style="text-align:center">Create Service</p>
            <span style="display:inline-block;text-align:center">
              Are you listening to your customers? As they say: You cannot
              improve what you cannot measure
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" style="float:left">Manage</el-button>
              <el-button  type="primary" class="createMap" style="float:right"  plain >Create New</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    <div>
      <el-col :span="8" style="padding:70px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img.icons8.com/dusk/64/000000/source-code.png"
            class="image"
          />
          <div style="padding: 14px;">
            <p style="text-align:center">Visual Coding</p>
            <span style="display:inline-block;text-align:center">
              Are you listening to your customers? As they say: You cannot
              improve what you cannot measure
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" style="float:left">Manage</el-button>
              <el-button type="primary" class="createMap" style="float:right" plain>Create New</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    <div>
      <el-col :span="8" style="padding:70px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img.icons8.com/dusk/64/000000/source-code.png"
            class="image"
          />
          <div style="padding: 14px;">
            <p style="text-align:center">Others</p>
            <span style="display:inline-block;text-align:center">
              Are you listening to your customers? As they say: You cannot
              improve what you cannot measure
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" style="float:left">Manage</el-button>
              <el-button type="primary" class="createMap" style="float:right" plain>Create New</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "project",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
