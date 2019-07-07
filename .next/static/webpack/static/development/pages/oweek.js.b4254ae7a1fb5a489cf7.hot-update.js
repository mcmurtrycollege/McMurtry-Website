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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\oweek\\homepage\\homepage.js";



var countdown = __webpack_require__(/*! countdown */ "./node_modules/countdown/countdown.js");



var Countdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Countdown);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Countdown).call(this, props));
    _this.state = {
      time: countdown(new Date(2019, 7, 18)).toString(),
      myInterval: null
    };
    _this.updateTime = _this.updateTime.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Countdown, [{
    key: "updateTime",
    value: function updateTime() {
      this.setState({
        time: countdown(new Date(2019, 7, 18)).toString()
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.state.myInterval = window.setInterval(this.updateTime, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.myInterval);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "oweek-countdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.state.time), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "until O-Week!"));
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Homepage = function Homepage() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "oweek-homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/mcscottishyurt.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/cardmovin.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Welcome to McMurtry!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "oweek-welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Advance to Go-Week")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/jumpingCoords.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/colorceleb.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/mcteam.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/building.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Countdown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=oweek.js.b4254ae7a1fb5a489cf7.hot-update.js.map