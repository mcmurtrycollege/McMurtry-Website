webpackHotUpdate("static\\development\\pages\\resources\\documents.js",{

/***/ "./components/resources/documents/documents.js":
/*!*****************************************************!*\
  !*** ./components/resources/documents/documents.js ***!
  \*****************************************************/
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
/* harmony import */ var _documents_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents.css */ "./components/resources/documents/documents.css");
/* harmony import */ var _documents_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_documents_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\resources\\documents\\documents.js";



 // import mcm_constitution from '../../../../static/documents/mcm_constitution.pdf';
// import mcm_bylaws from '../../../../static/documents/mcm_bylaws.pdf';
// import mcm_housing_bylaws from '../../../../static/documents/mcm_housing_bylaws.pdf';
// import mcm_parking_bylaws from '../../../../static/documents/mcm_parking_bylaws.pdf';
// import tax_exempt_form from '../../../../static/documents/tax_exempt_form.pdf';

var documents = [{
  name: "Constitution",
  document: '../../../../static/documents/mcm_constitution.pdf',
  icon: "https://icon.now.sh/account_balance"
}, {
  name: "General By-Laws",
  document: '../../../../static/documents/mcm_bylaws.pdf',
  icon: "https://icon.now.sh/import_contacts"
}, {
  name: "Housing By-Laws",
  document: '../../../../static/documents/mcm_housing_bylaws.pdf',
  icon: "https://icon.now.sh/home"
}, {
  name: "Parking By-Laws",
  document: '../../../../static/documents/mcm_parking_bylaws.pdf',
  icon: "https://icon.now.sh/directions_car"
}, {
  name: "Tax Exempt Form",
  document: '../../../../static/documents/tax_exempt_form.pdf',
  icon: "https://icon.now.sh/attach_money"
}];

var Documents =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Documents, _React$Component);

  function Documents(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Documents);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Documents).call(this, props));
    _this.state = {
      slide: 0
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Documents, [{
    key: "handleClick",
    value: function handleClick(idx) {
      this.setState({
        slide: idx
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "documents-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Documents",
        width: 250,
        smallText: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        flexDirection: "row",
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, documents.map(function (document) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.handleClick(documents.indexOf(document));
          },
          className: documents.indexOf(document) === _this2.state.slide ? 'active-doc' : 'inactive-doc',
          key: document.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "doc-key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, document.name));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "embedded-doc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("embed", {
        src: documents[this.state.slide].document,
        type: "application/pdf",
        width: "600",
        height: "820px",
        page: "7",
        scrollbar: "1",
        toolbar: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "doc-link-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: documents[this.state.slide].document,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "doc-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "".concat(documents[this.state.slide].icon, "/2B2F3A/90"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, documents[this.state.slide].name, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://icon.now.sh/open_in_new/2B2F3A/13",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))))));
    }
  }]);

  return Documents;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Documents);

/***/ })

})
//# sourceMappingURL=documents.js.ff3e081692acac6831af.hot-update.js.map