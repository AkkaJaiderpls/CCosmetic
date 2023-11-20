webpackHotUpdate("static/development/pages/shop/fullwidth-4col.js",{

/***/ "./src/pages/shop/fullwidth-4col.js":
/*!******************************************!*\
  !*** ./src/pages/shop/fullwidth-4col.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShopFullwidth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hooks-paginator */ \"./node_modules/react-hooks-paginator/dist/index.esm.js\");\n/* harmony import */ var _common_productSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/productSelect */ \"./src/common/productSelect.js\");\n/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Other/Breadcrumb */ \"./src/components/Other/Breadcrumb.js\");\n/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/LayoutFour */ \"./src/components/Layout/LayoutFour.js\");\n/* harmony import */ var _components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Shop/ShopProducts */ \"./src/components/Shop/ShopProducts.js\");\n/* harmony import */ var _components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Shop/ShopHeader */ \"./src/components/Shop/ShopHeader.js\");\n/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Sections/Instagram/InstagramTwo */ \"./src/components/Sections/Instagram/InstagramTwo.js\");\nvar _jsxFileName = \"/home/rlsxsuredials/Downloads/Test/CCosmetic-master/frontend/src/pages/shop/fullwidth-4col.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction ShopFullwidth() {\n  _s();\n  var pageLimit = 12;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n    offset = _useState[0],\n    setOffset = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n    currentView = _useState2[0],\n    setCurrentView = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n    currentSort = _useState3[0],\n    setCurrentSort = _useState3[1];\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n    currentPage = _useState4[0],\n    setCurrentPage = _useState4[1];\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n    currentData = _useState5[0],\n    setCurrentData = _useState5[1];\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n    totalRecords = _useState6[0],\n    setTotalRecords = _useState6[1];\n  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"TIENDA\",\n    container: \"wide\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[\"Breadcrumb\"], {\n    title: \"TIENDA\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[\"BreadcrumbItem\"], {\n    name: \"INICIO\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[\"BreadcrumbItem\"], {\n    name: \"TIENDA\",\n    current: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"shop\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container-full-half\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    view: currentView,\n    getCurrentSort: setCurrentSort,\n    getCurrentView: function getCurrentView(view) {\n      return setCurrentView(view);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    gridColClass: \"col-12 col-sm-6 col-md-4 col-lg-3\",\n    listColClass: \"col-12 col-lg-6\",\n    view: currentView,\n    data: currentData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }), __jsx(react_hooks_paginator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    pageContainerClass: \"paginator\",\n    totalRecords: totalRecords,\n    pageLimit: pageLimit,\n    pageNeighbours: 2,\n    setOffset: setOffset,\n    currentPage: currentPage,\n    setCurrentPage: setCurrentPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }))));\n}\n_s(ShopFullwidth, \"VYFLbb3b0ZC8wb6gMquy/aIwA8g=\");\n_c = ShopFullwidth;\nvar _c;\n$RefreshReg$(_c, \"ShopFullwidth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9mdWxsd2lkdGgtNGNvbC5qcz9iZjVkIl0sIm5hbWVzIjpbIlNob3BGdWxsd2lkdGgiLCJfcyIsInBhZ2VMaW1pdCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiX3VzZVN0YXRlMiIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJfdXNlU3RhdGUzIiwiY3VycmVudFNvcnQiLCJzZXRDdXJyZW50U29ydCIsIl91c2VTdGF0ZTQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiX3VzZVN0YXRlNSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJfdXNlU3RhdGU2IiwidG90YWxSZWNvcmRzIiwic2V0VG90YWxSZWNvcmRzIiwiX19qc3giLCJMYXlvdXRGb3VyIiwidGl0bGUiLCJjb250YWluZXIiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkJyZWFkY3J1bWIiLCJCcmVhZGNydW1iSXRlbSIsIm5hbWUiLCJjdXJyZW50IiwiY2xhc3NOYW1lIiwiU2hvcEhlYWRlciIsInZpZXciLCJnZXRDdXJyZW50U29ydCIsImdldEN1cnJlbnRWaWV3IiwiU2hvcFByb2R1Y3RzIiwiZ3JpZENvbENsYXNzIiwibGlzdENvbENsYXNzIiwiZGF0YSIsIlBhZ2luYXRvciIsInBhZ2VDb250YWluZXJDbGFzcyIsInBhZ2VOZWlnaGJvdXJzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNFO0FBRWdCO0FBQ2lCO0FBQ25CO0FBQ0U7QUFDSjtBQUNrQjtBQUU3RCxTQUFTQSxhQUFhQSxDQUFBLEVBQUc7RUFBQUMsRUFBQTtFQUN0QyxJQUFNQyxTQUFTLEdBQUcsRUFBRTtFQUNwQixJQUFBQyxTQUFBLEdBQTRCQyxz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LEVBQUVBLFNBQVU7SUFDckI2QyxjQUFjLEVBQUUsQ0FBRTtJQUNsQnpDLFNBQVMsRUFBRUEsU0FBVTtJQUNyQlEsV0FBVyxFQUFFQSxXQUFZO0lBQ3pCQyxjQUFjLEVBQUVBLGNBQWU7SUFBQVcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2hDLENBQ0UsQ0FDRixDQUNLLENBQUM7QUFFakI7QUFBQzlCLEVBQUEsQ0EzQ3VCRCxhQUFhO0FBQUFnRCxFQUFBLEdBQWJoRCxhQUFhO0FBQUEsSUFBQWdELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Nob3AvZnVsbHdpZHRoLTRjb2wuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSBcInJlYWN0LWhvb2tzLXBhZ2luYXRvclwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5U29ydCB9IGZyb20gXCIuLi8uLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEZvdXJcIjtcclxuaW1wb3J0IFNob3BQcm9kdWN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaG9wL1Nob3BQcm9kdWN0c1wiO1xyXG5pbXBvcnQgU2hvcEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaG9wL1Nob3BIZWFkZXJcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9wRnVsbHdpZHRoKCkge1xyXG4gIGNvbnN0IHBhZ2VMaW1pdCA9IDEyO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldEN1cnJlbnRWaWV3XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsUmVjb3Jkcywgc2V0VG90YWxSZWNvcmRzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dEZvdXIgdGl0bGU9XCJUSUVOREFcIiBjb250YWluZXI9XCJ3aWRlXCI+XHJcbiAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiVElFTkRBXCI+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJJTklDSU9cIiAvPlxyXG4gICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiVElFTkRBXCIgY3VycmVudCAvPlxyXG4gICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZ1bGwtaGFsZlwiPlxyXG4gICAgICAgICAgPFNob3BIZWFkZXJcclxuICAgICAgICAgICAgdmlldz17Y3VycmVudFZpZXd9XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRTb3J0PXtzZXRDdXJyZW50U29ydH1cclxuICAgICAgICAgICAgZ2V0Q3VycmVudFZpZXc9eyh2aWV3KSA9PiBzZXRDdXJyZW50Vmlldyh2aWV3KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2hvcFByb2R1Y3RzXHJcbiAgICAgICAgICAgIGdyaWRDb2xDbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiXHJcbiAgICAgICAgICAgIGxpc3RDb2xDbGFzcz1cImNvbC0xMiBjb2wtbGctNlwiXHJcbiAgICAgICAgICAgIHZpZXc9e2N1cnJlbnRWaWV3fVxyXG4gICAgICAgICAgICBkYXRhPXtjdXJyZW50RGF0YX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGFnaW5hdG9yXHJcbiAgICAgICAgICAgIHBhZ2VDb250YWluZXJDbGFzcz1cInBhZ2luYXRvclwiXHJcbiAgICAgICAgICAgIHRvdGFsUmVjb3Jkcz17dG90YWxSZWNvcmRzfVxyXG4gICAgICAgICAgICBwYWdlTGltaXQ9e3BhZ2VMaW1pdH1cclxuICAgICAgICAgICAgcGFnZU5laWdoYm91cnM9ezJ9XHJcbiAgICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXRGb3VyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/shop/fullwidth-4col.js\n");

/***/ })

})