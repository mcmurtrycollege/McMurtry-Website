webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar/navbar.json":
/*!***************************************!*\
  !*** ./components/navbar/navbar.json ***!
  \***************************************/
/*! exports provided: navbar_headers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"navbar_headers\":[{\"name\":\"About\",\"subheaders\":[{\"name\":\"Home\",\"to\":\"/\"},{\"name\":\"Calendar\",\"to\":\"/about/calendar\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"}]},{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\",\"subheaders\":[]},{\"name\":\"O-Week\",\"subheaders\":[{\"name\":\"O-Week Home\",\"to\":\"/oweek\"},{\"name\":\"About the Theme\",\"to\":\"/oweek/theme\"},{\"name\":\"Meet the Coords\",\"to\":\"/oweek/coords\"},{\"name\":\"O-Week Groups\",\"to\":\"/oweek/oweekgroups\"},{\"name\":\"Tour of McMurtry\",\"to\":\"/oweek/mcmtour\"},{\"name\":\"Your Room\",\"to\":\"/oweek/yourroom\"},{\"name\":\"O-Week Book\",\"to\":\"/oweek/oweekbook\"},{\"name\":\"Contact Info\",\"to\":\"/oweek/oweekcontact\"}]},{\"name\":\"Events\",\"subheaders\":[{\"name\":\"Budget Sheet\",\"to\":\"https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing\"},{\"name\":\"Expense Form\",\"to\":\"https://docs.google.com/forms/d/e/1FAIpQLSd4M9RPpgO0XhHrSFvcexGYXwu11w0F5LntvUEljN3AQI_Klg/viewform?usp=sf_link\"}]},{\"name\":\"People\",\"subheaders\":[{\"name\":\"McTeam\",\"to\":\"/people/mcteam\"},{\"name\":\"McMinistry\",\"to\":\"/people/mcministry\"},{\"name\":\"McCourt\",\"to\":\"/people/court\"},{\"name\":\"Committees\",\"to\":\"/people/committees\"},{\"name\":\"Affinity Groups\",\"to\":\"/people/mcmurtryaffinitygroups\"},{\"name\":\"Associates\",\"to\":\"/people/associates\"},{\"name\":\"Peer Academic Advisors\",\"to\":\"/people/paas\"},{\"name\":\"Academic Fellows\",\"to\":\"/people/academicfellows\"},{\"name\":\"RHAs\",\"to\":\"/people/RHAs\"},{\"name\":\"Head Caregivers\",\"to\":\"/people/headcaregivers\"},{\"name\":\"SMR\",\"to\":\"/people/SMR\"}]},{\"name\":\"Resources\",\"subheaders\":[{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\"},{\"name\":\"P-Card Requests & Purchases\",\"to\":\"/resources/pcardmanagement\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"},{\"name\":\"McMurtry Innovation Space\",\"to\":\"/resources/mis\"},{\"name\":\"McLegislation\",\"to\":\"/resources/documents\"},{\"name\":\"Diversity Resources\",\"to\":\"/resources/diversityResources\"},{\"name\":\"Work Orders\",\"to\":\"/resources/workorders\"},{\"name\":\"McFUNd Requests\",\"to\":\"/resources/initiativerequests\"},{\"name\":\"Feedback Form\",\"to\":\"/resources/feedbackform\"}]}]}");

/***/ }),

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/ImageCarousel */ "./components/general/ImageCarousel.js");
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ "./components/splashpage/intropage.css");
/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\splashpage\\intropage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import Banner from '../10/banner/banner';

var iconFolder = '../../static/icons/';
var quickLinks = [{
  name: "Calendar",
  icon: "calendar",
  to: "/events/calendar",
  absolute: ""
}, {
  name: "O-Week",
  icon: "people",
  // href: "https://mcmurtryoweek.wixsite.com/home-page"
  to: "/oweek",
  absolute: ""
}, {
  name: "Book a Room",
  icon: "event",
  to: "/resources/roomreservations/",
  absolute: ""
}, {
  name: "McExpenses",
  icon: "hand-coin",
  to: "/resources/pcardmanagement",
  absolute: ""
}, {
  name: "Financial Inclusivity",
  icon: "hand-heart",
  to: "/about/financialinclusivity",
  absolute: ""
}, {
  src: '../../static/mcm_cohorts.jpg',
  alt: 'O-Week Welcome',
  caption: 'O-Week Traditions',
  description: 'Creating lifelong memories and friendships'
}, {
  src: '../../static/mcm_commons.jpg',
  alt: 'McMurtry Commons',
  caption: 'McMurtry Commons',
  description: 'The heart of our college community'
}, {
  src: '../../static/oweek/2025coords.JPG',
  alt: '2025 O-Week Coordinators',
  caption: '2025 O-Week Team',
  description: 'Our amazing O-Week coordinators'
}];
var Intro = function Intro() {
  return __jsx("div", {
    className: "intro-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "welcome-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Welcome to McMurtry!"), __jsx("div", {
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: [.95, .8],
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx(_general_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: carouselImages,
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "banner-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund"))), __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "Student/Academic Resources Spreadsheet")))), __jsx("div", {
    className: "donate-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://riceconnect.rice.edu/donation/support-mcmurtry-college",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "donate-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "donate-heart-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "\u2665"), "Donate to McMurtry College", __jsx("span", {
    className: "donate-heart-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "\u2665"))))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "about-text",
    width: [1, 0.9, 0.8, 0.7],
    ml: "auto",
    mr: "auto",
    mb: [10, 10],
    mt: [20, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "About McMurtry"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../static/mcm_commons.jpg",
    alt: "",
    width: 280,
    className: "float-left-img",
    style: {
      "float": 'left',
      marginRight: '30px',
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), aboutContent.map(function (line, index) {
    return __jsx("p", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, line);
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "about-text",
    width: [1, 0.9, 0.8, 0.7],
    ml: "auto",
    mr: "auto",
    mb: [20, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Burt and Deedee McMurtry"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../../static/burt_deedee.jpg",
    alt: "",
    width: 260,
    className: "float-right-img",
    style: {
      "float": 'right',
      marginLeft: '30px',
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), burtDeedeeContent.map(function (line, index) {
    return __jsx("p", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, line);
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "map-section",
    width: [1, 0.9, 0.8, 0.7],
    ml: "auto",
    mr: "auto",
    mb: [20, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Find Us at Rice"), __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("iframe", {
    src: "https://maps.google.com/maps?q=29.7204139,-95.3977558&t=k&z=17&ie=UTF8&iwloc=&output=embed",
    width: "100%",
    height: "450",
    style: {
      border: 0,
      borderRadius: '16px'
    },
    allowFullScreen: "",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    title: "McMurtry College Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "map-directions-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.google.com/maps/dir/?api=1&destination=29.7204139,-95.3977558&destination_place_id=ChIJO3ubx34MQIYRTzQzdE24dHY",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "map-directions-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "directions-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "\uD83D\uDCCD"), "Get Directions"))));
};
_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);
var _c;
$RefreshReg$(_c, "Intro");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcyJdLCJuYW1lcyI6WyJpY29uRm9sZGVyIiwicXVpY2tMaW5rcyIsIm5hbWUiLCJpY29uIiwidG8iLCJhYnNvbHV0ZSIsInNyYyIsImFsdCIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsIkludHJvIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW1hZ2UiLCJ3aWR0aCIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZXMiLCJjYXJvdXNlbEltYWdlcyIsImF1dG9wbGF5IiwiaHJlZiIsInRhcmdldCIsInJlbCIsIkJveCIsIm1sIiwibXIiLCJtYiIsIm10Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFib3V0Q29udGVudCIsIm1hcCIsImxpbmUiLCJpbmRleCIsImtleSIsIm1hcmdpbkxlZnQiLCJidXJ0RGVlZGVlQ29udGVudCIsImhlaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImFsbG93RnVsbFNjcmVlbiIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSIsInRpdGxlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1U7QUFDaUI7QUFDckQ7QUFDeUI7QUFFekIsSUFBTUEsVUFBVSxHQUFHLHFCQUFxQjtBQUN4QyxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtFQUNJQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLEVBQUUsRUFBRSxrQkFBa0I7RUFDdEJDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsUUFBUTtFQUNkQyxJQUFJLEVBQUUsUUFBUTtFQUNkO0VBQ0FDLEVBQUUsRUFBRSxRQUFRO0VBQ1pDLFFBQVEsRUFBRTtBQUNkLENBQUMsRUFDRDtFQUNJSCxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLE9BQU87RUFDYkMsRUFBRSxFQUFFLDhCQUE4QjtFQUNsQ0MsUUFBUSxFQUFFO0FBQ2QsQ0FBQyxFQUNEO0VBQ0lILElBQUksRUFBRSxZQUFZO0VBQ2xCQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsRUFBRSxFQUFFLDRCQUE0QjtFQUNoQ0MsUUFBUSxFQUFFO0FBQ2QsQ0FBQyxFQUNEO0VBQ0lILElBQUksRUFBRSx1QkFBdUI7RUFDN0JDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxFQUFFLEVBQUUsNkJBQTZCO0VBQ2pDQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSUMsR0FBRyxFQUFFLDhCQUE4QjtFQUNuQ0MsR0FBRyxFQUFFLGdCQUFnQjtFQUNyQkMsT0FBTyxFQUFFLG1CQUFtQjtFQUM1QkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJSCxHQUFHLEVBQUUsOEJBQThCO0VBQ25DQyxHQUFHLEVBQUUsa0JBQWtCO0VBQ3ZCQyxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCQyxXQUFXLEVBQUU7QUFDakIsQ0FBQyxFQUNEO0VBQ0lILEdBQUcsRUFBRSxtQ0FBbUM7RUFDeENDLEdBQUcsRUFBRSwwQkFBMEI7RUFDL0JDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JDLFdBQVcsRUFBRTtBQUNqQixDQUFDLENBQ0o7QUFFRCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQTtFQUFBLE9BQ1BDLEtBQUE7SUFBS0MsU0FBUyxFQUFDLFlBQVk7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFdkJSLEtBQUE7SUFBSUMsU0FBUyxFQUFDLGVBQWU7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEseUJBQXlCLENBQUMsRUFDdkRSLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGNBQWM7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekJSLEtBQUEsQ0FBQ1MsNENBQUs7SUFBQ0MsS0FBSyxFQUFJLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBRztJQUFDZixHQUFHLEVBQUMsNEJBQTRCO0lBQUFPLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUMsQ0FDN0QsQ0FBQyxFQUdOUixLQUFBLENBQUNXLDhEQUFhO0lBQUNDLE1BQU0sRUFBRUMsY0FBZTtJQUFDQyxRQUFRLEVBQUUsSUFBSztJQUFBWixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFFekRSLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGtCQUFrQjtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QlIsS0FBQTtJQUFHZSxJQUFJLEVBQUUsd0NBQXlDO0lBQUNDLE1BQU0sRUFBQyxRQUFRO0lBQUNDLEdBQUcsRUFBQyxxQkFBcUI7SUFBQWYsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDeEZSLEtBQUEsQ0FBQ2tCLDBDQUFHO0lBQUNqQixTQUFTLEVBQUMsMkJBQTJCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3RDUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDJDQUE0QyxDQUMzQyxDQUNOLENBQUMsRUFDSlIsS0FBQTtJQUFHZSxJQUFJLEVBQUUseUdBQTBHO0lBQUNDLE1BQU0sRUFBQyxRQUFRO0lBQUNDLEdBQUcsRUFBQyxxQkFBcUI7SUFBQWYsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekpSLEtBQUEsQ0FBQ2tCLDBDQUFHO0lBQUNqQixTQUFTLEVBQUMsMEJBQTBCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JDUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDJDQUE0QyxDQUMzQyxDQUNOLENBQ0YsQ0FBQyxFQUVOUixLQUFBO0lBQUtDLFNBQVMsRUFBQyx5QkFBeUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDcENSLEtBQUE7SUFBR2UsSUFBSSxFQUFFLGdFQUFpRTtJQUFDQyxNQUFNLEVBQUMsUUFBUTtJQUFDQyxHQUFHLEVBQUMscUJBQXFCO0lBQUFmLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2hIUixLQUFBLENBQUNrQiwwQ0FBRztJQUFDakIsU0FBUyxFQUFDLGVBQWU7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUJSLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSVIsS0FBQTtJQUFNQyxTQUFTLEVBQUMsbUJBQW1CO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBQVEsQ0FBQyxnQ0FFNUNSLEtBQUE7SUFBTUMsU0FBUyxFQUFDLG9CQUFvQjtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxXQUFRLENBQzdDLENBQ0YsQ0FDTixDQUNGLENBQUMsRUFHTlIsS0FBQSxDQUFDa0IsMENBQUc7SUFBQ2pCLFNBQVMsRUFBQyxZQUFZO0lBQUNTLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUFDUyxFQUFFLEVBQUMsTUFBTTtJQUFDQyxFQUFFLEVBQUMsTUFBTTtJQUFDQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFFO0lBQUNDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUU7SUFBQXBCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xHUixLQUFBO0lBQUlDLFNBQVMsRUFBQyxlQUFlO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG1CQUFtQixDQUFDLEVBQ2pEUixLQUFBLENBQUNTLDRDQUFLO0lBQUNkLEdBQUcsRUFBQyw4QkFBOEI7SUFBQ0MsR0FBRyxFQUFDLEVBQUU7SUFBQ2MsS0FBSyxFQUFFLEdBQUk7SUFBQ1QsU0FBUyxFQUFDLGdCQUFnQjtJQUFDc0IsS0FBSyxFQUFFO01BQUUsU0FBTyxNQUFNO01BQUVDLFdBQVcsRUFBRSxNQUFNO01BQUVDLFlBQVksRUFBRTtJQUFPLENBQUU7SUFBQXZCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUM5SmtCLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSztJQUFBLE9BQzFCN0IsS0FBQTtNQUFHOEIsR0FBRyxFQUFFRCxLQUFNO01BQUEzQixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFb0IsSUFBUSxDQUFDO0VBQUEsQ0FDNUIsQ0FDQSxDQUFDLEVBR041QixLQUFBLENBQUNrQiwwQ0FBRztJQUFDakIsU0FBUyxFQUFDLFlBQVk7SUFBQ1MsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQUNTLEVBQUUsRUFBQyxNQUFNO0lBQUNDLEVBQUUsRUFBQyxNQUFNO0lBQUNDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUU7SUFBQW5CLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3BGUixLQUFBO0lBQUlDLFNBQVMsRUFBQyxlQUFlO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDZCQUE2QixDQUFDLEVBQzNEUixLQUFBLENBQUNTLDRDQUFLO0lBQUNkLEdBQUcsRUFBQyw4QkFBOEI7SUFBQ0MsR0FBRyxFQUFDLEVBQUU7SUFBQ2MsS0FBSyxFQUFFLEdBQUk7SUFBQ1QsU0FBUyxFQUFDLGlCQUFpQjtJQUFDc0IsS0FBSyxFQUFFO01BQUUsU0FBTyxPQUFPO01BQUVRLFVBQVUsRUFBRSxNQUFNO01BQUVOLFlBQVksRUFBRTtJQUFPLENBQUU7SUFBQXZCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUMvSndCLGlCQUFpQixDQUFDTCxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLO0lBQUEsT0FDL0I3QixLQUFBO01BQUc4QixHQUFHLEVBQUVELEtBQU07TUFBQTNCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUVvQixJQUFRLENBQUM7RUFBQSxDQUM1QixDQUNBLENBQUMsRUFHTjVCLEtBQUEsQ0FBQ2tCLDBDQUFHO0lBQUNqQixTQUFTLEVBQUMsYUFBYTtJQUFDUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQ1MsRUFBRSxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBRTtJQUFBbkIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckZSLEtBQUE7SUFBSUMsU0FBUyxFQUFDLGVBQWU7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsb0JBQW9CLENBQUMsRUFDbERSLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGVBQWU7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUJSLEtBQUE7SUFDSUwsR0FBRyxFQUFDLDRGQUE0RjtJQUNoR2UsS0FBSyxFQUFDLE1BQU07SUFDWnVCLE1BQU0sRUFBQyxLQUFLO0lBQ1pWLEtBQUssRUFBRTtNQUFFVyxNQUFNLEVBQUUsQ0FBQztNQUFFQyxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQzNDQyxlQUFlLEVBQUMsRUFBRTtJQUNsQkMsT0FBTyxFQUFDLE1BQU07SUFDZEMsY0FBYyxFQUFDLDRCQUE0QjtJQUMzQ0MsS0FBSyxFQUFDLDJCQUEyQjtJQUFBckMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDNUIsQ0FDUixDQUFDLEVBQ05SLEtBQUE7SUFBS0MsU0FBUyxFQUFDLDBCQUEwQjtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNyQ1IsS0FBQTtJQUNJZSxJQUFJLEVBQUMsNEhBQTRIO0lBQ2pJQyxNQUFNLEVBQUMsUUFBUTtJQUNmQyxHQUFHLEVBQUMscUJBQXFCO0lBQ3pCaEIsU0FBUyxFQUFDLG9CQUFvQjtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUU5QlIsS0FBQTtJQUFNQyxTQUFTLEVBQUMsaUJBQWlCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGlCQUFTLENBQUMsa0JBRTVDLENBQ0YsQ0FDSixDQUNKLENBQUM7QUFBQSxDQUNUO0FBQUFnQyxFQUFBLEdBbEZLekMsS0FBSztBQW9GSUEsb0VBQUssRUFBQztBQUFBLElBQUF5QyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGI3NzgxMjEzZDY3ZTQyOTMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gJy4uL2dlbmVyYWwvSW1hZ2VDYXJvdXNlbCc7XHJcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vMTAvYmFubmVyL2Jhbm5lcic7XHJcbmltcG9ydCAnLi9pbnRyb3BhZ2UuY3NzJztcclxuXHJcbmNvbnN0IGljb25Gb2xkZXIgPSAnLi4vLi4vc3RhdGljL2ljb25zLydcclxuY29uc3QgcXVpY2tMaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCIsXHJcbiAgICAgICAgaWNvbjogXCJjYWxlbmRhclwiLFxyXG4gICAgICAgIHRvOiBcIi9ldmVudHMvY2FsZW5kYXJcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk8tV2Vla1wiLFxyXG4gICAgICAgIGljb246IFwicGVvcGxlXCIsXHJcbiAgICAgICAgLy8gaHJlZjogXCJodHRwczovL21jbXVydHJ5b3dlZWsud2l4c2l0ZS5jb20vaG9tZS1wYWdlXCJcclxuICAgICAgICB0bzogXCIvb3dlZWtcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXHJcbiAgICAgICAgaWNvbjogXCJldmVudFwiLFxyXG4gICAgICAgIHRvOiBcIi9yZXNvdXJjZXMvcm9vbXJlc2VydmF0aW9ucy9cIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1jRXhwZW5zZXNcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtY29pblwiLFxyXG4gICAgICAgIHRvOiBcIi9yZXNvdXJjZXMvcGNhcmRtYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgYWJzb2x1dGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGaW5hbmNpYWwgSW5jbHVzaXZpdHlcIixcclxuICAgICAgICBpY29uOiBcImhhbmQtaGVhcnRcIixcclxuICAgICAgICB0bzogXCIvYWJvdXQvZmluYW5jaWFsaW5jbHVzaXZpdHlcIixcclxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmM6ICcuLi8uLi9zdGF0aWMvbWNtX2NvaG9ydHMuanBnJyxcclxuICAgICAgICBhbHQ6ICdPLVdlZWsgV2VsY29tZScsXHJcbiAgICAgICAgY2FwdGlvbjogJ08tV2VlayBUcmFkaXRpb25zJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NyZWF0aW5nIGxpZmVsb25nIG1lbW9yaWVzIGFuZCBmcmllbmRzaGlwcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnLi4vLi4vc3RhdGljL21jbV9jb21tb25zLmpwZycsXHJcbiAgICAgICAgYWx0OiAnTWNNdXJ0cnkgQ29tbW9ucycsXHJcbiAgICAgICAgY2FwdGlvbjogJ01jTXVydHJ5IENvbW1vbnMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGhlYXJ0IG9mIG91ciBjb2xsZWdlIGNvbW11bml0eSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnLi4vLi4vc3RhdGljL293ZWVrLzIwMjVjb29yZHMuSlBHJyxcclxuICAgICAgICBhbHQ6ICcyMDI1IE8tV2VlayBDb29yZGluYXRvcnMnLFxyXG4gICAgICAgIGNhcHRpb246ICcyMDI1IE8tV2VlayBUZWFtJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBhbWF6aW5nIE8tV2VlayBjb29yZGluYXRvcnMnXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSW50cm8gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tcGFnZSc+XHJcbiAgICAgICAgey8qIDxCYW5uZXIgLz4gKi99XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nd2VsY29tZS10aXRsZSc+V2VsY29tZSB0byBNY011cnRyeSE8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd5dXJ0LWdyYXBoaWMnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGggPSB7WyAuOTUsIC44IF19IHNyYz0nLi4vLi4vc3RhdGljL1l1cnRUcmVlcy5zdmcnLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogUHJvZmVzc2lvbmFsIEltYWdlIENhcm91c2VsICovfVxyXG4gICAgICAgIDxJbWFnZUNhcm91c2VsIGltYWdlcz17Y2Fyb3VzZWxJbWFnZXN9IGF1dG9wbGF5PXt0cnVlfSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYW5uZXItY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dvby5nbC9mb3Jtcy9LRXlQcGxMaGNsbGpkU09tMlwifSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFjY2Vzc2liaWxpdHktZnVuZC1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBNYWdpc3RlcnMnIEFjY2Vzc2liaWxpdHkgRnVuZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTRrdm96WVVoZUNUa0gtUXF4U1dmTzhPTVFySUxkZ3I3Y1czd0YyZVBRSnMvZWRpdCNnaWQ9MTM1MjY5MzYxN1wifSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInN0dWRlbnQtcmVzb3VyY2VzLWJhbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TdHVkZW50L0FjYWRlbWljIFJlc291cmNlcyBTcHJlYWRzaGVldDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvbmF0ZS1idXR0b24tY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL3N1cHBvcnQtbWNtdXJ0cnktY29sbGVnZVwifSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImRvbmF0ZS1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9uYXRlLWhlYXJ0LWxlZnRcIj7imaU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSB0byBNY011cnRyeSBDb2xsZWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvbmF0ZS1oZWFydC1yaWdodFwiPuKZpTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiBBYm91dCBNY011cnRyeSBTZWN0aW9uICovfVxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPSdhYm91dC10ZXh0JyB3aWR0aD17WzEsIDAuOSwgMC44LCAwLjddfSBtbD0nYXV0bycgbXI9J2F1dG8nIG1iPXtbMTAsIDEwXX0gbXQ9e1syMCwgNTBdfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSc+QWJvdXQgTWNNdXJ0cnk8L2gyPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvbWNtX2NvbW1vbnMuanBnJyBhbHQ9Jycgd2lkdGg9ezI4MH0gY2xhc3NOYW1lPSdmbG9hdC1sZWZ0LWltZycgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luUmlnaHQ6ICczMHB4JywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAge2Fib3V0Q29udGVudC5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57bGluZX08L3A+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7LyogQnVydCBhbmQgRGVlZGVlIFNlY3Rpb24gKi99XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9J2Fib3V0LXRleHQnIHdpZHRoPXtbMSwgMC45LCAwLjgsIDAuN119IG1sPSdhdXRvJyBtcj0nYXV0bycgbWI9e1syMCwgNTBdfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSc+QnVydCBhbmQgRGVlZGVlIE1jTXVydHJ5PC9oMj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vc3RhdGljL2J1cnRfZGVlZGVlLmpwZycgYWx0PScnIHdpZHRoPXsyNjB9IGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQtaW1nJyBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luTGVmdDogJzMwcHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICB7YnVydERlZWRlZUNvbnRlbnQubWFwKChsaW5lLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0+e2xpbmV9PC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgey8qIExvY2F0aW9uIE1hcCAqL31cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0nbWFwLXNlY3Rpb24nIHdpZHRoPXtbMSwgMC45LCAwLjgsIDAuN119IG1sPSdhdXRvJyBtcj0nYXV0bycgbWI9e1syMCwgNTBdfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSc+RmluZCBVcyBhdCBSaWNlPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT0yOS43MjA0MTM5LC05NS4zOTc3NTU4JnQ9ayZ6PTE3JmllPVVURjgmaXdsb2M9Jm91dHB1dD1lbWJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCwgYm9yZGVyUmFkaXVzOiAnMTZweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1jTXVydHJ5IENvbGxlZ2UgTG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcC1kaXJlY3Rpb25zLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249MjkuNzIwNDEzOSwtOTUuMzk3NzU1OCZkZXN0aW5hdGlvbl9wbGFjZV9pZD1DaElKTzN1YngzNE1RSVlSVHpRemRFMjRkSFlcIiBcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtZGlyZWN0aW9ucy1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpcmVjdGlvbnMtaWNvblwiPvCfk408L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgR2V0IERpcmVjdGlvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87Il0sInNvdXJjZVJvb3QiOiIifQ==