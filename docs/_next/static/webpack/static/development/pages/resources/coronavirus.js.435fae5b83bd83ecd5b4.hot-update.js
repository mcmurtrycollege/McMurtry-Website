webpackHotUpdate("static\\development\\pages\\resources\\coronavirus.js",{

/***/ "./components/resources/coronavirus/coronavirus.js":
/*!*********************************************************!*\
  !*** ./components/resources/coronavirus/coronavirus.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _coronavirus_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coronavirus.css */ "./components/resources/coronavirus/coronavirus.css");
/* harmony import */ var _coronavirus_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coronavirus_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coronavirus_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coronavirus.json */ "./components/resources/coronavirus/coronavirus.json");
var _coronavirus_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./coronavirus.json */ "./components/resources/coronavirus/coronavirus.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\resources\\coronavirus\\coronavirus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Coronavirus = function Coronavirus() {
  return __jsx("div", {
    className: "coronavirus-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "McMurtry COVID-19 FAQs",
    width: [300, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "covid12-faqs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _coronavirus_json__WEBPACK_IMPORTED_MODULE_3__["faqs"].map(function (faq) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, faq.question), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, faq.answer));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Coronavirus);

/***/ })

})
//# sourceMappingURL=coronavirus.js.435fae5b83bd83ecd5b4.hot-update.js.map