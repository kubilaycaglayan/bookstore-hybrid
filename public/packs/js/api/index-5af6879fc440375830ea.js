/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/api/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/api/get.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/api/get.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./app/javascript/packs/constants.js");


var get = function get() {
  return fetch('/').then(function (response) {
    return response.json();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (get);

/***/ }),

/***/ "./app/javascript/packs/api/index.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/api/index.js ***!
  \*******************************************/
/*! exports provided: get, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "./app/javascript/packs/api/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./app/javascript/packs/api/post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "post", function() { return _post__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./app/javascript/packs/api/post.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/api/post.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./app/javascript/packs/constants.js");


var post = function post(book) {
  var data = JSON.stringify(book);
  console.log('IN POST', data);
  return fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"], {
    method: 'POST',
    body: data
  });
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./app/javascript/packs/constants.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/constants.js ***!
  \*******************************************/
/*! exports provided: GET_BOOKS, CREATE_BOOK, REMOVE_BOOK, CHANGE_CATEGORY, BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BOOKS", function() { return GET_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BOOK", function() { return CREATE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOK", function() { return REMOVE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CATEGORY", function() { return CHANGE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
var GET_BOOKS = 'GET_BOOKS';
var CREATE_BOOK = 'CREATE_BOOK';
var REMOVE_BOOK = 'REMOVE_BOOK';
var CHANGE_CATEGORY = 'CHANGE_CATEGORY';
var BASE_URL = 'http://localhost:3000/books';

/***/ })

/******/ });
//# sourceMappingURL=index-5af6879fc440375830ea.js.map