webpackHotUpdate("static\\development\\pages\\resources\\mis.js",{

/***/ "./components/resources/mis/mis.js":
/*!*****************************************!*\
  !*** ./components/resources/mis/mis.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/title */ "./components/general/title.js");
/* harmony import */ var _mis_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis.css */ "./components/resources/mis/mis.css");
/* harmony import */ var _mis_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mis_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mis_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mis.json */ "./components/resources/mis/mis.json");
var _mis_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mis.json */ "./components/resources/mis/mis.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\resources\\mis\\mis.js";





var MISLinks = [{
  text: "Safety Guidlines",
  icon: "https://icon.now.sh/security",
  link: '../../../../static/mis_safety.pdf'
}, {
  text: "Equipment Information",
  icon: "https://icon.now.sh/skyliner",
  link: "https://docs.google.com/spreadsheets/d/18Lu5pL6v0oYOnZQu4kYPGuUyiMvAfOHZXBH39udHVXI/edit"
}, {
  text: "Email us at",
  icon: "https://icon.now.sh/email",
  link: "mailto:mcminnovationspace@gmail.com"
}];

var McmInovationSpace = function McmInovationSpace() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mis-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_general_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 350,
    title: "McMurtry Innovation Space",
    smallText: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "mis-paragraphs",
    width: [1, 0.8, 0.7, 0.6],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["content"].map(function (paragraph) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: _mis_json__WEBPACK_IMPORTED_MODULE_4__["content"].indexOf(paragraph),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, paragraph);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, MISLinks.map(function (_ref) {
    var text = _ref.text,
        icon = _ref.icon,
        link = _ref.link;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: 250,
      className: "mis-info",
      style: {
        margin: '2%'
      },
      key: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link,
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "".concat(icon, "//DCDFE5/90"),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, text, icon === "https://icon.now.sh/email" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        fontSize: '0.5em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "mcminnovationspace@gmail.com") : undefined))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.7],
    pb: 20,
    ml: "auto",
    mr: "auto",
    className: "schedule-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.25],
    className: "subtitle",
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Hours")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["hours"].map(function (_ref2) {
    var day = _ref2.day,
        hours = _ref2.hours;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: 150,
      className: "schedule",
      key: "".concat(day),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "schedule-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, day), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "schedule-item",
      style: {
        fontWeight: 'normal'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, hours));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.7, 0.2],
    className: "subtitle",
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Student Personnel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, _mis_json__WEBPACK_IMPORTED_MODULE_4__["personnel"].map(function (_ref3) {
    var name = _ref3.name,
        major = _ref3.major,
        college = _ref3.college,
        email = _ref3.email,
        askMeAbout = _ref3.askMeAbout;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.9, 0.3],
      className: "mis-contact-card",
      key: "".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mis-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Major: ", major), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-college",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "College: ", college), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "mailto:".concat(email),
      style: {
        textDecoration: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://icon.now.sh/arrow/2B2F3A/10",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), ' ', email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mis-askMeHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Ask Me About:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mis-askMeAbout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, askMeAbout)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (McmInovationSpace);

/***/ })

})
//# sourceMappingURL=mis.js.00b810ee75b923949159.hot-update.js.map