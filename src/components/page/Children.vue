<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-menu"></i> 表格</el-breadcrumb-item
        >
        <el-breadcrumb-item>子女信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table
      :data="data"
      border
      style="width: 100%"
      ref="multipleTable"
    >
      <el-table-column prop="childname" label="性别" width="120"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      url: "./static/vuetable.json",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    data() { 
      const self = this;
      return self.tableData;
    }
  },
  methods: {
    getUsers() {
      let self = this;
      let username = localStorage.getItem("ms_username");
      this.$axios
        .get(
          `http://localhost:3000/api/childrenlistbyid?id=${username}`,
          { page: self.cur_page }
        )
        .then((res) => {
          this.tableData = res.data.data;
        });
    },

  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.downloadexcel{
  margin-top: 10px;
}
</style>