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
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
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
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    width: [0.9, 0.5],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund \u2192")))), __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    width: [0.9, 0.5],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Student/Academic Resources Spreadsheet \u2192"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
        lineNumber: 74,
        columnNumber: 21
      }
    }, to !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 41
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 41
      }
    }, name))) : __jsx("a", {
      href: absolute,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "quick-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-large.svg"),
      alt: "",
      className: "intro-link-img-large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "".concat(iconFolder).concat(icon, "-small.svg"),
      alt: "",
      className: "intro-link-img-small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 45
      }
    }), __jsx("h2", {
      className: "quick-link-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcyJdLCJuYW1lcyI6WyJpY29uRm9sZGVyIiwicXVpY2tMaW5rcyIsIm5hbWUiLCJpY29uIiwidG8iLCJhYnNvbHV0ZSIsIkludHJvIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW1hZ2UiLCJ3aWR0aCIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhyZWYiLCJCb3giLCJGbGV4IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwibWFwIiwiX3JlZiIsImtleSIsImNvbmNhdCIsIkxpbmsiLCJhbHQiLCJ0YXJnZXQiLCJyZWwiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNiO0FBQzdCO0FBQ3lCO0FBRXpCLElBQU1BLFVBQVUsR0FBRyxxQkFBcUI7QUFDeEMsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7RUFDSUMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxFQUFFLEVBQUUsa0JBQWtCO0VBQ3RCQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSUgsSUFBSSxFQUFFLFFBQVE7RUFDZEMsSUFBSSxFQUFFLFFBQVE7RUFDZDtFQUNBQyxFQUFFLEVBQUUsUUFBUTtFQUNaQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSUgsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLElBQUksRUFBRSxPQUFPO0VBQ2JDLEVBQUUsRUFBRSw4QkFBOEI7RUFDbENDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsdUJBQXVCO0VBQzdCQyxJQUFJLEVB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TUFBQzhCLEdBQUcsRUFBQyxFQUFFO01BQUN6QixTQUFTLEVBQUMsc0JBQXNCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQyxFQUN0RlIsS0FBQTtNQUFLVyxHQUFHLEtBQUFhLE1BQUEsQ0FBSy9CLFVBQVUsRUFBQStCLE1BQUEsQ0FBRzVCLElBQUksZUFBYTtNQUFDOEIsR0FBRyxFQUFDLEVBQUU7TUFBQ3pCLFNBQVMsRUFBQyxzQkFBc0I7TUFBQUMsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUFDLEVBQ3RGUixLQUFBO01BQUlDLFNBQVMsRUFBQyxpQkFBaUI7TUFBQUMsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBRWIsSUFBUyxDQUN6QyxDQUNOLENBSWQsQ0FBQztFQUFBLENBQ1QsQ0FHSCxDQUNMLENBQUM7QUFBQSxDQUNUO0FBQUFrQyxFQUFBLEdBL0RLOUIsS0FBSztBQWlFSUEsb0VBQUssRUFBQztBQUFBLElBQUE4QixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NGNkNzRjMGE3YTJmMGMyZTNmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vMTAvYmFubmVyL2Jhbm5lcic7XHJcbmltcG9ydCAnLi9pbnRyb3BhZ2UuY3NzJztcclxuXHJcbmNvbnN0IGljb25Gb2xkZXIgPSAnLi4vLi4vc3RhdGljL2ljb25zLydcclxuY29uc3QgcXVpY2tMaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCIsXHJcbiAgICAgICAgaWNvbjogXCJjYWxlbmRhclwiLFxyXG4gICAgICAgIHRvOiBcIi9ldmVudHMvY2FsZW5kYXJcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk8tV2Vla1wiLFxyXG4gICAgICAgIGljb246IFwicGVvcGxlXCIsXHJcbiAgICAgICAgLy8gaHJlZjogXCJodHRwczovL21jbXVydHJ5b3dlZWsud2l4c2l0ZS5jb20vaG9tZS1wYWdlXCJcclxuICAgICAgICB0bzogXCIvb3dlZWtcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXHJcbiAgICAgICAgaWNvbjogXCJldmVudFwiLFxyXG4gICAgICAgIHRvOiBcIi9yZXNvdXJjZXMvcm9vbXJlc2VydmF0aW9ucy9cIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLFxyXG4gICAgICAgIGljb246IFwiaGFuZC1oZWFydFwiLFxyXG4gICAgICAgIHRvOiBcIi9hYm91dC9maW5hbmNpYWxpbmNsdXNpdml0eVwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRG9uYXRlXCIsXHJcbiAgICAgICAgaWNvbjogXCJoYW5kLWNvaW5cIixcclxuICAgICAgICB0bzogXCJcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL21jbXVydHJ5LWNvbGxlZ2VcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBJbnRybyA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1wYWdlJz5cclxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cclxuICAgICAgICB7LyogPExpbmsgaHJlZj17XCIvcmVzb3VyY2VzL2Nvcm9uYXZpcnVzXCJ9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImNvcm9uYXZpcnVzLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cclxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGhlcmUgZm9yIFJlc291cmNlcyBhbmQgUXVlc3Rpb25zIHJlZ2FyZGluZyB0aGUgY29yb25hdmlydXMgcmVzcG9uc2UgYXQgUmljZS9NY011cnRyeTwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd3ZWxjb21lLXRpdGxlJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3l1cnQtZ3JhcGhpYyc+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aCA9IHtbIC45NSwgLjggXX0gc3JjPScuLi8uLi9zdGF0aWMvWXVydFRyZWVzLnN2ZycvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL0tFeVBwbExoY2xsamRTT20yXCJ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCAgY2xhc3NOYW1lPVwiYWNjZXNzaWJpbGl0eS1mdW5kLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBNYWdpc3RlcnMnIEFjY2Vzc2liaWxpdHkgRnVuZCAmIzg1OTQ7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE0a3ZvellVaGVDVGtILVFxeFNXZk84T01RcklMZGdyN2NXM3dGMmVQUUpzL2VkaXQjZ2lkPTEzNTI2OTM2MTdcIn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwic3R1ZGVudC1yZXNvdXJjZXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxyXG4gICAgICAgICAgICAgICAgPHA+U3R1ZGVudC9BY2FkZW1pYyBSZXNvdXJjZXMgU3ByZWFkc2hlZXQgJiM4NTk0OzwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcXVpY2tMaW5rcy5tYXAoKHsgbmFtZSwgaWNvbiwgdG8sIGFic29sdXRlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncXVpY2stbGluay1jb250YWluZXInIHdpZHRoPXtbMTMwLCAyMjBdfSBrZXk9e2Ake25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNzBgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNDVgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1zbWFsbC5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3F1aWNrLWxpbmstbmFtZSc+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YWJzb2x1dGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxdWljay1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiXSwic291cmNlUm9vdCI6IiJ9