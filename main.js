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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/DancingScript-VariableFont_wght.ttf */ \"./src/fonts/DancingScript-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ephesis-Regular.ttf */ \"./src/fonts/Ephesis-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksand-VariableFont_wght.ttf */ \"./src/fonts/Quicksand-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SairaExtraCondensed-Regular.ttf */ \"./src/fonts/SairaExtraCondensed-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: \"Dancing Script\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n    font-family: \"Ephesis\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n    font-family: \"Quicksand\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n@font-face {\n    font-family: \"Saira Extra Condensed\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    height: 100vh;\n}\n\n.content {\n    min-height: 100%;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* Home Page */\n\nheader {\n    width: 100%;\n    height: 70px;\n    background-color: rgba(138, 75, 75, 0.479);\n    display: flex;\n    justify-content: center;\n}\n\nheader ul {\n    display: flex;\n    justify-content: space-between;\n    width: 70%;\n}\n\nheader li {\n    list-style: none;\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: \"Saira Extra Condensed\", sans-serif;\n    font-size: 2rem;\n    color: white;\n    cursor: pointer;\n    transition: 100ms;\n}\n\nheader li:hover {\n    background-color: rgba(138, 75, 75, 0.8);\n}\n\nmain {\n    min-width: 630px;\n    max-width: 70%;\n    margin: 0 auto;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    flex-grow: 1;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5rem;\n    padding: 3rem;\n}\n\n.welcome {\n    font-family: \"Ephesis\", cursive;\n    font-size: 3rem;\n}\n\n.text {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.text div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.text h2 {\n    font-family: \"Dancing Script\", cursive;\n    font-size: 2rem;\n}\n\n.text p {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1rem;\n}\n\nfooter {\n    width: 100%;\n    background-color: rgba(138, 75, 75, 0.8);\n    display: flex;\n    justify-content: center;\n    gap: 5rem;\n    color: white;\n    font-family: \"Quicksand\", sans-serif;\n}\n\nfooter a {\n    text-decoration: none;\n    color: rgb(103, 206, 253);\n}\n\n/* Menu Page */\n\nimg {\n    width: 100%;\n    height: 100%;\n    object-fit: fill;\n}\n\n.menu-wrapper {\n    padding: 3rem;\n    display: grid;\n    grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n    gap: 3rem;\n}\n\n.item {\n    display: flex;\n    border: 2px solid white;\n    border-radius: 1rem;\n    overflow: hidden;\n    min-width: 600px;\n}\n\n.img {\n    max-width: 200px;\n    height: auto;\n}\n\n.desc {\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.desc h3 {\n    font-family: \"Dancing Script\", cursive;\n    font-size: 2.5rem;\n}\n\n.desc p {\n    font-family: \"Quicksand\", sans-serif;\n}\n\n.desc p:last-child {\n    font-size: 2rem;\n}\n\n/* About Page */\n\n.about {\n    margin: 0 auto;\n    display: flex;\n    width: 80%;\n    padding: 3rem 0;\n    gap: 2rem;\n    justify-content: space-between;\n}\n\ntd {\n    border: 2px solid white;\n    border-radius: 5px;\n    border-collapse: collapse;\n    font-family: \"Quicksand\", sans-serif;\n    padding: 0.5rem;\n}\n\n.about-text {\n    width: 70%;\n}\n\n.about-text h2 {\n    font-family: \"Dancing Script\", cursive;\n    font-size: 3rem;\n    text-align: center;\n}\n\n.adress {\n    text-align: center;\n}\n\n.about-text p {\n    font-family: \"Quicksand\", sans-serif;\n}\n\n.about-image {\n    width: 80%;\n    margin: 0 auto;\n}\n\n@media (max-width: 1600px) {\n    .menu-wrapper {\n        width: 695px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadhome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadhome */ \"./src/loadhome.js\");\n/* harmony import */ var _loadmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadmenu */ \"./src/loadmenu.js\");\n/* harmony import */ var _loadabout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadabout */ \"./src/loadabout.js\");\n\n\n\n\n\nconst content = document.querySelector('.content');\n\nfunction loadHeader() {\n    const header = document.createElement('header');\n    const ul = document.createElement('ul');\n    const liHome = document.createElement('li');\n    liHome.setAttribute('id', 'home');\n    liHome.textContent = 'Home';\n    const liMenu = document.createElement('li');\n    liMenu.setAttribute('id', 'menu');\n    liMenu.textContent = 'Menu';\n    const liAbout = document.createElement('li');\n    liAbout.setAttribute('id', 'about');\n    liAbout.textContent = 'About';\n    ul.appendChild(liHome);\n    ul.appendChild(liMenu);\n    ul.appendChild(liAbout);\n    header.appendChild(ul);\n    content.appendChild(header);\n    liHome.addEventListener('click', () => {\n        clearPage();\n        loadHeader();\n        (0,_loadhome__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    });\n    \n    liMenu.addEventListener('click', () => {\n        clearPage();\n        loadHeader();\n        (0,_loadmenu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n    });\n    liAbout.addEventListener('click', () => {\n        clearPage();\n        loadHeader();\n        (0,_loadabout__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\n    })\n};\n\nloadHeader();\n(0,_loadhome__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n\nfunction clearPage() {\n    content.innerHTML = '';\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/index.js?");

/***/ }),

/***/ "./src/loadabout.js":
/*!**************************!*\
  !*** ./src/loadabout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _images_staff_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/staff.jpg */ \"./src/images/staff.jpg\");\n\n\nfunction loadAbout() {\n    const content = document.querySelector('.content');\n\n    \n    const main = document.createElement('main');\n    const about = document.createElement('div');\n    about.classList.add('about');\n    \n    // Schedule table\n\n    const schedule = document.createElement('div');\n    schedule.classList.add('chedule');\n    const table = document.createElement('table');\n    \n    const monday = document.createElement('tr');\n    monday.innerHTML = `<td>Moday</td><td>8:00 - 20:00</td>`\n    table.appendChild(monday);\n    const tuesday = document.createElement('tr');\n    tuesday.innerHTML = `<td>Monday</td><td>8:00 - 20:00</td>`\n    table.appendChild(tuesday);\n    const wednesday = document.createElement('tr');\n    wednesday.innerHTML = `<td>Wednesday</td><td>8:00 - 19:00</td>`\n    table.appendChild(wednesday);\n    const thursday = document.createElement('tr');\n    thursday.innerHTML = `<td>Thursday</td><td>8:00 - 20:00</td>`\n    table.appendChild(thursday);\n    const friday = document.createElement('tr');\n    friday.innerHTML = `<td>Friday</td><td>10:00 - 23:00</td>`\n    table.appendChild(friday);\n    const saturday = document.createElement('tr');\n    saturday.innerHTML = `<td>Saturday</td><td>10:00 - 23:00</td>`\n    table.appendChild(saturday);\n    const sunday = document.createElement('tr');\n    sunday.innerHTML = `<td>Sunday</td><td>12:00 - 18:00</td>`\n    table.appendChild(sunday);\n\n    schedule.appendChild(table);\n\n    // Text\n    \n    const aboutText = document.createElement('div');\n    aboutText.classList.add('about-text');\n    \n    const header = document.createElement('h2');\n    header.textContent = 'Visit us';\n    aboutText.appendChild(header);\n    \n    const adress = document.createElement('div');\n    adress.classList.add('adress');\n    adress.innerHTML = '<p>Hogsmeade, Station Street 4. Tel. 888-555-666</p>';\n    aboutText.appendChild(adress);\n    const brOne = document.createElement('br');\n    aboutText.appendChild(brOne);\n    \n    const paraOne = document.createElement('p');\n    paraOne.textContent = `We are a team of enthusiasts dedicated to creating unforgettable moments filled with taste and satisfaction. At our establishment, you'll discover refined dishes crafted from the freshest ingredients, along with an atmosphere of warmth and hospitality.`\n    aboutText.appendChild(paraOne);\n    const brTwo = document.createElement('br');\n    aboutText.appendChild(brTwo);\n\n    const paraTwo = document.createElement('p');\n    paraTwo.textContent = `Our goal is not only to satiate your taste buds but also to curate a special evening where flavor and ambiance intertwine in a unique dance. Our chefs skillfully master the art of cooking, and our team's service will leave you with delightful impressions.`\n    aboutText.appendChild(paraTwo);\n    const brThree = document.createElement('br');\n    aboutText.appendChild(brThree);\n\n    const paraThree = document.createElement('p');\n    paraThree.textContent = `We believe that food brings people together, and here in our restaurant, we aim to create shared moments of joy, laughter, and indulgence. Come join us, and let us treat you to the finest flavors!`\n    aboutText.appendChild(paraThree);\n\n    // Image\n\n    const aboutImage = document.createElement('img');\n    aboutImage.classList.add('about-image');\n    aboutImage.src = _images_staff_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n\n    about.appendChild(schedule);\n    about.appendChild(aboutText);\n\n    main.appendChild(about);\n    \n    main.appendChild(aboutImage);\n\n\n    content.appendChild(main);\n}\n\n//# sourceURL=webpack://restaurant-page-odin/./src/loadabout.js?");

/***/ }),

/***/ "./src/loadhome.js":
/*!*************************!*\
  !*** ./src/loadhome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.querySelector('.content');\n\n    \n    const main = document.createElement('main');\n    const container = document.createElement('div');\n    container.classList.add('container');\n    main.appendChild(container);\n    content.appendChild(main);\n    \n    const welcome = document.createElement('div');\n    welcome.classList.add('welcome');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Welcome to Thick Potato';\n    welcome.appendChild(h1);\n    container.appendChild(welcome);\n\n    const text = document.createElement('div');\n    text.classList.add('text');\n    \n    const divOne = document.createElement('div');\n    const textHeaderOne = document.createElement('h2');\n    const textOne = document.createElement('p');\n    textHeaderOne.textContent = 'Thick Potato – Where Culinary Excellence Meets Unforgettable Moments!';\n    textOne.textContent = `Step into a world of gastronomic delight at Thick Potato, where every dish tells a story and every bite is a journey through flavors. Nestled in the heart of Hogsmeade, our restaurant is more than just a dining destination; it's an experience crafted with passion, creativity, and a commitment to excellence.`\n    divOne.appendChild(textHeaderOne);\n    divOne.appendChild(textOne);\n    \n    const divTwo = document.createElement('div');\n    const textHeaderTwo = document.createElement('h2');\n    const textTwo = document.createElement('p');\n    textHeaderTwo.textContent = 'A Dining Experience Like No Other';\n    textTwo.textContent = `At Thick Potato, we believe that dining is not just about the food; it's about creating memories. Our inviting ambiance, attentive staff, and warm hospitality set the stage for unforgettable moments. Whether you're celebrating a special occasion, hosting a business lunch, or enjoying a casual meal with friends, our restaurant provides the perfect backdrop for every occasion.`\n    divTwo.appendChild(textHeaderTwo);\n    divTwo.appendChild(textTwo);\n    \n    const divThree = document.createElement('div');\n    const textHeaderThree = document.createElement('h2');\n    const textThree = document.createElement('p');\n    const textEnd = document.createElement('p');\n    textHeaderThree.textContent = 'Your Culinary Adventure Begins Here!';\n    textThree.textContent = `Embark on a gastronomic journey like no other. Whether you're a food aficionado, a casual diner, or someone seeking a memorable experience, we invite you to savor the extraordinary at Thick Potato.`\n    textEnd.textContent = `Reserve your table now and let the feast begin! 🍾✨`;\n    divThree.appendChild(textHeaderThree);\n    divThree.appendChild(textThree);\n    divThree.appendChild(textEnd);\n\n    text.appendChild(divOne);\n    text.appendChild(divTwo);\n    text.appendChild(divThree);\n    container.appendChild(text);\n    \n    // Footer\n\n    const footer = document.createElement('footer');\n    const footerDivOne = document.createElement('div');\n    const footerDivTwo = document.createElement('div');\n    \n    const firstP = document.createElement('p');\n    firstP.innerHTML = `Page created by <a href=\"https://github.com/KVG24\">KVG24</a>`;\n    const secondP = document.createElement('p');\n    secondP.innerHTML = `Photo by <a href=\"https://unsplash.com/@nickkarvounis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Nick Karvounis</a> on <a href=\"https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>`;\n    footerDivOne.appendChild(firstP);\n    footerDivTwo.appendChild(secondP);\n    footer.appendChild(footerDivOne);\n    footer.appendChild(footerDivTwo);\n\n    content.appendChild(footer);\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./src/loadhome.js?");

/***/ }),

/***/ "./src/loadmenu.js":
/*!*************************!*\
  !*** ./src/loadmenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_cake_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cake.jpg */ \"./src/images/cake.jpg\");\n/* harmony import */ var _images_cherry_cocktail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cherry-cocktail.jpg */ \"./src/images/cherry-cocktail.jpg\");\n/* harmony import */ var _images_croissant_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/croissant-sandwich.jpg */ \"./src/images/croissant-sandwich.jpg\");\n/* harmony import */ var _images_white_wine_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/white-wine.jpg */ \"./src/images/white-wine.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_mojito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mojito.jpg */ \"./src/images/mojito.jpg\");\n\n\n\n\n\n\n\nfunction loadMenu() {\n    const content = document.querySelector('.content');\n\n    \n    const main = document.createElement('main');\n    const menuWrapper = document.createElement('div');\n    menuWrapper.classList.add('menu-wrapper');\n\n    const itemOne = document.createElement('div');\n    itemOne.classList.add('item');\n    const imgOne = document.createElement('img');\n    imgOne.classList.add('img');\n    imgOne.src = _images_cake_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    const descOne = document.createElement('div');\n    descOne.classList.add('desc');\n    descOne.innerHTML = `<h3>Christmass cake</h3>\n    <p>A soft and sweet cake with a tiny bit of cinnamon</p>\n    <p>2$</p>`;\n    itemOne.appendChild(imgOne);\n    itemOne.appendChild(descOne);\n    menuWrapper.appendChild(itemOne);\n\n    const itemTwo = document.createElement('div');\n    itemTwo.classList.add('item');\n    const imgTwo = document.createElement('img');\n    imgTwo.classList.add('img');\n    imgTwo.src = _images_cherry_cocktail_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    const descTwo = document.createElement('div');\n    descTwo.classList.add('desc');\n    descTwo.innerHTML = `<h3>Cherry cocktail</h3>\n    <p>Fresh cherry drink with a bit of grapefruit and strawberry</p>\n    <p>1.30$</p>`;\n    itemTwo.appendChild(imgTwo);\n    itemTwo.appendChild(descTwo);\n    menuWrapper.appendChild(itemTwo);\n\n    const itemThree = document.createElement('div');\n    itemThree.classList.add('item');\n    const imgThree = document.createElement('img');\n    imgThree.classList.add('img');\n    imgThree.src = _images_croissant_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    const descThree = document.createElement('div');\n    descThree.classList.add('desc');\n    descThree.innerHTML = `<h3>Croissant sandwich</h3>\n    <p>Tasty croissant with a small bowl of cheese</p>\n    <p>2.50$</p>`;\n    itemThree.appendChild(imgThree);\n    itemThree.appendChild(descThree);\n    menuWrapper.appendChild(itemThree);\n\n    const itemFour = document.createElement('div');\n    itemFour.classList.add('item');\n    const imgFour = document.createElement('img');\n    imgFour.classList.add('img');\n    imgFour.src = _images_white_wine_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    const descFour = document.createElement('div');\n    descFour.classList.add('desc');\n    descFour.innerHTML = `<h3>White wine</h3>\n    <p>Homemade white wine with dried apples</p>\n    <p>1.50$</p>`;\n    itemFour.appendChild(imgFour);\n    itemFour.appendChild(descFour);\n    menuWrapper.appendChild(itemFour);\n\n    const itemFive = document.createElement('div');\n    itemFive.classList.add('item');\n    const imgFive = document.createElement('img');\n    imgFive.classList.add('img');\n    imgFive.src = _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    const descFive = document.createElement('div');\n    descFive.classList.add('desc');\n    descFive.innerHTML = `<h3>Pizza</h3>\n    <p>Pizza with any ingridients you wish</p>\n    <p>3$</p>`;\n    itemFive.appendChild(imgFive);\n    itemFive.appendChild(descFive);\n    menuWrapper.appendChild(itemFive);\n\n    const itemSix = document.createElement('div');\n    itemSix.classList.add('item');\n    const imgSix = document.createElement('img');\n    imgSix.classList.add('img');\n    imgSix.src = _images_mojito_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    const descSix = document.createElement('div');\n    descSix.classList.add('desc');\n    descSix.innerHTML = `<h3>Mojito</h3>\n    <p>Cold and refreshing mojito</p>\n    <p>2$</p>`;\n    itemSix.appendChild(imgSix);\n    itemSix.appendChild(descSix);\n    menuWrapper.appendChild(itemSix);\n\n    main.appendChild(menuWrapper);\n\n    content.appendChild(main);\n}\n\n//# sourceURL=webpack://restaurant-page-odin/./src/loadmenu.js?");

/***/ }),

/***/ "./src/fonts/DancingScript-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/DancingScript-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d02a1ee17643667e9808.ttf\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/fonts/DancingScript-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/Ephesis-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Ephesis-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d76794a944a1f234087.ttf\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/fonts/Ephesis-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Quicksand-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Quicksand-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b964ff93d9cb23e7f4c0.ttf\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/fonts/Quicksand-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/SairaExtraCondensed-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/SairaExtraCondensed-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2295784fe36aead2089e.ttf\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/fonts/SairaExtraCondensed-Regular.ttf?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"265dfe515a54f9ebaf89.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/cake.jpg":
/*!*****************************!*\
  !*** ./src/images/cake.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c006ba5d128bf7342105.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/cake.jpg?");

/***/ }),

/***/ "./src/images/cherry-cocktail.jpg":
/*!****************************************!*\
  !*** ./src/images/cherry-cocktail.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f7ed9e586120a27e432.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/cherry-cocktail.jpg?");

/***/ }),

/***/ "./src/images/croissant-sandwich.jpg":
/*!*******************************************!*\
  !*** ./src/images/croissant-sandwich.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6907afd4ec7378748577.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/croissant-sandwich.jpg?");

/***/ }),

/***/ "./src/images/mojito.jpg":
/*!*******************************!*\
  !*** ./src/images/mojito.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9eff9b1cf68548abf76.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/mojito.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eebb7d135ca8309bb21e.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/staff.jpg":
/*!******************************!*\
  !*** ./src/images/staff.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19dfcab0bc303dafdd2b.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/staff.jpg?");

/***/ }),

/***/ "./src/images/white-wine.jpg":
/*!***********************************!*\
  !*** ./src/images/white-wine.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2adb7fe3a74732b27729.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/images/white-wine.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;