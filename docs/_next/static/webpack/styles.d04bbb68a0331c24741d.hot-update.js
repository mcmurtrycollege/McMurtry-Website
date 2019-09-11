webpackHotUpdate("styles",{

/***/ "./components/10/banner/banner.css":
false,

/***/ "./components/10/sponsor/Sponsor.css":
/*!*******************************************!*\
  !*** ./components/10/sponsor/Sponsor.css ***!
  \*******************************************/
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
            injectCss(link, link.href.split("?")[0] + "?unix=1568070935498");
          });
      }
    }
  

/***/ }),

/***/ "./components/general/footer/footer.css":
false,

/***/ "./components/navbar/NavbarDesktop.css":
false,

/***/ "./components/navbar/navbarMobile.css":
false,

/***/ "./components/splashpage/intropage.css":
false,

/***/ 1:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false

})
//# sourceMappingURL=styles.d04bbb68a0331c24741d.hot-update.js.map