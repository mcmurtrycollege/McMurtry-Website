module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4M5C");


/***/ }),

/***/ "4M5C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/general/header.js
var header = __webpack_require__("AM0r");

// EXTERNAL MODULE: ./components/oweek/navbar/navbar.js
var navbar = __webpack_require__("N9px");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/oweek/oweek.css
var oweek = __webpack_require__("72SP");

// EXTERNAL MODULE: ./components/oweek/groups/groups.css
var groups = __webpack_require__("9UZN");

// EXTERNAL MODULE: ./components/oweek/groups/groups.json
var groups_groups = __webpack_require__("R0ON");

// CONCATENATED MODULE: ./components/oweek/groups/groups.js














var groups_GoTop =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(GoTop, _React$Component);

  function GoTop(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GoTop);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(GoTop).call(this, props));
    _this.state = {
      show: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(GoTop, [{
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
      return this.state.show ? external_react_default.a.createElement(external_react_scroll_["Link"], {
        to: "top",
        smooth: true,
        duration: 400
      }, external_react_default.a.createElement("div", {
        className: "toplink"
      }, "Top")) : external_react_default.a.createElement("p", null);
    }
  }]);

  return GoTop;
}(external_react_default.a.Component);

var groups_Groups = function Groups() {
  return external_react_default.a.createElement("div", {
    className: "oweek-page"
  }, external_react_default.a.createElement("div", {
    id: "top-content"
  }, external_react_default.a.createElement("h1", {
    className: "oweek-title"
  }, "The O-Week Groups"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "What is an O-Week Group?")), external_react_default.a.createElement("p", null, "Your O-Week group consists of 8-9 other New Students, 4 upperclassmen Advisors (one will be a Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal support system during the week and throughout the year. From playing crazy ice-breakers, learning about each other\u2019s interests and passions, sharing possible course schedules, or making late night food runs, you will soon discover that your bond as an O-Week group runs deep. Be prepared for lots of fun & encouragement from the peers in your group. Don\u2019t be worried if your Advisors seem very enthusiastic when you drive up for move in day -- it\u2019s a sign of affection."), external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "What is an Advisor?"), external_react_default.a.createElement("p", null, "Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming you to Rice that they don\u2019t mind returning here almost two full weeks before classes start to help you move in and start your time at Rice! These fantastic people have been hand-selected to act as your guides throughout O-Week; they\u2019ll make sure you get to all activities and meetings, answer any questions you might have (or direct you to someone who can answer them), expose you to Rice\u2019s academics and student life, introduce you to the McMurtry culture, and serve as all-around resources. One thing that all Advisors have in common is their desire to help you have the best experience possible at Rice, so they\u2019ll continue to be resources for you long after O-Week is over and may very well become some of your closest friends."), external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "What is a Co-Advisor?"), external_react_default.a.createElement("p", null, "Co-Advisors make up about a fourth of our team and are students who are equally friendly and enthusiastic about welcoming you to Rice, but they hail from other residential colleges! Co-Advisors love McMurtry so much that they choose to join McMurtry\u2019s O-Week as an ambassador of their home college. In addition to having the qualities of an Advisor, they can help show you Rice beyond the beautiful wood-panels of McMurtry and bring a little bit of their own college\u2019s culture and customs along with them. They are wonderful resources in helping you to branch out and explore other colleges!"), external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "What is an Affiliate?"), external_react_default.a.createElement("p", null, "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. While they are paired with individual groups, they are an important resource for all New Students at the college. The Affiliate assigned to your group may often be floating around to meet other students and providing them with specialized knowledge and advice. Be sure to meet all the Affiliates present, as they are incredibly important campus-wide resources during O-Week and beyond. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."), external_react_default.a.createElement(external_react_scroll_["Element"], {
    name: "top"
  }, external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "Find Your O-Week Group!")), external_react_default.a.createElement("div", {
    className: "oweek-groups-links"
  }, groups_groups["a" /* oweek_groups */].map(function (_ref) {
    var name = _ref.name;
    return external_react_default.a.createElement(external_react_scroll_["Link"], {
      to: name,
      smooth: true,
      duration: 400,
      key: name
    }, external_react_default.a.createElement("div", {
      className: "oweek-group-link"
    }, name));
  }))), external_react_default.a.createElement("div", {
    className: "oweek-groups"
  }, groups_groups["a" /* oweek_groups */].map(function (_ref2) {
    var name = _ref2.name,
        advisors = _ref2.advisors,
        image = _ref2.image,
        video = _ref2.video;
    return external_react_default.a.createElement(external_react_scroll_["Element"], {
      name: name,
      key: name
    }, external_react_default.a.createElement("div", {
      className: "oweek-group"
    }, external_react_default.a.createElement("h2", {
      className: "oweek-title"
    }, name), external_react_default.a.createElement(external_rebass_["Box"], {
      width: 0.7,
      ml: "auto",
      mr: "auto",
      style: {
        marginTop: '1%',
        marginBottom: '3%'
      }
    }, external_react_default.a.createElement(external_rebass_["Image"], {
      src: image,
      alt: "Error Loading Image"
    })), external_react_default.a.createElement("div", {
      className: "oweek-bios"
    }, advisors.map(function (_ref3) {
      var name = _ref3.name,
          year = _ref3.year,
          major = _ref3.major,
          from = _ref3.from,
          image = _ref3.image,
          bio = _ref3.bio;
      return external_react_default.a.createElement(external_rebass_["Box"], {
        className: "advisor-card",
        key: name,
        width: [0.95, 0.8]
      }, external_react_default.a.createElement("h2", null, name), external_react_default.a.createElement("h3", {
        style: {
          fontWeight: 'normal'
        }
      }, year, " | ", major, " | ", from), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_rebass_["Box"], {
        width: [0.5, 0.2],
        style: {
          float: 'left',
          marginRight: '20px'
        }
      }, external_react_default.a.createElement(external_rebass_["Image"], {
        src: image,
        alt: "Error Loading Image"
      })), bio));
    })), external_react_default.a.createElement("div", {
      className: "oweek-video-desktop"
    }, external_react_default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    })), external_react_default.a.createElement("div", {
      className: "oweek-video-mobile"
    }, external_react_default.a.createElement("iframe", {
      width: "320",
      height: "200",
      src: video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }))));
  })), external_react_default.a.createElement(groups_GoTop, null));
};

/* harmony default export */ var oweek_groups_groups = (groups_Groups);
// EXTERNAL MODULE: ./components/general/page.css
var page = __webpack_require__("NHen");

// CONCATENATED MODULE: ./pages/oweek/oweekgroups.js






var oweekgroups_OweekGroups = function OweekGroups() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(navbar["a" /* default */], null), external_react_default.a.createElement(oweek_groups_groups, null));
};

/* harmony default export */ var oweekgroups = __webpack_exports__["default"] = (oweekgroups_OweekGroups);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "72SP":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9UZN":
/***/ (function(module, exports) {



/***/ }),

/***/ "AM0r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "McMurtry College"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "N9px":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cGbl");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("RQmk");
var _navbar_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("RQmk", 1);












var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Navbar).call(this, props));
    _this.state = {
      hidden: true
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Navbar, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        hidden: !this.state.hidden
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "oweek-navbar-open",
        onClick: this.toggleNavbar
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://icon.now.sh/burger/3A3F4F/30",
        alt: "Menu"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.hidden ? 'oweek-navbar-hidden' : 'oweek-navbar-visible'
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "oweek-navbar-close",
        onClick: this.toggleNavbar
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://icon.now.sh/x/DCDFE5/20",
        alt: "X"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/oweek"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [0.2, 0.3],
        ml: "auto",
        mr: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "../../../static/logo.svg",
        alt: ""
      })))), _navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_links */ "a"].map(function (_ref) {
        var name = _ref.name,
            link = _ref.link;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: link,
          key: name
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "oweek-navbar-link"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, name)));
      })));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "NHen":
/***/ (function(module, exports) {



/***/ }),

/***/ "R0ON":
/***/ (function(module) {

module.exports = {"a":[{"name":"Backgammon Street Boys","advisors":[{"name":"Rolando Marquez","year":"Senior","major":"Bioengineering","from":"Pasadena, TX","image":"../../../static/oweek/backgammon/Rolando.jpg","bio":"Rolando is like a box of chocolates. You THINK you know what you’re gonna get but he still manages to surprise you. He’s majoring in Bioengineering AND he’s a pre-med (he’s quite the brave soul). He’s a meme connoisseur (arguably his greatest attribute). He’s one of the funniest guys I have ever met, and he can always make you smile with his terribly good jokes and general way of being. Whether he’s whipping so hard he pops his elbow or taking a giant Bevo he found in a dumpster back to McMurtry, he’s always sure to make you laugh. But aside from how fun of a guy he is, he’s also an incredibly caring dude. Rolando is going to be a fantastic advisor. He has the motivation and commitment to help anyone who needs it, whether it’s academic or personal. His fun, upbeat personality is sure to be a warm welcome to Rice."},{"name":"Sophie Marx","year":"Sophmore","major":"Cognitive Sciences","from":"Brooklyn, NY","image":"../../../static/oweek/backgammon/Sophie.jpg","bio":"As an Uber driver once said about Sophie, “she talks so loudly for such a small girl.” You will probably hear Sophie Marx before you see her—this 5’3 sophomore Cognitive Science major from McMurtry College is energetic, hilarious, and is so excited to be your oweek advisor. As a former urban outfitters employee, Sophie is a walking urban outfitters ad, always sporting a fuzzy jacket and a fashionable belt. Hailing from New York City, sophie loves a good piece of pizza and is a major broadway enthusiast. Speaking of Broadway, she is also a member of the Philharmonics, Rice’s oldest acapella group, so even her singing in the shower sounds like a concert. Sophie is thoughtful, passionate, and just a fantastically fun person to be around. If you have Sophie as your advisor, you should feel lucky to have such an amazing person as both a friend and mentor"},{"name":"Krithi Pachipala","year":"Sophmore","major":"Neuroscience, Social Policy Analysis","from":"The Woodlands, TX","image":"../../../static/oweek/backgammon/Krithi.jpg","bio":"Hailing from H-Town, this soon to be Dr. Pachipalalalalala, a potential quintuple major, is everything you’ll ever want in an Advisor. In her free time she likes to tell others about all the pre-med requirements she has left or her vegetarian diet that includes chicken. When she’s feeling potato-esque, Krithi can spend all day on Facebook tagging people in memes or dancing to Bollywood remixes on Rice’s Riyaaz dance team. She will always be down for adventures and trouble whether it’s late night dessert, losing her key at least once a week, leaving her backpack in a restaurant overnight, or running into laptop thieves in her room! In all seriousness, though, Krithi is an amazing friend, mentor, dancer, chocolate lover, and will be an advisor you can go to for anything. She is always ready to drop everything to put others’ needs ahead of hers, whether it be for a quick Target run or to just be there as someone to talk to. If you lucked out and got Krithi as your Advisor, her million facial expressions will lighten your mood every time you come across her at Rice, and just know she’s always there to help you anyway she can!"},{"name":"Nathan McCoslin","year":"Sophmore","major":"Political Science","from":"Jewett, TX","image":"../../../static/oweek/backgammon/Nathan.jpg","bio":"Having Nathan as your advisor is an experience you’ll never forget (whether that’s a good thing or a bad thing, I’ll let you decide). All jokes aside, Nathan is one of the most wholesome people at Rice you’ll ever meet. Originally from the small town, Jewett, (THE sculpture capital of Texas - as he reminds us every 5 minutes), this Political Science major has one of the biggest hearts and can talk to you about literally anything. Just don’t ask him to watch a horror movie with you, he might end up being too scared to sleep in his own room that night and beg to sleep on your floor. In the time I’ve known him, he’s never made me fail to smile and is one of the greatest friends you could ever ask for. You’re going to make some unforgettable memories and be constantly laughing with him as your advisor and always know that he’s got your back."}],"image":"../../../static/oweek/backgammon/backgammon_1.jpg","video":"https://www.youtube.com/embed/-aLED8Y27Gg"},{"name":"Battleship and Boujee","advisors":[{"name":"Hayden Mast","year":"Sophomore","major":"Mathematical Economic Analysis, Statistics","from":"Austin, TX","image":"../../../static/oweek/battleship/Hayden.jpg","bio":"With the loudest car at McMurtry, you might hear him approaching before you meet him. Whether he’s revving his Mustang engine or revving hearts with his killer smile, Hayden stirs things up wherever he goes. He cares enough that he will truly listen to and consider anything you want to talk about, but not too much that he can’t dish out roasts when he needs to. Hayden’s a guy you can both mess around with and trust, so feel comfortable ribbing him and confiding in him. Most of all, if you’re in his family, he’s always down to ride with you in whatever you do (preferably in his Mustang). This means Hayden will try new things and grow with you. Like your favorite Pokemon, he’s always evolving, and that’s why he inspires us."},{"name":"Ellery Parish","year":"Junior","major":"Social Policy Analysis, Sociology","from":"San Antonio, TX","image":"../../../static/oweek/battleship/Ellery.jpg","bio":"Ellery Parish (pronounced ‘celery’ but without the ‘c’) is a gregarious, loving student athlete from the city of San Antonio. If you need her, you should probably check at the Rec - this hard-working member of swim team dedicates hours every day to trying to cross the pool without drowning. When she’s not underwater, Ellery is always available to give her opinion on any and every topic you can think of. Her double majors of Social Policy Analysis and Sociology have her well-prepped to analyze and give you advice on any situation that comes up, especially where to get breakfast tacos in Texas (although be aware that the best ones are in San Antonio). All in all, Ellery will always be there for you, whether as a friend or a shoulder to lean on (if you can reach it), and will spend the next four years cheering you on in every endeavor you choose. "},{"name":"Dara Okeremi","year":"Sophomore","major":"Bioengineering","from":"Houston, TX","image":"../../../static/oweek/battleship/Dara.jpg","bio":"If you’re ever in an 8 am class, and you want to know how to get up at 7:53, shower, grab breakfast and get to class ON TIME, Dara’s the person you go to. This high-spirited, loud, and tea-loving girl is going to be your go-to for everything (except driving - don’t ask her to drive you around). She’ll always have your back and be your hype-person (yes, she’s loud - why she lived on the quiet floor of McM her freshman year, the world may never know). She’s a part of literally every club on campus and her calendar may stress you out with all the different appointments, but she’ll always make time for those who need her. She’s a BioE so she can engineer creative solutions to all of your problems. Dara doesn’t play games (especially with Physics), but since this is Advance To Go Week, get ready to play games with her as your Advisor."},{"name":"Rohini Kumar","year":"Junior","major":"Neuroscience","from":"Austin, TX","image":"../../../static/oweek/battleship/Rohini.jpg","bio":"If you’re searching for the wisdom and calming presence of Master Oogway from Kung Fu Panda, but feeling downcast because he is a fictional tortoise, worry no more! Rohini Kumar possesses all of that poise and calm and she will also always go out of her way to support you, listen to you, and calm your soul with her soothing demeanor. Look for her on the dance floor, because she is an incredible dancer and captain of the Rice Rasikas dance team! Rohini is a Neuroscience major, so she has has a pretty big brain (that she also knows a lot about)-- but she also has a really big heart, both for her friends and for the world. She is one of the most thoughtful and reliable friends you will ever have, so don’t let this one slip away!"}],"image":"../../../static/oweek/battleship/Battleshipgroup.jpg","video":"https://www.youtube.com/embed/SqeiYxm6tR8"},{"name":"Captain Mancala","advisors":[{"name":"Kabir Sood","year":"Sophomore","major":"Economics","from":"Houston, TX","image":"../../../static/oweek/mancala/Kabir.jpg","bio":"A native Houstonian Econ major who’s also a premed, Kabir Sood is all about following his passions. Kabir absolutely loves music and it won’t be long until you catch him singing along to some of his favorite songs, and if you want something a little more formal go see him sing at one of his acapella concerts with the Apollos! You can usually find Kabir practicing his verses for an upcoming song, at the Rec, or out getting some late night food off campus. Did I mention Kabir is a huge Rockets fan? Talk to him about how much he loves the Rockets, or hates the Warriors, and you’ll soon realize how much he knows about basketball, and he definitely wouldn’t mind if you asked him to go to a game. Kabir is a fun loving, genuine, funny guy who is all about doing the things he likes. Ask him about how he manages to balance his interests and academics, or what it’s like to be a premed majoring in Social Sciences. You can also always ask him for music recommendations. Kabir is a great, and I highly recommend getting to know him!"},{"name":"Stoyan Kimitov","year":"Senior","major":"Computer Science","from":"Chicago, IL","image":"../../../static/oweek/mancala/Stoyan.jpg","bio":"Fun, funky, and fresh, Stoyan Komitov (Sto-yawn Co-me-tov) is the guy that does it all. Formerly known as “Row God” or “Guy with the Strong Jaw,” you can now call him your Advisor and new friend. Even though he comes from the far away land of Chicago, Illinois, Stoyan has made Houston his home for the last three years, meaning that he knows all the best places to eat around town! When he isn’t at an early morning rowing practice or fixing something at Rice Bikes, you can catch Stoyan grinding away in Fondren or McMurtry commons trying (and succeeding) to finish a last-minute project. Plus he can make bread! This guy can truly do it all. An avid EDM fan, Stoyan has the high energy of a raver with the passion of … also a raver. Stoyan is a junior Computer Science major whose dedication to his major is high but his love for his friends is higher. Despite being quite the busy body, Stoyan always makes time for his friends, no matter if they live across campus or across the world. Honestly he is one of the best people you will meet, and starting your time here with him will make McMurtry and Rice the best place possible. But seriously, ask him to make you his signature avocado hummus, it’s amazing"},{"name":"Sohil Shah","year":"Sophomore","major":"Mathematical Economic Analysis","from":"Singapore","image":"../../../static/oweek/mancala/Sohil.jpg","bio":"Sohil. Slow-hill. Swole-hill. Mr. Worldwide. Sampath. The man of many monikers reached his peak at the 2019 club tennis banquet when he was awarded “The Walking Meme” award, to no surprise from me and his other teammates; he’s laughing half the time, often at himself. If he’s not laughing, he probably has his raf (resting aloof face) on. He’s constantly confused about America: “What’s the point of pounds, there’s kilograms!” “Is Colorado a city?” If you speak in Fahrenheit only, don’t ask him what the weather is like outside or else he will haughtily reply in Celsius. A Singaporean native, his fashion sense is reminiscent of a model from Crazy Rich Asians (his Air Force 1’s omggggg). All this aside, Sohil will be the best Advisor you could ask for. He’s an incredible friend that’ll go out of his way to make sure you have everything you need. If you ever need someone to make you laugh or you need a hug or someone to listen to you, you know who to go to. You’re gonna have the best O-Week ever with Sohil!!!"},{"name":"Lupita Galvan Tinoco","year":"Senior","major":"Cognitive Science","from":"Austin, TX","image":"../../../static/oweek/mancala/Lupita.jpg","bio":"Lupita is the definition of a mother. Seriously. Think of that one mom friend you have and multiply just how much of a mom they are by 6. That’s Lupita. She’s super nice, super caring, and overall a fantastic person. She’s from Austin (and it kinda shows), she’s a Cognitive Science major (studying dat brain yo), and she has 2 super cute dogs (not at Rice, that’s not allowed). When she’s not excessively studying, she spends her time watching movies (80s or DCOM), decorating her room (puts other rooms to shame, including mine D: ), crafting, thrifting, and probably doing other neat things that she won’t tell me about. She’s a heck of a person, and a heck of a friend, and when you meet her you’re gonna love her."}],"image":"../../../static/oweek/mancala/Capatingroup.jpg","video":"https://www.youtube.com/embed/-pVadmJiRMQ"},{"name":"Dice Dice Baby","advisors":[{"name":"Dylan Nguyen","year":"Sophomore","major":"Social Policy Analysis","from":"Dallas, TX","image":"../../../static/oweek/dice/Dylan.jpg","bio":"Congrats!!! Dylan is your Advisor, now prepare for an ~E X P E R I E N C E~. Despite being a hardcore STEM student and comp major, he is also a woke kweeen getting a second degree in Social Policy Analysis and spending his summer working to reform the Texas criminal justice system. But don’t let that give you the impression that he is all work and no play … some of his favorite pastimes include listening to depressing indie music, elevating his broken leg, and balancing the checkbook as college treasurer. But seriously, if you’re looking for a good time, Dylan is your guy. He is known around McMurtry as the life of the party and has the paper plate award to prove it. And if you are ever looking for a spontaneous Beyoncè performance, this skinny legend has got you covered. So get ready for a wild ride and the best O-Week experience of your life!"},{"name":"Alexandra Lim","year":"Sophomore","major":"Undecided","from":"Vancouver, WA","image":"../../../static/oweek/dice/Alexandra.jpg","bio":"From the Portland metropolitan area, this Vancouver native, who is neither from Oregon nor Canada, can literally convince you to do anything. Like write this bio for her or join 3 college committees when you had no intention of doing so. Nevertheless, Alexandra is always down to hangout in commons, go to a campus event, or hit up Rice village for some fun. Single handedly building Martel’s common culture, Alexandra can be found in Martel commons doing anything from contemplating between majoring in Chemistry or Neuroscience to socializing with other Martelians over dinner. A “track star” in the making, she’ll run with you at 10 o’clock at night to catch the Rice Village shuttle for a cup of boba or dance until dawn at Y2K (McMurtry’s public party) because the music is just too good! Deeply in love with food and cafes, Alexandra is always down to go out and try some of the various cuisines and amenities Houston has to offer. And when you leave your wallet in the Lyft you took back together from Golden Dumpling House, faking a British accent and convincing the driver you go to Cambridge, she’ll call him up and get your wallet back! Dang, you sure are lucky to have Alexandra as your advisor!"},{"name":"Natty Askanase","year":"Sophomore","major":"Sports Management, History","from":"New York, NY","image":"../../../static/oweek/dice/Natty.jpg","bio":"Some Reviews: “If you don’t know Natty’s from New York City (the upper west side SPECIFICALLY!) he will make sure you know during O-Week.” “You will never see Natty without his crocs.” “Natty was in the bottom half of his high school class but still got into Rice.” “Natty is cool. 10/10 recommend as an Advisor.” “Natty is a man of many amazing traits, but mainly he’s an amazing friend that’s always gonna put a smile on your face!” "},{"name":"Robert Alexander","year":"Junior","major":"Cognitive Science","from":"Oakland, CA","image":"../../../static/oweek/dice/Robert.jpg","bio":"A little known fact is about Robert Alexander is that his initials actually stand for ‘Really’ and ‘Awesome’. However, an enigma such as he can only be understood through his dorm room decor. Above his bed are eight album covers, featuring artists such as The Strokes, Lorde, and Beach House. He also has several posters, revealing his love for the classics: the Office, It’s Always Sunny in Philadelphia, and Star Wars, but PLEASE NOTE that Robert has an extreme aversion to movies or shows in which the title is actually said out loud and may, quite literally, cringe out of his skin. And of course, Robert’s room is only complete with a bottle of hot sauce (stolen from the servery) on his desk. This Cognitive Science major from the Bay Area loves taking long walks through Hermann Park, playing pool, and watching basketball games when he should be doing homework, and I can guarantee he will be the best Advisor you could ask for."}],"image":"../../../static/oweek/dice/Dicegroup.jpg","video":"https://www.youtube.com/embed/PIq1b89oxUY"},{"name":"Hollabackgammon Girl: This Is Bananas","advisors":[{"name":"Amy Mu","year":"Junior","major":"Kinesiology (Health Sciences)","from":"Johns Creek, GA","image":"../../../static/oweek/hollabackgammon/Amy.jpg","bio":"Her full initials are AWM, and once you meet her, she’ll have you saying “AW M-an, where has Amy been all my life?” (Don’t ask what her middle name is, she might bite you.....but I’ll give you a hint: it’s a fast food chain and rhymes with Pendy.) This Health Sciences junior plans to spend her future in saving lives---starting with yours. Although she is majoring in the Natural Sciences, Amy also has great passion for Humanities and the Arts. If you also happen to be an enthusiast of dancing, appreciate thoughtful conversation, ever need homework guidance from a better-hairstyled version of Einstein, or if you have even the slightest sense of humor, you will get along wonderfully with Amy. This creative genius has enough megabyte storage in her brain to remember every little detail about you----in a slightly creepy, but mostly very thoughtful way. If I haven’t emphasized enough how massive her brain is, you’ll be shocked to learn that her heart is even more massive. No matter the place, the time of day, circumstance of happiness or sorrow, Amy will always be eager to be right by your side. Amy is one of the best people that are currently breathing on this planet, and anyone that receives the opportunity to become close to her will quickly come to realize this for themselves. Although college will be a time of new challenges, you can relax a little knowing that you will get to have THE Amy Mu as your advisor. It’s no coincidence that Amy and Allstate Insurance both start with an “A” --- because you’ll be in good hands."},{"name":"Raymond Lau","year":"Senior","major":"Mechanical Engineering","from":"Las Vegas, NV","image":"../../../static/oweek/hollabackgammon/Raymond.jpg","bio":"Hello my dear New Students, let me introduce you to the living legend Raymond Lau! They call him CRAYZYRAYZY the sun-dried delicious raisin because he is wrinkly and unimpressive on the outside but soft and sweet on the inside! This Las Vegas native knows how to play the following things: poker, Pokemon Showdown, the recorder, the trumpet, my heart. Senior MECH Raymond’s reputation precedes him everywhere he goes, and he is known by many names, including but not limited to: Raymond “CAAM” Lau, Mr. McMurtry, Dear Friend to All, “24 Fluid Ounces in 4 Seconds??,” Light of my Life. In all my 80 years living in this here anemone I’ve never met someone more selfless, adventurous, humble, and kind! Get ready for the time of your life, because Raymond is your Advisor!!"},{"name":"Hannah Boyd","year":"Sophomore","major":"Biochemistry","from":"Gaithersburg, MD","image":"../../../static/oweek/hollabackgammon/Hannah.jpg","bio":"Hannah Boyd’s only been at Rice for a year, but she’s already solidified her status as a Murt ICON. Scored multiple game-winning touchdowns as McMurtry’s powderpuff quarterback? Check. Braved through a hot wings eating competition until there were tears streaming down her face? Check. Conquered a cockroach on the first day of O-Week and earned herself the title, “Roach Girl”? Check. This sophomore Biochem major was born in New Jersey but hails from Maryland. When she’s not grinding on homework, you can catch Hannah playing every single IM sport, doing research on cancer treatment targeting mitochondria, reading up on whether we live in a simulation, or listening to Old Town Road on repeat—she may or may not have the lyrics memorized to serenade you. But besides being a rap queen (ask her to freestyle and witness her skills for yourself), Hannah’s a gem of a friend. She’s an extremely genuine person and someone you can talk to for hours about everything and nothing. If you made it into Hannah’s O-Week group, congrats on landing yourself a one-of-a-kind Advisor and a friend for life."},{"name":"Stephanie Xie","year":"Junior","major":"Computer Science Cognitive Science","from":"Wilton, CT","image":"../../../static/oweek/hollabackgammon/Stephanie.jpg","bio":"Hello to the matriculating class at McMurtry! If you’re reading this, congratulations, because it probably means that the lovely and wonderful Stephanie Xie is one of your advisors! Stephanie hails from the 7th residential college in founding order, Edgar Odell LOVETT College and she’s really excited to be your bridge between McMurtry and the rest of Rice! This Wilton, CT native is a (CS)^2 major (the colloquial abbreviation for both the Computer Science and Cognitive Science majors) and is spending her summer in Chicago, IL with Design for America. Stephanie is high key a cat person and Low Key an amazing singer (for context she’s in the Low Keys a cappella group!), so be prepared for a serenade or two about her cat Momo. Most importantly, Stephanie is a great friend and Caring human-being. Feel free to reach out to her for anything, she’s really excited to get to know you!"}],"image":"../../../static/oweek/hollabackgammon/Hollabackgroup.jpg","video":"https://www.youtube.com/embed/umwPzPjRdZQ"},{"name":"Hungry Hungry Hippo Mode","advisors":[{"name":"Nneoma Ome","year":"Sophomore","major":"Bioengineering","from":"Sugar Land, TX","image":"../../../static/oweek/hippo/Nneoma.jpg","bio":"Zoom!!! You see someone zipping past you to get to class, even though they aren’t late. Who’s that you might ask yourself? None other than Nneoma Ome. A tall girl that has brains to match her elegance. Nneoma is a Houston native from the suburb of Sugar Land. Which boasts some of the best and brightest the world has seen. It’s almost as if it was meant to be that she’s from Sugar Land and attends Rice University. Nneoma is always open to talking and meeting new people. Some of her hobbies are watching Youtube videos, talking to family and listening to her favorite artist Shawn Mendes. A secret talent Nneoma possesses that she is an amazing volleyball player and an even better leader. She was named the most improved member of her varsity volleyball team in high school. So if you’re lucky enough to catch Nneoma on campus, I would say the best way to spark a conversation with her would be by bringing up Shawn Mendes. Doing that might just kick off a great friendship between the two of you."},{"name":"Jennifer Ho","year":"Junior","major":"Kinesiology, Health Sciences, Multiple Minors","from":"Tomball, TX","image":"../../../static/oweek/hippo/Jennifer.jpg","bio":"Jennifer Ho? THE Jennifer Ho? She’s known as many different things: J. Ho (which is what inspired Jennifer Lopez to go by J. Lo) to her peers, @jenniferhopez to her Instagram fans, @jennifurho to her loyal Twitter followers, and Jennifer Ho, B.A. Kinesiology to her professors and formal email correspondents. You, however, are lucky enough to also get to know her as your incredible Advisor: someone who will welcome you with all the heart she has in her tiny body, always hype you up, support you through the best and worst of times, and serenade you with the singular ukulele chord she’s learned to play. You’ll know when she’s nearby when you see her extremely well-crafted outfit she threw together in 5 minutes for 5 dollars, hear her energetic, genuine laughter, or spot a blur roller-blading across campus at unrealistically high speeds. Chances are, though, Jennifer will already be at your side, no matter what. She is, objectively and undeniably, one of the kindest, warmest and most selfless people you ever will meet. While she is convinced she will win an Oscar for her homemade movies that Youtube has yet to see, Jennifer’s main passion lies in helping people, whether it’s through studying Global Health, Health Disparities, or just through her everyday actions. This junior has abundant love for Rice and McMurtry, and being the #giving person she is, she’s more than ready to share it with you, too."},{"name":"Emma Young","year":"Junior","major":"Mathematical Economic Analysis","from":"Social Analysis Brentwood, TN","image":"../../../static/oweek/hippo/Emma.jpg","bio":"One of the dankest features on Hungry Hungry Hippo Mode is Emma Young (Thug). She’s a junior majoring in Mathematical Economic Analysis and Social Policy Analysis, but you don’t need any analysis at all to figure out why she’s a great advisor. As a tour guide, she can show you the ropes at Rice—and she can do it while walking backwards! At the very least, she will surely show you around her home college Will Rice. She works for Fondren Library, but she’ll never leave you on “read.” If you’re hungry, ask her about her food Instagram. When I’m with Emma, I know Imma be in good hands and so will you."},{"name":"Josh Verne","year":"Sophomore","major":"Computer Science","from":"Raleigh, NC","image":"../../../static/oweek/hippo/Josh.jpg","bio":"Joshua Verne is the most woke person you’ll ever meet, and you can quote me on that. Although originally living in Taiwan for 6 years, Josh is from North Carolina. Not only are they from North Carolina, but they can also list a bunch of other random celebrities that happen to be from North Carolina as well – a talent they commonly share. This sophomore Computer Science genius doesn’t limit their abilities to the computer, but also dabbles in a variety of Sexuality and Gender Classes. If you ever feel the need to have a deep, invoking conversation with someone, Josh is the Advisor for you. Or maybe have you ever just wanted to go on a jog around campus at midnight? Josh does just that. In their free time, you’ll find Josh leaving campus to rock climb, reading some random article, entering themselves into a hot wing eating competition, or running a meeting for Healthier Masculinities (a club they created!). You’ll often hear them asking, “So what about them Dodgers?”, without actually ever knowing what’s happening in baseball. Lucky for you, you’ve landed yourself an incredibly genuine, fun Advisor who’s probably just as excited about O-Week as you are!"}],"image":"../../../static/oweek/hippo/Hungrygroup.jpg","video":"https://www.youtube.com/embed/9_rG0AC3AcQ"},{"name":"The Jenga Book","advisors":[{"name":"Asli Yilmaz","year":"Senior","major":"Chemical & Biomolecular Engineering","from":"Houston, TX","image":"../../../static/oweek/jenga/Asli.jpg","bio":"Asli, Asli, Asli—Let me tell you about this gal. The moment this Houston native’s car broke down in Rice Village she was fated to make quite the splash at Rice. When she’s not killing it as a Chemical and Biomolecular Engineering student she spends 98% of her waking hours looking at memes on Twitter. She often speaks literally in just vines or occasionally Turkish. When she’s not doing that you might find her prancing around in a white robe and slippers, arguing the cultural significance of Barbie Princess & the Pauper, or furiously popping Lactaid pills before chugging a milky latte. In all seriousness, having Asli as an Advisor is a real treat—she’s super caring and kind and if you ask nicely enough her mom will bring you tasty Turkish goodies. She’s always willing to step up to any task, and she’ll always surpass expectations. She’s the chillest of beans, the diggidiest of bombs, and multiple bees’ knees."},{"name":"Rishi Vas","year":"Sophmore","major":"Cognitive Science","from":"Dallas, TX","image":"../../../static/oweek/jenga/Rishi.jpg","bio":"MAN OH MAN! If THE RISHI VAS is your Advisor then you have single handedly gotten the BEST ADVISOR! This rambunctious Dallas native (which does not even come close to justifying his love for the Cowboys & Mavericks) will never cease to make you smile and will always make you laugh till you cry. Although this hunk of a man seems to always be injured, when healthy he becomes an athletic freak of nature dominating in basketball, tennis, and volleyball - I am warning you now, you better watch for your ankles cause they are bound to break when he’s on the court. If he’s not dancing his way into your heart, this pre-med Cognitive Sciences major is probably listening to Jon Bellion or eating some great vegan food! You will come to realize that taking a walk across campus with Rishi Vas will take 1000X longer than expected because he will stop by and talk to everyone he crosses path with (this man literally knows everybody). Rishi is the literal life of the party and will always make sure that everyone around him is having as much of a blast as he is. In all seriousness - his smile will always light up the room and his windshield sounding laugh will make you realize you really do have a one of a kind Advisor. Rishi has a heart of gold and will not only be an amazing Advisor, but a fantastic friend who can not wait to be a part of your journey here at Rice! "},{"name":"Natalie Festa","year":"Sophomore","major":"Anthropology Economics","from":"Houston, TX","image":"../../../static/oweek/jenga/Natalie.jpg","bio":"Big Sean sang “I woke up in Beast Mode,” but Natalie’s had beast mode turned on for a while, specifically since she had the audacity to walk back from Fondren Library at 2 am wearing Birks with socks and a blanket around her. When she’s not impressing the Rice faculty and student body with her high fashion sense, Natalie is pursuing a double major in Anthropology and Econ. A Houston native, she loves the Astros and is a big fan of the second-string Rockets center, Nenê, for some reason. She definitely has her own car, and definitely doesn’t have to ask her mom to use hers when she wants to go off campus. Feel free to ask her for a ride anytime (but give her time to text her mom for permission). When she’s not volunteering around Houston or playing on the club soccer team, she represents McMurtry in intramural sports. How lucky can you get to have her as an advisor? Luckier than Natalie, probably, who regularly says “of course it happens to me” when her computer’s “t” button stops working so she has to sign emails as “Naalie Fesa,” or when she talks about her beloved cat, Percy, who she sleeps in the same bed with and is unfortunately severely allergic to. When you tell her your favorite band, make sure to catch her reaction, because if it’s one of poorly-hidden disgust (which it will be if you don’t like the Avett Brothers or Bob Dylan) then they probably feature in her “cursed” playlist, right up there with Michael “Bubble” and Charlie Puth. No matter what you’re interested in, you’re bound to have a unique connection with Natalie and a great O-Week with her as your Advisor."},{"name":"Ben Harris","year":"Junior","major":"Computer Science","from":"Charlottesville, VA","image":"../../../static/oweek/jenga/Ben.jpg","bio":"It’s a bird! It’s a plane! No, it’s just a tall lanky boy!! Ben Harris, or as his friends call him Lord Byron, is a specimen of a man. Get excited because Ben Harris is a BNOC (big name on campus)!! I say that not because he’s known or involved but because he is literally huge, you can see him from anywhere within a 2-mile radius. Don’t let his height, nice sweaters, and hipster glasses fool you, this man is a goon. Every inch of his 6’6” physique is packed with the most immature sense of humor imaginable. I would pay $50 to see this man go 10 minutes, nay 5, without laughing at something that’s not remotely funny or nothing at all. How is this goof my Advisor you ask? Probably because he’s Duncan College’s Chief Justice, the role of upholding a college’s honor and integrity against all odds. I’ll let you spend O-Week trying to figure out how he got that job. Despite his inability to close his mouth when he chews, pick up his chacos when he walks, or take anything seriously, Ben is fiercely loyal and the best friend anyone could ask for. He’ll give you great advice and always make you smile. Get pumped for the best, most laugh-filled week of your life with Duncan’s Hunciest Hunc!!!"}],"image":"../../../static/oweek/jenga/Jengagroup.jpg","video":"https://www.youtube.com/embed/5N1PfucA5as"},{"name":"La La Candyland","advisors":[{"name":"Caleb Robinson","year":"Sophomore","major":"Physics, Mathematics","from":"Hattiesburg, MS","image":"../../../static/oweek/candyland/Caleb.jpg","bio":"Don’t let his scraggly beard fool you, Caleb is Straight Edge™ in every way. He’s honest, dedicated, and loyal. He’s like an English Bulldog with a Red Sox™ hat. His wit can be savage, but his fierce commitment to his friends destroys doubt and loneliness like the internet destroys public discourse. Just keep his brown loafers and tangle beard in sight and you’ll have a tough-but-secret-softie guide through O-Week and beyond. From life advice to dinner suggestions, Caleb will, with deepest consideration, never steer you wrong — even if his dinner suggestion might be Jimmy Johns."},{"name":"Kelsey Sanders","year":"Senior","major":"Ecology, Evolutionary Biology, Neuroscience","from":"Boca Raton, FL","image":"../../../static/oweek/candyland/Kelsey.jpg","bio":"It’s hard to miss Kelsey walking around McMurtry - just look for purple and a trail of glitter. As one of the most spirited members of the college, you can catch Kelsey playing for or cheering on McMurtry IM sports teams. When she isn’t decked out in purple head to toe for a powderpuff game, you can find her in “safety” pajama pants working with her babies (corals) in the lab. As an EBIO major, her love of animals extends beyond the little guys in the tanks to all the big fish in the sea...and of course all her favorite friends at the zoo. A woman of many talents, you can also find Kelsey in Hamman Hall, watching her latest play be performed on stage. While she can be found just about anywhere on campus, Kelsey is first and foremost a Murt or as she would say, “MUUUUURRTTTTTT!” Pack your sunglasses and get ready to meet sunshine in human form."},{"name":"Aaron Pathak","year":"Sophomore","major":"Social Policy Analysis","from":"Dallas, TX","image":"../../../static/oweek/candyland/Aaron.jpg","bio":"If you are reading this, you may be wondering who this enigmatic, ethnic advisor may be. He is an engineer that gave up on engineering as soon as he stepped foot on Rice campus. He is a pre-med that isn’t really pre-med even though he really likes and knows a lot about pre-med. He is a biracial (half Chinese and half Nepali), but he is also a coconut (#ifykyk). He is THE most confusing man on Rice Campus. Coming to you from Jones College, this sophomore Social Policy Analysis major currently hails from Dallas, Texas, but he is originally from rural Louisiana. Known for being the best procrastinator on campus, no one knows how Aaron manages to finish all his work. He regularly takes 3-hour naps, schedules “procrastination time” in the middle of the night, and spends nearly six hours everyday just browsing Reddit. With his Sperrys and 3-quarter zip, Aaron gives off a frat boy vibe, but don’t let this fool you. Aaron is one of the nicest and smartest people that you will ever meet. As the go-to organizer of all events, Aaron is sure to plan lots of activities for your O-Week group. He might even take you on another European backpacking trip or impromptu visit to New Orleans. Despite not being from McMurtry, you can count on this Co-Advisor to always be there for you - Aaron is truly one of the most selfless and caring people at Rice, and is always willing to listen to you rant or celebrate your victories. He can’t wait to help welcome you to your new home at Rice. "},{"name":"Akshaya Venkatesh","year":"Sophomore","major":"Cognitive Science","from":"Los Angeles, CA","image":"../../../static/oweek/candyland/Akshaya.jpg","bio":"Akshaya Venkatesh. A name you can spot on any list simply because its longer than the others and sticks out. She’s pre-med and majoring in Cognitive Sciences, with minors in Business/Biochem. She loves misplacing stuff, *cough* suitcase *cough* (she lost her suitcase during O-Week, found four days later). She is an incredibly determined human being who has an addiction to caffeine and decided to add an extra identification to the front of her credit card: her own face. Don’t even get started with her obsession with rose gold. Also, there is no such thing as a sleep schedule for her, as you can find her asleep either at 2 PM or 2 AM, depending on the day. Even though she might be incredibly busy, she genuinely cares about you and will do anything to help you. Originally from Los Angeles, California, she sometimes (always) misses the California sunshine. Find her at Fondy 6th working on chemistry, or generally laughing loud enough to wake everyone up. She’s going to be sure to make your first week and first year at Rice as great as it can be!"}],"image":"../../../static/oweek/candyland/Lalagroup.jpg","video":"https://www.youtube.com/embed/GO0q-lRWAhI"},{"name":"Lil’ Yahtzee","advisors":[{"name":"Alex Lammers","year":"Sophomore","major":"Bioengineering","from":"Tecumseh, Michigan","image":"../../../static/oweek/yahtzee/Alex.jpg","bio":"Does Alex look familiar? That’s probably because you recognize this political icon from a CNN town hall when he was chosen to ask a question to then-presidential hopeful, billionaire Howard Schultz. That’s right. He may be a hardcore bioengineer who travelled to Malawi this summer for global health thingies (we aren’t engineers), but he is also a civically engaged, ~woke~ KING. Although he may seem extremely vanilla on the surface, buried deep within him is a sassy monster. However, his sass is not nearly as suppressed as his real laugh, which he hides because if unleashed, an earthquake erupts on the other side of the world. Regardless, if you need someone to discuss feminism in blockbuster action movies, the brilliance of Brie Larson, literally any HBO show, or how to feed tapirs (we didn’t know what they were either) with, and you don’t mind the HEAVIEST midwestern accent on the planet, Alex is your guy. In all seriousness, Alex is one of the most selfless and caring people on the planet and he will always be there for you with an endless supply of tupperware filled with snacks."},{"name":"Tatyanna Epps","year":"Sophomore","major":"Sociology","from":"Temple, TX","image":"../../../static/oweek/yahtzee/Tatyanna.jpg","bio":"Tatyanna Epps Bust down Tatyanna!! Or as she likes to be called, Tya. Tya Epps, a sophomore Sociology major, is currently from Temple, Texas but has lived in a bunch of other states – which is too long to list. This girl is a procrastination queen but that doesn’t stop her from killing it at life. As Treasurer of BSA, your McMurtry Diversity Facilitator, and a star Powderpuff line(wo)man, she’s super involved around campus. Not to mention, she’s also a rap queen and literally knows the lyrics to every song imaginable. Don’t even get me started on her love for Nicki Minaj. While we’re on the topic of her various skills, Tya is especially attuned to very faint smells, has a complex palate when it comes to food, and loves very cold climates (keeping her room at meat locker temperatures). Does she have Spidey senses? We think so. You’ll often find her awake at 5am, busting out an essay, or just casually listening to music. Tya is the best type of person for deep conversations but can also be somebody you can easily laugh with. She’s super excited about O-Week and can’t wait to meet you guys!"},{"name":"Sachi Khemka","year":"Sophomore","major":"Biological Sciences","from":"Katy, TX","image":"../../../static/oweek/yahtzee/Sachi.jpg","bio":"You’re walking to class one morning. Out of the corner of your eye you see the llama from The Emperor’s New Groove. Oh wait. It’s Sachi Khemka. During the 2018-2019 school year, Sachi managed to lose her ID, mail key, and two room keys. Imagine the kind of determination needed to lose so many valuables in such a short period of time! This focus and drive truly defines Sachi’s character and makes her the successful student she is (even though she sleeps through her morning classes…at 4 p.m.). As a premed Biological Sciences major who is also a trained dancer, a Camp Kesem counselor, and a biomedical lab member, Sachi is the kind of person who seems to do it all, but if you ever want someone to watch a trashy rom-com, she will drop everything, walk over and join you (probably like 20 minutes later because this girl is nothing if not punctual)! Her favorites include The Last Song (mainly because of Liam Hemsworth), The Fosters, and The Vampire Diaries. Never watch horror movies with her, though. This girl is even scared of her own face in the mirror. Also, a piece of advice: Sachi is going to need to borrow both a laptop, phone charger, and blanket from you at some point, so keep them handy. As Sachi would say, “welcome to Riiiiiice,” and I’m sure you will all ~genuinely~ love your O-Week Advisor :)"},{"name":"Grant Lu","year":"Senior","major":"Bioengineering","from":"Houston, TX","image":"../../../static/oweek/yahtzee/Grant.jpg","bio":"Have you ever met the human embodiment of charisma? Well look no further as you hit the jackpot with Grant Lu. A sweet senior from Sugarland, Texas, this BIOE has an uncanny amount of botanical knowledge. Well versed in English, Mandarin, Spanish, and the language of friendship, this Advisor will be sure to shower you with advice. If that doesn’t let you know enough about his personality, look at the words that almost rhyme with Lu: cool, jewel, fun fuel, nice shoe, too good to be true, lover of voodoo, sleeps no drool, eyes like the moon, blows you away like “atchoo!” and you’ll be stuck to him like G.Lu! Despite being an avid collector of things that are soft, Grant is surprisingly sturdy for someone who got hit by a car. Look forward to having this creative and spontaneous advisor with this haiku to get you excited: Advisor Grant Lu; Kind and caring friend to you; This is the haiku"}],"image":"../../../static/oweek/yahtzee/Lilgroup.jpg","video":"https://www.youtube.com/embed/f5JAwQ374oM"},{"name":"Panic at the Risk-O","advisors":[{"name":"Sean McCormick","year":"Junior","major":"English, Business","from":"Houston, TX","image":"../../../static/oweek/risko/Sean.jpg","bio":"Sean is Will Rice’s resident basketball, hip-hop, and reading enthusiast. He’s not particularly good at basketball, and he’s a slow reader, but the guy tries his best. You can normally find Sean losing pickup games at the rec, showing off some random talent, and losing bets in Super Smash Bros. Sean currently has a standing bet that he’ll make the club basketball team next year, while having no organized-sport basketball experience in his life. Confidence, or perhaps hubris, is thus one of Sean’s biggest defining features."},{"name":"Callie Carnahan","year":"Sophomore","major":"History","from":"Washington D.C.","image":"../../../static/oweek/risko/Callie.jpg","bio":"Is that a cheetah? Usain Bolt? No it’s just Callie running on the treadmill. This Chevy Chase native loves going to the gym - almost as much as she will love you and your o-week group. Do you need someone to help you get healthy? Callie’s your girl - she’s always carrying greek yogurt, soylent, and cheese in her backpack and consistently goes to bed before 11pm. Callie is a dedicated history major, and you can often find her working on readings or an essay at Coffeehouse. If you ever need to see photos of a cute dog, Callie’s family recently got a new puppy, and she WILL show you photos - whether you like it or not! Callie is genuine, an amazing listener, and one of the most enthusiastic people at Rice. While Callie is one of the most hardworking people we know, she always wants to have fun and will make sure everyone else does too. You are so lucky to have her as an advisor, and get ready for an amazing year!"},{"name":"Lily Cao","year":"Junior","major":"Psychology, Managerial Studies","from":"Friendswood, TX","image":"../../../static/oweek/risko/Lily.jpg","bio":"Nobody:   Lily Cao: BAHAHAHAHAHAHAHA HAHAHAHAHAHAHAHAHAHA. Got jokes? Got corny jokes? Got no jokes? Don’t worry if you fit any of the previous descriptions, because Lily will make you feel like the funniest and happiest person alive. Don’t let her 5’5’’ stature fool you; this girl’s heart has been scientifically proven to be thrice (possibly quadruple) the size of the average human heart. Honestly one of the most open and warm personalities on campus, and you can talk about anything with this girl from how to pretend that your fallen tooth crown was your lucky pebble (ask her to tell that story, it’s so funny you might pee your pants) to the best eateries in Houston. Lily has been through many majors, so she has a well-rounded perspective that makes her easy to connect with. She also has very diverse tastes in music and tv shows, so no matter if you’re a country boy, an EDM babe, a crime show fan, or a K-drama lover, you will find a soul sister in her. And don’t worry, as excited as you are to meet her after reading this, SHE IS 2398493243298423 MORE EXCITED TO MEET YOU :)"},{"name":"Steven Feng","year":"Sophomore","major":"Mathematical Economic Analysis","from":"Parsippany, NJ","image":"../../../static/oweek/risko/Steven.jpg","bio":"A DJ. A runner. A Peer Academic Advisor. In short, Steven Feng is a dad. Hailing from Parsippany, New Jersey, he’s got master foam rolling skills, and that’s the least of his talents. Don’t let that startle you, though, because the only thing bigger than his thighs is his heart. When he’s not talking about Parsippany, or talking about how much he talks about Parsippany, or grinding in ECON or STAT, he’ll help you draw out your most efficient four-year plan for Rice, and make you feel like you truly belong here while doing it. He’s always willing to lend a helping hand - or a foam roller, should you need it."}],"image":"../../../static/oweek/risko/Panicgroup.jpg","video":"https://www.youtube.com/embed/nLk6s0DC5kk"},{"name":"Schoolboy Clue: Collard Mr. Green","advisors":[{"name":"Sue Kim","year":"Senior","major":"Computer Science, Statistics","from":"Seattle, WA","image":"../../../static/oweek/clue/Sue.jpg","bio":"Straight outta Seattle, Washington, Sue Kim is a gal with a beautiful voice, a big heart, and an even bigger love for Netflix. As a Computer Science and Statistics double major, you can often find her in the commons coding away, but if she’s not doing that, she’s probably ordering Postmates, watching an emotional TV show, and listening to the latest Spotify hits all at the same time. Sue is always down to eat any type of food with you (especially Korean), learn some new makeup tricks, or just go on a walk around the inner loop to talk about whatever is on your mind. If you catch her awake in the late hours of the night, don’t be surprised if you proudly tell her about how you woke up early or went to the gym and are met with one simple question: “Why?” Sue will always be there to hug you, believe in you, give you her most honest advice, get you some tea, and hand you her famous Perry the Platypus stuffed animal for some extra love (and shame you for trying to better yourself through physical activity). You’re so lucky to have Sue not only as your Advisor but also your forever friend."},{"name":"AJ Valenty","year":"Sophomore","major":"Computer Science","from":"Austin, TX","image":"../../../static/oweek/clue/AJ.jpg","bio":"Who is AJ Valenty you ask? Stong. Independent. Bold. Caring. Sassy. And a certified cutie! Not only is he a beloved Murt, but he’s also on track to being one of the first (maybe the first) Rice Varsity Tennis players to graduate with a Computer Science Major. But when he’s not doing lines of code, you can find AJ at the rec DOMINATING the calf raise machine. Take look at AJ and you’ll notice the voluptuousness of his calves. Every day is a #calf day for AJ. Forget a pillow? No problem! AJ is always willing to lend a calf, and trust me, you’ll get the best night sleep of you life. In his free time he is a crafting king, and will school anyone on PVP servers (I speak from experience). Give me a diamond sword and AJ a wooden pickaxe and he will still win 10/10 times. With all these activities, one might think AJ must be tired? He is, but if you need a friend at 2am, just go to the commons and you’ll find AJ working, but never too busy to chat."},{"name":"Meheret Adera","year":"Sophomore","major":"Kinesiology (Health Sciences), Global Health Technologies","from":"Dallas, TX","image":"../../../static/oweek/clue/Meheret.jpg","bio":"Who’s got the laugh of Mickey Mouse, the cheeks of Sandy the Squirrel, and the posture of an old lady? Meheret Adera. This Ethiopian turned-cowgirl from Dallas, TX is majoring in Kinesiology and minoring in Global Health Technologies. Meheret will steal your heart like the pops at Steel City—literally, she consumes around ten popsicles a day in the summer, and she will spill all the tea on the best flavors. Just make sure not to accidentally spell her name MEHERT … or do if you’re looking to get her a personalized secret santa gift (ask Steven Feng about that one). Meheret is the kind of friend who will stay up talking to you for hours about anything, even when both of you definitely have work to do, but some topics that are especially close to her heart are nail art, Gustavo Rocqué from Rocqué Records, the iridocyclitis vine, and the time a goat injured her leg at camp. A talented Turkish dancer, she will gladly teach you the Cotton-Eyed Joe dance when Old Town Road starts playing (it definitely makes sense, just ask her). She also loves jamming to Ethiopian and Latin music on her frequent walks to Fondy basement. If you need advice at 4 am, Meheret’s probably awake. If you need someone to be your fire, Meheret’s your one desire -- she’s got a black belt in taekwondo and she’s not afraid to use it. Meheret will be there for you no matter what, so enjoy having the funniest, quirkiest, kindest advisor you could ask for. As Big Time Rush said, get ready to “live it big time” with Meheret as your O-Week Advisor."},{"name":"Sai Sriram","year":"Junior","major":"Computer Science, Neuroscience","from":"Tampa, FL","image":"../../../static/oweek/clue/Sai.jpg","bio":"Sigh… where does one even start to describe Sai (verbalized as -sigh-). Is he a 5’10” mean green coding machine? Is he smol, but swole? Is he a Bakerite who eloped to McMurtry, the best college? Is he excited to welcome you all? Yes. Yes. Yes. And Yes! This Computer Science and Neuroscience double major hails from Florida, the Sunshine State, but still can’t handle the sticky heat of Texas, so he can always be seen with his proudly McMurtry-adorned water bottle. To maintain his active lifestyle, this junior scarfs down pizzas from the Hoot (The late-night food stand serving hungry students) on the daily. If the Hoot isn’t opened, Sai’s late-night hunger can only be satiated with Rice Village’s infamous YoYo’s Hotdogs. When Sai isn’t on the grind, he can be spotted lifting irons at the rec or on the bike track training for next year’s Beer Bike."}],"image":"../../../static/oweek/clue/Schoolboygroup.jpg","video":"https://www.youtube.com/embed/5MkWPUXZPNA"},{"name":"UNO Mars: Draw 24k Magic","advisors":[{"name":"Eitan Woloski","year":"Junior","major":"Physics","from":"McAllen, TX","image":"../../../static/oweek/uno/Eitan.JPG","bio":"If you see an orange Astros cap amongst a Rice crowd, chances are you’ve had an Eitan sighting. They’re certainly not rare, though: this Physics pre-law from McAllen, TX, is all over campus. Catch him walking from “Cha-board” meetings, watching and performing comedy, or simply having a good time hanging around the college. In his free time, he likes spending time with friends or watching Astros and Rockets games. Eitan lives quite a spicy life: he’s often found with Takis, Miguelitos, or Tabasco and boy does this man make a mean Cholent. This junior is going bananas for O-Week, so get excited! You’ve got an awesome advisor coming your way!"},{"name":"Valerie Kass","year":"Senior","major":"Civil and Environmental Engineering, Politics, Law, and Social Thought","from":"Washington D.C.","image":"../../../static/oweek/uno/Valerie.jpg","bio":"Although we don’t know how, Valerie Kass packs a lot of spunk into a small package. Holding a dual citizenship with the U.S. and Israel, she calls the equally spunky Washington D.C. her home. Whether she’s playing powder puff, softball, or re-watching Grey’s anatomy for the 12th time, you’ll always find a mischievous smile on her face. Val is a rising senior at the (HUGE) Sid Richardson College, taking on the real world whether it’s ready or not after her graduation in 2020. She is majoring in Civil and Environmental Engineering with a minor in Politics, Law, and Social Thought. While her love (and worry) for the environment is at the forefront of her academic inclinations, you can also find her fascinated with history and feminist thought. So, go ahead and say hello; she has a lot to say!"},{"name":"Catherine Hettler","year":"Sophomore","major":"Psychology, Visual and Dramatic Arts, Neuroscience","from":"South Korea/San Antonio, TX","image":"../../../static/oweek/uno/Catherine.jpg","bio":"If you’re reading this, congratulations! You just scored yourself one of the best Advisors at McMurtry! Coming to us from San Antonio (but originally South Korea), Catherine is a Psychology and VADA (Visual and Dramatic Arts) double major bent on taking the least amount of finals possible. Nonetheless, Catherine is one of the kindest and funniest people that you will ever meet. As an artist, she’s super creative, and is always finding ways to make something new. She loves animals (maybe too much), but can’t be around them too often because she’s allergic to them (as well as pretty much everything else). And as for activities that DON’T induce allergic reactions, she loves watching Netflix, scrolling through niche Facebook pages, and just being an all-around lovely person. If you ever need her, she will respond to any text within thirty seconds—but don’t call, she gets nervous. So, get ready for an incredible O-Week, because there’s no way you could have gotten a better team of advisors!"},{"name":"Shaquille Que","year":"Sophomore","major":"Computer Science","from":"Quezon City, Philippines","image":"../../../static/oweek/uno/Shaquille.jpg","bio":"Shaquille Wyan Que: 99 pounds of pure GOLD, Peer Academic Advisor and Computer Science TA. He’s truly a jack of all trades - a calligraphy god, loves to sing Taylor Swift (even if he won’t admit it) and is an international math genius. You’ll find him in the commons doing homework, helping others with math, and falling prey to the endless memes on Facebook. Even if he takes every chance he can to roast you (all in good fun), he’s your go-to person for any questions you have about Rice, academic planning, or if you just need someone to vent to. Just don’t ask him where Oregon is (or any geographical knowledge), he’ll probably tell you that it’s on the opposite coast. Get ready to have an amazing O-Week with one of the best, most kind-hearted people at Rice who’s so excited to meet all of you :)!"}],"image":"../../../static/oweek/uno/UNOgroup.jpg","video":"https://www.youtube.com/embed/T0f2N2vFY2o"}]};

/***/ }),

/***/ "RQmk":
/***/ (function(module) {

module.exports = {"a":[{"name":"About the Theme","link":"/oweek/theme"},{"name":"Meet the Coords","link":"/oweek/coords"},{"name":"O-Week Groups","link":"/oweek/oweekgroups"},{"name":"Move-In Info","link":"/oweek/movein"},{"name":"Tour of McMurtry","link":"/oweek/mcmtour"},{"name":"Your Room","link":"/oweek/yourroom"},{"name":"O-Week Book","link":"/oweek/oweekbook"},{"name":"Contact Info","link":"/oweek/oweekcontact"}]};

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cGbl":
/***/ (function(module, exports) {



/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });