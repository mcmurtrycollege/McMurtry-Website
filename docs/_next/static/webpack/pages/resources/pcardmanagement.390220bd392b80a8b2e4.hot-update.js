webpackHotUpdate_N_E("pages/resources/pcardmanagement",{

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





var _jsxFileName = "D:\\Antony\\Downloads\\Test\\McMurtry-Website\\components\\navbar\\navbarMobile.js";
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
        src: "/McMurtry-Website/static/icons/menu.svg",
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
        src: "/McMurtry-Website/static/logo.svg",
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
        src: "/McMurtry-Website/static/icons/x.svg",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyTW9iaWxlLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsInN0YXRlIiwiaGlkZGVuIiwic3ViaGVhZGVyIiwidG9nZ2xlTmF2YmFyIiwiYmluZCIsInNob3dTdWJoZWFkZXIiLCJjbG9zZVN1YmhlYWRlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwic2V0U3RhdGUiLCJpbmRleCIsInJlbmRlciIsIl90aGlzMiIsIm1haW5IZWFkZXJzIiwibWVudXMiLCJsZWZ0IiwiX2xvb3AiLCJpIiwicHVzaCIsIl9fanN4IiwiY2xhc3NOYW1lIiwibmF2YmFyX2hlYWRlcnMiLCJuYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiY29uY2F0Iiwic3ViaGVhZGVycyIsIm1hcCIsIl9yZWYiLCJ0byIsIkxpbmsiLCJocmVmIiwibGVuZ3RoIiwic3JjIiwiYWx0IiwiQm94Iiwid2lkdGgiLCJJbWFnZSIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDRDtBQUNRO0FBQ1U7QUFBQSxJQUV4Q0EsTUFBTSwwQkFBQUMsZ0JBQUE7RUFDUixTQUFBRCxPQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLHlGQUFBLE9BQUFKLE1BQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLE1BQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxNQUFNLEVBQUUsSUFBSTtNQUNaQyxTQUFTLEVB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QUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEscUJBQXNCLENBQ3JCLENBQ0gsQ0FDTCxDQUFDLEVBQ05ULEtBQUE7UUFBS0MsU0FBUyxFQUFDLGVBQWU7UUFBQ3VCLEtBQUssRUFBRTVDLE1BQU87UUFBQXdCLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUN6Q1QsS0FBQTtRQUFLQyxTQUFTLEVBQUMsV0FBVztRQUFBRyxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDdEJULEtBQUE7UUFBS0MsU0FBUyxFQUFDLGNBQWM7UUFBQ2tCLEdBQUcsRUFBQyxzQ0FBc0M7UUFBQ0MsR0FBRyxFQUFDLEdBQUc7UUFBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQzVCLFlBQWE7UUFBQXNCLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxDQUFFLENBQUMsRUFDOUdmLFdBQ0EsQ0FBQyxFQUNMQyxLQUNBLENBQ0osQ0FBQztJQUVkO0VBQUM7QUFBQSxFQTVFZ0I4Qiw0Q0FBSyxDQUFDQyxTQUFTO0FBK0VyQnJELHFFQUFNLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL3BjYXJkbWFuYWdlbWVudC4zOTAyMjBiZDM5MmI4MGE4YjJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJy4vbmF2YmFyTW9iaWxlLmNzcyc7XG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCB7IG5hdmJhcl9oZWFkZXJzIH0gZnJvbSAnLi9uYXZiYXIuanNvbidcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgICBzdWJoZWFkZXI6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZU5hdmJhciA9IHRoaXMudG9nZ2xlTmF2YmFyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd1N1YmhlYWRlciA9IHRoaXMuc2hvd1N1YmhlYWRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlU3ViaGVhZGVyID0gdGhpcy5jbG9zZVN1YmhlYWRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGRlbjogIXRoaXMuc3RhdGUuaGlkZGVuIH0pXG4gICAgfVxuXG4gICAgc2hvd1N1YmhlYWRlcihpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViaGVhZGVyOiBpbmRleCB9KVxuICAgIH1cblxuICAgIGNsb3NlU3ViaGVhZGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViaGVhZGVyOiBudWxsIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWFpbkhlYWRlcnMgPSBbXVxuICAgICAgICBsZXQgbWVudXMgPSBbXVxuICAgICAgICBsZXQgaGlkZGVuID0gdGhpcy5zdGF0ZS5oaWRkZW4gPyB7IGxlZnQ6ICcxMDAlJyB9IDogeyBsZWZ0OiAwIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZiYXJfaGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFpbkhlYWRlcnMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1oZWFkZXInIGtleT17bmF2YmFyX2hlYWRlcnNbaV0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd1N1YmhlYWRlcihpKX0+e25hdmJhcl9oZWFkZXJzW2ldLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbWVudXMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMuc3RhdGUuc3ViaGVhZGVyID09PSBpKSA/ICgnc3ViaGVhZGVyLWRpc3BsYXknKSA6ICgnc3ViaGVhZGVyLWhpZGRlbicpfSBrZXk9e2Ake25hdmJhcl9oZWFkZXJzW2ldLm5hbWV9LW1lbnVgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXZiYXJfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xvc2VTdWJoZWFkZXJ9IGNsYXNzTmFtZT0nc3ViaGVhZGVyLWJhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKGkCBCYWNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2YmFyX2hlYWRlcnNbaV0uc3ViaGVhZGVycy5tYXAoKHsgbmFtZSwgdG8gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJoZWFkZXItaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQtbW9iaWxlLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hvdy1uYXZiYXJcIiBzcmM9Jy9NY011cnRyeS1XZWJzaXRlL3N0YXRpYy9pY29ucy9tZW51LnN2ZycgYWx0PVwiTWVudVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItY3Jlc3QtbW9iaWxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXs0MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9NY011cnRyeS1XZWJzaXRlL3N0YXRpYy9sb2dvLnN2ZycgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLW5hdmJhcicgc3R5bGU9e2hpZGRlbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2Nsb3NlLW5hdmJhcicgc3JjPVwiL01jTXVydHJ5LVdlYnNpdGUvc3RhdGljL2ljb25zL3guc3ZnXCIgYWx0PVwiWFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge21haW5IZWFkZXJzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge21lbnVzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9