"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_ProductContent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue */ "./resources/js/components/pages/ProductItem.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Pagination.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Loading.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProductItem: _ProductItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: Object(function webpackMissingModule() { var e = new Error("Cannot find module './Pagination.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module './Loading.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: {
    filters: Object
  },
  created: function created() {
    this.getProductList(this.paginator.current_page, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
  },
  data: function data() {
    return {
      productList: undefined,
      paginator: {
        current_page: 1,
        first_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        total: 1,
        per_page: 1
      },
      sortOptions: [{
        value: 'exact_price-asc',
        name: 'Giá: Tăng dần'
      }, {
        value: 'exact_price-desc',
        name: 'Giá: Giảm dần'
      }, {
        value: 'name-asc',
        name: 'Tên: A-Z'
      }, {
        value: 'name-desc',
        name: 'Tên: Z-A'
      }, {
        value: 'created_at-asc',
        name: 'Cũ nhất'
      }, {
        value: 'created_at-desc',
        name: 'Mới nhất'
      }, {
        value: 'quantity_sold-desc',
        name: 'Bán chạy nhất'
      }, {
        value: 'quantity_stock-desc',
        name: 'Tồn kho: Giảm dần'
      }],
      selectedSort: 'created_at-desc'
    };
  },
  watch: {
    $route: function $route(newRoute) {
      return newRoute.path.indexOf('collections') > -1 && this.getProductList(1, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
    },
    selectedSort: function selectedSort() {
      return this.getProductList(1, this.selectedSort);
    },
    filters: {
      handler: function handler() {
        this.getProductList(1, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
      },
      deep: true
    }
  },
  methods: {
    getProductList: function getProductList(page) {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var sort, price, color, size, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sort = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : '';
                price = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : [];
                color = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : [];
                size = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : [];
                _context.prev = 4;
                _context.next = 7;
                return axios.get('/api' + _this.$route.path + '?page=' + page + '&order=' + sort + '&price=' + price.toString() + '&color=' + color.toString() + '&size=' + size.toString());

              case 7:
                response = _context.sent;
                _this.productList = _toConsumableArray(response.data.data);
                _this.paginator = _objectSpread({}, response.data);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    itemWidth: String,
    itemHeight: String,
    product: Object
  },
  data: function data() {
    return {
      imgIndex: 0,
      imgArr: [],
      loaded: false
    };
  },
  created: function created() {
    this.imageSearch();
  },
  methods: {
    productAvailable: function productAvailable() {
      return this.product.units.reduce(function (sum, unit) {
        return sum += unit.quantity_stock;
      }, 0);
    },
    imageSearch: function imageSearch() {
      var notAvailableImage = '/images/image_not_available.jpg';

      for (var i = 0; i < this.product.units.length; i++) {
        for (var j = 0; j < this.product.units[i].images.length; j++) {
          if (this.imgArr.length < 2) {
            this.imgArr.push(this.product.units[i].images[j].src);
          } else {
            return;
          }
        }
      }

      if (!this.imgArr.length) this.imgArr.push(notAvailableImage);
    },
    onLoaded: function onLoaded() {
      this.loaded = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product-content mb-[20px] col-span-3"
};
var _hoisted_2 = {
  "class": "title flex items-top justify-between mb-[50px]"
};
var _hoisted_3 = {
  "class": "text-24px font-[700]"
};
var _hoisted_4 = ["value"];
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1,
  "class": "content-wrapper grid grid-cols-4 gap-[30px]"
};
var _hoisted_7 = {
  key: 2
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-[10px] text-14px"
}, "Không tìm thấy sản phẩm nào phù hợp!", -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  var _component_ProductItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductItem");

  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.meta.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "text-14px text-gray-600 border-t-0 border-x-0 border-b-black pl-0 pr-[20px] py-0 cursor-pointer",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedSort = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sortOptions, function (s, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: i,
      value: s.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.name), 9
    /* TEXT, PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedSort]])]), $data.productList === undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loading)])) : $data.productList.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.productList, function (p, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProductItem, {
      key: i,
      product: p,
      itemWidth: " w-[227px]",
      itemHeight: " h-[227px]"
    }, null, 8
    /* PROPS */
    , ["product"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, _hoisted_9)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.getProductList($data.paginator.current_page, $data.selectedSort, $props.filters.checkedPrices, $props.filters.checkedColors, $props.filters.checkedSizes);
    }),
    paginator: $data.paginator
  }, null, 8
  /* PROPS */
  , ["paginator"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product-block col-span-1"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  key: 0,
  "class": "absolute left-[10px] top-[10px] px-[10px] py-[5px] text-12px text-red-500 font-[700] leading-[10px] bg-white border border-gray-200"
};
var _hoisted_4 = {
  key: 1,
  "class": "absolute right-[10px] bottom-[10px] px-[10px] py-[5px] text-12px text-gray-500 font-[700] leading-[10px] bg-white border border-gray-200"
};
var _hoisted_5 = {
  "class": "box-pro-detail py-[20px]"
};
var _hoisted_6 = {
  "class": "mb-[5px] text-14px hover:text-red-500"
};
var _hoisted_7 = {
  "class": "text-14px"
};
var _hoisted_8 = {
  "class": "text-red-500"
};
var _hoisted_9 = {
  key: 0,
  "class": "ml-[5px] text-gray-500 line-through"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('block relative' + $props.itemWidth + $props.itemHeight),
    to: {
      path: '/products/' + $props.product.slug
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
        onLoad: _cache[0] || (_cache[0] = function ($event) {
          return $options.onLoaded();
        }),
        onMouseover: _cache[1] || (_cache[1] = function ($event) {
          return $data.imgIndex = 1;
        }),
        onMouseleave: _cache[2] || (_cache[2] = function ($event) {
          return $data.imgIndex = 0;
        }),
        src: $data.imgArr[$data.imgIndex],
        alt: $props.product.name,
        key: $data.imgIndex,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full h-full object-cover duration-1000 ease-in", $data.loaded ? 'opacity-100' : 'opacity-0'])
      }, null, 42
      /* CLASS, PROPS, HYDRATE_EVENTS */
      , _hoisted_2)), $props.product.exact_price < $props.product.origin_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "-" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round((1 - $props.product.exact_price / $props.product.origin_price) * 100)) + "%", 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.productAvailable() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "Hết hàng")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      path: '/products/' + $props.product.slug
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.name.toUpperCase()), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.exact_price.toLocaleString('en-US')) + " ₫", 1
  /* TEXT */
  ), $props.product.exact_price < $props.product.origin_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.origin_price.toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
}

/***/ }),

/***/ "./resources/js/components/pages/ProductContent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/ProductContent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductContent_vue_vue_type_template_id_813046c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductContent.vue?vue&type=template&id=813046c0 */ "./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0");
/* harmony import */ var _ProductContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductContent.vue?vue&type=script&lang=js */ "./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductContent_vue_vue_type_template_id_813046c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/ProductContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/ProductItem.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/ProductItem.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItem_vue_vue_type_template_id_76d53708__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=template&id=76d53708 */ "./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708");
/* harmony import */ var _ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=script&lang=js */ "./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductItem_vue_vue_type_template_id_76d53708__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/ProductItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductContent_vue_vue_type_template_id_813046c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductContent_vue_vue_type_template_id_813046c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductContent.vue?vue&type=template&id=813046c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductContent.vue?vue&type=template&id=813046c0");


/***/ }),

/***/ "./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_template_id_76d53708__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_template_id_76d53708__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductItem.vue?vue&type=template&id=76d53708 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductItem.vue?vue&type=template&id=76d53708");


/***/ })

}]);