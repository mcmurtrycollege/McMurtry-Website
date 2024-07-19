webpackHotUpdate_N_E("pages/index",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ "./components/splashpage/intropage.css");
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\splashpage\\intropage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import Banner from '../10/banner/banner';

var iconFolder = '../../static/icons/';
var quickLinks = [{
  name: "Calendar",
  icon: "calendar",
  to: "/events/calendar",
  absolute: ""
}, {
  name: "O-Week",
  icon: "people",
  // href: "https://mcmurtryoweek.wixsite.com/home-page"
  to: "/oweek",
  absolute: ""
}, {
  name: "Book a Room",
  icon: "event",
  to: "/resources/roomreservations/",
  absolute: ""
}, {
  name: "Financial Inclusivity",
  icon: "hand-heart",
  to: "/about/financialinclusivity",
  absolute: ""
}, {
  name: "Donate",
  icon: "hand-coin",
  to: "",
  absolute: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}];
var Intro = function Intro() {
  return __jsx("div", {
    className: "intro-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "welcome-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Welcome to McMurtry!"), __jsx("div", {
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: [.95, .8],
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund \u2192")))), __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    width: [0.9, 0.5],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Student/Academic Resources Spreadsheet \u2192"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, quickLinks.map(function (_ref) {
    var name = _ref.name,
      icon = _ref.icon,
      to = _ref.to,
      absolute = _ref.absolute;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "quick-link-container",
      width: [130, 220],
      key: "".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, to !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 41
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, name))) : __jsx("a", {
      href: absolute,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 45
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 45
      }
    }, name))));
  })));
};
_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);
var _c;
$RefreshReg$(_c, "Intro");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcyJdLCJuYW1lcyI6WyJpY29uRm9sZGVyIiwicXVpY2tMaW5rcyIsIm5hbWUiLCJpY29uIiwidG8iLCJhYnNvbHV0ZSIsIkludHJvIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW1hZ2UiLCJ3aWR0aCIsInNyYyIsImhyZWYiLCJCb3giLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJfcmVmIiwia2V5IiwiY29uY2F0IiwiTGluayIsImFsdCIsInRhcmdldCIsInJlbCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2I7QUFDN0I7QUFDeUI7QUFFekIsSUFBTUEsVUFBVSxHQUFHLHFCQUFxQjtBQUN4QyxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtFQUNJQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLEVBQUUsRUFBRSxrQkFBa0I7RUFDdEJDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsUUFBUTtFQUNkQyxJQUFJLEVBQUUsUUFBUTtFQUNkO0VBQ0FDLEVBQUUsRUFBRSxRQUFRO0VBQ1pDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLE9BQU87RUFDYkMsRUFBRSxFQUFFLDhCQUE4QjtFQUNsQ0MsUUFBUSxFQUFFO0FBQ2QsQ0FBQyxFQUNEO0VBQ0lILElBQUksRUFBRSx1QkFBdUI7RUFDN0JDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxFQUFFLEVBQUUsNkJBQTZC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LEtBQUE7TUFBS1csR0FBRyxLQUFBVSxNQUFBLENBQUs1QixVQUFVLEVBQUE0QixNQUFBLENBQUd6QixJQUFJLGVBQWE7TUFBQzJCLEdBQUcsRUFBQyxFQUFFO01BQUN0QixTQUFTLEVBQUMsc0JBQXNCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQyxFQUN0RlIsS0FBQTtNQUFJQyxTQUFTLEVBQUMsaUJBQWlCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUViLElBQVMsQ0FDekMsQ0FDTixDQUlkLENBQUM7RUFBQSxDQUNULENBR0gsQ0FDTCxDQUFDO0FBQUEsQ0FDVDtBQUFBK0IsRUFBQSxHQTNESzNCLEtBQUs7QUE2RElBLG9FQUFLLEVBQUM7QUFBQSxJQUFBMkIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGNjMTc3NDNhODVhZmJmOTY5MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uLzEwL2Jhbm5lci9iYW5uZXInO1xyXG5pbXBvcnQgJy4vaW50cm9wYWdlLmNzcyc7XHJcblxyXG5jb25zdCBpY29uRm9sZGVyID0gJy4uLy4uL3N0YXRpYy9pY29ucy8nXHJcbmNvbnN0IHF1aWNrTGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiLFxyXG4gICAgICAgIGljb246IFwiY2FsZW5kYXJcIixcclxuICAgICAgICB0bzogXCIvZXZlbnRzL2NhbGVuZGFyXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPLVdlZWtcIixcclxuICAgICAgICBpY29uOiBcInBlb3BsZVwiLFxyXG4gICAgICAgIC8vIGhyZWY6IFwiaHR0cHM6Ly9tY211cnRyeW93ZWVrLndpeHNpdGUuY29tL2hvbWUtcGFnZVwiXHJcbiAgICAgICAgdG86IFwiL293ZWVrXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCb29rIGEgUm9vbVwiLFxyXG4gICAgICAgIGljb246IFwiZXZlbnRcIixcclxuICAgICAgICB0bzogXCIvcmVzb3VyY2VzL3Jvb21yZXNlcnZhdGlvbnMvXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGaW5hbmNpYWwgSW5jbHVzaXZpdHlcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtaGVhcnRcIixcclxuICAgICAgICB0bzogXCIvYWJvdXQvZmluYW5jaWFsaW5jbHVzaXZpdHlcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRvbmF0ZVwiLFxyXG4gICAgICAgIGljb246IFwiaGFuZC1jb2luXCIsXHJcbiAgICAgICAgdG86IFwiXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiaHR0cHM6Ly9yaWNlY29ubmVjdC5yaWNlLmVkdS9kb25hdGlvbi9tY211cnRyeS1jb2xsZWdlXCJcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgSW50cm8gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tcGFnZSc+XHJcbiAgICAgICAgey8qIDxCYW5uZXIgLz4gKi99XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiL3Jlc291cmNlcy9jb3JvbmF2aXJ1c1wifT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjb3JvbmF2aXJ1cy1iYW5uZXJcIiB3aWR0aD17WzAuOSwgMC41XX0+XHJcbiAgICAgICAgICAgICAgICA8cD5DbGljayBoZXJlIGZvciBSZXNvdXJjZXMgYW5kIFF1ZXN0aW9ucyByZWdhcmRpbmcgdGhlIGNvcm9uYXZpcnVzIHJlc3BvbnNlIGF0IFJpY2UvTWNNdXJ0cnk8L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nd2VsY29tZS10aXRsZSc+V2VsY29tZSB0byBNY011cnRyeSE8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd5dXJ0LWdyYXBoaWMnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGggPSB7WyAuOTUsIC44IF19IHNyYz0nLi4vLi4vc3RhdGljL1l1cnRUcmVlcy5zdmcnLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyLWRpdic+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9nb28uZ2wvZm9ybXMvS0V5UHBsTGhjbGxqZFNPbTJcIn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94ICBjbGFzc05hbWU9XCJhY2Nlc3NpYmlsaXR5LWZ1bmQtYmFubmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1jTXVydHJ5IE1hZ2lzdGVycycgQWNjZXNzaWJpbGl0eSBGdW5kICYjODU5NDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTRrdm96WVVoZUNUa0gtUXF4U1dmTzhPTVFySUxkZ3I3Y1czd0YyZVBRSnMvZWRpdCNnaWQ9MTM1MjY5MzYxN1wifT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJzdHVkZW50LXJlc291cmNlcy1iYW5uZXJcIiB3aWR0aD17WzAuOSwgMC41XX0+XHJcbiAgICAgICAgICAgICAgICA8cD5TdHVkZW50L0FjYWRlbWljIFJlc291cmNlcyBTcHJlYWRzaGVldCAmIzg1OTQ7PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBxdWlja0xpbmtzLm1hcCgoeyBuYW1lLCBpY29uLCB0bywgYWJzb2x1dGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdxdWljay1saW5rLWNvbnRhaW5lcicgd2lkdGg9e1sxMzAsIDIyMF19IGtleT17YCR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncXVpY2stbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tbGFyZ2Uuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthYnNvbHV0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tbGFyZ2Uuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1zbWFsbC5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvOyJdLCJzb3VyY2VSb290IjoiIn0=