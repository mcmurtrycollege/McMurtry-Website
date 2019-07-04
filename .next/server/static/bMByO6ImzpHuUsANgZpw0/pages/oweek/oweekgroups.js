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








var groups_Groups = function Groups() {
  return external_react_default.a.createElement("div", {
    className: "oweek-page"
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
  }, "What is an Affiliate?"), external_react_default.a.createElement("p", null, "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. While they are paired with individual groups, they are an important resource for all New Students at the college. The Affiliate assigned to your group may often be floating around to meet other students and providing them with specialized knowledge and advice. Be sure to meet all the Affiliates present, as they are incredibly important campus-wide resources during O-Week and beyond. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."), external_react_default.a.createElement("h2", {
    className: "oweek-subtitle"
  }, "Find Your O-Week Group!"), external_react_default.a.createElement("div", {
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
  })), external_react_default.a.createElement("div", {
    className: "oweek-groups"
  }, groups_groups["a" /* oweek_groups */].map(function (_ref2) {
    var name = _ref2.name,
        advisors = _ref2.advisors,
        image = _ref2.image;
    return external_react_default.a.createElement(external_react_scroll_["Element"], {
      name: name,
      key: name
    }, external_react_default.a.createElement("div", {
      className: "oweek-group"
    }, external_react_default.a.createElement("h2", {
      className: "oweek-title"
    }, name), external_react_default.a.createElement("div", {
      className: "oweek-bios"
    }, advisors.map(function (_ref3) {
      var name = _ref3.name,
          year = _ref3.year,
          major = _ref3.major,
          from = _ref3.from,
          image = _ref3.image;
      return external_react_default.a.createElement("div", {
        className: "advisor-bio",
        key: name
      }, external_react_default.a.createElement(external_rebass_["Box"], {
        width: 0.9,
        ml: "auto",
        mr: "auto"
      }, external_react_default.a.createElement(external_rebass_["Image"], {
        src: image,
        alt: "Error Loading Image"
      })), external_react_default.a.createElement("h3", null, name), external_react_default.a.createElement("p", null, year), external_react_default.a.createElement("p", null, major), external_react_default.a.createElement("p", null, from));
    }))));
  })));
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

module.exports = {"a":[{"name":"Backgammon Street Boys","advisors":[{"name":"Rolando Marquez","year":"Senior","major":"Bioengineering","from":"Pasadena, TX","image":"../../../static/oweek/backgammon/Rolando.JPG"},{"name":"Sophie Marx","year":"Sophmore","major":"Cognitive Sciences","from":"Brooklyn, NY","image":"../../../static/oweek/backgammon/Sophie.JPG"},{"name":"Krithi Pachipala","year":"Sophmore","major":"Neuroscience, Social Policy Analysis","from":"The Woodlands, TX","image":"../../../static/oweek/backgammon/Krithi.JPG"},{"name":"Nathan McCoslin","year":"Sophmore","major":"Political Science","from":"Jewett, TX","image":"../../../static/oweek/backgammon/Nathan.JPG"}],"image":"../../../static/oweek/backgammon/backgammon_1.JPG"},{"name":"Battleship and Boujee","advisors":[{"name":"Hayden Mast","year":"Sophomore","major":"Mathematical Economic Analysis, Statistics","from":"Austin, TX","image":"../../../static/oweek/battleship/Hayden.JPG"},{"name":"Ellery Parish","year":"Junior","major":"Social Policy Analysis, Sociology","from":"San Antonio, TX","image":"../../../static/oweek/battleship/Ellery.JPG"},{"name":"Dara Okeremi","year":"Sophomore","major":"Bioengineering","from":"Houston, TX","image":"../../../static/oweek/battleship/Dara.JPG"},{"name":"Rohini Kumar","year":"Junior","major":"Neuroscience","from":"Austin, TX","image":"../../../static/oweek/battleship/Rohini.JPG"}],"image":"../../../static/oweek/battleship/Battleshipgroup.JPG"},{"name":"Captain Mancala","advisors":[{"name":"Kabir Sood","year":"Sophomore","major":"Economics","from":"Houston, TX","image":"../../../static/oweek/mancala/Kabir.JPG"},{"name":"Stoyan Kimitov","year":"Senior","major":"Computer Science","from":"Chicago, IL","image":"../../../static/oweek/mancala/Stoyan.JPG"},{"name":"Sohil Shah","year":"Sophomore","major":"Mathematical Economic Analysis","from":"Singapore","image":"../../../static/oweek/mancala/Sohil.JPG"},{"name":"Lupita Galvan Tinoco","year":"Senior","major":"Cognitive Science","from":"Austin, TX","image":"../../../static/oweek/mancala/Lupita.JPG"}],"image":"../../../static/oweek/mancala/Capatingroup.JPG"},{"name":"Dice Dice Baby","advisors":[{"name":"Dylan Nguyen","year":"Sophomore","major":"Social Policy Analysis","from":"Dallas, TX","image":"../../../static/oweek/dice/Dylan.JPG"},{"name":"Alexandra Lim","year":"Sophomore","major":"Undecided","from":"Vancouver, WA","image":"../../../static/oweek/dice/Alexandra.JPG"},{"name":"Natty Askanase","year":"Sophomore","major":"Sports Management, History","from":"New York, NY","image":"../../../static/oweek/dice/Natty.JPG"},{"name":"Robert Alexander","year":"Junior","major":"Cognitive Science","from":"Oakland, CA","image":"../../../static/oweek/dice/Robert.JPG"}],"image":"../../../static/oweek/dice/Dicegroup.JPG"},{"name":"Hollabackgammon Girl: This Is Bananas","advisors":[{"name":"Amy Mu","year":"Junior","major":"Kinesiology (Health Sciences)","from":"Johns Creek, GA","image":"../../../static/oweek/Hollabackgammon/Amy.JPG"},{"name":"Raymond Lau","year":"Senior","major":"Mechanical Engineering","from":"Las Vegas, NV","image":"../../../static/oweek/Hollabackgammon/Raymond.JPG"},{"name":"Hannah Boyd","year":"Sophomore","major":"Biochemistry","from":"Gaithersburg, MD","image":"../../../static/oweek/Hollabackgammon/Hannah.JPG"},{"name":"Stephanie Xie","year":"Junior","major":"Computer Science Cognitive Science","from":"Wilton, CT","image":"../../../static/oweek/Hollabackgammon/Stephanie.JPG"}],"image":"../../../static/oweek/Hollabackgammon/Hollabackgroup.JPG"},{"name":"Hungry Hungry Hippo Mode","advisors":[{"name":"Nneoma Ome","year":"Sophomore","major":"Bioengineering","from":"Sugar Land, TX","image":"../../../static/oweek/hippo/Nneoma.JPG"},{"name":"Jennifer Ho","year":"Junior","major":"Kinesiology, Health Sciences, Multiple Minors","from":"Tomball, TX","image":"../../../static/oweek/hippo/Jennifer.JPG"},{"name":"Emma Young","year":"Junior","major":"Mathematical Economic Analysis","from":"Social Analysis Brentwood, TN","image":"../../../static/oweek/hippo/Emma.JPG"},{"name":"Josh Verne","year":"Sophomore","major":"Computer Science","from":"Raleigh, NC","image":"../../../static/oweek/hippo/Josh.JPG"}],"image":"../../../static/oweek/hippo/Hungrygroup.JPG"},{"name":"The Jenga Book","advisors":[{"name":"Asli Yilmaz","year":"Senior","major":"Chemical & Biomolecular Engineering","from":"Houston, TX","image":"../../../static/oweek/jenga/Asli.JPG"},{"name":"Rishi Vas","year":"Junior","major":"Cognitive Science","from":"Dallas, TX","image":"../../../static/oweek/jenga/Rishi.JPG"},{"name":"Natalie Festa","year":"Sophomore","major":"Anthropology Economics","from":"Houston, TX","image":"../../../static/oweek/jenga/Natalie.JPG"},{"name":"Ben Harris","year":"Junior","major":"Computer Science","from":"Charlottesville, VA","image":"../../../static/oweek/jenga/Ben.JPG"}],"image":"../../../static/oweek/jenga/Jengagroup.JPG"},{"name":"La La Candyland","advisors":[{"name":"Caleb Robinson","year":"Sophomore","major":"Physics, Mathematics","from":"Hattiesburg, MS","image":"../../../static/oweek/candyland/Caleb.JPG"},{"name":"Jane Clinger","year":"Senior","major":"Psychology","from":"Alexandria, VA","image":"../../../static/oweek/candyland/Jane.JPG"},{"name":"Aaron Pathak","year":"Sophomore","major":"Social Policy Analysis","from":"Dallas, TX","image":"../../../static/oweek/candyland/Aaron.JPG"},{"name":"Akshaya Venkatesh","year":"Sophomore","major":"Cognitive Science","from":"Los Angeles, CA","image":"../../../static/oweek/candyland/Akshaya.JPG"}],"image":"../../../static/oweek/candyland/Lalagroup.JPG"},{"name":"Lil’ Yahtzee","advisors":[{"name":"Alex Lammers","year":"Sophomore","major":"Bioengineering","from":"Tecumseh, Michigan","image":"../../../static/oweek/yahtzee/Alex.JPG"},{"name":"Tatyanna Epps","year":"Sophomore","major":"Sociology","from":"Temple, TX","image":"../../../static/oweek/yahtzee/Tatyanna.JPG"},{"name":"Sachi Khemka","year":"Sophomore","major":"Biological Sciences","from":"Katy, TX","image":"../../../static/oweek/yahtzee/Sachi.JPG"},{"name":"Grant Lu","year":"Senior","major":"Bioengineering","from":"Houston, TX","image":"../../../static/oweek/yahtzee/Grant.JPG"}],"image":"../../../static/oweek/yahtzee/Lilgroup.JPG"},{"name":"Panic at the Risk-O","advisors":[{"name":"Sean McCormick","year":"Junior","major":"English, Business","from":"Houston, TX","image":"../../../static/oweek/risko/Sean.JPG"},{"name":"Callie Carnahan","year":"Sophomore","major":"History","from":"Washington D.C.","image":"../../../static/oweek/risko/Callie.JPG"},{"name":"Lily Cao","year":"Junior","major":"Psychology, Managerial Studies","from":"Friendswood, TX","image":"../../../static/oweek/risko/Lily.JPG"},{"name":"Steven Feng","year":"Sophomore","major":"Mathematical Economic Analysis","from":"Parsippany, NJ","image":"../../../static/oweek/risko/Steven.JPG"}],"image":"../../../static/oweek/risko/Panicgroup.JPG"},{"name":"Schoolboy Clue: Collard Mr. Green","advisors":[{"name":"Sue Kim","year":"Senior","major":"Computer Science, Statistics","from":"Seattle, WA","image":"../../../static/oweek/clue/Sue.JPG"},{"name":"AJ Valenty","year":"Sophomore","major":"Computer Science","from":"Austin, TX","image":"../../../static/oweek/clue/AJ.JPG"},{"name":"Meheret Adera","year":"Sophomore","major":"Kinesiology (Health Sciences), Global Health Technologies","from":"Dallas, TX","image":"../../../static/oweek/clue/Meheret.JPG"},{"name":"Sai Sriram","year":"Junior","major":"Computer Science, Neuroscience","from":"Tampa, FL","image":"../../../static/oweek/clue/Sai.JPG"}],"image":"../../../static/oweek/clue/Schoolboygroup.JPG"},{"name":"UNO Mars: Draw 24k Magic","advisors":[{"name":"Eitan Woloski","year":"Junior","major":"Physics","from":"McAllen, TX","image":"../../../static/oweek/uno/Eitan.JPG"},{"name":"Valerie Kass","year":"Senior","major":"Civil and Environmental Engineering, Politics, Law, and Social Thought","from":"Washington D.C.","image":"../../../static/oweek/uno/Valerie.JPG"},{"name":"Catherine Hettler","year":"Sophomore","major":"Psychology, Visual and Dramatic Arts, Neuroscience","from":"South Korea/San Antonio, TX","image":"../../../static/oweek/uno/Catherine.JPG"},{"name":"Shaquille Que","year":"Sophomore","major":"Computer Science","from":"Quezon City, Philippines","image":"../../../static/oweek/uno/Shaquille.JPG"}],"image":"../../../static/oweek/uno/UNOgroup.JPG"}]};

/***/ }),

/***/ "RQmk":
/***/ (function(module) {

module.exports = {"a":[{"name":"About the theme","link":"/oweek/theme"},{"name":"Meet the Coords","link":"/oweek/coords"},{"name":"O-Week Groups","link":"/oweek/oweekgroups"},{"name":"Move-In Info","link":"/oweek/movein"},{"name":"Tour of McMurtry","link":"/oweek/mcmtour"},{"name":"Your Room","link":"/oweek/yourroom"},{"name":"O-Week Book","link":"/oweek/oweekbook"},{"name":"Contact Info","link":"/oweek/oweekcontact"}]};

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