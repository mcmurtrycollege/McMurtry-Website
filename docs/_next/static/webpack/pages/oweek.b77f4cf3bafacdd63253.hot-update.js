webpackHotUpdate_N_E("pages/oweek",{

/***/ "./components/oweek/homepage/homepage.js":
/*!***********************************************!*\
  !*** ./components/oweek/homepage/homepage.js ***!
  \***********************************************/
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
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\oweek\\homepage\\homepage.js",
  _this2 = undefined;
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var countdown = __webpack_require__(/*! countdown */ "./node_modules/countdown/countdown.js");

var Countdown = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Countdown, _React$Component);
  var _super = _createSuper(Countdown);
  function Countdown(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Countdown);
    _this = _super.call(this, props);
    _this.state = {
      time: countdown(new Date(2024, 8, 19)).toString(),
      myInterval: null
    };
    _this.updateTime = _this.updateTime.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Countdown, [{
    key: "updateTime",
    value: function updateTime() {
      this.setState({
        time: countdown(new Date(2023, 7, 11)).toString()
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
      return __jsx("div", {
        className: "oweek-countdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, this.state.time), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, "until O-Week!"));
    }
  }]);
  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
var Homepage = function Homepage() {
  return __jsx("div", {
    className: "oweek-homepage",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/mcscottishyurt.jpg",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/cardmovin.jpg",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "oweek-welcome",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Welcome to McMurtry!")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "oweek-welcome",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "BistrO-Week")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/2023Coords.png",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/welcome.png",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      margin: 0,
      padding: 0
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/whatisoweek.png",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "../../../static/oweek/building.jpg",
    alt: "",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [1, 1 / 3],
    style: {
      backgroundColor: '#87799C',
      marginBottom: '4px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(Countdown, {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }))));
};
_c = Homepage;
/* harmony default export */ __webpack_exports__["default"] = (Homepage);
var _c;
$RefreshReg$(_c, "Homepage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vd2Vlay9ob21lcGFnZS9ob21lcGFnZS5qcyJdLCJuYW1lcyI6WyJjb3VudGRvd24iLCJyZXF1aXJlIiwiQ291bnRkb3duIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9TdHJpbmciLCJteUludGVydmFsIiwidXBkYXRlVGltZSIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9tZXBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQzFDLElBQUlBLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx3REFBVyxDQUFDO0FBQ2Q7QUFBQSxJQUVoQkMsU0FBUztFQUFBO0VBQUE7RUFDWCxtQkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUNmLDBCQUFNQSxLQUFLO0lBQ1gsTUFBS0MsS0FBSyxHQUFHO01BQ1RDLElBQUksRUFBRUwsU0FBUyxDQUFDLElBQUlNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBRTtNQUNqREMsVUFBVSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxNQUFLQyxVQUFVLEdBQUcsTUFBS0EsVUFBVSxDQUFDQyxJQUFJLENBQUMsd0dBQUs7SUFBQTtFQUNoRDtFQUFDO0lBQUE7SUFBQSxPQUVELHNCQUFhO01BQ1QsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRU4sSUFBSSxFQUFFTCxTQUFTLENBQUMsSUFBSU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsUUFBUTtNQUFHLENBQUMsQ0FBQztJQUN4RTtFQUFDO0lBQUE7SUFB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TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDWCxDQUNILENBQ0w7QUFBQSxDQUNUO0FBQUEsS0FoQ0tGLFFBQVE7QUFrQ0NBLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL293ZWVrLmI3N2Y0Y2YzYmFmYWNkZDYzMjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxudmFyIGNvdW50ZG93biA9IHJlcXVpcmUoJ2NvdW50ZG93bicpO1xyXG5pbXBvcnQgJy4uL293ZWVrLmNzcyc7XHJcblxyXG5jbGFzcyBDb3VudGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aW1lOiBjb3VudGRvd24obmV3IERhdGUoMjAyNCwgOCwgMTkpKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBteUludGVydmFsOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZSA9IHRoaXMudXBkYXRlVGltZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGltZTogY291bnRkb3duKG5ldyBEYXRlKDIwMjMsIDcsIDExKSkudG9TdHJpbmcoKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubXlJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDApXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUubXlJbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293ZWVrLWNvdW50ZG93bic+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUudGltZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgyPnVudGlsIE8tV2VlayE8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J293ZWVrLWhvbWVwYWdlJz5cclxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPSdyb3cnIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJz5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17WzEsIDEgLyAzXX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi8uLi9zdGF0aWMvb3dlZWsvbWNzY290dGlzaHl1cnQuanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxIC8gM119PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vLi4vc3RhdGljL293ZWVrL2NhcmRtb3Zpbi5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17WzEsIDEgLyAzXX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzg3Nzk5QycsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdvd2Vlay13ZWxjb21lJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSAvIDNdfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODc3OTlDJywgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J293ZWVrLXdlbGNvbWUnPkJpc3RyTy1XZWVrPC9oMT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxIC8gM119IHN0eWxlPXt7IG1hcmdpbjogMCwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uLy4uL3N0YXRpYy9vd2Vlay8yMDIzQ29vcmRzLnBuZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSAvIDNdfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uLy4uL3N0YXRpYy9vd2Vlay93ZWxjb21lLnBuZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSAvIDNdfSBzdHlsZT17eyBtYXJnaW46IDAsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi8uLi9zdGF0aWMvb3dlZWsvd2hhdGlzb3dlZWsucG5nJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxIC8gM119PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vLi4vc3RhdGljL293ZWVrL2J1aWxkaW5nLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSAvIDNdfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODc3OTlDJywgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=