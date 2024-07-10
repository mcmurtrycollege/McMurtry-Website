webpackHotUpdate_N_E("pages/people/paas",{

/***/ "./components/general/contactcards.js":
/*!********************************************!*\
  !*** ./components/general/contactcards.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactcards.css */ "./components/general/contactcards.css");
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contactcards_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\slsd5\\Documents\\McMurtry-Website\\components\\general\\contactcards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Card = function Card(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "position-card",
    width: props.width,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-card-content",
    style: {
      height: props.height
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.photo !== undefined ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.photo,
    alt: "photo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }) : null, props.position !== undefined ? __jsx("h2", {
    className: "position",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, props.position) : null, __jsx("h2", {
    className: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, props.name), props.phone !== undefined ? __jsx("h3", {
    className: "contact-phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../static/icons/phone.svg",
    alt: "Phone: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 51
    }
  }), ' ', props.phone) : null, props.email !== undefined ? __jsx("a", {
    href: "mailto:".concat(props.email),
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "../../static/icons/email.svg",
    alt: "Email: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 55
    }
  }), ' ', props.email)) : null, props.year !== undefined ? __jsx("h4", {
    className: "year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Year: ", props.year) : null, props.major !== undefined ? __jsx("h2", {
    className: "major",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../static/icons/file.svg",
    alt: "Major: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 43
    }
  }), " ", props.major) : null, props.subjects !== undefined ? __jsx("h2", {
    className: "subjects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../static/icons/book.svg",
    alt: "Subjects: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 46
    }
  }), " ", props.subjects) : null, props.room !== undefined ? __jsx("h2", {
    className: "room",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Room: ", props.room) : null, props.pre_prof_path !== undefined ? __jsx("h2", {
    className: "pre_prof_path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../static/icons/file.svg",
    alt: "Pre-Professional Path: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 51
    }
  }), " ", props.pre_prof_path) : null));
};
_c = Card;
var Cards = function Cards(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 1, 1],
    ml: "auto",
    mr: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, props.content.map(function (_ref) {
    var photo = _ref.photo,
      position = _ref.position,
      name = _ref.name,
      year = _ref.year,
      email = _ref.email,
      phone = _ref.phone,
      major = _ref.major,
      subjects = _ref.subjects,
      room = _ref.room,
      pre_prof_path = _ref.pre_prof_path;
    return __jsx(Card, {
      height: props.height,
      width: props.width,
      key: name,
      photo: photo,
      position: position,
      name: name,
      year: year,
      email: email,
      phone: phone,
      major: major,
      subjects: subjects,
      room: room,
      pre_prof_path: pre_prof_path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    });
  })));
};
_c2 = Cards;
/* harmony default export */ __webpack_exports__["default"] = (Cards);
var _c, _c2;
$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "Cards");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2NvbnRhY3RjYXJkcy5qcyJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInBob3RvIiwidW5kZWZpbmVkIiwicG9zaXRpb24iLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsInllYXIiLCJtYWpvciIsInN1YmplY3RzIiwicm9vbSIsInByZV9wcm9mX3BhdGgiLCJDYXJkcyIsImNvbnRlbnQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2Q7QUFFNUIsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUksQ0FBR0MsS0FBSztFQUFBLE9BQ2QsTUFBRSwwQ0FBRztJQUFDLFNBQVMsRUFBQyxlQUFlO0lBQUMsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMvQztJQUFLLFNBQVMsRUFBQyxzQkFBc0I7SUFBQyxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFRixLQUFLLENBQUNFO0lBQU8sQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRTlERixLQUFLLENBQUNHLEtBQUssS0FBS0MsU0FBUyxHQUNyQixNQUFDLDRDQUFLO0lBQUMsR0FBRyxFQUFFSixLQUFLLENBQUNHLEtBQU07SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsR0FFbkMsSUFDSCxFQUdMSCxLQUFLLENBQUNLLFFBQVEsS0FBS0QsU0FBUyxHQUN4QjtJQUFJLFNBQVMsRUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBRUosS0FBSyxDQUFDSyxRQUFRLENBQU0sR0FFMUMsSUFDSCxFQUVUO0lBQUksU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFB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QUMsYUFBYSxFQUFDLEtBQUs7SUFBQyxjQUFjLEVBQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRXpEQSxLQUFLLENBQUNlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUEsSUFBR2IsS0FBSyxRQUFMQSxLQUFLO01BQUVFLFFBQVEsUUFBUkEsUUFBUTtNQUFFQyxJQUFJLFFBQUpBLElBQUk7TUFBRUcsSUFBSSxRQUFKQSxJQUFJO01BQUVELEtBQUssUUFBTEEsS0FBSztNQUFFRCxLQUFLLFFBQUxBLEtBQUs7TUFBRUcsS0FBSyxRQUFMQSxLQUFLO01BQUVDLFFBQVEsUUFBUkEsUUFBUTtNQUFFQyxJQUFJLFFBQUpBLElBQUk7TUFBRUMsYUFBYSxRQUFiQSxhQUFhO0lBQUEsT0FDaEcsTUFBQyxJQUFJO01BQUMsTUFBTSxFQUFFYixLQUFLLENBQUNFLE1BQU87TUFBQyxLQUFLLEVBQUVGLEtBQUssQ0FBQ0MsS0FBTTtNQUFDLEdBQUcsRUFBRUssSUFBSztNQUFDLEtBQUssRUFBRUgsS0FBTTtNQUFDLFFBQVEsRUFBRUUsUUFBUztNQUN4RixJQUFJLEVBQUVDLElBQUs7TUFBQyxJQUFJLEVBQUVHLElBQUs7TUFBQyxLQUFLLEVBQUVELEtBQU07TUFBQyxLQUFLLEVBQUVELEtBQU07TUFBQyxLQUFLLEVBQUVHLEtBQU07TUFBQyxRQUFRLEVBQUVDLFFBQVM7TUFBQyxJQUFJLEVBQUVDLElBQUs7TUFDakcsYUFBYSxFQUFFQyxhQUFjO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRztFQUFBLENBQ3ZDLENBQUMsQ0FFSCxDQUNMO0FBQUEsQ0FDVDtBQUFBLE1BWktDLEtBQUs7QUFjSUEsb0VBQUssRUFBQztBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvcGFhcy4zOWYzMWM0ZGFhMTlkYWEyYzQ4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCAnLi9jb250YWN0Y2FyZHMuY3NzJztcclxuXHJcbmNvbnN0IENhcmQgPSBwcm9wcyA9PiAoXHJcbiAgICA8IEJveCBjbGFzc05hbWU9J3Bvc2l0aW9uLWNhcmQnIHdpZHRoPXtwcm9wcy53aWR0aH0gPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkLWNvbnRlbnRcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLmhlaWdodCB9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucGhvdG8gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5waG90b30gYWx0PSdwaG90bycgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zaXRpb25cIj57cHJvcHMucG9zaXRpb259PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvcHMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5waG9uZSAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXBob25lXCI+PGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbnMvcGhvbmUuc3ZnXCIgYWx0PVwiUGhvbmU6IFwiIC8+eycgJ317cHJvcHMucGhvbmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZW1haWwgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7cHJvcHMuZW1haWx9YH0gY2xhc3NOYW1lPSdsaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3QtZW1haWxcIj48aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29ucy9lbWFpbC5zdmdcIiBhbHQ9XCJFbWFpbDogXCIgLz57JyAnfXtwcm9wcy5lbWFpbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMueWVhciAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3llYXInPlllYXI6IHtwcm9wcy55ZWFyfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLm1ham9yICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWFqb3InPjxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25zL2ZpbGUuc3ZnXCIgYWx0PSdNYWpvcjogJyAvPiB7cHJvcHMubWFqb3J9PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3ViamVjdHMgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViamVjdHNcIj48aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29ucy9ib29rLnN2Z1wiIGFsdD0nU3ViamVjdHM6ICcgLz4ge3Byb3BzLnN1YmplY3RzfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb29tICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncm9vbSc+Um9vbToge3Byb3BzLnJvb219PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucHJlX3Byb2ZfcGF0aCAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3ByZV9wcm9mX3BhdGgnPjxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25zL2ZpbGUuc3ZnXCIgYWx0PSdQcmUtUHJvZmVzc2lvbmFsIFBhdGg6ICcgLz4ge3Byb3BzLnByZV9wcm9mX3BhdGh9PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQm94ID5cclxuKVxyXG5cclxuY29uc3QgQ2FyZHMgPSBwcm9wcyA9PiAoXHJcbiAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSwgMV19IG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgPEZsZXggZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFwKCh7IHBob3RvLCBwb3NpdGlvbiwgbmFtZSwgeWVhciwgZW1haWwsIHBob25lLCBtYWpvciwgc3ViamVjdHMsIHJvb20sIHByZV9wcm9mX3BhdGggfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGhlaWdodD17cHJvcHMuaGVpZ2h0fSB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17bmFtZX0gcGhvdG89e3Bob3RvfSBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IHllYXI9e3llYXJ9IGVtYWlsPXtlbWFpbH0gcGhvbmU9e3Bob25lfSBtYWpvcj17bWFqb3J9IHN1YmplY3RzPXtzdWJqZWN0c30gcm9vbT17cm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlX3Byb2ZfcGF0aD17cHJlX3Byb2ZfcGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7Il0sInNvdXJjZVJvb3QiOiIifQ==