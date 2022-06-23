<style lang="less" scoped>
	.home{
		padding: 40px;
	}
</style>
<template>
  <div class="home">
    <el-table :data="tableData" border :height="1000">
      <el-table-column fixed prop="description" label="description" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="example" label="example" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="help_category_id" label="help_category_id">
      </el-table-column>
      <el-table-column prop="help_topic_id" label="help_topic_id"> </el-table-column>
      <el-table-column prop="name" label="name">
      </el-table-column>
      <el-table-column prop="zurlip" label="url"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    get_data(){
      axios.get("/user").then((res)=>{
        if(res.data.data.length){
          this.tableData = res.data.data;
          console.log(this.tableData)
        }
      }).catch(err=>{
        console.log(err);
      });
    },
    handleClick(row) {
    },
  },
  created(){
    this.get_data();
  }
};
</script>