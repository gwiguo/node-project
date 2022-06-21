<template>
  <el-menu
    default-active="/"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {

    };
  },  
};
</script>
<style lang="less">
.el-menu{
    height: 100%;
}
</style>
