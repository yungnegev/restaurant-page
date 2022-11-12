/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "/* icons */\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n/* vars */\n:root{\n  --color-background: #121212;\n  --color-text: #FFFFFF;\n  --color-error: #CF6679;\n  --color-elevated: #2D2D2D;\n  --color-muted: gray;\n  --color-primary: #FEBE8C;\n  --box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);\n}\n\n/* general styles */\n* { \n  margin: 0;\n  padding: 0;\n  outline: 0;\n  appearance: none;\n  border: 0;\n  text-decoration: none;\n  list-style: none;\n  box-sizing: border-box;\n}\nbody{\n    font-family: 'Poppins', sans-serif;\n    background: var(--color-background);\n    width: 100vw;\n    height: 100vh;\n    color: var(--color-text);\n}\n#content{\n  width: 100%;\n  height: 100%;\n}\n\n/* --------- bar ----------- */\n\n.nav-bar{\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: var(--box-shadow);\n  \n}\n\n.bar-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.2rem;\n  background: #2D2D2D;\n  padding: 0.8rem 1.2rem;\n  border-radius: 1rem;\n  cursor: pointer;\n  transition: all 300ms ease;\n}\n.bar-btn span{\n  transition: all 300ms ease;\n  color: var(--color-text);\n}\n.bar-btn :nth-child(2){\n  font-family: 'Poppins', sans-serif;\n}\n.bar-btn span:hover{\n  color: var(--color-primary);\n}\n.bar-btn:hover{\n  border: 1px solid var(--color-primary);\n}\n.bar-btn.active{\n  border: 1px solid var(--color-primary);\n}\n\n/* --- home page ---  */\n\n.page{\n  width: 100%;\n  height: 100%;\n}\n\n.home-page{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  gap: 2rem;\n}\n\n.home-page img {\n  margin-top: 2rem;\n  height: 15rem;\n  width: 15rem;\n}\n\n.welcome-text{\n  color: transparent;\n  text-align: center;\n  font-size: 2.6rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n  transition: all 300ms ease;\n}\n\n.welcome-lorem{\n  color: var(--color-text);\n  width: 70%;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n/* -------- menu page ------------ */\n\n.menu-page{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n.menu-img{\n  width: 15rem;\n  height: 15rem;\n}\n\n\n.card-container{\n\n  height: 100%;\n  width: 100%;\n  display: grid; \n  grid-template-columns: repeat(auto-fit, 280px) ;\n  justify-content: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  gap: 4rem;\n}\n\n.card{\n  width: 280px;\n  height: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--box-shadow);\n  background: var(--color-elevated);\n  border-radius: 2rem;\n  padding: 2rem;\n  gap: 1.2rem;\n  transition: all 300ms ease;\n}\n.card:hover{\n  box-shadow: none;\n}\n\n.card-name{\n  color: transparent;\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n}\n\n.card-price-container{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n}\n.card-price-container span{\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.card-price-container .material-symbols-outlined{\n  color: #A5F0C5;\n}\n\n.card-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: var(--color-primary);\n  padding: 0.8rem;\n  border-radius: 1.6rem;\n  gap: 0.4rem;\n  transition: all 100ms ease;\n}\n.card-btn:hover{\n  scale: 1.05;\n}\n.card-btn:active{\n  scale: 1;\n}\n\n/* -------- contact page -------*/\n\n.contact-page{\n  box-sizing: border-box;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n.location-img{\n  height: 150px;\n  width: 150px\n}\n\n.map-img{\n  width: 80%;\n  border-radius: 2rem;\n}\n\n.find-us{\n  color: transparent;\n  text-align: center;\n  font-size: 2.2rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n}\n.adress-us{\n  font-size: 1.6rem;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA,UAAU;AACV;EACE;;;;;AAKF;;AAEA,SAAS;AACT;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,4CAA4C;AAC9C;;AAEA,mBAAmB;AACnB;EACE,SAAS;EACT,UAAU;EACV,UAAU;EACV,gBAAgB;EAChB,SAAS;EACT,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;AACxB;AACA;IACI,kCAAkC;IAClC,mCAAmC;IACnC,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,8BAA8B;;AAE9B;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,6BAA6B;;AAE/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;AACA;EACE,kCAAkC;AACpC;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;;AAEA,uBAAuB;;AAEvB;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,0DAA0D;EAC1D,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;EACxB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,oCAAoC;;AAEpC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;;AAGA;;EAEE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,+CAA+C;EAC/C,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,0DAA0D;EAC1D,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,gCAAgC;EAChC,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,WAAW;AACb;AACA;EACE,QAAQ;AACV;;AAEA,iCAAiC;;AAEjC;EACE,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb;AACF;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,0DAA0D;EAC1D,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["/* icons */\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n/* vars */\n:root{\n  --color-background: #121212;\n  --color-text: #FFFFFF;\n  --color-error: #CF6679;\n  --color-elevated: #2D2D2D;\n  --color-muted: gray;\n  --color-primary: #FEBE8C;\n  --box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);\n}\n\n/* general styles */\n* { \n  margin: 0;\n  padding: 0;\n  outline: 0;\n  appearance: none;\n  border: 0;\n  text-decoration: none;\n  list-style: none;\n  box-sizing: border-box;\n}\nbody{\n    font-family: 'Poppins', sans-serif;\n    background: var(--color-background);\n    width: 100vw;\n    height: 100vh;\n    color: var(--color-text);\n}\n#content{\n  width: 100%;\n  height: 100%;\n}\n\n/* --------- bar ----------- */\n\n.nav-bar{\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: var(--box-shadow);\n  \n}\n\n.bar-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.2rem;\n  background: #2D2D2D;\n  padding: 0.8rem 1.2rem;\n  border-radius: 1rem;\n  cursor: pointer;\n  transition: all 300ms ease;\n}\n.bar-btn span{\n  transition: all 300ms ease;\n  color: var(--color-text);\n}\n.bar-btn :nth-child(2){\n  font-family: 'Poppins', sans-serif;\n}\n.bar-btn span:hover{\n  color: var(--color-primary);\n}\n.bar-btn:hover{\n  border: 1px solid var(--color-primary);\n}\n.bar-btn.active{\n  border: 1px solid var(--color-primary);\n}\n\n/* --- home page ---  */\n\n.page{\n  width: 100%;\n  height: 100%;\n}\n\n.home-page{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  gap: 2rem;\n}\n\n.home-page img {\n  margin-top: 2rem;\n  height: 15rem;\n  width: 15rem;\n}\n\n.welcome-text{\n  color: transparent;\n  text-align: center;\n  font-size: 2.6rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n  transition: all 300ms ease;\n}\n\n.welcome-lorem{\n  color: var(--color-text);\n  width: 70%;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n/* -------- menu page ------------ */\n\n.menu-page{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n.menu-img{\n  width: 15rem;\n  height: 15rem;\n}\n\n\n.card-container{\n\n  height: 100%;\n  width: 100%;\n  display: grid; \n  grid-template-columns: repeat(auto-fit, 280px) ;\n  justify-content: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  gap: 4rem;\n}\n\n.card{\n  width: 280px;\n  height: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--box-shadow);\n  background: var(--color-elevated);\n  border-radius: 2rem;\n  padding: 2rem;\n  gap: 1.2rem;\n  transition: all 300ms ease;\n}\n.card:hover{\n  box-shadow: none;\n}\n\n.card-name{\n  color: transparent;\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n}\n\n.card-price-container{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n}\n.card-price-container span{\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.card-price-container .material-symbols-outlined{\n  color: #A5F0C5;\n}\n\n.card-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: var(--color-primary);\n  padding: 0.8rem;\n  border-radius: 1.6rem;\n  gap: 0.4rem;\n  transition: all 100ms ease;\n}\n.card-btn:hover{\n  scale: 1.05;\n}\n.card-btn:active{\n  scale: 1;\n}\n\n/* -------- contact page -------*/\n\n.contact-page{\n  box-sizing: border-box;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n.location-img{\n  height: 150px;\n  width: 150px\n}\n\n.map-img{\n  width: 80%;\n  border-radius: 2rem;\n}\n\n.find-us{\n  color: transparent;\n  text-align: center;\n  font-size: 2.2rem;\n  font-weight: 600;\n  background-image: linear-gradient(90deg, #FEBE8C, #CF6679);\n  background-clip: text;\n}\n.adress-us{\n  font-size: 1.6rem;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/contactPageModule.js":
/*!**********************************!*\
  !*** ./src/contactPageModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/location.png */ "./src/assets/location.png");
/* harmony import */ var _assets_default_marker_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/default-marker.jpg */ "./src/assets/default-marker.jpg");



const contactPage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('contact-page')
    
        /* page items */
        let mainImg = document.createElement('img')
        mainImg.src = _assets_location_png__WEBPACK_IMPORTED_MODULE_0__
        mainImg.classList.add('location-img')

        let find = document.createElement('div')
        find.innerText = 'Find us.'
        find.classList.add('find-us')

        let map = document.createElement('img')
        map.src = _assets_default_marker_jpg__WEBPACK_IMPORTED_MODULE_1__
        map.classList.add('map-img')

        let adress = document.createElement('div')
        adress.classList.add('adress-us')
        adress.innerText = '185 West 7th Street, New York, NY 10002'
            
    
        page.append(mainImg)
        page.append(find)
        page.append(map)
        page.append(adress)
    
    return page
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage); 

/***/ }),

/***/ "./src/homePageModule.js":
/*!*******************************!*\
  !*** ./src/homePageModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.png */ "./src/assets/restaurant.png");
/* harmony import */ var _assets_stars_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/stars.png */ "./src/assets/stars.png");



const homePage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('home-page')
    
    /* page elements */
    /* --- Img --- */
    let restImg = document.createElement('img')
    restImg.classList.add('page-img')
    restImg.setAttribute('id', 'rest-img')
    restImg.src = _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_0__
    /* --- welcome --- */
    let welcome = document.createElement('div')
    welcome.classList.add('welcome-text')
    welcome.innerText = 'Welcome to our restaurant.'
    /* --- Lorem --- */
    let lorem = document.createElement('div')
    lorem.classList.add('welcome-lorem')
    lorem.innerText = '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium, eligendi recusandae consequatur impedit nam pariatur beatae deleniti sunt aspernatur quod iste ipsa accusamus debitis? Quos, nostrum praesentium tempore quisquam, nulla ea repellat obcaecati vitae impedit voluptate amet atque eius."'
    /* --- stars --- */
    let starsImg = document.createElement('img')
    starsImg.src = _assets_stars_png__WEBPACK_IMPORTED_MODULE_1__
    starsImg.classList.add('home-stars')

    
    page.append(restImg)
    page.append(welcome)
    page.append(lorem)
    page.append(starsImg)
    return page
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-menu.png */ "./src/assets/restaurant-menu.png");
/* harmony import */ var _assets_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pizza.png */ "./src/assets/pizza.png");
/* harmony import */ var _assets_sushi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sushi.png */ "./src/assets/sushi.png");
/* harmony import */ var _assets_meat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/meat.png */ "./src/assets/meat.png");
/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ramen.png */ "./src/assets/ramen.png");
/* harmony import */ var _assets_fish_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/fish.png */ "./src/assets/fish.png");








const menuPage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('menu-page')
    /* --- page elements --- */
    /* --- menu img --- */
    let menuImg = document.createElement('img')
    menuImg.src = _assets_restaurant_menu_png__WEBPACK_IMPORTED_MODULE_0__
    menuImg.classList.add('menu-img')
    /* --- card container --- */
    let cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
        /* --- card item --- */
        let card1 = document.createElement('div')
        card1.classList.add('card')
        let card1Img = document.createElement('img')
        card1Img.src = _assets_pizza_png__WEBPACK_IMPORTED_MODULE_1__
        card1Img.style.height = '200px'
        card1.append(card1Img)
        let name = document.createElement('div')
        name.classList.add('card-name')
        name.innerText = 'Pizza'
        card1.append(name)
        let priceContainer = document.createElement('div')
        priceContainer.classList.add('card-price-container')
        let priceIcon = document.createElement('span')
        priceIcon.classList.add('material-symbols-outlined')
        priceIcon.innerText = 'payments'
        let priceValue = document.createElement('span')
        priceValue.innerText = 'Price: 18.00'
        priceContainer.append(priceIcon,priceValue)
        card1.append(priceContainer)
        let btn = document.createElement('div')
        btn.classList.add('card-btn')
        let btnIcon = document.createElement('span')
        btnIcon.classList.add('material-symbols-outlined')
        btnIcon.innerText = 'shopping_bag'
        let btnText = document.createElement('div')
        btnText.innerText = 'Order'
        btn.append(btnIcon, btnText)
        card1.append(btn)

        let card2 = document.createElement('div')
        card2.classList.add('card')
        let card2Img = document.createElement('img')
        card2Img.src = _assets_sushi_png__WEBPACK_IMPORTED_MODULE_2__
        card2Img.style.height = '200px'
        card2.append(card2Img)
        let name2 = document.createElement('div')
        name2.classList.add('card-name')
        name2.innerText = 'Sushi'
        card2.append(name2)
        let priceContainer2 = document.createElement('div')
        priceContainer2.classList.add('card-price-container')
        let priceIcon2 = document.createElement('span')
        priceIcon2.classList.add('material-symbols-outlined')
        priceIcon2.innerText = 'payments'
        let priceValue2 = document.createElement('span')
        priceValue2.innerText = 'Price: 22.00'
        priceContainer2.append(priceIcon2,priceValue2)
        card2.append(priceContainer2)
        let btn2 = document.createElement('div')
        btn2.classList.add('card-btn')
        let btnIcon2 = document.createElement('span')
        btnIcon2.classList.add('material-symbols-outlined')
        btnIcon2.innerText = 'shopping_bag'
        let btnText2 = document.createElement('div')
        btnText2.innerText = 'Order'
        btn2.append(btnIcon2, btnText2)
        card2.append(btn2)

        let card3 = document.createElement('div')
        card3.classList.add('card')
        let card3Img = document.createElement('img')
        card3Img.src = _assets_meat_png__WEBPACK_IMPORTED_MODULE_3__
        card3Img.style.height = '200px'
        card3.append(card3Img)
        let name3 = document.createElement('div')
        name3.classList.add('card-name')
        name3.innerText = 'Wagyu'
        card3.append(name3)
        let priceContainer3 = document.createElement('div')
        priceContainer3.classList.add('card-price-container')
        let priceIcon3 = document.createElement('span')
        priceIcon3.classList.add('material-symbols-outlined')
        priceIcon3.innerText = 'payments'
        let priceValue3 = document.createElement('span')
        priceValue3.innerText = 'Price: 39.00'
        priceContainer3.append(priceIcon3,priceValue3)
        card3.append(priceContainer3)
        let btn3 = document.createElement('div')
        btn3.classList.add('card-btn')
        let btnIcon3 = document.createElement('span')
        btnIcon3.classList.add('material-symbols-outlined')
        btnIcon3.innerText = 'shopping_bag'
        let btnText3 = document.createElement('div')
        btnText3.innerText = 'Order'
        btn3.append(btnIcon3, btnText3)
        card3.append(btn3)


        let card4 = document.createElement('div')
        card4.classList.add('card')
        let card4Img = document.createElement('img')
        card4Img.src = _assets_ramen_png__WEBPACK_IMPORTED_MODULE_4__
        card4Img.style.height = '200px'
        card4.append(card4Img)
        let name4 = document.createElement('div')
        name4.classList.add('card-name')
        name4.innerText = 'Ramen'
        card4.append(name4)
        let priceContainer4 = document.createElement('div')
        priceContainer4.classList.add('card-price-container')
        let priceIcon4 = document.createElement('span')
        priceIcon4.classList.add('material-symbols-outlined')
        priceIcon4.innerText = 'payments'
        let priceValue4 = document.createElement('span')
        priceValue4.innerText = 'Price: 13.00'
        priceContainer4.append(priceIcon4,priceValue4)
        card4.append(priceContainer4)
        let btn4 = document.createElement('div')
        btn4.classList.add('card-btn')
        let btnIcon4 = document.createElement('span')
        btnIcon4.classList.add('material-symbols-outlined')
        btnIcon4.innerText = 'shopping_bag'
        let btnText4 = document.createElement('div')
        btnText4.innerText = 'Order'
        btn4.append(btnIcon4, btnText4)
        card4.append(btn4)

        let card5 = document.createElement('div')
        card5.classList.add('card')
        let card5Img = document.createElement('img')
        card5Img.src = _assets_fish_png__WEBPACK_IMPORTED_MODULE_5__
        card5Img.style.height = '200px'
        card5.append(card5Img)
        let name5 = document.createElement('div')
        name5.classList.add('card-name')
        name5.innerText = 'Dorado'
        card5.append(name5)
        let priceContainer5 = document.createElement('div')
        priceContainer5.classList.add('card-price-container')
        let priceIcon5 = document.createElement('span')
        priceIcon5.classList.add('material-symbols-outlined')
        priceIcon5.innerText = 'payments'
        let priceValue5 = document.createElement('span')
        priceValue5.innerText = 'Price: 27.00'
        priceContainer5.append(priceIcon5,priceValue5)
        card5.append(priceContainer5)
        let btn5 = document.createElement('div')
        btn5.classList.add('card-btn')
        let btnIcon5 = document.createElement('span')
        btnIcon5.classList.add('material-symbols-outlined')
        btnIcon5.innerText = 'shopping_bag'
        let btnText5 = document.createElement('div')
        btnText5.innerText = 'Order'
        btn5.append(btnIcon5, btnText5)
        card5.append(btn5)
        
        cardContainer.append(card1)
        cardContainer.append(card2)
        cardContainer.append(card3)
        cardContainer.append(card4)
        cardContainer.append(card5)

    page.append(menuImg)
    page.append(cardContainer)
    return page
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/navBarModule.js":
/*!*****************************!*\
  !*** ./src/navBarModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Navigation bar module */







const navBar = () => {
    const bar = document.createElement('div')
    bar.classList.add('nav-bar')
    /* ------ bar content ---------*/

    /* --- home btn --- */
    const home = document.createElement('button')
    home.setAttribute('id', 'home-btn')
    home.classList.add('bar-btn')
    const homeIcon = document.createElement('span')
    homeIcon.classList.add('material-symbols-outlined')
    homeIcon.innerText = 'home'
    const homeText = document.createElement('span')
    homeText.innerText = 'Home'
    home.append(homeIcon)
    home.append(homeText)
    home.addEventListener('click', ()=> {
        home.classList.add('active')
        menu.classList.remove('active')
    })
    bar.append(home)
    /* --- menu btn --- */
    const menu = document.createElement('button')
    menu.setAttribute('id', 'menu-btn')
    menu.classList.add('bar-btn')
    const menuIcon = document.createElement('span')
    menuIcon.classList.add('material-symbols-outlined')
    menuIcon.innerText = 'menu_book'
    const menuText = document.createElement('span')
    menuText.innerText = 'Menu'
    menu.append(menuIcon)
    menu.append(menuText)
    menu.addEventListener('click', ()=>{
        menu.classList.add('active')
        home.classList.remove('active')
        contact.classList.remove('active')
    })
    bar.append(menu)
    /* --- contact btn --- */
    const contact = document.createElement('button')
    contact.setAttribute('id', 'contact-btn')
    contact.classList.add('bar-btn')
    const contactIcon = document.createElement('span')
    contactIcon.classList.add('material-symbols-outlined')
    contactIcon.innerText = 'pin_drop'
    const contactText = document.createElement('span')
    contactText.innerText = 'Contact'
    contact.append(contactIcon)
    contact.append(contactText)
    contact.addEventListener('click', ()=>{
        menu.classList.remove('active')
        home.classList.remove('active')
        contact.classList.add('active')
    })
    bar.append(contact)






    return bar
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);

/***/ }),

/***/ "./src/assets/default-marker.jpg":
/*!***************************************!*\
  !*** ./src/assets/default-marker.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/default-marker.jpg";

/***/ }),

/***/ "./src/assets/fish.png":
/*!*****************************!*\
  !*** ./src/assets/fish.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fish.png";

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/location.png";

/***/ }),

/***/ "./src/assets/meat.png":
/*!*****************************!*\
  !*** ./src/assets/meat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/meat.png";

/***/ }),

/***/ "./src/assets/pizza.png":
/*!******************************!*\
  !*** ./src/assets/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pizza.png";

/***/ }),

/***/ "./src/assets/ramen.png":
/*!******************************!*\
  !*** ./src/assets/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ramen.png";

/***/ }),

/***/ "./src/assets/restaurant-menu.png":
/*!****************************************!*\
  !*** ./src/assets/restaurant-menu.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/restaurant-menu.png";

/***/ }),

/***/ "./src/assets/restaurant.png":
/*!***********************************!*\
  !*** ./src/assets/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/restaurant.png";

/***/ }),

/***/ "./src/assets/stars.png":
/*!******************************!*\
  !*** ./src/assets/stars.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/stars.png";

/***/ }),

/***/ "./src/assets/sushi.png":
/*!******************************!*\
  !*** ./src/assets/sushi.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sushi.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _navBarModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBarModule */ "./src/navBarModule.js");
/* harmony import */ var _homePageModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePageModule */ "./src/homePageModule.js");
/* harmony import */ var _menuModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuModule */ "./src/menuModule.js");
/* harmony import */ var _contactPageModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactPageModule */ "./src/contactPageModule.js");






const content = document.querySelector('#content')
content.append((0,_navBarModule__WEBPACK_IMPORTED_MODULE_1__["default"])())
content.append((0,_homePageModule__WEBPACK_IMPORTED_MODULE_2__["default"])())

const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('click', () =>{
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append((0,_homePageModule__WEBPACK_IMPORTED_MODULE_2__["default"])())
})

const menuBtn = document.querySelector('#menu-btn')
menuBtn.addEventListener('click', () => {
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append((0,_menuModule__WEBPACK_IMPORTED_MODULE_3__["default"])())
})

const contactBtn = document.querySelector('#contact-btn')
contactBtn.addEventListener('click', () => {
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append((0,_contactPageModule__WEBPACK_IMPORTED_MODULE_4__["default"])())
})












})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map