_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          jsonData = _context.sent;
          curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead
          pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
            return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
          });
          if (pageUpdated) {
            document.location.reload(true);
          } else {
            curHash = mostRecentHash;
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error('Error occurred checking for update', _context.t0);
          document.location.reload(true);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.
function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiRXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsInRyeUFwcGx5VXBkYXRlcyIsInJlcyIsImpzb24iLCJqc29uRGF0YSIsImN1clBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwiZXJyb3IiLCJwYXRoIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0Iiwib25vcGVuIiwiaGFuZGxlT25saW5lIiwib25lcnJvciIsIm9ubWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNiIiwidW5maWx0ZXJlZCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJmbiIsInB1c2giLCJnZXRFdmVudFNvdXJjZVdyYXBwZXIiLCJvbmRlbWFuZCIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsInVuZGVmaW5lZCIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsImVuY29kZSIsInN0cmVhbSIsImsiLCJYSFJXcmFwcGVyIiwieGhyIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJvbnByb2dyZXNzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2NvbnRlbnRUeXBlIiwiX3hociIsIl9zZW5kVGltZW91dCIsIl9hYm9ydCIsIm9wZW4iLCJtZXRob2QiLCJ1cmwiLCJ0aGF0Iiwic3RhdGUiLCJzaWxlbnQiLCJjbGVhclRpbWVvdXQiLCJvbmxvYWQiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidmFsdWUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZW5kIiwiZXJyb3IxIiwidG9Mb3dlckNhc2UiLCJjaGFyQ29kZUF0IiwiSGVhZGVyc1BvbHlmaWxsIiwiYWxsIiwibWFwIiwiY3JlYXRlIiwiYXJyYXkiLCJzcGxpdCIsImxpbmUiLCJwYXJ0cyIsImpvaW4iLCJfbWFwIiwiZ2V0IiwiWEhSVHJhbnNwb3J0Iiwib25TdGFydENhbGxiYWNrIiwib25Qcm9ncmVzc0NhbGxiYWNrIiwib25GaW5pc2hDYWxsYmFjayIsImhlYWRlcnMiLCJvZmZzZXQiLCJjaHVuayIsInNsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiSGVhZGVyc1dyYXBwZXIiLCJfaGVhZGVycyIsIkZldGNoVHJhbnNwb3J0IiwiY29udHJvbGxlciIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInRoZW4iLCJyZXNwb25zZSIsInJlYWRlciIsImJvZHkiLCJnZXRSZWFkZXIiLCJjYW5jZWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWROZXh0Q2h1bmsiLCJyZWFkIiwicmVzdWx0IiwiZG9uZSIsIkV2ZW50VGFyZ2V0IiwiX2xpc3RlbmVycyIsInRocm93RXJyb3IiLCJlIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwibGFzdEV2ZW50SWQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJkZWYiLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsIm1pbiIsIm1heCIsImZpcmUiLCJmIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZmV0Y2giLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiZGlzcGxheUNvbnRlbnQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZ0U291cmNlIiwiY3VycmVudFBhZ2UiLCJjbG9zZVBpbmciLCJzZXR1cFBpbmciLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsImhyZWYiLCJwYWdlUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsMEVBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUMsNkJBQTZCLGNBQWMsMkJBQTJCLHVDQUF1QyxjQUFjLE9BQU8saUdBQWlHLHVDQUF1QyxpQkFBaUIsbURBQW1ELGlCQUFpQiwrQ0FBK0Msa0JBQWtCLGdCQUFnQixTQUFTLG9CQUFvQixTQUFTLGlCQUFpQiwwQkFBMEIsaUJBQWlCLCtCQUErQiw4REFBOEQsaUZBQWlGLCtEQUErRCxTQUFTLHFHQUFxRyxxQkFBcUI7QUFDbDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUxBO0FBT0EsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFdBQVosRUFBeUI7RUFDdkJELE1BQU0sQ0FBQ0MsV0FBUEQsR0FBcUJFLCtCQUFyQkY7QUFDRDtBQUVELElBQU1HLElBQUksR0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxpQkFBaUI7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49bnx8e30sbmV3IFByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1bXSx1PVtdLGk9e30sYT1mdW5jdGlvbigpe3JldHVybntvazoyPT0ocy5zdGF0dXMvMTAwfDApLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHN0YXR1czpzLnN0YXR1cyx1cmw6cy5yZXNwb25zZVVSTCx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEpTT04ucGFyc2Uocy5yZXNwb25zZVRleHQpKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmpzLm1hcFxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgLFxufSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH07XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHsgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgfSk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgXCJjb25zdHJ1Y3RvclwiLFxuICAgIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLCBjb25maWd1cmFibGU6IHRydWUgfVxuICApO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHsgdmFsdWU6IGVucXVldWUgfSk7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kO1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kLCBvciBhIG1pc3NpbmcgLm5leHQgbWVodG9kLCBhbHdheXMgdGVybWluYXRlIHRoZVxuICAgICAgLy8geWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1ldGhvZE5hbWUgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=