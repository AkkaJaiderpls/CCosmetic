webpackHotUpdate("static/development/pages/other/about.js",{

/***/ "./src/components/Header/Elements/CartItem.js":
/*!****************************************************!*\
  !*** ./src/components/Header/Elements/CartItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/utils */ \"./src/common/utils.js\");\n/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/cartActions */ \"./src/redux/actions/cartActions.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\nvar _jsxFileName = \"/home/rlsxsuredials/Downloads/Test/CCosmetic-master/frontend/src/components/Header/Elements/CartItem.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction CartItem(props) {\n  _s();\n  console.log(\"Imagen del producto:\", image);\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var image = props.image,\n    name = props.name,\n    price = props.price,\n    quantity = props.quantity,\n    cartId = props.cartId,\n    slug = props.slug;\n  var removeProductHandle = function removeProductHandle(e) {\n    e.preventDefault();\n    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__[\"removeFromCart\"])(cartId));\n    react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"].error(\"Producto eliminado del carrito!\");\n  };\n  return __jsx(\"div\", {\n    className: \"cart-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"cart-item__image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"\" + image,\n    alt: \"Product image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"cart-item__info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"\",\n    as: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, name)), __jsx(\"h5\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatCurrency\"])(price)), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"CANTIDAD: \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, quantity))), __jsx(\"a\", {\n    className: \"cart-item__remove\",\n    href: \"#\",\n    onClick: removeProductHandle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"i\", {\n    className: \"fal fa-times\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })));\n}\n_s(CartItem, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n_c = CartItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItem);\nvar _c;\n$RefreshReg$(_c, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvRWxlbWVudHMvQ2FydEl0ZW0uanM/NzlkZCJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsInByb3BzIiwiX3MiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJjYXJ0SWQiLCJzbHVnIiwicmVtb3ZlUHJvZHVjdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUZyb21DYXJ0IiwidG9hc3QiLCJlcnJvciIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJzcmMiLCJwcm9jZXNzIiwiYWx0IiwiTGluayIsImhyZWYiLCJhcyIsImZvcm1hdEN1cnJlbmN5Iiwib25DbGljayIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBRWE7QUFDYTtBQUN2QztBQUNVO0FBRXZDLFNBQVNBLFFBQVFBLENBQUNDLEtBQUssRUFBRTtFQUFBQyxFQUFBO0VBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRUMsS0FBSyxDQUFDO0VBQzFDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQVFGLEtBQUssR0FBMENKLEtBQUssQ0FBcERJLEtBQUs7SUFBRUcsSUFBSSxHQUFvQ1AsS0FBSyxDQUE3Q08sSUFBSTtJQUFFQyxLQUFLLEdBQTZCUixLQUFLLENBQXZDUSxLQUFLO0lBQUVDLFFBQVEsR0FBbUJULEtBQUssQ0FBaENTLFFBQVE7SUFBRUMsTUFBTSxHQUFXVixLQUFLLENBQXRCVSxNQUFNO0lBQUVDLElBQUksR0FBS1gsS0FBSyxDQUFkVyxJQUFJO0VBQ2xELElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlDLENBQUMsRUFBSztJQUNqQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQlQsUUFBUSxDQUFDVSxpRkFBYyxDQUFDTCxNQUFNLENBQUMsQ0FBQztJQUNoQ00sb0RBQUssQ0FBQ0MsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO0VBQ2hELENBQUM7RUFDRCxPQUNFQyxLQUFBO0lBQUtDLFNBQVMsRUFBQyxXQUFXO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN4QlAsS0FBQTtJQUFLQyxTQUFTLEVBQUMsa0JBQWtCO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMvQlAsS0FBQTtJQUFLUSxHQUFHLEVBQUVDLEVBQXNCLEdBQUd2QixLQUFNO0lBQUN3QixHQUFHLEVBQUMsZUFBZTtJQUFBUixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUM1RCxDQUFDLEVBQ05QLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDOUJQLEtBQUEsQ0FBQ1csZ0RBQUk7SUFDSEMsSUFBSSxFQUFFLEVBQUc7SUFDVEMsRUFBRSxFQUFFLEVBQUc7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRVBQLEtBQUE7SUFBQUUsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUlsQixJQUFRLENBQ1IsQ0FBQyxFQUNQVyxLQUFBO0lBQUFFLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFLTyxvRUFBYyxDQUFDeEIsS0FBSyxDQUFNLENBQUMsRUFDaENVLEtBQUE7SUFBQUUsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGlCQUNZUCxLQUFBO0lBQUFFLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFPaEIsUUFBZSxDQUMvQixDQUNBLENBQUMsRUFDTlMsS0FBQTtJQUFHQyxTQUFTLEVBQUMsbUJBQW1CO0lBQUNXLElBQUksRUFBQyxHQUFHO0lBQUNHLE9BQU8sRUFBRXJCLG1CQUFvQjtJQUFBUSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckVQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLGNBQWM7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUksQ0FDOUIsQ0FDQSxDQUFDO0FBRVY7QUFBQ3hCLEVBQUEsQ0EvQlFGLFFBQVE7RUFBQSxRQUVFTyx1REFBVztBQUFBO0FBQUE0QixFQUFBLEdBRnJCbkMsUUFBUTtBQWlDRkEsdUVBQVEsRUFBQztBQUFBLElBQUFtQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9FbGVtZW50cy9DYXJ0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRnJvbUNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbShwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiSW1hZ2VuIGRlbCBwcm9kdWN0bzpcIiwgaW1hZ2UpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGltYWdlLCBuYW1lLCBwcmljZSwgcXVhbnRpdHksIGNhcnRJZCwgc2x1ZyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdEhhbmRsZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChjYXJ0SWQpKTtcclxuICAgIHRvYXN0LmVycm9yKFwiUHJvZHVjdG8gZWxpbWluYWRvIGRlbCBjYXJyaXRvIVwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9faW1hZ2VcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtX19pbmZvXCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9e1wiXCJ9XHJcbiAgICAgICAgICBhcz17XCJcIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YT57bmFtZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoNT57Zm9ybWF0Q3VycmVuY3kocHJpY2UpfTwvaDU+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBDQU5USURBRDogPHNwYW4+e3F1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX3JlbW92ZVwiIGhyZWY9XCIjXCIgb25DbGljaz17cmVtb3ZlUHJvZHVjdEhhbmRsZX0+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/Elements/CartItem.js\n");

/***/ })

})