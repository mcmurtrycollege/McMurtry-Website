webpackHotUpdate_N_E("pages/people/mcteam",{

/***/ "./components/people/mcteam/mcteam.js":
/*!********************************************!*\
  !*** ./components/people/mcteam/mcteam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return McTeam; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mcteam.css */ "./components/people/mcteam/mcteam.css");
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mcteam_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _mcteam_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mcteam.json */ "./components/people/mcteam/mcteam.json");
var _mcteam_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mcteam.json */ "./components/people/mcteam/mcteam.json", 1);





var _jsxFileName = "C:\\Murt Website\\McMurtry-Website\\components\\people\\mcteam\\mcteam.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var McTeam = /*#__PURE__*/function (_React$Component) {
  function McTeam(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, McTeam);
    _this = _callSuper(this, McTeam, [props]);
    _this.state = {
      current: 0
    };
    _this.handleEvent = _this.handleEvent.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(McTeam, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(McTeam, [{
    key: "handleEvent",
    value: function handleEvent(index) {
      this.setState({
        current: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var keys = [];
      var _loop = function _loop(n) {
        keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          key: _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][n].position,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.handleEvent(n);
          },
          className: _this2.state.current === n ? "active-key" : "inactive-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "mcteam-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }
        }, _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][n].position))));
      };
      for (var n = 0; n < _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"].length; n++) {
        _loop(n);
      }
      return __jsx("div", {
        className: "mcteam-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "McTeam",
        width: 200,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, keys)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: [1, 0.9, 0.8, 0.7],
        ml: "auto",
        mr: "auto",
        mb: 50,
        className: "position-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "mcteam-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][this.state.current].names), __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: [0.8, 0.6, 0.4, 0.3],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        key: this.state.current,
        src: _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][this.state.current].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      })), _mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][this.state.current].body.map(function (line) {
        return __jsx("p", {
          key: "L-".concat(_mcteam_json__WEBPACK_IMPORTED_MODULE_9__["mcteam_positions"][_this2.state.current].body.indexOf(line)),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }
        }, line);
      }), this.state.current === 4 ? __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      }, "Pick up mail and packages"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }
      }, "Buy stamps and get envelopes"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 33
        }
      }, "Catch up with Jackie!"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }, "Borrow an extra room key"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }, "Do homework"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, "Use the staplers, packing tape, scissors, shredder, etc."), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 33
        }
      }, "Take a study break"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 33
        }
      }, "Relax with other Murts"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 33
        }
      }, "Solve puzzles")) : null));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWN0ZWFtL21jdGVhbS5qcyJdLCJuYW1lcyI6WyJNY1RlYW0iLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsImN1cnJlbnQiLCJoYW5kbGVFdmVudCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluZGV4Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJfdGhpczIiLCJrZXlzIiwiX2xvb3AiLCJuIiwicHVzaCIsIl9fanN4IiwiQm94IiwibWN0ZWFtX3Bvc2l0aW9ucyIsInBvc2l0aW9uIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiVGl0bGUiLCJ0aXRsZSIsIndpZHRoIiwiRmxleCIsImp1c3RpZnlDb250ZW50IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJtbCIsIm1yIiwibWIiLCJuYW1lcyIsIm14IiwiSW1hZ2UiLCJzcmMiLCJpbWFnZSIsImJvZHkiLCJtYXAiLCJsaW5lIiwiY29uY2F0IiwiaW5kZXhPZiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNwQjtBQUNrQjtBQUNTO0FBQUEsSUFFNUJBLE1BQU0sMEJBQUFDLGdCQUFBO0VBQ3ZCLFNBQUFELE9BQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMseUZBQUEsT0FBQUosTUFBQTtJQUNmRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsTUFBQSxHQUFNRSxLQUFLO0lBQ1hDLEtBQUEsQ0FBS0csS0FBSyxHQUFHO01BQ1RDLE9BQU8sRUFBRTtJQUNi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LENBQUMsRUFDakVULEtBQUE7UUFBQUksTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLHVCQUEwQixDQUFDLEVBQzNCVCxLQUFBO1FBQUFJLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSwyQkFBOEIsQ0FBQyxFQUMvQlQsS0FBQTtRQUFBSSxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsa0JBQXFCLENBQ3JCLENBQUMsR0FFRCxJQUdYLENBQ0osQ0FBQztJQUdkO0VBQUM7QUFBQSxFQWxFK0J3Qiw0Q0FBSyxDQUFDQyxTQUFTO0FBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9tY3RlYW0uMTQ0NGJmZGMzZTI0Mjk5MWJkODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgJy4vbWN0ZWFtLmNzcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9nZW5lcmFsL3RpdGxlJztcclxuaW1wb3J0IHsgbWN0ZWFtX3Bvc2l0aW9ucyB9IGZyb20gJy4vbWN0ZWFtLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWNUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFdmVudChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiBpbmRleCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGtleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbWN0ZWFtX3Bvc2l0aW9ucy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17bWN0ZWFtX3Bvc2l0aW9uc1tuXS5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV2ZW50KG4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudCA9PT0gbiA/IFwiYWN0aXZlLWtleVwiIDogXCJpbmFjdGl2ZS1rZXlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWN0ZWFtLWtleSc+e21jdGVhbV9wb3NpdGlvbnNbbl0ucG9zaXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY3RlYW0tcGFnZSc+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGl0bGU9XCJNY1RlYW1cIiB3aWR0aD17MjAwfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4PSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7a2V5c31cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAwLjksIDAuOCwgMC43XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBtYj17NTB9IGNsYXNzTmFtZT0ncG9zaXRpb24tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWN0ZWFtLW5hbWUnPnttY3RlYW1fcG9zaXRpb25zW3RoaXMuc3RhdGUuY3VycmVudF0ubmFtZXN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMC44LCAwLjYsIDAuNCwgMC4zXX0gbXg9J2F1dG8nID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGtleT17dGhpcy5zdGF0ZS5jdXJyZW50fSBzcmM9e21jdGVhbV9wb3NpdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50XS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1jdGVhbV9wb3NpdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50XS5ib2R5Lm1hcChsaW5lID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YEwtJHttY3RlYW1fcG9zaXRpb25zW3RoaXMuc3RhdGUuY3VycmVudF0uYm9keS5pbmRleE9mKGxpbmUpfWB9PntsaW5lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQgPT09IDQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBpY2sgdXAgbWFpbCBhbmQgcGFja2FnZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdXkgc3RhbXBzIGFuZCBnZXQgZW52ZWxvcGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2F0Y2ggdXAgd2l0aCBKYWNraWUhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Qm9ycm93IGFuIGV4dHJhIHJvb20ga2V5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RG8gaG9tZXdvcms8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc2UgdGhlIHN0YXBsZXJzLCBwYWNraW5nIHRhcGUsIHNjaXNzb3JzLCBzaHJlZGRlciwgZXRjLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRha2UgYSBzdHVkeSBicmVhazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlbGF4IHdpdGggb3RoZXIgTXVydHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb2x2ZSBwdXp6bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=