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
    mb: .2,
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
    pb: .2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvc21yL3Ntci5qcyJdLCJuYW1lcyI6WyJTTVIiLCJzbXIiLCJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSjtBQUNXO0FBQ2Q7QUFDZDtBQUVuQixJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBRztFQUFBLE9BQ0w7SUFBSyxTQUFTLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3JCLE1BQUMsc0RBQUs7SUFBQyxLQUFLLEVBQUMseUJBQXlCO0lBQUMsS0FBSyxFQUFFLEdBQUk7SUFBQyxTQUFTLEVBQUUsSUFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDdEUsTUFBQywwQ0FBRztJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQyxFQUFFLEVBQUcsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQy9CO0lBQUksU0FBUyxFQUFHLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFFQyw2Q0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQU0sRUFDN0M7SUFBSSxTQUFTLEVBQUcsV0FBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGNBQVNELDZDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLEtBQUssQ0FBTSxDQUNwRCxFQUNOLE1BQUMsMENBQUc7SUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQyxFQUFFLEVBQUMsTUFBTTtJQUFDLEVBQUUsRUFBSSxFQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDakQsTUFBQyw0Q0FBSztJQUFDLEdBQUcsRUFBRUYsNkNBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDMUIsRUFDTixNQUFDLDBDQUFHO0lBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUFDLEVBQUUsRUFBRyxNQUFNO0lBQUMsRUFBRSxFQUFJLEVBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN4Q0gsNkNBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUNWLENBRUo7QUFBQSxDQUNUO0FBQUEsS0FmS0wsR0FBRztBQWlCTUEsa0VBQUcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL1NNUi4zYjFkMWMwYTAxZGE3Zjc0OWQxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2dlbmVyYWwvdGl0bGUnO1xyXG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uLy4uL2dlbmVyYWwvY29udGFjdGNhcmRzJztcclxuaW1wb3J0IHsgc21yIH0gZnJvbSAnLi9zbXIuanNvbic7XHJcbmltcG9ydCAnLi9zbXIuY3NzJztcclxuXHJcbmNvbnN0IFNNUiA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdzbXItcGFnZSc+XHJcbiAgICAgICAgPFRpdGxlIHRpdGxlPSdTdHVkZW50IE1haW50ZW5hbmNlIFJlcCcgd2lkdGg9ezM1MH0gc21hbGxUZXN0PXt0cnVlfSAvPlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjgsIDAuNV19IG14ID0gJ2F1dG8nPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ3Ntci1uYW1lJz57c21yWzBdLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9ICdzbXItZW1haWwnPkVtYWlsOiB7c21yWzBdLmVtYWlsfTwvaDQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCB3aWR0aD17WzAuOCwgMC41LCAwLjQsIDAuM119IG14PSdhdXRvJyBtYiA9IHsuMn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NtclswXS5pbWFnZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPXtbMC44LCAwLjVdfSBteCA9ICdhdXRvJyBwYiA9IHsuMn0+XHJcbiAgICAgICAgICAgIHtzbXJbMF0uYm9keX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTTVI7Il0sInNvdXJjZVJvb3QiOiIifQ==