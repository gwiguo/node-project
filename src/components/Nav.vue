<template>
  <el-menu
    default-active="plane-game"
    router
  >
    <el-menu-item index="plane-game">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">飞机大战</span>
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
