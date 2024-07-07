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
      }, Array.from(_navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"].no_subheaders).map(function (_ref) {
        var name = _ref.name,
          to = _ref.to;
        return __jsx("div", {
          className: "navbar-category",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }
        }, __jsx("button", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }
        }, name), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: to,
          key: name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 60
          }
        }, name)));
      }), Array.from(_navbar_json__WEBPACK_IMPORTED_MODULE_9__["navbar_headers"].subheaders).map(function (_ref2) {
        var name = _ref2.name,
          subheaders = _ref2.subheaders;
        return __jsx("div", {
          className: "navbar-category",
          key: name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }
        }, __jsx("button", {
          className: "navbar-dropdown-opener",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }
        }, name), __jsx("div", {
          className: "dropdown-subheaders",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 33
          }
        }, subheaders.map(function (_ref3) {
          var name = _ref3.name,
            to = _ref3.to;
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: to,
            key: name,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 45
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcC5qcyJdLCJuYW1lcyI6WyJOYXZiYXJEZXNrdG9wIiwicHJvcHMiLCJzdGF0ZSIsInBlcm1hbmVudCIsImhhbmRsZVNjcm9sbCIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwiQXJyYXkiLCJmcm9tIiwibmF2YmFyX2hlYWRlcnMiLCJub19zdWJoZWFkZXJzIiwibWFwIiwibmFtZSIsInRvIiwic3ViaGVhZGVycyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDTztBQUNXO0FBQ2xCO0FBQUEsSUFFdkJBLGFBQWE7RUFBQTtFQUFBO0VBQ2YsdUJBQVlDLEtBQUssRUFBRTtJQUFBO0lBQUE7SUFDZiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUNUQyxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBS0MsWUFBWSxHQUFHLE1BQUtBLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLHdHQUFLO0lBQUE7RUFDcEQ7RUFBQztJQUFBO0lBQUEsT0FFRCx3QkFBZTtNQUNYLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBQUVILFNBQVMsRUFBR0ksTUFBTSxDQUFDQyxPQUFPLEdBQUc7TUFBRyxDQUFDLENBQUM7SUFDdEQ7RUFBQztJQUFBO0lBQUEsT0FFRCw2QkFBb0I7TUFDaEJDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ04sWUFBWSxDQUFDO0lBQzFEO0VBQUM7SUFBQTtJQUFBLE9BRUQsZ0NBQXVCO01BQ25C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SjtJQUVkO0VBQUM7RUFBQTtBQUFBLEVBckV1QkcsNENBQUssQ0FBQ0MsU0FBUztBQXdFNUIxQiw0RUFBYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZDk4ZWU2MGFjZGQ4ZjBlNGU4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCB7IG5hdmJhcl9oZWFkZXJzIH0gZnJvbSAnLi9uYXZiYXIuanNvbic7XHJcbmltcG9ydCAnLi9OYXZiYXJEZXNrdG9wLmNzcyc7XHJcblxyXG5jbGFzcyBOYXZiYXJEZXNrdG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJtYW5lbnQ6ICh3aW5kb3cuc2Nyb2xsWSA+IDApIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMuc3RhdGUucGVybWFuZW50ID8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUxNTc2OFwiXHJcbiAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU3NjhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRENERkU1XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcicgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItY3Jlc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvbG9nby5zdmcnIGFsdD1cIlwiIHdpZHRoPXs0MH0gaGVpZ2h0PXs2MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWNNdXJ0cnkgQ29sbGVnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcmllcyc+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG5hdmJhcl9oZWFkZXJzLm5vX3N1YmhlYWRlcnMpLm1hcCgoe25hbWUsIHRvfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jYXRlZ29yeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99IGtleT17bmFtZX0+PGE+e25hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG5hdmJhcl9oZWFkZXJzLnN1YmhlYWRlcnMpLm1hcCgoeyBuYW1lLCBzdWJoZWFkZXJzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcnknIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25hdmJhci1kcm9wZG93bi1vcGVuZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tc3ViaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcnMubWFwKCh7IG5hbWUsIHRvIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30ga2V5PXtuYW1lfT48YT57bmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhckRlc2t0b3AiXSwic291cmNlUm9vdCI6IiJ9