webpackHotUpdate("static\\development\\pages\\people\\divisionaladvisors.js",{

/***/ "./components/people/divisionaladvisors/divisionaladvisors.js":
/*!********************************************************************!*\
  !*** ./components/people/divisionaladvisors/divisionaladvisors.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _divisionaladvisors_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./divisionaladvisors.json */ "./components/people/divisionaladvisors/divisionaladvisors.json");
var _divisionaladvisors_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./divisionaladvisors.json */ "./components/people/divisionaladvisors/divisionaladvisors.json", 1);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _divisionaladvisors_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./divisionaladvisors.css */ "./components/people/divisionaladvisors/divisionaladvisors.css");
/* harmony import */ var _divisionaladvisors_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_divisionaladvisors_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\people\\divisionaladvisors\\divisionaladvisors.js";






var DivisionalAdvisor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DivisionalAdvisor, _React$Component);

  function DivisionalAdvisor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DivisionalAdvisor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DivisionalAdvisor).call(this, props));
    _this.state = {
      closed: true
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DivisionalAdvisor, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dropdownStyle = {};
      dropdownStyle.maxHeight = this.state.closed ? '0' : '1000px';
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.9, 0.8, 0.7, 0.6],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.closed ? "advisor-card-hidden" : "advisor-card-visible",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "advisor-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "advisor-school",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "School of ", this.props.school), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Department of ", this.props.department), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Email: ", this.props.email), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Office: ", this.props.email), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: dropdownStyle,
        className: "divisional-advisor-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "advisor-bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.bio))));
    }
  }]);

  return DivisionalAdvisor;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var DivisionalAdvisors = function DivisionalAdvisors() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "divisional-advisors-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: 350,
    title: "Divisional Advisors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _divisionaladvisors_json__WEBPACK_IMPORTED_MODULE_8__["advisors"].map(function (_ref) {
    var name = _ref.name,
        school = _ref.school,
        bio = _ref.bio;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DivisionalAdvisor, {
      key: name,
      name: name,
      school: school,
      bio: bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DivisionalAdvisors);

/***/ })

})
//# sourceMappingURL=divisionaladvisors.js.45db5b6af155d6547a06.hot-update.js.map