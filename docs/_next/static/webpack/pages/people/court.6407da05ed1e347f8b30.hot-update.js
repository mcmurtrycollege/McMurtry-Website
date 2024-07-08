webpackHotUpdate_N_E("pages/people/court",{

/***/ "./components/general/expandablecards.js":
/*!***********************************************!*\
  !*** ./components/general/expandablecards.js ***!
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
/* harmony import */ var _expandablecards_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandablecards.css */ "./components/general/expandablecards.css");
/* harmony import */ var _expandablecards_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_expandablecards_css__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\general\\expandablecards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var ExpandableCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ExpandableCard, _React$Component);
  var _super = _createSuper(ExpandableCard);
  function ExpandableCard(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExpandableCard);
    _this = _super.call(this, props);
    _this.state = {
      contentVisible: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.hasPhone = _this.props.phone ? true : false;
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExpandableCard, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        contentVisible: !this.state.contentVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dropdownStyle = {};
      var dropdownImageStyle = {};
      dropdownStyle.maxHeight = this.state.contentVisible ? '650px' : '0';
      dropdownImageStyle.maxHeight = this.state.contentVisible ? '0' : '450px';
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: 1,
        onClick: this.handleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: this.state.contentVisible ? 'card-visible' : 'expandable-card-hidden',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, this.props.photo && __jsx("div", {
        className: "expandable-image-dropdown",
        style: dropdownImageStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        className: "expandable-image",
        width: [0.9, 0.7],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: this.props.photo,
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 33
        }
      }))), __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, this.props.name), __jsx("h3", {
        className: "contact-phone",
        hidden: !this.props.hasPhone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "../../../../static/icons/phone.svg",
        alt: "Phone: ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 81
        }
      }), ' ', this.props.phone), this.props.email && __jsx("a", {
        href: "mailto:".concat(this.props.email),
        className: "link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: this.state.contentVisible ? 'contact-email-visible' : 'contact-email-hidden',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "../../../../static/icons/email.svg",
        alt: "Email: ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 122
        }
      }), this.props.email)), __jsx("div", {
        style: dropdownStyle,
        className: "expandable-dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 28
        }
      }, "Bio: "), this.props.bio))));
    }
  }]);
  return ExpandableCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (ExpandableCard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cGFuZGFibGVjYXJkcy5qcyJdLCJuYW1lcyI6WyJFeHBhbmRhYmxlQ2FyZCIsInByb3BzIiwic3RhdGUiLCJjb250ZW50VmlzaWJsZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhc1Bob25lIiwicGhvbmUiLCJzZXRTdGF0ZSIsImRyb3Bkb3duU3R5bGUiLCJkcm9wZG93bkltYWdlU3R5bGUiLCJtYXhIZWlnaHQiLCJwaG90byIsIm5hbWUiLCJlbWFpbCIsImJpbyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ047QUFBQSxJQUV4QkEsY0FBYztFQUFBO0VBQUE7RUFDaEIsd0JBQVlDLEtBQUssRUFBRTtJQUFBO0lBQUE7SUFDZiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUFFQyxjQUFjLEVBQUU7SUFBTSxDQUFDO0lBQ3RDLE1BQUtDLFdBQVcsR0FBRyxNQUFLQSxXQUFXLENBQUNDLElBQUksQ0FBQyx3R0FBSztJQUM5QyxNQUFLQyxRQUFRLEdBQUcsTUFBS0wsS0FBSyxDQUFDTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFBQTtFQUNuRDtFQUFDO0lBQUE7SUFBQSxPQUVELHVCQUFjO01BQ1YsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRUwsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUNDO01BQWUsQ0FBQyxDQUFDO0lBQ2pFO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDTCxJQUFJTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO01BQ3RCLElBQUlDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztNQUMzQkQsYUFBYSxDQUFDRSxTQUFTLEdBQUcsSUFBSSxDQUFDVCxLQUFLLENBQUNDLGNBQWMsR0FBSSxPQUFPLEdBQUssR0FBSTtNQUN2RU8sa0JBQWtCLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ0MsY0FBYyxHQUFJLEdBQUcsR0FBSyxPQUFRO01BRTVFLE9BQ0ksTUFBQywwQ0FBRztRQUFDLEtBQUssRUFBRSxDQUFFO1FBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBWTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ3JDO1FBQUssU0FBUyxFQUFFLElBQUksQ0FBQ0YsS0FBSyxDQUFDQyxjQUFjLEdBQUcsY0FBYyxHQUFHLHdCQUF5QjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ2pGLElBQUksQ0FBQ0YsS0FBSyxDQUFDVyxLQUFLLElBQ2I7UUFBSyxTQUFTLEVBQUMsMkJBQTJCO1FBQUMsS0FBSyxFQUFFRixrQkFBbUI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNqRSxNQUFDLDBDQUFHO1FBQUMsU0FBUyxFQUFDLGtCQUFrQjtRQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNoRCxNQUFDLDRDQUFLO1FBQUMsR0FBRyxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDVyxLQUFNO1FBQUMsR0FBRyxFQUFDLEVBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLENBQ3JDLENBQ0osRUFFVjtRQUFJLFNBQVMsRUFBQyxNQUFNO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksSUFBSSxDQUFNLEVBQzNDO1FBQUksU0FBUyxFQUFDLGVBQWU7UUFBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUNaLEtBQUssQ0FBQ0ssUUFBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUM7UUFBSyxHQUFHLEVBQUMsb0NBQW9DO1FBQUMsR0FBRyxFQUFDLFNBQVM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxLQUFLLENBQU0sRUFDckosSUFBSSxDQUFDTixLQUFLLENBQUNhLEtBQUssSUFDYjtRQUFHLElBQUksbUJBQVksSUFBSSxDQUFDYixLQUFLLENBQUNhLEtBQUssQ0FBRztRQUFDLFNBQVMsRUFBQyxNQUFNO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDbkQ7UUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUNDLGNBQWMsR0FBRyx1QkFBdUIsR0FBRyxzQkFBdUI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFDO1FBQUssR0FBRyxFQUFDLG9DQUFvQztRQUFDLEdBQUcsRUFBQyxTQUFTO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDLElBQUksQ0FBQ0YsS0FBSyxDQUFDYSxLQUFLLENBQU0sQ0FDbEwsRUFHUjtRQUFLLEtBQUssRUFBRUwsYUFBYztRQUFDLFNBQVMsRUFBQyxxQkFBcUI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUN0RDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUc7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxXQUFzQixFQUFDLElBQUksQ0FBQ1IsS0FBSyxDQUFDYyxHQUFHLENBQUssQ0FDM0MsQ0FDSixDQUNKO0lBRWQ7RUFBQztFQUFBO0FBQUEsRUExQ3dCQyw0Q0FBSyxDQUFDQyxTQUFTO0FBNkM3QmpCLDZFQUFjLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL2NvdXJ0LjY0MDdkYTA1ZWQxZTM0N2Y4YjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IFwiLi9leHBhbmRhYmxlY2FyZHMuY3NzXCJcclxuXHJcbmNsYXNzIEV4cGFuZGFibGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgY29udGVudFZpc2libGU6IGZhbHNlIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFzUGhvbmUgPSB0aGlzLnByb3BzLnBob25lID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnRWaXNpYmxlOiAhdGhpcy5zdGF0ZS5jb250ZW50VmlzaWJsZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZHJvcGRvd25TdHlsZSA9IHt9XHJcbiAgICAgICAgbGV0IGRyb3Bkb3duSW1hZ2VTdHlsZSA9IHt9XHJcbiAgICAgICAgZHJvcGRvd25TdHlsZS5tYXhIZWlnaHQgPSB0aGlzLnN0YXRlLmNvbnRlbnRWaXNpYmxlID8gKCc2NTBweCcpIDogKCcwJylcclxuICAgICAgICBkcm9wZG93bkltYWdlU3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5zdGF0ZS5jb250ZW50VmlzaWJsZSA/ICgnMCcpIDogKCc0NTBweCcpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9ezF9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29udGVudFZpc2libGUgPyAnY2FyZC12aXNpYmxlJyA6ICdleHBhbmRhYmxlLWNhcmQtaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucGhvdG8gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V4cGFuZGFibGUtaW1hZ2UtZHJvcGRvd24nIHN0eWxlPXtkcm9wZG93bkltYWdlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2V4cGFuZGFibGUtaW1hZ2UnIHdpZHRoPXtbMC45LCAwLjddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGlzLnByb3BzLnBob3RvfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbmFtZSc+e3RoaXMucHJvcHMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXBob25lXCIgaGlkZGVuPXshdGhpcy5wcm9wcy5oYXNQaG9uZX0+PGltZyBzcmM9XCIuLi8uLi8uLi8uLi9zdGF0aWMvaWNvbnMvcGhvbmUuc3ZnXCIgYWx0PVwiUGhvbmU6IFwiIC8+eycgJ317dGhpcy5wcm9wcy5waG9uZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVtYWlsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt0aGlzLnByb3BzLmVtYWlsfWB9IGNsYXNzTmFtZT0nbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbnRlbnRWaXNpYmxlID8gJ2NvbnRhY3QtZW1haWwtdmlzaWJsZScgOiAnY29udGFjdC1lbWFpbC1oaWRkZW4nfT48aW1nIHNyYz1cIi4uLy4uLy4uLy4uL3N0YXRpYy9pY29ucy9lbWFpbC5zdmdcIiBhbHQ9XCJFbWFpbDogXCIgLz57dGhpcy5wcm9wcy5lbWFpbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtkcm9wZG93blN0eWxlfSBjbGFzc05hbWU9J2V4cGFuZGFibGUtZHJvcGRvd24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkJpbzogPC9zdHJvbmc+e3RoaXMucHJvcHMuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=