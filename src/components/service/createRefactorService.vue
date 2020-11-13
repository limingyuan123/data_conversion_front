<style>
@import "../../assets/css/service.css";
</style>
<template>
  <div>
    <div style="margin-left:30%" class="createRefactorService">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/logo.png" class="image" />
          <div style="padding: 14px;">
            <span>createRefactorService</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Detail</el-button>
              <el-button
                type="text"
                class="createRefactor"
                @click="invokeCreateRefactor"
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
  methods: {},
  mounted() {}
};
</script>
