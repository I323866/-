webpackJsonp([7],{

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(951)

var Component = __webpack_require__(186)(
  /* script */
  __webpack_require__(527),
  /* template */
  __webpack_require__(926),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_datasource__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_datasource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_datasource__);
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
        const self = this;
        return {
            url: './static/datasource.json',
            information: {
                pagination: {},
                data: []
            },
            columns: [{
                name: 'Id',
                key: 'id'
            }, {
                name: 'Name',
                key: 'name'
            }, {
                name: 'email',
                key: 'email'
            }, {
                name: 'ip',
                key: 'ip'
            }],
            actions: [{
                text: 'Click',
                class: 'btn-primary',
                event(e, row) {
                    self.$message('选中的行数： ' + row.row.id);
                }
            }],
            query: ''
        };
    },
    components: {
        Datasource: __WEBPACK_IMPORTED_MODULE_1_vue_datasource___default.a
    },
    methods: {
        changePage(values) {
            this.information.pagination.per_page = values.perpage;
            this.information.data = this.information.data;
        },
        onSearch(searchQuery) {
            this.query = searchQuery;
        }
    },
    computed: {
        getData() {
            const self = this;
            return self.information.data.filter(function (d) {
                if (d.name.indexOf(self.query) > -1) {
                    return d;
                }
            });
        }
    },
    beforeMount() {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`http://localhost:3000/api/userdeplist`).then(res => {
            this.information = res.data;
        });
    }
});

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(undefined);
// imports


// module
exports.push([module.i, ".vue-datasource *{box-sizing:border-box;font-size:14px}.vue-datasource .panel{margin-bottom:22px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.vue-datasource .panel-default{border-color:#d3e0e9}.vue-datasource .panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.vue-datasource .panel-default>.panel-heading{height:56px;color:#333;background-color:#fff;border-color:#d3e0e9}.vue-datasource .pull-left{float:left!important}.vue-datasource .pull-right{float:right!important}.vue-datasource .form-group{margin-bottom:15px}.vue-datasource label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.vue-datasource .form-control{display:block;width:100%;height:36px;color:#555;background-color:#fff;border:1px solid #ccd0d2;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.vue-datasource .btn,.vue-datasource .form-control{padding:6px 12px;font-size:14px;line-height:1.6;background-image:none}.vue-datasource .btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-datasource .btn-primary{color:#fff;background-color:#3097d1;border-color:#2a88bd}.vue-datasource .table{width:100%;max-width:100%;margin-bottom:22px;border-collapse:collapse;border-spacing:0;text-align:center}.vue-datasource .table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.vue-datasource .table td,.vue-datasource .table th{padding:8px;line-height:1.6;vertical-align:top;border-top:1px solid #ddd}.vue-datasource .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.vue-datasource .success td,.vue-datasource .success th{background-color:#dff0d8}.vue-datasource .pagination{display:inline-block;padding-left:0;margin:22px 0;border-radius:4px}.vue-datasource .pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.6;text-decoration:none;color:#3097d1;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;background-color:#3097d1;border-color:#3097d1;cursor:default}.vue-datasource .pagination>li:first-child>a,.vue-datasource .pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.vue-datasource .text-center{text-align:center}@media (min-width:768px){.form-inline .form-group{display:inline-block}.form-inline .control-label,.form-inline .form-group{margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}", ""]);

// exports


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDatasourceComponent"] = factory();
	else
		root["VueDatasourceComponent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatasourceUtils = __webpack_require__(6);
	
	var _DatasourceUtils2 = _interopRequireDefault(_DatasourceUtils);
	
	var _DatasourceLanguage = __webpack_require__(5);
	
	var _DatasourceLanguage2 = _interopRequireDefault(_DatasourceLanguage);
	
	var _Pagination = __webpack_require__(10);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Pagination: _Pagination2.default
	  },
	  props: {
	    tableData: {
	      type: Array,
	      required: true
	    },
	
	    language: {
	      type: String,
	      default: 'es'
	    },
	
	    columns: {
	      type: Array,
	      required: true
	    },
	
	    pagination: {
	      type: Object,
	      default: function _default() {
	        return {
	          total: 0,
	          to: 0,
	          from: 0,
	          per_page: 15
	        };
	      }
	    },
	
	    actions: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      limits: [1, 5, 10, 15, 20],
	      perpage: 15,
	      selected: null,
	      indexSelected: -1,
	      search: '' };
	  },
	
	  computed: {
	    translation: function translation() {
	      return _DatasourceLanguage2.default.translations[this.language];
	    },
	
	    tableInfo: _DatasourceUtils2.default.tableInfo
	  },
	  methods: {
	    fetchFromObject: _DatasourceUtils2.default.fetchFromObject,
	    changePage: _DatasourceUtils2.default.changePage,
	    selectRow: _DatasourceUtils2.default.selectRow,
	    searching: function searching() {
	      this.selected = null;
	      this.indexSelected = -1;
	      this.$emit('searching', this.search);
	    }
	  },
	  watch: {
	    perpage: function perpage() {
	      this.selected = null;
	      this.indexSelected = -1;
	      this.$emit('change', { perpage: this.perpage, page: 1 });
	    },
	    tableData: function tableData() {
	      this.selected = null;
	      this.indexSelected = -1;
	    }
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['pages', 'translation'],
	  computed: {
	    items: function items() {
	      var temp = [],
	          bottomLimit = this.pages.current_page - 2,
	          topLimit = this.pages.current_page + 2,
	          showing = 5;
	
	      if (bottomLimit <= 0) {
	        bottomLimit = 1;
	        topLimit = 5;
	      }
	
	      if (topLimit >= this.pages.last_page) {
	        bottomLimit = this.pages.last_page - 4;
	        topLimit = this.pages.last_page;
	      }
	
	      if (this.pages.last_page < 5) {
	        showing = this.pages.last_page;
	      }
	
	      if (bottomLimit <= 0) {
	        bottomLimit = 1;
	      }
	
	      if (this.pages.last_page == 0 || this.pages.last_page == 1) {
	        showing = 1;
	      }
	
	      for (var i = 0; i < showing; i++) {
	        temp[i] = i + bottomLimit;
	      }
	
	      return temp;
	    }
	  },
	  methods: {
	    firstPage: function firstPage() {
	      if (this.pages.current_page != 1) {
	        this.change(1);
	      }
	    },
	    previous: function previous() {
	      if (this.pages.current_page != 1) {
	        this.change(--this.pages.current_page);
	      }
	    },
	    change: function change(page) {
	      this.$emit('change', page);
	    },
	    next: function next() {
	      if (this.pages.current_page != this.pages.last_page) {
	        this.change(++this.pages.current_page);
	      }
	    },
	    lastPage: function lastPage(page) {
	      if (this.pages.current_page != this.pages.last_page) {
	        this.change(page);
	      }
	    },
	    changePageWithKeyBoard: function changePageWithKeyBoard(key) {
	      if (key === 'ArrowLeft') {
	        this.previous();
	      } else if (key === 'ArrowRight') {
	        this.next();
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    window.addEventListener('keyup', function (_ref) {
	      var key = _ref.key;
	      return _this.changePageWithKeyBoard(key);
	    });
	  }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  translations: {
	    'en': {
	      'table': {
	        'label_limits': 'Show',
	        'label_search': 'Search',
	        'placeholder_search': 'Type to search..',
	        'records_not_found': 'No records found'
	      },
	      'pagination': {
	        'label_show': 'Showing',
	        'label_to': 'to',
	        'label_of': 'of',
	        'label_entries': 'entries',
	        'btn_first': 'First',
	        'btn_last': 'Latest'
	      }
	    },
	
	    'es': {
	      'table': {
	        'label_limits': 'Mostrar',
	        'label_search': 'Buscar',
	        'placeholder_search': 'Buscar ..',
	        'records_not_found': 'No se encontraron registros.'
	      },
	      'pagination': {
	        'label_show': 'Mostrando',
	        'label_to': 'a',
	        'label_of': 'de',
	        'label_entries': 'registros',
	        'btn_first': 'Primero',
	        'btn_last': 'Último'
	      }
	    },
	
	    'fr': {
	      'table': {
	        'label_limits': 'Afficher',
	        'label_search': 'Recherche',
	        'placeholder_search': 'Recherche par mot-clé..',
	        'records_not_found': 'Aucun enregistrements trouvés'
	      },
	      'pagination': {
	        'label_show': 'Affichage de',
	        'label_to': 'à',
	        'label_of': 'de',
	        'label_entries': 'entrées',
	        'btn_first': 'Première',
	        'btn_last': 'Dernière'
	      }
	    },
	
	    'zh-CN': {
	      'table': {
	        'label_limits': '显示',
	        'label_search': '搜索',
	        'placeholder_search': '输入搜索..',
	        'records_not_found': '记录未找到'
	      },
	      'pagination': {
	        'label_show': '正在显示',
	        'label_to': '到',
	        'label_of': '总共',
	        'label_entries': '条目',
	        'btn_first': '首页',
	        'btn_last': '未页'
	      }
	    },
	
	    'ca': {
	      'table': {
	        'label_limits': 'Mostrar',
	        'label_search': 'Buscar',
	        'placeholder_search': 'Buscar ..',
	        'records_not_found': 'No s\'han trobat registres.'
	      },
	      'pagination': {
	        'label_show': 'Mostrant',
	        'label_to': 'a',
	        'label_of': 'de',
	        'label_entries': 'registres',
	        'btn_first': 'Primer',
	        'btn_last': 'Últim'
	      }
	    }
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  fetchFromObject: function fetchFromObject(obj, column, render) {
	    if (typeof obj === 'undefined') return false;
	    var _index = column.indexOf('.');
	    if (_index > -1) {
	      return this.fetchFromObject(obj[column.substring(0, _index)], column.substr(_index + 1));
	    }
	    if (typeof render != 'undefined') {
	      return render(obj[column]);
	    }
	    return obj[column];
	  },
	  changePage: function changePage(page) {
	    this.selected = null;
	    this.indexSelected = -1;
	    this.$emit('change', { perpage: this.perpage, page: page });
	  },
	  selectRow: function selectRow(row, index) {
	    if (this.indexSelected == index) {
	      this.indexSelected = -1;
	      this.selected = null;
	    } else {
	      this.indexSelected = index;
	      this.selected = {
	        'row': row,
	        'index': index
	      };
	    }
	  },
	  tableInfo: function tableInfo() {
	    var label_show = this.translation.pagination.label_show;
	    var from = this.pagination.from == null ? 0 : this.pagination.from;
	    var label_to = this.translation.pagination.label_to;
	    var to = this.pagination.to == null ? 0 : this.pagination.to;
	    var label_of = this.translation.pagination.label_of;
	    var total = this.pagination.total;
	    var label_entries = this.translation.pagination.label_entries;
	
	    return label_show + ' ' + from + ' ' + label_to + ' ' + to + ' ' + label_of + ' ' + total + ' ' + label_entries;
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-datasource .Vue__panel-body[data-v-0747af48] {\n  padding: 0;\n}\n.vue-datasource .Vue__panel-body .Vue__table[data-v-0747af48] {\n    margin-bottom: 0;\n}\n.vue-datasource .Vue__panel-footer .Vue__datasource_actions[data-v-0747af48] {\n  margin: 10px 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.Vue__pagination nav .pagination[data-v-741f57a8] {\n  margin: 10px 0 !important;\n}\n", ""]);
	
	// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(13)
	
	/* script */
	__vue_exports__ = __webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0747af48"
	
	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-741f57a8"
	
	module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vue-datasource"
	  }, [_c('div', {
	    staticClass: "panel panel-default"
	  }, [_c('div', {
	    staticClass: "panel-heading"
	  }, [_c('div', {
	    staticClass: "form-inline"
	  }, [_c('div', {
	    staticClass: "form-group pull-left"
	  }, [_c('label', {
	    staticClass: "control-label pr2"
	  }, [_vm._v(_vm._s(_vm.translation.table.label_limits))]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.perpage),
	      expression: "perpage"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "number": ""
	    },
	    on: {
	      "change": function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.perpage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }
	    }
	  }, _vm._l((_vm.limits), function(limit) {
	    return _c('option', {
	      domProps: {
	        "value": limit
	      }
	    }, [_vm._v(_vm._s(limit))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "form-group pull-right"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.search),
	      expression: "search"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.translation.table.placeholder_search
	    },
	    domProps: {
	      "value": (_vm.search)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.search = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.searching($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.table.label_search) + "\n          ")])]), _vm._v(" "), _c('div', {
	    staticClass: "clearfix"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "panel-body Vue__panel-body"
	  }, [_c('table', {
	    staticClass: "table table-striped Vue__table"
	  }, [_c('thead', [_c('tr', _vm._l((_vm.columns), function(column) {
	    return _c('th', [_vm._v(_vm._s(column.name))])
	  }))]), _vm._v(" "), _c('tbody', [(_vm.pagination.total == 0) ? _c('tr', [_c('td', {
	    attrs: {
	      "colspan": _vm.columns.length
	    }
	  }, [_vm._v(_vm._s(_vm.translation.table.records_not_found))])]) : _vm._l((_vm.tableData), function(row, index) {
	    return _c('tr', {
	      class: {
	        'success': (index == _vm.indexSelected)
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.selectRow(row, index)
	        }
	      }
	    }, _vm._l((_vm.columns), function(k) {
	      return _c('td', {
	        domProps: {
	          "innerHTML": _vm._s(_vm.fetchFromObject(row, k.key, k.render))
	        }
	      })
	    }))
	  }), _vm._v(" "), _c('tr', [_c('td', {
	    staticClass: "text-center",
	    attrs: {
	      "colspan": _vm.columns.length
	    }
	  }, [_vm._v("\n            " + _vm._s(_vm.tableInfo) + "\n          ")])])], 2)])]), _vm._v(" "), _c('div', {
	    staticClass: "panel-footer Vue__panel-footer"
	  }, [_c('div', {
	    staticClass: "pull-left"
	  }, [_c('div', {
	    staticClass: "btn-group Vue__datasource_actions"
	  }, _vm._l((_vm.actions), function(btn) {
	    return _c('button', {
	      staticClass: "btn btn-default",
	      class: btn.class,
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          btn.event($event, _vm.selected)
	        }
	      }
	    }, [(btn.icon) ? _c('i', {
	      staticClass: "pr1",
	      class: btn.icon
	    }) : _vm._e(), _vm._v("\n            " + _vm._s(btn.text) + "\n          ")])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "pull-right"
	  }, [_c('pagination', {
	    attrs: {
	      "pages": _vm.pagination,
	      "translation": _vm.translation.pagination
	    },
	    on: {
	      "change": _vm.changePage
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "clearfix"
	  })])])])
	},staticRenderFns: []}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Vue__pagination"
	  }, [_c('nav', {
	    attrs: {
	      "aria-label": "Page navigation"
	    }
	  }, [_c('ul', {
	    staticClass: "pagination"
	  }, [_c('li', {
	    class: (_vm.pages.current_page == 1) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.firstPage($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.btn_first))])]), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == 1) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "aria-label": "Previous"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.previous($event)
	      }
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("«")])])]), _vm._v(" "), _vm._l((_vm.items), function(n) {
	    return _c('li', {
	      class: (_vm.pages.current_page == n) ? 'active' : ''
	    }, [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.change(n)
	        }
	      }
	    }, [_vm._v(_vm._s(n))])])
	  }), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == _vm.pages.last_page) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "aria-label": "Next"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.next($event)
	      }
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("»")])])]), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == _vm.pages.last_page) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.lastPage(_vm.pages.last_page)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.btn_last))])])], 2)])])
	},staticRenderFns: []}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0747af48&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datasource.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0747af48&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datasource.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-741f57a8&scoped=true!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-741f57a8&scoped=true!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-datasource.js.map

/***/ }),

/***/ 926:
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
  }), _vm._v(" 表格")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("Vue表格组件")])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('datasource', {
    attrs: {
      "language": "en",
      "table-data": _vm.getData,
      "columns": _vm.columns,
      "pagination": _vm.information.pagination,
      "actions": _vm.actions
    },
    on: {
      "change": _vm.changePage,
      "searching": _vm.onSearch
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "plugins-tips"
  }, [_vm._v("\n        vue-datasource：一个用于动态创建表格的vue.js服务端组件。\n        访问地址："), _c('a', {
    attrs: {
      "href": "https://github.com/coderdiaz/vue-datasource",
      "target": "_blank"
    }
  }, [_vm._v("vue-datasource")])])
}]}

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(620);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(185)("2b16d697", content, true);

/***/ })

});