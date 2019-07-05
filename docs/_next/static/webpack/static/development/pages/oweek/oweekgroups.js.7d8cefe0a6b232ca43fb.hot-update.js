webpackHotUpdate("static\\development\\pages\\oweek\\oweekgroups.js",{

/***/ "./components/oweek/groups/groups.js":
/*!*******************************************!*\
  !*** ./components/oweek/groups/groups.js ***!
  \*******************************************/
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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _groups_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groups.css */ "./components/oweek/groups/groups.css");
/* harmony import */ var _groups_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_groups_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _groups_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./groups.json */ "./components/oweek/groups/groups.json");
var _groups_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./groups.json */ "./components/oweek/groups/groups.json", 1);






var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\oweek\\groups\\groups.js";








var GoTop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GoTop, _React$Component);

  function GoTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoTop).call(this, props));
    _this.state = {
      show: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoTop, [{
    key: "handleScroll",
    value: function handleScroll() {
      this.setState({
        show: window.scrollY > document.getElementById('top-content').clientHeight
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.show ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "top",
        smooth: true,
        duration: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "toplink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Top")) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
    }
  }]);

  return GoTop;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Groups = function Groups() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "oweek-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    id: "top-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "oweek-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "The O-Week Groups"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "oweek-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "What is an O-Week Group?")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Your O-Week group consists of 8-9 other New Students, 4 upperclassmen Advisors (one will be a Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal support system during the week and throughout the year. From playing crazy ice-breakers, learning about each other\u2019s interests and passions, sharing possible course schedules, or making late night food runs, you will soon discover that your bond as an O-Week group runs deep. Be prepared for lots of fun & encouragement from the peers in your group. Don\u2019t be worried if your Advisors seem very enthusiastic when you drive up for move in day -- it\u2019s a sign of affection."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "oweek-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "What is an Advisor?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming you to Rice that they don\u2019t mind returning here almost two full weeks before classes start to help you move in and start your time at Rice! These fantastic people have been hand-selected to act as your guides throughout O-Week; they\u2019ll make sure you get to all activities and meetings, answer any questions you might have (or direct you to someone who can answer them), expose you to Rice\u2019s academics and student life, introduce you to the McMurtry culture, and serve as all-around resources. One thing that all Advisors have in common is their desire to help you have the best experience possible at Rice, so they\u2019ll continue to be resources for you long after O-Week is over and may very well become some of your closest friends."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "oweek-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "What is a Co-Advisor?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Co-Advisors make up about a fourth of our team and are students who are equally friendly and enthusiastic about welcoming you to Rice, but they hail from other residential colleges! Co-Advisors love McMurtry so much that they choose to join McMurtry\u2019s O-Week as an ambassador of their home college. In addition to having the qualities of an Advisor, they can help show you Rice beyond the beautiful wood-panels of McMurtry and bring a little bit of their own college\u2019s culture and customs along with them. They are wonderful resources in helping you to branch out and explore other colleges!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "oweek-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "What is an Affiliate?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. While they are paired with individual groups, they are an important resource for all New Students at the college. The Affiliate assigned to your group may often be floating around to meet other students and providing them with specialized knowledge and advice. Be sure to meet all the Affiliates present, as they are incredibly important campus-wide resources during O-Week and beyond. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
    name: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "oweek-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Find Your O-Week Group!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "oweek-groups-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, _groups_json__WEBPACK_IMPORTED_MODULE_11__["oweek_groups"].map(function (_ref) {
    var name = _ref.name;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: name,
      smooth: true,
      duration: 400,
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "oweek-group-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, name));
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "oweek-groups",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, _groups_json__WEBPACK_IMPORTED_MODULE_11__["oweek_groups"].map(function (_ref2) {
    var name = _ref2.name,
        advisors = _ref2.advisors,
        image = _ref2.image;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
      name: name,
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "oweek-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "oweek-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      width: 0.7,
      ml: "auto",
      mr: "auto",
      style: {
        marginTop: '1%',
        marginBottom: '3%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
      src: image,
      alt: "Error Loading Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "oweek-bios",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, advisors.map(function (_ref3) {
      var name = _ref3.name,
          year = _ref3.year,
          major = _ref3.major,
          from = _ref3.from,
          image = _ref3.image,
          bio = _ref3.bio;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        className: "advisor-card",
        key: name,
        width: [0.95, 0.8],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        style: {
          fontWeight: 'normal'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, year, " | ", major, " | ", from), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [0.5, 0.2],
        style: {
          float: 'left',
          marginRight: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: image,
        alt: "Error Loading Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), bio));
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "oweek-video-desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/SqeiYxm6tR8",
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "oweek-video-mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
      width: "320",
      height: "200",
      src: "https://www.youtube.com/embed/SqeiYxm6tR8",
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GoTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Groups);

/***/ })

})
//# sourceMappingURL=oweekgroups.js.7d8cefe0a6b232ca43fb.hot-update.js.map