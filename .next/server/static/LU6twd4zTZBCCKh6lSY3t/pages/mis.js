module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Pf9":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "1/J2":
/***/ (function(module, exports) {



/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ixxd");


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

/***/ "Gokf":
/***/ (function(module, exports) {



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

/***/ "L5GA":
/***/ (function(module, exports) {



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

/***/ "Paim":
/***/ (function(module, exports) {



/***/ }),

/***/ "R+Of":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Gokf");
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_css__WEBPACK_IMPORTED_MODULE_2__);




var Title = function Title(props) {
  return (// <div className='title-container'>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: props.width,
      ml: "auto",
      mr: "auto",
      className: "title-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: props.smallText ? 'title-theme2' : 'title-theme1'
    }, props.title)))
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Title); // style={{width: props.width}}

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

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "utf-8"
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    href: "%PUBLIC_URL%/manifest.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "McMurtry College"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gJ/y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/navbar/navbar.css
var navbar = __webpack_require__("nzDO");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/mcmLogo.css
var mcmLogo = __webpack_require__("Paim");

// CONCATENATED MODULE: ./components/mcmLogo.js





var mcmLogo_McmLogo = function McmLogo() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "mcm-crest",
    id: "mcm-header"
  }, external_react_default.a.createElement(external_rebass_["Box"], {
    width: [0.7, 0.5, 0.5, 0.3],
    ml: "auto",
    mr: "auto",
    pt: 0.1,
    className: "mcm-crest-link"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement(external_rebass_["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })))));
};

/* harmony default export */ var components_mcmLogo = (mcmLogo_McmLogo);
// CONCATENATED MODULE: ./components/navbar/navbar_content.js
var navbar_items = [{
  header: "About",
  dropDownChildren: [{
    subheader: "About",
    to: "/about"
  }, {
    subheader: "Financial Inclusivity",
    to: "/financialinclusivity"
  }]
}, {
  header: "Events",
  dropDownChildren: [{
    subheader: "Events",
    to: "/events"
  }, {
    subheader: "Art Calender",
    to: "/artevents"
  }]
}, {
  header: "Leadership",
  dropDownChildren: [{
    subheader: "McTeam",
    to: "/mcteam"
  }, {
    subheader: "McMinistry",
    to: "/mcministry"
  }, {
    subheader: "Court",
    to: "/court"
  }, {
    subheader: "Committees",
    to: "/committees"
  }, {
    subheader: "Associates",
    to: "/associates"
  }]
}, {
  header: "Academics",
  dropDownChildren: [{
    subheader: "Divisional Advisors",
    to: "/divisionaladvisors"
  }, {
    subheader: "Peer Academic Advisors",
    to: "/paas"
  }, {
    subheader: "Academic Fellows",
    to: "/academicfellows"
  }]
}, {
  header: "Wellbeing",
  dropDownChildren: [{
    subheader: "Rice Health Advisors",
    to: "/RHAs"
  }, {
    subheader: "Strive Liasons",
    to: "/striveliaisons"
  }]
}, {
  header: "O-Week",
  dropDownChildren: [{
    subheader: "Pixar Studio Week",
    href: 'https://mcmurtryoweek.wixsite.com/home-page'
  }]
}, {
  header: "Resources",
  dropDownChildren: [{
    subheader: "Room Reservations",
    to: "/roomreservations"
  }, {
    subheader: "The MIS",
    to: "/mis"
  }, {
    subheader: "Documents",
    to: "/documents"
  }, {
    subheader: "Expense Forms",
    to: "/expenseforms"
  }, {
    subheader: "McMurtry Resources",
    to: "/mcmresources"
  }, {
    subheader: "Work Orders",
    to: '/workorders'
  }, {
    subheader: "Equipment",
    to: '/equipment'
  }, {
    subheader: "Initiative Requests",
    to: '/initiativerequests'
  }]
}, {
  header: "Contact",
  headerTo: "/contact",
  dropDownChildren: []
}];
/* harmony default export */ var navbar_content = (navbar_items);
// CONCATENATED MODULE: ./components/navbar/navbar.js












var navbar_DropDownWide = function DropDownWide(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item",
    onMouseEnter: props.handleMouseEnter,
    onMouseLeave: props.handleMouseLeave,
    style: {
      width: '10%'
    }
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)) : external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref) {
    var subheader = _ref.subheader,
        to = _ref.to,
        href = _ref.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_DropDownNarrow = function DropDownNarrow(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item"
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick
  }, props.header)) : external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick
  }, props.header, '      ', external_react_default.a.createElement("img", {
    className: "arrow",
    style: props.expanded ? {
      transform: 'rotate(90deg)'
    } : {},
    src: "https://icon.now.sh/chevron/2B2F3A/10",
    alt: ">"
  }))), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref2) {
    var subheader = _ref2.subheader,
        to = _ref2.to,
        href = _ref2.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavBar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBar).call(this, props));
    var headerStates = [];

    for (var i = 0; i < props.dropDownItems.length; i++) {
      headerStates.push(false);
    }

    _this.state = {
      closed: true,
      fixedNavbar: false,
      headerStates: headerStates
    };
    _this.showSubheader = _this.showSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.hideSubheader = _this.hideSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleSubheader = _this.toggleSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.scrollHandler = _this.scrollHandler.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(NavBar, [{
    key: "showSubheader",
    value: function showSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = true;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "hideSubheader",
    value: function hideSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = false;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleSubheader",
    value: function toggleSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = !this.state.headerStates[indx];
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      if (window.scrollY > document.getElementById('mcm-header').clientHeight) {
        this.setState({
          fixedNavbar: true
        });
      } else {
        this.setState({
          fixedNavbar: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var narrowNavBarStyle = {};
      var burgerStyle = {
        transition: 'transform 0.2s ease-in-out'
      };

      if (this.state.closed) {
        narrowNavBarStyle.maxHeight = '0px';
      } else {
        narrowNavBarStyle.maxHeight = '1000px';
        burgerStyle.transform = 'rotate(90deg)';
      }

      var fixedNavbar = {};

      if (this.state.fixedNavbar) {
        fixedNavbar.position = 'fixed';
        fixedNavbar.marginTop = "-".concat(document.getElementById('mcm-header').clientHeight + 0, "px");
      }

      var wideNavbar = [];
      var narrowNavbar = [];

      var _loop = function _loop(k) {
        var item = _this2.props.dropDownItems[k];
        wideNavbar.push(external_react_default.a.createElement(navbar_DropDownWide, {
          handleMouseEnter: function handleMouseEnter() {
            return _this2.showSubheader(k);
          },
          handleMouseLeave: function handleMouseLeave() {
            return _this2.hideSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header)
        }));
        narrowNavbar.push(external_react_default.a.createElement(navbar_DropDownNarrow, {
          handleClick: function handleClick() {
            return _this2.toggleSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header)
        }));
      };

      for (var k = 0; k < this.props.dropDownItems.length; k++) {
        _loop(k);
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "navbar-crest"
      }, external_react_default.a.createElement(components_mcmLogo, null)), external_react_default.a.createElement("div", {
        className: "wide-navbar",
        style: fixedNavbar
      }, external_react_default.a.createElement("div", {
        className: "filler-box"
      }), wideNavbar, external_react_default.a.createElement("div", {
        className: "filler-box"
      })), external_react_default.a.createElement("div", {
        className: "narrow-navbar"
      }, external_react_default.a.createElement("div", {
        className: "narrow-navbar-toggle"
      }, external_react_default.a.createElement("img", {
        style: burgerStyle,
        onClick: this.toggleNavbar,
        src: "https://icon.now.sh/burger/2B2F3A/24",
        alt: "burger"
      })), external_react_default.a.createElement(components_mcmLogo, null), external_react_default.a.createElement("div", {
        className: "narrow-navbar-menu",
        style: narrowNavBarStyle
      }, narrowNavbar)));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

var navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(navbar_NavBar, {
    dropDownItems: navbar_content
  }));
};

/* harmony default export */ var navbar_navbar = __webpack_exports__["a"] = (navbar_Navbar);

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

/***/ "ixxd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: ./components/navbar/navbar.js + 2 modules
var navbar = __webpack_require__("gJ/y");

// EXTERNAL MODULE: ./components/footer/footer.js
var footer = __webpack_require__("rCDY");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/title.js
var title = __webpack_require__("R+Of");

// EXTERNAL MODULE: ./components/navbar headers/resources/mis/mis.css
var mis = __webpack_require__("+Pf9");

// EXTERNAL MODULE: ./components/navbar headers/resources/mis/mis.json
var mis_mis = __webpack_require__("jtKy");

// CONCATENATED MODULE: ./components/navbar headers/resources/mis/mis.js




 // import mis_safety from '../../../../static/mis_safety.pdf';

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

var mis_McmInovationSpace = function McmInovationSpace() {
  return external_react_default.a.createElement("div", {
    className: "mis-page"
  }, external_react_default.a.createElement(title["a" /* default */], {
    width: 350,
    title: "McMurtry Innovation Space",
    smallText: true
  }), external_react_default.a.createElement(external_rebass_["Box"], {
    className: "mis-paragraphs",
    width: [1, 0.8, 0.7, 0.6],
    ml: "auto",
    mr: "auto"
  }, mis_mis["a" /* content */].map(function (paragraph) {
    return external_react_default.a.createElement("p", {
      key: mis_mis["a" /* content */].indexOf(paragraph)
    }, paragraph);
  })), external_react_default.a.createElement(external_rebass_["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row"
  }, MISLinks.map(function (_ref) {
    var text = _ref.text,
        icon = _ref.icon,
        link = _ref.link;
    return external_react_default.a.createElement(external_rebass_["Box"], {
      width: 250,
      className: "mis-info",
      style: {
        margin: '2%'
      }
    }, external_react_default.a.createElement("a", {
      href: link,
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
      src: "".concat(icon, "//2B2F3A/90"),
      alt: ""
    }), external_react_default.a.createElement("h2", {
      className: "mis-link"
    }, text, icon === "https://icon.now.sh/email" ? external_react_default.a.createElement("p", {
      style: {
        fontSize: '0.5em'
      }
    }, "mcminnovationspace@gmail.com") : undefined))));
  })), external_react_default.a.createElement(external_rebass_["Box"], {
    width: [1, 0.7],
    pb: 20,
    ml: "auto",
    mr: "auto",
    className: "schedule-box"
  }, external_react_default.a.createElement(external_rebass_["Box"], {
    width: [0.4, 0.25],
    className: "subtitle",
    ml: "auto",
    mr: "auto"
  }, external_react_default.a.createElement("h2", null, "Hours")), external_react_default.a.createElement(external_rebass_["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row"
  }, mis_mis["b" /* hours */].map(function (_ref2) {
    var day = _ref2.day,
        hours = _ref2.hours;
    return external_react_default.a.createElement(external_rebass_["Box"], {
      width: 150,
      className: "schedule",
      key: "".concat(day)
    }, external_react_default.a.createElement("h2", {
      className: "schedule-item"
    }, day), external_react_default.a.createElement("h2", {
      className: "schedule-item",
      style: {
        fontWeight: 'normal'
      }
    }, hours));
  }))), external_react_default.a.createElement(external_rebass_["Box"], {
    width: [0.7, 0.2],
    className: "subtitle",
    ml: "auto",
    mr: "auto"
  }, external_react_default.a.createElement("h2", null, "Student Personnel")), external_react_default.a.createElement(external_rebass_["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  }, mis_mis["c" /* personnel */].map(function (_ref3) {
    var name = _ref3.name,
        major = _ref3.major,
        college = _ref3.college,
        email = _ref3.email,
        askMeAbout = _ref3.askMeAbout;
    return external_react_default.a.createElement(external_rebass_["Box"], {
      width: [0.9, 0.3],
      className: "mis-contact-card",
      key: "".concat(name)
    }, external_react_default.a.createElement("div", {
      className: "mis-contact"
    }, external_react_default.a.createElement("h2", {
      className: "mis-name"
    }, name), external_react_default.a.createElement("h2", {
      className: "mis-major"
    }, "Major: ", major), external_react_default.a.createElement("h2", {
      className: "mis-college"
    }, "College: ", college), external_react_default.a.createElement("a", {
      href: "mailto:".concat(email),
      style: {
        textDecoration: 'none'
      }
    }, external_react_default.a.createElement("h2", {
      className: "mis-email"
    }, external_react_default.a.createElement("img", {
      src: "https://icon.now.sh/arrow/2B2F3A/10",
      alt: ""
    }), ' ', email)), external_react_default.a.createElement("h2", {
      className: "mis-askMeHeader"
    }, "Ask Me About:"), external_react_default.a.createElement("p", {
      className: "mis-askMeAbout"
    }, askMeAbout)));
  })));
};

/* harmony default export */ var resources_mis_mis = (mis_McmInovationSpace);
// EXTERNAL MODULE: ./pages/page.css
var page = __webpack_require__("L5GA");

// CONCATENATED MODULE: ./pages/mis.js







var mis_MISPage = function MISPage() {
  return external_react_default.a.createElement("div", {
    className: "page"
  }, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(navbar["a" /* default */], null), external_react_default.a.createElement(resources_mis_mis, null), external_react_default.a.createElement(footer["a" /* default */], null));
};

/* harmony default export */ var pages_mis = __webpack_exports__["default"] = (mis_MISPage);

/***/ }),

/***/ "jtKy":
/***/ (function(module) {

module.exports = {"a":["The McMurtry Innovation Space is an interdisciplinary design space open to all Rice students. The mission of the space is to support the projects of individuals and groups on campus. All students or faculty who complete the safety quiz gain swipe access to the space. In the space we have, Hand tools, Art supplies, Sewing supplies, Electronic prototyping supplies, Computers, Projector, 3D printers, and more! Some of the equipment is locked and you must visit during a time when a member of our team can assist you. Please see the calendar and team descriptions below for more information.","To gain swipe access to the MIS, first read the following safety guidelines. Then take the safety quiz, which is provided in the guidelines.","The MIS is located in Room 107 of McMurtry College, between B stairwell and the computer lab. Email us at mcminnovationspace@gmail.com for more information on what we have in the space, room reservations, or any questions."],"b":[{"day":"Monday","hours":"8 AM - Midnight"},{"day":"Tuesday","hours":"8 AM - Midnight"},{"day":"Wednesday","hours":"8 AM - Midnight"},{"day":"Thursday","hours":"8 AM - Midnight"},{"day":"Friday","hours":"8 AM - 10PM"},{"day":"Saturday","hours":"8 AM - 10PM"},{"day":"Sunday","hours":"8 AM - Midnight"}],"c":[{"name":"Grant Lu","major":"Bioengineering","college":"McMurtry","email":"gwl3@rice.edu","askMeAbout":"Hand Tools, Electronic Prototyping, Power Tools, 3D Printing, Vinyl, Screen Printing, Projector, MATLAB, Soldering, Laminator, Raspberry Pi/Arduino"},{"name":"Jeffrey Sheng","major":"Computer Science","college":"McMurtry","email":"qs4@rice.edu","askMeAbout":"Hand Tools, Power Tools, Laminator"},{"name":"Matthew Whaley","major":"Mechanical Engineering","college":"McMurtry","email":"mfw3@rice.edu","askMeAbout":"Hand Tools, Power Tools"},{"name":"Michael Angino","major":"Electrical Engineering ","college":"McMurtry","email":"mfa7@rice.edu","askMeAbout":"Hand Tools, Adobe Suite, Adobe Illustrator, AutoCAD, Electronic Prototyping, Power Tools, 3D Printing, Vinyl, Projector, Soldering, Laminator, Raspberry Pi/Arduino"},{"name":"Myra Ramdenbourg","major":"Computer Science","college":"Will Rice","email":"mmr7@rice.edu","askMeAbout":"Electronic Prototyping, 3D Printing, Soldering, Raspberry Pi/Arduino"},{"name":"Shaquille Que","major":"Computer Science, Mathematics","college":"McMurtry","email":"stq1@rice.edu","askMeAbout":"Adobe Suite, Projector, MATLAB, Soldering, Laminator"}]};

/***/ }),

/***/ "nzDO":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rCDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1/J2");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.3, 0.3, 0.2],
    ml: "auto",
    mr: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "McMurtry College \xB7 MS 761 \xB7 Rice University"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "1605 Rice Blvd. \xB7 Houston, TX 77005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Phone: (713) 348-4583 \xB7 Fax: (713) 348-3135"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Copyright \xA9 McMurtry College, 2019"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

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