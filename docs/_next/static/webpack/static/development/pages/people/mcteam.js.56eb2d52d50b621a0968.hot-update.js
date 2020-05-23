webpackHotUpdate("static/development/pages/people/mcteam.js",{

/***/ "./components/people/mcteam/mcteam.js":
/*!********************************************!*\
  !*** ./components/people/mcteam/mcteam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return McTeam; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mcteam.css */ "./components/people/mcteam/mcteam.css");
/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mcteam_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _mcteam_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mcteam.json */ "./components/people/mcteam/mcteam.json");
var _mcteam_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mcteam.json */ "./components/people/mcteam/mcteam.json", 1);






var _jsxFileName = "/Users/shaquillewyanque/git/McMurtry-Website/components/people/mcteam/mcteam.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var McTeam = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(McTeam, _React$Component);

  var _super = _createSuper(McTeam);

  function McTeam(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, McTeam);

    _this = _super.call(this, props);
    _this.state = {
      current: 0
    };
    _this.handleEvent = _this.handleEvent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(McTeam, [{
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

      var keys = [];

      var _loop = function _loop(n) {
        keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"][n].position,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.handleEvent(n);
          },
          className: _this2.state.current === n ? "active-key" : "inactive-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "mcteam-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }
        }, _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"][n].position))));
      };

      for (var n = 0; n < _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"].length; n++) {
        _loop(n);
      }

      return __jsx("div", {
        className: "mcteam-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "McTeam",
        width: 200,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, keys)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 0.9, 0.8, 0.7],
        ml: "auto",
        mr: "auto",
        mb: 50,
        className: "position-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "mcteam-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"][this.state.current].names), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.8, 0.7],
        ml: "auto",
        mr: "auto",
        style: {
          marginTop: '1%',
          marginBottom: '3%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: "../../../static/mcteam/JackieCarrizales.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      })), _mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"][this.state.current].body.map(function (line) {
        return __jsx("p", {
          key: "L-".concat(_mcteam_json__WEBPACK_IMPORTED_MODULE_10__["mcteam_positions"][_this2.state.current].body.indexOf(line)),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }
        }, line);
      }), this.state.current === 4 ? __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      }, "Buy stamps and get envelopes"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }
      }, "Pick up mail and packages"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 33
        }
      }, "Borrow an extra key to your room"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }, "Use the staplers, packing tape, scissors, shredder, etc."), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }, "Get a hug"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, "Do homework or take a study break")) : null));
    }
  }]);

  return McTeam;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=mcteam.js.56eb2d52d50b621a0968.hot-update.js.map