webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.css */ "./components/navbar/navbar.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mcmLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mcmLogo */ "./components/mcmLogo.js");
/* harmony import */ var _navbar_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar_content */ "./components/navbar/navbar_content.js");






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\navbar\\navbar.js";






var DropDownWide = function DropDownWide(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-item",
    onMouseEnter: props.handleMouseEnter,
    onMouseLeave: props.handleMouseLeave,
    style: {
      width: '10%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.headerTo !== undefined ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: props.headerTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.header)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.header)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.dropDownChildren.map(function (_ref) {
    var subheader = _ref.subheader,
        to = _ref.to,
        href = _ref.href;
    return href === undefined ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: to,
      key: "".concat(subheader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "dropdown-subheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, subheader)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "dropdown-subheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, subheader));
  })));
};

var DropDownNarrow = function DropDownNarrow(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, props.headerTo !== undefined ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: props.headerTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, props.header)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, props.header, '      ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    className: "arrow",
    style: props.expanded ? {
      transform: 'rotate(90deg)'
    } : {},
    src: "https://icon.now.sh/chevron/2B2F3A/10",
    alt: ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.dropDownChildren.map(function (_ref2) {
    var subheader = _ref2.subheader,
        to = _ref2.to,
        href = _ref2.href;
    return href === undefined ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: to,
      key: "".concat(subheader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "dropdown-subheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, subheader)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "dropdown-subheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, subheader));
  })));
};

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this, props));
    var headerStates = [];

    for (var i = 0; i < props.dropDownItems.length; i++) {
      headerStates.push(false);
    }

    _this.state = {
      closed: true,
      fixedNavbar: false,
      headerStates: headerStates
    };
    _this.showSubheader = _this.showSubheader.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.hideSubheader = _this.hideSubheader.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleSubheader = _this.toggleSubheader.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.scrollHandler = _this.scrollHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "showSubheader",
    value: function showSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = true;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "hideSubheader",
    value: function hideSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = false;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleSubheader",
    value: function toggleSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = !this.state.headerStates[indx];
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      if (window.scrollY > document.getElementById('mcm-header').clientHeight) {
        this.setState({
          fixedNavbar: true
        });
      } else {
        this.setState({
          fixedNavbar: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var narrowNavBarStyle = {};
      var burgerStyle = {
        transition: 'transform 0.2s ease-in-out'
      };

      if (this.state.closed) {
        narrowNavBarStyle.maxHeight = '0px';
      } else {
        narrowNavBarStyle.maxHeight = '1000px';
        burgerStyle.transform = 'rotate(90deg)';
      }

      var fixedNavbar = {};

      if (this.state.fixedNavbar) {
        fixedNavbar.position = 'fixed';
        fixedNavbar.marginTop = "-".concat(document.getElementById('mcm-header').clientHeight + 0, "px");
      }

      var wideNavbar = [];
      var narrowNavbar = [];

      var _loop = function _loop(k) {
        var item = _this2.props.dropDownItems[k];
        wideNavbar.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DropDownWide, {
          handleMouseEnter: function handleMouseEnter() {
            return _this2.showSubheader(k);
          },
          handleMouseLeave: function handleMouseLeave() {
            return _this2.hideSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }));
        narrowNavbar.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DropDownNarrow, {
          handleClick: function handleClick() {
            return _this2.toggleSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }));
      };

      for (var k = 0; k < this.props.dropDownItems.length; k++) {
        _loop(k);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-crest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mcmLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "wide-navbar",
        style: fixedNavbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "filler-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), wideNavbar, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "filler-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "narrow-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "narrow-navbar-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: burgerStyle,
        onClick: this.toggleNavbar,
        src: "https://icon.now.sh/burger/2B2F3A/24",
        alt: "burger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mcmLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "narrow-navbar-menu",
        style: narrowNavBarStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, narrowNavbar)));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavBar, {
    dropDownItems: _navbar_content__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.90517260d45aecb7420d.hot-update.js.map