webpackHotUpdate("static\\development\\pages\\oweek\\theme.js",{

/***/ "./components/oweek/theme/theme.js":
/*!*****************************************!*\
  !*** ./components/oweek/theme/theme.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oweek.css */ "./components/oweek/oweek.css");
/* harmony import */ var _oweek_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_oweek_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\oweek\\theme\\theme.js";





var Theme = function Theme() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "oweek-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "oweek-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "About the Theme"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.8, 0.5],
    ml: "auto",
    mr: "auto",
    style: {
      float: 'left',
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../../static/oweek/2018AdvisingTeam.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), "Board games are a form of entertainment unique in their ability to rally people of all backgrounds and creeds behind the pursuit of a common goal. Board games are able to create meaningful experiences for everyone involved. In any board game, players are able to contribute their own style or variations. We believe that similarly, you as New Students will be able to influence and alter the many spheres of our college, university, and community with your expansive set of beliefs, morals, values, and experiences. Importantly, we believe that O-Week prepares you for your life at Rice, but it isn\u2019t the end. We want you to understand that after O-Week, those connections that you made will be lasting and impactful to your experience here at Rice. O-Week is just the beginning of the story that you will write or the game that you will play that will turn you into the person that you aspire to be. A successful board game leaves the players walking away feeling as if they have meaningfully spent their time developing new skills and bonding with those around them. In the same way, our O-Week will equip you with the tools that will allow you to face your academic and social experiences here at Rice and beyond. We can\u2019t wait to see you here on campus, as you get ready to embark on one of the most impactful and memorable adventures of your life!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};


/***/ })

})
//# sourceMappingURL=theme.js.7b016210c395c3b4317c.hot-update.js.map