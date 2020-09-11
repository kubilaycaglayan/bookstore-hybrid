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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/app/javascript/packs/index.js: Unexpected token, expected \",\" (44:30)\n\n  42 | \n  43 |   const store = createStore(reducer, initialState);\n> 44 |   console.log(store.getState();\n     |                               ^\n  45 |   document.addEventListener('DOMContentLoaded', () => {\n  46 |     ReactDOM.render(\n  47 |       <Provider store={store}>\n    at Object._raise (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.unexpected (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Object.expect (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:8952:28)\n    at Object.parseCallExpressionArguments (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:10033:14)\n    at Object.parseCoverCallAndAsyncArrowHead (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9960:29)\n    at Object.parseSubscript (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9896:19)\n    at Object.parseSubscripts (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9867:19)\n    at Object.parseExprSubscripts (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9850:17)\n    at Object.parseUpdate (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9620:21)\n    at Object.parseExpressionBase (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9564:23)\n    at /home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9558:39\n    at Object.allowInAnd (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:11303:12)\n    at Object.parseExpression (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9558:17)\n    at Object.parseStatementContent (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:11562:23)\n    at Object.parseStatement (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Object.parseBlockBody (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Object.parseBlock (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:11983:10)\n    at Object.parseFunctionBody (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:10963:24)\n    at Object.parseArrowExpression (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:10932:10)\n    at Object.parseAsyncArrowFromCallExpression (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:10074:10)\n    at Object.parseCoverCallAndAsyncArrowHead (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9967:19)\n    at Object.parseSubscript (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9896:19)\n    at Object.parseSubscripts (/home/kubilay/Documents/Microverse Projects/5-react/bookstore-hybrid/bookstore/node_modules/@babel/parser/lib/index.js:9867:19)");

/***/ })

/******/ });
//# sourceMappingURL=index-a0b7cb1dc91d241d76d7.js.map