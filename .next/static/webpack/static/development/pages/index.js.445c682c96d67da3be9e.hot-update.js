webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/title */ "./components/general/title.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intropage.css */ "./components/splashpage/intropage.css");
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\splashpage\\intropage.js";





var quickLinks = [{
  name: "Calendar",
  icon: "https://icon.now.sh/event",
  to: "/events/"
}, {
  name: "O-Week",
  icon: "https://icon.now.sh/people",
  href: "https://mcmurtryoweek.wixsite.com/home-page"
}, {
  name: "Book a Room",
  icon: "https://icon.now.sh/event_note",
  to: "/roomreservations/"
}, {
  name: "Contact",
  icon: "https://icon.now.sh/question_answer",
  to: "/contact/"
}];

var Intro = function Intro() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.95, 0.8],
    className: "yurt-graphic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../static/YurtTrees.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [300, 450],
    className: "welcome-tiltl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "/>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, quickLinks.map(function (_ref) {
    var name = _ref.name,
        icon = _ref.icon,
        href = _ref.href,
        to = _ref.to;
    return href === undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "quick-link-container",
      width: [130, 220],
      key: "".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: to,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "quick-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "".concat(icon, "/DCDFE5/70"),
      alt: "",
      className: "intro-link-img-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "".concat(icon, "/DCDFE5/45"),
      alt: "",
      className: "intro-link-img-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "quick-link-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, name)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "quick-link-container",
      width: [130, 220],
      key: "".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: href,
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "quick-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "".concat(icon, "/DCDFE5/70"),
      alt: "",
      className: "intro-link-img-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "".concat(icon, "/DCDFE5/45"),
      alt: "",
      className: "intro-link-img-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "quick-link-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, name))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ })

})
//# sourceMappingURL=index.js.445c682c96d67da3be9e.hot-update.js.map