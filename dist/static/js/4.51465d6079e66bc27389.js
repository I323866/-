webpackJsonp([4],{

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(965)

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(513),
  /* template */
  __webpack_require__(943),
  /* scopeId */
  "data-v-cc3ac4d2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_schart_js__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_schart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_schart_js__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {};
    },
    props: {
        canvasId: {
            type: String,
            default: ''
        },
        width: {
            type: [String, Number],
            default: 500
        },
        height: {
            type: [String, Number],
            default: 400
        },
        type: {
            type: String,
            default: 'bar'
        },
        data: {
            type: Array,
            default: []
        },
        options: {
            type: Object,
            required: false
        }
    },
    mounted: function () {
        this.renderChart();
    },
    methods: {
        renderChart: function () {
            var self = this;
            new __WEBPACK_IMPORTED_MODULE_0_schart_js___default.a(self.canvasId, self.type, self.data, self.options);
        }
    },
    watch: {
        'data': function () {
            this.renderChart();
        },
        'options': function () {
            this.renderChart();
        },
        'type': function () {
            this.renderChart();
        },
        'width': function () {
            var self = this;
            self.$nextTick(function () {
                self.renderChart();
            });
        },
        'height': function () {
            var self = this;
            self.$nextTick(function () {
                self.renderChart();
            });
        }
    }
});

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_schart__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_schart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_schart__);
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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Schart: __WEBPACK_IMPORTED_MODULE_0_vue_schart___default.a
    },
    data: () => ({
        data1: [{ name: '2012', value: 1141 }, { name: '2013', value: 1499 }, { name: '2014', value: 2260 }, { name: '2015', value: 1170 }, { name: '2016', value: 970 }, { name: '2017', value: 1450 }],
        data2: [{ name: '??????', value: 1200 }, { name: '?????????', value: 1222 }, { name: '?????????', value: 1283 }, { name: '??????', value: 1314 }, { name: '?????????', value: 2314 }],
        options1: {
            title: '???????????????????????????',
            bgColor: '#829dda',
            titleColor: '#ffffff',
            fillColor: '#72f6ff',
            axisColor: '#eeeeee',
            contentColor: '#bbbbbb'
        },
        options2: {
            title: '??????????????????????????????',
            bgColor: '#829dca',
            titleColor: '#ffffff',
            legendColor: '#ffffff'
        }
    })
});

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(undefined);
// imports


// module
exports.push([module.i, ".schart[data-v-cc3ac4d2]{width:600px;display:inline-block}.content-title[data-v-cc3ac4d2]{clear:both;font-weight:400;line-height:50px;margin:10px 0;font-size:22px;color:#1f2f3d}", ""]);

// exports


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * sChart JavaScript Library v1.0.2
 * http://test.omwteam.com/sChart/ | Released under the MIT license
 * Date: 2017-07-12T18:59Z
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return factory(root);
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.sChart = factory(root);
    }
})(this, function (root) {
    'use strict';
    (function () {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback) {
                var id = window.setTimeout(callback, 1000 / 60);
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());
    /**
     * ????????????
     * @param {String} canvas ????????????id
     * @param {String} type ????????????
     * @param {Array} data ?????????????????????
     * @param {Object} options ???????????? ????????????
     */
    function sChart(canvas, type, data, options) {
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.type = type;
        this.data = data; // ??????????????????
        this.dataLength = this.data.length; // ?????????????????????
        this.width = this.canvas.width; // canvas ??????
        this.height = this.canvas.height; // canvas ??????
        this.padding = 50; // canvas ?????????
        this.yEqual = 5; // y?????????5??????
        this.yLength = 0; // y?????????????????????????????????
        this.xLength = 0; // x?????????????????????????????????
        this.yFictitious = 0; // y?????????????????????????????????
        this.yRatio = 0; // y??????????????????????????????????????????
        this.bgColor = '#ffffff'; // ??????????????????
        this.fillColor = '#1E9FFF'; // ??????????????????
        this.axisColor = '#666666'; // ???????????????
        this.contentColor = '#eeeeee'; // ??????????????????
        this.titleColor = '#000000'; // ??????????????????
        this.title = ''; // ????????????
        this.titlePosition = 'top'; // ??????????????????: top / bottom
        this.looped = null; // ????????????
        this.current = 0; // ???????????????????????????????????????
        this.radius = 100; // ????????????????????????????????????
        this.innerRadius = 70; // ?????????????????????
        this.colorList = ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff', '#199475', '#e08031', '#726dd1']; // ??????????????????
        this.legendColor = '#000000'; // ??????????????????
        this.legendTop = 40; // ????????????????????????
        this.totalValue = this.getTotalValue(); // ????????????????????????
        this.init(options);
    }
    sChart.prototype = {
        init: function (options) {
        	if(this.dataLength === 0){
                return false;
            }
            if (options) {
                for (var key in options) {
                    if (key === 'colorList' && Array.isArray(options[key])) {
                        this[key] = options[key].concat(this[key])
                    } else {
                        this[key] = options[key];
                    }
                }
            }
            if (this.type === 'bar' || this.type === 'line') {
                this.yLength = Math.floor((this.height - this.padding * 2 - 10) / this.yEqual);
                this.xLength = Math.floor((this.width - this.padding * 1.5 - 10) / this.dataLength);
                this.yFictitious = this.getYFictitious(this.data);
                this.yRatio = this.yLength / this.yFictitious;
                this.looping();
            } else {
                this.drawPieUpdate();
            }
        },
        /**
         * ????????????????????????
         */
        looping: function () {
            this.looped = window.requestAnimationFrame(this.looping.bind(this));
            if (this.current < 100) {
                this.current = (this.current + 3) > 100 ? 100 : (this.current + 3);
                this.drawAnimation();
            } else {
                window.cancelAnimationFrame(this.looped);
                this.looped = null;
            }
        },
        /**
         * ????????????????????????????????????????????????
         */
        drawAnimation: function () {
            for (var i = 0; i < this.dataLength; i++) {
                var x = Math.ceil(this.data[i].value * this.current / 100 * this.yRatio);
                var y = this.height - this.padding - x;

                this.data[i].left = this.padding + this.xLength * (i + 0.25);
                this.data[i].top = y;
                this.data[i].right = this.padding + this.xLength * (i + 0.75);
                this.data[i].bottom = this.height - this.padding;
                this.drawBarUpdate();
            }
        },
        /**
         * ????????????????????????????????????
         */
        drawBarUpdate: function () {
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.drawAxis();
            this.drawPoint();
            this.drawTitle();
            this.drawBarChart();
        },
        /**
         * ????????????????????????????????????
         */
        drawPieUpdate: function () {
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.drawLegend();
            this.drawTitle();
            this.drawPieChart();
        },
        /**
         * ?????????????????????????????????
         */
        drawBarChart: function () {
            this.ctx.fillStyle = this.fillColor;
            this.ctx.strokeStyle = this.fillColor;
            for (var i = 0; i < this.dataLength; i++) {
                // ????????????
                if (this.type === 'line') {
                    this.ctx.beginPath();
                    this.ctx.arc(this.data[i].left + this.xLength / 4, this.data[i].top, 2, 0, 2 * Math.PI, true);
                    this.ctx.fill();
                    if (i !== this.dataLength - 1) {
                        this.ctx.moveTo(this.data[i].left + this.xLength / 4, this.data[i].top);
                        this.ctx.lineTo(this.data[i + 1].left + this.xLength / 4, this.data[i + 1].top);
                    }
                    this.ctx.stroke();
                } else if (this.type === 'bar') {
                    // ????????????
                    this.ctx.fillRect(
                        this.data[i].left,
                        this.data[i].top,
                        this.data[i].right - this.data[i].left,
                        this.data[i].bottom - this.data[i].top
                    );
                }

                this.ctx.font = '12px Arial'
                this.ctx.fillText(
                    this.data[i].value * this.current / 100,
                    this.data[i].left + this.xLength / 4,
                    this.data[i].top - 5
                );
            }
        },
        /**
         * ?????????????????????????????????
         */
        drawPieChart: function () {
            var x = this.width / 2,
                y = this.height / 2,
                x1 = 0,
                y1 = 0;
            for (var i = 0; i < this.dataLength; i++) {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.colorList[i];
                this.ctx.moveTo(x, y);
                this.data[i].start = i === 0 ? -Math.PI / 2 : this.data[i - 1].end;
                this.data[i].end = this.data[i].start + this.data[i].value / this.totalValue * 2 * Math.PI;
                // ????????????
                this.ctx.arc(x, y, this.radius, this.data[i].start, this.data[i].end);
                this.ctx.closePath();
                this.ctx.fill();

                this.data[i].middle = (this.data[i].start + this.data[i].end) / 2;
                x1 = Math.ceil(Math.abs(this.radius * Math.cos(this.data[i].middle)));
                y1 = Math.floor(Math.abs(this.radius * Math.sin(this.data[i].middle)));

                this.ctx.strokeStyle = this.colorList[i];
                // ?????????????????????????????????
                if (this.data[i].middle <= 0) {
                    this.ctx.textAlign = 'left';
                    this.ctx.moveTo(x + x1, y - y1);
                    this.ctx.lineTo(x + x1 + 10, y - y1 - 10);
                    this.ctx.moveTo(x + x1 + 10, y - y1 - 10);
                    this.ctx.lineTo(x + x1 + this.radius / 2, y - y1 - 10);
                    this.ctx.stroke();
                    this.ctx.fillText(this.data[i].value, x + x1 + 5 + this.radius / 2, y - y1 - 5);
                } else if (this.data[i].middle > 0 && this.data[i].middle <= Math.PI / 2) {
                    this.ctx.textAlign = 'left';
                    this.ctx.moveTo(x + x1, y + y1);
                    this.ctx.lineTo(x + x1 + 10, y + y1 + 10);
                    this.ctx.moveTo(x + x1 + 10, y + y1 + 10);
                    this.ctx.lineTo(x + x1 + this.radius / 2, y + y1 + 10);
                    this.ctx.stroke();
                    this.ctx.fillText(this.data[i].value, x + x1 + 5 + this.radius / 2, y + y1 + 15);
                } else if (this.data[i].middle > Math.PI / 2 && this.data[i].middle < Math.PI) {
                    this.ctx.textAlign = 'right';
                    this.ctx.moveTo(x - x1, y + y1);
                    this.ctx.lineTo(x - x1 - 10, y + y1 + 10);
                    this.ctx.moveTo(x - x1 - 10, y + y1 + 10);
                    this.ctx.lineTo(x - x1 - this.radius / 2, y + y1 + 10);
                    this.ctx.stroke();
                    this.ctx.fillText(this.data[i].value, x - x1 - 5 - this.radius / 2, y + y1 + 15);
                } else {
                    this.ctx.textAlign = 'right';
                    this.ctx.moveTo(x - x1, y - y1);
                    this.ctx.lineTo(x - x1 - 10, y - y1 - 10);
                    this.ctx.moveTo(x - x1 - 10, y - y1 - 10);
                    this.ctx.lineTo(x - x1 - this.radius / 2, y - y1 - 10);
                    this.ctx.stroke();
                    this.ctx.fillText(this.data[i].value, x - x1 - 5 - this.radius / 2, y - y1 - 5);
                }
            }
            // ?????????????????????????????????????????????
            if (this.type === 'ring') {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.bgColor;
                this.ctx.arc(x, y, this.innerRadius, 0, Math.PI * 2);
                this.ctx.fill();
            }
        },
        /**
         * ???????????????
         */
        drawAxis: function () {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.axisColor;
            // y??????, +0.5???????????????canvas???1??????????????????2???????????????
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.padding + 0.5, this.padding + 0.5);
            // x??????
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding + 0.5);
            this.ctx.stroke();
        },
        /**
         * ??????????????????????????????
         */
        drawPoint: function () {
            // x????????????
            this.ctx.beginPath();
            this.ctx.font = '12px Microsoft YaHei';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.axisColor;
            for (var i = 0; i < this.dataLength; i++) {
                var name = this.data[i].name;
                var xlen = this.xLength * (i + 1);
                this.ctx.moveTo(this.padding + xlen + 0.5, this.height - this.padding + 0.5);
                this.ctx.lineTo(this.padding + xlen + 0.5, this.height - this.padding + 5.5);
                this.ctx.fillText(name, this.padding + xlen - this.xLength / 2, this.height - this.padding + 15);
            }
            this.ctx.stroke();

            // y????????????
            this.ctx.beginPath();
            this.ctx.font = '12px Microsoft YaHei';
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = this.axisColor;
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.padding - 4.5, this.height - this.padding + 0.5);
            this.ctx.fillText(0, this.padding - 10, this.height - this.padding + 5);
            for (var i = 0; i < this.yEqual; i++) {
                var y = this.yFictitious * (i + 1);
                var ylen = this.yLength * (i + 1);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.axisColor;
                this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5);
                this.ctx.lineTo(this.padding - 4.5, this.height - this.padding - ylen + 0.5);
                this.ctx.stroke();
                this.ctx.fillText(y, this.padding - 10, this.height - this.padding - ylen + 5);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.contentColor;
                this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5)
                this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding - ylen + 0.5);
                this.ctx.stroke();
            }
        },
        /**
         * ??????????????????
         */
        drawTitle: function () {
            if (this.title) {
                this.ctx.beginPath();
                this.ctx.textAlign = 'center';
                this.ctx.fillStyle = this.titleColor;
                this.ctx.font = '16px Microsoft YaHei';
                if (this.titlePosition === 'bottom' && this.padding >= 40) {
                    this.ctx.fillText(this.title, this.width / 2, this.height - 5)
                } else {
                    this.ctx.fillText(this.title, this.width / 2, this.padding / 2)
                }
            }
        },
        /**
         * ????????????????????????????????????
         */
        drawLegend: function () {
            for (var i = 0; i < this.dataLength; i++) {
                this.ctx.fillStyle = this.colorList[i];
                this.ctx.fillRect(10, this.legendTop + 20 * i, 20, 11);
                this.ctx.fillStyle = this.legendColor;
                this.ctx.font = '12px Microsoft YaHei';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(this.data[i].name, 35, 50 + 20 * i);
            }
        },
        /**
         * y?????????????????????????????????
         * @param data ?????????????????????
         * @return y???????????????
         */
        getYFictitious: function (data) {
            var arr = data.slice(0);
            arr.sort(function (a, b) {
                return -(a.value - b.value);
            });
            var len = Math.ceil(arr[0].value / this.yEqual);
            var pow = len.toString().length - 1;
            pow = pow > 2 ? 2 : pow;
            return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow);
        },
        /**
         * ???????????????????????????????????????
         * @return {Number} total
         */
        getTotalValue: function () {
            var total = 0;
            for (var i = 0; i < this.dataLength; i++) {
                total += this.data[i].value;
            }
            return total;
        }
    }
    return sChart;
});

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(925),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('canvas', {
    attrs: {
      "id": _vm.canvasId,
      "width": _vm.width,
      "height": _vm.height
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" ??????")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("????????????")])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "schart"
  }, [_c('div', {
    staticClass: "content-title"
  }, [_vm._v("?????????")]), _vm._v(" "), _c('schart', {
    attrs: {
      "canvasId": "bar",
      "width": "500",
      "height": "400",
      "data": _vm.data1,
      "type": "bar",
      "options": _vm.options1
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "schart"
  }, [_c('div', {
    staticClass: "content-title"
  }, [_vm._v("?????????")]), _vm._v(" "), _c('schart', {
    attrs: {
      "canvasId": "line",
      "width": "500",
      "height": "400",
      "data": _vm.data1,
      "type": "line",
      "options": _vm.options1
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "schart"
  }, [_c('div', {
    staticClass: "content-title"
  }, [_vm._v("?????????")]), _vm._v(" "), _c('schart', {
    attrs: {
      "canvasId": "pie",
      "width": "500",
      "height": "400",
      "data": _vm.data2,
      "type": "pie",
      "options": _vm.options2
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "schart"
  }, [_c('div', {
    staticClass: "content-title"
  }, [_vm._v("?????????")]), _vm._v(" "), _c('schart', {
    attrs: {
      "canvasId": "ring",
      "width": "500",
      "height": "400",
      "data": _vm.data2,
      "type": "ring",
      "options": _vm.options2
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "plugins-tips"
  }, [_vm._v("\n        vue-schart???vue.js??????sChart.js??????????????????\n        ???????????????"), _c('a', {
    attrs: {
      "href": "https://github.com/lin-xin/vue-schart",
      "target": "_blank"
    }
  }, [_vm._v("vue-schart")])])
}]}

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(185)("8147fd76", content, true);

/***/ })

});