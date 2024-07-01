webpackHotUpdate_N_E("pages/people/SMR",{

/***/ "./components/people/smr/smr.js":
/*!**************************************!*\
  !*** ./components/people/smr/smr.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_contactcards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/contactcards */ "./components/general/contactcards.js");
/* harmony import */ var _smr_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smr.json */ "./components/people/smr/smr.json");
var _smr_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./smr.json */ "./components/people/smr/smr.json", 1);
/* harmony import */ var _smr_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smr.css */ "./components/people/smr/smr.css");
/* harmony import */ var _smr_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smr_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\people\\smr\\smr.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SMR = function SMR() {
  return __jsx("div", {
    className: "smr-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Student Maintenance Rep",
    width: 350,
    smallTest: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.8, 0.5],
    mx: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "smr-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, _smr_json__WEBPACK_IMPORTED_MODULE_4__["smr"][0].name), __jsx("h4", {
    className: "smr-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Email: ", _smr_json__WEBPACK_IMPORTED_MODULE_4__["smr"][0].email)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.8, 0.5, 0.4, 0.3],
    mx: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _smr_json__WEBPACK_IMPORTED_MODULE_4__["smr"][0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.8, 0.5],
    mx: "auto",
    mb: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, _smr_json__WEBPACK_IMPORTED_MODULE_4__["smr"][0].body));
};
_c = SMR;
/* harmony default export */ __webpack_exports__["default"] = (SMR);
var _c;
$RefreshReg$(_c, "SMR");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvc21yL3Ntci5qcyJdLCJuYW1lcyI6WyJTTVIiLCJzbXIiLCJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSjtBQUNXO0FBQ2Q7QUFDZDtBQUVuQixJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBRztFQUFBLE9BQ0w7SUFBSyxTQUFTLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3JCLE1BQUMsc0RBQUs7SUFBQyxLQUFLLEVBQUMseUJBQXlCO0lBQUMsS0FBSyxFQUFFLEdBQUk7SUFBQyxTQUFTLEVBQUUsSUFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDdEUsTUFBQywwQ0FBRztJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQyxFQUFFLEVBQUcsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQy9CO0lBQUksU0FBUyxFQUFHLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFFQyw2Q0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQU0sRUFDN0M7SUFBSSxTQUFTLEVBQUcsV0FBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGNBQVNELDZDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLEtBQUssQ0FBTSxDQUNwRCxFQUNOLE1BQUMsMENBQUc7SUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQyxFQUFFLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZDLE1BQUMsNENBQUs7SUFBQyxHQUFHLEVBQUVGLDZDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQzFCLEVBQ04sTUFBQywwQ0FBRztJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQyxFQUFFLEVBQUcsTUFBTTtJQUFDLEVBQUUsRUFBRyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDMUNILDZDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FDVixDQUVKO0FBQUEsQ0FDVDtBQUFBLEtBZktMLEdBQUc7QUFpQk1BLGtFQUFHLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9TTVIuMGU0Nzc1MWQ5Yjk5Mzk4MTlkMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9nZW5lcmFsL3RpdGxlJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi8uLi9nZW5lcmFsL2NvbnRhY3RjYXJkcyc7XHJcbmltcG9ydCB7IHNtciB9IGZyb20gJy4vc21yLmpzb24nO1xyXG5pbXBvcnQgJy4vc21yLmNzcyc7XHJcblxyXG5jb25zdCBTTVIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc21yLXBhZ2UnPlxyXG4gICAgICAgIDxUaXRsZSB0aXRsZT0nU3R1ZGVudCBNYWludGVuYW5jZSBSZXAnIHdpZHRoPXszNTB9IHNtYWxsVGVzdD17dHJ1ZX0gLz5cclxuICAgICAgICA8Qm94IHdpZHRoPXtbMC44LCAwLjVdfSBteCA9ICdhdXRvJz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdzbXItbmFtZSc+e3NtclswXS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSAnc21yLWVtYWlsJz5FbWFpbDoge3NtclswXS5lbWFpbH08L2g0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjgsIDAuNSwgMC40LCAwLjNdfSBteD0nYXV0byc+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NtclswXS5pbWFnZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPXtbMC44LCAwLjVdfSBteCA9ICdhdXRvJyBtYiA9ICdhdXRvJz5cclxuICAgICAgICAgICAge3NtclswXS5ib2R5fVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNNUjsiXSwic291cmNlUm9vdCI6IiJ9