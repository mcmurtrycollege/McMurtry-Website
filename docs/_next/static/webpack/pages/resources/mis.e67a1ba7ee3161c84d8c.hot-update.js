webpackHotUpdate_N_E("pages/resources/mis",{

/***/ "./components/resources/mis/mis.js":
/*!*****************************************!*\
  !*** ./components/resources/mis/mis.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _mis_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis.css */ "./components/resources/mis/mis.css");
/* harmony import */ var _mis_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mis_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mis_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mis.json */ "./components/resources/mis/mis.json");
var _mis_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mis.json */ "./components/resources/mis/mis.json", 1);
var _this = undefined,
  _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\resources\\mis\\mis.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MISLinks = [{
  text: "Safety Guidelines",
  icon: "https://icon.now.sh/security",
  link: '../../../../static/mis_safety.pdf'
}, {
  text: "Equipment Information",
  icon: "../../../../static/icon/building.svg",
  link: "https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing"
}, {
  text: "Email us at",
  icon: "../../../static/icons/email.svg",
  link: "mailto:mcminnovationspace@gmail.com"
}];
var McmInnovationSpace = function McmInnovationSpace() {
  return __jsx("div", {
    className: "mis-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 350,
    title: "McMurtry Innovation Space",
    smallText: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "mis-paragraphs",
    width: [1, 0.8, 0.7, 0.6],
    ml: "auto",
    mr: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["content"].map(function (paragraph) {
    return __jsx("p", {
      key: _mis_json__WEBPACK_IMPORTED_MODULE_4__["content"].indexOf(paragraph),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, paragraph);
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, MISLinks.map(function (_ref) {
    var text = _ref.text,
      icon = _ref.icon,
      link = _ref.link;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: 250,
      className: "mis-info",
      style: {
        margin: '2%'
      },
      key: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: link,
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "".concat(icon, "//DCDFE5/90"),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: "mis-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, text, icon === "../../../static/icons/email.svg" ? __jsx("p", {
      style: {
        fontSize: '0.5em'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 34
      }
    }, "mcminnovationspace@gmail.com") : undefined))));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.7],
    pb: 20,
    ml: "auto",
    mr: "auto",
    className: "schedule-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.25],
    className: "subtitle",
    ml: "auto",
    mr: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Hours")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["hours"].map(function (_ref2) {
    var day = _ref2.day,
      hours = _ref2.hours;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: 150,
      className: "schedule",
      key: "".concat(day),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, __jsx("h2", {
      className: "schedule-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, day), __jsx("h2", {
      className: "schedule-item",
      style: {
        fontWeight: 'normal'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, hours));
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.7, 0.2],
    className: "subtitle",
    ml: "auto",
    mr: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Student Personnel")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["personnel"].map(function (_ref3) {
    var name = _ref3.name,
      major = _ref3.major,
      college = _ref3.college,
      email = _ref3.email,
      askMeAbout = _ref3.askMeAbout;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.9, 0.3],
      className: "mis-contact-card",
      key: "".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "mis-contact",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx("h2", {
      className: "mis-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, name), __jsx("h2", {
      className: "mis-major",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, "Major: ", major), "//", __jsx("h2", {
      className: "mis-college",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 31
      }
    }, "College: ", college), __jsx("a", {
      href: "mailto:".concat(email),
      style: {
        textDecoration: 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx("h2", {
      className: "mis-email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "../../../static/icons/email.svg",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 59
      }
    }), ' ', email)), __jsx("h2", {
      className: "mis-askMeHeader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, "Ask Me About:"), __jsx("p", {
      className: "mis-askMeAbout",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 29
      }
    }, askMeAbout)));
  })));
};
_c = McmInnovationSpace;
/* harmony default export */ __webpack_exports__["default"] = (McmInnovationSpace);
var _c;
$RefreshReg$(_c, "McmInnovationSpace");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNvdXJjZXMvbWlzL21pcy5qcyJdLCJuYW1lcyI6WyJNSVNMaW5rcyIsInRleHQiLCJpY29uIiwibGluayIsIk1jbUlubm92YXRpb25TcGFjZSIsImNvbnRlbnQiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleE9mIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInVuZGVmaW5lZCIsImhvdXJzIiwiZGF5IiwiZm9udFdlaWdodCIsInBlcnNvbm5lbCIsIm5hbWUiLCJtYWpvciIsImNvbGxlZ2UiLCJlbWFpbCIsImFza01lQWJvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDSztBQUNyQjtBQUNvQztBQUV2RCxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtFQUNJQyxJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCQyxJQUFJLEVBQUUsOEJBQThCO0VBQ3BDQyxJQUFJLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDSUYsSUFBSSxFQUFFLHVCQUF1QjtFQUM3QkMsSUFBSSxFQUFFLHNDQUFzQztFQUM1Q0MsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxFQUNEO0VBQ0lGLElBQUksRUFBRSxhQUFhO0VBQ25CQyxJQUFJLEVBQUUsaUNBQWlDO0VBQ3ZDQyxJQUFJLEVBQUU7QUFDVixDQUFDLENBQ0o7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCO0VBQUEsT0FDcEI7SUFBSyxTQUFTLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3JCLE1BQUMsc0RBQUs7SUFBQyxLQUFLLEVBQUUsR0FBSTtJQUFDLEtBQUssRUFBQywyQkFBMkI7SUFBQyxTQUFTLEVBQUUsSUFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDeEUsTUFBQywwQ0FBRztJQUFDLFNBQVMsRUFBQyxnQkFBZ0I7SUFB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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vZ2VuZXJhbC90aXRsZSc7XHJcbmltcG9ydCAnLi9taXMuY3NzJztcclxuaW1wb3J0IHsgY29udGVudCwgaG91cnMsIHBlcnNvbm5lbCB9IGZyb20gJy4vbWlzLmpzb24nO1xyXG5cclxuY29uc3QgTUlTTGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJTYWZldHkgR3VpZGVsaW5lc1wiLFxyXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9zZWN1cml0eVwiLFxyXG4gICAgICAgIGxpbms6ICcuLi8uLi8uLi8uLi9zdGF0aWMvbWlzX3NhZmV0eS5wZGYnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiRXF1aXBtZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgaWNvbjogXCIuLi8uLi8uLi8uLi9zdGF0aWMvaWNvbi9idWlsZGluZy5zdmdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMWtOalRiQldSWUszWHhwZ3I3M3o3RUZVMy1wVG1zNDdNZFJ5VEVleDR3X0UvZWRpdD91c3A9c2hhcmluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiRW1haWwgdXMgYXRcIixcclxuICAgICAgICBpY29uOiBcIi4uLy4uLy4uL3N0YXRpYy9pY29ucy9lbWFpbC5zdmdcIixcclxuICAgICAgICBsaW5rOiBcIm1haWx0bzptY21pbm5vdmF0aW9uc3BhY2VAZ21haWwuY29tXCJcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgTWNtSW5ub3ZhdGlvblNwYWNlID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21pcy1wYWdlJz5cclxuICAgICAgICA8VGl0bGUgd2lkdGg9ezM1MH0gdGl0bGU9J01jTXVydHJ5IElubm92YXRpb24gU3BhY2UnIHNtYWxsVGV4dD17dHJ1ZX0gLz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0nbWlzLXBhcmFncmFwaHMnIHdpZHRoPXtbMSwgMC44LCAwLjcsIDAuNl19IG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKHBhcmFncmFwaCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtjb250ZW50LmluZGV4T2YocGFyYWdyYXBoKX0+e3BhcmFncmFwaH08L3A+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEZsZXggZmxleFdyYXA9J3dyYXAnIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE1JU0xpbmtzLm1hcCgoeyB0ZXh0LCBpY29uLCBsaW5rIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXsyNTB9IGNsYXNzTmFtZT0nbWlzLWluZm8nIHN0eWxlPXt7IG1hcmdpbjogJzIlJyB9fSBrZXk9e2ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19IHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS8vRENERkU1LzkwYH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWlzLWxpbmsnPnt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uID09PSBcIi4uLy4uLy4uL3N0YXRpYy9pY29ucy9lbWFpbC5zdmdcIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8cCBzdHlsZT17e2ZvbnRTaXplOiAnMC41ZW0nfX0+bWNtaW5ub3ZhdGlvbnNwYWNlQGdtYWlsLmNvbTwvcD4pIDogKHVuZGVmaW5lZCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAwLjddfSBwYj17MjB9IG1sPSdhdXRvJyBtcj0nYXV0bycgY2xhc3NOYW1lPSdzY2hlZHVsZS1ib3gnPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtbMC40LCAwLjI1XX0gY2xhc3NOYW1lPSdzdWJ0aXRsZScgbWw9J2F1dG8nIG1yPSdhdXRvJz5cclxuICAgICAgICAgICAgICAgIDxoMj5Ib3VyczwvaDI+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93Jz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Vycy5tYXAoKHsgZGF5LCBob3VycyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezE1MH0gY2xhc3NOYW1lPSdzY2hlZHVsZScga2V5PXtgJHtkYXl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzY2hlZHVsZS1pdGVtJz57ZGF5fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzY2hlZHVsZS1pdGVtJyBzdHlsZT17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT57aG91cnN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjcsIDAuMl19IGNsYXNzTmFtZT0nc3VidGl0bGUnIG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgICAgIDxoMj5TdHVkZW50IFBlcnNvbm5lbDwvaDI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEZsZXggZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5lbC5tYXAoKHsgbmFtZSwgbWFqb3IsIGNvbGxlZ2UsIGVtYWlsLCBhc2tNZUFib3V0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMC45LCAwLjNdfSBjbGFzc05hbWU9J21pcy1jb250YWN0LWNhcmQnIGtleT17YCR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXMtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWlzLW5hbWUnPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtaXMtbWFqb3InPk1ham9yOiB7bWFqb3J9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPGgyIGNsYXNzTmFtZT0nbWlzLWNvbGxlZ2UnPkNvbGxlZ2U6IHtjb2xsZWdlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtaXMtZW1haWwnPjxpbWcgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ljb25zL2VtYWlsLnN2Z1wiIGFsdD1cIlwiIC8+eycgJ317ZW1haWx9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21pcy1hc2tNZUhlYWRlcic+QXNrIE1lIEFib3V0OjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21pcy1hc2tNZUFib3V0Jz57YXNrTWVBYm91dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNY21Jbm5vdmF0aW9uU3BhY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==