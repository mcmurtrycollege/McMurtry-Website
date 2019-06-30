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
/* harmony import */ var _associates_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./associates_content */ "./components/people/associates/associates_content.js");






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\people\\associates\\associates.js";






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
      var cardStyle = {};
      var dropdownStyle = {};
      var dropdownImageStyle = {};
      cardStyle.backgroundColor = this.state.contentVisible ? '#515768' : '#DCDFE5';
      dropdownStyle.maxHeight = this.state.contentVisible ? '650px' : '0';
      dropdownImageStyle.maxHeight = this.state.contentVisible ? '0' : '300px';
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: 1,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "associate-card",
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.contentVisible ? 'associate-image-dropdown' : 'associate-image-hidden',
        style: dropdownImageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        className: "associate-image",
        width: [0.8, 0.5],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: this.props.image,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "associate-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: dropdownStyle,
        className: "associate-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Career/Profession: "), this.props.career), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Bio: "), this.props.bio), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Favorite Movie/TV Show: "), this.props.movie_tv), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Hobbies: "), this.props.hobbies), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Fun Fact: "), this.props.fact))));
    }
  }]);

  return AssociateCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Associates = function Associates() {
  var columns = [[], []];

  for (var i = 0; i < _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"].length; i++) {
    columns[i % 2].push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AssociateCard, {
      key: "".concat(_associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].name),
      name: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].name,
      career: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].career,
      bio: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].bio,
      movie_tv: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].movie_tv,
      hobbies: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].hobbies,
      fact: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].fact,
      image: _associates_content__WEBPACK_IMPORTED_MODULE_10__["default"][i].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "associates-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: 'Associates',
    width: 240,
    smallText: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    style: {
      marginTop: '3%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, columns.map(function (column) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
      flexDirection: "column",
      width: [1, 0.35],
      key: "C+".concat(columns.indexOf(column)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, column);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Associates);

/***/ })

})
//# sourceMappingURL=associates.js.55b06fbfd83c03dbff1f.hot-update.js.map