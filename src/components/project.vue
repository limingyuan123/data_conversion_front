<style scoped>
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
            <p style="text-align:center">Data Service</p>
            <span style="display:inline-block;text-align:center">
              Are you listening to your customers? As they say: You cannot
              improve what you cannot measure
            </span>
            <div class="bottom clearfix">
              <el-button type="primary" class="detail" style="float:left" plain>Detail</el-button>
              <el-button  type="primary" @click="turnToService" class="createService" style="float:right"  plain >Invoke</el-button>
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
              <el-button type="primary" class="detail" style="float:left" plain>Detail</el-button>
              <el-button type="primary" @click="turnToCoding" class="visualCode" style="float:right" plain>Invoke</el-button>
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
              <el-button type="primary" class="detail" style="float:left" plain>Detail</el-button>
              <el-button type="primary" class="visualCode" style="float:right" plain>Invoke</el-button>
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
  methods: {
      turnToService(){
          this.$router.replace('/operationService')
      },
      turnToCoding(){
          this.$router.replace('/operationCoding');
      },
  },
  mounted() {}
};
</script>
