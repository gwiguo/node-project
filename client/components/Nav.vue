<template>
  <el-menu
    default-active="/"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="plane-game">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">飞机大战</span>
    </el-menu-item>
    <el-menu-item index="banner1">
      <i class="el-icon-picture-outline"></i>
      <span slot="title">酷炫轮播图1</span>
    </el-menu-item>
    <el-menu-item index="banner2">
      <i class="el-icon-picture-outline"></i>
      <span slot="title">酷炫轮播图2</span>
    </el-menu-item>
    <el-menu-item index="canvas">
      <i class="el-icon-setting"></i>
      <span slot="title">Canvas</span>
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
