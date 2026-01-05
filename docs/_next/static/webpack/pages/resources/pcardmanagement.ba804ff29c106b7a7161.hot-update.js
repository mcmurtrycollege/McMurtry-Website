webpackHotUpdate_N_E("pages/resources/pcardmanagement",{

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





var _jsxFileName = "D:\\Antony\\Downloads\\Test\\McMurtry-Website\\components\\navbar\\navbarDesktop.js";
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
        src: "/McMurtry-Website/static/logo.svg",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyRGVza3RvcC5qcyJdLCJuYW1lcyI6WyJOYXZiYXJEZXNrdG9wIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic3RhdGUiLCJwZXJtYW5lbnQiLCJoYW5kbGVTY3JvbGwiLCJiaW5kIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIl90aGlzMiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjb2xvciIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXZiYXJfaGVhZGVycyIsIm1hcCIsIl9yZWYiLCJuYW1lIiwic3ViaGVhZGVycyIsIl9yZWYyIiwidG8iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNPO0FBQ1c7QUFDbEI7QUFBQSxJQUV2QkEsYUFBYSwwQkFBQUMsZ0JBQUE7RUFDZixTQUFBRCxjQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLHlGQUFBLE9BQUFKLGFBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLGFBQUEsR0FBTUUsS0FB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VUFBQVMsUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxHQUN2Q1AsS0FBQTtVQUFRQyxTQUFTLEVBQUMsd0JBQXdCO1VBQUFDLE1BQUEsRUFBQVIsTUFBQTtVQUFBUyxRQUFBO1lBQUFDLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQTtRQUFBLEdBQ3JDVyxJQUNHLENBQUMsRUFDVGxCLEtBQUE7VUFBS0MsU0FBUyxFQUFDLHFCQUFxQjtVQUFBQyxNQUFBLEVBQUFSLE1BQUE7VUFBQVMsUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxHQUU1QlksVUFBVSxDQUFDSCxHQUFHLENBQUMsVUFBQUksS0FBQTtVQUFBLElBQUdGLElBQUksR0FBQUUsS0FBQSxDQUFKRixJQUFJO1lBQUVHLEVBQUUsR0FBQUQsS0FBQSxDQUFGQyxFQUFFO1VBQUEsT0FDdEJyQixLQUFBLENBQUNRLGdEQUFJO1lBQUNDLElBQUksRUFBRVksRUFBRztZQUFDdEMsR0FBRyxFQUFFbUMsSUFBSztZQUFBaEIsTUFBQSxFQUFBUixNQUFBO1lBQUFTLFFBQUE7Y0FBQUMsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBO1VBQUEsR0FBQ1AsS0FBQTtZQUFBRSxNQUFBLEVBQUFSLE1BQUE7WUFBQVMsUUFBQTtjQUFBQyxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUE7VUFBQSxHQUFJVyxJQUFRLENBQU8sQ0FBQztRQUFBLENBQ2xELENBRUosQ0FDSixDQUFDO01BQUEsQ0FDVCxDQUVKLENBRUosQ0FBQztJQUVkO0VBQUM7QUFBQSxFQTNEdUJJLDRDQUFLLENBQUNDLFNBQVM7QUE4RDVCcEQsNEVBQWEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL3BjYXJkbWFuYWdlbWVudC5iYTgwNGZmMjljMTA2YjdhNzE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCB7IG5hdmJhcl9oZWFkZXJzIH0gZnJvbSAnLi9uYXZiYXIuanNvbic7XG5pbXBvcnQgJy4vTmF2YmFyRGVza3RvcC5jc3MnO1xuXG5jbGFzcyBOYXZiYXJEZXNrdG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGVybWFuZW50OiAod2luZG93LnNjcm9sbFkgPiAwKSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnN0YXRlLnBlcm1hbmVudCA/IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTE1NzY4XCJcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzE1cHgnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU3NjhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RDREZFNVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXdyYXBwZXInIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItY3Jlc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL01jTXVydHJ5LVdlYnNpdGUvc3RhdGljL2xvZ28uc3ZnJyBhbHQ9XCJcIiB3aWR0aD17NDB9IGhlaWdodD17NjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jYXRlZ29yaWVzJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2YmFyX2hlYWRlcnMubWFwKCh7IG5hbWUsIHN1YmhlYWRlcnMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY2F0ZWdvcnknIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSduYXZiYXItZHJvcGRvd24tb3BlbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1YmhlYWRlcnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcnMubWFwKCh7IG5hbWUsIHRvIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99IGtleT17bmFtZX0+PGE+e25hbWV9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhckRlc2t0b3AiXSwic291cmNlUm9vdCI6IiJ9