webpackHotUpdate("static\\development\\pages\\oweek.js",{

/***/ "./components/oweek/homepage/homepage.js":
/*!***********************************************!*\
  !*** ./components/oweek/homepage/homepage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\oweek\\homepage\\homepage.js";




var Coundown = function Coundown() {
  var today = new Date();
  console.log(today);
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var daysToGo = 0;

  if (year === 2019) {
    if (month === 6) {
      daysToGo = 18 + 31 + (30 - day);
    }

    if (month === 7) {
      daysToGo = 18 + (31 - day);
    }

    if (month === 8) {
      daysToGo = 18 - day;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "oweek-countdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, daysToGo, " days until O-Week!"));
};

var Homepage = function Homepage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "oweek-homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../../static/oweek/mcscottishyurt.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../../static/oweek/cardmovin.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Welcome to McMurtry!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Advance to Go-Week")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Welcome to McMurtry!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Advance to Go-Week")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.5],
    style: {
      margin: 0,
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../../static/oweek/jumpingCoords.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../../static/oweek/colorceleb.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Coundown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=oweek.js.f600543641464b3aa35c.hot-update.js.map