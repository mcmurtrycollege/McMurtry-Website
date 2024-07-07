webpackHotUpdate_N_E("pages/people/committees",{

/***/ "./components/people/committees/committees.js":
/*!****************************************************!*\
  !*** ./components/people/committees/committees.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Committees; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _general_contactcards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../general/contactcards */ "./components/general/contactcards.js");
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _committees_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./committees.json */ "./components/people/committees/committees.json");
var _committees_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./committees.json */ "./components/people/committees/committees.json", 1);
/* harmony import */ var _committees_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./committees.css */ "./components/people/committees/committees.css");
/* harmony import */ var _committees_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_committees_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "C:\\Users\\sumar\\OneDrive\\Documents\\Murt Website Clone\\McMurtry-Website\\components\\people\\committees\\committees.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var Committees = /*#__PURE__*/function (_React$Component) {
  function Committees(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Committees);
    _this = _callSuper(this, Committees, [props]);
    _this.state = {
      division: 0,
      committee: 0
    };
    _this.changeDivision = _this.changeDivision.bind(_this);
    _this.changeCommittee = _this.changeCommittee.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Committees, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Committees, [{
    key: "changeDivision",
    value: function changeDivision(index) {
      this.setState({
        division: index,
        committee: 0
      });
    }
  }, {
    key: "changeCommittee",
    value: function changeCommittee(index) {
      this.setState({
        committee: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var division_keys = [];
      var _loop = function _loop(i) {
        division_keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          key: _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][i].division,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.changeDivision(i);
          },
          className: _this2.state.division === i ? "active-division" : "inactive-division",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }
        }, "".concat(_committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][i].division)))));
      };
      for (var i = 0; i < _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"].length; i++) {
        _loop(i);
      }
      var current_division = _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division];
      var committee_keys = [];
      var _loop2 = function _loop2(j) {
        committee_keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          key: current_division.committees[j].name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.changeCommittee(j);
          },
          className: _this2.state.committee === j ? "active-committee" : "inactive-committee",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }
        }, current_division.committees[j].name))));
      };
      for (var j = 0; j < current_division.committees.length; j++) {
        _loop2(j);
      }
      return __jsx("div", {
        className: "committee-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: 280,
        title: "Committees",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: [0.9, 0.7, 0.6, 0.5],
        ml: "auto",
        mr: "auto",
        className: "committee-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      })), _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].heads.length > 0 ? __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 31
        }
      }, "Committee Heads") : null, __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_7__["default"], {
        content: _committees_json__WEBPACK_IMPORTED_MODULE_9__["committee_divisions"][this.state.division].committees[this.state.committee].heads,
        height: 110,
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsImRpdmlzaW9uIiwiY29tbWl0dGVlIiwiY2hhbmdlRGl2aXNpb24iLCJiaW5kIiwiY2hhbmdlQ29tbWl0dGVlIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbmRleCIsInNldFN0YXRlIiwicmVuZGVyIiwiX3RoaXMyIiwiZGl2aXNpb25fa2V5cyIsIl9sb29wIiwiaSIsInB1c2giLCJfX2pzeCIsIkJveCIsImNvbW1pdHRlZV9kaXZpc2lvbnMiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjb25jYXQiLCJsZW5ndGgiLCJjdXJyZW50X2RpdmlzaW9uIiwiY29tbWl0dGVlX2tleXMiLCJfbG9vcDIiLCJqIiwiY29tbWl0dGVlcyIsIm5hbWUiLCJUaXRsZSIsIndpZHRoIiwidGl0bGUiLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsIm1sIiwibXIiLCJteCIsIkltYWdlIiwiaW1hZ2UiLCJzcmMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiaGVhZHMiLCJDYXJkcyIsImNvbnRlbnQiLCJoZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0s7QUFDUDtBQUNnQjtBQUM5QjtBQUFBLElBRUxBLFVBQVUsMEJBQUFDLGdC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Q0UsU0FBUyxDQUFDLENBQUNrRDtRQUFZLENBQUU7UUFBQS9CLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxDQUFNLENBQ3JJLENBQUMsRUFFRE4sb0VBQW1CLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQ2tDLFVBQVUsQ0FBQyxJQUFJLENBQUNuQyxLQUFLLENBQUNFLFNBQVMsQ0FBQyxDQUFDbUQsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsR0FDckZaLEtBQUE7UUFBSVUsU0FBUyxFQUFDLG9CQUFvQjtRQUFBUCxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsb0JBQW9CLENBQUMsR0FDdkQsSUFBSSxFQUVkUixLQUFBLENBQUNvQyw2REFBSztRQUFDQyxPQUFPLEVBQUVuQyxvRUFBbUIsQ0FBQyxJQUFJLENBQUNwQixLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDa0MsVUFBVSxDQUFDLElBQUksQ0FBQ25DLEtBQUssQ0FBQ0UsU0FBUyxDQUFDLENBQUNtRCxLQUFNO1FBQUNHLE1BQU0sRUFBRSxHQUFJO1FBQUNsQixLQUFLLEVBQUUsR0FBSTtRQUFBakIsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FPMUgsQ0FDSixDQUFDO0lBRWQ7RUFBQztBQUFBLEVBbkZtQytCLDRDQUFLLENBQUNDLFNBQVM7QUFBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL2NvbW1pdHRlZXMuMjYyZDFhNDhjMWJjNzJkOWFiOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jb250YWN0Y2FyZHMnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vZ2VuZXJhbC90aXRsZSc7XHJcbmltcG9ydCB7IGNvbW1pdHRlZV9kaXZpc2lvbnMgfSBmcm9tICcuL2NvbW1pdHRlZXMuanNvbic7XHJcbmltcG9ydCAnLi9jb21taXR0ZWVzLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21taXR0ZWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiAwLFxyXG4gICAgICAgICAgICBjb21taXR0ZWU6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGl2aXNpb24gPSB0aGlzLmNoYW5nZURpdmlzaW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VDb21taXR0ZWUgPSB0aGlzLmNoYW5nZUNvbW1pdHRlZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpdmlzaW9uKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiBpbmRleCxcclxuICAgICAgICAgICAgY29tbWl0dGVlOiAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21taXR0ZWUoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWl0dGVlOiBpbmRleCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpdmlzaW9uX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWl0dGVlX2RpdmlzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkaXZpc2lvbl9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y29tbWl0dGVlX2RpdmlzaW9uc1tpXS5kaXZpc2lvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZURpdmlzaW9uKGkpfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGl2aXNpb24gPT09IGkgPyBcImFjdGl2ZS1kaXZpc2lvblwiIDogXCJpbmFjdGl2ZS1kaXZpc2lvblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkaXZpc2lvbi1rZXknPntgJHtjb21taXR0ZWVfZGl2aXNpb25zW2ldLmRpdmlzaW9ufWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudF9kaXZpc2lvbiA9IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl1cclxuICAgICAgICBsZXQgY29tbWl0dGVlX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbW1pdHRlZV9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzW2pdLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDb21taXR0ZWUoail9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb21taXR0ZWUgPT09IGogPyBcImFjdGl2ZS1jb21taXR0ZWVcIiA6IFwiaW5hY3RpdmUtY29tbWl0dGVlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvbW1pdHRlZS1rZXknPntjdXJyZW50X2RpdmlzaW9uLmNvbW1pdHRlZXNbal0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21taXR0ZWUtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHdpZHRoPXsyODB9IHRpdGxlPVwiQ29tbWl0dGVlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXg9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXZpc2lvbl9rZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4PSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWl0dGVlX2tleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1swLjksIDAuNywgMC42LCAwLjVdfSBtbD0nYXV0bycgbXI9J2F1dG8nIGNsYXNzTmFtZT0nY29tbWl0dGVlLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGl2aXNpb24tdGl0bGUnPntjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzEsIC43NV19IG14PSdhdXRvJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Uga2V5PXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmRlc2NyaXB0aW9uIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uaGVhZHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGgyIGNsYXNzTmFtZT0nY29tbWl0dGVlLXN1YnRpdGxlJz5Db21taXR0ZWUgSGVhZHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmhlYWRzfSBoZWlnaHQ9ezExMH0gd2lkdGg9ezI0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5tZW1iZXJzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9J2NvbW1pdHRlZS1zdWJ0aXRsZSc+TWVtYmVyczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLm1lbWJlcnN9IGhlaWdodD17MTEwfSB3aWR0aD17MjQwfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==