webpackHotUpdate("static\\development\\pages\\people\\associates.js",{

/***/ "./components/people/associates/associates.js":
/*!****************************************************!*\
  !*** ./components/people/associates/associates.js ***!
  \****************************************************/
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
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _associates_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./associates.css */ "./components/people/associates/associates.css");
/* harmony import */ var _associates_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_associates_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _associates_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./associates.json */ "./components/people/associates/associates.json");
var _associates_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./associates.json */ "./components/people/associates/associates.json", 1);






var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\people\\associates\\associates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var AssociateCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssociateCard, _React$Component);

  function AssociateCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssociateCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssociateCard).call(this, props));
    _this.state = {
      contentVisible: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssociateCard, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        contentVisible: !this.state.contentVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dropdownStyle = {};
      var dropdownImageStyle = {};
      dropdownStyle.maxHeight = this.state.contentVisible ? '650px' : '0';
      dropdownImageStyle.maxHeight = this.state.contentVisible ? '0' : '300px';
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: 1,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        className: this.state.contentVisible ? 'associate-card-visible' : 'associate-card-hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "associate-image-dropdown",
        style: dropdownImageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        className: "associate-image",
        width: [0.8, 0.5],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: this.props.image,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), __jsx("h2", {
        className: "associate-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.name), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Career/Profession: "), this.props.career), __jsx("div", {
        style: dropdownStyle,
        className: "associate-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Bio: "), this.props.bio), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Favorite Movie/TV Show: "), this.props.movie_tv), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Hobbies: "), this.props.hobbies), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Fun Fact: "), this.props.fact))));
    }
  }]);

  return AssociateCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Associates = function Associates() {
  var columns = [[], []];

  for (var i = 0; i < _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"].length; i++) {
    columns[i % 2].push(__jsx(AssociateCard, {
      key: "".concat(_associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].name),
      name: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].name,
      career: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].career,
      bio: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].bio,
      movie_tv: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].movie_tv,
      hobbies: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].hobbies,
      fact: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].fact,
      image: _associates_json__WEBPACK_IMPORTED_MODULE_10__["associates"][i].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  }

  return __jsx("div", {
    className: "associates-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: 'Associates',
    width: 240,
    smallText: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    style: {
      marginTop: '3%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, columns.map(function (column) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
      flexDirection: "column",
      width: [1, 0.35],
      key: "C+".concat(columns.indexOf(column)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, column);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Associates);

/***/ })

})
//# sourceMappingURL=associates.js.3db3187f3e2d2bcc74a3.hot-update.js.map