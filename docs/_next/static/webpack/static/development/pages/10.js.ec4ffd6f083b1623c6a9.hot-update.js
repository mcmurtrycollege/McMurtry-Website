webpackHotUpdate("static\\development\\pages\\10.js",{

/***/ "./components/10/event/events.js":
/*!***************************************!*\
  !*** ./components/10/event/events.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ "./components/10/image.js");
/* harmony import */ var _events_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.css */ "./components/10/event/events.css");
/* harmony import */ var _events_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_events_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\10\\event\\events.js";




var EventsComponent = function EventsComponent(props) {
  var eventsList = [];

  for (var i = 0; i < props.events.length; i++) {
    i % 2 === 0 ? eventsList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-wrapper",
      key: props.events[i].title + props.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, props.events[i].date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, props.events[i].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.events[i].description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      caption: props.events[i].caption,
      index: i,
      image: props.events[i].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }))) : eventsList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: props.events[i].title + props.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "desktop-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      caption: props.events[i].caption,
      index: i,
      image: props.events[i].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, props.events[i].date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, props.events[i].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, props.events[i].description))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, props.events[i].date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, props.events[i].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "event-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, props.events[i].description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      caption: props.events[i].caption,
      index: i,
      image: props.events[i].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mcm10-schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "events-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, eventsList));
};

/* harmony default export */ __webpack_exports__["default"] = (EventsComponent);

/***/ })

})
//# sourceMappingURL=10.js.ec4ffd6f083b1623c6a9.hot-update.js.map