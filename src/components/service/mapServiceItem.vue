<style scoped>
@import "../../assets/css/service.css";
</style>
<template>
  <div>
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
  </div>
</template>
<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      mapService: {}
    };
  },
  methods: {
    invokeMapping() {},
    getData() {
      let that = this;
      this.axios.get("/dataConversion/data/getDataMap/map").then(res => {
        that.mapService = res.data.data;
        console.log(that.mapService);
      });
    }
  },
  mounted() {}
};
</script>
