webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar/navbarDesktop.js":
/*!********************************************!*\
  !*** ./components/navbar/navbarDesktop.js ***!
  \********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar.json */ "./components/navbar/navbar.json");
var _navbar_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./navbar.json */ "./components/navbar/navbar.json", 1);
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavbarDesktop.css */ "./components/navbar/NavbarDesktop.css");
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\navbar\\navbarDesktop.js";






var NavbarDesktop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavbarDesktop, _React$Component);

  function NavbarDesktop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarDesktop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarDesktop).call(this, props));
    _this.state = {
      permanent: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarDesktop, [{
    key: "handleScroll",
    value: function handleScroll() {
      this.setState({
        permanent: window.scrollY > 0
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.state.permanent ? {
        backgroundColor: "#515768"
      } : {
        paddingTop: '15px',
        paddingBottom: '15px',
        color: "#515768",
        backgroundColor: "#DCDFE5"
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-wrapper",
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-crest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "../static/logo.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "McMurtry College"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-catagories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"].map(function (_ref) {
        var name = _ref.name,
            subheaders = _ref.subheaders;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "navbar-category",
          key: name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "navbar-dropdown-opener",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "dropdown-subheaders",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, subheaders.map(function (_ref2) {
          var name = _ref2.name,
              to = _ref2.to;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: to,
            key: name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, name));
        })));
      })));
    }
  }]);

  return NavbarDesktop;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavbarDesktop);

/***/ })

})
//# sourceMappingURL=index.js.cfbf81d7117bd8df6d33.hot-update.js.map