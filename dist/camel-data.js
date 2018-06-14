(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["camel-data"] = factory();
	else
		root["camel-data"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camel__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__camel__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help__ = __webpack_require__(3);


const camelTrans = (input) => {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isArray */])(input)) {
        // ICamel[]
        return input.map((v) => {
            return camelTrans(v);
        });
        // } else if (isCamel(input)) {
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isObject */])(input)) {
        // ICamel
        const result = {};
        const keys = Object.keys(input);
        for (const i of keys) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isObject */])(input[i])) {
                result[camelTrans(i)] = camelTrans(input[i]);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isArray */])(input[i])) {
                // default not to trans Array in object key
                // as it may just be a value
                result[camelTrans(i)] = input[i];
            }
            else {
                result[camelTrans(i)] = input[i];
            }
        }
        return result;
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__help__["c" /* isString */])(input)) {
        // string
        return Object(__WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */])(input);
    }
    else {
        return input;
    }
};
// camelTrans.config = {};
/* harmony default export */ __webpack_exports__["a"] = (camelTrans);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @description data transform to camel
 */
/* harmony default export */ __webpack_exports__["a"] = ((input) => {
    return input.replace(/[-_][^-_]/g, (match) => {
        return match.charAt(1).toUpperCase();
    });
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isString;
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = isObject;
/**
 * @description type help
 */
// tslint:disable no-any no-unsafe-any
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=camel-data.js.map