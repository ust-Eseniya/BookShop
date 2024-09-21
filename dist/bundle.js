/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n.container {\r\n    max-width: 1120px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.header {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100;\r\n    background-color: white;\r\n}\r\n\r\n.header__container {\r\n    height: 116px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.header__list {\r\n    display: flex;\r\n}\r\n.header__item {\r\n    margin-right: 40px;\r\n    text-transform: uppercase;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n}\r\n.header__link {\r\n    color: #5C6A79;\r\n}\r\n.header__nav-buttons {\r\n    display: flex;\r\n}\r\n.buttons {\r\n    background: transparent;\r\n    margin-left: 40px;\r\n}\r\n\r\n/** Слайдер **/\r\n\r\n.slideshow-container {\r\n    position: relative;\r\n    max-width: 100%;\r\n    margin: auto;\r\n}\r\n.slides {\r\n    display: none;\r\n    width: 100%;\r\n}\r\n.active {\r\n    display: block;\r\n}\r\n.dot-container {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n.dot {\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 2px;\r\n    background-color: #EFEEF6;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.dot.active {\r\n    background-color: #9E98DC;\r\n}\r\n\r\n.main__hero-container {\r\n    display: flex;\r\n}\r\n\r\n.main__offer {\r\n    position: absolute;\r\n}\r\n\r\n.main__offer-item1 {\r\n    left: 1177px;\r\n    top: 79px;\r\n    width: 149px;\r\n    height: 204px;\r\n    background: #9E98DC;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.main__offer-container1 {\r\n    padding-left: 20px;\r\n    padding-top: 100px;\r\n}\r\n\r\n.main__offer-text1, \r\n.main__offer-text2 {\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    color: #1C2A39;\r\n}\r\n\r\n.main__offer-item2 {\r\n    left: 1300px;\r\n    top: 360px;\r\n    width: 137px;\r\n    height: 273px;\r\n    background: #FF8FE6;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.main__offer-container2 {\r\n    padding-left: 20px;\r\n    padding-top: 150px;\r\n}\r\n\r\n/** categories **/\r\n\r\n.main__categories-container {\r\n    display: flex;\r\n    margin-top: 105px;\r\n}\r\n\r\n.main__categories {\r\n    padding-top: 45px;\r\n    padding-left: 115px;\r\n    width: 416px;\r\n    height: 710px;\r\n    background: #EFEEF6;\r\n}\r\n\r\n.main__categories-item {\r\n    font-size: 12px;\r\n    font-weight: medium;\r\n    margin-bottom: 28px;\r\n    color: #5C6A79;\r\n    cursor: pointer;\r\n}\r\n\r\n.active-category {\r\n    font-weight: bold;\r\n    color: blue;\r\n}\r\n\r\n.main__books-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr/ 1fr 1fr;\r\n    gap: 76px 96px;\r\n}\r\n\r\n.book-item {\r\n    display: flex;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.book-cover img {\r\n    width: 212px;\r\n    height: 300px;\r\n    object-fit: cover;\r\n}\r\n\r\n.book-details {\r\n    padding: 48px 36px;\r\n}\r\n\r\n.book-title {\r\n    margin: 0 0 10px 0;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n.book-authors {\r\n    margin: 5px 0;\r\n    font-size: 10px;\r\n    color: #5C6A79;\r\n}\r\n\r\n.book-rating {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-bottom: 15px;\r\n    font-size: 10px;\r\n}\r\n\r\n.book-description {\r\n    max-width: 175px;\r\n    font-size: 10px;\r\n}\r\n\r\n.book-price {\r\n    padding-top: 15px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.book-button,\r\n#load-more {\r\n    padding: 18px 66px;\r\n    margin-top: 20px;\r\n    background-color: transparent;\r\n    border: 1px solid #4C3DB2;\r\n    text-transform: uppercase;\r\n    font-size: 8px;\r\n    font-weight: bold;\r\n    color: #4C3DB2;\r\n}\r\n\r\n#load-more {\r\n    margin: 90px auto;\r\n}\r\n\r\n#cart-count {\r\n    position: relative;\r\n    padding: 1px 3px;\r\n    top: 2px;\r\n    left: -12px;\r\n    border: 1px solid red;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: white;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bookshop/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bookshop/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bookshop/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bookshop/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bookshop/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_books_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/books.js */ \"./src/modules/books.js\");\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const slider = new _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".slides\", \".dot\");\r\n    const apiKey = 'AIzaSyDCtBCcZhy9dRhgG4_lSgmflPuuzmXT25s';\r\n    const books = new _modules_books_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](apiKey, '#books-container', '#load-more', 'https://via.placeholder.com/212x300?text=No+Cover');\r\n    (0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_3__.updateCartCount)();\r\n\r\n    document.querySelectorAll('.dot').forEach((dot, index) => {\r\n        dot.addEventListener('click', () => {\r\n            slider.currentSlide(index);\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://bookshop/./src/main.js?");

/***/ }),

/***/ "./src/modules/books.js":
/*!******************************!*\
  !*** ./src/modules/books.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/modules/cart.js\");\n\r\n\r\nclass Books {\r\n    constructor(apiKey, booksContainerSelector, loadMoreButtonSelector, placeholderImage) {\r\n        this.apiKey = apiKey;\r\n        this.booksContainer = document.querySelector(booksContainerSelector);\r\n        this.loadMoreButton = document.querySelector(loadMoreButtonSelector);\r\n        this.placeholderImage = placeholderImage;\r\n        this.currentCategory = 'Architecture';\r\n        this.startIndex = 0;\r\n        this.maxResults = 6;\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.loadBooks(this.currentCategory, this.startIndex);\r\n        this.loadMoreButton.addEventListener('click', () => {\r\n            this.startIndex += this.maxResults;\r\n            this.loadBooks(this.currentCategory, this.startIndex);\r\n        });\r\n\r\n        document.querySelectorAll('.main__categories-item').forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                this.setActiveCategory(item);\r\n            });\r\n        });\r\n    }\r\n\r\n    truncateText(text, maxLength) {\r\n        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;\r\n    }\r\n\r\n    loadBooks(category, startIndex) {\r\n        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&key=${this.apiKey}&printType=books&startIndex=${startIndex}&maxResults=${this.maxResults}&langRestrict=en`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data.items && data.items.length > 0) {\r\n                data.items.forEach(book => this.renderBook(book));\r\n                this.loadMoreButton.style.display = 'block';\r\n            } else {\r\n                this.loadMoreButton.style.display = 'none';\r\n            }\r\n            this.updateButtonStates();\r\n        });\r\n    }\r\n\r\n    renderBook(book) {\r\n        const bookInfo = book.volumeInfo;\r\n        const bookElement = document.createElement('div');\r\n        bookElement.className = 'book-item';\r\n\r\n        const thumbnail = bookInfo.imageLinks?.thumbnail || this.placeholderImage;\r\n        const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';\r\n        const title = bookInfo.title || 'No Title';\r\n        const description = this.truncateText(bookInfo.description || 'No description available', 100);\r\n        const rating = bookInfo.averageRating;\r\n        const ratingsCount = bookInfo.ratingsCount;\r\n        const price = book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : null;\r\n        const bookId = book.id;\r\n\r\n        bookElement.innerHTML = `\r\n            <div class=\"book-cover\">\r\n                <img src=\"${thumbnail}\" alt=\"${title}\">\r\n            </div>\r\n            <div class=\"book-details\">\r\n                <p class=\"book-authors\">${authors}</p>\r\n                <h3 class=\"book-title\">${title}</h3>\r\n                ${rating ? `<p class=\"book-rating\">${this.renderRating(rating)} ${ratingsCount} review</p>` : ''}\r\n                <p class=\"book-description\">${description}</p>\r\n                ${price ? `<p class=\"book-price\">${price}</p>` : ''}\r\n                <button class=\"book-button\" data-book-id=\"${bookId}\">Buy now</button>\r\n            </div>\r\n        `;\r\n\r\n        this.booksContainer.appendChild(bookElement);\r\n    }\r\n\r\n    renderRating(rating) {\r\n        return `${'<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#F2C94C\"/></svg>'.repeat(Math.round(rating))}${'<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#EEEDF5\"/></svg>'.repeat(5 - Math.round(rating))}`;\r\n    }\r\n\r\n    setActiveCategory(categoryElement) {\r\n        document.querySelectorAll('.main__categories-item').forEach(item => {\r\n            item.classList.remove('active-category');\r\n        });\r\n        categoryElement.classList.add('active-category');\r\n        this.currentCategory = categoryElement.textContent;\r\n        this.booksContainer.innerHTML = '';\r\n        this.startIndex = 0;\r\n        this.loadBooks(this.currentCategory, this.startIndex);\r\n    }\r\n\r\n    updateButtonStates() {\r\n        const cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n\r\n        document.querySelectorAll('.book-button').forEach(button => {\r\n            const bookId = button.getAttribute('data-book-id');\r\n\r\n            if (cart.includes(bookId)) {\r\n                button.textContent = 'In the cart';\r\n                button.classList.add('in-cart');\r\n            } else {\r\n                button.textContent = 'Buy now';\r\n                button.classList.remove('in-cart');\r\n            }\r\n\r\n            button.addEventListener('click', () => {\r\n                this.toggleCartItem(button, bookId, cart);\r\n            });\r\n        });\r\n    }\r\n\r\n    toggleCartItem(button, bookId, cart) {\r\n        if (cart.includes(bookId)) {\r\n            const index = cart.indexOf(bookId);\r\n            if (index > -1) {\r\n                cart.splice(index, 1);\r\n            }\r\n            button.textContent = 'Buy now';\r\n            button.classList.remove('in-cart');\r\n        } else {\r\n            cart.push(bookId);\r\n            button.textContent = 'In the cart';\r\n            button.classList.add('in-cart');\r\n        }\r\n\r\n        localStorage.setItem('cart', JSON.stringify(cart));\r\n        (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.updateCartCount)();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);\n\n//# sourceURL=webpack://bookshop/./src/modules/books.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateCartCount: () => (/* binding */ updateCartCount)\n/* harmony export */ });\nfunction updateCartCount() {\r\n    const cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n    const cartCount = document.getElementById('cart-count');\r\n    cartCount.textContent = cart.length;\r\n}\n\n//# sourceURL=webpack://bookshop/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Slider {\r\n    constructor(slidesSelector, dotsSelector, interval = 5000) {\r\n        this.slideIndex = 0;\r\n        this.slides = document.querySelectorAll(slidesSelector);\r\n        this.dots = document.querySelectorAll(dotsSelector);\r\n        this.interval = interval;\r\n        this.timer = null;\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.showSlide(this.slideIndex);\r\n        this.timer = setInterval(() => this.nextSlide(), this.interval);\r\n    }\r\n\r\n    showSlide(index) {\r\n        this.slides.forEach((slide, i) => {\r\n            slide.classList.remove(\"active\");\r\n            this.dots[i].classList.remove(\"active\");\r\n        });\r\n        this.slides[index].classList.add(\"active\");\r\n        this.dots[index].classList.add(\"active\");\r\n        this.slideIndex = index;\r\n    }\r\n\r\n    currentSlide(index) {\r\n        clearInterval(this.timer);\r\n        this.showSlide(index);\r\n        this.timer = setInterval(() => this.nextSlide(), this.interval);\r\n    }\r\n\r\n    nextSlide() {\r\n        this.slideIndex = (this.slideIndex + 1) % this.slides.length;\r\n        this.showSlide(this.slideIndex);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://bookshop/./src/modules/slider.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;