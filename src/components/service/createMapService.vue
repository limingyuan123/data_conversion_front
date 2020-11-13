<style>
@import "../../assets/css/service.css";
</style>
<template>
  <div>
    <div style="margin-left:30%;" class="createMapService">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/logo.png" class="image" />
          <div style="padding: 14px;">
            <span>createMapService</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Detail</el-button>
              <el-button type="text" class="createMap" @click="invokeCreateMap"
                >Invoke</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    invokeCreateMap() {}
  },
  mounted() {}
};
</script>
