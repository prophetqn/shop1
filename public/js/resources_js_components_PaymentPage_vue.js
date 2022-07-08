"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PaymentPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/CashIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/CreditCardIcon.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__["default"],
    CreditCardIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      provinceData: [],
      districtData: [],
      wardData: [],
      customerProvince: 'null',
      customerDistrict: 'null',
      customerWard: 'null',
      cartItems: [{
        name: 'LESS MONDAY TIE-DYE T-SHIRT',
        slug: 'less-monday-wash-t-shirt',
        price: 189000,
        beforeSalePrice: 249000,
        color: 'Xám Tie - Dye',
        size: 'M',
        quantity: 1,
        imgSrc: 'https://product.hstatic.net/200000346037/product/less-monday-6_optimized_ed50cd614f8b432da522b57d4f389b5d_medium.png'
      }, {
        name: 'Quần Japan Tokago New 2022',
        slug: 'quan-japan-tokago-new-2022',
        price: 169000,
        beforeSalePrice: 249000,
        color: '',
        size: 'M',
        quantity: 2,
        imgSrc: 'https://product.hstatic.net/200000346037/product/new8_fe162d9b605b4aac9c2704cff1a3f690_medium.png'
      }],
      shippingMethods: [{
        id: 1,
        name: 'FREESHIP ĐƠN HÀNG TỪ 300K',
        fee: 0
      }, {
        id: 2,
        name: 'Giao hàng tận nơi',
        fee: 35000
      }],
      selectedShippingId: 2,
      paymentMethods: [{
        id: 1,
        name: 'Thanh toán khi giao hàng',
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__["default"],
        note: ''
      }, {
        id: 2,
        name: 'Chuyển khoản qua ngân hàng',
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
        note: 'Cậu chuyển khoản cho chúng tớ theo thông tin sau nha:...'
      }],
      selectedPaymentId: 1
    };
  },
  mounted: function mounted() {
    this.getProvinceData();
  },
  watch: {
    customerProvince: 'getDistrictData',
    customerDistrict: 'getWardData'
  },
  methods: {
    getProvinceData: function getProvinceData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('province-data.json');

              case 3:
                response = _context.sent;
                _this.provinceData = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _this.error = _context.t0.response.data;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    getDistrictData: function getDistrictData() {
      var _this2 = this;

      this.districtData = this.provinceData.find(function (e) {
        return e.Name === _this2.customerProvince;
      }).Districts;
    },
    getWardData: function getWardData() {
      var _this3 = this;

      this.wardData = this.districtData.find(function (e) {
        return e.Name === _this3.customerDistrict;
      }).Wards;
    },
    totalPrice: function totalPrice() {
      return this.cartItems.reduce(function (total, item) {
        return total += item.quantity * item.price;
      }, 0);
    },
    shippingFee: function shippingFee() {
      var _this4 = this;

      return this.shippingMethods.find(function (e) {
        return e.id === _this4.selectedShippingId;
      }).fee;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "grid grid-cols-11 font-sans_helv"
};
var _hoisted_2 = {
  "class": "col-span-6 pl-[205px] pr-[66px] py-[30px]"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-28px leading-[28px] uppercase"
}, "Tokago", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "text-12px mt-[14px]"
};
var _hoisted_5 = {
  "class": "inline-block text-[#338dbc]"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Giỏ hàng");

var _hoisted_7 = {
  "class": "inline-block text-[#338dbc] before:content-['>'] before:px-1 before:text-gray-300"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Thông tin giao hàng");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "inline-block text-gray-500 before:content-['>'] before:px-1 before:text-gray-300"
}, " Phương thức thanh toán ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]"
}, "Phương thức vận chuyển", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "text-14px border border-gray-300 rounded-md overflow-auto"
};
var _hoisted_12 = ["for"];
var _hoisted_13 = ["id", "value"];
var _hoisted_14 = {
  "class": "pl-[10px] text-[#737373]"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]"
}, "Phương thức thanh toán", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "text-14px border border-gray-300 rounded-md"
};
var _hoisted_17 = ["for"];
var _hoisted_18 = ["id", "value"];
var _hoisted_19 = {
  "class": "pl-[10px] text-[#737373]"
};
var _hoisted_20 = {
  key: 0,
  "class": "p-[21px] text-center text-[#737373] bg-[#fafafa] border-t border-gray-300"
};
var _hoisted_21 = {
  "class": "mt-[21px]"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Quay lại thông tin giao hàng");

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "float-right relative h-[55px] leading-[55px] px-[30px] text-14px font-[500] text-white rounded-md bg-[#338dbc] hover:bg-sky-500"
}, "Hoàn tất đơn hàng", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "col-span-5 bg-[#fafafa] pr-[205px] pl-[44px] py-[30px] border-l border-gray-300"
};
var _hoisted_25 = {
  "class": "border-b border-gray-200 pb-[10px]"
};
var _hoisted_26 = {
  "class": "grid grid-cols-6 gap-[5px] py-[10px] items-center"
};
var _hoisted_27 = {
  "class": "col-span-1 relative"
};
var _hoisted_28 = {
  "class": "absolute top-[-11px] right-[-6px] h-[22px] w-[22px] text-white text-12px leading-[22px] text-center bg-[#999999] rounded-full"
};
var _hoisted_29 = ["src", "alt"];
var _hoisted_30 = {
  "class": "col-span-4"
};
var _hoisted_31 = {
  "class": "text-14px text-[#4b4b4b] font-medium hover:text-red-500"
};
var _hoisted_32 = {
  "class": "text-12px text-[#969696]"
};
var _hoisted_33 = {
  "class": "col-span-1 h-full flex flex-col justify-center"
};
var _hoisted_34 = {
  "class": "text-14px text-[#4b4b4b] font-medium text-right"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#",
  method: "POST"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grid grid-cols-4 gap-[10px] py-[21px] border-b border-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  name: "name",
  placeholder: "Mã giảm giá",
  "class": "col-span-3 w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "col-span-1 relative h-[45px] leading-[45px] text-14px font-[500] text-white rounded-md bg-[#c8c8c8] hover:bg-sky-500"
}, "Sử dụng")])], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "py-[21px] border-b border-gray-200 text-14px"
};
var _hoisted_37 = {
  "class": "overflow-auto mb-[10px]"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-[#717171]"
}, "Tạm tính", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "float-right text-[#4b4b4b]"
};
var _hoisted_40 = {
  "class": "overflow-auto"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-[#717171]"
}, "Phí vận chuyển", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "float-right text-[#4b4b4b]"
};
var _hoisted_43 = {
  "class": "overflow-auto mb-[10px] py-[21px] leading-[24px]"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-16px text-[#717171]"
}, "Tổng cộng", -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "float-right"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-[10px] text-13px text-[#969696]"
}, "VND", -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "text-24px text-[#4b4b4b]"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'cart'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'checkout'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_9]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.shippingMethods, function (m) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: m.id,
      "class": "even:border-t even:border-gray-300"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": 'shipping-method-' + m.id,
      "class": "p-[18px] flex justify-between items-center cursor-pointer"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.selectedShippingId = $event;
      }),
      id: 'shipping-method-' + m.id,
      value: m.id
    }, null, 8
    /* PROPS */
    , _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.selectedShippingId]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.name), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.fee.toLocaleString('en-US')) + "₫", 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_12)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paymentMethods, function (m) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: m.id,
      "class": "even:border-t even:border-gray-300"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": 'payment-method-' + m.id,
      "class": "p-[18px] flex items-center cursor-pointer"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return $data.selectedPaymentId = $event;
      }),
      id: 'payment-method-' + m.id,
      value: m.id
    }, null, 8
    /* PROPS */
    , _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.selectedPaymentId]]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(m.icon), {
      "class": "inline-block w-8 h-8 ml-[10px]"
    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.name), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_17), $data.selectedPaymentId === m.id && m.note ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.note), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "block float-left text-14px text-[#338dbc] leading-[55px] hover:text-sky-500",
    to: {
      name: 'payment'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_22];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_23])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_25, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.cartItems, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-[64px] w-[64px] object-contain bg-white border border-gray-200 rounded-md",
      src: item.imgSrc,
      alt: item.name
    }, null, 8
    /* PROPS */
    , _hoisted_29)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'products',
        params: {
          slug: item.slug
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.color && item.color + '/') + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.size), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((item.quantity * item.price).toLocaleString('en-US')) + "₫", 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalPrice().toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.shippingFee() ? $options.shippingFee().toLocaleString('en-US') + '₫' : 'Miễn phí'), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($options.totalPrice() + $options.shippingFee()).toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )])])])]);
}

/***/ }),

/***/ "./resources/js/components/PaymentPage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/PaymentPage.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentPage_vue_vue_type_template_id_23d6a3cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentPage.vue?vue&type=template&id=23d6a3cc */ "./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc");
/* harmony import */ var _PaymentPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentPage.vue?vue&type=script&lang=js */ "./resources/js/components/PaymentPage.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaymentPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PaymentPage_vue_vue_type_template_id_23d6a3cc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/PaymentPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/PaymentPage.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/PaymentPage.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPage_vue_vue_type_template_id_23d6a3cc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPage_vue_vue_type_template_id_23d6a3cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPage.vue?vue&type=template&id=23d6a3cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPage.vue?vue&type=template&id=23d6a3cc");


/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/CashIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/CashIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/CreditCardIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/CreditCardIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    })
  ]))
}

/***/ })

}]);