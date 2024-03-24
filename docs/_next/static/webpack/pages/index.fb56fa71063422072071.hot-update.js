webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
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






var _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\navbar\\navbarDesktop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var NavbarDesktop = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarDesktop, _React$Component);
  var _super = _createSuper(NavbarDesktop);
  function NavbarDesktop(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarDesktop);
    _this = _super.call(this, props);
    _this.state = {
      permanent: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarDesktop, [{
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
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
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
      }, _navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"].map(function (_ref) {
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
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  return NavbarDesktop;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcC5qcyJdLCJuYW1lcyI6WyJOYXZiYXJEZXNrdG9wIiwicHJvcHMiLCJzdGF0ZSIsInBlcm1hbmVudCIsImhhbmRsZVNjcm9sbCIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwibmF2YmFyX2hlYWRlcnMiLCJtYXAiLCJuYW1lIiwic3ViaGVhZGVycyIsInRvIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNPO0FBQ1c7QUFDbEI7QUFBQSxJQUV2QkEsYUFBYTtFQUFBO0VBQUE7RUFDZix1QkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUNmLDBCQUFNQSxLQUFLO0lBQ1gsTUFBS0MsS0FBSyxHQUFHO01BQ1RDLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFLQyxZQUFZLEdBQUcsTUFBS0EsWUFBWSxDQUFDQyxJQUFJLENBQUMsd0dBQUs7SUFBQTtFQUNwRDtFQUFDO0lBQUE7SUFBQSxPQUVELHdCQUFlO01BQ1gsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRUgsU0FBUyxFQUFHSSxNQUFNLENBQUNDLE9BQU8sR0FBRztNQUFHLENBQUMsQ0FBQztJQUN0RDtFQUFDO0lBQUE7SUFBQSxPQUVELDZCQUFvQjtNQUNoQkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDTixZQUFZLENBQUM7SUFDMUQ7RUFBQztJQUFBO0lBQUEsT0FFRCxnQ0FBdUI7TUFDbkJLLFFBQVEsQ0FBQ0UsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1AsWUFBWSxDQUFDO0lBQzdEO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFBQTtNQUNMLElBQUlRLEtBQUssR0FBRyxJQUFJLENBQUNWLEtBQUssQ0FBQ0MsU0FBUyxHQUFHO1FBQy9CVSxlQUFlLEVBQUU7TUFDckIsQ0FBQyxHQUFHO1FBQ0lDLFVBQVUsRUFBRSxNQUFNO1FBQ2xCQyxhQUFhLEVBQUUsTUFBTTtRQUNyQkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJILGVBQWUsRUFBRTtNQUNyQixDQUFDO01BQ0wsT0FDSTtRQUFLLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQyxLQUFLLEVBQUVELEtBQU07UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUN6QyxNQUFDLGdEQUFJO1FBQUMsSUFBSSxFQUFDLEdBQUc7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNWO1FBQUssU0FBUyxFQUFDLGNBQWM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUN6QixNQUFDLDRDQUFLO1FBQUMsR0FBRyxFQUFDLHVCQUF1QjtRQUFDLEdBQUcsRUFBQyxFQUFFO1FBQUMsS0FBSyxFQUFFLEVBQUc7UUFBQyxNQUFNLEVBQUUsRUFBRztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsRUFDbkU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxzQkFBdUIsQ0FDckIsQ0FDSCxFQUNQO1FBQUssU0FBUyxFQUFDLG1CQUFtQjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBRTFCSywyREFBYyxDQUFDQyxHQUFHLENBQUM7UUFBQSxJQUFHQyxJQUFJLFFBQUpBLElBQUk7VUFBRUMsVUFBVSxRQUFWQSxVQUFVO1FBQUEsT0FDbEM7VUFBSyxTQUFTLEVBQUMsaUJBQWlCO1VBQUMsR0FBRyxFQUFFRCxJQUFLO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FDdkM7VUFBUSxTQUFTLEVBQUMsd0JBQXdCO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FDckNBLElBQUksQ0FDQSxFQUNUO1VBQUssU0FBUyxFQUFDLHFCQUFxQjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLEdBRTVCQyxVQUFVLENBQUNGLEdBQUcsQ0FBQztVQUFBLElBQUdDLElBQUksU0FBSkEsSUFBSTtZQUFFRSxFQUFFLFNBQUZBLEVBQUU7VUFBQSxPQUN0QixNQUFDLGdEQUFJO1lBQUMsSUFBSSxFQUFFQSxFQUFHO1lBQUMsR0FBRyxFQUFFRixJQUFLO1lBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBQUEsR0FBQztZQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQUFBLEdBQUlBLElBQUksQ0FBSyxDQUFPO1FBQUEsQ0FDbEQsQ0FBQyxDQUVKLENBQ0o7TUFBQSxDQUNULENBQUMsQ0FFSixDQUVKO0lBRWQ7RUFBQztFQUFBO0FBQUEsRUEzRHVCRyw0Q0FBSyxDQUFDQyxTQUFTO0FBOEQ1QnZCLDRFQUFhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiNTZmYTcxMDYzNDIyMDcyMDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgbmF2YmFyX2hlYWRlcnMgfSBmcm9tICcuL25hdmJhci5qc29uJztcclxuaW1wb3J0ICcuL05hdmJhckRlc2t0b3AuY3NzJztcclxuXHJcbmNsYXNzIE5hdmJhckRlc2t0b3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlcm1hbmVudDogKHdpbmRvdy5zY3JvbGxZID4gMCkgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gdGhpcy5zdGF0ZS5wZXJtYW5lbnQgPyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTE1NzY4XCJcclxuICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzUxNTc2OFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQ0RGRTVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1jcmVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uL3N0YXRpYy9sb2dvLnN2ZycgYWx0PVwiXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezYwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jYXRlZ29yaWVzJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmJhcl9oZWFkZXJzLm1hcCgoeyBuYW1lLCBzdWJoZWFkZXJzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcnknIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25hdmJhci1kcm9wZG93bi1vcGVuZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tc3ViaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcnMubWFwKCh7IG5hbWUsIHRvIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30ga2V5PXtuYW1lfT48YT57bmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhckRlc2t0b3AiXSwic291cmNlUm9vdCI6IiJ9