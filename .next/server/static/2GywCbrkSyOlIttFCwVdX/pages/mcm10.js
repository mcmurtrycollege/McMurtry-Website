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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "4LNS":
/***/ (function(module) {

module.exports = {"a":[{"title":"Opening Ceremonies","description":"The opening ceremonies will begin on Friday, and will be held in the McMurtry Quad.","date":"Friday 5pm","image":"../../../static/mcm_commons.jpg","caption":"McMurtry Quad and Commons"},{"title":"Welcome Dinner","description":"The welcome dinner will begin immediately following the opening ceremonies. It will be held in the mcmurtry commons, and will be catered by west servery","date":"Saturday 7pm","image":"../../../static/reserve.jpg","caption":"McMurtry Commons"}]};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qHBd");


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

/***/ "BEZE":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

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

/***/ "osmD":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qHBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/general/header.js
var header = __webpack_require__("AM0r");

// EXTERNAL MODULE: external "react-parallax"
var external_react_parallax_ = __webpack_require__("qr8A");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/10/homepage/homepage.css
var homepage = __webpack_require__("BEZE");

// EXTERNAL MODULE: ./components/10/event/events.json
var events = __webpack_require__("4LNS");

// CONCATENATED MODULE: ./components/10/image.js



var image_Image = function Image(props) {
  return external_react_default.a.createElement("div", {
    className: "image"
  }, external_react_default.a.createElement(external_rebass_["Box"], {
    className: "image-box".concat(props.index),
    width: 350
  }, external_react_default.a.createElement("p", {
    className: "image-caption"
  }, props.caption)), external_react_default.a.createElement("style", null, "\n            .image-box".concat(props.index, " {\n                position: relative;\n                color: #DCDFE5;\n                overflow: hidden;\n                height: 100%;\n            }\n            \n            .image-box").concat(props.index, ":after {\n                position: absolute;\n                content: \"\";\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #2B2F3A;\n                opacity: 0;\n                z-index: -1;\n                transition: 0.3s ease-in-out;\n            }\n            \n            .image-box").concat(props.index, ":hover:after {\n                opacity: 0.8;\n            }\n            \n            .image-box").concat(props.index, ":hover:before {\n                transform: scale(1.3);\n            }\n            \n            .image-box").concat(props.index, ":hover .image-caption {\n                opacity: 1;\n            }\n\n            .image-box").concat(props.index, ":active:after {\n                opacity: 0.8;\n            }\n            \n            .image-box").concat(props.index, ":active:before {\n                transform: scale(1.3);\n            }\n            \n            .image-box").concat(props.index, ":active .image-caption {\n                opacity: 1;\n            }\n\n            .image-box").concat(props.index, ":before {\n                content: \"\";\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                top: 0; \n                left: 0;\n                z-index: -1;\n                background-image: url(").concat(props.image, ");\n                background-position: center;\n                transition: 0.3s ease-in-out;\n                background-size: cover;\n            }\n            \n            .image-caption {\n                text-align: center;\n                padding-top: 70px;\n                width: 70%;\n                margin-left: auto;\n                margin-right: auto;\n                opacity: 0;\n                transition: 0.3s ease-in-out;\n                font-size: 1.3em;\n            }\n        ")));
};

/* harmony default export */ var _10_image = (image_Image);
// EXTERNAL MODULE: ./components/10/event/events.css
var event_events = __webpack_require__("osmD");

// CONCATENATED MODULE: ./components/10/event/events.js





var events_EventsComponent = function EventsComponent() {
  var eventsList = [];

  for (var i = 0; i < events["a" /* events */].length; i++) {
    i % 2 === 0 ? eventsList.push(external_react_default.a.createElement("div", {
      className: "event-wrapper",
      key: events["a" /* events */][i].title
    }, external_react_default.a.createElement("div", {
      className: "event-left"
    }, external_react_default.a.createElement("p", {
      className: "event-date"
    }, events["a" /* events */][i].date), external_react_default.a.createElement("div", {
      className: "event-info"
    }, external_react_default.a.createElement("p", {
      className: "event-title"
    }, events["a" /* events */][i].title), external_react_default.a.createElement("p", {
      className: "event-description"
    }, events["a" /* events */][i].description))), external_react_default.a.createElement(_10_image, {
      caption: events["a" /* events */][i].caption,
      index: i,
      image: events["a" /* events */][i].image
    }))) : eventsList.push(external_react_default.a.createElement("div", {
      key: events["a" /* events */][i].title
    }, external_react_default.a.createElement("div", {
      className: "desktop-right"
    }, external_react_default.a.createElement("div", {
      className: "event-wrapper"
    }, external_react_default.a.createElement(_10_image, {
      caption: events["a" /* events */][i].caption,
      index: i,
      image: events["a" /* events */][i].image
    }), external_react_default.a.createElement("div", {
      className: "event-right"
    }, external_react_default.a.createElement("p", {
      className: "event-date"
    }, events["a" /* events */][i].date), external_react_default.a.createElement("div", {
      className: "event-info"
    }, external_react_default.a.createElement("p", {
      className: "event-title"
    }, events["a" /* events */][i].title), external_react_default.a.createElement("p", {
      className: "event-description"
    }, events["a" /* events */][i].description))))), external_react_default.a.createElement("div", {
      className: "mobile-right"
    }, external_react_default.a.createElement("div", {
      className: "event-wrapper"
    }, external_react_default.a.createElement("div", {
      className: "event-right"
    }, external_react_default.a.createElement("p", {
      className: "event-date"
    }, events["a" /* events */][i].date), external_react_default.a.createElement("div", {
      className: "event-info"
    }, external_react_default.a.createElement("p", {
      className: "event-title"
    }, events["a" /* events */][i].title), external_react_default.a.createElement("p", {
      className: "event-description"
    }, events["a" /* events */][i].description))), external_react_default.a.createElement(_10_image, {
      caption: events["a" /* events */][i].caption,
      index: i,
      image: events["a" /* events */][i].image
    })))));
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", {
    className: "mcm10-schedule"
  }, "Schedule"), external_react_default.a.createElement("div", {
    className: "events-list"
  }, eventsList));
};

/* harmony default export */ var _10_event_events = (events_EventsComponent);
// CONCATENATED MODULE: ./components/10/homepage/homepage.js







var homepage_MCM10 = function MCM10() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_parallax_["Parallax"], {
    bgImage: "../../../static/mcm10bg.svg",
    bgImageAlt: "",
    strength: 800
  }, external_react_default.a.createElement("div", {
    className: "parallax-wrapper1"
  }, external_react_default.a.createElement("div", {
    className: "mcm10-title-container"
  }, external_react_default.a.createElement("div", {
    className: "mcm10-title"
  }, external_react_default.a.createElement(external_rebass_["Image"], {
    src: "../../../static/mcm10.svg",
    alt: "MCM10"
  }))), external_react_default.a.createElement("div", {
    className: "mcm10-btn"
  }, external_react_default.a.createElement("p", null, "Get Tickets")), external_react_default.a.createElement(link_default.a, {
    href: "/mcm10/sponsor"
  }, external_react_default.a.createElement("div", {
    className: "mcm10-btn"
  }, external_react_default.a.createElement("p", null, "Become a Sponsor"))))), external_react_default.a.createElement(_10_event_events, null), external_react_default.a.createElement(link_default.a, {
    href: "/mcm10/faqs"
  }, external_react_default.a.createElement("div", {
    className: "faqs-btn"
  }, external_react_default.a.createElement("p", null, "FAQs ", external_react_default.a.createElement("img", {
    src: "https://icon.now.sh/arrow/DCDFE5/25"
  })))));
};

/* harmony default export */ var homepage_homepage = (homepage_MCM10);
// EXTERNAL MODULE: ./components/general/page.css
var page = __webpack_require__("NHen");

// CONCATENATED MODULE: ./pages/mcm10/index.js





var mcm10_MCM10 = function MCM10() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(homepage_homepage, null));
};

/* harmony default export */ var mcm10 = __webpack_exports__["default"] = (mcm10_MCM10);

/***/ }),

/***/ "qr8A":
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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