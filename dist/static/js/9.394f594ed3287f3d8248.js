webpackJsonp([9],{

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(959)

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(523),
  /* template */
  __webpack_require__(937),
  /* scopeId */
  "data-v-643af02b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 523:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            getData: null
        };
    },
    created() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: '/apis/testApi'
        }).then(function (result) {
            _this.getData = result.data;
            console.log(JSON.stringify(result));
        });
    }
});

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(undefined);
// imports


// module
exports.push([module.i, ".ms-doc[data-v-643af02b]{width:100%;max-width:980px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.ms-doc h3[data-v-643af02b]{padding:9px 10px 10px;margin:0;font-size:14px;line-height:17px;background-color:#f5f5f5;border:1px solid #d8d8d8;border-bottom:0;border-radius:3px 3px 0 0}.ms-doc article[data-v-643af02b]{padding:45px;word-wrap:break-word;background-color:#fff;border:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.ms-doc article h1[data-v-643af02b]{font-size:32px;padding-bottom:10px;margin-bottom:15px;border-bottom:1px solid #ddd}.ms-doc article h2[data-v-643af02b]{margin:24px 0 16px;font-weight:600;line-height:1.25;padding-bottom:7px;font-size:24px;border-bottom:1px solid #eee}.ms-doc article p[data-v-643af02b]{margin-bottom:15px;line-height:1.5}.ms-doc article .el-checkbox[data-v-643af02b]{margin-bottom:5px}", ""]);

// exports


/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-setting"
  }), _vm._v(" 系统概述")])], 1)], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ms-doc"
  }, [_c('h3', [_vm._v("敬请期待")])])
}]}

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(185)("1acb818a", content, true);

/***/ })

});