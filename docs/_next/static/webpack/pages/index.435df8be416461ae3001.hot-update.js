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
    width: [0.9],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcyJdLCJuYW1lcyI6WyJpY29uRm9sZGVyIiwicXVpY2tMaW5rcyIsIm5hbWUiLCJpY29uIiwidG8iLCJhYnNvbHV0ZSIsIkludHJvIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW1hZ2UiLCJ3aWR0aCIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhyZWYiLCJCb3giLCJGbGV4IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwibWFwIiwiX3JlZiIsImtleSIsImNvbmNhdCIsIkxpbmsiLCJhbHQiLCJ0YXJnZXQiLCJyZWwiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNiO0FBQzdCO0FBQ3lCO0FBRXpCLElBQU1BLFVBQVUsR0FBRyxxQkFBcUI7QUFDeEMsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7RUFDSUMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxFQUFFLEVBQUUsa0JBQWtCO0VBQ3RCQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSUgsSUFBSSxFQUFFLFFBQVE7RUFDZEMsSUFBSSxFQUFFLFFBQVE7RUFDZDtFQUNBQyxFQUFFLEVBQUUsUUFBUTtFQUNaQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSUgsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLElBQUksRUFBRSxPQUFPO0VBQ2JDLEVBQUUsRUFBRSw4QkFBOEI7RUFDbENDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsdUJBQXVCO0VBQzdCQyxJQUFJLEVB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RyxFQUFDLEVBQUU7TUFBQ3pCLFNBQVMsRUFBQyxzQkFBc0I7TUFBQUMsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUFDLEVBQ3RGUixLQUFBO01BQUtXLEdBQUcsS0FBQWEsTUFBQSxDQUFLL0IsVUFBVSxFQUFBK0IsTUFBQSxDQUFHNUIsSUFBSSxlQUFhO01BQUM4QixHQUFHLEVBQUMsRUFBRTtNQUFDekIsU0FBUyxFQUFDLHNCQUFzQjtNQUFBQyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUFFLENBQUMsRUFDdEZSLEtBQUE7TUFBSUMsU0FBUyxFQUFDLGlCQUFpQjtNQUFBQyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFYixJQUFTLENBQ3pDLENBQ04sQ0FJZCxDQUFDO0VBQUEsQ0FDVCxDQUdILENBQ0wsQ0FBQztBQUFBLENBQ1Q7QUFBQWtDLEVBQUEsR0EvREs5QixLQUFLO0FBaUVJQSxvRUFBSyxFQUFDO0FBQUEsSUFBQThCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzNWRmOGJlNDE2NDYxYWUzMDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi8xMC9iYW5uZXIvYmFubmVyJztcclxuaW1wb3J0ICcuL2ludHJvcGFnZS5jc3MnO1xyXG5cclxuY29uc3QgaWNvbkZvbGRlciA9ICcuLi8uLi9zdGF0aWMvaWNvbnMvJ1xyXG5jb25zdCBxdWlja0xpbmtzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIixcclxuICAgICAgICBpY29uOiBcImNhbGVuZGFyXCIsXHJcbiAgICAgICAgdG86IFwiL2V2ZW50cy9jYWxlbmRhclwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTy1XZWVrXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW9wbGVcIixcclxuICAgICAgICAvLyBocmVmOiBcImh0dHBzOi8vbWNtdXJ0cnlvd2Vlay53aXhzaXRlLmNvbS9ob21lLXBhZ2VcIlxyXG4gICAgICAgIHRvOiBcIi9vd2Vla1wiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQm9vayBhIFJvb21cIixcclxuICAgICAgICBpY29uOiBcImV2ZW50XCIsXHJcbiAgICAgICAgdG86IFwiL3Jlc291cmNlcy9yb29tcmVzZXJ2YXRpb25zL1wiLFxyXG4gICAgICAgIGFic29sdXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsXHJcbiAgICAgICAgaWNvbjogXCJoYW5kLWhlYXJ0XCIsXHJcbiAgICAgICAgdG86IFwiL2Fib3V0L2ZpbmFuY2lhbGluY2x1c2l2aXR5XCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEb25hdGVcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtY29pblwiLFxyXG4gICAgICAgIHRvOiBcIlwiLFxyXG4gICAgICAgIGFic29sdXRlOiBcImh0dHBzOi8vcmljZWNvbm5lY3QucmljZS5lZHUvZG9uYXRpb24vbWNtdXJ0cnktY29sbGVnZVwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IEludHJvID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLXBhZ2UnPlxyXG4gICAgICAgIHsvKiA8QmFubmVyIC8+ICovfVxyXG4gICAgICAgIHsvKiA8TGluayBocmVmPXtcIi9yZXNvdXJjZXMvY29yb25hdmlydXNcIn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29yb25hdmlydXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxyXG4gICAgICAgICAgICAgICAgPHA+Q2xpY2sgaGVyZSBmb3IgUmVzb3VyY2VzIGFuZCBRdWVzdGlvbnMgcmVnYXJkaW5nIHRoZSBjb3JvbmF2aXJ1cyByZXNwb25zZSBhdCBSaWNlL01jTXVydHJ5PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3dlbGNvbWUtdGl0bGUnPldlbGNvbWUgdG8gTWNNdXJ0cnkhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neXVydC1ncmFwaGljJz5cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoID0ge1sgLjk1LCAuOCBdfSBzcmM9Jy4uLy4uL3N0YXRpYy9ZdXJ0VHJlZXMuc3ZnJy8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9nb28uZ2wvZm9ybXMvS0V5UHBsTGhjbGxqZFNPbTJcIn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94ICBjbGFzc05hbWU9XCJhY2Nlc3NpYmlsaXR5LWZ1bmQtYmFubmVyXCIgd2lkdGg9e1swLjldfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBNYWdpc3RlcnMnIEFjY2Vzc2liaWxpdHkgRnVuZCAmIzg1OTQ7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE0a3ZvellVaGVDVGtILVFxeFNXZk84T01RcklMZGdyN2NXM3dGMmVQUUpzL2VkaXQjZ2lkPTEzNTI2OTM2MTdcIn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwic3R1ZGVudC1yZXNvdXJjZXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxyXG4gICAgICAgICAgICAgICAgPHA+U3R1ZGVudC9BY2FkZW1pYyBSZXNvdXJjZXMgU3ByZWFkc2hlZXQgJiM4NTk0OzwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcXVpY2tMaW5rcy5tYXAoKHsgbmFtZSwgaWNvbiwgdG8sIGFic29sdXRlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncXVpY2stbGluay1jb250YWluZXInIHdpZHRoPXtbMTMwLCAyMjBdfSBrZXk9e2Ake25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNzBgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1sYXJnZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNDVgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb25Gb2xkZXJ9JHtpY29ufS1zbWFsbC5zdmdgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3F1aWNrLWxpbmstbmFtZSc+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YWJzb2x1dGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxdWljay1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiXSwic291cmNlUm9vdCI6IiJ9