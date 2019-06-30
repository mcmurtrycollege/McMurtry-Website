webpackHotUpdate("styles",{

/***/ "./components/about/about/about.css":
false,

/***/ "./components/about/financial_inclusivity/financial_inclusivity.css":
false,

/***/ "./components/events/artevents/artevents.css":
false,

/***/ "./components/events/events/events.css":
false,

/***/ "./components/navbar/NavbarDesktop.css":
/*!*********************************************!*\
  !*** ./components/navbar/NavbarDesktop.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1561856733153");
          });
      }
    }
  

/***/ }),

/***/ 11:
false,

/***/ 12:
false,

/***/ 14:
false,

/***/ 5:
false

})
//# sourceMappingURL=styles.1e9d5800fc76e4514bc1.hot-update.js.map