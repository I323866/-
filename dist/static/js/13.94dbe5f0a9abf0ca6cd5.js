webpackJsonp([13],{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(950)

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(924),
  /* scopeId */
  "data-v-04276180",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      url: "./static/vuetable.json",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: ""
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
      this.$axios.get(`http://localhost:3000/api/licenselistbyid?id=${username}`, { page: self.cur_page }).then(res => {
        this.tableData = res.data.data;
      });
    }

  }
});

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(undefined);
// imports


// module
exports.push([module.i, ".handle-box[data-v-04276180]{margin-bottom:20px}.handle-select[data-v-04276180]{width:120px}.handle-input[data-v-04276180]{width:300px;display:inline-block}.downloadexcel[data-v-04276180]{margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v(" 表格")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("执照信息")])], 1)], 1), _vm._v(" "), _c('el-table', {
    ref: "multipleTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.data,
      "border": ""
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "执照名称",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "获得日期"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(185)("92b4a54e", content, true);

/***/ })

});