webpackHotUpdate("static/development/pages/administration/category.js",{

/***/ "./src/pages/administration/category.js":
/*!**********************************************!*\
  !*** ./src/pages/administration/category.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout/LayoutFour */ \"./src/components/Layout/LayoutFour.js\");\n/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Other/Breadcrumb */ \"./src/components/Other/Breadcrumb.js\");\nvar _this = undefined,\n  _jsxFileName = \"/home/rlsxsuredials/Desktop/Development/CCosmetic/frontend/src/pages/administration/category.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar registerCategory = function registerCategory() {\n  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"ADMINISTRACI\\xD3N\",\n    className: \"-style-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"], {\n    title: \"ADMINISTRACI\\xD3N\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"BreadcrumbItem\"], {\n    name: \"ADMINISTRACION\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"BreadcrumbItem\"], {\n    name: \"REGISTRO DE CATEGORIAS\",\n    current: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"container mt-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    \"class\": \"animate__animated animate__fadeIn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, \"Formulario de Categorias\"), __jsx(\"div\", {\n    \"class\": \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, __jsx(\"label\", {\n    \"for\": \"productName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  }, \"Nombre de la Categoria\"), __jsx(\"input\", {\n    type: \"text\",\n    \"class\": \"form-control golden-input\",\n    id: \"productName\",\n    placeholder: \"Ingrese el nombre de la Categoria\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    \"class\": \"btn golden-button animate__animated animate__fadeIn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, \"Enviar\")));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCategory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWRtaW5pc3RyYXRpb24vY2F0ZWdvcnkuanM/ZDVmNCJdLCJuYW1lcyI6WyJyZWdpc3RlckNhdGVnb3J5IiwiX19qc3giLCJMYXlvdXRGb3VyIiwidGl0bGUiLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQnJlYWRjcnVtYiIsIkJyZWFkY3J1bWJJdGVtIiwibmFtZSIsImN1cnJlbnQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDb0I7QUFDbUI7QUFFL0UsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0VBQzNCLE9BQ0lDLEtBQUEsQ0FBQ0MscUVBQVU7SUFBQ0MsS0FBSyxFQUFDLG1CQUFnQjtJQUFDQyxTQUFTLEVBQUMsVUFBVTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNuRFYsS0FBQSxDQUFDVyx1RUFBVTtJQUFDVCxLQUFLLEVBQUMsbUJBQWdCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzlCVixLQUFBLENBQUNZLDJFQUFjO0lBQUNDLElBQUksRUFBQyxnQkFBZ0I7SUFBQVQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3hDVixLQUFBLENBQUNZLDJFQUFjO0lBQUNDLElBQUksRUFBQyx3QkFBd0I7SUFBQ0MsT0FBTztJQUFBVixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQy9DLENBQUMsRUFFYlYsS0FBQTtJQUFLLFNBQU0sZ0JBQWdCO0lBQUFJLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3ZCVixLQUFBO0lBQUksU0FBTSxtQ0FBbUM7SUFBQUksTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsNkJBQTZCLENBQUMsRUFDdkVWLEtBQUE7SUFBSyxTQUFNLFlBQVk7SUFBQUksTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbkJWLEtBQUE7SUFBTyxPQUFJLGFBQWE7SUFBQUksTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMkJBQThCLENBQUMsRUFDdkRWLEtBQUE7SUFBT2UsSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFNLDJCQUEyQjtJQUFDQyxFQUFFLEVBQUMsYUFBYTtJQUFDQyxXQUFXLEVBQUMsbUNBQW1DO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDdEgsQ0FBQyxFQUNOVixLQUFBO0lBQVFlLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBTSxxREFBcUQ7SUFBQVgsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsV0FBZSxDQUNuRyxDQUNHLENBQUM7QUFFckIsQ0FBQztBQUVjWCwrRUFBZ0IsRUFBQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9hZG1pbmlzdHJhdGlvbi9jYXRlZ29yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcblxuY29uc3QgcmVnaXN0ZXJDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0Rm91ciB0aXRsZT1cIkFETUlOSVNUUkFDScOTTlwiIGNsYXNzTmFtZT1cIi1zdHlsZS0xXCI+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIkFETUlOSVNUUkFDScOTTlwiPlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiQURNSU5JU1RSQUNJT05cIiAvPlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiUkVHSVNUUk8gREUgQ0FURUdPUklBU1wiIGN1cnJlbnQgLz5cbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+Rm9ybXVsYXJpbyBkZSBDYXRlZ29yaWFzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0TmFtZVwiPk5vbWJyZSBkZSBsYSBDYXRlZ29yaWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZ29sZGVuLWlucHV0XCIgaWQ9XCJwcm9kdWN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBlbCBub21icmUgZGUgbGEgQ2F0ZWdvcmlhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGdvbGRlbi1idXR0b24gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXRGb3VyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckNhdGVnb3J5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/administration/category.js\n");

/***/ })

})