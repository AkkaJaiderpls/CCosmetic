webpackHotUpdate("static/development/pages/homepages/homepage1.js",{

/***/ "./src/components/Sections/ProductThumb/Elements/ProductSlider.js":
/*!************************************************************************!*\
  !*** ./src/components/Sections/ProductThumb/Elements/ProductSlider.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductSlider; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Product */ \"./src/components/Product/index.js\");\n\nvar _jsxFileName = \"/home/rlsxsuredials/Downloads/Test/CCosmetic-master/frontend/src/components/Sections/ProductThumb/Elements/ProductSlider.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction ProductSlider(_ref) {\n  var _this = this;\n  var data = _ref.data,\n    sliderSettings = _ref.sliderSettings;\n  // Imprimir en consola los datos de los productos\n  console.log(\"Datos del producto en ProductSlider:\", data);\n  return __jsx(\"div\", {\n    className: \"product-slider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, sliderSettings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), data.map(function (p, index) {\n    return __jsx(\"div\", {\n      key: index,\n      className: \"product-slide__item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, __jsx(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }));\n  })));\n}\n_c = ProductSlider;\nvar _c;\n$RefreshReg$(_c, \"ProductSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9kdWN0VGh1bWIvRWxlbWVudHMvUHJvZHVjdFNsaWRlci5qcz8yMjBiIl0sIm5hbWVzIjpbIlByb2R1Y3RTbGlkZXIiLCJfcmVmIiwiX3RoaXMiLCJkYXRhIiwic2xpZGVyU2V0dGluZ3MiLCJjb25zb2xlIiwibG9nIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNsaWRlciIsIl9leHRlbmRzIiwibWFwIiwicCIsImluZGV4Iiwia2V5IiwiUHJvZHVjdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTTtBQUV4QixTQUFTQSxhQUFhQSxDQUFBQyxJQUFBLEVBQTJCO0VBQUEsSUFBQUMsS0FBQTtFQUFBLElBQXhCQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztFQUMxRDtFQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRUgsSUFBSSxDQUFDO0VBRXpELE9BQ0VJLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGdCQUFnQjtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0JQLEtBQUEsQ0FBQ1Esa0RBQU0sRUFBQUMsa0ZBQUEsS0FBS1osY0FBYztJQUFBSyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsSUFDdkJYLElBQUksQ0FBQ2MsR0FBRyxDQUFDLFVBQUNDLENBQUMsRUFBRUMsS0FBSztJQUFBLE9BQ2pCWixLQUFBO01BQUthLEdBQUcsRUFBRUQsS0FBTTtNQUFDWCxTQUFTLEVBQUMscUJBQXFCO01BQUFDLE1BQUEsRUFBQVAsS0FBQTtNQUFBUSxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQzlDUCxLQUFBLENBQUNjLGdEQUFPO01BQUNsQixJQUFJLEVBQUVlLENBQUU7TUFBQVQsTUFBQSxFQUFBUCxLQUFBO01BQUFRLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUNoQixDQUFDO0VBQUEsQ0FDUCxDQUNLLENBQ0wsQ0FBQztBQUVWO0FBQUNRLEVBQUEsR0FmdUJ0QixhQUFhO0FBQUEsSUFBQXNCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvZHVjdFRodW1iL0VsZW1lbnRzL1Byb2R1Y3RTbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFNsaWRlcih7IGRhdGEsIHNsaWRlclNldHRpbmdzIH0pIHtcclxuICAvLyBJbXByaW1pciBlbiBjb25zb2xhIGxvcyBkYXRvcyBkZSBsb3MgcHJvZHVjdG9zXHJcbiAgY29uc29sZS5sb2coXCJEYXRvcyBkZWwgcHJvZHVjdG8gZW4gUHJvZHVjdFNsaWRlcjpcIiwgZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2xpZGVyXCI+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKHAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2xpZGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPFByb2R1Y3QgZGF0YT17cH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/ProductThumb/Elements/ProductSlider.js\n");

/***/ })

})