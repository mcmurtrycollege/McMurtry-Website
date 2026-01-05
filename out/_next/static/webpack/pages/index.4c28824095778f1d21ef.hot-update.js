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

module.exports = JSON.parse("{\"navbar_headers\":[{\"name\":\"O-Week\",\"subheaders\":[{\"name\":\"O-Week\",\"to\":\"/oweek\"}]},{\"name\":\"About\",\"subheaders\":[{\"name\":\"About\",\"to\":\"/about\"}]},{\"name\":\"Events\",\"subheaders\":[{\"name\":\"Calendar\",\"to\":\"/events/calendar\"},{\"name\":\"Budget/Expenses\",\"to\":\"/events/budget\"}]},{\"name\":\"People\",\"subheaders\":[{\"name\":\"McTeam\",\"to\":\"/people/mcteam\"},{\"name\":\"McMinistry\",\"to\":\"/people/mcministry\"},{\"name\":\"McCourt\",\"to\":\"/people/court\"},{\"name\":\"Committees\",\"to\":\"/people/committees\"},{\"name\":\"Affinity Groups\",\"to\":\"/people/mcmurtryaffinitygroups\"},{\"name\":\"Associates\",\"to\":\"/people/associates\"},{\"name\":\"Peer Academic Advisors\",\"to\":\"/people/paas\"},{\"name\":\"Academic Fellows\",\"to\":\"/people/academicfellows\"},{\"name\":\"RHAs\",\"to\":\"/people/RHAs\"},{\"name\":\"Head Caregivers\",\"to\":\"/people/headcaregivers\"},{\"name\":\"SMR\",\"to\":\"/people/SMR\"}]},{\"name\":\"Resources\",\"subheaders\":[{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\"},{\"name\":\"P-Card Requests & Purchases\",\"to\":\"/resources/pcardmanagement\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"},{\"name\":\"McMurtry Innovation Space\",\"to\":\"/resources/mis\"},{\"name\":\"McLegislation\",\"to\":\"/resources/documents\"},{\"name\":\"Diversity Resources\",\"to\":\"/resources/diversityResources\"},{\"name\":\"Work Orders\",\"to\":\"/resources/workorders\"},{\"name\":\"McFUNd Requests\",\"to\":\"/resources/initiativerequests\"},{\"name\":\"Feedback Form\",\"to\":\"/resources/feedbackform\"}]}]}");

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
  name: "McExpenses",
  icon: "hand-coin",
  to: "/resources/pcardmanagement",
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "welcome-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Welcome to McMurtry!"), __jsx("div", {
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: [.95, .8],
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund \u2192")))), __jsx("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Student/Academic Resources Spreadsheet \u2192")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 78,
        columnNumber: 21
      }
    }, to !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 41
      }
    }, name))) : __jsx("a", {
      href: absolute,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 45
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyTW9iaWxlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhckRlc2t0b3AiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsInBlcm1hbmVudCIsImhhbmRsZVNjcm9sbCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInNldFN0YXRlIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiX3RoaXMyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkxpbmsiLCJocmVmIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hdmJhcl9oZWFkZXJzIiwibWFwIiwiX3JlZiIsIm5hbWUiLCJzdWJoZWFkZXJzIiwiX3JlZjIiLCJ0byIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTmF2YmFyIiwiaGlkZGVuIiwic3ViaGVhZGVyIiwidG9nZ2xlTmF2YmFyIiwic2hvd1N1YmhlYWRlciIsImNsb3NlU3ViaGVhZGVyIiwiaW5kZXgiLCJtYWluSGVhZGVycyIsIm1lbnVzIiwibGVmdCIsIl9sb29wIiwiaSIsInB1c2giLCJvbkNsaWNrIiwiY29uY2F0IiwibGVuZ3RoIiwiQm94IiwiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJpY29uIiwiYWJzb2x1dGUiLCJJbnRybyIsIkZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsInRhcmdldCIsInJlbCIsIl9jIiwiJFJlZnJlc2hSZWckIiwiSG9tZSIsIkhlYWRlciIsIk5hdmJhck1vYmlsZSIsIkZvb3RlciJdLCJtYXBwaW5n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RSxDQUFDLEVBRVZQLEtBQUEsQ0FBQ3dELHVFQUFZO0lBQUF0RCxNQUFBLEVBQUE1QixLQUFBO0lBQUE2QixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNoQlAsS0FBQSxDQUFDNkMsd0VBQUs7SUFBQTNDLE1BQUEsRUFBQTVCLEtBQUE7SUFBQTZCLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ1RQLEtBQUEsQ0FBQ3lELHlFQUFNO0lBQUF2RCxNQUFBLEVBQUE1QixLQUFBO0lBQUE2QixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDUixDQUFDO0FBQUEsQ0FDVDtBQUFBNkMsRUFBQSxHQVRLRSxJQUFJO0FBV0tBLG1FQUFJLEVBQUM7QUFBQSxJQUFBRixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzI4ODI0MDk1Nzc4ZjFkMjFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCB7IG5hdmJhcl9oZWFkZXJzIH0gZnJvbSAnLi9uYXZiYXIuanNvbic7XHJcbmltcG9ydCAnLi9OYXZiYXJEZXNrdG9wLmNzcyc7XHJcblxyXG5jbGFzcyBOYXZiYXJEZXNrdG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJtYW5lbnQ6ICh3aW5kb3cuc2Nyb2xsWSA+IDApIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMuc3RhdGUucGVybWFuZW50ID8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUxNTc2OFwiXHJcbiAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU3NjhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRENERkU1XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcicgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItY3Jlc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvbG9nby5zdmcnIGFsdD1cIlwiIHdpZHRoPXs0MH0gaGVpZ2h0PXs2MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWNNdXJ0cnkgQ29sbGVnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcmllcyc+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJfaGVhZGVycy5tYXAoKHsgbmFtZSwgc3ViaGVhZGVycyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNhdGVnb3J5JyBrZXk9e25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSduYXZiYXItZHJvcGRvd24tb3BlbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1YmhlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXJzLm1hcCgoeyBuYW1lLCB0byB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99IGtleT17bmFtZX0+PGE+e25hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJEZXNrdG9wIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICcuL25hdmJhck1vYmlsZS5jc3MnO1xyXG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgbmF2YmFyX2hlYWRlcnMgfSBmcm9tICcuL25hdmJhci5qc29uJ1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcclxuICAgICAgICAgICAgc3ViaGVhZGVyOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9nZ2xlTmF2YmFyID0gdGhpcy50b2dnbGVOYXZiYXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dTdWJoZWFkZXIgPSB0aGlzLnNob3dTdWJoZWFkZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlU3ViaGVhZGVyID0gdGhpcy5jbG9zZVN1YmhlYWRlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZGVuOiAhdGhpcy5zdGF0ZS5oaWRkZW4gfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3ViaGVhZGVyKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YmhlYWRlcjogaW5kZXggfSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVN1YmhlYWRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViaGVhZGVyOiBudWxsIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBtYWluSGVhZGVycyA9IFtdXHJcbiAgICAgICAgbGV0IG1lbnVzID0gW11cclxuICAgICAgICBsZXQgaGlkZGVuID0gdGhpcy5zdGF0ZS5oaWRkZW4gPyB7IGxlZnQ6ICcxMDAlJyB9IDogeyBsZWZ0OiAwIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdmJhcl9oZWFkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1haW5IZWFkZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1oZWFkZXInIGtleT17bmF2YmFyX2hlYWRlcnNbaV0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zaG93U3ViaGVhZGVyKGkpfT57bmF2YmFyX2hlYWRlcnNbaV0ubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBtZW51cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnN0YXRlLnN1YmhlYWRlciA9PT0gaSkgPyAoJ3N1YmhlYWRlci1kaXNwbGF5JykgOiAoJ3N1YmhlYWRlci1oaWRkZW4nKX0ga2V5PXtgJHtuYXZiYXJfaGVhZGVyc1tpXS5uYW1lfS1tZW51YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXZiYXJfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbG9zZVN1YmhlYWRlcn0gY2xhc3NOYW1lPSdzdWJoZWFkZXItYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7ihpAgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmJhcl9oZWFkZXJzW2ldLnN1YmhlYWRlcnMubWFwKCh7IG5hbWUsIHRvIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30ga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1YmhlYWRlci1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkLW1vYmlsZS1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hvdy1uYXZiYXJcIiBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9tZW51LnN2ZycgYWx0PVwiTWVudVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLWNyZXN0LW1vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXs0MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vc3RhdGljL2xvZ28uc3ZnJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbmF2YmFyJyBzdHlsZT17aGlkZGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1tZW51Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2Nsb3NlLW5hdmJhcicgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25zL3guc3ZnXCIgYWx0PVwiWFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFpbkhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uLzEwL2Jhbm5lci9iYW5uZXInO1xyXG5pbXBvcnQgJy4vaW50cm9wYWdlLmNzcyc7XHJcblxyXG5jb25zdCBpY29uRm9sZGVyID0gJy4uLy4uL3N0YXRpYy9pY29ucy8nXHJcbmNvbnN0IHF1aWNrTGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiLFxyXG4gICAgICAgIGljb246IFwiY2FsZW5kYXJcIixcclxuICAgICAgICB0bzogXCIvZXZlbnRzL2NhbGVuZGFyXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPLVdlZWtcIixcclxuICAgICAgICBpY29uOiBcInBlb3BsZVwiLFxyXG4gICAgICAgIC8vIGhyZWY6IFwiaHR0cHM6Ly9tY211cnRyeW93ZWVrLndpeHNpdGUuY29tL2hvbWUtcGFnZVwiXHJcbiAgICAgICAgdG86IFwiL293ZWVrXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCb29rIGEgUm9vbVwiLFxyXG4gICAgICAgIGljb246IFwiZXZlbnRcIixcclxuICAgICAgICB0bzogXCIvcmVzb3VyY2VzL3Jvb21yZXNlcnZhdGlvbnMvXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJNY0V4cGVuc2VzXCIsXHJcbiAgICAgICAgaWNvbjogXCJoYW5kLWNvaW5cIixcclxuICAgICAgICB0bzogXCIvcmVzb3VyY2VzL3BjYXJkbWFuYWdlbWVudFwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsXHJcbiAgICAgICAgaWNvbjogXCJoYW5kLWhlYXJ0XCIsXHJcbiAgICAgICAgdG86IFwiL2Fib3V0L2ZpbmFuY2lhbGluY2x1c2l2aXR5XCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEb25hdGVcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtY29pblwiLFxyXG4gICAgICAgIHRvOiBcIlwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcImh0dHBzOi8vcmljZWNvbm5lY3QucmljZS5lZHUvZG9uYXRpb24vbWNtdXJ0cnktY29sbGVnZVwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IEludHJvID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLXBhZ2UnPlxyXG4gICAgICAgIHsvKiA8QmFubmVyIC8+ICovfVxyXG4gICAgICAgIHsvKiA8TGluayBocmVmPXtcIi9yZXNvdXJjZXMvY29yb25hdmlydXNcIn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29yb25hdmlydXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxyXG4gICAgICAgICAgICAgICAgPHA+Q2xpY2sgaGVyZSBmb3IgUmVzb3VyY2VzIGFuZCBRdWVzdGlvbnMgcmVnYXJkaW5nIHRoZSBjb3JvbmF2aXJ1cyByZXNwb25zZSBhdCBSaWNlL01jTXVydHJ5PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3dlbGNvbWUtdGl0bGUnPldlbGNvbWUgdG8gTWNNdXJ0cnkhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neXVydC1ncmFwaGljJz5cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoID0ge1sgLjk1LCAuOCBdfSBzcmM9Jy4uLy4uL3N0YXRpYy9ZdXJ0VHJlZXMuc3ZnJy8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlci1kaXYnPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL0tFeVBwbExoY2xsamRTT20yXCJ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJhY2Nlc3NpYmlsaXR5LWZ1bmQtYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWNNdXJ0cnkgTWFnaXN0ZXJzJyBBY2Nlc3NpYmlsaXR5IEZ1bmQgJiM4NTk0OzwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlci1kaXYnPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE0a3ZvellVaGVDVGtILVFxeFNXZk84T01RcklMZGdyN2NXM3dGMmVQUUpzL2VkaXQjZ2lkPTEzNTI2OTM2MTdcIn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInN0dWRlbnQtcmVzb3VyY2VzLWJhbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TdHVkZW50L0FjYWRlbWljIFJlc291cmNlcyBTcHJlYWRzaGVldCAmIzg1OTQ7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHF1aWNrTGlua3MubWFwKCh7IG5hbWUsIGljb24sIHRvLCBhYnNvbHV0ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J3F1aWNrLWxpbmstY29udGFpbmVyJyB3aWR0aD17WzEzMCwgMjIwXX0ga2V5PXtgJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxdWljay1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1sYXJnZS5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Fic29sdXRlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncXVpY2stbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNzBgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNDVgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1sYXJnZS5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3F1aWNrLWxpbmstbmFtZSc+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcCc7XHJcbmltcG9ydCBOYXZiYXJNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyTW9iaWxlJztcclxuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzLzEwL2Jhbm5lci9iYW5uZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvc3BsYXNocGFnZS9pbnRyb3BhZ2UnXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9nZW5lcmFsL3BhZ2UuY3NzJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIHsvKiA8QmFubmVyIC8+ICovfVxyXG4gICAgICAgIDxOYXZiYXJNb2JpbGUgLz5cclxuICAgICAgICA8SW50cm8gLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9