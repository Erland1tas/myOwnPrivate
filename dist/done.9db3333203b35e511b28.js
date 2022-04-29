/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/allViews/searchResultView.js":
/*!*********************************************!*\
  !*** ./src/js/allViews/searchResultView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller.js */ "./src/js/controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SearchResults = /*#__PURE__*/function () {
  function SearchResults() {
    _classCallCheck(this, SearchResults);

    _defineProperty(this, "parentEl", document.querySelector('.search-results'));
  }

  _createClass(SearchResults, [{
    key: "displayRecipesList",
    value: function displayRecipesList() {
      var recipesListContainer = this.parentEl.querySelector('.results');
      _controller_js__WEBPACK_IMPORTED_MODULE_0__.state.recipesObj.forEach(function (el) {
        var recipeItem = "\n        <li class=\"preview\">\n          <a class=\"preview__link preview__link--active\" href=\"#23456\">\n            <figure class=\"preview__fig\">\n              <img src=\"".concat(el.image, "\" alt=\"Test\" />\n            </figure>\n            <div class=\"preview__data\">\n              <h4 class=\"preview__title\">").concat(el.title, "</h4>\n              <p class=\"preview__publisher\">").concat(el.publisher, "</p>\n              <div class=\"preview__user-generated\">\n                <svg>\n                  <use href=\"#icon-user\"></use>\n                </svg>\n              </div>\n            </div>\n          </a>\n        </li>\n      ");
        recipesListContainer.insertAdjacentHTML('afterbegin', recipeItem);
      });
    }
  }]);

  return SearchResults;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchResults());

/***/ }),

/***/ "./src/js/allViews/searchView.js":
/*!***************************************!*\
  !*** ./src/js/allViews/searchView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchView = /*#__PURE__*/function () {
  function SearchView() {
    _classCallCheck(this, SearchView);

    _defineProperty(this, "parentEl", document.querySelector('.search'));
  }

  _createClass(SearchView, [{
    key: "searchEntry",
    value: function searchEntry() {
      var searchField = this.parentEl.querySelector('.search__field').value;
      this.clearInput();
      return searchField;
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      this.parentEl.querySelector('.search__field').value = '';
    }
  }, {
    key: "btnPressSearch",
    value: function btnPressSearch(handler) {
      var btnItself = this.parentEl.querySelector('.search__btn');
      var clickEvents = ['click', 'submit'];
      clickEvents.forEach(function (events) {
        btnItself.addEventListener(events, function (e) {
          e.preventDefault();
          handler();
        });
      });
    }
  }]);

  return SearchView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchView());

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
var API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_icons_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons.svg */ "./src/img/icons.svg");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/* harmony import */ var _allViews_searchView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allViews/searchView.js */ "./src/js/allViews/searchView.js");
/* harmony import */ var _allViews_searchResultView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allViews/searchResultView.js */ "./src/js/allViews/searchResultView.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // polyfilling async/await







var logoContainer = document.querySelector('.header__logo');
logoContainer.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_2__;
var state = {
  search: '',
  recipesObj: []
};

var searchRecipes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, _yield$response$json, data, _iterator, _step, datas;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            state.search = _allViews_searchView_js__WEBPACK_IMPORTED_MODULE_5__["default"].searchEntry();

            if (state.search) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_4__.API_URL, "?search=").concat(state.search));

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            _yield$response$json = _context.sent;
            data = _yield$response$json.data;
            _iterator = _createForOfIteratorHelper(data.recipes);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                datas = _step.value;
                state.recipesObj.push({
                  publisher: datas.publisher,
                  image: datas.image_url,
                  title: datas.title,
                  id: datas.id
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _allViews_searchResultView_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayRecipesList();
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function searchRecipes() {
    return _ref.apply(this, arguments);
  };
}();

var init = function init() {
  _allViews_searchView_js__WEBPACK_IMPORTED_MODULE_5__["default"].btnPressSearch(searchRecipes);
};

init();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 61.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 1.6;\n  color: #615551;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: calc(100vh - 8vw);\n}\n\n.container {\n  max-width: 120rem;\n  min-height: 117rem;\n  margin: 4vw auto;\n  background-color: #fff;\n  border-radius: 9px;\n  overflow: hidden;\n  box-shadow: 0 2rem 6rem 0.5rem rgba(97, 85, 81, 0.2);\n  display: grid;\n  grid-template-rows: 10rem minmax(100rem, auto);\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: \"head head\" \"list recipe\";\n}\n@media only screen and (max-width: 78.15em) {\n  .container {\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n\n.btn--small, .btn--small:link, .btn--small:visited, .btn {\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  border-radius: 10rem;\n  border: none;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn--small:hover, .btn:hover {\n  transform: scale(1.05);\n}\n.btn--small:focus, .btn:focus {\n  outline: none;\n}\n.btn--small > *:first-child, .btn > *:first-child {\n  margin-right: 1rem;\n}\n\n.btn {\n  padding: 1.5rem 4rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.btn svg {\n  height: 2.25rem;\n  width: 2.25rem;\n  fill: currentColor;\n}\n\n.btn--small, .btn--small:link, .btn--small:visited {\n  font-size: 1.4rem;\n  font-weight: 600;\n  padding: 1.25rem 2.25rem;\n  text-decoration: none;\n}\n.btn--small svg, .btn--small:link svg, .btn--small:visited svg {\n  height: 1.75rem;\n  width: 1.75rem;\n  fill: currentColor;\n}\n\n.btn--inline {\n  color: #f38e82;\n  font-size: 1.3rem;\n  font-weight: 600;\n  border: none;\n  background-color: #f9f5f3;\n  padding: 0.8rem 1.2rem;\n  border-radius: 10rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn--inline svg {\n  height: 1.6rem;\n  width: 1.6rem;\n  fill: currentColor;\n  margin: 0 0.2rem;\n}\n.btn--inline span {\n  margin: 0 0.4rem;\n}\n.btn--inline:hover {\n  color: #f48982;\n  background-color: #f2efee;\n}\n.btn--inline:focus {\n  outline: none;\n}\n\n.btn--round {\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  height: 4.5rem;\n  width: 4.5rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn--round:hover {\n  transform: scale(1.07);\n}\n.btn--round:focus {\n  outline: none;\n}\n.btn--round svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #fff;\n}\n\n.btn--tiny {\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.btn--tiny svg {\n  height: 100%;\n  width: 100%;\n  fill: #f38e82;\n  transition: all 0.3s;\n}\n.btn--tiny:focus {\n  outline: none;\n}\n.btn--tiny:hover svg {\n  fill: #f48982;\n  transform: translateY(-1px);\n}\n.btn--tiny:active svg {\n  fill: #f48982;\n  transform: translateY(0);\n}\n.btn--tiny:not(:last-child) {\n  margin-right: 0.3rem;\n}\n\n.heading--2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #f38e82;\n  text-transform: uppercase;\n  margin-bottom: 2.5rem;\n  text-align: center;\n}\n\n.link:link,\n.link:visited {\n  color: #918581;\n}\n\n.spinner {\n  margin: 5rem auto;\n  text-align: center;\n}\n.spinner svg {\n  height: 6rem;\n  width: 6rem;\n  fill: #f38e82;\n  animation: rotate 2s infinite linear;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.message,\n.error {\n  max-width: 40rem;\n  margin: 0 auto;\n  padding: 5rem 4rem;\n  display: flex;\n}\n.message svg,\n.error svg {\n  height: 3rem;\n  width: 3rem;\n  fill: #f38e82;\n  transform: translateY(-0.3rem);\n}\n.message p,\n.error p {\n  margin-left: 1.5rem;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  font-weight: 600;\n}\n\n.header {\n  grid-area: head;\n  background-color: #f9f5f3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header__logo {\n  margin-left: 4rem;\n  height: 4.6rem;\n  display: block;\n}\n\n.search {\n  background-color: #fff;\n  border-radius: 10rem;\n  display: flex;\n  align-items: center;\n  padding-left: 3rem;\n  transition: all 0.3s;\n}\n.search:focus-within {\n  transform: translateY(-2px);\n  box-shadow: 0 0.7rem 3rem rgba(97, 85, 81, 0.08);\n}\n.search__field {\n  border: none;\n  background: none;\n  font-family: inherit;\n  color: inherit;\n  font-size: 1.7rem;\n  width: 30rem;\n}\n.search__field:focus {\n  outline: none;\n}\n.search__field::placeholder {\n  color: #d3c7c3;\n}\n@media only screen and (max-width: 61.25em) {\n  .search__field {\n    width: auto;\n  }\n  .search__field::placeholder {\n    color: white;\n  }\n}\n.search__btn {\n  font-weight: 600;\n  font-family: inherit;\n}\n\n.nav {\n  align-self: stretch;\n  margin-right: 2.5rem;\n}\n.nav__list {\n  list-style: none;\n  display: flex;\n  height: 100%;\n}\n.nav__item {\n  position: relative;\n}\n.nav__btn {\n  height: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 1.5rem;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n}\n.nav__btn svg {\n  height: 2.4rem;\n  width: 2.4rem;\n  fill: #f38e82;\n  margin-right: 0.7rem;\n  transform: translateY(-1px);\n}\n.nav__btn:focus {\n  outline: none;\n}\n.nav__btn:hover {\n  background-color: #f2efee;\n}\n\n.bookmarks {\n  padding: 1rem 0;\n  position: absolute;\n  right: -2.5rem;\n  z-index: 10;\n  width: 40rem;\n  background-color: #fff;\n  box-shadow: 0 0.8rem 5rem 2rem rgba(97, 85, 81, 0.1);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s 0.2s;\n}\n.bookmarks__list {\n  list-style: none;\n}\n.bookmarks__field {\n  cursor: pointer;\n  padding: 0 4rem;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  transition: all 0.3s;\n}\n.bookmarks__field:hover {\n  background-color: #f2efee;\n}\n.bookmarks:hover, .nav__btn--bookmarks:hover + .bookmarks {\n  visibility: visible;\n  opacity: 1;\n}\n\n.preview__link:link, .preview__link:visited {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 3.25rem;\n  transition: all 0.3s;\n  border-right: 1px solid #fff;\n  text-decoration: none;\n}\n.preview__link:hover {\n  background-color: #f9f5f3;\n  transform: translateY(-2px);\n}\n.preview__link--active {\n  background-color: #f9f5f3;\n}\n.preview__fig {\n  flex: 0 0 5.8rem;\n  border-radius: 50%;\n  overflow: hidden;\n  height: 5.8rem;\n  margin-right: 2rem;\n  position: relative;\n  backface-visibility: hidden;\n}\n.preview__fig::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  opacity: 0.4;\n}\n.preview__fig img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: all 0.3s;\n}\n.preview__data {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 2rem;\n  row-gap: 0.1rem;\n  align-items: center;\n}\n.preview__title {\n  grid-column: 1/-1;\n  font-size: 1.45rem;\n  color: #f38e82;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  max-width: 25rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.preview__publisher {\n  font-size: 1.15rem;\n  color: #918581;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.preview__user-generated {\n  background-color: #eeeae8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 10rem;\n  margin-left: auto;\n  margin-right: 1.75rem;\n}\n.preview__user-generated svg {\n  height: 1.2rem;\n  width: 1.2rem;\n  fill: #f38e82;\n}\n\n.search-results {\n  padding: 3rem 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.results {\n  list-style: none;\n  margin-bottom: 2rem;\n}\n\n.pagination {\n  margin-top: auto;\n  padding: 0 3.5rem;\n}\n.pagination::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.pagination__btn--prev {\n  float: left;\n}\n.pagination__btn--next {\n  float: right;\n}\n\n.copyright {\n  color: #918581;\n  font-size: 1.2rem;\n  padding: 0 3.5rem;\n  margin-top: 4rem;\n}\n.copyright .twitter-link:link,\n.copyright .twitter-link:visited {\n  color: #918581;\n}\n\n.recipe {\n  background-color: #f9f5f3;\n}\n.recipe__fig {\n  height: 32rem;\n  position: relative;\n  transform-origin: top;\n}\n.recipe__fig::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  opacity: 0.6;\n}\n.recipe__img {\n  width: 100%;\n  display: block;\n  height: 100%;\n  object-fit: cover;\n}\n.recipe__title {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 20%) skewY(-6deg);\n  color: #fff;\n  font-weight: 700;\n  font-size: 3.25rem;\n  text-transform: uppercase;\n  width: 50%;\n  line-height: 1.95;\n  text-align: center;\n}\n.recipe__title span {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  padding: 1.3rem 2rem;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n}\n@media only screen and (max-width: 61.25em) {\n  .recipe__title {\n    width: 70%;\n  }\n}\n.recipe__details {\n  display: flex;\n  align-items: center;\n  padding: 7.5rem 8rem 3.5rem 8rem;\n}\n.recipe__info {\n  font-size: 1.65rem;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.recipe__info:not(:last-child) {\n  margin-right: 4.5rem;\n}\n.recipe__info-icon {\n  height: 2.35rem;\n  width: 2.35rem;\n  fill: #f38e82;\n  margin-right: 1.15rem;\n}\n.recipe__info-data {\n  margin-right: 0.5rem;\n  font-weight: 700;\n}\n.recipe__info-buttons {\n  display: flex;\n  margin-left: 1.6rem;\n  transform: translateY(-1px);\n}\n.recipe__user-generated {\n  background-color: #eeeae8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 10rem;\n  margin-left: auto;\n  margin-right: 1.75rem;\n}\n.recipe__user-generated svg {\n  height: 2.25rem;\n  width: 2.25rem;\n  fill: #f38e82;\n}\n.recipe__ingredients {\n  padding: 5rem 8rem;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  background-color: #f2efee;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.recipe__ingredient-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem 3rem;\n  list-style: none;\n}\n.recipe__ingredient {\n  display: flex;\n}\n.recipe__icon {\n  height: 2rem;\n  width: 2rem;\n  fill: #f38e82;\n  margin-right: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.1rem;\n}\n.recipe__quantity {\n  margin-right: 0.5rem;\n  flex: 0 0 auto;\n}\n.recipe__directions {\n  padding: 5rem 10rem;\n  padding-bottom: 5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.recipe__directions-text {\n  font-size: 1.7rem;\n  text-align: center;\n  margin-bottom: 3.5rem;\n  color: #918581;\n}\n.recipe__publisher {\n  font-weight: 700;\n}\n\n.add-recipe-window {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100rem;\n  background-color: white;\n  border-radius: 9px;\n  padding: 5rem 6rem;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);\n  z-index: 1000;\n  transition: all 0.5s;\n}\n.add-recipe-window .btn--close-modal {\n  font-family: inherit;\n  color: inherit;\n  position: absolute;\n  top: 0.5rem;\n  right: 1.6rem;\n  font-size: 3.5rem;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.5s;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.upload {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem 6rem;\n}\n.upload__column {\n  display: grid;\n  grid-template-columns: 1fr 2.8fr;\n  align-items: center;\n  gap: 1.5rem;\n}\n.upload__column label {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: inherit;\n}\n.upload__column input {\n  font-size: 1.5rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n}\n.upload__column input::placeholder {\n  color: #d3c7c3;\n}\n.upload__column input:focus {\n  outline: none;\n  border: 1px solid #f38e82;\n  background-color: #f9f5f3;\n}\n.upload__column button {\n  grid-column: 1/span 2;\n  justify-self: center;\n  margin-top: 1rem;\n}\n.upload__heading {\n  font-size: 2.25rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  grid-column: 1/-1;\n}\n.upload__btn {\n  grid-column: 1/-1;\n  justify-self: center;\n}", "",{"version":3,"sources":["webpack://./src/sass/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/_components.scss","webpack://./src/sass/_header.scss","webpack://./src/sass/_preview.scss","webpack://./src/sass/_searchResults.scss","webpack://./src/sass/_recipe.scss","webpack://./src/sass/_upload.scss"],"names":[],"mappings":"AAkBA;EACE,SAAA;EACA,UAAA;ACjBF;;ADoBA;;;EAGE,mBAAA;ACjBF;;ADoBA;EACE,sBAAA;EACA,gBAAA;ACjBF;ADmBE;EAJF;IAKI,cAAA;EChBF;AACF;;ADmBA;EACE,sCAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAlCkB;EAmClB,oEAhCS;EAiCT,sBAAA;EACA,4BAAA;EACA,6BAAA;AChBF;;ADmBA;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oDAAA;EAEA,aAAA;EACA,8CAAA;EACA,8BAAA;EACA,8CACE;AClBJ;ADqBE;EAhBF;IAiBI,eAAA;IACA,SAAA;IACA,gBAAA;EClBF;AACF;;ACnDA;EACE,oEFUS;EETT,oBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;ADsDF;ACpDE;EACE,sBAAA;ADsDJ;ACnDE;EACE,aAAA;ADqDJ;AClDE;EACE,kBAAA;ADoDJ;;AChDA;EAGE,oBAAA;EACA,iBAAA;EACA,gBAAA;ADiDF;AC/CE;EACE,eAAA;EACA,cAAA;EACA,kBAAA;ADiDJ;;AC5CE;EAKE,iBAAA;EACA,gBAAA;EACA,wBAAA;EACA,qBAAA;AD2CJ;ACzCI;EACE,eAAA;EACA,cAAA;EACA,kBAAA;AD2CN;;ACtCA;EACE,cFzDc;EE0Dd,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,yBFzDmB;EE0DnB,sBAAA;EACA,oBAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,oBAAA;ADwCF;ACtCE;EACE,cAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;ADwCJ;ACrCE;EACE,gBAAA;ADuCJ;ACpCE;EACE,cFhFW;EEiFX,yBF9EiB;ACoHrB;ACnCE;EACE,aAAA;ADqCJ;;ACjCA;EACE,oEFlFS;EEmFT,kBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EAEA,oBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;ADkCF;AChCE;EACE,sBAAA;ADkCJ;AC/BE;EACE,aAAA;ADiCJ;AC9BE;EACE,cAAA;EACA,aAAA;EACA,UAAA;ADgCJ;;AC5BA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;AD+BF;AC7BE;EACE,YAAA;EACA,WAAA;EACA,aFlIY;EEmIZ,oBAAA;AD+BJ;AC5BE;EACE,aAAA;AD8BJ;AC3BE;EACE,aFzIW;EE0IX,2BAAA;AD6BJ;AC1BE;EACE,aF9IW;EE+IX,wBAAA;AD4BJ;ACzBE;EACE,oBAAA;AD2BJ;;ACvBA;EACE,eAAA;EACA,gBAAA;EACA,cF5Jc;EE6Jd,yBAAA;EACA,qBAAA;EACA,kBAAA;AD0BF;;ACtBA;;EAEE,cF7JkB;ACsLpB;;ACtBA;EACE,iBAAA;EACA,kBAAA;ADyBF;ACvBE;EACE,YAAA;EACA,WAAA;EACA,aF/KY;EEgLZ,oCAAA;ADyBJ;;ACrBA;EACE;IACE,oBAAA;EDwBF;ECrBA;IACE,yBAAA;EDuBF;AACF;ACpBA;;EAEE,gBAAA;EACA,cAAA;EACA,kBAAA;EAEA,aAAA;ADqBF;ACnBE;;EACE,YAAA;EACA,WAAA;EACA,aFzMY;EE0MZ,8BAAA;ADsBJ;ACnBE;;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;ADsBJ;;AExOA;EACE,eAAA;EACA,yBHGmB;EGFnB,aAAA;EACA,mBAAA;EACA,8BAAA;AF2OF;AEzOE;EACE,iBAAA;EACA,cAAA;EACA,cAAA;AF2OJ;;AEvOA;EACE,sBAAA;EACA,oBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AF0OF;AExOE;EACE,2BAAA;EACA,gDAAA;AF0OJ;AEvOE;EACE,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;AFyOJ;AEvOI;EACE,aAAA;AFyON;AEtOI;EACE,cHjCe;ACyQrB;AErOI;EAhBF;IAiBI,WAAA;EFwOJ;EEtOI;IACE,YAAA;EFwON;AACF;AEpOE;EACE,gBAAA;EACA,oBAAA;AFsOJ;;AElOA;EACE,mBAAA;EACA,oBAAA;AFqOF;AEnOE;EACE,gBAAA;EACA,aAAA;EACA,YAAA;AFqOJ;AElOE;EACE,kBAAA;AFoOJ;AEjOE;EACE,YAAA;EACA,oBAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,mBAAA;AFkOJ;AEhOI;EACE,cAAA;EACA,aAAA;EACA,aH1FU;EG2FV,oBAAA;EACA,2BAAA;AFkON;AE/NI;EACE,aAAA;AFiON;AE9NI;EACE,yBH/Fe;AC+TrB;;AE3NA;EACE,eAAA;EACA,kBAAA;EAEA,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oDAAA;EAEA,kBAAA;EACA,UAAA;EACA,yBAAA;AF4NF;AE1NE;EACE,gBAAA;AF4NJ;AEzNE;EACE,eAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,oBAAA;AF0NJ;AExNI;EACE,yBHhIe;AC0VrB;AEtNE;EAEE,mBAAA;EACA,UAAA;AFuNJ;;AGlWI;EAEE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,4BAAA;EACA,qBAAA;AHoWN;AGjWI;EACE,yBJRe;EISf,2BAAA;AHmWN;AGhWI;EACE,yBJbe;AC+WrB;AG9VE;EACE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,2BAAA;AHgWJ;AG9VI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,oEAAA;EAKA,YAAA;AH4VN;AGzVI;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;AH2VN;AGvVE;EACE,aAAA;EACA,WAAA;EACA,+BAAA;EACA,eAAA;EACA,mBAAA;AHyVJ;AGtVE;EACE,iBAAA;EACA,kBAAA;EACA,cJlEY;EImEZ,yBAAA;EACA,gBAAA;EAGA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AHsVJ;AGnVE;EACE,kBAAA;EACA,cJvEgB;EIwEhB,yBAAA;EACA,gBAAA;AHqVJ;AGlVE;EACE,yBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;EAEA,iBAAA;EACA,qBAAA;AHkVJ;AGhVI;EACE,cAAA;EACA,aAAA;EACA,aJpGU;ACsbhB;;AIvbA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;AJ0bF;;AIvbA;EACE,gBAAA;EACA,mBAAA;AJ0bF;;AIvbA;EACE,gBAAA;EACA,iBAAA;AJ0bF;AIxbE;EACE,WAAA;EACA,cAAA;EACA,WAAA;AJ0bJ;AItbI;EACE,WAAA;AJwbN;AItbI;EACE,YAAA;AJwbN;;AInbA;EACE,cLvBkB;EKwBlB,iBAAA;EACA,iBAAA;EACA,gBAAA;AJsbF;AIpbE;;EAEE,cL9BgB;ACodpB;;AK7dA;EACE,yBNImB;AC4drB;AK5dE;EACE,aAAA;EACA,kBAAA;EAEA,qBAAA;AL6dJ;AK3dI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,oEAAA;EAKA,YAAA;ALydN;AKrdE;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;ALudJ;AKpdE;EACE,kBAAA;EACA,SAAA;EACA,SAAA;EACA,4CAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;ALsdJ;AKpdI;EACE,mCAAA;EACA,2BAAA;EACA,oBAAA;EACA,oEAAA;ALsdN;AK/cI;EAxBF;IAyBI,UAAA;ELkdJ;AACF;AK7cE;EACE,aAAA;EACA,mBAAA;EACA,gCAAA;AL+cJ;AK5cE;EACE,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AL8cJ;AK5cI;EACE,oBAAA;AL8cN;AK1cE;EACE,eAAA;EACA,cAAA;EACA,aNrFY;EMsFZ,qBAAA;AL4cJ;AKzcE;EACE,oBAAA;EACA,gBAAA;AL2cJ;AKxcE;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;AL0cJ;AKvcE;EACE,yBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;EAEA,iBAAA;EACA,qBAAA;ALucJ;AKrcI;EACE,eAAA;EACA,cAAA;EACA,aNpHU;AC2jBhB;AKjcE;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBNzHiB;EM0HjB,aAAA;EACA,sBAAA;EACA,mBAAA;ALmcJ;AKhcE;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,gBAAA;ALkcJ;AK/bE;EACE,aAAA;ALicJ;AK9bE;EACE,YAAA;EACA,WAAA;EACA,aNlJY;EMmJZ,oBAAA;EACA,cAAA;EACA,kBAAA;ALgcJ;AK7bE;EACE,oBAAA;EACA,cAAA;AL+bJ;AK1bE;EACE,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AL4bJ;AKzbE;EACE,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cNnKgB;AC8lBpB;AKxbE;EACE,gBAAA;AL0bJ;;AM1mBA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,kBAAA;EACA,2CAAA;EACA,aAAA;EACA,oBAAA;AN4mBF;AM1mBE;EACE,oBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;AN4mBJ;;AMxmBA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,0BAAA;EACA,YAAA;EACA,oBAAA;AN2mBF;;AMxmBA;EACE,kBAAA;EACA,UAAA;AN2mBF;;AMxmBA;EACE,aAAA;EACA,8BAAA;EACA,cAAA;AN2mBF;AMzmBE;EACE,aAAA;EACA,gCAAA;EACA,mBAAA;EACA,WAAA;AN2mBJ;AMzmBI;EACE,iBAAA;EACA,gBAAA;EACA,cAAA;AN2mBN;AMxmBI;EACE,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AN0mBN;AMxmBM;EACE,cP9Da;ACwqBrB;AMvmBM;EACE,aAAA;EACA,yBAAA;EACA,yBPtEa;AC+qBrB;AMrmBI;EACE,qBAAA;EACA,oBAAA;EACA,gBAAA;ANumBN;AMnmBE;EACE,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,iBAAA;ANqmBJ;AMlmBE;EACE,iBAAA;EACA,oBAAA;ANomBJ","sourcesContent":["// $color-primary: #f59a83;\n$color-primary: #f38e82;\n$color-grad-1: #fbdb89;\n$color-grad-2: #f48982;\n\n$color-grey-light-1: #f9f5f3; // Light background\n$color-grey-light-2: #f2efee; // Light lines\n$color-grey-light-3: #d3c7c3; // Light text (placeholder)\n$color-grey-dark-1: #615551; // Normal text\n$color-grey-dark-2: #918581; // Lighter text\n\n$gradient: linear-gradient(to right bottom, $color-grad-1, $color-grad-2);\n\n$bp-large: 78.15em; // 1250px\n$bp-medium: 61.25em; // 980px\n$bp-small: 37.5em; // 600px\n$bp-smallest: 31.25em; // 500px\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n\n  @media only screen and (max-width: $bp-medium) {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: 'Nunito Sans', sans-serif;\n  font-weight: 400;\n  line-height: 1.6;\n  color: $color-grey-dark-1;\n  background-image: $gradient;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: calc(100vh - 2 * 4vw);\n}\n\n.container {\n  max-width: 120rem;\n  min-height: 117rem;\n  margin: 4vw auto;\n  background-color: #fff;\n  border-radius: 9px;\n  overflow: hidden;\n  box-shadow: 0 2rem 6rem 0.5rem rgba($color-grey-dark-1, 0.2);\n\n  display: grid;\n  grid-template-rows: 10rem minmax(100rem, auto);\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas:\n    'head head'\n    'list recipe';\n\n  @media only screen and (max-width: $bp-large) {\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n","* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 61.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 1.6;\n  color: #615551;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: calc(100vh - 8vw);\n}\n\n.container {\n  max-width: 120rem;\n  min-height: 117rem;\n  margin: 4vw auto;\n  background-color: #fff;\n  border-radius: 9px;\n  overflow: hidden;\n  box-shadow: 0 2rem 6rem 0.5rem rgba(97, 85, 81, 0.2);\n  display: grid;\n  grid-template-rows: 10rem minmax(100rem, auto);\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: \"head head\" \"list recipe\";\n}\n@media only screen and (max-width: 78.15em) {\n  .container {\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n\n.btn--small, .btn--small:link, .btn--small:visited, .btn {\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  border-radius: 10rem;\n  border: none;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn--small:hover, .btn:hover {\n  transform: scale(1.05);\n}\n.btn--small:focus, .btn:focus {\n  outline: none;\n}\n.btn--small > *:first-child, .btn > *:first-child {\n  margin-right: 1rem;\n}\n\n.btn {\n  padding: 1.5rem 4rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.btn svg {\n  height: 2.25rem;\n  width: 2.25rem;\n  fill: currentColor;\n}\n\n.btn--small, .btn--small:link, .btn--small:visited {\n  font-size: 1.4rem;\n  font-weight: 600;\n  padding: 1.25rem 2.25rem;\n  text-decoration: none;\n}\n.btn--small svg, .btn--small:link svg, .btn--small:visited svg {\n  height: 1.75rem;\n  width: 1.75rem;\n  fill: currentColor;\n}\n\n.btn--inline {\n  color: #f38e82;\n  font-size: 1.3rem;\n  font-weight: 600;\n  border: none;\n  background-color: #f9f5f3;\n  padding: 0.8rem 1.2rem;\n  border-radius: 10rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn--inline svg {\n  height: 1.6rem;\n  width: 1.6rem;\n  fill: currentColor;\n  margin: 0 0.2rem;\n}\n.btn--inline span {\n  margin: 0 0.4rem;\n}\n.btn--inline:hover {\n  color: #f48982;\n  background-color: #f2efee;\n}\n.btn--inline:focus {\n  outline: none;\n}\n\n.btn--round {\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  height: 4.5rem;\n  width: 4.5rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn--round:hover {\n  transform: scale(1.07);\n}\n.btn--round:focus {\n  outline: none;\n}\n.btn--round svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #fff;\n}\n\n.btn--tiny {\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.btn--tiny svg {\n  height: 100%;\n  width: 100%;\n  fill: #f38e82;\n  transition: all 0.3s;\n}\n.btn--tiny:focus {\n  outline: none;\n}\n.btn--tiny:hover svg {\n  fill: #f48982;\n  transform: translateY(-1px);\n}\n.btn--tiny:active svg {\n  fill: #f48982;\n  transform: translateY(0);\n}\n.btn--tiny:not(:last-child) {\n  margin-right: 0.3rem;\n}\n\n.heading--2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #f38e82;\n  text-transform: uppercase;\n  margin-bottom: 2.5rem;\n  text-align: center;\n}\n\n.link:link,\n.link:visited {\n  color: #918581;\n}\n\n.spinner {\n  margin: 5rem auto;\n  text-align: center;\n}\n.spinner svg {\n  height: 6rem;\n  width: 6rem;\n  fill: #f38e82;\n  animation: rotate 2s infinite linear;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.message,\n.error {\n  max-width: 40rem;\n  margin: 0 auto;\n  padding: 5rem 4rem;\n  display: flex;\n}\n.message svg,\n.error svg {\n  height: 3rem;\n  width: 3rem;\n  fill: #f38e82;\n  transform: translateY(-0.3rem);\n}\n.message p,\n.error p {\n  margin-left: 1.5rem;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  font-weight: 600;\n}\n\n.header {\n  grid-area: head;\n  background-color: #f9f5f3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header__logo {\n  margin-left: 4rem;\n  height: 4.6rem;\n  display: block;\n}\n\n.search {\n  background-color: #fff;\n  border-radius: 10rem;\n  display: flex;\n  align-items: center;\n  padding-left: 3rem;\n  transition: all 0.3s;\n}\n.search:focus-within {\n  transform: translateY(-2px);\n  box-shadow: 0 0.7rem 3rem rgba(97, 85, 81, 0.08);\n}\n.search__field {\n  border: none;\n  background: none;\n  font-family: inherit;\n  color: inherit;\n  font-size: 1.7rem;\n  width: 30rem;\n}\n.search__field:focus {\n  outline: none;\n}\n.search__field::placeholder {\n  color: #d3c7c3;\n}\n@media only screen and (max-width: 61.25em) {\n  .search__field {\n    width: auto;\n  }\n  .search__field::placeholder {\n    color: white;\n  }\n}\n.search__btn {\n  font-weight: 600;\n  font-family: inherit;\n}\n\n.nav {\n  align-self: stretch;\n  margin-right: 2.5rem;\n}\n.nav__list {\n  list-style: none;\n  display: flex;\n  height: 100%;\n}\n.nav__item {\n  position: relative;\n}\n.nav__btn {\n  height: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 1.5rem;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n}\n.nav__btn svg {\n  height: 2.4rem;\n  width: 2.4rem;\n  fill: #f38e82;\n  margin-right: 0.7rem;\n  transform: translateY(-1px);\n}\n.nav__btn:focus {\n  outline: none;\n}\n.nav__btn:hover {\n  background-color: #f2efee;\n}\n\n.bookmarks {\n  padding: 1rem 0;\n  position: absolute;\n  right: -2.5rem;\n  z-index: 10;\n  width: 40rem;\n  background-color: #fff;\n  box-shadow: 0 0.8rem 5rem 2rem rgba(97, 85, 81, 0.1);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s 0.2s;\n}\n.bookmarks__list {\n  list-style: none;\n}\n.bookmarks__field {\n  cursor: pointer;\n  padding: 0 4rem;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  transition: all 0.3s;\n}\n.bookmarks__field:hover {\n  background-color: #f2efee;\n}\n.bookmarks:hover, .nav__btn--bookmarks:hover + .bookmarks {\n  visibility: visible;\n  opacity: 1;\n}\n\n.preview__link:link, .preview__link:visited {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 3.25rem;\n  transition: all 0.3s;\n  border-right: 1px solid #fff;\n  text-decoration: none;\n}\n.preview__link:hover {\n  background-color: #f9f5f3;\n  transform: translateY(-2px);\n}\n.preview__link--active {\n  background-color: #f9f5f3;\n}\n.preview__fig {\n  flex: 0 0 5.8rem;\n  border-radius: 50%;\n  overflow: hidden;\n  height: 5.8rem;\n  margin-right: 2rem;\n  position: relative;\n  backface-visibility: hidden;\n}\n.preview__fig::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  opacity: 0.4;\n}\n.preview__fig img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: all 0.3s;\n}\n.preview__data {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 2rem;\n  row-gap: 0.1rem;\n  align-items: center;\n}\n.preview__title {\n  grid-column: 1/-1;\n  font-size: 1.45rem;\n  color: #f38e82;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  max-width: 25rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.preview__publisher {\n  font-size: 1.15rem;\n  color: #918581;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.preview__user-generated {\n  background-color: #eeeae8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 10rem;\n  margin-left: auto;\n  margin-right: 1.75rem;\n}\n.preview__user-generated svg {\n  height: 1.2rem;\n  width: 1.2rem;\n  fill: #f38e82;\n}\n\n.search-results {\n  padding: 3rem 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.results {\n  list-style: none;\n  margin-bottom: 2rem;\n}\n\n.pagination {\n  margin-top: auto;\n  padding: 0 3.5rem;\n}\n.pagination::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.pagination__btn--prev {\n  float: left;\n}\n.pagination__btn--next {\n  float: right;\n}\n\n.copyright {\n  color: #918581;\n  font-size: 1.2rem;\n  padding: 0 3.5rem;\n  margin-top: 4rem;\n}\n.copyright .twitter-link:link,\n.copyright .twitter-link:visited {\n  color: #918581;\n}\n\n.recipe {\n  background-color: #f9f5f3;\n}\n.recipe__fig {\n  height: 32rem;\n  position: relative;\n  transform-origin: top;\n}\n.recipe__fig::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n  opacity: 0.6;\n}\n.recipe__img {\n  width: 100%;\n  display: block;\n  height: 100%;\n  object-fit: cover;\n}\n.recipe__title {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 20%) skewY(-6deg);\n  color: #fff;\n  font-weight: 700;\n  font-size: 3.25rem;\n  text-transform: uppercase;\n  width: 50%;\n  line-height: 1.95;\n  text-align: center;\n}\n.recipe__title span {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  padding: 1.3rem 2rem;\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\n}\n@media only screen and (max-width: 61.25em) {\n  .recipe__title {\n    width: 70%;\n  }\n}\n.recipe__details {\n  display: flex;\n  align-items: center;\n  padding: 7.5rem 8rem 3.5rem 8rem;\n}\n.recipe__info {\n  font-size: 1.65rem;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.recipe__info:not(:last-child) {\n  margin-right: 4.5rem;\n}\n.recipe__info-icon {\n  height: 2.35rem;\n  width: 2.35rem;\n  fill: #f38e82;\n  margin-right: 1.15rem;\n}\n.recipe__info-data {\n  margin-right: 0.5rem;\n  font-weight: 700;\n}\n.recipe__info-buttons {\n  display: flex;\n  margin-left: 1.6rem;\n  transform: translateY(-1px);\n}\n.recipe__user-generated {\n  background-color: #eeeae8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 10rem;\n  margin-left: auto;\n  margin-right: 1.75rem;\n}\n.recipe__user-generated svg {\n  height: 2.25rem;\n  width: 2.25rem;\n  fill: #f38e82;\n}\n.recipe__ingredients {\n  padding: 5rem 8rem;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  background-color: #f2efee;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.recipe__ingredient-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem 3rem;\n  list-style: none;\n}\n.recipe__ingredient {\n  display: flex;\n}\n.recipe__icon {\n  height: 2rem;\n  width: 2rem;\n  fill: #f38e82;\n  margin-right: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.1rem;\n}\n.recipe__quantity {\n  margin-right: 0.5rem;\n  flex: 0 0 auto;\n}\n.recipe__directions {\n  padding: 5rem 10rem;\n  padding-bottom: 5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.recipe__directions-text {\n  font-size: 1.7rem;\n  text-align: center;\n  margin-bottom: 3.5rem;\n  color: #918581;\n}\n.recipe__publisher {\n  font-weight: 700;\n}\n\n.add-recipe-window {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100rem;\n  background-color: white;\n  border-radius: 9px;\n  padding: 5rem 6rem;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);\n  z-index: 1000;\n  transition: all 0.5s;\n}\n.add-recipe-window .btn--close-modal {\n  font-family: inherit;\n  color: inherit;\n  position: absolute;\n  top: 0.5rem;\n  right: 1.6rem;\n  font-size: 3.5rem;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.5s;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.upload {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem 6rem;\n}\n.upload__column {\n  display: grid;\n  grid-template-columns: 1fr 2.8fr;\n  align-items: center;\n  gap: 1.5rem;\n}\n.upload__column label {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: inherit;\n}\n.upload__column input {\n  font-size: 1.5rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n}\n.upload__column input::placeholder {\n  color: #d3c7c3;\n}\n.upload__column input:focus {\n  outline: none;\n  border: 1px solid #f38e82;\n  background-color: #f9f5f3;\n}\n.upload__column button {\n  grid-column: 1/span 2;\n  justify-self: center;\n  margin-top: 1rem;\n}\n.upload__heading {\n  font-size: 2.25rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  grid-column: 1/-1;\n}\n.upload__btn {\n  grid-column: 1/-1;\n  justify-self: center;\n}","%btn {\n  background-image: $gradient;\n  border-radius: 10rem;\n  border: none;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  & > *:first-child {\n    margin-right: 1rem;\n  }\n}\n\n.btn {\n  @extend %btn;\n\n  padding: 1.5rem 4rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n\n  svg {\n    height: 2.25rem;\n    width: 2.25rem;\n    fill: currentColor;\n  }\n}\n\n.btn--small {\n  &,\n  &:link,\n  &:visited {\n    @extend %btn;\n\n    font-size: 1.4rem;\n    font-weight: 600;\n    padding: 1.25rem 2.25rem;\n    text-decoration: none;\n\n    svg {\n      height: 1.75rem;\n      width: 1.75rem;\n      fill: currentColor;\n    }\n  }\n}\n\n.btn--inline {\n  color: $color-primary;\n  font-size: 1.3rem;\n  font-weight: 600;\n  border: none;\n  background-color: $color-grey-light-1;\n  padding: 0.8rem 1.2rem;\n  border-radius: 10rem;\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n\n  svg {\n    height: 1.6rem;\n    width: 1.6rem;\n    fill: currentColor;\n    margin: 0 0.2rem;\n  }\n\n  span {\n    margin: 0 0.4rem;\n  }\n\n  &:hover {\n    color: $color-grad-2;\n    background-color: $color-grey-light-2;\n  }\n\n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--round {\n  background-image: $gradient;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  height: 4.5rem;\n  width: 4.5rem;\n  // margin-left: auto;\n  transition: all 0.2s;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    transform: scale(1.07);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  svg {\n    height: 2.5rem;\n    width: 2.5rem;\n    fill: #fff;\n  }\n}\n\n.btn--tiny {\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  svg {\n    height: 100%;\n    width: 100%;\n    fill: $color-primary;\n    transition: all 0.3s;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover svg {\n    fill: $color-grad-2;\n    transform: translateY(-1px);\n  }\n\n  &:active svg {\n    fill: $color-grad-2;\n    transform: translateY(0);\n  }\n\n  &:not(:last-child) {\n    margin-right: 0.3rem;\n  }\n}\n\n.heading--2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: $color-primary;\n  text-transform: uppercase;\n  margin-bottom: 2.5rem;\n  text-align: center;\n  // transform: skewY(-3deg);\n}\n\n.link:link,\n.link:visited {\n  color: $color-grey-dark-2;\n}\n\n.spinner {\n  margin: 5rem auto;\n  text-align: center;\n\n  svg {\n    height: 6rem;\n    width: 6rem;\n    fill: $color-primary;\n    animation: rotate 2s infinite linear;\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.message,\n.error {\n  max-width: 40rem;\n  margin: 0 auto;\n  padding: 5rem 4rem;\n\n  display: flex;\n\n  svg {\n    height: 3rem;\n    width: 3rem;\n    fill: $color-primary;\n    transform: translateY(-0.3rem);\n  }\n\n  p {\n    margin-left: 1.5rem;\n    font-size: 1.8rem;\n    line-height: 1.5;\n    font-weight: 600;\n  }\n}\n",".header {\n  grid-area: head;\n  background-color: $color-grey-light-1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  &__logo {\n    margin-left: 4rem;\n    height: 4.6rem;\n    display: block;\n  }\n}\n\n.search {\n  background-color: #fff;\n  border-radius: 10rem;\n  display: flex;\n  align-items: center;\n  padding-left: 3rem;\n  transition: all 0.3s;\n\n  &:focus-within {\n    transform: translateY(-2px);\n    box-shadow: 0 0.7rem 3rem rgba($color-grey-dark-1, 0.08);\n  }\n\n  &__field {\n    border: none;\n    background: none;\n    font-family: inherit;\n    color: inherit;\n    font-size: 1.7rem;\n    width: 30rem;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::placeholder {\n      color: $color-grey-light-3;\n    }\n\n    @media only screen and (max-width: $bp-medium) {\n      width: auto;\n\n      &::placeholder {\n        color: white;\n      }\n    }\n  }\n\n  &__btn {\n    font-weight: 600;\n    font-family: inherit;\n  }\n}\n\n.nav {\n  align-self: stretch;\n  margin-right: 2.5rem;\n\n  &__list {\n    list-style: none;\n    display: flex;\n    height: 100%;\n  }\n\n  &__item {\n    position: relative;\n  }\n\n  &__btn {\n    height: 100%;\n    font-family: inherit;\n    color: inherit;\n    font-size: 1.4rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 1.5rem;\n    transition: all 0.3s;\n\n    display: flex;\n    align-items: center;\n\n    svg {\n      height: 2.4rem;\n      width: 2.4rem;\n      fill: $color-primary;\n      margin-right: 0.7rem;\n      transform: translateY(-1px);\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover {\n      background-color: $color-grey-light-2;\n    }\n  }\n}\n\n.bookmarks {\n  padding: 1rem 0;\n  position: absolute;\n  // right: 0;\n  right: -2.5rem;\n  z-index: 10;\n  width: 40rem;\n  background-color: #fff;\n  box-shadow: 0 0.8rem 5rem 2rem rgba($color-grey-dark-1, 0.1);\n\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s 0.2s;\n\n  &__list {\n    list-style: none;\n  }\n\n  &__field {\n    cursor: pointer;\n    padding: 0 4rem;\n\n    display: flex;\n    align-items: center;\n    height: 100%;\n    transition: all 0.3s;\n\n    &:hover {\n      background-color: $color-grey-light-2;\n    }\n  }\n\n  &:hover,\n  .nav__btn--bookmarks:hover + & {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n",".preview {\n  &__link {\n    &:link,\n    &:visited {\n      display: flex;\n      align-items: center;\n      padding: 1.5rem 3.25rem;\n      transition: all 0.3s;\n      border-right: 1px solid #fff;\n      text-decoration: none;\n    }\n\n    &:hover {\n      background-color: $color-grey-light-1;\n      transform: translateY(-2px);\n    }\n\n    &--active {\n      background-color: $color-grey-light-1;\n    }\n  }\n\n  &__fig {\n    flex: 0 0 5.8rem;\n    border-radius: 50%;\n    overflow: hidden;\n    height: 5.8rem;\n    margin-right: 2rem;\n    position: relative;\n    backface-visibility: hidden;\n\n    &::before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: linear-gradient(\n        to right bottom,\n        $color-grad-1,\n        $color-grad-2\n      );\n      opacity: 0.4;\n    }\n\n    img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      transition: all 0.3s;\n    }\n  }\n\n  &__data {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr 2rem;\n    row-gap: 0.1rem;\n    align-items: center;\n  }\n\n  &__title {\n    grid-column: 1/-1;\n    font-size: 1.45rem;\n    color: $color-primary;\n    text-transform: uppercase;\n    font-weight: 600;\n\n    // This is how text is truncated!\n    text-overflow: ellipsis;\n    max-width: 25rem;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  &__publisher {\n    font-size: 1.15rem;\n    color: $color-grey-dark-2;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n\n  &__user-generated {\n    background-color: darken($color-grey-light-2, 2%);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2rem;\n    width: 2rem;\n    border-radius: 10rem;\n\n    margin-left: auto;\n    margin-right: 1.75rem;\n\n    svg {\n      height: 1.2rem;\n      width: 1.2rem;\n      fill: $color-primary;\n    }\n  }\n}\n",".search-results {\n  padding: 3rem 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.results {\n  list-style: none;\n  margin-bottom: 2rem;\n}\n\n.pagination {\n  margin-top: auto;\n  padding: 0 3.5rem;\n\n  &::after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  &__btn {\n    &--prev {\n      float: left;\n    }\n    &--next {\n      float: right;\n    }\n  }\n}\n\n.copyright {\n  color: $color-grey-dark-2;\n  font-size: 1.2rem;\n  padding: 0 3.5rem;\n  margin-top: 4rem;\n\n  .twitter-link:link,\n  .twitter-link:visited {\n    color: $color-grey-dark-2;\n  }\n}\n",".recipe {\n  background-color: $color-grey-light-1;\n\n  ///////////\n  // FIGURE\n  &__fig {\n    height: 32rem;\n    position: relative;\n    // transform: scale(1.04) translateY(-1px);\n    transform-origin: top;\n\n    &::before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: linear-gradient(\n        to right bottom,\n        $color-grad-1,\n        $color-grad-2\n      );\n      opacity: 0.6;\n    }\n  }\n\n  &__img {\n    width: 100%;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &__title {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, 20%) skewY(-6deg);\n    color: #fff;\n    font-weight: 700;\n    font-size: 3.25rem;\n    text-transform: uppercase;\n    width: 50%;\n    line-height: 1.95;\n    text-align: center;\n\n    span {\n      -webkit-box-decoration-break: clone;\n      box-decoration-break: clone;\n      padding: 1.3rem 2rem;\n      background-image: linear-gradient(\n        to right bottom,\n        $color-grad-1,\n        $color-grad-2\n      );\n    }\n\n    @media only screen and (max-width: $bp-medium) {\n      width: 70%;\n    }\n  }\n\n  ///////////\n  // DETAILS\n  &__details {\n    display: flex;\n    align-items: center;\n    padding: 7.5rem 8rem 3.5rem 8rem;\n  }\n\n  &__info {\n    font-size: 1.65rem;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child) {\n      margin-right: 4.5rem;\n    }\n  }\n\n  &__info-icon {\n    height: 2.35rem;\n    width: 2.35rem;\n    fill: $color-primary;\n    margin-right: 1.15rem;\n  }\n\n  &__info-data {\n    margin-right: 0.5rem;\n    font-weight: 700;\n  }\n\n  &__info-buttons {\n    display: flex;\n    margin-left: 1.6rem;\n    transform: translateY(-1px);\n  }\n\n  &__user-generated {\n    background-color: darken($color-grey-light-2, 2%);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 4rem;\n    width: 4rem;\n    border-radius: 10rem;\n\n    margin-left: auto;\n    margin-right: 1.75rem;\n\n    svg {\n      height: 2.25rem;\n      width: 2.25rem;\n      fill: $color-primary;\n    }\n  }\n\n  ///////////\n  // INGREDIENTS\n  &__ingredients {\n    padding: 5rem 8rem;\n    font-size: 1.6rem;\n    line-height: 1.4;\n    background-color: $color-grey-light-2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  &__ingredient-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2.5rem 3rem;\n    list-style: none;\n  }\n\n  &__ingredient {\n    display: flex;\n  }\n\n  &__icon {\n    height: 2rem;\n    width: 2rem;\n    fill: $color-primary;\n    margin-right: 1.1rem;\n    flex: 0 0 auto;\n    margin-top: 0.1rem;\n  }\n\n  &__quantity {\n    margin-right: 0.5rem;\n    flex: 0 0 auto;\n  }\n\n  ///////////\n  // DIRECTIONS\n  &__directions {\n    padding: 5rem 10rem;\n    padding-bottom: 5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  &__directions-text {\n    font-size: 1.7rem;\n    text-align: center;\n    margin-bottom: 3.5rem;\n    color: $color-grey-dark-2;\n  }\n\n  &__publisher {\n    font-weight: 700;\n  }\n}\n",".add-recipe-window {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100rem;\n  background-color: white;\n  border-radius: 9px;\n\n  padding: 5rem 6rem;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);\n  z-index: 1000;\n  transition: all 0.5s;\n\n  .btn--close-modal {\n    font-family: inherit;\n    color: inherit;\n    position: absolute;\n    top: 0.5rem;\n    right: 1.6rem;\n    font-size: 3.5rem;\n    cursor: pointer;\n    border: none;\n    background: none;\n  }\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.5s;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.upload {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem 6rem;\n\n  &__column {\n    display: grid;\n    grid-template-columns: 1fr 2.8fr;\n    align-items: center;\n    gap: 1.5rem;\n\n    & label {\n      font-size: 1.5rem;\n      font-weight: 600;\n      color: inherit;\n    }\n\n    & input {\n      font-size: 1.5rem;\n      padding: 0.8rem 1rem;\n      border: 1px solid #ddd;\n      border-radius: 0.5rem;\n      transition: all 0.2s;\n\n      &::placeholder {\n        color: $color-grey-light-3;\n      }\n\n      &:focus {\n        outline: none;\n        border: 1px solid $color-primary;\n        background-color: $color-grey-light-1;\n      }\n    }\n\n    & button {\n      grid-column: 1 / span 2;\n      justify-self: center;\n      margin-top: 1rem;\n    }\n  }\n\n  &__heading {\n    font-size: 2.25rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 1rem;\n    grid-column: 1/-1;\n  }\n\n  &__btn {\n    grid-column: 1 / -1;\n    justify-self: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

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
    generator._invoke = makeInvokeMethod(innerFn, self, context);

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
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
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
    this._invoke = enqueue;
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
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

  exports.keys = function(object) {
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
   true ? module.exports : 0
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

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/icons.svg":
/*!***************************!*\
  !*** ./src/img/icons.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons.svg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/controller.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=done.9db3333203b35e511b28.js.map