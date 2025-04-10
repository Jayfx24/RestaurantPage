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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Carattere&family=Shadows+Into+Light&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --font-logo: 'Carattere', cursive;\n}\n\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody {\n    color: white;\n    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');\n    background-position: center top;\n    background-size: cover;\n    background-attachment: fixed;\n\n\n}\n\nheader {\n    /* border: 1px solid; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: gold;\n    height: 10vh;\n    padding: 0 2rem;\n\n\n}\n\nnav {\n    display: flex;\n}\n\n\n#logo {\n    font-size: clamp(1em, 3vw, 2rem);\n    ;\n    margin-right: 1rem;\n    font-family: var(--font-logo);\n\n}\n\nul {\n    list-style: none;\n}\n\nnav ul {\n    list-style: none;\n    display: flex;\n    gap: 25px;\n    cursor: pointer;\n\n\n}\n\nli button {\n    background-color: inherit;\n    color: white;\n    border: none;\n    font-size: 1.5rem;\n    font-weight: 200;\n    cursor: pointer;\n}\n\nli button:hover {\n    color: gold;\n\n}\n\n#reserve {\n    color: gold;\n    font-weight: 800;\n\n}\n\n#reserve:hover {\n    color: white;\n    ;\n}\n\n#content {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    min-height: 80vh;\n    padding: 0 2rem;\n    margin-bottom: 2rem;\n\n\n}\n\n#content-logo {\n    color: gold;\n    margin-bottom: 1.5rem;\n    font-family: var(--font-logo);\n    font-size: clamp(3em, 6vw, 5em);\n    ;\n\n}\n\n#homeContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    /* border: 1px solid blue; */\n}\n\n\n.tagline {\n    margin-bottom: 1rem;\n    text-align: center;\n    /* font-size: 1.5rem; */\n}\n\n.content-texts {\n    text-align: center;\n    font-size: clamp(0.5em, 2.5vw, 2em);\n    width: 70ch;\n}\n\n#showMenu {\n    margin-top: 3em;\n    padding: 1em;\n    border-radius: 20px;\n    font-size: 1em;\n    background-color: transparent;\n    font-weight: 600;\n    color: gold;\n    cursor: pointer;\n}\n\n\n#showMenu:hover {\n    color: white;\n}\n\n.hidden {\n    display: none;\n}\n\n#menu-content {\n    width: 100%;\n    padding: 1em 0;\n    margin-top: 2vh;\n    min-height: 100vh;\n\n}\n\n#menu-h1 {\n    font-style: italic;\n\n    margin-bottom: 50px;\n    text-align: center;\n}\n\n#menuItems {\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fit, clamp(400px, 700px, 1000px));\n\n    gap: 3em;\n\n}\n\n.box-item {\n    color: black;\n    /* border: 1px solid gold; */\n    background-color: rgb(243, 208, 8);\n    width: 100%;\n    height: 300px;\n    display: flex;\n    gap: 1em;\n    border-radius: 20px;\n    transition: background-color 0.5s ease;\n    transition: all 0.3s ease;\n\n    \n    /* padding: 0 2em; */\n\n}\n\n.box-item:hover {\n    box-shadow: 3px 3px 8px white;\n    transform: scale(1.02);\n\n}\n.box-item:hover {\n    transform: translateY(-5px) scale(1.02);\n  }\n\n\n.box-text-items {\n    /* border: 1px solid red; */\n    padding: 1em 2em 0 1em;\n    /* width: 40%; */\n    position: relative;\n\n\n}\n\n\n.item-img {\n    width: 47%;\n    min-width: 45%;\n    height: 300px;\n    object-fit: cover;\n    border-radius: 20px;\n    box-shadow: 3px 3px 3px grey;\n    transition: all 0.3s ease;\n\n}\n\n.item-img:hover{\n    box-shadow: 0 0 3px black;\n    transform: translateY(-8px) scale(1.1);\n\n}\n\n\n.item-header {\n    /* border: 1px solid; */\n    font-size: 2em;\n  \n\n}\n\n.item-description {\n    /* border: 1px solid; */\n    margin-top: .5em;\n    font-size: 1.2em;\n\n}\n\n.item-price {\n    /* border: 1px solid; */\n    align-self: flex-end;\n    padding-top: 1rem;\n    font-size: 30px;\n    font-weight: 700;\n    position: absolute;\n    bottom: 1em;\n    right: 1em;\n    color: grey;\n}\n\n.item-price::before {\n    content: '\\$';\n}\n\n/* about */\n#aboutContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n\n\n}\n\n#aboutTitle {\n    font-size: clamp(2rem, 5vw, 3em);\n    margin: 2rem 0 1.4rem 0;\n}\n\n#aboutParagraph {\n    width: 60ch;\n    text-align: justify;\n    font-size: clamp(12px, 2.5vw, 2em);\n    /* letter-spacing: 1px; */\n    line-height: 1.5;\n}\n\n/* Reserve  */\n#reserveContainer {\n    /* border: 2px solid gold; */\n\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#reserveForm {\n    /* border: 1px solid white; */\n    width: 500px;\n\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n    padding: 8px 0;\n    /* border: 1px solid;  */\n    font-size: 1.5rem;\n    gap: 3px;\n\n}\n\ninput,\ntextarea {\n    padding: 4px;\n    font-size: inherit;\n    line-height: 30px;\n    border: 0;\n    outline: 0;\n    background-color: transparent;\n    border-bottom: 1px solid white;\n    color: white;\n\n\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator,\ninput[type=\"time\"]::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n\n\ninput:hover {\n    border-bottom: 1px solid gold;\n}\n\ninput:user-valid {\n    /* border-bottom: 1px solid green; */\n}\n\ninput:user-invalid {\n    border-bottom: 1px solid red;\n}\n\nlabel {}\n\ntextarea {\n    height: 80px;\n    overflow: hidden;\n}\n\n\n#submitBtn {\n    margin-top: 10px;\n    padding: 8px 10px;\n    text-align: center;\n    width: 100%;\n    font-size: 1rem;\n    height: 3rem;\n    /* color: white; */\n    background-color: gold;\n    border: 0;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n\n}\n\n\n#submitBtn:hover {\n    /* color: #f5f5f5;. */\n    background-color: goldenrod;\n}\n\n/* .form-group:nth-child(2){\n    border: 2px solid blue;\n} */\n\n#order {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3em;\n    /* display: flex; */\n    margin: 2rem, ;\n    width: 100%;\n    color: gold;\n}\n\n#orderText {\n\n    text-decoration: underline;\n    text-underline-offset: 4px;\n    margin-bottom: .5em;\n    font-size: 1.8rem;\n    /* color: aqua; */\n\n}\n\n#resDetails {\n    /* border: 1px solid; */\n    width: 100%;\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n}\n\n.r-list {\n    font-size: 1.2rem;\n    font-weight: 600;\n\n}\n\nfooter {\n    height: auto;\n\n    /* background-color: #333333; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 0.5rem;\n    /* border: 1px solid; */\n}\n\n.github svg {\n    fill: white;\n    width: 50px;\n    border: 1px;\n    height: 50px;\n}\n\n.github svg:hover {\n    fill: gold;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout(){\n    const contentContainer = document.querySelector(\"#content\");\n    const aboutContainer = document.createElement('div')\n    const aboutTitle = document.createElement(\"h1\");\n    const aboutParagraph = document.createElement('p');\n    contentContainer.innerHTML = ''\n\n    aboutContainer.id = \"aboutContainer\"\n    aboutTitle.id = \"aboutTitle\";\n    aboutParagraph.id = \"aboutParagraph\";\n    aboutTitle.textContent = \"About Us\";\n    aboutParagraph.textContent = \"Welcome to our world — where creativity meets purpose. We're a passionate team dedicated to delivering quality, style, and innovation in everything we do. Our mission is simple: to craft experiences that leave a lasting impression. Whether you're browsing, buying, or just stopping by, we aim to make your time with us meaningful. Every detail you see has been thoughtfully designed with you in mind — because you deserve the best.Thanks for being part of our journey. We’re just getting started.\";\n\n    aboutContainer.appendChild(aboutTitle);\n    aboutContainer.appendChild(aboutParagraph);\n    contentContainer.appendChild(aboutContainer)\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n  const contentContainer = document.querySelector(\"#content\");\n  const contentLogo = document.createElement(\"div\");\n  const homeContainer = document.createElement(\"div\");\n  const showMenu = document.createElement(\"button\");\n  const showReserve = document.createElement('button')\n  const contentTexts = document.createElement(\"div\");\n  const showBtns = document.createElement(\"div\");\n\n  const welcomeText = document.createElement(\"p\");\n  const otherWelcomeTexts = document.createElement(\"p\");\n\n  contentContainer.innerHTML = \"\";\n\n  contentLogo.id = \"content-logo\";\n  homeContainer.id = \"homeContainer\";\n  welcomeText.className = \"tagline\";\n  contentTexts.className = \"content-texts\";\n  contentLogo.innerHTML = \"<h1>Holder</h1>\";\n  welcomeText.innerHTML =\n    \"<p><strong>Welcome to Holder — A Symphony of Flavor and Elegance</strong></p>\";\n  otherWelcomeTexts.innerHTML =\n    \"<p>Where culinary artistry meets timeless ambiance. Join us for an unforgettable dining experience rooted in passion, precision, and hospitality.</p>\";\n\n  showBtns.id = 'showBtns'\n  showMenu.textContent = \"Our Menu\";\n  showMenu.id =\"showMenu\"\n  showReserve.textContent = \"Make a Reservation\";\n  showReserve.id =\"showReserve\"\n\n\n  showBtns.appendChild(showMenu)\n  // showBtns.appendChild(showReserve)\n  contentTexts.appendChild(welcomeText);\n  contentTexts.appendChild(otherWelcomeTexts);\n  homeContainer.appendChild(contentLogo);\n  homeContainer.appendChild(contentTexts);\n  homeContainer.appendChild(showBtns)\n  contentContainer.appendChild(homeContainer);\n}\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _reserve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserve */ \"./src/reserve.js\");\n\n \n  \n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.createHomePage)()\n\n\n\nconst homeButton = document.querySelector('#home')\nconst menuButton = document.querySelector('#menu')\nconst aboutButton = document.querySelector('#about')\nconst reserveButton = document.querySelector('#reserve')\nconst showMenu = document.querySelector('#showMenu')\n\n\n\nhomeButton.addEventListener('click',(event) =>{\n    event.preventDefault()\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.createHomePage)()\n    \n})\n\nmenuButton.addEventListener('click',(event) =>{\n    event.preventDefault()\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuList)()\n\n})\n\nshowMenu.addEventListener('click',(event) =>{\n    event.preventDefault()\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuList)()\n\n})\n\naboutButton.addEventListener('click',(event) =>{\n    event.preventDefault()\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_3__.createAbout)()\n\n})\n\nreserveButton.addEventListener('click',(event) =>{\n    event.preventDefault()\n    ;(0,_reserve__WEBPACK_IMPORTED_MODULE_4__.createReserve)()\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuList: () => (/* binding */ createMenuList)\n/* harmony export */ });\nlet menuArray = [];\nclass Menu {\n  constructor(title, texts, price, imgUrl) {\n    this.title = title;\n    this.texts = texts;\n    this.price = price;\n    this.img = imgUrl;\n  }\n}\n\nmenuArray.push(\n  new Menu(\n    \"Paella Special\",\n    \"Paella with shrimp, mussels, pork, chicken, saffron rice, peas, and bell peppers.\",\n    \"30.99\",\n    \"https://www.thespruceeats.com/thmb/AQ5diUdXp9a9bXJMwtSTtG0lpr8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeafoodPaellaWithPorkandChicken-Westend61_GettyImages-b0e7019672484c8a91c250d399d1d163.jpg\"\n  ),\n  new Menu(\n    \"Crispy Fried Oysters\",\n    \"Fresh oysters, cornmeal batter, eggs, buttermilk, flour, and spices. Served with tartar sauce or rémoulade.\",\n    \"44.99\",\n    \"https://www.thespruceeats.com/thmb/TSY9sgPUTIRHw73LH5lmcWZAipA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-oysters-with-cornmeal-batter-3058714-hero-01-72bfb78fb3f945108b40c7b612c60d93.jpg\"\n  ),\n  new Menu(\n    \"Shrimp Ceviche\",\n    \"Shrimp cured in lime juice, mixed with tomatoes, onions, cucumbers, cilantro, avocado, and chili peppers.\",\n    \"64.99\",\n    \"https://www.thespruceeats.com/thmb/7o0pqbOlZoVfrd5QrOqdrb0w8iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-ceviche-recipe-5213319-hero-01-8d349ee0591048a588ffac66b3c5870c.jpg\"\n  ),\n  new Menu(\n    'Beef Wellington',\n    \"Tender beef fillet, mushroom duxelles, Parma ham, and puff pastry. Served with red wine reduction.\",\n    '59.99',\n    'https://www.thespruceeats.com/thmb/H1VKmdNz66CPosoP3cwLXU5RtTk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/make-a-classic-beef-wellington-easy-435726-hero-03-1210c31e884044bcb9c1d1475ca818c3.jpg'\n  ),\n  new Menu(\n    'Steak au Poivre',\n    \"Peppercorn-crusted steak, seared and topped with a creamy cognac and beef stock reduction sauce.\",\n    '129.99',\n    'https://www.thespruceeats.com/thmb/9_J6fGTFQz5sQNucdwvFLGtGd2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ClassicFrenchSteakauPoivre-TheSpruce-5c62efe3c9e77c0001662762.jpg'\n  ),\n  new Menu(\n    'Grilled Filet Mignon',\n    \"Grilled filet mignon, topped with Bearnaise sauce made of egg yolks, butter, vinegar, shallots, and tarragon.\",\n    '69.99',\n    'https://www.thespruceeats.com/thmb/5fYyZdcgUtV_wYmp8OACRXO-x2o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-filet-mignon-with-bearnaise-sauce-3573497-hero-01-9b0abe87c0524a799724135b99b483c8.jpg'\n  )\n);\n\n\n\nfunction createMenuList() {\n  const contentContainer = document.querySelector(\"#content\");\n  const menuContent = document.createElement(\"div\");\n\n  contentContainer.innerHTML = \"\";\n  menuContent.id = \"menu-content\";\n\n  const menuListText = document.createElement(\"h1\");\n  menuListText.textContent = \"Menu List \";\n  menuListText.id = \"menu-h1\";\n\n  const menuList = createItems();\n\n  menuContent.appendChild(menuListText);\n  menuContent.appendChild(menuList);\n  contentContainer.appendChild(menuContent);\n  boxContent();\n}\n\nfunction createItems() {\n  const menuItems = document.createElement(\"div\");\n  menuItems.id = \"menuItems\";\n  for (let i = 0; i < menuArray.length; i++) {\n    const boxItem = document.createElement(\"div\");\n    boxItem.className = \"box-item\";\n    menuItems.appendChild(boxItem);\n  }\n  return menuItems;\n}\n\nfunction boxContent() {\n  const boxItems = document.querySelectorAll(\".box-item\");\n  \n  boxItems.forEach((box, index) => {\n    const boxTextItems = document.createElement(\"div\")\n    const boxText = document.createElement(\"h4\");\n    const boxDescription = document.createElement(\"p\");\n    const price = document.createElement(\"p\")\n    const img = document.createElement('img')\n\n    boxTextItems.className = 'box-text-items'\n\n    boxText.textContent = menuArray[index][\"title\"];\n    boxText.className = \"item-header\"\n\n    boxDescription.textContent = menuArray[index][\"texts\"];\n    boxDescription.className = \"item-description\"\n\n    price.textContent = menuArray[index][\"price\"];\n    price.className = \"item-price\"\n\n    img.src = menuArray[index]['img']\n    img.className = \"item-img\"\n\n\n    boxTextItems.appendChild(boxText)\n    boxTextItems.appendChild(boxDescription)\n    boxTextItems.appendChild(price)\n    box.appendChild(img)\n    box.appendChild(boxTextItems)\n    \n    \n\n  });\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createReserve: () => (/* binding */ createReserve)\n/* harmony export */ });\nconst contentContainer = document.querySelector(\"#content\");\nconst reserveContainer = document.createElement('div')\nconst reserveForm = document.createElement('form')\ncreateForm()\n\nreserveContainer.id = 'reserveContainer';\n\n\nfunction createReserve(){\n\n\n    contentContainer.innerHTML = ''\n    reserveContainer.appendChild(reserveForm)\n    contentContainer.appendChild(reserveContainer)\n\n}\n\n\nfunction createForm(){\n    reserveForm.id = 'reserveForm';\n\n    const nameLabel = document.createElement('label');\n    const nameInput = document.createElement('input');\n    const nameDiv = document.createElement('div');\n    const dateDiv = document.createElement('div');\n    const emailDiv = document.createElement('div');\n    const peopleDiv = document.createElement('div');\n    const requestsDiv = document.createElement('div');\n    const timeDiv = document.createElement('div');\n\n\n    nameDiv.classList = 'form-group'\n    dateDiv.classList = 'form-group'\n    timeDiv.classList = 'form-group'\n    emailDiv.classList = 'form-group'\n    peopleDiv.classList = 'form-group'\n    requestsDiv.classList = 'form-group'\n\n\n\n\n    nameLabel.textContent= \"Full Name \"\n    nameLabel.setAttribute(\"for\", \"name\")\n    nameInput.setAttribute(\"type\", \"text\");\n    nameInput.setAttribute(\"name\", \"name\");\n    nameInput.setAttribute(\"id\", \"name\");\n\n    nameInput.setAttribute(\"required\", \"true\");\n\n    nameDiv.appendChild(nameLabel)\n    nameDiv.appendChild(nameInput)\n    reserveForm.appendChild(nameDiv);\n\n\n    const dateLabel = document.createElement('label')\n    const dateInput = document.createElement('input')\n    dateLabel.textContent= \"Reservation Date \"\n    dateLabel.setAttribute(\"for\", \"date\")\n    dateInput.setAttribute(\"type\", \"date\");\n    dateInput.setAttribute(\"id\", \"date\");\n\n    dateInput.setAttribute(\"name\", \"date\");\n    dateInput.setAttribute(\"required\", \"true\");\n\n    dateDiv.appendChild(dateLabel)\n    dateDiv.appendChild(dateInput)\n    reserveForm.appendChild(dateDiv);\n\n    const timeLabel = document.createElement('label')\n    const timeInput = document.createElement('input')\n    timeLabel.textContent= \"Reservation Time \"\n    timeLabel.setAttribute(\"for\", \"time\");\n    timeInput.setAttribute(\"type\", \"time\");\n    timeInput.setAttribute(\"id\", \"time\");\n    timeInput.setAttribute(\"name\", \"time\");\n    timeInput.setAttribute(\"required\", \"true\");\n\n    timeDiv.appendChild(timeLabel)\n    timeDiv.appendChild(timeInput)\n    reserveForm.appendChild(timeDiv);\n\n\n    const emailLabel = document.createElement('label')\n    const emailInput = document.createElement('input')\n    emailLabel.textContent= \"Email \"\n    emailLabel.setAttribute(\"for\", \"email\")\n    emailInput.setAttribute(\"type\", \"email\");\n    emailInput.setAttribute(\"name\", \"email\");\n    emailInput.setAttribute(\"id\", \"email\");\n    emailInput.setAttribute(\"required\", \"true\");\n\n    emailDiv.appendChild(emailLabel)\n    emailDiv.appendChild(emailInput)\n    reserveForm.appendChild(emailDiv);\n\n\n    const peopleLabel = document.createElement(\"label\");\n    const peopleInput = document.createElement(\"input\");\n    peopleLabel.textContent = \"Number of People \";\n    peopleInput.setAttribute(\"type\", \"number\");\n    peopleInput.setAttribute(\"name\", \"people\");\n    peopleInput.setAttribute(\"id\", \"people\");\n    peopleInput.setAttribute(\"min\", \"1\");\n    peopleInput.setAttribute(\"max\", \"12\");\n\n    peopleInput.setAttribute(\"required\", \"true\");\n\n\n    peopleDiv.appendChild(peopleLabel);\n    peopleDiv.appendChild(peopleInput);\n    reserveForm.appendChild(peopleDiv);\n\n    const specialLabel = document.createElement(\"label\");\n    const specialInput = document.createElement(\"textarea\");\n    specialLabel.textContent = \"Special Requests\";\n    specialLabel.setAttribute(\"for\", \"specials\")\n    specialInput.setAttribute(\"name\", \"specials\");\n    specialInput.setAttribute(\"id\", \"specials\");\n\n    requestsDiv.appendChild(specialLabel);\n    requestsDiv.appendChild(specialInput);\n    reserveForm.appendChild(requestsDiv);\n\n\n    const submitButton = document.createElement(\"button\");\n    submitButton.setAttribute(\"type\", \"submit\");\n    submitButton.setAttribute(\"id\", \"submitBtn\");   \n    submitButton.textContent = \"Submit Reservation\";\n    reserveForm.appendChild(submitButton);\n    \n\n\n}\n\n\nfunction makeId() {\n    let result = '';\n    let num = Math.floor(Math.random() * 30) + 1;\n    let twoDigit = num.toString().padStart(2, '0');\n    const characters = 'ABCDEFGHIJKLMNOPQRSTUV';\n    const charactersLength = characters.length;\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n    result += twoDigit;\n    return result;\n}\n\nreserveForm.addEventListener('submit',(e)=>{\n    e.preventDefault()\n\n    const formData = new FormData(reserveForm);\n\n    const formValues = {\n        name: formData.get('name'),\n        date: formData.get('date'),\n        time: formData.get('time'),\n        email: formData.get('email'),\n        request: formData.get('specials'),\n        people: formData.get('people')\n    };\n\n    spotReserved(formValues)\n\n})\n\nfunction spotReserved(formValues){\n    contentContainer.innerHTML = '';\n    const orderDiv = document.createElement('div')\n    const resDetails = document.createElement('div')\n    const orderTitle = document.createElement('h1')\n    const order = document.createElement('h3')\n    const ul = document.createElement('ul')\n    let tableNumber = makeId()\n\n    orderDiv.id = 'order'\n    order.id = 'orderText'\n    resDetails.id = 'resDetails'\n\n    ul.className = 'r-list'\n    for (const [key, value] of Object.entries(formValues)) {\n        if (value){\n            const li = document.createElement('li');\n            li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} - ${value}`;\n            ul.appendChild(li);\n        }\n    }\n\n\n    orderTitle.textContent = `Table ${tableNumber} Reserved for ${formValues['name'].toUpperCase()}`\n    order.textContent = 'Reservation Details'\n\n    orderDiv.appendChild(orderTitle)\n    resDetails.appendChild(order)\n    resDetails.appendChild(ul)\n    orderDiv.appendChild(resDetails)\n    contentContainer.appendChild(orderDiv)\n}\n\n//# sourceURL=webpack:///./src/reserve.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;