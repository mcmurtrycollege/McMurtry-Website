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

      var division_keys = [];

      var _loop = function _loop(i) {
        division_keys.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][i].division,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeDivision(i);
          },
          className: _this2.state.division === i ? "active-division" : "inactive-division",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "division-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "".concat(_committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][i].division)))));
      };

      for (var i = 0; i < _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"].length; i++) {
        _loop(i);
      }

      var current_division = _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division];
      var committee_keys = [];

      var _loop2 = function _loop2(j) {
        committee_keys.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          key: current_division.committees[j].name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeCommittee(j);
          },
          className: _this2.state.committee === j ? "active-committee" : "inactive-committee",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "committee-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, current_division.committees[j].name))));
      };

      for (var j = 0; j < current_division.committees.length; j++) {
        _loop2(j);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "committee-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: 280,
        title: "Committees",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, // division_names.map(division => (
      //     <Box key={division}>
      //         <div onClick={() => this.changeDivision(division_names.indexOf(division))}
      //             className={this.state.division === division_names.indexOf(division) ? "active-division" : "inactive-division"}>
      //             <p className='division-key'>{`${division}`}</p>
      //         </div>
      //     </Box>
      // ))
      division_keys)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, committee_keys)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.9, 0.7, 0.6, 0.5],
        ml: "auto",
        mr: "auto",
        className: "committee-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "division-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].members,
        height: 110,
        width: 240,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })));
    }
  }]);

  return Committees;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=committees.js.7a7a7561250347d41fee.hot-update.js.map