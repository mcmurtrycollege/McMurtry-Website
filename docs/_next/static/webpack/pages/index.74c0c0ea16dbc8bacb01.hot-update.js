webpackHotUpdate_N_E("pages/index",{

/***/ "./components/general/ImageCarousel.js":
false,

/***/ "./components/navbar/StaggeredMenu.js":
false,

/***/ "./components/navbar/navbar.json":
/*!***************************************!*\
  !*** ./components/navbar/navbar.json ***!
  \***************************************/
/*! exports provided: navbar_headers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"navbar_headers\":[{\"name\":\"O-Week\",\"subheaders\":[{\"name\":\"O-Week\",\"to\":\"/oweek\"}]},{\"name\":\"About\",\"subheaders\":[{\"name\":\"About\",\"to\":\"/about\"}]},{\"name\":\"Events\",\"subheaders\":[{\"name\":\"Calendar\",\"to\":\"/events/calendar\"},{\"name\":\"Budget/Expenses\",\"to\":\"/events/budget\"}]},{\"name\":\"People\",\"subheaders\":[{\"name\":\"McTeam\",\"to\":\"/people/mcteam\"},{\"name\":\"McMinistry\",\"to\":\"/people/mcministry\"},{\"name\":\"McCourt\",\"to\":\"/people/court\"},{\"name\":\"Committees\",\"to\":\"/people/committees\"},{\"name\":\"Affinity Groups\",\"to\":\"/people/mcmurtryaffinitygroups\"},{\"name\":\"Associates\",\"to\":\"/people/associates\"},{\"name\":\"Peer Academic Advisors\",\"to\":\"/people/paas\"},{\"name\":\"Academic Fellows\",\"to\":\"/people/academicfellows\"},{\"name\":\"RHAs\",\"to\":\"/people/RHAs\"},{\"name\":\"Head Caregivers\",\"to\":\"/people/headcaregivers\"},{\"name\":\"SMR\",\"to\":\"/people/SMR\"}]},{\"name\":\"Resources\",\"subheaders\":[{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"},{\"name\":\"McMurtry Innovation Space\",\"to\":\"/resources/mis\"},{\"name\":\"McLegislation\",\"to\":\"/resources/documents\"},{\"name\":\"Diversity Resources\",\"to\":\"/resources/diversityResources\"},{\"name\":\"Work Orders\",\"to\":\"/resources/workorders\"},{\"name\":\"McFUNd Requests\",\"to\":\"/resources/initiativerequests\"},{\"name\":\"Feedback Form\",\"to\":\"/resources/feedbackform\"}]}]}");

/***/ }),

/***/ "./components/navbar/navbarDesktop.js":
/*!********************************************!*\
  !*** ./components/navbar/navbarDesktop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.json */ "./components/navbar/navbar.json");
var _navbar_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./navbar.json */ "./components/navbar/navbar.json", 1);
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavbarDesktop.css */ "./components/navbar/NavbarDesktop.css");
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\navbar\\navbarDesktop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var NavbarDesktop = /*#__PURE__*/function (_React$Component) {
  function NavbarDesktop(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarDesktop);
    _this = _callSuper(this, NavbarDesktop, [props]);
    _this.state = {
      permanent: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavbarDesktop, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarDesktop, [{
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
      var _this2 = this;
      var style = this.state.permanent ? {
        backgroundColor: "#515768"
      } : {
        paddingTop: '15px',
        paddingBottom: '15px',
        color: "#515768",
        backgroundColor: "#DCDFE5"
      };
      return __jsx("div", {
        className: "navbar-wrapper",
        style: style,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header-crest",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: "../../static/logo.svg",
        alt: "",
        width: 40,
        height: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }, "McMurtry College"))), __jsx("div", {
        className: "navbar-categories",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, _navbar_json__WEBPACK_IMPORTED_MODULE_8__["navbar_headers"].map(function (_ref) {
        var name = _ref.name,
          subheaders = _ref.subheaders;
        return __jsx("div", {
          className: "navbar-category",
          key: name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }
        }, __jsx("button", {
          className: "navbar-dropdown-opener",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }
        }, name), __jsx("div", {
          className: "dropdown-subheaders",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }
        }, subheaders.map(function (_ref2) {
          var name = _ref2.name,
            to = _ref2.to;
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: to,
            key: name,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 45
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 72
            }
          }, name));
        })));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (NavbarDesktop);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navbar/navbarMobile.js":
/*!*******************************************!*\
  !*** ./components/navbar/navbarMobile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navbarMobile_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbarMobile.css */ "./components/navbar/navbarMobile.css");
/* harmony import */ var _navbarMobile_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navbarMobile_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar.json */ "./components/navbar/navbar.json");
var _navbar_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./navbar.json */ "./components/navbar/navbar.json", 1);





var _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\navbar\\navbarMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var Navbar = /*#__PURE__*/function (_React$Component) {
  function Navbar(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);
    _this = _callSuper(this, Navbar, [props]);
    _this.state = {
      hidden: true,
      subheader: null
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(_this);
    _this.showSubheader = _this.showSubheader.bind(_this);
    _this.closeSubheader = _this.closeSubheader.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        hidden: !this.state.hidden
      });
    }
  }, {
    key: "showSubheader",
    value: function showSubheader(index) {
      this.setState({
        subheader: index
      });
    }
  }, {
    key: "closeSubheader",
    value: function closeSubheader() {
      this.setState({
        subheader: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mainHeaders = [];
      var menus = [];
      var hidden = this.state.hidden ? {
        left: '100%'
      } : {
        left: 0
      };
      var _loop = function _loop(i) {
        mainHeaders.push(__jsx("div", {
          className: "main-header",
          key: _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"][i].name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        }, __jsx("a", {
          onClick: function onClick() {
            return _this2.showSubheader(i);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }
        }, _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"][i].name)));
        menus.push(__jsx("div", {
          className: _this2.state.subheader === i ? 'subheader-display' : 'subheader-hidden',
          key: "".concat(_navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"][i].name, "-menu"),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "mobile-navbar__container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }
        }, __jsx("div", {
          onClick: _this2.closeSubheader,
          className: "subheader-back",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }
        }, "\u2190 Back")), _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"][i].subheaders.map(function (_ref) {
          var name = _ref.name,
            to = _ref.to;
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: to,
            key: name,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
            }
          }, __jsx("div", {
            className: "subheader-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 37
            }
          }, name));
        }))));
      };
      for (var i = 0; i < _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"].length; i++) {
        _loop(i);
      }
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "fixed-mobile-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: "show-navbar",
        src: "../../static/icons/menu.svg",
        alt: "Menu",
        onClick: this.toggleNavbar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "header-crest-mobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "../../static/logo.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 33
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 29
        }
      }, "McMurtry College")))), __jsx("div", {
        className: "mobile-navbar",
        style: hidden,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "main-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }, __jsx("img", {
        className: "close-navbar",
        src: "../../static/icons/x.svg",
        alt: "X",
        onClick: this.toggleNavbar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }), mainHeaders), menus));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ "./components/splashpage/intropage.css");
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\splashpage\\intropage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import Banner from '../10/banner/banner';

var iconFolder = '../../static/icons/';
var quickLinks = [{
  name: "Calendar",
  icon: "calendar",
  to: "/events/calendar",
  absolute: ""
}, {
  name: "O-Week",
  icon: "people",
  // href: "https://mcmurtryoweek.wixsite.com/home-page"
  to: "/oweek",
  absolute: ""
}, {
  name: "Book a Room",
  icon: "event",
  to: "/resources/roomreservations/",
  absolute: ""
}, {
  name: "Financial Inclusivity",
  icon: "hand-heart",
  to: "/about/financialinclusivity",
  absolute: ""
}, {
  name: "Donate",
  icon: "hand-coin",
  to: "",
  absolute: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}];
var Intro = function Intro() {
  return __jsx("div", {
    className: "intro-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "welcome-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Welcome to McMurtry!"), __jsx("div", {
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: [.95, .8],
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund \u2192")))), __jsx("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Student/Academic Resources Spreadsheet \u2192")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, quickLinks.map(function (_ref) {
    var name = _ref.name,
      icon = _ref.icon,
      to = _ref.to,
      absolute = _ref.absolute;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "quick-link-container",
      width: [130, 220],
      key: "".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, to !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }, name))) : __jsx("a", {
      href: absolute,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 45
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 45
      }
    }, name))));
  })));
};
_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);
var _c;
$RefreshReg$(_c, "Intro");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/gsap/CSSPlugin.js":
false,

/***/ "./node_modules/gsap/gsap-core.js":
false,

/***/ "./node_modules/gsap/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/general/header */ "./components/general/header.js");
/* harmony import */ var _components_navbar_navbarDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar/navbarDesktop */ "./components/navbar/navbarDesktop.js");
/* harmony import */ var _components_navbar_navbarMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar/navbarMobile */ "./components/navbar/navbarMobile.js");
/* harmony import */ var _components_general_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/general/footer/footer */ "./components/general/footer/footer.js");
/* harmony import */ var _components_splashpage_intropage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/splashpage/intropage */ "./components/splashpage/intropage.js");
/* harmony import */ var _components_general_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/general/page.css */ "./components/general/page.css");
/* harmony import */ var _components_general_page_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_general_page_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
  _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import Banner from '../components/10/banner/banner';



var Home = function Home() {
  return __jsx("div", {
    className: "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_general_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_components_navbar_navbarDesktop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(_components_navbar_navbarMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(_components_splashpage_intropage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_components_general_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
};
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyTW9iaWxlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhckRlc2t0b3AiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsInBlcm1hbmVudCIsImhhbmRsZVNjcm9sbCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInNldFN0YXRlIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiX3RoaXMyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkxpbmsiLCJocmVmIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hdmJhcl9oZWFkZXJzIiwibWFwIiwiX3JlZiIsIm5hbWUiLCJzdWJoZWFkZXJzIiwiX3JlZjIiLCJ0byIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTmF2YmFyIiwiaGlkZGVuIiwic3ViaGVhZGVyIiwidG9nZ2xlTmF2YmFyIiwic2hvd1N1YmhlYWRlciIsImNsb3NlU3ViaGVhZGVyIiwiaW5kZXgiLCJtYWluSGVhZGVycyIsIm1lbnVzIiwibGVmdCIsIl9sb29wIiwiaSIsInB1c2giLCJvbkNsaWNrIiwiY29uY2F0IiwibGVuZ3RoIiwiQm94IiwiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJpY29uIiwiYWJzb2x1dGUiLCJJbnRybyIsIkZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsInRhcmdldCIsInJlbCIsIl9jIiwiJFJlZnJlc2hSZWckIiwiSG9tZSIsIkhlYWRlciIsIk5hdmJhck1vYmlsZSIsIkZvb3RlciJdLCJtYXBwaW5n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QUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ2hCUCxLQUFBLENBQUM2Qyx3RUFBSztJQUFBM0MsTUFBQSxFQUFBNUIsS0FBQTtJQUFBNkIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDVFAsS0FBQSxDQUFDeUQseUVBQU07SUFBQXZELE1BQUEsRUFBQTVCLEtBQUE7SUFBQTZCLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNSLENBQUM7QUFBQSxDQUNUO0FBQUE2QyxFQUFBLEdBVEtFLElBQUk7QUFXS0EsbUVBQUksRUFBQztBQUFBLElBQUFGLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0YzBjMGVhMTZkYmM4YmFjYjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgbmF2YmFyX2hlYWRlcnMgfSBmcm9tICcuL25hdmJhci5qc29uJztcclxuaW1wb3J0ICcuL05hdmJhckRlc2t0b3AuY3NzJztcclxuXHJcbmNsYXNzIE5hdmJhckRlc2t0b3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlcm1hbmVudDogKHdpbmRvdy5zY3JvbGxZID4gMCkgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gdGhpcy5zdGF0ZS5wZXJtYW5lbnQgPyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTE1NzY4XCJcclxuICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzUxNTc2OFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQ0RGRTVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1jcmVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uL3N0YXRpYy9sb2dvLnN2ZycgYWx0PVwiXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezYwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jYXRlZ29yaWVzJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmJhcl9oZWFkZXJzLm1hcCgoeyBuYW1lLCBzdWJoZWFkZXJzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcnknIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25hdmJhci1kcm9wZG93bi1vcGVuZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tc3ViaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcnMubWFwKCh7IG5hbWUsIHRvIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30ga2V5PXtuYW1lfT48YT57bmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhckRlc2t0b3AiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJy4vbmF2YmFyTW9iaWxlLmNzcyc7XHJcbmltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgeyBuYXZiYXJfaGVhZGVycyB9IGZyb20gJy4vbmF2YmFyLmpzb24nXHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJoZWFkZXI6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVOYXZiYXIgPSB0aGlzLnRvZ2dsZU5hdmJhci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd1N1YmhlYWRlciA9IHRoaXMuc2hvd1N1YmhlYWRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VTdWJoZWFkZXIgPSB0aGlzLmNsb3NlU3ViaGVhZGVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRkZW46ICF0aGlzLnN0YXRlLmhpZGRlbiB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTdWJoZWFkZXIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViaGVhZGVyOiBpbmRleCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlU3ViaGVhZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJoZWFkZXI6IG51bGwgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG1haW5IZWFkZXJzID0gW11cclxuICAgICAgICBsZXQgbWVudXMgPSBbXVxyXG4gICAgICAgIGxldCBoaWRkZW4gPSB0aGlzLnN0YXRlLmhpZGRlbiA/IHsgbGVmdDogJzEwMCUnIH0gOiB7IGxlZnQ6IDAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFyX2hlYWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWFpbkhlYWRlcnMucHVzaChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWhlYWRlcicga2V5PXtuYXZiYXJfaGVhZGVyc1tpXS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dTdWJoZWFkZXIoaSl9PntuYXZiYXJfaGVhZGVyc1tpXS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMuc3RhdGUuc3ViaGVhZGVyID09PSBpKSA/ICgnc3ViaGVhZGVyLWRpc3BsYXknKSA6ICgnc3ViaGVhZGVyLWhpZGRlbicpfSBrZXk9e2Ake25hdmJhcl9oZWFkZXJzW2ldLm5hbWV9LW1lbnVgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLW5hdmJhcl9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsb3NlU3ViaGVhZGVyfSBjbGFzc05hbWU9J3N1YmhlYWRlci1iYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKGkCBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2YmFyX2hlYWRlcnNbaV0uc3ViaGVhZGVycy5tYXAoKHsgbmFtZSwgdG8gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvfSBrZXk9e25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViaGVhZGVyLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQtbW9iaWxlLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaG93LW5hdmJhclwiIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL21lbnUuc3ZnJyBhbHQ9XCJNZW51XCIgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItY3Jlc3QtbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezQwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvbG9nby5zdmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1jTXVydHJ5IENvbGxlZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXZiYXInIHN0eWxlPXtoaWRkZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLW1lbnUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY2xvc2UtbmF2YmFyJyBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbnMveC5zdmdcIiBhbHQ9XCJYXCIgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttYWluSGVhZGVyc31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVudXN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vMTAvYmFubmVyL2Jhbm5lcic7XHJcbmltcG9ydCAnLi9pbnRyb3BhZ2UuY3NzJztcclxuXHJcbmNvbnN0IGljb25Gb2xkZXIgPSAnLi4vLi4vc3RhdGljL2ljb25zLydcclxuY29uc3QgcXVpY2tMaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCIsXHJcbiAgICAgICAgaWNvbjogXCJjYWxlbmRhclwiLFxyXG4gICAgICAgIHRvOiBcIi9ldmVudHMvY2FsZW5kYXJcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk8tV2Vla1wiLFxyXG4gICAgICAgIGljb246IFwicGVvcGxlXCIsXHJcbiAgICAgICAgLy8gaHJlZjogXCJodHRwczovL21jbXVydHJ5b3dlZWsud2l4c2l0ZS5jb20vaG9tZS1wYWdlXCJcclxuICAgICAgICB0bzogXCIvb3dlZWtcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXHJcbiAgICAgICAgaWNvbjogXCJldmVudFwiLFxyXG4gICAgICAgIHRvOiBcIi9yZXNvdXJjZXMvcm9vbXJlc2VydmF0aW9ucy9cIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLFxyXG4gICAgICAgIGljb246IFwiaGFuZC1oZWFydFwiLFxyXG4gICAgICAgIHRvOiBcIi9hYm91dC9maW5hbmNpYWxpbmNsdXNpdml0eVwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRG9uYXRlXCIsXHJcbiAgICAgICAgaWNvbjogXCJoYW5kLWNvaW5cIixcclxuICAgICAgICB0bzogXCJcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL21jbXVydHJ5LWNvbGxlZ2VcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBJbnRybyA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1wYWdlJz5cclxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cclxuICAgICAgICB7LyogPExpbmsgaHJlZj17XCIvcmVzb3VyY2VzL2Nvcm9uYXZpcnVzXCJ9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImNvcm9uYXZpcnVzLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cclxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGhlcmUgZm9yIFJlc291cmNlcyBhbmQgUXVlc3Rpb25zIHJlZ2FyZGluZyB0aGUgY29yb25hdmlydXMgcmVzcG9uc2UgYXQgUmljZS9NY011cnRyeTwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd3ZWxjb21lLXRpdGxlJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3l1cnQtZ3JhcGhpYyc+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aCA9IHtbIC45NSwgLjggXX0gc3JjPScuLi8uLi9zdGF0aWMvWXVydFRyZWVzLnN2ZycvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXItZGl2Jz5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dvby5nbC9mb3Jtcy9LRXlQcGxMaGNsbGpkU09tMlwifT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWNjZXNzaWJpbGl0eS1mdW5kLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1jTXVydHJ5IE1hZ2lzdGVycycgQWNjZXNzaWJpbGl0eSBGdW5kICYjODU5NDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXItZGl2Jz5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xNGt2b3pZVWhlQ1RrSC1RcXhTV2ZPOE9NUXJJTGRncjdjVzN3RjJlUFFKcy9lZGl0I2dpZD0xMzUyNjkzNjE3XCJ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJzdHVkZW50LXJlc291cmNlcy1iYW5uZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U3R1ZGVudC9BY2FkZW1pYyBSZXNvdXJjZXMgU3ByZWFkc2hlZXQgJiM4NTk0OzwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBxdWlja0xpbmtzLm1hcCgoeyBuYW1lLCBpY29uLCB0bywgYWJzb2x1dGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdxdWljay1saW5rLWNvbnRhaW5lcicgd2lkdGg9e1sxMzAsIDIyMF19IGtleT17YCR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncXVpY2stbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tbGFyZ2Uuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthYnNvbHV0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tbGFyZ2Uuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1zbWFsbC5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9oZWFkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhckRlc2t0b3AnO1xyXG5pbXBvcnQgTmF2YmFyTW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhck1vYmlsZSc7XHJcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy8xMC9iYW5uZXIvYmFubmVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9wYWdlLmNzcydcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cclxuICAgICAgICA8TmF2YmFyTW9iaWxlIC8+XHJcbiAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==