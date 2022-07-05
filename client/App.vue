<template>
  <div id="app">
    <el-row id="wrapper">
      <el-col :span="4">
        <Nav></Nav>      
      </el-col>
      <el-col :span="20">
        <router-view/> 
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Nav from '@/components/Nav'

export default {
  components:{
    Nav
  },
  name: 'App'
}
</script>

<style lang="less" scoped>
body,html{height: 100%;margin: 0;padding: 0;}
#app{
  height: 100%;
  #wrapper{
    margin-right: 0 !important;
    height: 100%;
    .el-col{
      height: 100%;
    }
  }
}
</style>
