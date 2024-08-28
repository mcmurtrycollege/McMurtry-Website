webpackHotUpdate_N_E("pages/resources/documents",{

/***/ "./components/resources/documents/documents.js":
/*!*****************************************************!*\
  !*** ./components/resources/documents/documents.js ***!
  \*****************************************************/
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
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _documents_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documents.css */ "./components/resources/documents/documents.css");
/* harmony import */ var _documents_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_documents_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Murt Website\\McMurtry-Website\\components\\resources\\documents\\documents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





// import mcm_constitution from '../../../../static/documents/mcm_constitution.pdf';
// import mcm_bylaws from '../../../../static/documents/mcm_bylaws.pdf';
// import mcm_housing_bylaws from '../../../../static/documents/mcm_housing_bylaws.pdf';
// import mcm_parking_bylaws from '../../../../static/documents/mcm_parking_bylaws.pdf';

var documents = [{
  name: "Constitution",
  document: '../../../../static/documents/mcm_constitution_jan_2024.pdf',
  icon: "https://icon.now.sh/account_balance"
}, {
  name: "General By-Laws",
  document: '../../../../static/documents/mcm_general_bylaws_jan_2024.pdf',
  icon: "https://icon.now.sh/import_contacts"
}, {
  name: "Housing By-Laws",
  document: '../../../../static/documents/mcm_housing_bylaws_jan_2024.pdf',
  icon: "https://icon.now.sh/home"
}, {
  name: "Parking By-Laws",
  document: '../../../../static/documents/mcm_parking_bylaws.pdf',
  icon: "https://icon.now.sh/directions_car"
}];
var Documents = /*#__PURE__*/function (_React$Component) {
  function Documents(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Documents);
    _this = _callSuper(this, Documents, [props]);
    _this.state = {
      slide: 0
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Documents, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Documents, [{
    key: "handleClick",
    value: function handleClick(idx) {
      this.setState({
        slide: idx
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return __jsx("div", {
        className: "documents-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "McLegislation",
        width: 350,
        smallText: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
        flexDirection: "row",
        justifyContent: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, documents.map(function (document) {
        return __jsx("div", {
          onClick: function onClick() {
            return _this2.handleClick(documents.indexOf(document));
          },
          className: documents.indexOf(document) === _this2.state.slide ? 'active-doc' : 'inactive-doc',
          key: document.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }
        }, __jsx("p", {
          className: "doc-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }
        }, document.name));
      })), __jsx("div", {
        className: "embedded-doc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("iframe", {
        src: documents[this.state.slide].document,
        type: "application/pdf",
        width: "600",
        height: "820px",
        page: "7",
        scrollbar: "1",
        toolbar: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "doc-link-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: documents[this.state.slide].document,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          textDecoration: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "doc-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "".concat(documents[this.state.slide].icon, "/2B2F3A/90"),
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }
      }, documents[this.state.slide].name, " ", __jsx("img", {
        src: "https://icon.now.sh/open_in_new/2B2F3A/13",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 67
        }
      }))))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Documents);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNvdXJjZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudHMiLCJuYW1lIiwiZG9jdW1lbnQiLCJpY29uIiwiRG9jdW1lbnRzIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic3RhdGUiLCJzbGlkZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaWR4Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJfdGhpczIiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiVGl0bGUiLCJ0aXRsZSIsIndpZHRoIiwic21hbGxUZXh0IiwiRmxleCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsIm9uQ2xpY2siLCJpbmRleE9mIiwic3JjIiwidHlwZSIsImhlaWdodCIsInBhZ2UiLCJzY3JvbGxiYXIiLCJ0b29sYmFyIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb25jYXQiLCJhbHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUNVO0FBQ2hCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZDtFQUNJQyxJQUFJLEVBQUUsY0FBYztFQUNwQkMsUUFBUSxFQUFFLDREQUE0RDtFQUN0RUMsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxFQUNEO0VBQ0lGLElBQUksRUFBRSxpQkFBaUI7RUFDdkJDLFFBQVEsRUFBRSw4REFBOEQ7RUFDeEVD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aUQsR0FBRyxFQUFDLEVBQUU7UUFBQTVCLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxDQUFFLENBQUMsRUFDcEVQLEtBQUE7UUFBQUUsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUk3QixTQUFTLENBQUMsSUFBSSxDQUFDVSxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDVixJQUFJLE9BQUVxQixLQUFBO1FBQUtrQixHQUFHLEVBQUMsMkNBQTJDO1FBQUNZLEdBQUcsRUFBQyxFQUFFO1FBQUE1QixNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsQ0FBRSxDQUFJLENBQ3RHLENBQ04sQ0FDRixDQUNKLENBQUM7SUFFZDtFQUFDO0FBQUEsRUF4Q21Cd0IsNENBQUssQ0FBQ0MsU0FBUztBQTJDeEJsRCx3RUFBUyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc291cmNlcy9kb2N1bWVudHMuNDgyOWU2ZTI4YjYyYzhjYTY3ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXggfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vZ2VuZXJhbC90aXRsZSc7XHJcbmltcG9ydCAnLi9kb2N1bWVudHMuY3NzJ1xyXG5cclxuLy8gaW1wb3J0IG1jbV9jb25zdGl0dXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGljL2RvY3VtZW50cy9tY21fY29uc3RpdHV0aW9uLnBkZic7XHJcbi8vIGltcG9ydCBtY21fYnlsYXdzIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRpYy9kb2N1bWVudHMvbWNtX2J5bGF3cy5wZGYnO1xyXG4vLyBpbXBvcnQgbWNtX2hvdXNpbmdfYnlsYXdzIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRpYy9kb2N1bWVudHMvbWNtX2hvdXNpbmdfYnlsYXdzLnBkZic7XHJcbi8vIGltcG9ydCBtY21fcGFya2luZ19ieWxhd3MgZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGljL2RvY3VtZW50cy9tY21fcGFya2luZ19ieWxhd3MucGRmJztcclxuXHJcbmNvbnN0IGRvY3VtZW50cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvbnN0aXR1dGlvblwiLFxyXG4gICAgICAgIGRvY3VtZW50OiAnLi4vLi4vLi4vLi4vc3RhdGljL2RvY3VtZW50cy9tY21fY29uc3RpdHV0aW9uX2phbl8yMDI0LnBkZicsXHJcbiAgICAgICAgaWNvbjogXCJodHRwczovL2ljb24ubm93LnNoL2FjY291bnRfYmFsYW5jZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiR2VuZXJhbCBCeS1MYXdzXCIsXHJcbiAgICAgICAgZG9jdW1lbnQ6ICcuLi8uLi8uLi8uLi9zdGF0aWMvZG9jdW1lbnRzL21jbV9nZW5lcmFsX2J5bGF3c19qYW5fMjAyNC5wZGYnLFxyXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9pbXBvcnRfY29udGFjdHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhvdXNpbmcgQnktTGF3c1wiLFxyXG4gICAgICAgIGRvY3VtZW50OiAnLi4vLi4vLi4vLi4vc3RhdGljL2RvY3VtZW50cy9tY21faG91c2luZ19ieWxhd3NfamFuXzIwMjQucGRmJyxcclxuICAgICAgICBpY29uOiBcImh0dHBzOi8vaWNvbi5ub3cuc2gvaG9tZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUGFya2luZyBCeS1MYXdzXCIsXHJcbiAgICAgICAgZG9jdW1lbnQ6ICcuLi8uLi8uLi8uLi9zdGF0aWMvZG9jdW1lbnRzL21jbV9wYXJraW5nX2J5bGF3cy5wZGYnLFxyXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9kaXJlY3Rpb25zX2NhclwiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jbGFzcyBEb2N1bWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzbGlkZTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soaWR4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlOiBpZHggfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3VtZW50cy1wYWdlJz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0aXRsZT0nTWNMZWdpc2xhdGlvbicgd2lkdGg9ezM1MH0gc21hbGxUZXh0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggZmxleERpcmVjdGlvbj0ncm93JyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cy5tYXAoZG9jdW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGRvY3VtZW50cy5pbmRleE9mKGRvY3VtZW50KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkb2N1bWVudHMuaW5kZXhPZihkb2N1bWVudCkgPT09IHRoaXMuc3RhdGUuc2xpZGUgPyAoJ2FjdGl2ZS1kb2MnKSA6ICgnaW5hY3RpdmUtZG9jJyl9IGtleT17ZG9jdW1lbnQubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkb2Mta2V5Jz57ZG9jdW1lbnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1iZWRkZWQtZG9jJz5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz17ZG9jdW1lbnRzW3RoaXMuc3RhdGUuc2xpZGVdLmRvY3VtZW50fSB0eXBlPVwiYXBwbGljYXRpb24vcGRmXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI4MjBweFwiIHBhZ2U9XCI3XCIgc2Nyb2xsYmFyPVwiMVwiIHRvb2xiYXI9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvYy1saW5rLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZG9jdW1lbnRzW3RoaXMuc3RhdGUuc2xpZGVdLmRvY3VtZW50fSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2MtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7ZG9jdW1lbnRzW3RoaXMuc3RhdGUuc2xpZGVdLmljb259LzJCMkYzQS85MGB9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RvY3VtZW50c1t0aGlzLnN0YXRlLnNsaWRlXS5uYW1lfSA8aW1nIHNyYz1cImh0dHBzOi8vaWNvbi5ub3cuc2gvb3Blbl9pbl9uZXcvMkIyRjNBLzEzXCIgYWx0PScnIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==