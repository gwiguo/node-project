<style lang="less" scoped>
.home {
  padding: 40px;
  padding-bottom: 0;
  .search-container .el-col > div {
    margin-bottom: 5px;
  }
}
</style>
<template>
  <div class="home">
    <el-row :gutter="20" class="search-container">
      <el-col :span="4">
        <div>姓名</div>
        <el-input
          size="small"
          v-model.trim="payload.uname"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>性别</div>
        <el-input
          size="small"
          v-model.trim="payload.usex"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>出生年份</div>
        <el-input
          size="small"
          v-model.trim="payload.ubirth"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>专业</div>
        <el-input
          size="small"
          v-model.trim="payload.uzy"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>省份</div>
        <el-input
          size="small"
          v-model.trim="payload.uprovince"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>地址</div>
        <el-input
          size="small"
          v-model.trim="payload.uaddress"
          @input="handleChangeInput"
          clearable
          @keyup.enter.native="handleChangeInput"
        ></el-input>
      </el-col>
      <!-- <el-col :span="2">
        <div>&nbsp;</div>
        <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
      </el-col> -->
    </el-row>
    <el-table
      :data="table_data"
      border
      :height="770"
      v-loading="table_loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="margin-top: 20px"
    >
      <el-table-column prop="uname" label="姓名" width="120" align="center">
      </el-table-column>
      <!-- <el-table-column prop="uid" label="身份证" align="center" width="180">
      </el-table-column> -->
      <el-table-column prop="usex" label="性别" align="center" width="130">
      </el-table-column>
      <el-table-column prop="ubirth" label="出生年份" align="center" width="130">
      </el-table-column>
      <el-table-column prop="uzy" label="专业" align="center" width="200">
      </el-table-column>
      <el-table-column prop="uprovince" label="省份" align="center" width="130">
      </el-table-column>
      <el-table-column
        prop="uaddress"
        label="地址"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column prop="uphone" label="手机号" align="center" width="130">
      </el-table-column>
      <!-- <el-table-column label="操作" width="120" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      table_data: [],
      table_loading: true,
      payload: {},
    };
  },
  methods: {
    get_data() {
      this.table_loading = true;
      axios
        .post("/user", this.payload)
        .then((res) => {
          if (res.data.list.length) {
            this.table_data = res.data.list;
          } else {
            this.table_data = [];
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.table_loading = false;
        });
    },
    handleIconClick() {
      console.log('click')
    },
    handleChangeInput() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.get_data();
      }, 1000);
    },
  },
  created() {
    this.get_data();
  },
};
</script>
// fetch("http://www.gdlgxy.edu.cn/zscx/queryuser.php").then(res=>res.json())
//     .then(res=>{
//         let str = ``;
//         const list = res.filter(o=>o.ucc=='专升本');
//         list.forEach(o=>{
//             delete o.udemo;
//             delete o.ucc;
//             delete o.uxy;
//             delete o.ucode;
//             delete o.id;
//         console.log(o.uaddress.split("/")[0])

//             const sex = o.uid.substr(-2,1) % 2 == 0 ? '女':'男';
//             const birth = o.uid.substr(6,4);
//             str += `INSERT INTO \`jike\` (\`uid\`, \`uname\`, \`usex\`, \`ubirth\`, \`uzy\`, \`uaddress\`, \`uphone\`) VALUES('${o.uid}','${o.uname}','${sex}','${birth}','${o.uzy}','${o.uaddress}','${o.uphone}');\n`;
            
//         });
        
//         // console.log(str)
//     })