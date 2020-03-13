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
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.js */ "./components/resources/coronavirus/content.js");
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\resources\\coronavirus\\coronavirus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Coronavirus = function Coronavirus() {
  var faqs = [];

  for (var i = 0; i < _content_js__WEBPACK_IMPORTED_MODULE_4__["default"].length; i++) {
    faqs.push(__jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, i + 1, ". ", _content_js__WEBPACK_IMPORTED_MODULE_4__["default"][i].question), _content_js__WEBPACK_IMPORTED_MODULE_4__["default"][i].answer));
  }

  return __jsx("div", {
    className: "coronavirus-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "McMurtry COVID-19 FAQs",
    width: [300, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.9, 0.55],
    ml: "auto",
    mr: "auto",
    mt: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Hey McMurtry!,"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "As you know, Rice students living on campus have been asked to vacate the campus by March 25th, unless they petition and receive special consideration from Dean Gorman. To complement the information you are receiving from the administration, the McTeam created this FAQ that addresses some of your questions regarding the move-out process at McMurtry."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Murt Love!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "The McTeam")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "covid12-faqs",
    ml: "auto",
    mr: "auto",
    width: [0.9, 0.55],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, faqs));
};

/* harmony default export */ __webpack_exports__["default"] = (Coronavirus);

/***/ })

})
//# sourceMappingURL=coronavirus.js.4b253fd58131f6ac0db4.hot-update.js.map