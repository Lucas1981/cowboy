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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cb-body {\n  background: #222222;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.cb-header {\n  color: green;\n  font-family: 'Courrier New', Courier\n}\n\n.cb-canvas {\n  height: 563px;\n  width: 900px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Animation.ts":
/*!**************************!*\
  !*** ./src/Animation.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

class Animation {
    constructor(framesPerSecond, image, frameWidth, frameHeight, numberOfFrames, framesPerRow, offsetRow, offsetCol, loopType) {
        this.framesPerSecond = framesPerSecond;
        this.image = image;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.numberOfFrames = numberOfFrames;
        this.framesPerRow = framesPerRow;
        this.offsetRow = offsetRow;
        this.offsetCol = offsetCol;
        this.loopType = loopType;
        this.frame = 0;
        this.start = new Date();
    }
    reset() {
        this.start = new Date();
        return this.start;
    }
    draw(x, y, ctx) {
        let offsetX, offsetY;
        this.frame = this.determineFrame();
        if (this.frame === -1)
            return false;
        offsetX = (this.frame % this.framesPerRow) + this.offsetCol;
        offsetY = Math.floor(this.frame / this.framesPerRow) + this.offsetRow;
        ctx.drawImage(this.image, offsetX * this.frameWidth, offsetY * this.frameHeight, this.frameWidth, this.frameHeight, x - this.frameWidth / 2, y - this.frameHeight / 2, this.frameWidth, this.frameHeight);
        return true;
    }
    drawPart(startX, startY, stopX, stopY, ctx) {
        let offsetX, offsetY;
        this.frame = this.determineFrame();
        if (this.frame === -1)
            return false;
        offsetX = (this.frame % this.framesPerRow) + this.offsetCol;
        offsetY = Math.floor(this.frame / this.framesPerRow) + this.offsetRow;
        ctx.drawImage(this.image, startX + offsetX * this.frameWidth, startY + offsetY * this.frameHeight, stopX, stopY, 0, 0, stopX, stopY);
        return true;
    }
    determineFrame() {
        let now = new Date();
        let elapsedTime = (+now) - (+this.start);
        let frame = Math.round(this.framesPerSecond * elapsedTime);
        let compFrame;
        if (this.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].noLoop && frame > this.numberOfFrames) {
            frame = -1;
        }
        else if (this.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].loop) {
            frame %= this.numberOfFrames;
        }
        else if (this.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].loopBackAndForth) {
            let compFrame = frame % Math.floor(this.numberOfFrames * 1.5);
            if (compFrame >= this.numberOfFrames) {
                frame = Math.floor(this.numberOfFrames * 1.5) - compFrame;
            }
            else {
                frame = compFrame;
            }
        }
        else {
            frame = -1;
        }
        return frame;
    }
}
;


/***/ }),

/***/ "./src/AnimationFactory.ts":
/*!*********************************!*\
  !*** ./src/AnimationFactory.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimationFactory; });
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/Animation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");


const FRAMES_PER_SECOND = 8 / 1000;
const COWBOY_WIDTH = 48;
const COWBOY_HEIGHT = 48;
const NUMBER_OF_FRAMES = 96;
const FRAMES_PER_ROW = 4;
const BROWN_COWBOY_OFFSET = 2;
const YELLOW_COWBOY_OFFSET = 0;
const DOWN = 0;
const LEFT = 1;
const RIGHT = 2;
const UP = 3;
const BULLET_WIDTH = 10;
const BULLET_HEIGHT = 10;
class AnimationFactory {
    constructor() {
        let that = this;
        let spritesheetPromise = null;
        let bulletPromise = null;
        this.animations = null;
        this.image = new Image();
        this.image.src = './img/cowboy.png';
        spritesheetPromise = new Promise((resolve, reject) => {
            that.image.onload = () => {
                resolve();
            };
        });
        this.bulletImage = new Image();
        this.bulletImage.src = './img/bullet.png';
        bulletPromise = new Promise((resolve, reject) => {
            that.bulletImage.onload = () => {
                resolve();
            };
        });
        this.loadingPromise = Promise.all([spritesheetPromise, bulletPromise]);
    }
    getLoadingPromise() {
        return this.loadingPromise;
    }
    getNewBulletAnimation() {
        return {
            animation: new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](FRAMES_PER_SECOND, this.bulletImage, BULLET_WIDTH, BULLET_HEIGHT, 1, 1, 0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__["LOOP_TYPES"].loop),
            width: BULLET_WIDTH,
            height: BULLET_HEIGHT
        };
    }
    getNewCowboyAnimations(cowboyType) {
        switch (cowboyType) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["COWBOY_TYPES"].yellow:
                return this.getYellowCowboyAnimations();
            case _constants__WEBPACK_IMPORTED_MODULE_1__["COWBOY_TYPES"].brown:
                return this.getBrownCowboyAnimations();
            default:
                return null;
        }
    }
    getYellowCowboyAnimations() {
        return {
            walking: {
                down: this.initiateWalkingState(DOWN, YELLOW_COWBOY_OFFSET),
                left: this.initiateWalkingState(LEFT, YELLOW_COWBOY_OFFSET),
                right: this.initiateWalkingState(RIGHT, YELLOW_COWBOY_OFFSET),
                up: this.initiateWalkingState(UP, YELLOW_COWBOY_OFFSET)
            },
            standing: {
                down: this.initiateStandingState(DOWN, YELLOW_COWBOY_OFFSET),
                left: this.initiateStandingState(LEFT, YELLOW_COWBOY_OFFSET),
                right: this.initiateStandingState(RIGHT, YELLOW_COWBOY_OFFSET),
                up: this.initiateStandingState(UP, YELLOW_COWBOY_OFFSET)
            },
            width: COWBOY_WIDTH,
            height: COWBOY_HEIGHT
        };
    }
    getBrownCowboyAnimations() {
        return {
            walking: {
                down: this.initiateWalkingState(DOWN, BROWN_COWBOY_OFFSET),
                left: this.initiateWalkingState(LEFT, BROWN_COWBOY_OFFSET),
                right: this.initiateWalkingState(RIGHT, BROWN_COWBOY_OFFSET),
                up: this.initiateWalkingState(UP, BROWN_COWBOY_OFFSET)
            },
            standing: {
                down: this.initiateStandingState(DOWN, BROWN_COWBOY_OFFSET),
                left: this.initiateStandingState(LEFT, BROWN_COWBOY_OFFSET),
                right: this.initiateStandingState(RIGHT, BROWN_COWBOY_OFFSET),
                up: this.initiateStandingState(UP, BROWN_COWBOY_OFFSET)
            },
            width: COWBOY_WIDTH,
            height: COWBOY_HEIGHT
        };
    }
    initiateWalkingState(offsetRow, cowboyTypeOffset) {
        return new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](FRAMES_PER_SECOND, this.image, COWBOY_WIDTH, COWBOY_HEIGHT, 3, 3, offsetRow, 0 + (cowboyTypeOffset * 3), _constants__WEBPACK_IMPORTED_MODULE_1__["LOOP_TYPES"].loopBackAndForth);
    }
    initiateStandingState(offsetRow, cowboyTypeOffset) {
        return new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](FRAMES_PER_SECOND, this.image, COWBOY_WIDTH, COWBOY_HEIGHT, 1, 1, offsetRow, 1 + (cowboyTypeOffset * 3), _constants__WEBPACK_IMPORTED_MODULE_1__["LOOP_TYPES"].loop);
    }
}
;


/***/ }),

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _Thing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thing */ "./src/Thing.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collision */ "./src/Collision.ts");



const MAX_AGE = 500;
const FRAMES_PER_SECOND = 60;
const PIXELS_PER_FPS = 500 / FRAMES_PER_SECOND;
const PIXELS_PER_THOUSAND_MILISECONDS = PIXELS_PER_FPS * FRAMES_PER_SECOND / 1000;
const COLOR = 'green';
const DEBUG = false;
class Bullet extends _Thing__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, direction, animationFactory, parent) {
        super(x, y, direction, COLOR);
        this.parent = parent;
        this.speed = PIXELS_PER_THOUSAND_MILISECONDS;
        this.timeCreated = new Date();
        this.animation = animationFactory.getNewBulletAnimation();
        this.collision = new _Collision__WEBPACK_IMPORTED_MODULE_2__["default"](animationFactory);
    }
    draw(ctx) {
        if (DEBUG) {
            let offsetX = this.x - this.animation.width / 2;
            let offsetY = this.y - this.animation.height / 2;
            ctx.rect(offsetX, offsetY, this.animation.width, this.animation.height);
            ctx.stroke();
        }
        this.animation.animation.draw(this.x, this.y, ctx);
    }
    progress() {
        let now = new Date();
        let elapsedTime = (+now) - (+this.timer);
        let step = this.speed * elapsedTime;
        let increments = this.determineDirection();
        this.x += increments.x * step;
        this.y += increments.y * step;
        this.timer = now;
        if (this.shouldDie())
            this.destroy();
    }
    determineDirection() {
        switch (this.direction) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].up:
                return { x: 0, y: -1 };
            case _constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].down:
                return { x: 0, y: 1 };
            case _constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].left:
                return { x: -1, y: 0 };
            case _constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].right:
                return { x: 1, y: 0 };
            default:
                return { x: 0, y: 0 };
        }
    }
    detectCollision(things) {
        for (let thing = things.first(); thing != null; thing = thing.next) {
            if (thing.element.canShoot() &&
                this.parent !== thing.element &&
                this.collision.bulletCollidesWithOpponent(this, thing.element)) {
                return thing;
            }
        }
        return null;
    }
    shouldDie() {
        let now = new Date();
        return ((+now) - (+this.timeCreated)) > MAX_AGE;
    }
    canShoot() {
        return false;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    isParent(thing) {
        return thing == this.parent;
    }
    getParent() {
        return this.parent;
    }
}
;


/***/ }),

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
const BACKGROUND = '#e2b973';
class Canvas {
    constructor(maxWidth, maxHeight, background = BACKGROUND) {
        this.canvasPointer = document.getElementById('canvas');
        this.context = this.canvasPointer.getContext("2d");
        this.canvasPointer.width = maxWidth;
        this.canvasPointer.height = maxHeight;
    }
    getContext() {
        return this.context;
    }
    clearCanvas() {
        this.context.fillStyle = BACKGROUND;
        this.context.fillRect(0, 0, this.canvasPointer.width, this.canvasPointer.height);
    }
    drawScore(red, blue) {
        this.context.font = "bold 32px 'Courier New'";
        this.context.textAlign = "center";
        this.context.fillStyle = "red";
        this.context.fillText(red, this.canvasPointer.width / 2 - 100, 50);
        this.context.fillStyle = "blue";
        this.context.fillText(blue, this.canvasPointer.width / 2 + 100, 50);
    }
}
;


/***/ }),

/***/ "./src/Collision.ts":
/*!**************************!*\
  !*** ./src/Collision.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collision; });
class Collision {
    constructor(animationFactory) {
        let comparisonCanvas;
        let comparisonContext;
        let sourceCanvas;
        let sourceContext;
        let bulletSourceAnimation = animationFactory.getNewBulletAnimation();
        comparisonCanvas = document.createElement('canvas');
        comparisonCanvas.width = bulletSourceAnimation.width;
        comparisonCanvas.height = bulletSourceAnimation.height;
        this.comparisonContext = comparisonCanvas.getContext('2d');
        sourceCanvas = document.createElement('canvas');
        sourceCanvas.width = bulletSourceAnimation.width;
        sourceCanvas.height = bulletSourceAnimation.height;
        sourceContext = sourceCanvas.getContext('2d');
        bulletSourceAnimation.animation.draw(0, 0, sourceContext);
        this.bulletSourceData = sourceContext.getImageData(0, 0, bulletSourceAnimation.width, bulletSourceAnimation.height).data;
    }
    bulletCollidesWithOpponent(bullet, opponent) {
        if (this.squareBoxCollision(bullet, opponent) && this.pixelCollision(bullet, opponent)) {
            return true;
        }
        return false;
    }
    squareBoxCollision(bullet, opponent) {
        let startThisX = bullet.x - bullet.animation.width / 2;
        let startThisY = bullet.y - bullet.animation.height / 2;
        let endThisX = startThisX + bullet.animation.width;
        let endThisY = startThisY + bullet.animation.height;
        let startOpponentX = opponent.x - opponent.animations.width / 2;
        let startOpponentY = opponent.y - opponent.animations.height / 2;
        let endOpponentX = startOpponentX + opponent.animations.width;
        let endOpponentY = startOpponentY + opponent.animations.height;
        if ((startThisX >= startOpponentX &&
            startThisX <= endOpponentX &&
            startThisY >= startOpponentY &&
            startThisY <= endOpponentY) ||
            (endThisX >= startOpponentX &&
                endThisX <= endOpponentX &&
                endThisY >= startOpponentY &&
                endThisY <= endOpponentY)) {
            return true;
        }
        return false;
    }
    pixelCollision(bullet, opponent) {
        /* 1. Isolate the part where there is overlap */
        let bulletStartX = Math.floor(bullet.x - opponent.x + (opponent.animations.width / 2) - (bullet.animation.width / 2));
        let bulletStartY = Math.floor(bullet.y - opponent.y + (opponent.animations.height / 2) - (bullet.animation.height / 2));
        let bulletStopX = bullet.animation.width;
        let bulletStopY = bullet.animation.height;
        let width = bullet.animation.width;
        let opponentData;
        if (bulletStartX < 0) {
            bulletStartX = 0;
        }
        if (bulletStartY < 0) {
            bulletStartY = 0;
        }
        if (bulletStartX + bulletStopX > opponent.animations.width) {
            bulletStopX = opponent.animations.width - bulletStartX;
        }
        if (bulletStartY + bulletStopY > opponent.animations.height) {
            bulletStopY = opponent.animations.height - bulletStartY;
        }
        /* 2. Print the pixels of the opponent frame onto the comparison canvas */
        opponent.animations[opponent.state][opponent.direction].drawPart(bulletStartX, bulletStartY, bulletStopX, bulletStopY, this.comparisonContext);
        opponentData = this.comparisonContext.getImageData(0, 0, bullet.animation.width, bullet.animation.height).data;
        /* 3. Compare the comparison canvas to the copy of the bullet */
        for (let i = 0; i < bulletStopX; i++) {
            for (let j = 0; j < bulletStopY; j++) {
                let offset = (i * 4) + (j * width * 4);
                if (this.bulletSourceData[offset + 3] !== 0 && opponentData[offset + 3] !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
;


/***/ }),

/***/ "./src/Cowboy.ts":
/*!***********************!*\
  !*** ./src/Cowboy.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cowboy; });
/* harmony import */ var _Thing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thing */ "./src/Thing.ts");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ "./src/Bullet.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");



const TIME_TO_NEXT_SHOT = 600;
const TIME_TO_NEXT_EXPLOSION = 500;
const FRAMES_PER_SECOND = 60;
const PIXELS_PER_FPS = 200 / FRAMES_PER_SECOND;
const PIXELS_PER_THOUSAND_MILISECONDS = PIXELS_PER_FPS * FRAMES_PER_SECOND / 1000;
const DEBUG = false;
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;
class Cowboy extends _Thing__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, direction, color, maxWidth, maxHeight, controls, controlsMap, things, sound, animationFactory, cowboyType) {
        super(x, y, direction, color);
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.controls = controls;
        this.controlsMap = controlsMap;
        this.things = things;
        this.sound = sound;
        this.animationFactory = animationFactory;
        this.cowboyType = cowboyType;
        this.momentLastFired = (+new Date()) - TIME_TO_NEXT_SHOT;
        this.dying = false;
        this.lastProgressMoment = new Date();
        this.animations = animationFactory.getNewCowboyAnimations(cowboyType);
        this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["COWBOY_STATES"].walking;
        this.stateChanged = false;
        this.previousState = this.state;
    }
    draw(ctx) {
        if (this.stateChanged === true) {
            this.stateChanged = false;
            this.animations[this.state][this.direction].reset();
        }
        let rotatedPoints = null;
        this.animations[this.state][this.direction].draw(this.x, this.y, ctx);
        if (DEBUG) {
            let offsetX = this.x - this.animations.width / 2;
            let offsetY = this.y - this.animations.height / 2;
            ctx.rect(offsetX, offsetY, this.animations.width, this.animations.height);
            ctx.stroke();
        }
    }
    progress() {
        let now = new Date();
        let elapsedTime = (+now) - (+this.lastProgressMoment);
        if (this.noWalkingKeyPressed())
            this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["COWBOY_STATES"].standing;
        else
            this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["COWBOY_STATES"].walking;
        this.checkStateChanged();
        if (this.controls[this.controlsMap.left]) {
            this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].left;
            this.moveLeft(elapsedTime);
        }
        if (this.controls[this.controlsMap.right]) {
            this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].right;
            this.moveRight(elapsedTime);
        }
        if (this.controls[this.controlsMap.up]) {
            this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].up;
            this.moveUp(elapsedTime);
        }
        if (this.controls[this.controlsMap.down]) {
            this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].down;
            this.moveDown(elapsedTime);
        }
        if (this.controls[this.controlsMap.fire]) {
            this.shoot();
        }
        this.lastProgressMoment = now;
    }
    shoot() {
        if (this.allowedToShoot()) {
            let bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_1__["default"](this.x, this.y, this.direction, this.animationFactory, this);
            this.things.push(bullet);
            this.sound.playGunshotSound();
            this.momentLastFired = new Date();
        }
    }
    die() {
        this.sound.playDyingHumanSound();
        this.dying = true;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["COWBOY_STATES"].standing;
    }
    setControls(controls) {
        this.controls = controls;
    }
    allowedToShoot() {
        let now = new Date();
        return (+now) - (+this.momentLastFired) >= TIME_TO_NEXT_SHOT;
    }
    deathInProgress() {
        return this.dying;
    }
    getTip() {
        let newX = _constants__WEBPACK_IMPORTED_MODULE_2__["POINTS"][0].x * this.cos(this.direction) - _constants__WEBPACK_IMPORTED_MODULE_2__["POINTS"][0].y * this.sin(this.direction);
        let newY = _constants__WEBPACK_IMPORTED_MODULE_2__["POINTS"][0].y * this.cos(this.direction) + _constants__WEBPACK_IMPORTED_MODULE_2__["POINTS"][0].x * this.sin(this.direction);
        return {
            x: this.x + newX,
            y: this.y + newY
        };
    }
    getColorId() {
        return this.color;
    }
    shouldDie() {
        return false;
    }
    canShoot() {
        return true;
    }
    getPoints() {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["POINTS"];
    }
    checkStateChanged() {
        if (this.state !== this.previousState) {
            this.stateChanged = true;
            this.previousState = this.state;
        }
    }
    noWalkingKeyPressed() {
        return !(this.controls[this.controlsMap.left] ||
            this.controls[this.controlsMap.right] ||
            this.controls[this.controlsMap.up] ||
            this.controls[this.controlsMap.down]);
    }
    moveUp(timeDelta) {
        let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
        this.y -= step;
    }
    moveDown(timeDelta) {
        let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
        this.y += step;
    }
    moveLeft(timeDelta) {
        let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
        this.x -= step;
    }
    moveRight(timeDelta) {
        let step = PIXELS_PER_THOUSAND_MILISECONDS * timeDelta;
        this.x += step;
    }
}
;


/***/ }),

/***/ "./src/EventHandlers.ts":
/*!******************************!*\
  !*** ./src/EventHandlers.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandlers; });
class EventHandlers {
    constructor() {
    }
    static attach(score, newGame) {
        let resetGameButton = document.getElementById('reset-game-button');
        resetGameButton.addEventListener('click', () => {
            for (let player in score)
                score[player] = 0;
            newGame();
            resetGameButton.blur();
        });
        let controlsButton = document.getElementById('controls');
        controlsButton.addEventListener('click', () => {
            alert('Controls:\n\nPlayer1:\nForward = Up arrow\nBackward = Down arrow\n' +
                'Rotate left = Left arrow\nRotate Right = Right arrow\n' +
                'Fire = 0\n\nPlayer2:\nForward = W\nBackward = S\n' +
                'Rotate left = A\nRotate right = D\nFire = Space bar');
            controlsButton.blur();
        });
    }
}


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sound */ "./src/Sound.js");
/* harmony import */ var _EventHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandlers */ "./src/EventHandlers.ts");
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationFactory */ "./src/AnimationFactory.ts");
/* harmony import */ var _NextAnimationFrameFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NextAnimationFrameFactory */ "./src/NextAnimationFrameFactory.js");
/* harmony import */ var _KeyboardInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KeyboardInput */ "./src/KeyboardInput.ts");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stars */ "./src/Stars.ts");
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinkedList */ "./src/LinkedList.ts");
/* harmony import */ var _Cowboy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cowboy */ "./src/Cowboy.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");










const MAX_WIDTH = 900;
const MAX_HEIGHT = 563;
const INITIAL_DIRECTION = 0;
const RED = 'red';
const BLUE = 'blue';
const NUMBER_OF_STARS_IN_THE_SKY = 1000;
const TIME_TO_NEXT_GAME = 500;
class Game {
    constructor() {
        this.canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"](MAX_WIDTH, MAX_HEIGHT);
        this.context = this.canvas.getContext();
        this.sound = new _Sound__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.animationFactory = new _AnimationFactory__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.things = null;
        this.request = new _NextAnimationFrameFactory__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.keyboardInput = new _KeyboardInput__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.activeTank = 0;
        this.toggle = false;
        this.sky = new _Stars__WEBPACK_IMPORTED_MODULE_6__["default"](MAX_WIDTH, MAX_HEIGHT, NUMBER_OF_STARS_IN_THE_SKY);
        this.gameOver = false;
        this.timeGameEnded = new Date();
        this.score = {
            red: 0,
            blue: 0
        };
        this.initiate();
    }
    initiate() {
        _EventHandlers__WEBPACK_IMPORTED_MODULE_2__["default"].attach(this.score, this.newGame);
        this.animationFactory.getLoadingPromise().then(() => {
            this.sound.getLoadingPromise().then(() => {
                this.newGame();
                this.loop();
            });
        });
    }
    loop() {
        this.canvas.clearCanvas();
        this.sky.draw(this.context);
        this.moveAndDrawObjects();
        if (!this.gameOver)
            this.detectCollision();
        this.canvas.drawScore(this.score.red, this.score.blue);
        if (this.checkGameNeedsToBeReset()) {
            this.newGame();
        }
        this.request(this.loop);
    }
    moveAndDrawObjects() {
        for (let thing = this.things.first(); thing !== null; thing = thing.next) {
            if (thing.element.isAlive() === false) {
                this.things.remove(thing.element);
            }
            else {
                if (!this.gameOver)
                    thing.element.progress();
                thing.element.draw(this.context);
            }
        }
    }
    detectCollision() {
        for (let thing = this.things.first(); thing !== null; thing = thing.next) {
            if (!thing.element.canShoot()) {
                let collider = thing.element.detectCollision(this.things);
                if (collider !== null) {
                    this.handleCollision(collider, thing);
                }
            }
        }
    }
    handleCollision(collider, thing) {
        let otherPlayerColor;
        this.gameOver = true;
        this.timeGameEnded = new Date();
        this.otherPlayerColor = (collider.element.getColorId() == 'red' ? 'blue' : 'red');
        this.score[otherPlayerColor]++;
        collider.element.die();
    }
    newGame() {
        this.things = new _LinkedList__WEBPACK_IMPORTED_MODULE_7__["default"]();
        let tanks = [new _Cowboy__WEBPACK_IMPORTED_MODULE_8__["default"](MAX_WIDTH / 6, MAX_HEIGHT / 2, _constants__WEBPACK_IMPORTED_MODULE_9__["DIRECTIONS"].right, RED, MAX_WIDTH, MAX_HEIGHT, this.keyboardInput.state, _constants__WEBPACK_IMPORTED_MODULE_9__["CONTROL_CONFIG"][0], this.things, this.sound, this.animationFactory, _constants__WEBPACK_IMPORTED_MODULE_9__["COWBOY_TYPES"].yellow), new _Cowboy__WEBPACK_IMPORTED_MODULE_8__["default"](MAX_WIDTH / 6 * 5, MAX_HEIGHT / 2, _constants__WEBPACK_IMPORTED_MODULE_9__["DIRECTIONS"].left, BLUE, MAX_WIDTH, MAX_HEIGHT, this.keyboardInput.state, _constants__WEBPACK_IMPORTED_MODULE_9__["CONTROL_CONFIG"][1], this.things, this.sound, this.animationFactory, _constants__WEBPACK_IMPORTED_MODULE_9__["COWBOY_TYPES"].brown)];
        for (let tank in tanks)
            this.things.push(tanks[tank]);
        this.gameOver = false;
    }
    checkGameNeedsToBeReset() {
        if (this.gameOver === true) {
            let now = new Date();
            if ((+now) - (+this.timeGameEnded) >= TIME_TO_NEXT_GAME) {
                return true;
            }
        }
        return false;
    }
}
;


/***/ }),

/***/ "./src/KeyboardInput.ts":
/*!******************************!*\
  !*** ./src/KeyboardInput.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyboardInput; });
const keyLeft = 37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const keySpace = 32; // space
const a = 65; // a
const d = 68; // d
const w = 87; // w
const s = 83; // s
const enter = 13; // enter
const zero = 48; // 0
const myTimer = 40; // 40 ms
const state = {
    up: false,
    down: false,
    left: false,
    right: false,
    altUp: false,
    altDown: false,
    altLeft: false,
    altRight: false,
    z: false,
    x: false,
    space: false,
    toggle: false,
    suicide: false,
    enter: false,
    zero: false,
};
class KeyboardInput {
    constructor() {
        document.addEventListener('keydown', KeyboardInput.keyDownFunction);
        document.addEventListener('keyup', KeyboardInput.keyUpFunction);
    }
    get state() {
        return state;
    }
    destructor() {
        document.removeEventListener('keydown', KeyboardInput.keyDownFunction);
        document.removeEventListener('keyup', KeyboardInput.keyUpFunction);
    }
    static keyDownFunction(e) {
        let release = e;
        switch (release.keyCode) {
            case keyUp:
                state.up = true;
                break;
            case keyDown:
                state.down = true;
                break;
            case keyLeft:
                state.left = true;
                break;
            case keyRight:
                state.right = true;
                break;
            case keySpace:
                state.space = true;
                break;
            case w:
                state.altUp = true;
                break;
            case s:
                state.altDown = true;
                break;
            case a:
                state.altLeft = true;
                break;
            case d:
                state.altRight = true;
                break;
            case enter:
                state.enter = true;
                break;
            case zero:
                state.zero = true;
                break;
            default:
                break;
        }
    }
    static keyUpFunction(e) {
        let release = e;
        switch (release.keyCode) {
            case keyUp:
                state.up = false;
                break;
            case keyDown:
                state.down = false;
                break;
            case keyLeft:
                state.left = false;
                break;
            case keyRight:
                state.right = false;
                break;
            case keySpace:
                state.space = false;
                break;
            case w:
                state.altUp = false;
                break;
            case s:
                state.altDown = false;
                break;
            case a:
                state.altLeft = false;
                break;
            case d:
                state.altRight = false;
                break;
            case enter:
                state.enter = false;
                break;
            case zero:
                state.zero = false;
                break;
            default:
                break;
        }
    }
}
;


/***/ }),

/***/ "./src/LinkedList.ts":
/*!***************************!*\
  !*** ./src/LinkedList.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkedList; });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.ts");

class LinkedList {
    constructor() {
        this._head = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"]('head');
    }
    head() {
        return this._head;
    }
    first() {
        return this._head.next;
    }
    find(item) {
        let currNode = this._head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        let newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    push(newElement) {
        let newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](newElement);
        let currNode = this._head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
    }
    findPrevious(item) {
        let currNode = this._head;
        while (currNode.next !== null &&
            currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove(item) {
        let prevNode = this.findPrevious(item);
        if (prevNode !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
    display() {
        let currNode = this._head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
    }
}


/***/ }),

/***/ "./src/NextAnimationFrameFactory.js":
/*!******************************************!*\
  !*** ./src/NextAnimationFrameFactory.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextAnimationFrameFactory; });
class NextAnimationFrameFactory {

  constructor() {

    this.callback = null;
    this.timeout = null;

  	var originalWebkitMethod;
  	var wrapper = null;
  	var callback = null;
  	var geckoVersion = 0;
  	var userAgent = navigator.userAgent;
  	var index = 0;
  	var self = this;

  	// Workaround for Chrome 10 bug where Chrome
  	// does not pass the time to the animation function

  	if(window.webkitRequestAnimationFrame){
  		// Define the wrapper

  		wrapper = function(time){
  			if(time === undefined){
  				time = +new Date();
  			}
  			self.callback(time);
  		};

  		// Make the switch

  		originalWebkitMethod = window.webkitRequestAnimationFrame;

  		window.webkitRequestAnimationFrame = function(callback, element){
  			self.callback = callback;

  			// Browser calls wrapper; wrapper calls callback

  			originalWebkitMethod(wrapper, element);
  		}
  	} // End Chrome 10 workaround

  	// Workaround for Gecko 2.0, which has a bug in mozRequestAnimationFrame() that restricts animations to 30-40 fps.

  	if(window.mozRequestAnimationFrame){
  		// Check the Gecko verson. Gecko is used by browsers other than Firefox. Gecko 2.0 corresponds to Firefox 4.0.

  		index = userAgent.indexOf('rv:');

  		if(userAgent.indexOf('Gecko') != -1){
  			geckoVersion = userAgent.substr(index + 3, 3);

  			if(geckoVersion === '2.0'){
  				// Forces the return statement to fall through to the setTimeout() function.

  				window.mozRequestAnimationFrame = undefined;
  			}
  		}
  	} // End Gecko 2.0 workaround

  	return window.requestAnimationFrame ||
  		window.webkitRequestAnimationFrame ||
  		window.mozRequestAnimationFrame ||
  		window.oRequestAnimationFrame ||
  		window.msRequestAnimationFrame ||

  		function(callback, element) {
  			var start;
  			var finish;

  			setTimeout(function(){
  				start = +new Date();
  				callback(start);
  				finish = +new Date();

  				self.timeout = 1000 / 60 - (finish - start);
  			}, self.timeout);
  		};

  }
};


/***/ }),

/***/ "./src/Node.ts":
/*!*********************!*\
  !*** ./src/Node.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


/***/ }),

/***/ "./src/Sound.js":
/*!**********************!*\
  !*** ./src/Sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
class Sound {

  constructor() {

    this.audioContext;
    this.dyingSource;
    this.dyingSound;
    this.dyingFileBuffer;
    this.laserFileBuffer;
    this.loadingPromise;
    this.gunshotBuffer;

    let that = this;

    window.AudioContext = window.AudioContext || window.webkitAudioContext || {};
    this.audioContext = new AudioContext();
    this.dyingSource = null;
    this.dyingSound = null;
    this.dyingFileBuffer = null;
    this.gunshotBuffer = null;

    let dyingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/dying.wav', (buffer) => {
        that.dyingFileBuffer = buffer;
        resolve();
      });
    });
    let gunshotPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/gunshot.wav', (buffer) => {
        that.gunshotBuffer = buffer;
        resolve();
      });
    });

    this.loadingPromise = Promise.all( [dyingPromise, gunshotPromise] );

  }

  getLoadingPromise() {
    return this.loadingPromise;
  }

  playGunshotSound() {
    this.playSoundFromFileBuffer(this.gunshotBuffer);
  }

  playDyingHumanSound() {
    this.playSoundFromFileBuffer(this.dyingFileBuffer);
  }

  playSoundFromFileBuffer(fileBuffer) {
    let source = this.audioContext.createBufferSource();
    source.buffer = fileBuffer;
    source.connect(this.audioContext.destination);
    source.start(0);
  }

  loadWavFile(filename, callback) {
    let request = new XMLHttpRequest();
    let thisBuffer = null;
    let that = this;
    request.open('GET', filename, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = () => {
      that.audioContext.decodeAudioData(request.response, (buffer) => {
        let source = that.audioContext.createBufferSource();
        source.buffer = buffer;
        callback(buffer);
      }, (err) => {
        console.log('There was an error');
        console.log(err);
      });
    };
    request.send();
  }

};


/***/ }),

/***/ "./src/Star.ts":
/*!*********************!*\
  !*** ./src/Star.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
class Star {
    constructor(x, y, brightness, radius) {
        this.x = x;
        this.y = y;
        this.brightness = brightness;
        this.radius = radius;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#858356';
        ctx.fill();
        ctx.closePath();
    }
}


/***/ }),

/***/ "./src/Stars.ts":
/*!**********************!*\
  !*** ./src/Stars.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stars; });
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Star */ "./src/Star.ts");

class Stars {
    constructor(maxWidth, maxHeight, amount) {
        this.stars = [];
        for (let i = 0; i < amount; i++) {
            let x = Math.round(Math.random() * maxWidth);
            let y = Math.round(Math.random() * maxHeight);
            let brightness = Math.round(Math.random() * 30) + 30;
            let radius = Math.round(Math.random() * 1) + 1;
            this.stars.push(new _Star__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, brightness, radius));
        }
    }
    draw(ctx) {
        this.stars.forEach((star) => {
            star.draw(ctx);
        });
    }
}


/***/ }),

/***/ "./src/Thing.ts":
/*!**********************!*\
  !*** ./src/Thing.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thing; });
class Thing {
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.color = color;
        this.status = true;
        this.timeCreated = new Date();
        this.timer = new Date();
    }
    cos(val) {
        return Math.cos(val * Math.PI / 180);
    }
    sin(val) {
        return Math.sin(val * Math.PI / 180);
    }
    destroy() {
        this.status = false;
    }
    isAlive() {
        return this.status;
    }
}
;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: COWBOY_TYPES, DIRECTIONS, POINTS, LOOP_TYPES, COWBOY_STATES, CONTROL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COWBOY_TYPES", function() { return COWBOY_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOP_TYPES", function() { return LOOP_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COWBOY_STATES", function() { return COWBOY_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CONFIG", function() { return CONTROL_CONFIG; });
const COWBOY_TYPES = {
    brown: 'brown',
    yellow: 'yellow'
};
const DIRECTIONS = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right'
};
const POINTS = [
    { x: 20, y: 0 },
    { x: -10, y: 10 },
    { x: -5, y: 0 },
    { x: -10, y: -10 }
];
const LOOP_TYPES = {
    noLoop: 0,
    loop: 1,
    loopBackAndForth: 2
};
const COWBOY_STATES = {
    standing: 'standing',
    walking: 'walking'
};
const CONTROL_CONFIG = [
    {
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right',
        fire: 'zero'
    },
    {
        up: 'altUp',
        down: 'altDown',
        left: 'altLeft',
        right: 'altRight',
        fire: 'space'
    }
];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.ts");


(function (Game) {
    'use strict';
    let game = new Game();
})(_Game__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQW5pbWF0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQnVsbGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ293Ym95LnRzIiwid2VicGFjazovLy8uL3NyYy9FdmVudEhhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9LZXlib2FyZElucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9MaW5rZWRMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9OZXh0QW5pbWF0aW9uRnJhbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Tb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3Rhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzUyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztB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O0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7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LENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRztRQUNOLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlCO0FBRVo7SUFJWixZQUFZLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTTtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0s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Qyw2Q0FBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNQVDs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYi1ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2ItaGVhZGVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cnJpZXIgTmV3JywgQ291cmllclxcbn1cXG5cXG4uY2ItY2FudmFzIHtcXG4gIGhlaWdodDogNTYzcHg7XFxuICB3aWR0aDogOTAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyBMT09QX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24ge1xuXG4gIHByaXZhdGUgZnJhbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBzdGFydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZyYW1lc1BlclNlY29uZCxcbiAgICBwcml2YXRlIGltYWdlLFxuICAgIHByaXZhdGUgZnJhbWVXaWR0aCxcbiAgICBwcml2YXRlIGZyYW1lSGVpZ2h0LFxuICAgIHByaXZhdGUgbnVtYmVyT2ZGcmFtZXMsXG4gICAgcHJpdmF0ZSBmcmFtZXNQZXJSb3csXG4gICAgcHJpdmF0ZSBvZmZzZXRSb3csXG4gICAgcHJpdmF0ZSBvZmZzZXRDb2wsXG4gICAgcHJpdmF0ZSBsb29wVHlwZVxuICApIHtcbiAgICB0aGlzLmZyYW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiBudW1iZXIge1xuICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgcHVibGljIGRyYXcoeCwgeSwgY3R4KTogYm9vbGVhbiB7XG4gICAgbGV0IG9mZnNldFgsIG9mZnNldFk7XG5cbiAgICB0aGlzLmZyYW1lID0gdGhpcy5kZXRlcm1pbmVGcmFtZSgpO1xuICAgIGlmKHRoaXMuZnJhbWUgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBvZmZzZXRYID0gKHRoaXMuZnJhbWUgJSB0aGlzLmZyYW1lc1BlclJvdykgKyB0aGlzLm9mZnNldENvbDtcbiAgICBvZmZzZXRZID0gTWF0aC5mbG9vcih0aGlzLmZyYW1lIC8gdGhpcy5mcmFtZXNQZXJSb3cpICsgdGhpcy5vZmZzZXRSb3c7XG5cbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIG9mZnNldFggKiB0aGlzLmZyYW1lV2lkdGgsXG4gICAgICBvZmZzZXRZICogdGhpcy5mcmFtZUhlaWdodCxcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCxcbiAgICAgIHRoaXMuZnJhbWVIZWlnaHQsXG4gICAgICB4IC0gdGhpcy5mcmFtZVdpZHRoIC8gMixcbiAgICAgIHkgLSB0aGlzLmZyYW1lSGVpZ2h0IC8gMixcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCxcbiAgICAgIHRoaXMuZnJhbWVIZWlnaHRcbiAgICApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRyYXdQYXJ0KHN0YXJ0WCwgc3RhcnRZLCBzdG9wWCwgc3RvcFksIGN0eCk6IGJvb2xlYW4ge1xuICAgIGxldCBvZmZzZXRYLCBvZmZzZXRZO1xuXG4gICAgdGhpcy5mcmFtZSA9IHRoaXMuZGV0ZXJtaW5lRnJhbWUoKTtcbiAgICBpZih0aGlzLmZyYW1lID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgb2Zmc2V0WCA9ICh0aGlzLmZyYW1lICUgdGhpcy5mcmFtZXNQZXJSb3cpICsgdGhpcy5vZmZzZXRDb2w7XG4gICAgb2Zmc2V0WSA9IE1hdGguZmxvb3IodGhpcy5mcmFtZSAvIHRoaXMuZnJhbWVzUGVyUm93KSArIHRoaXMub2Zmc2V0Um93O1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICBzdGFydFggKyBvZmZzZXRYICogdGhpcy5mcmFtZVdpZHRoLFxuICAgICAgc3RhcnRZICsgb2Zmc2V0WSAqIHRoaXMuZnJhbWVIZWlnaHQsXG4gICAgICBzdG9wWCxcbiAgICAgIHN0b3BZLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBzdG9wWCxcbiAgICAgIHN0b3BZXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkZXRlcm1pbmVGcmFtZSgpOiBudW1iZXIge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBlbGFwc2VkVGltZSA9ICgrbm93KSAtICgrdGhpcy5zdGFydCk7XG4gICAgbGV0IGZyYW1lID0gTWF0aC5yb3VuZCh0aGlzLmZyYW1lc1BlclNlY29uZCAqIGVsYXBzZWRUaW1lKTtcbiAgICBsZXQgY29tcEZyYW1lO1xuXG4gICAgaWYodGhpcy5sb29wVHlwZSA9PSBMT09QX1RZUEVTLm5vTG9vcCAmJiBmcmFtZSA+IHRoaXMubnVtYmVyT2ZGcmFtZXMpIHtcbiAgICAgIGZyYW1lID0gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5sb29wVHlwZSA9PSBMT09QX1RZUEVTLmxvb3ApIHtcbiAgICAgIGZyYW1lICU9IHRoaXMubnVtYmVyT2ZGcmFtZXM7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5sb29wVHlwZSA9PSBMT09QX1RZUEVTLmxvb3BCYWNrQW5kRm9ydGgpIHtcbiAgICAgIGxldCBjb21wRnJhbWUgPSBmcmFtZSAlIE1hdGguZmxvb3IodGhpcy5udW1iZXJPZkZyYW1lcyAqIDEuNSk7XG4gICAgICBpZihjb21wRnJhbWUgPj0gdGhpcy5udW1iZXJPZkZyYW1lcykge1xuICAgICAgICBmcmFtZSA9IE1hdGguZmxvb3IodGhpcy5udW1iZXJPZkZyYW1lcyAqIDEuNSkgLSBjb21wRnJhbWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZnJhbWUgPSBjb21wRnJhbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZnJhbWUgPSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59O1xuIiwiaW1wb3J0IEFuaW1hdGlvbiBmcm9tICcuL0FuaW1hdGlvbic7XG5pbXBvcnQgeyBMT09QX1RZUEVTLCBDT1dCT1lfVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZSQU1FU19QRVJfU0VDT05EID0gOCAvIDEwMDA7XG5jb25zdCBDT1dCT1lfV0lEVEggPSA0ODtcbmNvbnN0IENPV0JPWV9IRUlHSFQgPSA0ODtcbmNvbnN0IE5VTUJFUl9PRl9GUkFNRVMgPSA5NjtcbmNvbnN0IEZSQU1FU19QRVJfUk9XID0gNDtcblxuY29uc3QgQlJPV05fQ09XQk9ZX09GRlNFVCA9IDI7XG5jb25zdCBZRUxMT1dfQ09XQk9ZX09GRlNFVCA9IDA7XG5jb25zdCBET1dOID0gMDtcbmNvbnN0IExFRlQgPSAxO1xuY29uc3QgUklHSFQgPSAyO1xuY29uc3QgVVAgPSAzO1xuXG5jb25zdCBCVUxMRVRfV0lEVEggPSAxMDtcbmNvbnN0IEJVTExFVF9IRUlHSFQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uRmFjdG9yeSB7XG5cbiAgcHJpdmF0ZSBhbmltYXRpb25zO1xuICBwcml2YXRlIGltYWdlO1xuICBwcml2YXRlIGJ1bGxldEltYWdlO1xuICBwcml2YXRlIGxvYWRpbmdQcm9taXNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgc3ByaXRlc2hlZXRQcm9taXNlID0gbnVsbDtcbiAgICBsZXQgYnVsbGV0UHJvbWlzZSA9IG51bGw7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltZy9jb3dib3kucG5nJztcbiAgICBzcHJpdGVzaGVldFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGF0LmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJ1bGxldEltYWdlLnNyYyA9ICcuL2ltZy9idWxsZXQucG5nJztcbiAgICBidWxsZXRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhhdC5idWxsZXRJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRpbmdQcm9taXNlID0gUHJvbWlzZS5hbGwoWyBzcHJpdGVzaGVldFByb21pc2UsIGJ1bGxldFByb21pc2UgXSk7XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXRMb2FkaW5nUHJvbWlzZSgpe1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdQcm9taXNlO1xuICB9XG5cbiAgcHVibGljIGdldE5ld0J1bGxldEFuaW1hdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBGUkFNRVNfUEVSX1NFQ09ORCxcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZSxcbiAgICAgICAgQlVMTEVUX1dJRFRILFxuICAgICAgICBCVUxMRVRfSEVJR0hULFxuICAgICAgICAxLCAxLCAwLCAwLCBMT09QX1RZUEVTLmxvb3BcbiAgICAgICksXG4gICAgICB3aWR0aDogQlVMTEVUX1dJRFRILFxuICAgICAgaGVpZ2h0OiBCVUxMRVRfSEVJR0hUXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROZXdDb3dib3lBbmltYXRpb25zKGNvd2JveVR5cGUpIHtcbiAgICBzd2l0Y2goY293Ym95VHlwZSkge1xuICAgICAgY2FzZSBDT1dCT1lfVFlQRVMueWVsbG93OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRZZWxsb3dDb3dib3lBbmltYXRpb25zKCk7XG4gICAgICBjYXNlIENPV0JPWV9UWVBFUy5icm93bjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJvd25Db3dib3lBbmltYXRpb25zKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0WWVsbG93Q293Ym95QW5pbWF0aW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2Fsa2luZzoge1xuICAgICAgICBkb3duOiB0aGlzLmluaXRpYXRlV2Fsa2luZ1N0YXRlKERPV04sIFlFTExPV19DT1dCT1lfT0ZGU0VUKSxcbiAgICAgICAgbGVmdDogdGhpcy5pbml0aWF0ZVdhbGtpbmdTdGF0ZShMRUZULCBZRUxMT1dfQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmluaXRpYXRlV2Fsa2luZ1N0YXRlKFJJR0hULCBZRUxMT1dfQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIHVwOiB0aGlzLmluaXRpYXRlV2Fsa2luZ1N0YXRlKFVQLCBZRUxMT1dfQ09XQk9ZX09GRlNFVClcbiAgICAgIH0sXG4gICAgICBzdGFuZGluZzoge1xuICAgICAgICBkb3duOiB0aGlzLmluaXRpYXRlU3RhbmRpbmdTdGF0ZShET1dOLCBZRUxMT1dfQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIGxlZnQ6IHRoaXMuaW5pdGlhdGVTdGFuZGluZ1N0YXRlKExFRlQsIFlFTExPV19DT1dCT1lfT0ZGU0VUKSxcbiAgICAgICAgcmlnaHQ6IHRoaXMuaW5pdGlhdGVTdGFuZGluZ1N0YXRlKFJJR0hULCBZRUxMT1dfQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIHVwOiB0aGlzLmluaXRpYXRlU3RhbmRpbmdTdGF0ZShVUCwgWUVMTE9XX0NPV0JPWV9PRkZTRVQpXG4gICAgICB9LFxuICAgICAgd2lkdGg6IENPV0JPWV9XSURUSCxcbiAgICAgIGhlaWdodDogQ09XQk9ZX0hFSUdIVFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0QnJvd25Db3dib3lBbmltYXRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3YWxraW5nOiB7XG4gICAgICAgIGRvd246IHRoaXMuaW5pdGlhdGVXYWxraW5nU3RhdGUoRE9XTiwgQlJPV05fQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIGxlZnQ6IHRoaXMuaW5pdGlhdGVXYWxraW5nU3RhdGUoTEVGVCwgQlJPV05fQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmluaXRpYXRlV2Fsa2luZ1N0YXRlKFJJR0hULCBCUk9XTl9DT1dCT1lfT0ZGU0VUKSxcbiAgICAgICAgdXA6IHRoaXMuaW5pdGlhdGVXYWxraW5nU3RhdGUoVVAsIEJST1dOX0NPV0JPWV9PRkZTRVQpXG4gICAgICB9LFxuICAgICAgc3RhbmRpbmc6IHtcbiAgICAgICAgZG93bjogdGhpcy5pbml0aWF0ZVN0YW5kaW5nU3RhdGUoRE9XTiwgQlJPV05fQ09XQk9ZX09GRlNFVCksXG4gICAgICAgIGxlZnQ6IHRoaXMuaW5pdGlhdGVTdGFuZGluZ1N0YXRlKExFRlQsIEJST1dOX0NPV0JPWV9PRkZTRVQpLFxuICAgICAgICByaWdodDogdGhpcy5pbml0aWF0ZVN0YW5kaW5nU3RhdGUoUklHSFQsIEJST1dOX0NPV0JPWV9PRkZTRVQpLFxuICAgICAgICB1cDogdGhpcy5pbml0aWF0ZVN0YW5kaW5nU3RhdGUoVVAsIEJST1dOX0NPV0JPWV9PRkZTRVQpXG4gICAgICB9LFxuICAgICAgd2lkdGg6IENPV0JPWV9XSURUSCxcbiAgICAgIGhlaWdodDogQ09XQk9ZX0hFSUdIVFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhdGVXYWxraW5nU3RhdGUob2Zmc2V0Um93LCBjb3dib3lUeXBlT2Zmc2V0KSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRpb24oXG4gICAgICBGUkFNRVNfUEVSX1NFQ09ORCxcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICBDT1dCT1lfV0lEVEgsXG4gICAgICBDT1dCT1lfSEVJR0hULFxuICAgICAgMywgMywgb2Zmc2V0Um93LCAwICsgKGNvd2JveVR5cGVPZmZzZXQgKiAzKSwgTE9PUF9UWVBFUy5sb29wQmFja0FuZEZvcnRoXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWF0ZVN0YW5kaW5nU3RhdGUob2Zmc2V0Um93LCBjb3dib3lUeXBlT2Zmc2V0KSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRpb24oXG4gICAgICBGUkFNRVNfUEVSX1NFQ09ORCxcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICBDT1dCT1lfV0lEVEgsXG4gICAgICBDT1dCT1lfSEVJR0hULFxuICAgICAgMSwgMSwgb2Zmc2V0Um93LCAxICsgKGNvd2JveVR5cGVPZmZzZXQgKiAzKSwgTE9PUF9UWVBFUy5sb29wXG4gICAgKTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IFRoaW5nIGZyb20gJy4vVGhpbmcnO1xuaW1wb3J0IHsgRElSRUNUSU9OUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24nO1xuXG5jb25zdCBNQVhfQUdFID0gNTAwO1xuY29uc3QgRlJBTUVTX1BFUl9TRUNPTkQgPSA2MDtcbmNvbnN0IFBJWEVMU19QRVJfRlBTID0gNTAwIC8gRlJBTUVTX1BFUl9TRUNPTkQ7XG5jb25zdCBQSVhFTFNfUEVSX1RIT1VTQU5EX01JTElTRUNPTkRTID0gUElYRUxTX1BFUl9GUFMgKiBGUkFNRVNfUEVSX1NFQ09ORCAvIDEwMDA7XG5jb25zdCBDT0xPUiA9ICdncmVlbic7XG5jb25zdCBERUJVRyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBUaGluZyB7XG5cbiAgcHJpdmF0ZSBzcGVlZDtcbiAgcHJpdmF0ZSBhbmltYXRpb247XG4gIHByaXZhdGUgY29sbGlzaW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHgsIHksIGRpcmVjdGlvbiwgYW5pbWF0aW9uRmFjdG9yeSxcbiAgICBwcml2YXRlIHBhcmVudFxuICApIHtcbiAgICBzdXBlcih4LCB5LCBkaXJlY3Rpb24sIENPTE9SKTtcbiAgICB0aGlzLnNwZWVkID0gUElYRUxTX1BFUl9USE9VU0FORF9NSUxJU0VDT05EUztcbiAgICB0aGlzLnRpbWVDcmVhdGVkID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbkZhY3RvcnkuZ2V0TmV3QnVsbGV0QW5pbWF0aW9uKCk7XG4gICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKGFuaW1hdGlvbkZhY3RvcnkpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY3R4KSB7XG4gICAgaWYoREVCVUcpIHtcbiAgICAgIGxldCBvZmZzZXRYID0gdGhpcy54IC0gdGhpcy5hbmltYXRpb24ud2lkdGggLyAyO1xuICAgICAgbGV0IG9mZnNldFkgPSB0aGlzLnkgLSB0aGlzLmFuaW1hdGlvbi5oZWlnaHQgLyAyO1xuICAgICAgY3R4LnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgdGhpcy5hbmltYXRpb24ud2lkdGgsIHRoaXMuYW5pbWF0aW9uLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGlvbi5kcmF3KHRoaXMueCwgdGhpcy55LCBjdHgpO1xuICB9XG5cbiAgcHVibGljIHByb2dyZXNzKCkge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBlbGFwc2VkVGltZSA9ICgrbm93KSAtICgrdGhpcy50aW1lcik7XG4gICAgbGV0IHN0ZXAgPSB0aGlzLnNwZWVkICogZWxhcHNlZFRpbWU7XG4gICAgbGV0IGluY3JlbWVudHMgPSB0aGlzLmRldGVybWluZURpcmVjdGlvbigpO1xuICAgIHRoaXMueCArPSBpbmNyZW1lbnRzLnggKiBzdGVwO1xuICAgIHRoaXMueSArPSBpbmNyZW1lbnRzLnkgKiBzdGVwO1xuICAgIHRoaXMudGltZXIgPSBub3c7XG4gICAgaWYodGhpcy5zaG91bGREaWUoKSkgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgZGV0ZXJtaW5lRGlyZWN0aW9uKCkge1xuICAgIHN3aXRjaCh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBESVJFQ1RJT05TLnVwOlxuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAtMSB9O1xuICAgICAgY2FzZSBESVJFQ1RJT05TLmRvd246XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDEgfTtcbiAgICAgIGNhc2UgRElSRUNUSU9OUy5sZWZ0OlxuICAgICAgICByZXR1cm4geyB4OiAtMSwgeTogMCB9O1xuICAgICAgY2FzZSBESVJFQ1RJT05TLnJpZ2h0OlxuICAgICAgICByZXR1cm4geyB4OiAxLCB5OiAwIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRldGVjdENvbGxpc2lvbih0aGluZ3MpIHtcbiAgICBmb3IobGV0IHRoaW5nID0gdGhpbmdzLmZpcnN0KCk7IHRoaW5nICE9IG51bGw7IHRoaW5nID0gdGhpbmcubmV4dCkge1xuICAgICAgaWYoXG4gICAgICAgIHRoaW5nLmVsZW1lbnQuY2FuU2hvb3QoKSAmJlxuICAgICAgICB0aGlzLnBhcmVudCAhPT0gdGhpbmcuZWxlbWVudCAmJlxuICAgICAgICB0aGlzLmNvbGxpc2lvbi5idWxsZXRDb2xsaWRlc1dpdGhPcHBvbmVudCh0aGlzLCB0aGluZy5lbGVtZW50KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0aGluZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkRGllKCkge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoKCtub3cpIC0gKCt0aGlzLnRpbWVDcmVhdGVkKSkgPiBNQVhfQUdFO1xuICB9XG5cbiAgcHVibGljIGNhblNob290KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBwdWJsaWMgZ2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG5cbiAgcHVibGljIGlzUGFyZW50KHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nID09IHRoaXMucGFyZW50O1xuICB9XG5cbiAgcHVibGljIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxufTtcbiIsImNvbnN0IEJBQ0tHUk9VTkQgPSAnI2UyYjk3Myc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cbiAgcHJpdmF0ZSBjYW52YXNQb2ludGVyO1xuICBwcml2YXRlIGNvbnRleHQ7XG5cbiAgY29uc3RydWN0b3IobWF4V2lkdGgsIG1heEhlaWdodCwgYmFja2dyb3VuZCA9IEJBQ0tHUk9VTkQpIHtcbiAgICB0aGlzLmNhbnZhc1BvaW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXNQb2ludGVyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmNhbnZhc1BvaW50ZXIud2lkdGggPSBtYXhXaWR0aDtcbiAgICB0aGlzLmNhbnZhc1BvaW50ZXIuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gQkFDS0dST1VORDtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNQb2ludGVyLndpZHRoLCB0aGlzLmNhbnZhc1BvaW50ZXIuaGVpZ2h0KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3U2NvcmUocmVkLCBibHVlKSB7XG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcImJvbGQgMzJweCAnQ291cmllciBOZXcnXCI7XG4gICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocmVkLCB0aGlzLmNhbnZhc1BvaW50ZXIud2lkdGggLyAyIC0gMTAwLCA1MCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGJsdWUsIHRoaXMuY2FudmFzUG9pbnRlci53aWR0aCAvIDIgKyAxMDAsIDUwKTtcbiAgfVxuXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIHtcblxuICBwcml2YXRlIGNvbXBhcmlzb25Db250ZXh0O1xuICBwcml2YXRlIGJ1bGxldFNvdXJjZURhdGE7XG5cbiAgY29uc3RydWN0b3IoYW5pbWF0aW9uRmFjdG9yeSkge1xuICAgIGxldCBjb21wYXJpc29uQ2FudmFzO1xuICAgIGxldCBjb21wYXJpc29uQ29udGV4dDtcbiAgICBsZXQgc291cmNlQ2FudmFzO1xuICAgIGxldCBzb3VyY2VDb250ZXh0O1xuICAgIGxldCBidWxsZXRTb3VyY2VBbmltYXRpb24gPSBhbmltYXRpb25GYWN0b3J5LmdldE5ld0J1bGxldEFuaW1hdGlvbigpO1xuXG4gICAgY29tcGFyaXNvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbXBhcmlzb25DYW52YXMud2lkdGggPSBidWxsZXRTb3VyY2VBbmltYXRpb24ud2lkdGg7XG4gICAgY29tcGFyaXNvbkNhbnZhcy5oZWlnaHQgPSBidWxsZXRTb3VyY2VBbmltYXRpb24uaGVpZ2h0O1xuICAgIHRoaXMuY29tcGFyaXNvbkNvbnRleHQgPSBjb21wYXJpc29uQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBzb3VyY2VDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBzb3VyY2VDYW52YXMud2lkdGggPSBidWxsZXRTb3VyY2VBbmltYXRpb24ud2lkdGg7XG4gICAgc291cmNlQ2FudmFzLmhlaWdodCA9IGJ1bGxldFNvdXJjZUFuaW1hdGlvbi5oZWlnaHQ7XG4gICAgc291cmNlQ29udGV4dCA9IHNvdXJjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgYnVsbGV0U291cmNlQW5pbWF0aW9uLmFuaW1hdGlvbi5kcmF3KDAsIDAsIHNvdXJjZUNvbnRleHQpO1xuXG4gICAgdGhpcy5idWxsZXRTb3VyY2VEYXRhID0gc291cmNlQ29udGV4dC5nZXRJbWFnZURhdGEoXG4gICAgICAwLCAwLCBidWxsZXRTb3VyY2VBbmltYXRpb24ud2lkdGgsIGJ1bGxldFNvdXJjZUFuaW1hdGlvbi5oZWlnaHRcbiAgICApLmRhdGE7XG5cbiAgfVxuXG4gIHB1YmxpYyBidWxsZXRDb2xsaWRlc1dpdGhPcHBvbmVudChidWxsZXQsIG9wcG9uZW50KTogYm9vbGVhbiB7XG4gICAgaWYodGhpcy5zcXVhcmVCb3hDb2xsaXNpb24oYnVsbGV0LCBvcHBvbmVudCkgJiYgdGhpcy5waXhlbENvbGxpc2lvbihidWxsZXQsIG9wcG9uZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgc3F1YXJlQm94Q29sbGlzaW9uKGJ1bGxldCwgb3Bwb25lbnQpOiBib29sZWFuIHtcbiAgICBsZXQgc3RhcnRUaGlzWCA9IGJ1bGxldC54IC0gYnVsbGV0LmFuaW1hdGlvbi53aWR0aCAvIDI7XG4gICAgbGV0IHN0YXJ0VGhpc1kgPSBidWxsZXQueSAtIGJ1bGxldC5hbmltYXRpb24uaGVpZ2h0IC8gMjtcbiAgICBsZXQgZW5kVGhpc1ggPSBzdGFydFRoaXNYICsgYnVsbGV0LmFuaW1hdGlvbi53aWR0aDtcbiAgICBsZXQgZW5kVGhpc1kgPSBzdGFydFRoaXNZICsgYnVsbGV0LmFuaW1hdGlvbi5oZWlnaHQ7XG5cbiAgICBsZXQgc3RhcnRPcHBvbmVudFggPSBvcHBvbmVudC54IC0gb3Bwb25lbnQuYW5pbWF0aW9ucy53aWR0aCAvIDI7XG4gICAgbGV0IHN0YXJ0T3Bwb25lbnRZID0gb3Bwb25lbnQueSAtIG9wcG9uZW50LmFuaW1hdGlvbnMuaGVpZ2h0IC8gMjtcbiAgICBsZXQgZW5kT3Bwb25lbnRYID0gc3RhcnRPcHBvbmVudFggKyBvcHBvbmVudC5hbmltYXRpb25zLndpZHRoO1xuICAgIGxldCBlbmRPcHBvbmVudFkgPSBzdGFydE9wcG9uZW50WSArIG9wcG9uZW50LmFuaW1hdGlvbnMuaGVpZ2h0O1xuXG4gICAgaWYoXG4gICAgICAoc3RhcnRUaGlzWCA+PSBzdGFydE9wcG9uZW50WCAmJlxuICAgICAgc3RhcnRUaGlzWCA8PSBlbmRPcHBvbmVudFggJiZcbiAgICAgIHN0YXJ0VGhpc1kgPj0gc3RhcnRPcHBvbmVudFkgJiZcbiAgICAgIHN0YXJ0VGhpc1kgPD0gZW5kT3Bwb25lbnRZKSB8fFxuXG4gICAgICAoZW5kVGhpc1ggPj0gc3RhcnRPcHBvbmVudFggJiZcbiAgICAgIGVuZFRoaXNYIDw9IGVuZE9wcG9uZW50WCAmJlxuICAgICAgZW5kVGhpc1kgPj0gc3RhcnRPcHBvbmVudFkgJiZcbiAgICAgIGVuZFRoaXNZIDw9IGVuZE9wcG9uZW50WSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHBpeGVsQ29sbGlzaW9uKGJ1bGxldCwgb3Bwb25lbnQpOiBib29sZWFuIHtcblxuICAgIC8qIDEuIElzb2xhdGUgdGhlIHBhcnQgd2hlcmUgdGhlcmUgaXMgb3ZlcmxhcCAqL1xuICAgIGxldCBidWxsZXRTdGFydFggPSBNYXRoLmZsb29yKFxuICAgICAgYnVsbGV0LnggLSBvcHBvbmVudC54ICsgKG9wcG9uZW50LmFuaW1hdGlvbnMud2lkdGggLyAyKSAtIChidWxsZXQuYW5pbWF0aW9uLndpZHRoIC8gMilcbiAgICApO1xuXG4gICAgbGV0IGJ1bGxldFN0YXJ0WSA9IE1hdGguZmxvb3IoXG4gICAgICBidWxsZXQueSAtIG9wcG9uZW50LnkgKyAob3Bwb25lbnQuYW5pbWF0aW9ucy5oZWlnaHQgLyAyKSAtIChidWxsZXQuYW5pbWF0aW9uLmhlaWdodCAvIDIpXG4gICAgKTtcblxuICAgIGxldCBidWxsZXRTdG9wWCA9IGJ1bGxldC5hbmltYXRpb24ud2lkdGg7XG4gICAgbGV0IGJ1bGxldFN0b3BZID0gYnVsbGV0LmFuaW1hdGlvbi5oZWlnaHQ7XG4gICAgbGV0IHdpZHRoID0gYnVsbGV0LmFuaW1hdGlvbi53aWR0aDtcbiAgICBsZXQgb3Bwb25lbnREYXRhO1xuXG4gICAgaWYoYnVsbGV0U3RhcnRYIDwgMCkge1xuICAgICAgYnVsbGV0U3RhcnRYID0gMDtcbiAgICB9XG4gICAgaWYoYnVsbGV0U3RhcnRZIDwgMCkge1xuICAgICAgYnVsbGV0U3RhcnRZID0gMDtcbiAgICB9XG4gICAgaWYoYnVsbGV0U3RhcnRYICsgYnVsbGV0U3RvcFggPiBvcHBvbmVudC5hbmltYXRpb25zLndpZHRoKSB7XG4gICAgICBidWxsZXRTdG9wWCA9IG9wcG9uZW50LmFuaW1hdGlvbnMud2lkdGggLSBidWxsZXRTdGFydFg7XG4gICAgfVxuICAgIGlmKGJ1bGxldFN0YXJ0WSArIGJ1bGxldFN0b3BZID4gb3Bwb25lbnQuYW5pbWF0aW9ucy5oZWlnaHQpIHtcbiAgICAgIGJ1bGxldFN0b3BZID0gb3Bwb25lbnQuYW5pbWF0aW9ucy5oZWlnaHQgLSBidWxsZXRTdGFydFk7XG4gICAgfVxuXG4gICAgLyogMi4gUHJpbnQgdGhlIHBpeGVscyBvZiB0aGUgb3Bwb25lbnQgZnJhbWUgb250byB0aGUgY29tcGFyaXNvbiBjYW52YXMgKi9cbiAgICBvcHBvbmVudC5hbmltYXRpb25zW29wcG9uZW50LnN0YXRlXVtvcHBvbmVudC5kaXJlY3Rpb25dLmRyYXdQYXJ0KFxuICAgICAgYnVsbGV0U3RhcnRYLFxuICAgICAgYnVsbGV0U3RhcnRZLFxuICAgICAgYnVsbGV0U3RvcFgsXG4gICAgICBidWxsZXRTdG9wWSxcbiAgICAgIHRoaXMuY29tcGFyaXNvbkNvbnRleHRcbiAgICApO1xuXG4gICAgb3Bwb25lbnREYXRhID0gdGhpcy5jb21wYXJpc29uQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgYnVsbGV0LmFuaW1hdGlvbi53aWR0aCwgYnVsbGV0LmFuaW1hdGlvbi5oZWlnaHQpLmRhdGE7XG5cbiAgICAvKiAzLiBDb21wYXJlIHRoZSBjb21wYXJpc29uIGNhbnZhcyB0byB0aGUgY29weSBvZiB0aGUgYnVsbGV0ICovXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJ1bGxldFN0b3BYOyBpKyspIHtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBidWxsZXRTdG9wWTsgaisrKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAoaSAqIDQpICsgKGogKiB3aWR0aCAqIDQpO1xuXG4gICAgICAgIGlmKHRoaXMuYnVsbGV0U291cmNlRGF0YVtvZmZzZXQgKyAzXSAhPT0gMCAmJiBvcHBvbmVudERhdGFbb2Zmc2V0ICsgM10gIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsImltcG9ydCBUaGluZyBmcm9tIFwiLi9UaGluZ1wiO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XG5pbXBvcnQgeyBDT1dCT1lfU1RBVEVTLCBESVJFQ1RJT05TLCBQT0lOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IFRJTUVfVE9fTkVYVF9TSE9UID0gNjAwO1xuY29uc3QgVElNRV9UT19ORVhUX0VYUExPU0lPTiA9IDUwMDtcbmNvbnN0IEZSQU1FU19QRVJfU0VDT05EID0gNjA7XG5jb25zdCBQSVhFTFNfUEVSX0ZQUyA9IDIwMCAvIEZSQU1FU19QRVJfU0VDT05EO1xuY29uc3QgUElYRUxTX1BFUl9USE9VU0FORF9NSUxJU0VDT05EUyA9IFBJWEVMU19QRVJfRlBTICogRlJBTUVTX1BFUl9TRUNPTkQgLyAxMDAwO1xuY29uc3QgREVCVUcgPSBmYWxzZTtcblxuY29uc3QgVVAgPSAwO1xuY29uc3QgRE9XTiA9IDE7XG5jb25zdCBMRUZUID0gMjtcbmNvbnN0IFJJR0hUID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293Ym95IGV4dGVuZHMgVGhpbmcge1xuXG4gIHByaXZhdGUgbW9tZW50TGFzdEZpcmVkO1xuICBwcml2YXRlIGR5aW5nOiBib29sZWFuO1xuICBwcml2YXRlIGxhc3RQcm9ncmVzc01vbWVudDtcbiAgcHJpdmF0ZSBhbmltYXRpb25zO1xuICBwcml2YXRlIHN0YXRlO1xuICBwcml2YXRlIHN0YXRlQ2hhbmdlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwcmV2aW91c1N0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHgsIHksIGRpcmVjdGlvbiwgY29sb3IsXG4gICAgcHJpdmF0ZSBtYXhXaWR0aCxcbiAgICBwcml2YXRlIG1heEhlaWdodCxcbiAgICBwcml2YXRlIGNvbnRyb2xzLFxuICAgIHByaXZhdGUgY29udHJvbHNNYXAsXG4gICAgcHJpdmF0ZSB0aGluZ3MsXG4gICAgcHJpdmF0ZSBzb3VuZCxcbiAgICBwcml2YXRlIGFuaW1hdGlvbkZhY3RvcnksXG4gICAgcHJpdmF0ZSBjb3dib3lUeXBlXG4gICkge1xuICAgIHN1cGVyKHgsIHksIGRpcmVjdGlvbiwgY29sb3IpO1xuICAgIHRoaXMubW9tZW50TGFzdEZpcmVkID0gKCtuZXcgRGF0ZSgpKSAtIFRJTUVfVE9fTkVYVF9TSE9UO1xuICAgIHRoaXMuZHlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RQcm9ncmVzc01vbWVudCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uRmFjdG9yeS5nZXROZXdDb3dib3lBbmltYXRpb25zKGNvd2JveVR5cGUpO1xuICAgIHRoaXMuc3RhdGUgPSBDT1dCT1lfU1RBVEVTLndhbGtpbmc7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY3R4KSB7XG4gICAgaWYodGhpcy5zdGF0ZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGlvbnNbdGhpcy5zdGF0ZV1bdGhpcy5kaXJlY3Rpb25dLnJlc2V0KCk7XG4gICAgfVxuICAgIGxldCByb3RhdGVkUG9pbnRzID0gbnVsbDtcblxuICAgIHRoaXMuYW5pbWF0aW9uc1t0aGlzLnN0YXRlXVt0aGlzLmRpcmVjdGlvbl0uZHJhdyh0aGlzLngsIHRoaXMueSwgY3R4KTtcblxuICAgIGlmKERFQlVHKSB7XG4gICAgICBsZXQgb2Zmc2V0WCA9IHRoaXMueCAtIHRoaXMuYW5pbWF0aW9ucy53aWR0aCAvIDI7XG4gICAgICBsZXQgb2Zmc2V0WSA9IHRoaXMueSAtIHRoaXMuYW5pbWF0aW9ucy5oZWlnaHQgLyAyO1xuICAgICAgY3R4LnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgdGhpcy5hbmltYXRpb25zLndpZHRoLCB0aGlzLmFuaW1hdGlvbnMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBwcm9ncmVzcygpIHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAoK25vdykgLSAoK3RoaXMubGFzdFByb2dyZXNzTW9tZW50KTtcblxuICAgIGlmKHRoaXMubm9XYWxraW5nS2V5UHJlc3NlZCgpKSB0aGlzLnN0YXRlID0gQ09XQk9ZX1NUQVRFUy5zdGFuZGluZztcbiAgICBlbHNlIHRoaXMuc3RhdGUgPSBDT1dCT1lfU1RBVEVTLndhbGtpbmc7XG5cbiAgICB0aGlzLmNoZWNrU3RhdGVDaGFuZ2VkKCk7XG5cbiAgICBpZih0aGlzLmNvbnRyb2xzW3RoaXMuY29udHJvbHNNYXAubGVmdF0pIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gRElSRUNUSU9OUy5sZWZ0O1xuICAgICAgdGhpcy5tb3ZlTGVmdChlbGFwc2VkVGltZSk7XG4gICAgfVxuICAgIGlmKHRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5yaWdodF0pIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gRElSRUNUSU9OUy5yaWdodDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0KGVsYXBzZWRUaW1lKTtcbiAgICB9XG4gICAgaWYodGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLnVwXSkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBESVJFQ1RJT05TLnVwO1xuICAgICAgdGhpcy5tb3ZlVXAoZWxhcHNlZFRpbWUpO1xuICAgIH1cbiAgICBpZih0aGlzLmNvbnRyb2xzW3RoaXMuY29udHJvbHNNYXAuZG93bl0pIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gRElSRUNUSU9OUy5kb3duO1xuICAgICAgdGhpcy5tb3ZlRG93bihlbGFwc2VkVGltZSk7XG4gICAgfVxuICAgIGlmKHRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5maXJlXSkge1xuICAgICAgdGhpcy5zaG9vdCgpO1xuICAgIH1cbiAgICB0aGlzLmxhc3RQcm9ncmVzc01vbWVudCA9IG5vdztcbiAgfVxuXG4gIHB1YmxpYyBzaG9vdCgpIHtcbiAgICBpZih0aGlzLmFsbG93ZWRUb1Nob290KCkpIHtcbiAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMueCwgdGhpcy55LCB0aGlzLmRpcmVjdGlvbiwgdGhpcy5hbmltYXRpb25GYWN0b3J5LCB0aGlzKTtcbiAgICAgIHRoaXMudGhpbmdzLnB1c2goYnVsbGV0KTtcbiAgICAgIHRoaXMuc291bmQucGxheUd1bnNob3RTb3VuZCgpO1xuICAgICAgdGhpcy5tb21lbnRMYXN0RmlyZWQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaWUoKSB7XG4gICAgdGhpcy5zb3VuZC5wbGF5RHlpbmdIdW1hblNvdW5kKCk7XG4gICAgdGhpcy5keWluZyA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IENPV0JPWV9TVEFURVMuc3RhbmRpbmc7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29udHJvbHMoY29udHJvbHMpIHtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gIH1cblxuICBwdWJsaWMgYWxsb3dlZFRvU2hvb3QoKTogYm9vbGVhbiB7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuICgrbm93KSAtICgrdGhpcy5tb21lbnRMYXN0RmlyZWQpID49IFRJTUVfVE9fTkVYVF9TSE9UO1xuICB9XG5cbiAgcHVibGljIGRlYXRoSW5Qcm9ncmVzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5keWluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXRUaXAoKSB7XG4gICAgbGV0IG5ld1ggPSBQT0lOVFNbMF0ueCAqIHRoaXMuY29zKHRoaXMuZGlyZWN0aW9uKSAtIFBPSU5UU1swXS55ICogdGhpcy5zaW4odGhpcy5kaXJlY3Rpb24pO1xuICAgIGxldCBuZXdZID0gUE9JTlRTWzBdLnkgKiB0aGlzLmNvcyh0aGlzLmRpcmVjdGlvbikgKyBQT0lOVFNbMF0ueCAqIHRoaXMuc2luKHRoaXMuZGlyZWN0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy54ICsgbmV3WCxcbiAgICAgIHk6IHRoaXMueSArIG5ld1lcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldENvbG9ySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkRGllKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5TaG9vdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIFBPSU5UUztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0ZUNoYW5nZWQoKSB7XG4gICAgaWYodGhpcy5zdGF0ZSAhPT0gdGhpcy5wcmV2aW91c1N0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZCA9IHRydWU7XG4gICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9XYWxraW5nS2V5UHJlc3NlZCgpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5sZWZ0XSB8fFxuICAgICAgdGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLnJpZ2h0XSB8fFxuICAgICAgdGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLnVwXSB8fFxuICAgICAgdGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLmRvd25dXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZVVwKHRpbWVEZWx0YSkge1xuICAgIGxldCBzdGVwID0gUElYRUxTX1BFUl9USE9VU0FORF9NSUxJU0VDT05EUyAqIHRpbWVEZWx0YTtcbiAgICB0aGlzLnkgLT0gc3RlcDtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZURvd24odGltZURlbHRhKSB7XG4gICAgbGV0IHN0ZXAgPSBQSVhFTFNfUEVSX1RIT1VTQU5EX01JTElTRUNPTkRTICogdGltZURlbHRhO1xuICAgIHRoaXMueSArPSBzdGVwO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlTGVmdCh0aW1lRGVsdGEpIHtcbiAgICBsZXQgc3RlcCA9IFBJWEVMU19QRVJfVEhPVVNBTkRfTUlMSVNFQ09ORFMgKiB0aW1lRGVsdGE7XG4gICAgdGhpcy54IC09IHN0ZXA7XG4gIH1cblxuICBwcml2YXRlIG1vdmVSaWdodCh0aW1lRGVsdGEpIHtcbiAgICBsZXQgc3RlcCA9IFBJWEVMU19QRVJfVEhPVVNBTkRfTUlMSVNFQ09ORFMgKiB0aW1lRGVsdGE7XG4gICAgdGhpcy54ICs9IHN0ZXA7XG4gIH1cblxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlcnMge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhdHRhY2goc2NvcmUsIG5ld0dhbWUpIHtcblxuICAgIGxldCByZXNldEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtZ2FtZS1idXR0b24nKTtcbiAgICByZXNldEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmb3IobGV0IHBsYXllciBpbiBzY29yZSkgc2NvcmVbcGxheWVyXSA9IDA7XG4gICAgICBuZXdHYW1lKCk7XG4gICAgICByZXNldEdhbWVCdXR0b24uYmx1cigpO1xuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRyb2xzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XG4gICAgY29udHJvbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhbGVydChcbiAgICAgICAgJ0NvbnRyb2xzOlxcblxcblBsYXllcjE6XFxuRm9yd2FyZCA9IFVwIGFycm93XFxuQmFja3dhcmQgPSBEb3duIGFycm93XFxuJyArXG4gICAgICAgICdSb3RhdGUgbGVmdCA9IExlZnQgYXJyb3dcXG5Sb3RhdGUgUmlnaHQgPSBSaWdodCBhcnJvd1xcbicgK1xuICAgICAgICAnRmlyZSA9IDBcXG5cXG5QbGF5ZXIyOlxcbkZvcndhcmQgPSBXXFxuQmFja3dhcmQgPSBTXFxuJyArXG4gICAgICAgICdSb3RhdGUgbGVmdCA9IEFcXG5Sb3RhdGUgcmlnaHQgPSBEXFxuRmlyZSA9IFNwYWNlIGJhcidcbiAgICAgICk7XG4gICAgICBjb250cm9sc0J1dHRvbi5ibHVyKCk7XG4gICAgfSk7XG5cbiAgfVxufVxuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgU291bmQgZnJvbSAnLi9Tb3VuZCc7XG5pbXBvcnQgRXZlbnRIYW5kbGVycyBmcm9tICcuL0V2ZW50SGFuZGxlcnMnO1xuaW1wb3J0IEFuaW1hdGlvbkZhY3RvcnkgZnJvbSAnLi9BbmltYXRpb25GYWN0b3J5JztcbmltcG9ydCBOZXh0QW5pbWF0aW9uRnJhbWVGYWN0b3J5IGZyb20gJy4vTmV4dEFuaW1hdGlvbkZyYW1lRmFjdG9yeSc7XG5pbXBvcnQgS2V5Ym9hcmRJbnB1dCBmcm9tICcuL0tleWJvYXJkSW5wdXQnO1xuaW1wb3J0IFN0YXJzIGZyb20gJy4vU3RhcnMnO1xuaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9MaW5rZWRMaXN0JztcbmltcG9ydCBDb3dib3kgZnJvbSAnLi9Db3dib3knO1xuaW1wb3J0IHsgQ09XQk9ZX1RZUEVTLCBDT05UUk9MX0NPTkZJRywgRElSRUNUSU9OUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgTUFYX1dJRFRIID0gOTAwO1xuY29uc3QgTUFYX0hFSUdIVCA9IDU2MztcbmNvbnN0IElOSVRJQUxfRElSRUNUSU9OID0gMDtcbmNvbnN0IFJFRCA9ICdyZWQnO1xuY29uc3QgQkxVRSA9ICdibHVlJztcbmNvbnN0IE5VTUJFUl9PRl9TVEFSU19JTl9USEVfU0tZID0gMTAwMDtcbmNvbnN0IFRJTUVfVE9fTkVYVF9HQU1FID0gNTAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICBwcml2YXRlIGNhbnZhcztcbiAgcHJpdmF0ZSBjb250ZXh0O1xuICBwcml2YXRlIHNvdW5kO1xuICBwcml2YXRlIGFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgdGhpbmdzO1xuICBwcml2YXRlIHJlcXVlc3Q7XG4gIHByaXZhdGUga2V5Ym9hcmRJbnB1dDtcbiAgcHJpdmF0ZSBhY3RpdmVUYW5rO1xuICBwcml2YXRlIHRvZ2dsZTtcbiAgcHJpdmF0ZSBza3k7XG4gIHByaXZhdGUgZ2FtZU92ZXI7XG4gIHByaXZhdGUgdGltZUdhbWVFbmRlZDtcbiAgcHJpdmF0ZSBzY29yZTtcbiAgcHJpdmF0ZSBvdGhlclBsYXllckNvbG9yO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyhNQVhfV0lEVEgsIE1BWF9IRUlHSFQpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoKTtcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKCk7XG4gICAgdGhpcy5hbmltYXRpb25GYWN0b3J5ID0gbmV3IEFuaW1hdGlvbkZhY3RvcnkoKTtcbiAgICB0aGlzLnRoaW5ncyA9IG51bGw7XG4gICAgdGhpcy5yZXF1ZXN0ID0gbmV3IE5leHRBbmltYXRpb25GcmFtZUZhY3RvcnkoKTtcbiAgICB0aGlzLmtleWJvYXJkSW5wdXQgPSBuZXcgS2V5Ym9hcmRJbnB1dCgpO1xuICAgIHRoaXMuYWN0aXZlVGFuayA9IDA7XG4gICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcbiAgICB0aGlzLnNreSA9IG5ldyBTdGFycyhNQVhfV0lEVEgsIE1BWF9IRUlHSFQsIE5VTUJFUl9PRl9TVEFSU19JTl9USEVfU0tZKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy50aW1lR2FtZUVuZGVkID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnNjb3JlID0ge1xuICAgICAgcmVkOiAwLFxuICAgICAgYmx1ZTogMFxuICAgIH07XG5cbiAgICB0aGlzLmluaXRpYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYXRlKCk6IHZvaWQge1xuICAgIEV2ZW50SGFuZGxlcnMuYXR0YWNoKHRoaXMuc2NvcmUsIHRoaXMubmV3R2FtZSk7XG4gICAgdGhpcy5hbmltYXRpb25GYWN0b3J5LmdldExvYWRpbmdQcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kLmdldExvYWRpbmdQcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubmV3R2FtZSgpO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICB0aGlzLnNreS5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5tb3ZlQW5kRHJhd09iamVjdHMoKTtcbiAgICBpZighdGhpcy5nYW1lT3ZlcikgdGhpcy5kZXRlY3RDb2xsaXNpb24oKTtcbiAgICB0aGlzLmNhbnZhcy5kcmF3U2NvcmUodGhpcy5zY29yZS5yZWQsIHRoaXMuc2NvcmUuYmx1ZSk7XG5cbiAgICBpZih0aGlzLmNoZWNrR2FtZU5lZWRzVG9CZVJlc2V0KCkpIHtcbiAgICAgIHRoaXMubmV3R2FtZSgpO1xuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdCh0aGlzLmxvb3ApO1xuXG4gIH1cblxuICBwcml2YXRlIG1vdmVBbmREcmF3T2JqZWN0cygpOiB2b2lkIHtcbiAgICBmb3IobGV0IHRoaW5nID0gdGhpcy50aGluZ3MuZmlyc3QoKTsgdGhpbmcgIT09IG51bGw7IHRoaW5nID0gdGhpbmcubmV4dCkge1xuICAgICAgaWYodGhpbmcuZWxlbWVudC5pc0FsaXZlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGhpbmdzLnJlbW92ZSh0aGluZy5lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighdGhpcy5nYW1lT3ZlcikgdGhpbmcuZWxlbWVudC5wcm9ncmVzcygpO1xuICAgICAgICB0aGluZy5lbGVtZW50LmRyYXcodGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRldGVjdENvbGxpc2lvbigpOiB2b2lkIHtcbiAgICBmb3IobGV0IHRoaW5nID0gdGhpcy50aGluZ3MuZmlyc3QoKTsgdGhpbmcgIT09IG51bGw7IHRoaW5nID0gdGhpbmcubmV4dCkge1xuICAgICAgaWYoIXRoaW5nLmVsZW1lbnQuY2FuU2hvb3QoKSkge1xuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGluZy5lbGVtZW50LmRldGVjdENvbGxpc2lvbih0aGlzLnRoaW5ncyk7XG4gICAgICAgIGlmKGNvbGxpZGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDb2xsaXNpb24oY29sbGlkZXIsIHRoaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29sbGlzaW9uKGNvbGxpZGVyLCB0aGluZyk6IHZvaWQge1xuICAgIGxldCBvdGhlclBsYXllckNvbG9yO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMudGltZUdhbWVFbmRlZCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5vdGhlclBsYXllckNvbG9yID0gKGNvbGxpZGVyLmVsZW1lbnQuZ2V0Q29sb3JJZCgpID09ICdyZWQnID8gJ2JsdWUnIDogJ3JlZCcpO1xuICAgIHRoaXMuc2NvcmVbb3RoZXJQbGF5ZXJDb2xvcl0rKztcbiAgICBjb2xsaWRlci5lbGVtZW50LmRpZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXdHYW1lKCk6IHZvaWQge1xuICAgIHRoaXMudGhpbmdzID0gbmV3IExpbmtlZExpc3QoKTtcbiAgICBsZXQgdGFua3MgPSBbIG5ldyBDb3dib3koXG4gICAgICBNQVhfV0lEVEggLyA2LFxuICAgICAgTUFYX0hFSUdIVCAvIDIsXG4gICAgICBESVJFQ1RJT05TLnJpZ2h0LFxuICAgICAgUkVELFxuICAgICAgTUFYX1dJRFRILFxuICAgICAgTUFYX0hFSUdIVCxcbiAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dC5zdGF0ZSxcbiAgICAgIENPTlRST0xfQ09ORklHWzBdLFxuICAgICAgdGhpcy50aGluZ3MsXG4gICAgICB0aGlzLnNvdW5kLFxuICAgICAgdGhpcy5hbmltYXRpb25GYWN0b3J5LFxuICAgICAgQ09XQk9ZX1RZUEVTLnllbGxvd1xuICAgICksIG5ldyBDb3dib3koXG4gICAgICBNQVhfV0lEVEggLyA2ICogNSxcbiAgICAgIE1BWF9IRUlHSFQgLyAyLFxuICAgICAgRElSRUNUSU9OUy5sZWZ0LFxuICAgICAgQkxVRSxcbiAgICAgIE1BWF9XSURUSCxcbiAgICAgIE1BWF9IRUlHSFQsXG4gICAgICB0aGlzLmtleWJvYXJkSW5wdXQuc3RhdGUsXG4gICAgICBDT05UUk9MX0NPTkZJR1sxXSxcbiAgICAgIHRoaXMudGhpbmdzLFxuICAgICAgdGhpcy5zb3VuZCxcbiAgICAgIHRoaXMuYW5pbWF0aW9uRmFjdG9yeSxcbiAgICAgIENPV0JPWV9UWVBFUy5icm93blxuICAgICkgXTtcbiAgICBmb3IobGV0IHRhbmsgaW4gdGFua3MpIHRoaXMudGhpbmdzLnB1c2godGFua3NbdGFua10pO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tHYW1lTmVlZHNUb0JlUmVzZXQoKTogYm9vbGVhbiB7XG4gICAgaWYodGhpcy5nYW1lT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBpZiggKCtub3cpIC0gKCt0aGlzLnRpbWVHYW1lRW5kZWQpID49IFRJTUVfVE9fTkVYVF9HQU1FKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcbiIsImNvbnN0IGtleUxlZnQgPSAzNztcbmNvbnN0IGtleVVwID0gMzg7XG5jb25zdCBrZXlSaWdodCA9IDM5O1xuY29uc3Qga2V5RG93biA9IDQwO1xuY29uc3Qga2V5U3BhY2UgPSAzMjsgLy8gc3BhY2VcblxuY29uc3QgYSA9IDY1OyAvLyBhXG5jb25zdCBkID0gNjg7IC8vIGRcbmNvbnN0IHcgPSA4NzsgLy8gd1xuY29uc3QgcyA9IDgzOyAvLyBzXG5jb25zdCBlbnRlciA9IDEzOyAvLyBlbnRlclxuY29uc3QgemVybyA9IDQ4OyAvLyAwXG5cbmNvbnN0IG15VGltZXIgPSA0MDsgLy8gNDAgbXNcblxuY29uc3Qgc3RhdGUgPSB7XG4gIHVwOiBmYWxzZSxcbiAgZG93bjogZmFsc2UsXG4gIGxlZnQ6IGZhbHNlLFxuICByaWdodDogZmFsc2UsXG4gIGFsdFVwOiBmYWxzZSxcbiAgYWx0RG93bjogZmFsc2UsXG4gIGFsdExlZnQ6IGZhbHNlLFxuICBhbHRSaWdodDogZmFsc2UsXG4gIHo6IGZhbHNlLFxuICB4OiBmYWxzZSxcbiAgc3BhY2U6IGZhbHNlLFxuICB0b2dnbGU6IGZhbHNlLFxuICBzdWljaWRlOiBmYWxzZSxcbiAgZW50ZXI6IGZhbHNlLFxuICB6ZXJvOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkSW5wdXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBLZXlib2FyZElucHV0LmtleURvd25GdW5jdGlvbik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBLZXlib2FyZElucHV0LmtleVVwRnVuY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgS2V5Ym9hcmRJbnB1dC5rZXlEb3duRnVuY3Rpb24pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgS2V5Ym9hcmRJbnB1dC5rZXlVcEZ1bmN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGtleURvd25GdW5jdGlvbihlKSB7XG5cbiAgICBsZXQgcmVsZWFzZSA9IGU7XG5cbiAgICBzd2l0Y2gocmVsZWFzZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIGtleVVwOlxuICAgICAgICBzdGF0ZS51cCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlEb3duOlxuICAgICAgICBzdGF0ZS5kb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleUxlZnQ6XG4gICAgICAgIHN0YXRlLmxlZnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5UmlnaHQ6XG4gICAgICAgIHN0YXRlLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleVNwYWNlOlxuICAgICAgICBzdGF0ZS5zcGFjZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB3OlxuICAgICAgICBzdGF0ZS5hbHRVcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzOlxuICAgICAgICBzdGF0ZS5hbHREb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGE6XG4gICAgICAgIHN0YXRlLmFsdExlZnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZDpcbiAgICAgICAgc3RhdGUuYWx0UmlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZW50ZXI6XG4gICAgICAgIHN0YXRlLmVudGVyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHplcm86XG4gICAgICAgIHN0YXRlLnplcm8gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGtleVVwRnVuY3Rpb24oZSkge1xuXG4gICAgbGV0IHJlbGVhc2UgPSBlO1xuXG4gICAgc3dpdGNoKHJlbGVhc2Uua2V5Q29kZSkge1xuICAgICAgY2FzZSBrZXlVcDpcbiAgICAgICAgc3RhdGUudXAgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleURvd246XG4gICAgICAgIHN0YXRlLmRvd24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleUxlZnQ6XG4gICAgICAgIHN0YXRlLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleVJpZ2h0OlxuICAgICAgICBzdGF0ZS5yaWdodCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5U3BhY2U6XG4gICAgICAgIHN0YXRlLnNwYWNlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB3OlxuICAgICAgICBzdGF0ZS5hbHRVcCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgczpcbiAgICAgICAgc3RhdGUuYWx0RG93biA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYTpcbiAgICAgICAgc3RhdGUuYWx0TGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZDpcbiAgICAgICAgc3RhdGUuYWx0UmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGVudGVyOlxuICAgICAgICBzdGF0ZS5lbnRlciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgemVybzpcbiAgICAgICAgc3RhdGUuemVybyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkTGlzdCB7XG5cbiAgcHJpdmF0ZSBfaGVhZDogTm9kZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9oZWFkID0gbmV3IE5vZGUoJ2hlYWQnKTtcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWQ7XG4gIH1cblxuICBmaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZC5uZXh0O1xuICB9XG5cbiAgZmluZChpdGVtKSB7XG4gICAgbGV0IGN1cnJOb2RlID0gdGhpcy5faGVhZDtcbiAgICB3aGlsZShjdXJyTm9kZS5lbGVtZW50ICE9IGl0ZW0pIHtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJOb2RlO1xuICB9XG5cbiAgaW5zZXJ0KG5ld0VsZW1lbnQsIGl0ZW0pIHtcbiAgICBsZXQgbmV3Tm9kZSA9IG5ldyBOb2RlKG5ld0VsZW1lbnQpO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5maW5kKGl0ZW0pO1xuICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuICB9XG5cbiAgcHVzaChuZXdFbGVtZW50KSB7XG4gICAgbGV0IG5ld05vZGUgPSBuZXcgTm9kZShuZXdFbGVtZW50KTtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLl9oZWFkO1xuICAgIHdoaWxlKGN1cnJOb2RlLm5leHQgIT0gbnVsbCkge1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgIH1cbiAgICBjdXJyTm9kZS5uZXh0ID0gbmV3Tm9kZTtcbiAgfVxuXG4gIGZpbmRQcmV2aW91cyhpdGVtKSB7XG4gICAgbGV0IGN1cnJOb2RlID0gdGhpcy5faGVhZDtcbiAgICB3aGlsZShcbiAgICAgIGN1cnJOb2RlLm5leHQgIT09IG51bGwgJiZcbiAgICAgIGN1cnJOb2RlLm5leHQuZWxlbWVudCAhPSBpdGVtXG4gICAgKSB7XG4gICAgICBjdXJyTm9kZSA9IGN1cnJOb2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyTm9kZTtcbiAgfVxuXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgbGV0IHByZXZOb2RlID0gdGhpcy5maW5kUHJldmlvdXMoaXRlbSk7XG4gICAgaWYocHJldk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByZXZOb2RlLm5leHQgPSBwcmV2Tm9kZS5uZXh0Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLl9oZWFkO1xuICAgIHdoaWxlKGN1cnJOb2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRBbmltYXRpb25GcmFtZUZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcblxuICBcdHZhciBvcmlnaW5hbFdlYmtpdE1ldGhvZDtcbiAgXHR2YXIgd3JhcHBlciA9IG51bGw7XG4gIFx0dmFyIGNhbGxiYWNrID0gbnVsbDtcbiAgXHR2YXIgZ2Vja29WZXJzaW9uID0gMDtcbiAgXHR2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgXHR2YXIgaW5kZXggPSAwO1xuICBcdHZhciBzZWxmID0gdGhpcztcblxuICBcdC8vIFdvcmthcm91bmQgZm9yIENocm9tZSAxMCBidWcgd2hlcmUgQ2hyb21lXG4gIFx0Ly8gZG9lcyBub3QgcGFzcyB0aGUgdGltZSB0byB0aGUgYW5pbWF0aW9uIGZ1bmN0aW9uXG5cbiAgXHRpZih3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKXtcbiAgXHRcdC8vIERlZmluZSB0aGUgd3JhcHBlclxuXG4gIFx0XHR3cmFwcGVyID0gZnVuY3Rpb24odGltZSl7XG4gIFx0XHRcdGlmKHRpbWUgPT09IHVuZGVmaW5lZCl7XG4gIFx0XHRcdFx0dGltZSA9ICtuZXcgRGF0ZSgpO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlbGYuY2FsbGJhY2sodGltZSk7XG4gIFx0XHR9O1xuXG4gIFx0XHQvLyBNYWtlIHRoZSBzd2l0Y2hcblxuICBcdFx0b3JpZ2luYWxXZWJraXRNZXRob2QgPSB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpe1xuICBcdFx0XHRzZWxmLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgXHRcdFx0Ly8gQnJvd3NlciBjYWxscyB3cmFwcGVyOyB3cmFwcGVyIGNhbGxzIGNhbGxiYWNrXG5cbiAgXHRcdFx0b3JpZ2luYWxXZWJraXRNZXRob2Qod3JhcHBlciwgZWxlbWVudCk7XG4gIFx0XHR9XG4gIFx0fSAvLyBFbmQgQ2hyb21lIDEwIHdvcmthcm91bmRcblxuICBcdC8vIFdvcmthcm91bmQgZm9yIEdlY2tvIDIuMCwgd2hpY2ggaGFzIGEgYnVnIGluIG1velJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRoYXQgcmVzdHJpY3RzIGFuaW1hdGlvbnMgdG8gMzAtNDAgZnBzLlxuXG4gIFx0aWYod2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSl7XG4gIFx0XHQvLyBDaGVjayB0aGUgR2Vja28gdmVyc29uLiBHZWNrbyBpcyB1c2VkIGJ5IGJyb3dzZXJzIG90aGVyIHRoYW4gRmlyZWZveC4gR2Vja28gMi4wIGNvcnJlc3BvbmRzIHRvIEZpcmVmb3ggNC4wLlxuXG4gIFx0XHRpbmRleCA9IHVzZXJBZ2VudC5pbmRleE9mKCdydjonKTtcblxuICBcdFx0aWYodXNlckFnZW50LmluZGV4T2YoJ0dlY2tvJykgIT0gLTEpe1xuICBcdFx0XHRnZWNrb1ZlcnNpb24gPSB1c2VyQWdlbnQuc3Vic3RyKGluZGV4ICsgMywgMyk7XG5cbiAgXHRcdFx0aWYoZ2Vja29WZXJzaW9uID09PSAnMi4wJyl7XG4gIFx0XHRcdFx0Ly8gRm9yY2VzIHRoZSByZXR1cm4gc3RhdGVtZW50IHRvIGZhbGwgdGhyb3VnaCB0byB0aGUgc2V0VGltZW91dCgpIGZ1bmN0aW9uLlxuXG4gIFx0XHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0gLy8gRW5kIEdlY2tvIDIuMCB3b3JrYXJvdW5kXG5cbiAgXHRyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICBcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICBcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICBcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgXHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXG4gIFx0XHRmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICBcdFx0XHR2YXIgc3RhcnQ7XG4gIFx0XHRcdHZhciBmaW5pc2g7XG5cbiAgXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuICBcdFx0XHRcdHN0YXJ0ID0gK25ldyBEYXRlKCk7XG4gIFx0XHRcdFx0Y2FsbGJhY2soc3RhcnQpO1xuICBcdFx0XHRcdGZpbmlzaCA9ICtuZXcgRGF0ZSgpO1xuXG4gIFx0XHRcdFx0c2VsZi50aW1lb3V0ID0gMTAwMCAvIDYwIC0gKGZpbmlzaCAtIHN0YXJ0KTtcbiAgXHRcdFx0fSwgc2VsZi50aW1lb3V0KTtcbiAgXHRcdH07XG5cbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuXG4gIHB1YmxpYyBuZXh0OiBOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50XG4gICkge1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIHRoaXMuZHlpbmdTb3VyY2U7XG4gICAgdGhpcy5keWluZ1NvdW5kO1xuICAgIHRoaXMuZHlpbmdGaWxlQnVmZmVyO1xuICAgIHRoaXMubGFzZXJGaWxlQnVmZmVyO1xuICAgIHRoaXMubG9hZGluZ1Byb21pc2U7XG4gICAgdGhpcy5ndW5zaG90QnVmZmVyO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fCB7fTtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLmR5aW5nU291cmNlID0gbnVsbDtcbiAgICB0aGlzLmR5aW5nU291bmQgPSBudWxsO1xuICAgIHRoaXMuZHlpbmdGaWxlQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLmd1bnNob3RCdWZmZXIgPSBudWxsO1xuXG4gICAgbGV0IGR5aW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQubG9hZFdhdkZpbGUoJy4vd2F2L2R5aW5nLndhdicsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhhdC5keWluZ0ZpbGVCdWZmZXIgPSBidWZmZXI7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxldCBndW5zaG90UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQubG9hZFdhdkZpbGUoJy4vd2F2L2d1bnNob3Qud2F2JywgKGJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGF0Lmd1bnNob3RCdWZmZXIgPSBidWZmZXI7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkaW5nUHJvbWlzZSA9IFByb21pc2UuYWxsKCBbZHlpbmdQcm9taXNlLCBndW5zaG90UHJvbWlzZV0gKTtcblxuICB9XG5cbiAgZ2V0TG9hZGluZ1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1Byb21pc2U7XG4gIH1cblxuICBwbGF5R3Vuc2hvdFNvdW5kKCkge1xuICAgIHRoaXMucGxheVNvdW5kRnJvbUZpbGVCdWZmZXIodGhpcy5ndW5zaG90QnVmZmVyKTtcbiAgfVxuXG4gIHBsYXlEeWluZ0h1bWFuU291bmQoKSB7XG4gICAgdGhpcy5wbGF5U291bmRGcm9tRmlsZUJ1ZmZlcih0aGlzLmR5aW5nRmlsZUJ1ZmZlcik7XG4gIH1cblxuICBwbGF5U291bmRGcm9tRmlsZUJ1ZmZlcihmaWxlQnVmZmVyKSB7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHNvdXJjZS5idWZmZXIgPSBmaWxlQnVmZmVyO1xuICAgIHNvdXJjZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gIH1cblxuICBsb2FkV2F2RmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGxldCB0aGlzQnVmZmVyID0gbnVsbDtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBmaWxlbmFtZSwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgLy8gRGVjb2RlIGFzeW5jaHJvbm91c2x5XG4gICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGF0LmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgKGJ1ZmZlcikgPT4ge1xuICAgICAgICBsZXQgc291cmNlID0gdGhhdC5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgIGNhbGxiYWNrKGJ1ZmZlcik7XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gIH1cblxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgeCxcbiAgICBwcml2YXRlIHksXG4gICAgcHJpdmF0ZSBicmlnaHRuZXNzLFxuICAgIHByaXZhdGUgcmFkaXVzXG4gICkge1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjODU4MzU2JztcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0YXIgZnJvbSAnLi9TdGFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnMge1xuXG4gIHByaXZhdGUgc3RhcnM6IFN0YXJbXTtcblxuICBjb25zdHJ1Y3RvcihtYXhXaWR0aCwgbWF4SGVpZ2h0LCBhbW91bnQpIHtcbiAgICB0aGlzLnN0YXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heFdpZHRoKTtcbiAgICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4SGVpZ2h0KTtcbiAgICAgIGxldCBicmlnaHRuZXNzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMzApICsgMzA7XG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMSkgKyAxO1xuICAgICAgdGhpcy5zdGFycy5wdXNoKG5ldyBTdGFyKHgsIHksIGJyaWdodG5lc3MsIHJhZGl1cykpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGN0eCkge1xuICAgIHRoaXMuc3RhcnMuZm9yRWFjaCgoc3RhcikgPT4ge1xuICAgICAgc3Rhci5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhpbmcge1xuXG4gIHByaXZhdGUgc3RhdHVzO1xuICBwdWJsaWMgdGltZUNyZWF0ZWQ7XG4gIHB1YmxpYyB0aW1lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgeCxcbiAgICBwdWJsaWMgeSxcbiAgICBwdWJsaWMgZGlyZWN0aW9uLFxuICAgIHB1YmxpYyBjb2xvclxuICApIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy50aW1lQ3JlYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lciA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgY29zKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jb3ModmFsICogTWF0aC5QSSAvIDE4MCk7XG4gIH1cblxuICBwdWJsaWMgc2luKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zaW4odmFsICogTWF0aC5QSSAvIDE4MCk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQWxpdmUoKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbn07XG4iLCJleHBvcnQgY29uc3QgQ09XQk9ZX1RZUEVTID0ge1xuICBicm93bjogJ2Jyb3duJyxcbiAgeWVsbG93OiAneWVsbG93J1xufTtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlMgPSB7XG4gIHVwOiAndXAnLFxuICBkb3duOiAnZG93bicsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCdcbn07XG5cbmV4cG9ydCBjb25zdCBQT0lOVFMgPSBbXG4gIHsgeDogMjAsIHk6IDAgfSxcbiAgeyB4OiAtMTAsIHk6IDEwIH0sXG4gIHsgeDogLTUsIHk6IDAgfSxcbiAgeyB4OiAtMTAsIHk6IC0xMH1cbl07XG5cbmV4cG9ydCBjb25zdCBMT09QX1RZUEVTID0ge1xuICBub0xvb3A6IDAsXG4gIGxvb3A6IDEsXG4gIGxvb3BCYWNrQW5kRm9ydGg6IDJcbn07XG5cbmV4cG9ydCBjb25zdCBDT1dCT1lfU1RBVEVTID0ge1xuICBzdGFuZGluZzogJ3N0YW5kaW5nJyxcbiAgd2Fsa2luZzogJ3dhbGtpbmcnXG59O1xuXG5leHBvcnQgY29uc3QgQ09OVFJPTF9DT05GSUcgPSBbXG4gIHtcbiAgICB1cDogJ3VwJyxcbiAgICBkb3duOiAnZG93bicsXG4gICAgbGVmdDogJ2xlZnQnLFxuICAgIHJpZ2h0OiAncmlnaHQnLFxuICAgIGZpcmU6ICd6ZXJvJ1xuICB9LFxuICB7XG4gICAgdXA6ICdhbHRVcCcsXG4gICAgZG93bjogJ2FsdERvd24nLFxuICAgIGxlZnQ6ICdhbHRMZWZ0JyxcbiAgICByaWdodDogJ2FsdFJpZ2h0JyxcbiAgICBmaXJlOiAnc3BhY2UnXG4gIH1cbl07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcblxuKGZ1bmN0aW9uKEdhbWUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcblxufSkoR2FtZSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9