<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      theme="dark"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"
              ><i :class="item.icon"></i>{{ item.title }}</template
            >
            <el-menu-item
              v-for="(subItem, i) in item.subs"
              :key="i"
              :index="subItem.index"
              >{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // {
        //     icon: 'el-icon-setting',
        //     index: 'readme',
        //     title: '系统概述'
        // },
        {
          icon: "el-icon-menu",
          index: "basetable",
          title: "人员信息",
          // subs: [
          //     {
          //         index: 'basetable',
          //         title: '人员信息'
          //     },
          // {
          //     index: 'vuetable',
          //     title: 'Vue表格组件'
          // }
          // ]
        },
        {
          // icon: 'el-icon-date',
          // index: '2',
          // title: '表单',
          // subs: [
          icon: "el-icon-date",
          index: "baseform",
          title: "账号信息",
        },
        {
          icon: "el-icon-star-on",
          index: "license",
          title: "执照管理", 
        },
        {
          icon: "el-icon-upload2",
          index: "children",
          title: "子女信息", 
        },
        {
          icon: "el-icon-upload",
          index: "training",
          title: "业务培训记录", 
        },
        {
          icon: "el-icon-setting",
          index: "safe",
          title: "安全教育记录", 
        },
        {
          icon: "el-icon-setting",
          index: "urgent",
          title: "应急演练记录", 
        },
                {
          icon: "el-icon-setting",
          index: "tec",
          title: "技术人员档案", 
        },
        //         {
        //             index: 'vueeditor',
        //             title: '编辑器'
        //         },
        //         {
        //             index: 'markdown',
        //             title: 'markdown'
        //         },
        //         {
        //             index: 'upload',
        //             title: '文件上传'
        //         }
        //     ]
        // },
        // {
        //     icon: 'el-icon-star-on',
        //     index: 'basecharts',
        //     title: '图表'
        // },
        // {
        //     icon: 'el-icon-upload2',
        //     index: 'drag',
        //     title: '拖拽'
        // }
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #070707;
  background-color: #070707;
}
.sidebar > ul {
  height: 100%;
}
.el-menu-vertical-demo {
  background-color: #537791;
}
</style>
