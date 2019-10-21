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
/* harmony import */ var _sponsors_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sponsors.json */ "./components/10/sponsor/sponsors.json");
var _sponsors_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./sponsors.json */ "./components/10/sponsor/sponsors.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\10\\sponsor\\sponsor.js";





var tiers = [{
  name: "Purple and Silver Sponsor",
  amount: "$250",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}, {
  name: "Coat of Arms Sponsor",
  amount: "$500",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}, {
  name: "Cookie Defense Sponsor",
  amount: "$1,000",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}, {
  name: "Conch Wielder Sponsor",
  amount: "$2,500",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}, {
  name: "Highland Champion",
  amount: "$5,000",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}, {
  name: "Burt and DeeDee McMurtry Sponsor",
  amount: "$10,000",
  link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
}];

var Sponsor = function Sponsor() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sponsor-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "back-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u2190 Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "support-mcm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Support McMurtry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.8, 0.6],
    ml: "auto",
    mr: "auto",
    className: "mcm10-message",
    mt: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Dear Donors,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Thank you for your willingness to support McMurtry, your generosity makes events like these possible, and will let us do even more to help the students in our college."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "All donors will have the option to recieve 2 tickets to the event. Reach out to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:mcmurtry@rice.edu",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "mcmurtry@rice.edu"), " if you have any questions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Please follow the links below to join one of the sponsorship tiers.  To give in any denomination of your choosing, please click this ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://riceconnect.rice.edu/donation/mcmurtry-college",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "link"), ".  Thank you again for your support!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sponsor-tiers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "tier-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "tier-amount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "donate-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Donate Now")));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "our-sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Thank you to our sponsors!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.9, 0.5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, _sponsors_json__WEBPACK_IMPORTED_MODULE_4__["ourSponsors"].map(function (name) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "our-sponsor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ })

})
//# sourceMappingURL=sponsor.js.80b2e4e6713909358de8.hot-update.js.map