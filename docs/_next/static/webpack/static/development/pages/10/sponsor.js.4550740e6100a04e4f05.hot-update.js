webpackHotUpdate("static\\development\\pages\\10\\sponsor.js",{

/***/ "./components/10/sponsor/sponsor.js":
/*!******************************************!*\
  !*** ./components/10/sponsor/sponsor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sponsor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sponsor.css */ "./components/10/sponsor/Sponsor.css");
/* harmony import */ var _Sponsor_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sponsor_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\10\\sponsor\\sponsor.js";




var tiers = [{
  name: "Purple and Silver Sponsor",
  amount: "$250",
  link: "https://riceconnect.rice.edu/giving"
}, {
  name: "Coat of Arms Sponsor",
  amount: "$500",
  link: "https://riceconnect.rice.edu/giving"
}, {
  name: "Cookie Defense Sponsor",
  amount: "$1,000",
  link: "https://riceconnect.rice.edu/giving"
}, {
  name: "Conch Wielder Sponsor",
  amount: "$2,500",
  link: "https://riceconnect.rice.edu/giving"
}, {
  name: "Highland Champion",
  amount: "$5,000",
  link: "https://riceconnect.rice.edu/giving"
}, {
  name: "Burt and DeeDee McMurtry Sponsor",
  amount: "$10,000",
  link: "https://riceconnect.rice.edu/giving"
}];

var Sponsor = function Sponsor() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sponsor-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "back-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u2190 Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "support-mcm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Support McMurtry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    ml: "auto",
    mr: "auto",
    width: [1, 0.6],
    className: "sponsor-instructions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Click \"Become a Sponsor\" on one of the sponsorship levels below to be directed to the Rice University secure giving site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "After filling in your personal and contact information, fill in the donation information as follows:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "In the \"Amount\" box near the bottom of the form, enter the amount of your sponsorship"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "In the \"Designation\" box next to that, use the drop-down menu and select \"Other\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "In the \u201CSpecial Instructions\u201D box (appears after clicking add donation), type: McMurtry College 10th Anniversary Fund (G83450-5053000)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sponsor-tiers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, tiers.map(function (_ref) {
    var name = _ref.name,
        amount = _ref.amount,
        link = _ref.link;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tier",
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "tier-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "tier-amount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "donate-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Donate Now")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ })

})
//# sourceMappingURL=sponsor.js.4550740e6100a04e4f05.hot-update.js.map