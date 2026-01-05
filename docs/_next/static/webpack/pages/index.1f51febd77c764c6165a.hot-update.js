webpackHotUpdate_N_E("pages/index",{

/***/ "./components/general/ImageCarousel.js":
/*!*********************************************!*\
  !*** ./components/general/ImageCarousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCarousel.css */ "./components/general/ImageCarousel.css");
/* harmony import */ var _ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\general\\ImageCarousel.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageCarousel = function ImageCarousel(_ref) {
  _s();
  var images = _ref.images,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    currentIndex = _useState[0],
    setCurrentIndex = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isAnimating = _useState2[0],
    setIsAnimating = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchStart = _useState3[0],
    setTouchStart = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchEnd = _useState4[0],
    setTouchEnd = _useState4[1];
  var carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  // Minimum swipe distance (in px)
  var minSwipeDistance = 50;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!autoplay) return;
    var interval = setInterval(function () {
      handleNext();
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, [currentIndex, autoplay]);
  var handleNext = function handleNext() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev + 1) % images.length;
    });
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var handlePrev = function handlePrev() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev - 1 + images.length) % images.length;
    });
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var goToSlide = function goToSlide(index) {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var onTouchStart = function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  var onTouchMove = function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  var onTouchEnd = function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    var distance = touchStart - touchEnd;
    var isLeftSwipe = distance > minSwipeDistance;
    var isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };
  return __jsx("div", {
    className: "carousel-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "professional-carousel",
    ref: carouselRef,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "carousel-slides",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, images.map(function (image, index) {
    return __jsx("div", {
      key: index,
      className: "carousel-slide ".concat(index === currentIndex ? 'active' : '', " ").concat(index < currentIndex ? 'prev' : 'next'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image.src,
      alt: image.alt || "Slide ".concat(index + 1),
      className: "carousel-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }), image.caption && __jsx("div", {
      className: "carousel-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, image.caption), image.description && __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    }, image.description)));
  })), __jsx("button", {
    className: "carousel-button carousel-button-prev",
    onClick: handlePrev,
    "aria-label": "Previous slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "\u2039"), __jsx("button", {
    className: "carousel-button carousel-button-next",
    onClick: handleNext,
    "aria-label": "Next slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "\u203A"), __jsx("div", {
    className: "carousel-pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, images.map(function (_, index) {
    return __jsx("button", {
      key: index,
      className: "carousel-dot ".concat(index === currentIndex ? 'active' : ''),
      onClick: function onClick() {
        return goToSlide(index);
      },
      "aria-label": "Go to slide ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    });
  }))));
};
_s(ImageCarousel, "S3vZadMjVip0YkcbdWPo4O9E3aE=");
_c = ImageCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);
var _c;
$RefreshReg$(_c, "ImageCarousel");

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

/***/ }),

/***/ "./components/navbar/navbar.json":
/*!***************************************!*\
  !*** ./components/navbar/navbar.json ***!
  \***************************************/
/*! exports provided: navbar_headers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"navbar_headers\":[{\"name\":\"About\",\"subheaders\":[{\"name\":\"Home\",\"to\":\"/\"},{\"name\":\"Calendar\",\"to\":\"/about/calendar\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"}]},{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\",\"subheaders\":[]},{\"name\":\"O-Week\",\"subheaders\":[{\"name\":\"O-Week Home\",\"to\":\"/oweek\"},{\"name\":\"About the Theme\",\"to\":\"/oweek/theme\"},{\"name\":\"Meet the Coords\",\"to\":\"/oweek/coords\"},{\"name\":\"O-Week Groups\",\"to\":\"/oweek/oweekgroups\"},{\"name\":\"Tour of McMurtry\",\"to\":\"/oweek/mcmtour\"},{\"name\":\"Your Room\",\"to\":\"/oweek/yourroom\"},{\"name\":\"O-Week Book\",\"to\":\"/oweek/oweekbook\"},{\"name\":\"Contact Info\",\"to\":\"/oweek/oweekcontact\"}]},{\"name\":\"Events\",\"subheaders\":[{\"name\":\"Budget Sheet\",\"to\":\"https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing\"},{\"name\":\"Expense Form\",\"to\":\"https://docs.google.com/forms/d/e/1FAIpQLSd4M9RPpgO0XhHrSFvcexGYXwu11w0F5LntvUEljN3AQI_Klg/viewform?usp=sf_link\"}]},{\"name\":\"People\",\"subheaders\":[{\"name\":\"McTeam\",\"to\":\"/people/mcteam\"},{\"name\":\"McMinistry\",\"to\":\"/people/mcministry\"},{\"name\":\"McCourt\",\"to\":\"/people/court\"},{\"name\":\"Committees\",\"to\":\"/people/committees\"},{\"name\":\"Affinity Groups\",\"to\":\"/people/mcmurtryaffinitygroups\"},{\"name\":\"Associates\",\"to\":\"/people/associates\"},{\"name\":\"Peer Academic Advisors\",\"to\":\"/people/paas\"},{\"name\":\"Academic Fellows\",\"to\":\"/people/academicfellows\"},{\"name\":\"RHAs\",\"to\":\"/people/RHAs\"},{\"name\":\"Head Caregivers\",\"to\":\"/people/headcaregivers\"},{\"name\":\"SMR\",\"to\":\"/people/SMR\"}]},{\"name\":\"Resources\",\"subheaders\":[{\"name\":\"Room Reservations\",\"to\":\"/resources/roomreservations\"},{\"name\":\"Financial Inclusivity\",\"to\":\"/about/financialinclusivity\"},{\"name\":\"McMurtry Innovation Space\",\"to\":\"/resources/mis\"},{\"name\":\"McLegislation\",\"to\":\"/resources/documents\"},{\"name\":\"Diversity Resources\",\"to\":\"/resources/diversityResources\"},{\"name\":\"Work Orders\",\"to\":\"/resources/workorders\"},{\"name\":\"McFUNd Requests\",\"to\":\"/resources/initiativerequests\"},{\"name\":\"Feedback Form\",\"to\":\"/resources/feedbackform\"}]}]}");

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
/* harmony import */ var _about_about_about_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about/about.css */ "./components/about/about/about.css");
/* harmony import */ var _about_about_about_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_about_about_about_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
  _jsxFileName = "D:\\Antony\\Downloads\\Mcmurtry\\components\\splashpage\\intropage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import Banner from '../10/banner/banner';


var aboutContent = ["McMurtry College is the 10th residential college to grace the Rice University campus. A LEED Gold certified building located on the northeastern edge of campus, it sits at the optimal location for those seeking the shortest path between their dorms and some of the most popular locations on campus, such as the academic quad (home to many buildings in which students will most likely have classes), Duncan Hall (for all things engineering), and the West Servery (the best place to eat at Rice).", "McMurtry first opened its doors in the fall of 2009. The first generation of Murts numbered in the low seventies so Rice administration recruited some Will Rice College students to fill the remaining space. McMurtry survived the 'colonization' and the two groups have learned to coexist peacefully as sister colleges...until Beer Bike 2019.", "The college also boasts many fantastic amenities like a campfire pit in the middle of the quad, a wide roof with a lovely city view and a kitchen on every level. We affectionately call our commons the 'Yurt.' Other facilities include Burt's Teahouse and Deedee's Lounge on 5th floor, an off-campus student lounge, and the game room, music room, TV room, gym, and the McMurtry Innovation Space (MIS) on the 1st floor, with a plethora of study rooms throughout the college."];
var burtDeedeeContent = ["Burt and Deedee McMurtry graduated from Rice University in 1956 and moved to the Bay Area in 1957 after Burt's fifth year at Rice. Burt received Bachelor of Arts and Bachelor of Science degrees in Electrical Engineering from Rice in 1956 and 1957, respectively. He continued his education at Stanford, where he earned a Master of Science and a doctoral degree in electrical engineering in 1959 and 1962, respectively. A Rice trustee emeritus, Burt McMurtry was a private investor and a founding partner of Technology Venture Investors and Institutional Venture Associates in California. His venture firms have backed such companies as KLA-Tencor, Adaptec, Altera, Compaq, Intuit, Linear Technology Corp. and Microsoft. Burt passed away on September 2nd, 2018 at his home in Palo Alto. Deedee McMurtry is an active volunteer, a trustee of the American Conservatory Theater (ACT) in San Francisco, and is involved with arts advisory committees at Stanford.", "Burt served seventeen years on the Rice University board, eleven years on the Stanford University board (the last four as chairman, ending July 1, 2008,) and seven years on the board of the Carnegie Institution of Washington. Burt played a role in planning the residential college system back when he was a student at Rice. He was a student representative on the 1955 committee that set out the original mission and basic organizational design of the residential colleges.", "The McMurtrys have a long history of support to Rice. They have established two endowed professorships and two endowed scholarships. The McMurtrys have also given to the Rice Annual Fund, the Class of 1956 Scholarship Fund and Anne and Charles Duncan Hall, where McMurtry Auditorium is named in their honor, in addition to many other areas of the campus."];
var carouselImages = [{
  src: '../../static/oweek/building.jpg',
  alt: 'McMurtry College Building',
  caption: 'Your Home at Rice',
  description: 'Welcome to McMurtry College - where community thrives'
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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "welcome-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Welcome to McMurtry!"), __jsx("div", {
    className: "yurt-graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: [.95, .8],
    src: "../../static/YurtTrees.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx(_general_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: carouselImages,
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "banner-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://goo.gl/forms/KEyPplLhclljdSOm2",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accessibility-fund-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "McMurtry Magisters' Accessibility Fund"))), __jsx("a", {
    href: "https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "student-resources-banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Student/Academic Resources Spreadsheet")))), __jsx("div", {
    className: "donate-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://riceconnect.rice.edu/donation/support-mcmurtry-college",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "donate-banner",
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
  }, __jsx("span", {
    className: "donate-heart-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "\u2665"), "Donate to McMurtry College", __jsx("span", {
    className: "donate-heart-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 13
    }
  }), aboutContent.map(function (line, index) {
    return __jsx("p", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 13
    }
  }), burtDeedeeContent.map(function (line, index) {
    return __jsx("p", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Find Us at Rice"), __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "map-directions-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "directions-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3BsYXNocGFnZS9pbnRyb3BhZ2UuanMiXSwibmFtZXMiOlsiSW1hZ2VDYXJvdXNlbCIsIl9yZWYiLCJfcyIsImltYWdlcyIsIl9yZWYkYXV0b3BsYXkiLCJhdXRvcGxheSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiX3VzZVN0YXRlMiIsImlzQW5pbWF0aW5nIiwic2V0SXNBbmltYXRpbmciLCJfdXNlU3RhdGUzIiwidG91Y2hTdGFydCIsInNldFRvdWNoU3RhcnQiLCJfdXNlU3RhdGU0IiwidG91Y2hFbmQiLCJzZXRUb3VjaEVuZCIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwibWluU3dpcGVEaXN0YW5jZSIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVOZXh0IiwiY2xlYXJJbnRlcnZhbCIsInByZXYiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiaGFuZGxlUHJldiIsImdvVG9TbGlkZSIsImluZGV4Iiwib25Ub3VjaFN0YXJ0IiwiZSIsInRhcmdldFRvdWNoZXMiLCJjbGllbnRYIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiZGlzdGFuY2UiLCJpc0xlZnRTd2lwZSIsImlzUmlnaHRTd2lwZSIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInJlZiIsIm1hcCIsImltYWdlIiwia2V5IiwiY29uY2F0Iiwic3JjIiwiYWx0IiwiY2FwdGlvbiIsImRlc2NyaXB0aW9uIiwib25DbGljayIsIl8iLCJfYyIsIiRSZWZyZXNoUmVnJCIsImFib3V0Q29udGVudCIsImJ1cnREZWVkZWVDb250ZW50IiwiY2Fyb3VzZWxJbWFnZXMiLCJJbnRybyIsIkltYWdlIiwid2lkdGgiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiQm94IiwibWwiLCJtciIsIm1iIiwibXQiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibGluZSIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJhbGxvd0Z1bGxTY3JlZW4iLCJsb2FkaW5nIiwicmVmZXJyZXJQb2xpY3kiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUM5QjtBQUU3QixJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBb0M7RUFBQUMsRUFBQTtFQUFBLElBQTlCQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtJQUFBQyxhQUFBLEdBQUFILElBQUEsQ0FBRUksUUFBUTtJQUFSQSxRQUFRLEdBQUFELGFBQUEsY0FBRyxJQUFJLEdBQUFBLGFBQUE7RUFDOUMsSUFBQUUsU0FBQSxHQUF3Q0Msc0RBQVEsQ0FBQyxDQUFDLENBQUM7SUFBNUNDLFlBQVksR0FBQUYsU0FBQTtJQUFFRyxlQUFlLEdBQUFILFNBQUE7RUFDcEMsSUFBQUksVUFBQSxHQUFzQ0gsc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBOUNJLFdBQVcsR0FBQUQsVUFBQTtJQUFFRSxjQUFjLEdBQUFGLFVBQUE7RUFDbEMsSUFBQUcsVUFBQSxHQUFvQ04sc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBM0NPLFVBQVUsR0FBQUQsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFDaEMsSUFBQUcsVUFBQSxHQUFnQ1Qsc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBdkNVLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFDNUIsSUFBTUcsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUksQ0FBQzs7RUFFaEM7RUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxF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RUMsWUFBWSxFQUFFO0lBQU8sQ0FBRTtJQUMzQ0MsZUFBZSxFQUFDLEVBQUU7SUFDbEJDLE9BQU8sRUFBQyxNQUFNO0lBQ2RDLGNBQWMsRUFBQyw0QkFBNEI7SUFDM0NDLEtBQUssRUFBQywyQkFBMkI7SUFBQTdDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQzVCLENBQ1IsQ0FBQyxFQUNOUixLQUFBO0lBQUtDLFNBQVMsRUFBQywwQkFBMEI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckNSLEtBQUE7SUFDSTRCLElBQUksRUFBQyw0SEFBNEg7SUFDaklDLE1BQU0sRUFBQyxRQUFRO0lBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7SUFDekI3QixTQUFTLEVBQUMsb0JBQW9CO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRTlCUixLQUFBO0lBQU1DLFNBQVMsRUFBQyxpQkFBaUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsaUJBQVMsQ0FBQyxrQkFFNUMsQ0FDRixDQUNKLENBQ0osQ0FBQztBQUFBLENBQ1Q7QUFBQVksRUFBQSxHQWxGS0ssS0FBSztBQW9GSUEsb0VBQUssRUFBQztBQUFBLElBQUFMLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmNTFmZWJkNzdjNzY0YzYxNjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vSW1hZ2VDYXJvdXNlbC5jc3MnO1xyXG5cclxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICh7IGltYWdlcywgYXV0b3BsYXkgPSB0cnVlIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzQW5pbWF0aW5nLCBzZXRJc0FuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvdWNoU3RhcnQsIHNldFRvdWNoU3RhcnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RvdWNoRW5kLCBzZXRUb3VjaEVuZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gTWluaW11bSBzd2lwZSBkaXN0YW5jZSAoaW4gcHgpXHJcbiAgY29uc3QgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRvcGxheSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaGFuZGxlTmV4dCgpO1xyXG4gICAgfSwgNTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtjdXJyZW50SW5kZXgsIGF1dG9wbGF5XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNBbmltYXRpbmcpIHJldHVybjtcclxuICAgIHNldElzQW5pbWF0aW5nKHRydWUpO1xyXG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQW5pbWF0aW5nKGZhbHNlKSwgNjAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcclxuICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgLSAxICsgaW1hZ2VzLmxlbmd0aCkgJSBpbWFnZXMubGVuZ3RoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNBbmltYXRpbmcoZmFsc2UpLCA2MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9TbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGlzQW5pbWF0aW5nIHx8IGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHJldHVybjtcclxuICAgIHNldElzQW5pbWF0aW5nKHRydWUpO1xyXG4gICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNBbmltYXRpbmcoZmFsc2UpLCA2MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVG91Y2hTdGFydCA9IChlKSA9PiB7XHJcbiAgICBzZXRUb3VjaEVuZChudWxsKTtcclxuICAgIHNldFRvdWNoU3RhcnQoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVG91Y2hNb3ZlID0gKGUpID0+IHtcclxuICAgIHNldFRvdWNoRW5kKGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblRvdWNoRW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0b3VjaFN0YXJ0IHx8ICF0b3VjaEVuZCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoU3RhcnQgLSB0b3VjaEVuZDtcclxuICAgIGNvbnN0IGlzTGVmdFN3aXBlID0gZGlzdGFuY2UgPiBtaW5Td2lwZURpc3RhbmNlO1xyXG4gICAgY29uc3QgaXNSaWdodFN3aXBlID0gZGlzdGFuY2UgPCAtbWluU3dpcGVEaXN0YW5jZTtcclxuXHJcbiAgICBpZiAoaXNMZWZ0U3dpcGUpIHtcclxuICAgICAgaGFuZGxlTmV4dCgpO1xyXG4gICAgfSBlbHNlIGlmIChpc1JpZ2h0U3dpcGUpIHtcclxuICAgICAgaGFuZGxlUHJldigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1jYXJvdXNlbFwiXHJcbiAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cclxuICAgICAgICBvblRvdWNoU3RhcnQ9e29uVG91Y2hTdGFydH1cclxuICAgICAgICBvblRvdWNoTW92ZT17b25Ub3VjaE1vdmV9XHJcbiAgICAgICAgb25Ub3VjaEVuZD17b25Ub3VjaEVuZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtc2xpZGVzXCI+XHJcbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsLXNsaWRlICR7aW5kZXggPT09IGN1cnJlbnRJbmRleCA/ICdhY3RpdmUnIDogJyd9ICR7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA8IGN1cnJlbnRJbmRleCA/ICdwcmV2JyA6ICduZXh0J1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfSBcclxuICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0IHx8IGBTbGlkZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2ltYWdlLmNhcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57aW1hZ2UuY2FwdGlvbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2UuZGVzY3JpcHRpb24gJiYgPHA+e2ltYWdlLmRlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtYnV0dG9uIGNhcm91c2VsLWJ1dHRvbi1wcmV2XCIgXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHNsaWRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDigLlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtYnV0dG9uIGNhcm91c2VsLWJ1dHRvbi1uZXh0XCIgXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOKAulxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXBhZ2luYXRpb25cIj5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbC1kb3QgJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9TbGlkZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEdvIHRvIHNsaWRlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tICcuLi9nZW5lcmFsL0ltYWdlQ2Fyb3VzZWwnO1xyXG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uLzEwL2Jhbm5lci9iYW5uZXInO1xyXG5pbXBvcnQgJy4vaW50cm9wYWdlLmNzcyc7XHJcbmltcG9ydCAnLi4vYWJvdXQvYWJvdXQvYWJvdXQuY3NzJztcclxuXHJcbmNvbnN0IGFib3V0Q29udGVudCA9IFtcclxuICAgIFwiTWNNdXJ0cnkgQ29sbGVnZSBpcyB0aGUgMTB0aCByZXNpZGVudGlhbCBjb2xsZWdlIHRvIGdyYWNlIHRoZSBSaWNlIFVuaXZlcnNpdHkgY2FtcHVzLiBBIExFRUQgR29sZCBjZXJ0aWZpZWQgYnVpbGRpbmcgbG9jYXRlZCBvbiB0aGUgbm9ydGhlYXN0ZXJuIGVkZ2Ugb2YgY2FtcHVzLCBpdCBzaXRzIGF0IHRoZSBvcHRpbWFsIGxvY2F0aW9uIGZvciB0aG9zZSBzZWVraW5nIHRoZSBzaG9ydGVzdCBwYXRoIGJldHdlZW4gdGhlaXIgZG9ybXMgYW5kIHNvbWUgb2YgdGhlIG1vc3QgcG9wdWxhciBsb2NhdGlvbnMgb24gY2FtcHVzLCBzdWNoIGFzIHRoZSBhY2FkZW1pYyBxdWFkIChob21lIHRvIG1hbnkgYnVpbGRpbmdzIGluIHdoaWNoIHN0dWRlbnRzIHdpbGwgbW9zdCBsaWtlbHkgaGF2ZSBjbGFzc2VzKSwgRHVuY2FuIEhhbGwgKGZvciBhbGwgdGhpbmdzIGVuZ2luZWVyaW5nKSwgYW5kIHRoZSBXZXN0IFNlcnZlcnkgKHRoZSBiZXN0IHBsYWNlIHRvIGVhdCBhdCBSaWNlKS5cIixcclxuICAgIFwiTWNNdXJ0cnkgZmlyc3Qgb3BlbmVkIGl0cyBkb29ycyBpbiB0aGUgZmFsbCBvZiAyMDA5LiBUaGUgZmlyc3QgZ2VuZXJhdGlvbiBvZiBNdXJ0cyBudW1iZXJlZCBpbiB0aGUgbG93IHNldmVudGllcyBzbyBSaWNlIGFkbWluaXN0cmF0aW9uIHJlY3J1aXRlZCBzb21lIFdpbGwgUmljZSBDb2xsZWdlIHN0dWRlbnRzIHRvIGZpbGwgdGhlIHJlbWFpbmluZyBzcGFjZS4gTWNNdXJ0cnkgc3Vydml2ZWQgdGhlICdjb2xvbml6YXRpb24nIGFuZCB0aGUgdHdvIGdyb3VwcyBoYXZlIGxlYXJuZWQgdG8gY29leGlzdCBwZWFjZWZ1bGx5IGFzIHNpc3RlciBjb2xsZWdlcy4uLnVudGlsIEJlZXIgQmlrZSAyMDE5LlwiLFxyXG4gICAgXCJUaGUgY29sbGVnZSBhbHNvIGJvYXN0cyBtYW55IGZhbnRhc3RpYyBhbWVuaXRpZXMgbGlrZSBhIGNhbXBmaXJlIHBpdCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBxdWFkLCBhIHdpZGUgcm9vZiB3aXRoIGEgbG92ZWx5IGNpdHkgdmlldyBhbmQgYSBraXRjaGVuIG9uIGV2ZXJ5IGxldmVsLiBXZSBhZmZlY3Rpb25hdGVseSBjYWxsIG91ciBjb21tb25zIHRoZSAnWXVydC4nIE90aGVyIGZhY2lsaXRpZXMgaW5jbHVkZSBCdXJ0J3MgVGVhaG91c2UgYW5kIERlZWRlZSdzIExvdW5nZSBvbiA1dGggZmxvb3IsIGFuIG9mZi1jYW1wdXMgc3R1ZGVudCBsb3VuZ2UsIGFuZCB0aGUgZ2FtZSByb29tLCBtdXNpYyByb29tLCBUViByb29tLCBneW0sIGFuZCB0aGUgTWNNdXJ0cnkgSW5ub3ZhdGlvbiBTcGFjZSAoTUlTKSBvbiB0aGUgMXN0IGZsb29yLCB3aXRoIGEgcGxldGhvcmEgb2Ygc3R1ZHkgcm9vbXMgdGhyb3VnaG91dCB0aGUgY29sbGVnZS5cIlxyXG5dO1xyXG5cclxuY29uc3QgYnVydERlZWRlZUNvbnRlbnQgPSBbXHJcbiAgICBcIkJ1cnQgYW5kIERlZWRlZSBNY011cnRyeSBncmFkdWF0ZWQgZnJvbSBSaWNlIFVuaXZlcnNpdHkgaW4gMTk1NiBhbmQgbW92ZWQgdG8gdGhlIEJheSBBcmVhIGluIDE5NTcgYWZ0ZXIgQnVydCdzIGZpZnRoIHllYXIgYXQgUmljZS4gQnVydCByZWNlaXZlZCBCYWNoZWxvciBvZiBBcnRzIGFuZCBCYWNoZWxvciBvZiBTY2llbmNlIGRlZ3JlZXMgaW4gRWxlY3RyaWNhbCBFbmdpbmVlcmluZyBmcm9tIFJpY2UgaW4gMTk1NiBhbmQgMTk1NywgcmVzcGVjdGl2ZWx5LiBIZSBjb250aW51ZWQgaGlzIGVkdWNhdGlvbiBhdCBTdGFuZm9yZCwgd2hlcmUgaGUgZWFybmVkIGEgTWFzdGVyIG9mIFNjaWVuY2UgYW5kIGEgZG9jdG9yYWwgZGVncmVlIGluIGVsZWN0cmljYWwgZW5naW5lZXJpbmcgaW4gMTk1OSBhbmQgMTk2MiwgcmVzcGVjdGl2ZWx5LiBBIFJpY2UgdHJ1c3RlZSBlbWVyaXR1cywgQnVydCBNY011cnRyeSB3YXMgYSBwcml2YXRlIGludmVzdG9yIGFuZCBhIGZvdW5kaW5nIHBhcnRuZXIgb2YgVGVjaG5vbG9neSBWZW50dXJlIEludmVzdG9ycyBhbmQgSW5zdGl0dXRpb25hbCBWZW50dXJlIEFzc29jaWF0ZXMgaW4gQ2FsaWZvcm5pYS4gSGlzIHZlbnR1cmUgZmlybXMgaGF2ZSBiYWNrZWQgc3VjaCBjb21wYW5pZXMgYXMgS0xBLVRlbmNvciwgQWRhcHRlYywgQWx0ZXJhLCBDb21wYXEsIEludHVpdCwgTGluZWFyIFRlY2hub2xvZ3kgQ29ycC4gYW5kIE1pY3Jvc29mdC4gQnVydCBwYXNzZWQgYXdheSBvbiBTZXB0ZW1iZXIgMm5kLCAyMDE4IGF0IGhpcyBob21lIGluIFBhbG8gQWx0by4gRGVlZGVlIE1jTXVydHJ5IGlzIGFuIGFjdGl2ZSB2b2x1bnRlZXIsIGEgdHJ1c3RlZSBvZiB0aGUgQW1lcmljYW4gQ29uc2VydmF0b3J5IFRoZWF0ZXIgKEFDVCkgaW4gU2FuIEZyYW5jaXNjbywgYW5kIGlzIGludm9sdmVkIHdpdGggYXJ0cyBhZHZpc29yeSBjb21taXR0ZWVzIGF0IFN0YW5mb3JkLlwiLFxyXG4gICAgXCJCdXJ0IHNlcnZlZCBzZXZlbnRlZW4geWVhcnMgb24gdGhlIFJpY2UgVW5pdmVyc2l0eSBib2FyZCwgZWxldmVuIHllYXJzIG9uIHRoZSBTdGFuZm9yZCBVbml2ZXJzaXR5IGJvYXJkICh0aGUgbGFzdCBmb3VyIGFzIGNoYWlybWFuLCBlbmRpbmcgSnVseSAxLCAyMDA4LCkgYW5kIHNldmVuIHllYXJzIG9uIHRoZSBib2FyZCBvZiB0aGUgQ2FybmVnaWUgSW5zdGl0dXRpb24gb2YgV2FzaGluZ3Rvbi4gQnVydCBwbGF5ZWQgYSByb2xlIGluIHBsYW5uaW5nIHRoZSByZXNpZGVudGlhbCBjb2xsZWdlIHN5c3RlbSBiYWNrIHdoZW4gaGUgd2FzIGEgc3R1ZGVudCBhdCBSaWNlLiBIZSB3YXMgYSBzdHVkZW50IHJlcHJlc2VudGF0aXZlIG9uIHRoZSAxOTU1IGNvbW1pdHRlZSB0aGF0IHNldCBvdXQgdGhlIG9yaWdpbmFsIG1pc3Npb24gYW5kIGJhc2ljIG9yZ2FuaXphdGlvbmFsIGRlc2lnbiBvZiB0aGUgcmVzaWRlbnRpYWwgY29sbGVnZXMuXCIsXHJcbiAgICBcIlRoZSBNY011cnRyeXMgaGF2ZSBhIGxvbmcgaGlzdG9yeSBvZiBzdXBwb3J0IHRvIFJpY2UuIFRoZXkgaGF2ZSBlc3RhYmxpc2hlZCB0d28gZW5kb3dlZCBwcm9mZXNzb3JzaGlwcyBhbmQgdHdvIGVuZG93ZWQgc2Nob2xhcnNoaXBzLiBUaGUgTWNNdXJ0cnlzIGhhdmUgYWxzbyBnaXZlbiB0byB0aGUgUmljZSBBbm51YWwgRnVuZCwgdGhlIENsYXNzIG9mIDE5NTYgU2Nob2xhcnNoaXAgRnVuZCBhbmQgQW5uZSBhbmQgQ2hhcmxlcyBEdW5jYW4gSGFsbCwgd2hlcmUgTWNNdXJ0cnkgQXVkaXRvcml1bSBpcyBuYW1lZCBpbiB0aGVpciBob25vciwgaW4gYWRkaXRpb24gdG8gbWFueSBvdGhlciBhcmVhcyBvZiB0aGUgY2FtcHVzLlwiXHJcbl07XHJcblxyXG5jb25zdCBjYXJvdXNlbEltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBzcmM6ICcuLi8uLi9zdGF0aWMvb3dlZWsvYnVpbGRpbmcuanBnJyxcclxuICAgICAgICBhbHQ6ICdNY011cnRyeSBDb2xsZWdlIEJ1aWxkaW5nJyxcclxuICAgICAgICBjYXB0aW9uOiAnWW91ciBIb21lIGF0IFJpY2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byBNY011cnRyeSBDb2xsZWdlIC0gd2hlcmUgY29tbXVuaXR5IHRocml2ZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNyYzogJy4uLy4uL3N0YXRpYy9tY21fY29ob3J0cy5qcGcnLFxyXG4gICAgICAgIGFsdDogJ08tV2VlayBXZWxjb21lJyxcclxuICAgICAgICBjYXB0aW9uOiAnTy1XZWVrIFRyYWRpdGlvbnMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRpbmcgbGlmZWxvbmcgbWVtb3JpZXMgYW5kIGZyaWVuZHNoaXBzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmM6ICcuLi8uLi9zdGF0aWMvbWNtX2NvbW1vbnMuanBnJyxcclxuICAgICAgICBhbHQ6ICdNY011cnRyeSBDb21tb25zJyxcclxuICAgICAgICBjYXB0aW9uOiAnTWNNdXJ0cnkgQ29tbW9ucycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgaGVhcnQgb2Ygb3VyIGNvbGxlZ2UgY29tbXVuaXR5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmM6ICcuLi8uLi9zdGF0aWMvb3dlZWsvMjAyNWNvb3Jkcy5KUEcnLFxyXG4gICAgICAgIGFsdDogJzIwMjUgTy1XZWVrIENvb3JkaW5hdG9ycycsXHJcbiAgICAgICAgY2FwdGlvbjogJzIwMjUgTy1XZWVrIFRlYW0nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT3VyIGFtYXppbmcgTy1XZWVrIGNvb3JkaW5hdG9ycydcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBJbnRybyA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1wYWdlJz5cclxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd3ZWxjb21lLXRpdGxlJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3l1cnQtZ3JhcGhpYyc+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aCA9IHtbIC45NSwgLjggXX0gc3JjPScuLi8uLi9zdGF0aWMvWXVydFRyZWVzLnN2ZycvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiBQcm9mZXNzaW9uYWwgSW1hZ2UgQ2Fyb3VzZWwgKi99XHJcbiAgICAgICAgPEltYWdlQ2Fyb3VzZWwgaW1hZ2VzPXtjYXJvdXNlbEltYWdlc30gYXV0b3BsYXk9e3RydWV9IC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhbm5lci1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL0tFeVBwbExoY2xsamRTT20yXCJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWNjZXNzaWJpbGl0eS1mdW5kLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1jTXVydHJ5IE1hZ2lzdGVycycgQWNjZXNzaWJpbGl0eSBGdW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xNGt2b3pZVWhlQ1RrSC1RcXhTV2ZPOE9NUXJJTGRncjdjVzN3RjJlUFFKcy9lZGl0I2dpZD0xMzUyNjkzNjE3XCJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwic3R1ZGVudC1yZXNvdXJjZXMtYmFubmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlN0dWRlbnQvQWNhZGVtaWMgUmVzb3VyY2VzIFNwcmVhZHNoZWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9uYXRlLWJ1dHRvbi1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vcmljZWNvbm5lY3QucmljZS5lZHUvZG9uYXRpb24vc3VwcG9ydC1tY211cnRyeS1jb2xsZWdlXCJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZG9uYXRlLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb25hdGUtaGVhcnQtbGVmdFwiPuKZpTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIHRvIE1jTXVydHJ5IENvbGxlZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9uYXRlLWhlYXJ0LXJpZ2h0XCI+4pmlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIEFib3V0IE1jTXVydHJ5IFNlY3Rpb24gKi99XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9J2Fib3V0LXRleHQnIHdpZHRoPXtbMSwgMC45LCAwLjgsIDAuN119IG1sPSdhdXRvJyBtcj0nYXV0bycgbWI9e1sxMCwgMTBdfSBtdD17WzIwLCA1MF19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5BYm91dCBNY011cnRyeTwvaDI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uL3N0YXRpYy9tY21fY29tbW9ucy5qcGcnIGFsdD0nJyB3aWR0aD17MjgwfSBjbGFzc05hbWU9J2Zsb2F0LWxlZnQtaW1nJyBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBtYXJnaW5SaWdodDogJzMwcHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICB7YWJvdXRDb250ZW50Lm1hcCgobGluZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntsaW5lfTwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHsvKiBCdXJ0IGFuZCBEZWVkZWUgU2VjdGlvbiAqL31cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0nYWJvdXQtdGV4dCcgd2lkdGg9e1sxLCAwLjksIDAuOCwgMC43XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBtYj17WzIwLCA1MF19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5CdXJ0IGFuZCBEZWVkZWUgTWNNdXJ0cnk8L2gyPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvYnVydF9kZWVkZWUuanBnJyBhbHQ9Jycgd2lkdGg9ezI2MH0gY2xhc3NOYW1lPSdmbG9hdC1yaWdodC1pbWcnIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBtYXJnaW5MZWZ0OiAnMzBweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19IC8+XHJcbiAgICAgICAgICAgIHtidXJ0RGVlZGVlQ29udGVudC5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57bGluZX08L3A+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7LyogTG9jYXRpb24gTWFwICovfVxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPSdtYXAtc2VjdGlvbicgd2lkdGg9e1sxLCAwLjksIDAuOCwgMC43XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBtYj17WzIwLCA1MF19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5GaW5kIFVzIGF0IFJpY2U8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz9xPTI5LjcyMDQxMzksLTk1LjM5Nzc1NTgmdD1rJno9MTcmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwLCBib3JkZXJSYWRpdXM6ICcxNnB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWNNdXJ0cnkgQ29sbGVnZSBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWRpcmVjdGlvbnMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyLz9hcGk9MSZkZXN0aW5hdGlvbj0yOS43MjA0MTM5LC05NS4zOTc3NTU4JmRlc3RpbmF0aW9uX3BsYWNlX2lkPUNoSUpPM3VieDM0TVFJWVJUelF6ZEUyNGRIWVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1kaXJlY3Rpb25zLWJ0blwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlyZWN0aW9ucy1pY29uXCI+8J+TjTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgRGlyZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiXSwic291cmNlUm9vdCI6IiJ9