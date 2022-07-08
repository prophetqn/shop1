"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CheckoutPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      shippingFee: 0
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

      this.districtData = this.provinceData.find(function (p) {
        return p.Name === _this2.customerProvince;
      }).Districts;
    },
    getWardData: function getWardData() {
      var _this3 = this;

      this.wardData = this.districtData.find(function (p) {
        return p.Name === _this3.customerDistrict;
      }).Wards;
    },
    totalPrice: function totalPrice() {
      return this.cartItems.reduce(function (total, item) {
        return total += item.quantity * item.price;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "inline-block before:content-['>'] before:px-1 before:text-gray-300"
}, " Thông tin giao hàng ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "inline-block text-gray-500 before:content-['>'] before:px-1 before:text-gray-300"
}, " Phương thức thanh toán ", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]"
}, "Thông tin giao hàng", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-14px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "inline-block text-[#737373]"
}, "Bạn đã có tài khoản? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "inline-block text-[#338dbc] ml-[5px]",
  href: "/"
}, "Đăng nhập")], -1
/* HOISTED */
);

var _hoisted_11 = {
  action: "#",
  method: "POST"
};
var _hoisted_12 = {
  "class": ""
};
var _hoisted_13 = {
  "class": "grid grid-cols-3 gap-x-[10px]"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-span-3 my-[6px]\"><input type=\"text\" name=\"name\" placeholder=\"Họ và tên\" class=\"block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]\" required></div><div class=\"col-span-2 my-[6px]\"><input type=\"email\" name=\"email\" placeholder=\"Email\" class=\"block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]\"></div><div class=\"col-span-1 my-[6px]\"><input type=\"tel\" name=\"phone\" placeholder=\"Số điện thoại\" class=\"block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]\" required></div><div class=\"col-span-3 my-[6px]\"><input type=\"text\" name=\"address\" placeholder=\"Địa chỉ\" class=\"block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]\" required></div>", 4);

var _hoisted_18 = {
  "class": "relative col-span-1 my-[6px] before:content-['|'] before:text-[16px] before:absolute before:right-8 before:top-[10px] before:text-gray-200"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "absolute top-[5px] left-[10px] text-12px text-[#737373]"
}, "Tỉnh / thành", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "null"
}, "Chọn tỉnh / thành", -1
/* HOISTED */
);

var _hoisted_21 = ["value", "selected"];
var _hoisted_22 = {
  "class": "relative col-span-1 my-[6px] before:content-['|'] before:absolute before:right-8 before:top-[10px] before:text-gray-200"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "absolute top-[5px] left-[10px] text-12px text-[#737373]"
}, "Quận / huyện", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "null"
}, "Chọn quận / huyện", -1
/* HOISTED */
);

var _hoisted_25 = ["value"];
var _hoisted_26 = {
  "class": "relative col-span-1 my-[6px] before:content-['|'] before:absolute before:right-8 before:top-[10px] before:text-gray-200"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "absolute top-[5px] left-[10px] text-12px text-[#737373]"
}, "Phường / xã", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "null"
}, "Chọn phường / xã", -1
/* HOISTED */
);

var _hoisted_29 = ["value"];
var _hoisted_30 = {
  "class": "mt-[21px]"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Giỏ hàng");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "float-right relative h-[55px] leading-[55px] px-[30px] text-14px font-[500] text-white rounded-md bg-[#338dbc] hover:bg-sky-500"
}, "Tiếp tục đến phương thức thanh toán", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "col-span-5 bg-[#fafafa] pr-[205px] pl-[44px] py-[30px] border-l border-gray-300"
};
var _hoisted_34 = {
  "class": "border-b border-gray-200 pb-[10px]"
};
var _hoisted_35 = {
  "class": "grid grid-cols-6 gap-[5px] py-[10px] items-center"
};
var _hoisted_36 = {
  "class": "col-span-1 relative"
};
var _hoisted_37 = {
  "class": "absolute top-[-11px] right-[-6px] h-[22px] w-[22px] text-white text-12px leading-[22px] text-center bg-[#999999] rounded-full"
};
var _hoisted_38 = ["src", "alt"];
var _hoisted_39 = {
  "class": "col-span-4"
};
var _hoisted_40 = {
  "class": "text-14px text-[#4b4b4b] font-medium hover:text-red-500"
};
var _hoisted_41 = {
  "class": "text-12px text-[#969696]"
};
var _hoisted_42 = {
  "class": "col-span-1 h-full flex flex-col justify-center"
};
var _hoisted_43 = {
  "class": "text-14px text-[#4b4b4b] font-medium text-right"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
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

var _hoisted_45 = {
  "class": "py-[21px] border-b border-gray-200 text-14px"
};
var _hoisted_46 = {
  "class": "overflow-auto mb-[10px]"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-[#717171]"
}, "Tạm tính", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "float-right text-[#4b4b4b]"
};
var _hoisted_49 = {
  "class": "overflow-auto"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-[#717171]"
}, "Phí vận chuyển", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "float-right text-[#4b4b4b]"
};
var _hoisted_52 = {
  "class": "overflow-auto mb-[10px] py-[21px] leading-[24px]"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "float-left text-16px text-[#717171]"
}, "Tổng cộng", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "float-right"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-[10px] text-13px text-[#969696]"
}, "VND", -1
/* HOISTED */
);

var _hoisted_56 = {
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

  })]), _hoisted_7, _hoisted_8]), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.customerProvince = $event;
    })
  }, [_hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.provinceData, function (province, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: i,
      value: province.Name,
      selected: province.Name == 'Hà Nội'
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(province.Name), 9
    /* TEXT, PROPS */
    , _hoisted_21);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.customerProvince]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.customerDistrict = $event;
    })
  }, [_hoisted_24, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.districtData, function (district, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: i,
      value: district.Name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(district.Name), 9
    /* TEXT, PROPS */
    , _hoisted_25);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.customerDistrict]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.customerWard = $event;
    })
  }, [_hoisted_28, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.wardData, function (ward, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: i,
      value: ward.Name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ward.Name), 9
    /* TEXT, PROPS */
    , _hoisted_29);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.customerWard]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "block float-left text-14px text-[#338dbc] leading-[55px] hover:text-sky-500",
    to: {
      name: 'cart'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_32])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_34, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.cartItems, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-[64px] w-[64px] object-contain bg-white border border-gray-200 rounded-md",
      src: item.imgSrc,
      alt: item.name
    }, null, 8
    /* PROPS */
    , _hoisted_38)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
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
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.color && item.color + '/') + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.size), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((item.quantity * item.price).toLocaleString('en-US')) + "₫", 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalPrice().toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shippingFee ? $data.shippingFee.toLocaleString('en-US') + '₫' : '-'), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($options.totalPrice() + $data.shippingFee).toLocaleString('en-US')) + "₫", 1
  /* TEXT */
  )])])])]);
}

/***/ }),

/***/ "./resources/js/components/CheckoutPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CheckoutPage.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckoutPage_vue_vue_type_template_id_52950260__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutPage.vue?vue&type=template&id=52950260 */ "./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260");
/* harmony import */ var _CheckoutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutPage.vue?vue&type=script&lang=js */ "./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_shop1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CheckoutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CheckoutPage_vue_vue_type_template_id_52950260__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/CheckoutPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckoutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckoutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckoutPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckoutPage_vue_vue_type_template_id_52950260__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckoutPage_vue_vue_type_template_id_52950260__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckoutPage.vue?vue&type=template&id=52950260 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckoutPage.vue?vue&type=template&id=52950260");


/***/ })

}]);