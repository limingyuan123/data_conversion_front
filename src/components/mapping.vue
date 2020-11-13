<style scoped>
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
</style>
<template>
  <div>
    <!-- 左侧菜单 -->
    <left-menu></left-menu>

    <!-- 右侧内容 -->
    <div style="margin-left:25%;">
      <el-card class="schema">
        schema:
        <pre v-if="xml" lang="xml">{{xml}}</pre>
      </el-card>
      <el-card class="tran">
        transform method:
      </el-card>
    </div>
  </div>
</template>
<script>
import leftMenu from "./template/leftMenu.vue";

export default {
  name: "mapping",
  components: {
    leftMenu
  },
  data() {
    return {
      activeLeftIndex: '2-1',
      xml:"",
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
