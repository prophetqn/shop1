"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_ProductsPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_ProductItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/ProductItem.vue */ "./resources/js/components/product/ProductItem.vue");
/* harmony import */ var _misc_Loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/Loading.vue */ "./resources/js/components/misc/Loading.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
var _excluded = ["id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var initialState = function initialState() {
  return {
    product: undefined,
    relatedProducts: [],
    colorSelect: '',
    sizeSelect: '',
    unitSelect: undefined,
    colorSwatch: undefined,
    sizeSwatch: undefined,
    quantitySelect: 0,
    quantityStock: 0,
    mainImage: '',
    productMessage: 'Vui lòng chọn kích thước và màu sắc'
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProductItem: _product_ProductItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Loading: _misc_Loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: initialState,
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)({
    cartItems: function cartItems(state) {
      return state.cart.items;
    }
  })),
  created: function created() {
    this.getProduct();
  },
  watch: {
    colorSelect: function colorSelect() {
      this.updateProduct();
      this.updateProductMessage();
    },
    sizeSelect: function sizeSelect() {
      this.updateProduct();
      this.updateProductMessage();
    },
    quantitySelect: function quantitySelect() {
      this.updateProductMessage();
    },
    $route: function $route(newRoute) {
      if (newRoute.path.indexOf('products') > -1) {
        this.resetData();
        this.getProduct();
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)('cart', ['addItemToCart'])), {}, {
    resetData: function resetData() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    getProduct: function getProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api' + _this.$route.path);

              case 3:
                response = _context.sent;
                _this.product = _objectSpread({}, response.data);

                _this.getColorSwatch();

                _this.getSizeSwatch();

                _this.getMainImage();

                _this.getRelatedProducts();

                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

                if (!(_context.t0.response.status === 404)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", _this.$router.push('/404'));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    getRelatedProducts: function getRelatedProducts() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var NUM_OF_VISIBLE_ITEMS, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                NUM_OF_VISIBLE_ITEMS = 5;
                _context2.next = 4;
                return axios.get('/api/collections/' + _this2.product.category.slug);

              case 4:
                response = _context2.sent;
                response.data.data.splice(response.data.data.findIndex(function (p) {
                  return p.id === _this2.product.id;
                }), 1);
                _this2.relatedProducts = response.data.data.slice(0, NUM_OF_VISIBLE_ITEMS);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    getColorSwatch: function getColorSwatch() {
      this.colorSwatch = this.product.units.map(function (unit) {
        return unit.color;
      });
      this.colorSwatch = this.colorSwatch.filter(function (val, i, arr) {
        return arr.findIndex(function (v) {
          return v.name === val.name;
        }) === i;
      });
      this.colorSwatch.forEach(function (color) {
        color.id = 'color-' + color.id.toString();
      });
    },
    getSizeSwatch: function getSizeSwatch() {
      this.sizeSwatch = this.product.units.map(function (unit) {
        return unit.size;
      });
      this.sizeSwatch.sort(function (a, b) {
        return a.id - b.id;
      });
      this.sizeSwatch = this.sizeSwatch.filter(function (val, i, arr) {
        return arr.findIndex(function (v) {
          return v.name === val.name;
        }) === i;
      });
      this.sizeSwatch.forEach(function (size) {
        size.id = 'size-' + size.id.toString();
      });
    },
    getMainImage: function getMainImage() {
      var notAvailableImageSrc = '/images/image_not_available.jpg';
      var firstUnitHasImage = this.product.units.find(function (unit) {
        return unit.images && unit.images.length;
      });
      firstUnitHasImage ? this.mainImage = firstUnitHasImage.images[0].src : this.mainImage = notAvailableImageSrc;
    },
    updateMainImage: function updateMainImage(image) {
      this.mainImage = image.src;
    },
    getUnitSku: function getUnitSku() {
      var _this3 = this;

      var unit = this.product.units.find(function (unit) {
        return unit.color.name === _this3.colorSelect && unit.size.name === _this3.sizeSelect;
      });
      return unit ? unit.sku : '';
    },
    updateProduct: function updateProduct() {
      var _this4 = this;

      if (this.colorSelect) {
        var notAvailableImageSrc = '/images/image_not_available.jpg';
        var firstUnitHasColorSelect = this.product.units.find(function (unit) {
          return unit.color.name === _this4.colorSelect && unit.images && unit.images.length;
        });
        firstUnitHasColorSelect ? this.mainImage = firstUnitHasColorSelect.images[0].src : this.mainImage = notAvailableImageSrc;
      }

      if (this.colorSelect && this.sizeSelect) {
        this.unitSelect = this.product.units.find(function (unit) {
          return unit.color.name === _this4.colorSelect && unit.size.name === _this4.sizeSelect;
        });
      }

      this.retrieveAndUpdateQuantity();
    },
    retrieveAndUpdateQuantity: function retrieveAndUpdateQuantity() {
      var _this5 = this;

      if (this.unitSelect) {
        var itemInCarts = this.cartItems.find(function (item) {
          return item.product_id === _this5.product.id && item.unit_id === _this5.unitSelect.id;
        });

        if (itemInCarts) {
          this.quantityStock = itemInCarts.quantity_stock - itemInCarts.pivot.quantity_select;
        } else {
          this.quantityStock = this.unitSelect.quantity_stock;
        }

        if (this.quantityStock && !this.quantitySelect) {
          this.quantitySelect = 1;
        }
      }
    },
    updateProductMessage: function updateProductMessage() {
      if (!this.colorSelect || !this.sizeSelect) {
        this.productMessage = 'Vui lòng chọn kích thước và màu sắc';
      }

      if (this.colorSelect && this.sizeSelect && (!this.unitSelect || !this.quantityStock)) {
        this.productMessage = 'Sản phẩm không khả dụng';
      }

      if (this.colorSelect && this.sizeSelect && this.unitSelect && this.quantityStock) {
        this.productMessage = "C\xF2n ".concat(this.quantityStock - this.quantitySelect, " s\u1EA3n ph\u1EA9m");
      }

      if (this.quantitySelect > this.quantityStock && this.quantityStock) {
        this.productMessage = "V\u01B0\u1EE3t qu\xE1 s\u1ED1 s\u1EA3n ph\u1EA9m t\u1ED1i \u0111a l\xE0 ".concat(this.quantityStock);
      }
    },
    addCart: function addCart() {
      var tempItem = _objectSpread(_objectSpread({}, this.unitSelect), {}, {
        product: {
          id: this.product.id,
          name: this.product.name,
          slug: this.product.slug,
          exact_price: this.product.exact_price,
          origin_price: this.product.origin_price
        },
        pivot: {
          quantity_select: this.quantitySelect
        }
      });

      var id = tempItem.id,
          restProps = _objectWithoutProperties(tempItem, _excluded);

      var item = _objectSpread({
        unit_id: id
      }, restProps);

      this.addItemToCart(item);
      this.retrieveAndUpdateQuantity();
      this.updateProductMessage();
    },
    backgroundStyle: function backgroundStyle(color) {
      return {
        backgroundColor: color
      };
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "px-[85px] py-[100px] mx-auto text-center mt-[10px]"
};
var _hoisted_2 = {
  key: 1,
  "class": "px-[85px]"
};
var _hoisted_3 = {
  "class": "py-[30px] grid grid-cols-12 gap-5"
};
var _hoisted_4 = {
  "class": "col-span-1 max-h-[1050px] overflow-auto"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = ["src", "alt"];
var _hoisted_8 = {
  "class": "col-span-7"
};
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = {
  "class": "col-span-4 pl-[5px] pr-[15px]"
};
var _hoisted_11 = {
  "class": "sticky top-0"
};
var _hoisted_12 = {
  "class": "pb-[10px] border-b border-gray-200 border-dotted"
};
var _hoisted_13 = {
  "class": "text-20px font-bold mb-[5px] uppercase"
};
var _hoisted_14 = {
  "class": "text-12px text-gray-500 uppercase"
};
var _hoisted_15 = {
  "class": "py-[10px] border-b border-gray-200 border-dotted"
};
var _hoisted_16 = {
  key: 0,
  "class": "inline-block px-[15px] py-[5px] mr-[10px] text-12px text-red-500 font-[600] leading-[1.4] bg-gray-200"
};
var _hoisted_17 = {
  "class": "text-18px text-red-500 font-bold opacity-[0.92] leading-[1.4]"
};
var _hoisted_18 = {
  key: 1,
  "class": "text-14px text-gray-500 ml-[10px] line-through"
};
var _hoisted_19 = {
  action: "#",
  method: "post"
};
var _hoisted_20 = {
  "class": "py-[10px] border-b border-gray-200 border-dotted"
};
var _hoisted_21 = {
  "class": "mb-[8px]"
};
var _hoisted_22 = {
  "class": "text-13px"
};
var _hoisted_23 = {
  "class": "pl-[5px]"
};
var _hoisted_24 = ["id", "value"];

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "absolute left-[-3px] top-[-1.5px] w-[30px] h-[30px] border border-transparent peer-hover:border-gray-500 peer-checked:border-gray-500 rounded-full -z-10"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "py-[10px] border-b border-gray-200 border-dotted"
};
var _hoisted_27 = ["for"];
var _hoisted_28 = ["id", "value"];
var _hoisted_29 = {
  "class": "inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[40px] text-12px text-center uppercase peer-checked:text-white w-[40px] h-[40px]"
};
var _hoisted_30 = {
  "class": "py-[10px]"
};
var _hoisted_31 = ["disabled"];
var _hoisted_32 = ["disabled", "max"];
var _hoisted_33 = ["disabled"];
var _hoisted_34 = ["disabled"];
var _hoisted_35 = {
  "class": "my-[20px] text-14px"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "font-bold mb-[13px]"
}, "Mô tả", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "mb-[25px] text-justify"
};
var _hoisted_38 = {
  "class": "mb-[15px]"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/size_table_1.png"
}, null, -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "mb-[30px]"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mt-[10px] mb-[50px] text-28px text-center font-[500] uppercase"
}, "Sản phẩm liên quan", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "content-wrapper grid grid-cols-5 gap-[30px]"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  var _component_ProductItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductItem");

  return !_ctx.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loading)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.product.units, function (unit, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: i
    }, [unit.images && unit.images.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(unit.images, function (image, j) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: j,
        onClick: function onClick($event) {
          return $options.updateMainImage(image);
        },
        "class": "mb-[10px] border border-transparent hover:border-gray-400 cursor-pointer"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "w-full object-cover",
        src: image.src,
        alt: _ctx.product.name
      }, null, 8
      /* PROPS */
      , _hoisted_7)], 8
      /* PROPS */
      , _hoisted_6);
    }), 128
    /* KEYED_FRAGMENT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
        "class": "w-full object-cover transition-all",
        key: _ctx.mainImage,
        src: _ctx.mainImage,
        alt: _ctx.product.name
      }, null, 8
      /* PROPS */
      , _hoisted_9))];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.product.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, "SKU: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getUnitSku()), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_ctx.product.exact_price < _ctx.product.origin_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, "-" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round((1 - _ctx.product.exact_price / _ctx.product.origin_price) * 100)) + "%", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.product.exact_price.toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  ), _ctx.product.exact_price < _ctx.product.origin_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.product.origin_price.toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.colorSelect), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.colorSwatch, function (s, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i,
      "class": "inline-block mr-[20px] relative"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      id: s.id,
      value: s.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.colorSelect = $event;
      }),
      "class": "peer w-[24px] h-[24px] border-gray-300 cursor-pointer",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.backgroundStyle(s.value))
    }, null, 12
    /* STYLE, PROPS */
    , _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, _ctx.colorSelect]]), _hoisted_25]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sizeSwatch, function (s, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i,
      "class": "inline-block mr-[10px]"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "block relative w-[40px] h-[40px] border border-gray-200 cursor-pointer",
      "for": s.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      id: s.id,
      value: s.name,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.sizeSelect = $event;
      }),
      "class": "peer invisible"
    }, null, 8
    /* PROPS */
    , _hoisted_28), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, _ctx.sizeSelect]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.name), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_27)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !_ctx.unitSelect || _ctx.quantityStock === 0 || _ctx.quantitySelect <= 1,
    "class": "h-[32px] w-[32px] bg-gray-100 text-16px font-semibold disabled:text-slate-500 disabled:cursor-not-allowed",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.quantitySelect > 1 && _ctx.quantitySelect--;
    }, ["prevent"]))
  }, "-", 8
  /* PROPS */
  , _hoisted_31), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: !_ctx.unitSelect || _ctx.quantityStock === 0,
    type: "number",
    min: "1",
    max: _ctx.quantityStock,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.quantitySelect = $event;
    }),
    "class": "h-[32px] w-[70px] text-center font-[600] text-13px border-gray-100 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed out-of-range:border-red-500 out-of-range:ring-0"
  }, null, 8
  /* PROPS */
  , _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.quantitySelect]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !_ctx.unitSelect || _ctx.quantityStock === 0 || _ctx.quantitySelect >= _ctx.quantityStock,
    "class": "h-[32px] w-[32px] bg-gray-100 text-16px font-semibold disabled:text-slate-500 disabled:cursor-not-allowed",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.quantitySelect < _ctx.quantityStock && _ctx.quantitySelect++;
    }, ["prevent"]))
  }, "+", 8
  /* PROPS */
  , _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-[10px] text-12px", _ctx.quantitySelect > _ctx.quantityStock ? 'text-red-500' : 'text-slate-500'])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.productMessage), 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addCart();
    }, ["prevent"])),
    disabled: !_ctx.unitSelect || _ctx.quantityStock === 0 || _ctx.quantitySelect > _ctx.quantityStock || _ctx.quantitySelect < 1,
    "class": "relative transition-button-red h-[50px] w-full px-[35px] py-[14px] text-12px font-[600] text-white uppercase tracking-[1px] border border-red-500 bg-transparent hover:text-black disabled:border-slate-50 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed"
  }, "Thêm vào giỏ", 8
  /* PROPS */
  , _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.product.description), 1
  /* TEXT */
  ), _hoisted_39])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.relatedProducts, function (p, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProductItem, {
      key: i,
      itemWidth: " w-[244px]",
      itemHeight: " h-[244px]",
      product: p
    }, null, 8
    /* PROPS */
    , ["product"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/pages/ProductsPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/ProductsPage.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsPage_vue_vue_type_template_id_aa912dae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsPage.vue?vue&type=template&id=aa912dae */ "./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae");
/* harmony import */ var _ProductsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsPage.vue?vue&type=script&lang=js */ "./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductsPage_vue_vue_type_template_id_aa912dae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/ProductsPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/product/ProductItem.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/product/ProductItem.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItem_vue_vue_type_template_id_0e1cd732__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=template&id=0e1cd732 */ "./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732");
/* harmony import */ var _ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=script&lang=js */ "./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductItem_vue_vue_type_template_id_0e1cd732__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/product/ProductItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsPage_vue_vue_type_template_id_aa912dae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsPage_vue_vue_type_template_id_aa912dae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsPage.vue?vue&type=template&id=aa912dae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/ProductsPage.vue?vue&type=template&id=aa912dae");


/***/ }),

/***/ "./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_template_id_0e1cd732__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductItem_vue_vue_type_template_id_0e1cd732__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductItem.vue?vue&type=template&id=0e1cd732 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/product/ProductItem.vue?vue&type=template&id=0e1cd732");


/***/ })

}]);