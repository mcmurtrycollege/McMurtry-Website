webpackHotUpdate("static\\development\\pages\\oweek.js",{

/***/ "./components/oweek/homepage/homepage.js":
/*!***********************************************!*\
  !*** ./components/oweek/homepage/homepage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\oweek\\homepage\\homepage.js";



var countdown = __webpack_require__(/*! countdown */ "./node_modules/countdown/countdown.js");



var Coundown = function Coundown() {
  var today = new Date();
  var oweek = new Date(2019, 7, 18, 0, 0, 0);
  var daysToGo = countdown(new Date(2019, 7, 18)).toString();
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "oweek-countdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, daysToGo, " until O-Week!");
};

var Countdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Countdown, _React$Component);

  function Countdown() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Countdown);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Countdown).apply(this, arguments));
  }

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var Homepage = function Homepage() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "oweek-homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/mcscottishyurt.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/cardmovin.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Welcome to McMurtry!")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Advance to Go-Week")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/jumpingCoords.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/colorceleb.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/mcteam.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "../../../static/oweek/building.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Coundown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=oweek.js.7f469e64090ce0b10761.hot-update.js.map