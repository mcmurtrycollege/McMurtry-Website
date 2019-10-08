webpackHotUpdate("static\\development\\pages\\10.js",{

/***/ "./components/10/faqs/faqs.js":
/*!************************************!*\
  !*** ./components/10/faqs/faqs.js ***!
  \************************************/
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
/* harmony import */ var _faqs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.json */ "./components/10/faqs/faqs.json");
var _faqs_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./faqs.json */ "./components/10/faqs/faqs.json", 1);
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs.css */ "./components/10/faqs/faqs.css");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_faqs_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\10\\faqs\\faqs.js";






var Faq = function Faq(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "faq-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Q: ", props.question)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "A: ", props.answer)));
};

var Faqs = function Faqs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "faqs-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "faqs-list",
    width: [0.9, 0.7, 0.6, 0.5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, _faqs_json__WEBPACK_IMPORTED_MODULE_3__["faqs"].map(function (_ref) {
    var question = _ref.question,
        answer = _ref.answer;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Faq, {
      question: question,
      answer: answer,
      key: question,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Faqs);

/***/ }),

/***/ "./components/10/faqs/faqs.json":
/*!**************************************!*\
  !*** ./components/10/faqs/faqs.json ***!
  \**************************************/
/*! exports provided: faqs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"faqs\":[{\"question\":\"Where should I park?\",\"answer\":\"North Lot will be the best place to park for McScottish Night. Check out https://map.concept3d.com/?id=473#!m/126305. Here is an interactive map of campus[ https://map.concept3d.com/?id=473#!ce/13218?ct/13398,13220?mc/29.716914839062355,-95.4039488720732?z/16?lvl/0] to help you find your way.\"},{\"question\":\"I already bought a ticket, can I donate more?\",\"answer\":\"If you would like to donate more, you can visit the donations page linked above.\"},{\"question\":\"Should I bring my kids?\",\"answer\":\"McScottish Night will be Mini Murt friendly!  There will also be babysitting services.\"},{\"question\":\"Will McScottish Nigh be held outside?\",\"answer\":\"There will be both indoor events such as Scottish Dancing and outdoor events such as the Highland games.\"}]}");

/***/ }),

/***/ "./components/10/homepage/homepage.js":
/*!********************************************!*\
  !*** ./components/10/homepage/homepage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/dist/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _faqs_faqs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../faqs/faqs */ "./components/10/faqs/faqs.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _homepage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage.css */ "./components/10/homepage/homepage.css");
/* harmony import */ var _homepage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_homepage_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _event_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../event/events */ "./components/10/event/events.js");
/* harmony import */ var _event_events_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../event/events.json */ "./components/10/event/events.json");
var _event_events_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../event/events.json */ "./components/10/event/events.json", 1);
/* harmony import */ var _event_mcscottish_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../event/mcscottish.json */ "./components/10/event/mcscottish.json");
var _event_mcscottish_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../event/mcscottish.json */ "./components/10/event/mcscottish.json", 1);





var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\McMurtry-Website\\components\\10\\homepage\\homepage.js";











var MCM10 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MCM10, _React$Component);

  function MCM10(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MCM10);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MCM10).call(this, props));
    _this.state = {
      loaded: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MCM10, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        loaded: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        width: [0.8, 0.6],
        ml: "auto",
        mr: "auto",
        mt: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Image"], {
        src: "/static/mcm10/mcm10.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        width: [0.8, 0.6],
        ml: "auto",
        mr: "auto",
        className: "mcm10-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Dear McMurtry Students, Alums, Affiliates, and Families,"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "We are exited to invite you to the McMurtry College 10th Anniversary celebration! Come join us on November 1st to enjoy McMurtry's vibrant community and experience our college's traditions while reveling in fun activities and great food."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "As part of our commitment to continuing McMurtry's ability to provide for comfort and happiness to all members of our community we are soliciting donations to help fund the event, with all leftover funds going to the establishment of a McMurtry endowment that will be used to help students for years to come!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "All of our sponsors will have the option to receive tickets to the event (for more information check out the ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/10/sponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "sponsorship page"), "). For others interested in attending the event, you can purchase tickets below."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Please RSVP by October 28th.  We look forward to seeing you this Fall!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "parallax-scaler",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
        bgImage: "/static/mcm_commons.jpg",
        strength: 400,
        bgImageAlt: "",
        renderLayer: function renderLayer(percentage) {
          if (_this2.state.loaded) {
            window.document.getElementById("sponsor").style.opacity = percentage + 0.5;
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mcm10-link",
        id: "sponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/10/sponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Become a Sponsor"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "parallax-scaler",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
        bgImage: "/static/mcm10/yurt.jpg",
        strength: 400,
        bgImageAlt: "",
        renderLayer: function renderLayer(percentage) {
          if (_this2.state.loaded) {
            window.document.getElementById('tickets').style.opacity = percentage + 0.5;
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mcm10-link",
        id: "tickets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://riceconnect.rice.edu/events/2019/mcmurtry-10th-anniversary-celebration",
        style: {
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Get Tickets"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_event_events__WEBPACK_IMPORTED_MODULE_12__["default"], {
        events: _event_events_json__WEBPACK_IMPORTED_MODULE_13__["events"],
        title: "Schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_event_events__WEBPACK_IMPORTED_MODULE_12__["default"], {
        events: _event_mcscottish_json__WEBPACK_IMPORTED_MODULE_14__["mcscottish"],
        title: "McScottish Night",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "memories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "survey-desktop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSclr5oUyZeIAxm4AjfQdnKsrY0riUKTgoC70kTHezbSWKDAtw/viewform?embedded=true",
        width: "700",
        height: "1155",
        frameborder: "0",
        marginheight: "0",
        marginwidth: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Loading\u2026")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "survey-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSclr5oUyZeIAxm4AjfQdnKsrY0riUKTgoC70kTHezbSWKDAtw/viewform?embedded=true",
        width: "350",
        height: "1400",
        frameborder: "0",
        marginheight: "0",
        marginwidth: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Loading\u2026"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "faqs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_faqs_faqs__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
    }
  }]);

  return MCM10;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MCM10);

/***/ })

})
//# sourceMappingURL=10.js.a07ed13b4acd2c6c43d5.hot-update.js.map