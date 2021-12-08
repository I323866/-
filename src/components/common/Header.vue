<template>
  <div class="header">
    <div class="logo">气象中心信息化管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/img/img.jpg" />
          {{ username }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="myprofile">账号信息</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
          <el-dropdown-item v-if="this.level == 3" ref="messageDrop" command="edituser">管理员信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "linxin"
    };

  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
    level() {
       return localStorage.getItem("ms_level")  
    }

  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        localStorage.removeItem("ms_level")  
        this.$router.push("/login");
      } else if (command == "myprofile") {
        this.$router.push("/baseform");
      } else if (command == "edituser"){
        this.$router.push("/vuetable");  
      }
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
