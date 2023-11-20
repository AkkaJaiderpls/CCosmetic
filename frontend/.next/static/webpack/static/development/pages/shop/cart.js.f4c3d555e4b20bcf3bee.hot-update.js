webpackHotUpdate("static/development/pages/shop/cart.js",{

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: addToCart, removeFromCart, removeAllFromCart, decreaseQuantityCart, increaseQuantityCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromCart\", function() { return removeFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllFromCart\", function() { return removeAllFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decreaseQuantityCart\", function() { return decreaseQuantityCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseQuantityCart\", function() { return increaseQuantityCart; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ \"./src/redux/variables/index.js\");\n\nvar addToCart = function addToCart(product, quantity, color) {\n  console.log(\"Producto añadido al carrito:\", product);\n  return {\n    type: _variables__WEBPACK_IMPORTED_MODULE_0__[\"CART\"].ADD_TO_CART,\n    product: product,\n    quantity: quantity,\n    color: color\n  };\n};\nvar removeFromCart = function removeFromCart(cartId) {\n  return {\n    type: _variables__WEBPACK_IMPORTED_MODULE_0__[\"CART\"].REMOVE_FROM_CART,\n    cartId: cartId\n  };\n};\nvar removeAllFromCart = function removeAllFromCart() {\n  return {\n    type: _variables__WEBPACK_IMPORTED_MODULE_0__[\"CART\"].REMOVE_ALL_FROM_CART\n  };\n};\nvar decreaseQuantityCart = function decreaseQuantityCart(cartId) {\n  return {\n    type: _variables__WEBPACK_IMPORTED_MODULE_0__[\"CART\"].DECREASE_QUANTITY_CART,\n    cartId: cartId\n  };\n};\nvar increaseQuantityCart = function increaseQuantityCart(cartId) {\n  return {\n    type: _variables__WEBPACK_IMPORTED_MODULE_0__[\"CART\"].INCREASE_QUANTITY_CART,\n    cartId: cartId\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcz9jMTBiIl0sIm5hbWVzIjpbImFkZFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJDQVJUIiwiQUREX1RPX0NBUlQiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJZCIsIlJFTU9WRV9GUk9NX0NBUlQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsIlJFTU9WRV9BTExfRlJPTV9DQVJUIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJERUNSRUFTRV9RVUFOVElUWV9DQVJUIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUU3QixJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBSztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsOEJBQThCLEVBQUVKLE9BQU8sQ0FBQztFQUNwRCxPQUFPO0lBQ0xLLElBQUksRUFBRUMsK0NBQUksQ0FBQ0MsV0FBVztJQUN0QlAsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxLQUFLLEVBQUxBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFDTSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLE1BQU07RUFBQSxPQUFNO0lBQ3pDSixJQUFJLEVBQUVDLCtDQUFJLENBQUNJLGdCQUFnQjtJQUMzQkQsTUFBTSxFQUFOQTtFQUNGLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQTtFQUFBLE9BQVU7SUFDdENOLElBQUksRUFBRUMsK0NBQUksQ0FBQ007RUFDYixDQUFDO0FBQUEsQ0FBQztBQUVLLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlKLE1BQU07RUFBQSxPQUFNO0lBQy9DSixJQUFJLEVBQUVDLCtDQUFJLENBQUNRLHNCQUFzQjtJQUNqQ0wsTUFBTSxFQUFOQTtFQUNGLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTU0sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSU4sTUFBTTtFQUFBLE9BQU07SUFDL0NKLElBQUksRUFBRUMsK0NBQUksQ0FBQ1Usc0JBQXNCO0lBQ2pDUCxNQUFNLEVBQU5BO0VBQ0YsQ0FBQztBQUFBLENBQUMiLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vdmFyaWFibGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5LCBjb2xvcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiUHJvZHVjdG8gYcOxYWRpZG8gYWwgY2Fycml0bzpcIiwgcHJvZHVjdCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENBUlQuQUREX1RPX0NBUlQsXHJcbiAgICBwcm9kdWN0LFxyXG4gICAgcXVhbnRpdHksXHJcbiAgICBjb2xvcixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbEZyb21DYXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9BTExfRlJPTV9DQVJULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/cartActions.js\n");

/***/ })

})