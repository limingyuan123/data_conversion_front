<style>
@import "../../assets/css/service.css";
</style>
<template>
  <div>
    <div style="margin-left:30%" class="serviceVisualizationItem">
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
  </div>
</template>
<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      visualService: {}
    };
  },
  methods: {
    getData() {
      let that = this;
      this.axios.get("/dataConversion/data/getDataMap/visual").then(res => {
        that.visualService = res.data.data;
        console.log(that.visualService);
      });
    }
  },
  mounted() {}
};
</script>
