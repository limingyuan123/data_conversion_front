<style scoped>
@import '../../assets/css/service.css';
</style>
<template>
  <div>
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
  </div>
</template>
<script>
export default {};
</script>
