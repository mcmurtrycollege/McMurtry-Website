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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ "0YTE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("svza");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.3, 0.3, 0.2],
    ml: "auto",
    mr: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/crest.svg",
    alt: "McMurtry College"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "McMurtry College \xB7 MS 761 \xB7 Rice University"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "1605 Rice Blvd. \xB7 Houston, TX 77005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Phone: (713) 348-4583 \xB7 Fax: (713) 348-3135"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Email: mcmurtry@rice.edu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Copyright \xA9 McMurtry College, 2019"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eL0o");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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

/***/ "Bs9k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Qqc9");
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contactcards_css__WEBPACK_IMPORTED_MODULE_2__);




var Card = function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "position-card",
    width: props.width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact-card-content",
    style: {
      height: props.height
    }
  }, props.position !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "position"
  }, props.position) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "name"
  }, props.name), props.phone !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "contact-phone"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/call/422a4C/16",
    alt: "Phone: "
  }), ' ', props.phone) : null, props.email !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(props.email),
    className: "link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "contact-email"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/arrow/422a4C/8",
    alt: "Email: "
  }), ' ', props.email)) : null, props.year !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "year"
  }, "Year: ", props.year) : null, props.major !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "major"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/school/2B2F3A/16",
    alt: "Major: "
  }), " ", props.major) : null, props.subjects !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subjects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/local_library/2B2F3A/16",
    alt: "Subjects: "
  }), " ", props.subjects) : null, props.room !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "room"
  }, "Room: ", props.room) : null));
};

var Cards = function Cards(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 0.9, 0.8],
    ml: "auto",
    mr: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  }, props.content.map(function (_ref) {
    var position = _ref.position,
        name = _ref.name,
        year = _ref.year,
        email = _ref.email,
        phone = _ref.phone,
        major = _ref.major,
        subjects = _ref.subjects,
        room = _ref.room;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      height: props.height,
      width: props.width,
      key: name,
      position: position,
      name: name,
      year: year,
      email: email,
      phone: phone,
      major: major,
      subjects: subjects,
      room: room
    });
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Cards);

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

/***/ "NHen":
/***/ (function(module, exports) {



/***/ }),

/***/ "PNk+":
/***/ (function(module) {

module.exports = {"a":[{"name":"About","subheaders":[{"name":"About","to":"/about"},{"name":"Finacial Inclusivity","to":"/about/financialinclusivity"}]},{"name":"Events","subheaders":[{"name":"Calendar","to":"/events/calendar"},{"name":"Arts Calendar","to":"/events/artevents"}]},{"name":"People","subheaders":[{"name":"McTeam","to":"/people/mcteam"},{"name":"McMinistry","to":"/people/mcministry"},{"name":"Court","to":"/people/court"},{"name":"Committees","to":"/people/committees"},{"name":"Associates","to":"/people/associates"},{"name":"Divisional Advisors","to":"/people/divisionaladvisors"},{"name":"Peer Academic Advisors","to":"/people/paas"},{"name":"Academic Fellows","to":"/people/academicfellows"},{"name":"RHAs","to":"/people/rhas"},{"name":"Strive Liaisons","to":"/people/striveliaisons"}]},{"name":"Resources","subheaders":[{"name":"Room Reservations","to":"/resources/roomreservations"},{"name":"MIS","to":"/resources/mis"},{"name":"Documents","to":"/resources/documents"},{"name":"Expense Forms","to":"/resources/expenseforms"},{"name":"Work Orders","to":"/resources/workorders"},{"name":"Initiative Requests","to":"/resources/initiativerequests"}]}]};

/***/ }),

/***/ "Qqc9":
/***/ (function(module, exports) {



/***/ }),

/***/ "RUXa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WPwg");
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_css__WEBPACK_IMPORTED_MODULE_2__);




var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: props.width,
    ml: "auto",
    mr: "auto",
    className: "title-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-theme"
  }, props.title)));
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

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

/***/ "WPwg":
/***/ (function(module, exports) {



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

/***/ "e02a":
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
/* harmony import */ var _navbarMobile_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tKOv");
/* harmony import */ var _navbarMobile_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbarMobile_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("PNk+");
var _navbar_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("PNk+", 1);












var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Navbar).call(this, props));
    _this.state = {
      hidden: true,
      subheader: null
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.showSubheader = _this.showSubheader.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.closeSubheader = _this.closeSubheader.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
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
    key: "showSubheader",
    value: function showSubheader(index) {
      this.setState({
        subheader: index
      });
    }
  }, {
    key: "closeSubheader",
    value: function closeSubheader() {
      this.setState({
        subheader: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mainHeaders = [];
      var menus = [];
      var hidden = this.state.hidden ? {
        left: '100%'
      } : {
        left: 0
      };

      var _loop = function _loop(i) {
        mainHeaders.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "main-header",
          key: _navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_headers */ "a"][i].name
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.showSubheader(i);
          }
        }, _navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_headers */ "a"][i].name)));
        menus.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: _this2.state.subheader === i ? 'subheader-display' : 'subheader-hidden',
          key: "".concat(_navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_headers */ "a"][i].name, "-menu")
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: _this2.closeSubheader,
          className: "subheader-back"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "\u2190 Back")), _navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_headers */ "a"][i].subheaders.map(function (_ref) {
          var name = _ref.name,
              to = _ref.to;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: to,
            key: name
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "subheader-item"
          }, name));
        })));
      };

      for (var i = 0; i < _navbar_json__WEBPACK_IMPORTED_MODULE_10__[/* navbar_headers */ "a"].length; i++) {
        _loop(i);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "fixed-mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "show-navbar",
        src: "https://icon.now.sh/burger/515768/30",
        alt: "Menu",
        onClick: this.toggleNavbar
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-crest-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "../static/logo.svg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "McMurtry College")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mobile-navbar",
        style: hidden
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-menu"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "close-navbar",
        src: "https://icon.now.sh/x/DCDFE5/25",
        alt: "X",
        onClick: this.toggleNavbar
      }), mainHeaders), menus));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "eL0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/general/header.js
var header = __webpack_require__("AM0r");

// EXTERNAL MODULE: ./components/navbar/navbarDesktop.js
var navbarDesktop = __webpack_require__("ivdq");

// EXTERNAL MODULE: ./components/navbar/navbarMobile.js
var navbarMobile = __webpack_require__("e02a");

// EXTERNAL MODULE: ./components/general/footer/footer.js
var footer = __webpack_require__("0YTE");

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

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/general/contactcards.js
var contactcards = __webpack_require__("Bs9k");

// EXTERNAL MODULE: ./components/general/title.js
var title = __webpack_require__("RUXa");

// EXTERNAL MODULE: ./components/people/committees/committees.json
var committees = __webpack_require__("jbS2");

// EXTERNAL MODULE: ./components/people/committees/committees.css
var committees_committees = __webpack_require__("z6qu");

// CONCATENATED MODULE: ./components/people/committees/committees.js












var divisions = [committees["b" /* internal */], committees["a" /* external */], committees["c" /* social */]];
var division_names = ["Internal Committees", "External Committees", "Social Committees"];

var committees_Committees =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Committees, _React$Component);

  function Committees(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Committees);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Committees).call(this, props));
    _this.state = {
      division: 0,
      committee: 0
    };
    _this.changeDivision = _this.changeDivision.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeCommittee = _this.changeCommittee.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Committees, [{
    key: "changeDivision",
    value: function changeDivision(index) {
      this.setState({
        division: index,
        committee: 0
      });
    }
  }, {
    key: "changeCommittee",
    value: function changeCommittee(index) {
      this.setState({
        committee: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "committee-page"
      }, external_react_default.a.createElement(title["a" /* default */], {
        width: 280,
        title: "Committees"
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_rebass_["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row"
      }, division_names.map(function (division) {
        return external_react_default.a.createElement(external_rebass_["Box"], {
          key: division
        }, external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeDivision(division_names.indexOf(division));
          },
          className: _this2.state.division === division_names.indexOf(division) ? "active-division" : "inactive-division"
        }, external_react_default.a.createElement("p", {
          className: "division-key"
        }, "".concat(division))));
      }))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_rebass_["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row"
      }, divisions[this.state.division].map(function (committee) {
        return external_react_default.a.createElement(external_rebass_["Box"], {
          key: committee.name
        }, external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.changeCommittee(divisions[_this2.state.division].indexOf(committee));
          },
          className: _this2.state.committee === divisions[_this2.state.division].indexOf(committee) ? "active-committee" : "inactive-committee"
        }, external_react_default.a.createElement("p", {
          className: "committee-key"
        }, committee.name)));
      }))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_rebass_["Box"], {
        width: [0.9, 0.7, 0.6, 0.5],
        ml: "auto",
        mr: "auto",
        className: "committee-description"
      }, external_react_default.a.createElement("h1", {
        className: "division-title"
      }, divisions[this.state.division][this.state.committee].name), divisions[this.state.division][this.state.committee].description), external_react_default.a.createElement(contactcards["a" /* default */], {
        content: divisions[this.state.division][this.state.committee].members,
        height: 110,
        width: 240
      })));
    }
  }]);

  return Committees;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/general/page.css
var page = __webpack_require__("NHen");

// CONCATENATED MODULE: ./pages/people/committees.js








var committees_CommitteesPage = function CommitteesPage() {
  return external_react_default.a.createElement("div", {
    className: "page"
  }, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(navbarDesktop["a" /* default */], null), external_react_default.a.createElement(navbarMobile["a" /* default */], null), external_react_default.a.createElement(committees_Committees, null), external_react_default.a.createElement(footer["a" /* default */], null));
};

/* harmony default export */ var people_committees = __webpack_exports__["default"] = (committees_CommitteesPage);

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

/***/ "ivdq":
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
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("PNk+");
var _navbar_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("PNk+", 1);
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("sllQ");
/* harmony import */ var _NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NavbarDesktop_css__WEBPACK_IMPORTED_MODULE_10__);












var NavbarDesktop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NavbarDesktop, _React$Component);

  function NavbarDesktop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NavbarDesktop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NavbarDesktop).call(this, props));
    _this.state = {
      permanent: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NavbarDesktop, [{
    key: "handleScroll",
    value: function handleScroll() {
      this.setState({
        permanent: window.scrollY > 0
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
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.state.permanent ? {
        backgroundColor: "#515768"
      } : {
        paddingTop: '15px',
        paddingBottom: '15px',
        color: "#515768",
        backgroundColor: "#DCDFE5"
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-wrapper",
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-crest"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "../static/logo.svg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "McMurtry College"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-catagories"
      }, _navbar_json__WEBPACK_IMPORTED_MODULE_9__[/* navbar_headers */ "a"].map(function (_ref) {
        var name = _ref.name,
            subheaders = _ref.subheaders;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "navbar-category",
          key: name
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "navbar-dropdown-opener"
        }, name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "dropdown-subheaders"
        }, subheaders.map(function (_ref2) {
          var name = _ref2.name,
              to = _ref2.to;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: to,
            key: name
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, name));
        })));
      })));
    }
  }]);

  return NavbarDesktop;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NavbarDesktop);

/***/ }),

/***/ "jbS2":
/***/ (function(module) {

module.exports = {"b":[{"name":"Website","description":"The Website Committee works on developing and updating the McMurtry Website.","members":[{"name":"Nicholas Meisburger","year":"2022","email":"ncm5@rice.edu"},{"name":"Shaquille Que","year":"2022","email":"stq1@rice.edu"},{"name":"Chatham Abate","year":"2021","email":"caa8@rice.edu"},{"name":"Melodi Doganay","year":"2022","email":"mnd2@rice.edu"},{"name":"Parth Parulekar","year":"2022","email":"psp3@rice.edu"}]},{"name":"Amenities","description":"The Amenities Committee is responsible for the improvement and upkeep of the public spaces (such as the lounges, TV room, game room, outside on 5th Floor, and hang-out area in the Commons) throughout McMurtry. Each member of our committee is in charge of managing one space - and we’re open to any suggestions! We focus on creating a pleasant atmosphere throughout the college with rooms and amenities all students can utilize. The Amenities Committee strives to implement long-lasting enhancements that can be enjoyed by Murts for years to come!","members":[{"name":"Mac Carr","year":"2022","email":"@rice.edu"}]},{"name":"Environmental","description":"The Environmental Committee exists at McMurtry to keep the college's effect on Earth in the minds of every Murt. This committee aims to help raise awareness about the little things that everyone can do to reduce the college's overall environmental impact.","members":[{"name":"Sachi Paul","year":"2021","email":"sp57@rice.edu"}]},{"name":"Food and Kitchens","description":"We serve as your liaisons between the college and the West Servery chefs and also plan food for FIT-Qs!","members":[{"name":"An Luu","year":"2022","email":"ahl4@rice.edu"}]},{"name":"Tech","description":"The Technology Committee is responsible for everything from maintaining our computer lab to all of the A/V equipment in the Commons and PDR and this very website. The roles on this committee include Director of Technology, Webmaster, Computer Lab Associate, and Technology Associate.","members":[{"name":"Rachel Moore","year":"2022","email":"mcmurtrytech@gmail.com"}]},{"name":"Arts","description":"The Arts committee is dedicated to hosting quality shows at McMurtry centered around all types of performing arts. Including talent shows and theatre productions, we want to facilitate the creativity of students at McMurtry and help each and every one on their journey of discovery in the arts world.","members":[{"name":"Em Echeverria","year":"2021","email":"ese3@rice.edu"}]},{"name":"MIS Liaison","description":"Manages MIS and serves as liaison with IVP.","members":[{"name":"Grant Lu","year":"2021","email":"gwl3@rice.edu"}]}],"a":[{"name":"Alumni","description":"Wondering how McMurtry alumni keep in touch with the best college at Rice? Look no further than the Alumni Committee. Our committee sends out a newsletter each semester during the school year to all McMurtry alums, updating them on what's going on at Rice and McMurtry. We also plan events at McMurtry that include alumni such as during Homecoming, McMurtry Day, and Beer Bike! Our goals are to reach out to the young, enthusiastic classes that just graduated our college and get them involved in making McMurtry's culture amazing.","members":[{"name":"Lily Cao","year":"2020","email":"ljc4@rice.edu"},{"name":"Lauren Loh","year":"2020","email":"lsl3@rice.edu"}]},{"name":"Associates","description":"The Associates Committee serves as a liaison between McMurtry's students and associates. McMurtry associates are Rice faculty as well as adult professionals in the Houston area who are associated with Rice. They serve as mentors, friends, academic advisers, and general resources for students. The Associates Committee hosts intellectual events, monthly lunches, study breaks, holiday events, and a formal Associates' Night each semester. The committee also organizes O-week group lunches with associates, as well as a pre-O-week reception and dinner.","members":[{"name":"Katherine Bartos","year":"2022","email":"keb17@rice.edu"},{"name":"Isabel Sjodin","year":"2022","email":"ijs1@rice.edu"},{"name":"Akshaya Venkatesh","year":"2022","email":"av54@rice.edu"}]},{"name":"IM Sports","description":"The Intramural Sports committee serves several athletics-related roles, with the most important being getting Murts involved! By serving as liaison between McMurtry and IMS (the rec center), the sports committee works to promote both college and intramural sports, help people sign up, and represent McMurtry to IMS. Committee members also work with powerpuff (yay powderpuff!), work to get competing Murts in legit athletic swag, and generally love sports themselves.","members":[{"name":"Hannah Boyd","year":"2022","email":"hrb3@rice.edu"}]},{"name":"Philanthropy","description":"Enjoy volunteering but not sure you can make a long-term commitment? Want to spend time with other students while making an impact? Want to pick one non-profit with which you can make an impact for 4 years? The Philanthropy Committee encourages student engagement in the community and supports Houston organizations by organizing fun service opportunities both on and off campus throughout the year. We also partner with other colleges and the Rice Service Council to coordinate large-scale events.","members":[{"name":"Anna Girardeau","year":"","email":"arg10@rice.edu"},{"name":"Jennifer Ho","year":"","email":"jh86@rice.edu"},{"name":"Sana Mohamed","year":"","email":"sam22@rice.edu"}]},{"name":"Murtchandise","description":"The Murtchandise committee is responsible for the design and procurement of McMurtry merchanise.","members":[{"name":"Melodi Doganay","year":"2022","email":"mnd2@rice.edu"},{"name":"Kaitlan Easley","year":"2022","email":"kde4@rice.edu"},{"name":"Elena Margolin","year":"2022","email":"erm7@rice.edu"}]},{"name":"Traditions","description":"The traditions committee is the link between current McMurtry and our past. They keep track of McMurtry history through photos, scrapbooks, articles, and the Rice archives. Even more than just recording the college history, they are capturing the history of each and every Murt student, so know one ever forgets their McMurtry experience.","members":[{"name":"Mac Carr","year":"2022","email":"mac28@rice.edu"},{"name":"Rachel Moore","year":"2022","email":"rcm7@rice.edu"},{"name":"Kelsey Sanders","year":"2020","email":"kns4@rice.edu"}]}],"c":[{"name":"External Socials","description":"External Socials are simply put, very very social. We plan events that feature Murts interacting with other colleges, including McMurtry's public party and Pub night. Our goal is to create activities that every Murt would love to participate in and to find ways to make sure every member of our college feels connected to the community by simply doing FUN STUFF. We are always ready to hear any input that anyone might have, and we cannot wait to make this an amazing year!","members":[{"name":"Benjamin Collier","year":"2022","email":"blc5@rice.edu"},{"name":"George Huang","year":"2022","email":"gih@rice.edu"},{"name":"Rachel Moore","year":"2022","email":"rcm7@rice.edu"},{"name":"Alyson Resnick","year":"2022","email":"amr21@rice.edu"},{"name":"Isabel Sjodin","year":"2022","email":"ijs1@rice.edu"}]},{"name":"Internal Socials","description":"The Internal Socials committee - a group dedicated to fostering McMurtry spirit, bonding, and fun. But more importantly we’re dedicated to keeping McMurtry to as little studying as possible. The committee puts on various social events throughout the year including, but not limited to board game and movie nights, Fridays in the Quad, social mixer events and McSkate.","members":[{"name":"Aruni Areti","year":"2022","email":"asa12@rice.edu"},{"name":"Natty Askanase","year":"2022","email":"nda1@rice.edu"},{"name":"Sophie Marx","year":"2022","email":"shm7@rice.edu"},{"name":"Giovanni Pecchio","year":"2022","email":"gp30@rice.edu"}]},{"name":"Beer Bike","description":"Beer Bike. Some say it's the best day of the year. Others say it's the best day of their lives (with the exception of the other Beer Bikes they were fortunate enough to attend). The Beer Bike Committee is in charge of making this monumentous day a reality for all of McMurtry to enjoy. Whether it be assisting the Biking or Chugging Teams, organizing water balloon filling, or rounding people up for an epic jack on… Duncan (of course) – there is something for everyone (including new students) to do!","members":[{"name":"Jonathan Bloom","year":"2021","email":"jsb8@rice.edu"},{"name":"Alex Curylo","year":"2021","email":"alc10@rice.edu"},{"name":"Emily Duffus","year":"2021","email":"ekd2@rice.edu"},{"name":"Augi Liebster","year":"2021","email":"adl5@rice.edu"}]},{"name":"Burts","description":"The Burts committee is dedicated to putting on quirky, intellectual events in our unique Burt’s Lounge! Anyone is always welcome to our tea breaks, faculty-hosted talks, or just to hang out!","members":[{"name":"Krishna Chandra","year":"2022","email":"kc60@rice.edu"},{"name":"Julia Robinson","year":"2021","email":"jmr18@rice.edu"},{"name":"Sam Rossum","year":"2020","email":"sdr5@rice.edu"}]},{"name":"Culturals","description":"The McMurtry Cultural Committee exists to engage students in the diversity of the Houston community. Currently, Culturals subsidizes ethnic restaurants along the METRO-rail, provides themed study breaks, and is responsible for the college Hookah, amongst other fascinating cultural things. The committee also facilitates opportunities for free events and shows in Houston through a liaison with RPC. Here mostly to provide McMurtry with free food and concerts, the Cultural Committee ensures McMurtry is never short of fun things to do both within and beyond the hedges.","members":[{"name":"Mariana Najera","year":"","email":"mn39@rice.edu"},{"name":"Tyler Sakakeeny","year":"2021","email":"tcs9@rice.edu"}]}]};

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

/***/ "sllQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "svza":
/***/ (function(module, exports) {



/***/ }),

/***/ "tKOv":
/***/ (function(module, exports) {



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

/***/ }),

/***/ "z6qu":
/***/ (function(module, exports) {



/***/ })

/******/ });