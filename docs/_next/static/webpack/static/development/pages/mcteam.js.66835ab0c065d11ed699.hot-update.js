webpackHotUpdate("static\\development\\pages\\mcteam.js",{

/***/ "./components/navbar headers/leadership/mcteam/mcteam.js":
/*!***************************************************************!*\
  !*** ./components/navbar headers/leadership/mcteam/mcteam.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return McTeam; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mcteam.css */ "./components/navbar headers/leadership/mcteam/mcteam.css");
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mcteam_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../title */ "./components/title.js");
/* harmony import */ var _mcteam_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mcteam.json */ "./components/navbar headers/leadership/mcteam/mcteam.json");
var _mcteam_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mcteam.json */ "./components/navbar headers/leadership/mcteam/mcteam.json", 1);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\navbar headers\\leadership\\mcteam\\mcteam.js";





var items = [_mcteam_json__WEBPACK_IMPORTED_MODULE_10__["magister_info"], _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["head_resident_fellows"], _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["second_floor_RA"], _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["third_floor_RA"], _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["college_coordinator"]];

for (var i = 0; i < items.length; i++) {
  items[i].index = i;
  items[i].key = items[i].names;
}

var positions = ["Magisters", "Head Resident Fellows", "2nd Floor RAs", "3rd Floor RAs", "College Coordinator"];

var McTeam =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(McTeam, _React$Component);

  function McTeam(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, McTeam);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(McTeam).call(this, props));
    _this.state = {
      current: 0
    };
    _this.handleEvent = _this.handleEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(McTeam, [{
    key: "handleEvent",
    value: function handleEvent(index) {
      this.setState({
        current: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mcteam-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "McTeam",
        width: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, positions.map(function (position) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: position,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.handleEvent(positions.indexOf(position));
          },
          className: _this2.state.current === positions.indexOf(position) ? "active-key" : "inactive-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "mcteam-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, position)));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 0.9, 0.8, 0.7],
        ml: "auto",
        mr: "auto",
        mb: 50,
        className: "position-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "mcteam-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, items[this.state.current].names), items[this.state.current].body.map(function (line) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          key: "L-".concat(items[_this2.setState.current].body.indexOf(line)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, line);
      }), this.state.current === 4 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Buy stamps and get envelopes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Pick up mail and packages"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Borrow an extra key to your room"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Use the staplers, packing tape, scissors, shredder, etc."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Get a hug"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Do homework or take a study break")) : null));
    }
  }]);

  return McTeam;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=mcteam.js.66835ab0c065d11ed699.hot-update.js.map