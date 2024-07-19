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
  }, "Welcome to McMurtry!"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.95, 0.8],
    alignSelf: "center",
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    width: [0.9, 0.5],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "McMurtry Magisters' Accessibility Fund \u2192"))), __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    width: [0.9, 0.5],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Student/Academic Resources Spreadsheet \u2192"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        lineNumber: 67,
        columnNumber: 21
      }
    }, to !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    }, name))) : __jsx("a", {
      href: absolute,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcyJdLCJuYW1lcyI6WyJpY29uRm9sZGVyIiwicXVpY2tMaW5rcyIsIm5hbWUiLCJpY29uIiwidG8iLCJhYnNvbHV0ZSIsIkludHJvIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQm94Iiwid2lkdGgiLCJhbGlnblNlbGYiLCJJbWFnZSIsInNyYyIsImhyZWYiLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJfcmVmIiwia2V5IiwiY29uY2F0IiwiTGluayIsImFsdCIsInRhcmdldCIsInJlbCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2I7QUFDN0I7QUFDeUI7QUFFekIsSUFBTUEsVUFBVSxHQUFHLHFCQUFxQjtBQUN4QyxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtFQUNJQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLEVBQUUsRUFBRSxrQkFBa0I7RUFDdEJDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsUUFBUTtFQUNkQyxJQUFJLEVBQUUsUUFBUTtFQUNkO0VBQ0FDLEVBQUUsRUFBRSxRQUFRO0VBQ1pDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLE9BQU87RUFDYkMsRUFBRSxFQUFFLDhCQUE4QjtFQUNsQ0MsUUFBUSxFQUFFO0FBQ2QsQ0FBQyxFQUNEO0VBQ0lILElBQUksRUFBRSx1QkFBdUI7RUFDN0JDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxFQUFF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QUFVLEVBQUE2QixNQUFBLENBQUcxQixJQUFJLGVBQWE7TUFBQzRCLEdBQUcsRUFBQyxFQUFFO01BQUN2QixTQUFTLEVBQUMsc0JBQXNCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQyxFQUN0RlIsS0FBQTtNQUFJQyxTQUFTLEVBQUMsaUJBQWlCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUViLElBQVMsQ0FDekMsQ0FDTixDQUlkLENBQUM7RUFBQSxDQUNULENBR0gsQ0FDTCxDQUFDO0FBQUEsQ0FDVDtBQUFBZ0MsRUFBQSxHQXhESzVCLEtBQUs7QUEwRElBLG9FQUFLLEVBQUM7QUFBQSxJQUFBNEIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWFmNGRlZGE5ZGU3ZmJhYjkwNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uLzEwL2Jhbm5lci9iYW5uZXInO1xyXG5pbXBvcnQgJy4vaW50cm9wYWdlLmNzcyc7XHJcblxyXG5jb25zdCBpY29uRm9sZGVyID0gJy4uLy4uL3N0YXRpYy9pY29ucy8nXHJcbmNvbnN0IHF1aWNrTGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiLFxyXG4gICAgICAgIGljb246IFwiY2FsZW5kYXJcIixcclxuICAgICAgICB0bzogXCIvZXZlbnRzL2NhbGVuZGFyXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPLVdlZWtcIixcclxuICAgICAgICBpY29uOiBcInBlb3BsZVwiLFxyXG4gICAgICAgIC8vIGhyZWY6IFwiaHR0cHM6Ly9tY211cnRyeW93ZWVrLndpeHNpdGUuY29tL2hvbWUtcGFnZVwiXHJcbiAgICAgICAgdG86IFwiL293ZWVrXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCb29rIGEgUm9vbVwiLFxyXG4gICAgICAgIGljb246IFwiZXZlbnRcIixcclxuICAgICAgICB0bzogXCIvcmVzb3VyY2VzL3Jvb21yZXNlcnZhdGlvbnMvXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGaW5hbmNpYWwgSW5jbHVzaXZpdHlcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtaGVhcnRcIixcclxuICAgICAgICB0bzogXCIvYWJvdXQvZmluYW5jaWFsaW5jbHVzaXZpdHlcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRvbmF0ZVwiLFxyXG4gICAgICAgIGljb246IFwiaGFuZC1jb2luXCIsXHJcbiAgICAgICAgdG86IFwiXCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiaHR0cHM6Ly9yaWNlY29ubmVjdC5yaWNlLmVkdS9kb25hdGlvbi9tY211cnRyeS1jb2xsZWdlXCJcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgSW50cm8gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tcGFnZSc+XHJcbiAgICAgICAgey8qIDxCYW5uZXIgLz4gKi99XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiL3Jlc291cmNlcy9jb3JvbmF2aXJ1c1wifT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjb3JvbmF2aXJ1cy1iYW5uZXJcIiB3aWR0aD17WzAuOSwgMC41XX0+XHJcbiAgICAgICAgICAgICAgICA8cD5DbGljayBoZXJlIGZvciBSZXNvdXJjZXMgYW5kIFF1ZXN0aW9ucyByZWdhcmRpbmcgdGhlIGNvcm9uYXZpcnVzIHJlc3BvbnNlIGF0IFJpY2UvTWNNdXJ0cnk8L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nd2VsY29tZS10aXRsZSc+V2VsY29tZSB0byBNY011cnRyeSE8L2gxPlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjk1LCAwLjhdfSBhbGlnblNlbGY9J2NlbnRlcicgY2xhc3NOYW1lPSd5dXJ0LWdyYXBoaWMnID5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vc3RhdGljL1l1cnRUcmVlcy5zdmcnLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL0tFeVBwbExoY2xsamRTT20yXCJ9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFjY2Vzc2liaWxpdHktZnVuZC1iYW5uZXJcIiB3aWR0aD17WzAuOSwgMC41XX0+XHJcbiAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBNYWdpc3RlcnMnIEFjY2Vzc2liaWxpdHkgRnVuZCAmIzg1OTQ7PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xNGt2b3pZVWhlQ1RrSC1RcXhTV2ZPOE9NUXJJTGRncjdjVzN3RjJlUFFKcy9lZGl0I2dpZD0xMzUyNjkzNjE3XCJ9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInN0dWRlbnQtcmVzb3VyY2VzLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cclxuICAgICAgICAgICAgICAgIDxwPlN0dWRlbnQvQWNhZGVtaWMgUmVzb3VyY2VzIFNwcmVhZHNoZWV0ICYjODU5NDs8L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHF1aWNrTGlua3MubWFwKCh7IG5hbWUsIGljb24sIHRvLCBhYnNvbHV0ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J3F1aWNrLWxpbmstY29udGFpbmVyJyB3aWR0aD17WzEzMCwgMjIwXX0ga2V5PXtgJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxdWljay1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1sYXJnZS5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Fic29sdXRlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncXVpY2stbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNzBgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNDVgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1sYXJnZS5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3F1aWNrLWxpbmstbmFtZSc+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87Il0sInNvdXJjZVJvb3QiOiIifQ==