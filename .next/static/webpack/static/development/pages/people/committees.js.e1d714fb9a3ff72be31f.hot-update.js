webpackHotUpdate("static\\development\\pages\\people\\committees.js",{

/***/ "./components/people/committees/committees.js":
/*!****************************************************!*\
  !*** ./components/people/committees/committees.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Committees; });
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
/* harmony import */ var _general_contactcards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/contactcards */ "./components/general/contactcards.js");
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _committees_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./committees.json */ "./components/people/committees/committees.json");
var _committees_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./committees.json */ "./components/people/committees/committees.json", 1);
/* harmony import */ var _committees_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./committees.css */ "./components/people/committees/committees.css");
/* harmony import */ var _committees_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_committees_css__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\people\\committees\\committees.js";






var divisions = [_committees_json__WEBPACK_IMPORTED_MODULE_10__["internal"], _committees_json__WEBPACK_IMPORTED_MODULE_10__["external"], _committees_json__WEBPACK_IMPORTED_MODULE_10__["social"]];
var division_names = ["Internal Committees", "External Committees", "Social Committees"];

var Committees =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Committees, _React$Component);

  function Committees(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Committees);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Committees).call(this, props));
    _this.state = {
      division: 0,
      committee: 0
    };
    _this.changeDivision = _this.changeDivision.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.changeCommittee = _this.changeCommittee.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Committees, [{
    key: "changeDivision",
    value: function changeDivision(index) {
      this.setState({
        division: index,
        committee: 0
      });
    }
  }, {
    key: "changeCommittee",
    value: function changeCommittee(index) {
      this.setState({
        committee: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "committee-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: 280,
        title: "Committees",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, division_names.map(function (division) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: division,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeDivision(division_names.indexOf(division));
          },
          className: _this2.state.division === division_names.indexOf(division) ? "active-division" : "inactive-division",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "division-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "".concat(division))));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, divisions[this.state.division].map(function (committee) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: committee.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeCommittee(divisions[_this2.state.division].indexOf(committee));
          },
          className: _this2.state.committee === divisions[_this2.state.division].indexOf(committee) ? "active-committee" : "inactive-committee",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "committee-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, committee.name)));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.9, 0.7, 0.6, 0.5],
        ml: "auto",
        mr: "auto",
        className: "committee-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "division-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, divisions[this.state.division][this.state.committee].name), divisions[this.state.division][this.state.committee].description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: divisions[this.state.division][this.state.committee].members,
        height: 110,
        width: 240,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })));
    }
  }]);

  return Committees;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=committees.js.e1d714fb9a3ff72be31f.hot-update.js.map