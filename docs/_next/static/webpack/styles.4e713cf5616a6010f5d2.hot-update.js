webpackHotUpdate("styles",{

/***/ "./components/general/contactcards.css":
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563833109858");
          });
      }
    }
  

/***/ }),

/***/ "./components/people/committees/committees.css":
false,

/***/ "./components/people/fellows/fellows.css":
false,

/***/ "./components/resources/documents/documents.css":
false,

/***/ 10:
false,

/***/ 12:
false,

/***/ 4:
false,

/***/ 9:
false

})
//# sourceMappingURL=styles.4e713cf5616a6010f5d2.hot-update.js.map