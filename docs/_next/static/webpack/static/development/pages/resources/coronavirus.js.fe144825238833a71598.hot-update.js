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
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _coronavirus_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coronavirus.css */ "./components/resources/coronavirus/coronavirus.css");
/* harmony import */ var _coronavirus_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coronavirus_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coronavirus_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coronavirus.json */ "./components/resources/coronavirus/coronavirus.json");
var _coronavirus_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./coronavirus.json */ "./components/resources/coronavirus/coronavirus.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\resources\\coronavirus\\coronavirus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Coronavirus = function Coronavirus() {
  return __jsx("div", {
    className: "coronavirus-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "McMurtry COVID-19 FAQs",
    width: [300, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.9, 0.5],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Hey McMurtry!,")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "covid12-faqs",
    ml: "auto",
    mr: "auto",
    width: [0.9, 0.6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _coronavirus_json__WEBPACK_IMPORTED_MODULE_4__["faqs"].map(function (faq) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, faq.question), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, faq.answer));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Coronavirus);

/***/ })

})
//# sourceMappingURL=coronavirus.js.fe144825238833a71598.hot-update.js.map