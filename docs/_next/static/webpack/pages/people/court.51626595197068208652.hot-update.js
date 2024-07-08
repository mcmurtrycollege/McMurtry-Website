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
    _this.phoneHidden = _this.props.phone ? false : true;
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
          columnNumber: 51
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cGFuZGFibGVjYXJkcy5qcyJdLCJuYW1lcyI6WyJFeHBhbmRhYmxlQ2FyZCIsInByb3BzIiwic3RhdGUiLCJjb250ZW50VmlzaWJsZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsInBob25lSGlkZGVuIiwicGhvbmUiLCJzZXRTdGF0ZSIsImRyb3Bkb3duU3R5bGUiLCJkcm9wZG93bkltYWdlU3R5bGUiLCJtYXhIZWlnaHQiLCJwaG90byIsIm5hbWUiLCJlbWFpbCIsImJpbyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ047QUFBQSxJQUV4QkEsY0FBYztFQUFBO0VBQUE7RUFDaEIsd0JBQVlDLEtBQUssRUFBRTtJQUFBO0lBQUE7SUFDZiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUFFQyxjQUFjLEVBQUU7SUFBTSxDQUFDO0lBQ3RDLE1BQUtDLFdBQVcsR0FBRyxNQUFLQSxXQUFXLENBQUNDLElBQUksQ0FBQyx3R0FBSztJQUM5QyxNQUFLQyxXQUFXLEdBQUcsTUFBS0wsS0FBSyxDQUFDTSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7SUFBQTtFQUN0RDtFQUFDO0lBQUE7SUFBQSxPQUVELHVCQUFjO01BQ1YsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRUwsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUNDO01BQWUsQ0FBQyxDQUFDO0lBQ2pFO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDTCxJQUFJTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO01BQ3RCLElBQUlDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztNQUMzQkQsYUFBYSxDQUFDRSxTQUFTLEdBQUcsSUFBSSxDQUFDVCxLQUFLLENBQUNDLGNBQWMsR0FBSSxPQUFPLEdBQUssR0FBSTtNQUN2RU8sa0JBQWtCLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ0MsY0FBYyxHQUFJLEdBQUcsR0FBSyxPQUFRO01BRTVFLE9BQ0ksTUFBQywwQ0FBRztRQUFDLEtBQUssRUFBRSxDQUFFO1FBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBWTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ3JDO1FBQUssU0FBUyxFQUFFLElBQUksQ0FBQ0YsS0FBSyxDQUFDQyxjQUFjLEdBQUcsY0FBYyxHQUFHLHdCQUF5QjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ2pGLElBQUksQ0FBQ0YsS0FBSyxDQUFDVyxLQUFLLElBQ2I7UUFBSyxTQUFTLEVBQUMsMkJBQTJCO1FBQUMsS0FBSyxFQUFFRixrQkFBbUI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNqRSxNQUFDLDBDQUFHO1FBQUMsU0FBUyxFQUFDLGtCQUFrQjtRQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNoRCxNQUFDLDRDQUFLO1FBQUMsR0FBRyxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDVyxLQUFNO1FBQUMsR0FBRyxFQUFDLEVBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLENBQ3JDLENBQ0osRUFFVjtRQUFJLFNBQVMsRUFBQyxNQUFNO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksSUFBSSxDQUFNLEVBQzNDO1FBQUksU0FBUyxFQUFDLGVBQWU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFDO1FBQUssR0FBRyxFQUFDLG9DQUFvQztRQUFDLEdBQUcsRUFBQyxTQUFTO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQ00sS0FBSyxDQUFNLEVBQ3ZILElBQUksQ0FBQ04sS0FBSyxDQUFDYSxLQUFLLElBQ2I7UUFBRyxJQUFJLG1CQUFZLElBQUksQ0FBQ2IsS0FBSyxDQUFDYSxLQUFLLENBQUc7UUFBQyxTQUFTLEVBQUMsTUFBTTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ25EO1FBQUksU0FBUyxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDQyxjQUFjLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXVCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBQztRQUFLLEdBQUcsRUFBQyxvQ0FBb0M7UUFBQyxHQUFHLEVBQUMsU0FBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsRUFBQyxJQUFJLENBQUNGLEtBQUssQ0FBQ2EsS0FBSyxDQUFNLENBQ2xMLEVBR1I7UUFBSyxLQUFLLEVBQUVMLGFBQWM7UUFBQyxTQUFTLEVBQUMscUJBQXFCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDdEQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFHO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsV0FBc0IsRUFBQyxJQUFJLENBQUNSLEtBQUssQ0FBQ2MsR0FBRyxDQUFLLENBQzNDLENBQ0osQ0FDSjtJQUVkO0VBQUM7RUFBQTtBQUFBLEVBMUN3QkMsNENBQUssQ0FBQ0MsU0FBUztBQTZDN0JqQiw2RUFBYyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9jb3VydC41MTYyNjU5NTE5NzA2ODIwODY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBcIi4vZXhwYW5kYWJsZWNhcmRzLmNzc1wiXHJcblxyXG5jbGFzcyBFeHBhbmRhYmxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGNvbnRlbnRWaXNpYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBob25lSGlkZGVuID0gdGhpcy5wcm9wcy5waG9uZSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250ZW50VmlzaWJsZTogIXRoaXMuc3RhdGUuY29udGVudFZpc2libGUgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGRyb3Bkb3duU3R5bGUgPSB7fVxyXG4gICAgICAgIGxldCBkcm9wZG93bkltYWdlU3R5bGUgPSB7fVxyXG4gICAgICAgIGRyb3Bkb3duU3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5zdGF0ZS5jb250ZW50VmlzaWJsZSA/ICgnNjUwcHgnKSA6ICgnMCcpXHJcbiAgICAgICAgZHJvcGRvd25JbWFnZVN0eWxlLm1heEhlaWdodCA9IHRoaXMuc3RhdGUuY29udGVudFZpc2libGUgPyAoJzAnKSA6ICgnNDUwcHgnKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbnRlbnRWaXNpYmxlID8gJ2NhcmQtdmlzaWJsZScgOiAnZXhwYW5kYWJsZS1jYXJkLWhpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnBob3RvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdleHBhbmRhYmxlLWltYWdlLWRyb3Bkb3duJyBzdHlsZT17ZHJvcGRvd25JbWFnZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdleHBhbmRhYmxlLWltYWdlJyB3aWR0aD17WzAuOSwgMC43XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhpcy5wcm9wcy5waG90b30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J25hbWUnPnt0aGlzLnByb3BzLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC1waG9uZVwiPjxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vc3RhdGljL2ljb25zL3Bob25lLnN2Z1wiIGFsdD1cIlBob25lOiBcIiAvPnsnICd9e3RoaXMucHJvcHMucGhvbmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dGhpcy5wcm9wcy5lbWFpbH1gfSBjbGFzc05hbWU9J2xpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb250ZW50VmlzaWJsZSA/ICdjb250YWN0LWVtYWlsLXZpc2libGUnIDogJ2NvbnRhY3QtZW1haWwtaGlkZGVuJ30+PGltZyBzcmM9XCIuLi8uLi8uLi8uLi9zdGF0aWMvaWNvbnMvZW1haWwuc3ZnXCIgYWx0PVwiRW1haWw6IFwiIC8+e3RoaXMucHJvcHMuZW1haWx9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZHJvcGRvd25TdHlsZX0gY2xhc3NOYW1lPSdleHBhbmRhYmxlLWRyb3Bkb3duJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5CaW86IDwvc3Ryb25nPnt0aGlzLnByb3BzLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9