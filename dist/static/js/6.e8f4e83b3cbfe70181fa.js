webpackJsonp([6],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(949)

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(518),
  /* template */
  __webpack_require__(923),
  /* scopeId */
  "data-v-00539668",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = 'http://localhost:3000/api/';

const requestLogin = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/login`, params).then(res => res.data.data);
};
/* harmony export (immutable) */ __webpack_exports__["requestLogin"] = requestLogin;

const changepassword = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/changepassword`, { params });
};
/* harmony export (immutable) */ __webpack_exports__["changepassword"] = changepassword;

const addUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/adduser`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addUser"] = addUser;

const getLicneseById = id => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/licenselistbyid?id=${id}`).then(res => res.data.data);;
};
/* harmony export (immutable) */ __webpack_exports__["getLicneseById"] = getLicneseById;

const editUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/updateuser`, params);
};
/* harmony export (immutable) */ __webpack_exports__["editUser"] = editUser;

const addChildren = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/createchildren`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addChildren"] = addChildren;

const addLicense = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/createlicense`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addLicense"] = addLicense;


const deleteUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/deleteuser`, params);
};
/* harmony export (immutable) */ __webpack_exports__["deleteUser"] = deleteUser;


const getChildrenById = id => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/childrenlistbyid?id=${id}`).then(res => res.data.data);;
};
/* harmony export (immutable) */ __webpack_exports__["getChildrenById"] = getChildrenById;


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___ = __webpack_require__(528);
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
    data: function () {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            const self = this;
            self.$refs[formName].validate(valid => {
                if (valid) {
                    localStorage.setItem('ms_username', self.ruleForm.username);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

            self.$axios.post(`http://localhost:3000/api/login`, { username: self.ruleForm.username, password: self.ruleForm.password }).then(res => {
                console.log(res);
                localStorage.setItem('ms_level', res.data.data.level);
                self.$router.push('/basetable');
            }).catch(error => {
                alert("登陆失败");
            });
        }
    }
});

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(491);


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__api__);

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(undefined);
// imports


// module
exports.push([module.i, ".login-wrap[data-v-00539668]{position:relative;width:100%;height:100%}.ms-title[data-v-00539668]{position:absolute;top:40%;width:100%;margin-top:-230px;text-align:center;font-size:50px;color:#fff}.ms-login[data-v-00539668]{position:absolute;left:50%;top:50%;width:300px;height:160px;margin:-150px 0 0 -190px;padding:40px;border-radius:5px;background:#fff}.login-btn[data-v-00539668]{text-align:center}.login-btn button[data-v-00539668]{width:100%;height:36px}.el-button--primary[data-v-00539668]{color:#fff;background-color:#ebcbae;border-color:#ebcbae}", ""]);

// exports


/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-wrap"
  }, [_c('div', {
    staticClass: "ms-title"
  }, [_vm._v("气象中心信息化管理系统")]), _vm._v(" "), _c('div', {
    staticClass: "ms-login"
  }, [_c('el-form', {
    ref: "ruleForm",
    staticClass: "demo-ruleForm",
    attrs: {
      "model": _vm.ruleForm,
      "rules": _vm.rules,
      "label-width": "0px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "username"
    },
    model: {
      value: (_vm.ruleForm.username),
      callback: function($$v) {
        _vm.ruleForm.username = $$v
      },
      expression: "ruleForm.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "password"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submitForm('ruleForm')
      }
    },
    model: {
      value: (_vm.ruleForm.password),
      callback: function($$v) {
        _vm.ruleForm.password = $$v
      },
      expression: "ruleForm.password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "login-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('ruleForm')
      }
    }
  }, [_vm._v("登录")])], 1), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px",
      "line-height": "30px",
      "color": "#999"
    }
  }, [_vm._v("Tips : 用户名和密码随便填。")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(185)("e5bb36e0", content, true);

/***/ })

});