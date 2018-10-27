/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["2YZa","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "2YZa":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"q1tI\");\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"i8i4\");\nconst hello_1 = __webpack_require__(/*! ./component/hello */ \"VyA4\");\n__webpack_require__(/*! ./style.css */ \"OMi8\");\nconst main = document.createElement('div');\nmain.setAttribute('id', 'main');\ndocument.body.appendChild(main);\nReactDOM.render(React.createElement(hello_1.default, { compiler: \"TypeScript\", framework: \"React\", buildTool: \"webpack\" }), main);\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"K/tc\",\n\t\"./af.js\": \"K/tc\",\n\t\"./ar\": \"jnO4\",\n\t\"./ar-dz\": \"o1bE\",\n\t\"./ar-dz.js\": \"o1bE\",\n\t\"./ar-kw\": \"Qj4J\",\n\t\"./ar-kw.js\": \"Qj4J\",\n\t\"./ar-ly\": \"HP3h\",\n\t\"./ar-ly.js\": \"HP3h\",\n\t\"./ar-ma\": \"CoRJ\",\n\t\"./ar-ma.js\": \"CoRJ\",\n\t\"./ar-sa\": \"gjCT\",\n\t\"./ar-sa.js\": \"gjCT\",\n\t\"./ar-tn\": \"bYM6\",\n\t\"./ar-tn.js\": \"bYM6\",\n\t\"./ar.js\": \"jnO4\",\n\t\"./az\": \"SFxW\",\n\t\"./az.js\": \"SFxW\",\n\t\"./be\": \"H8ED\",\n\t\"./be.js\": \"H8ED\",\n\t\"./bg\": \"hKrs\",\n\t\"./bg.js\": \"hKrs\",\n\t\"./bm\": \"p/rL\",\n\t\"./bm.js\": \"p/rL\",\n\t\"./bn\": \"kEOa\",\n\t\"./bn.js\": \"kEOa\",\n\t\"./bo\": \"0mo+\",\n\t\"./bo.js\": \"0mo+\",\n\t\"./br\": \"aIdf\",\n\t\"./br.js\": \"aIdf\",\n\t\"./bs\": \"JVSJ\",\n\t\"./bs.js\": \"JVSJ\",\n\t\"./ca\": \"1xZ4\",\n\t\"./ca.js\": \"1xZ4\",\n\t\"./cs\": \"PA2r\",\n\t\"./cs.js\": \"PA2r\",\n\t\"./cv\": \"A+xa\",\n\t\"./cv.js\": \"A+xa\",\n\t\"./cy\": \"l5ep\",\n\t\"./cy.js\": \"l5ep\",\n\t\"./da\": \"DxQv\",\n\t\"./da.js\": \"DxQv\",\n\t\"./de\": \"tGlX\",\n\t\"./de-at\": \"s+uk\",\n\t\"./de-at.js\": \"s+uk\",\n\t\"./de-ch\": \"u3GI\",\n\t\"./de-ch.js\": \"u3GI\",\n\t\"./de.js\": \"tGlX\",\n\t\"./dv\": \"WYrj\",\n\t\"./dv.js\": \"WYrj\",\n\t\"./el\": \"jUeY\",\n\t\"./el.js\": \"jUeY\",\n\t\"./en-au\": \"Dmvi\",\n\t\"./en-au.js\": \"Dmvi\",\n\t\"./en-ca\": \"OIYi\",\n\t\"./en-ca.js\": \"OIYi\",\n\t\"./en-gb\": \"Oaa7\",\n\t\"./en-gb.js\": \"Oaa7\",\n\t\"./en-ie\": \"4dOw\",\n\t\"./en-ie.js\": \"4dOw\",\n\t\"./en-il\": \"czMo\",\n\t\"./en-il.js\": \"czMo\",\n\t\"./en-nz\": \"b1Dy\",\n\t\"./en-nz.js\": \"b1Dy\",\n\t\"./eo\": \"Zduo\",\n\t\"./eo.js\": \"Zduo\",\n\t\"./es\": \"iYuL\",\n\t\"./es-do\": \"CjzT\",\n\t\"./es-do.js\": \"CjzT\",\n\t\"./es-us\": \"Vclq\",\n\t\"./es-us.js\": \"Vclq\",\n\t\"./es.js\": \"iYuL\",\n\t\"./et\": \"7BjC\",\n\t\"./et.js\": \"7BjC\",\n\t\"./eu\": \"D/JM\",\n\t\"./eu.js\": \"D/JM\",\n\t\"./fa\": \"jfSC\",\n\t\"./fa.js\": \"jfSC\",\n\t\"./fi\": \"gekB\",\n\t\"./fi.js\": \"gekB\",\n\t\"./fo\": \"ByF4\",\n\t\"./fo.js\": \"ByF4\",\n\t\"./fr\": \"nyYc\",\n\t\"./fr-ca\": \"2fjn\",\n\t\"./fr-ca.js\": \"2fjn\",\n\t\"./fr-ch\": \"Dkky\",\n\t\"./fr-ch.js\": \"Dkky\",\n\t\"./fr.js\": \"nyYc\",\n\t\"./fy\": \"cRix\",\n\t\"./fy.js\": \"cRix\",\n\t\"./gd\": \"9rRi\",\n\t\"./gd.js\": \"9rRi\",\n\t\"./gl\": \"iEDd\",\n\t\"./gl.js\": \"iEDd\",\n\t\"./gom-latn\": \"DKr+\",\n\t\"./gom-latn.js\": \"DKr+\",\n\t\"./gu\": \"4MV3\",\n\t\"./gu.js\": \"4MV3\",\n\t\"./he\": \"x6pH\",\n\t\"./he.js\": \"x6pH\",\n\t\"./hi\": \"3E1r\",\n\t\"./hi.js\": \"3E1r\",\n\t\"./hr\": \"S6ln\",\n\t\"./hr.js\": \"S6ln\",\n\t\"./hu\": \"WxRl\",\n\t\"./hu.js\": \"WxRl\",\n\t\"./hy-am\": \"1rYy\",\n\t\"./hy-am.js\": \"1rYy\",\n\t\"./id\": \"UDhR\",\n\t\"./id.js\": \"UDhR\",\n\t\"./is\": \"BVg3\",\n\t\"./is.js\": \"BVg3\",\n\t\"./it\": \"bpih\",\n\t\"./it.js\": \"bpih\",\n\t\"./ja\": \"B55N\",\n\t\"./ja.js\": \"B55N\",\n\t\"./jv\": \"tUCv\",\n\t\"./jv.js\": \"tUCv\",\n\t\"./ka\": \"IBtZ\",\n\t\"./ka.js\": \"IBtZ\",\n\t\"./kk\": \"bXm7\",\n\t\"./kk.js\": \"bXm7\",\n\t\"./km\": \"6B0Y\",\n\t\"./km.js\": \"6B0Y\",\n\t\"./kn\": \"PpIw\",\n\t\"./kn.js\": \"PpIw\",\n\t\"./ko\": \"Ivi+\",\n\t\"./ko.js\": \"Ivi+\",\n\t\"./ky\": \"lgnt\",\n\t\"./ky.js\": \"lgnt\",\n\t\"./lb\": \"RAwQ\",\n\t\"./lb.js\": \"RAwQ\",\n\t\"./lo\": \"sp3z\",\n\t\"./lo.js\": \"sp3z\",\n\t\"./lt\": \"JvlW\",\n\t\"./lt.js\": \"JvlW\",\n\t\"./lv\": \"uXwI\",\n\t\"./lv.js\": \"uXwI\",\n\t\"./me\": \"KTz0\",\n\t\"./me.js\": \"KTz0\",\n\t\"./mi\": \"aIsn\",\n\t\"./mi.js\": \"aIsn\",\n\t\"./mk\": \"aQkU\",\n\t\"./mk.js\": \"aQkU\",\n\t\"./ml\": \"AvvY\",\n\t\"./ml.js\": \"AvvY\",\n\t\"./mn\": \"lYtQ\",\n\t\"./mn.js\": \"lYtQ\",\n\t\"./mr\": \"Ob0Z\",\n\t\"./mr.js\": \"Ob0Z\",\n\t\"./ms\": \"6+QB\",\n\t\"./ms-my\": \"ZAMP\",\n\t\"./ms-my.js\": \"ZAMP\",\n\t\"./ms.js\": \"6+QB\",\n\t\"./mt\": \"G0Uy\",\n\t\"./mt.js\": \"G0Uy\",\n\t\"./my\": \"honF\",\n\t\"./my.js\": \"honF\",\n\t\"./nb\": \"bOMt\",\n\t\"./nb.js\": \"bOMt\",\n\t\"./ne\": \"OjkT\",\n\t\"./ne.js\": \"OjkT\",\n\t\"./nl\": \"+s0g\",\n\t\"./nl-be\": \"2ykv\",\n\t\"./nl-be.js\": \"2ykv\",\n\t\"./nl.js\": \"+s0g\",\n\t\"./nn\": \"uEye\",\n\t\"./nn.js\": \"uEye\",\n\t\"./pa-in\": \"8/+R\",\n\t\"./pa-in.js\": \"8/+R\",\n\t\"./pl\": \"jVdC\",\n\t\"./pl.js\": \"jVdC\",\n\t\"./pt\": \"8mBD\",\n\t\"./pt-br\": \"0tRk\",\n\t\"./pt-br.js\": \"0tRk\",\n\t\"./pt.js\": \"8mBD\",\n\t\"./ro\": \"lyxo\",\n\t\"./ro.js\": \"lyxo\",\n\t\"./ru\": \"lXzo\",\n\t\"./ru.js\": \"lXzo\",\n\t\"./sd\": \"Z4QM\",\n\t\"./sd.js\": \"Z4QM\",\n\t\"./se\": \"//9w\",\n\t\"./se.js\": \"//9w\",\n\t\"./si\": \"7aV9\",\n\t\"./si.js\": \"7aV9\",\n\t\"./sk\": \"e+ae\",\n\t\"./sk.js\": \"e+ae\",\n\t\"./sl\": \"gVVK\",\n\t\"./sl.js\": \"gVVK\",\n\t\"./sq\": \"yPMs\",\n\t\"./sq.js\": \"yPMs\",\n\t\"./sr\": \"zx6S\",\n\t\"./sr-cyrl\": \"E+lV\",\n\t\"./sr-cyrl.js\": \"E+lV\",\n\t\"./sr.js\": \"zx6S\",\n\t\"./ss\": \"Ur1D\",\n\t\"./ss.js\": \"Ur1D\",\n\t\"./sv\": \"X709\",\n\t\"./sv.js\": \"X709\",\n\t\"./sw\": \"dNwA\",\n\t\"./sw.js\": \"dNwA\",\n\t\"./ta\": \"PeUW\",\n\t\"./ta.js\": \"PeUW\",\n\t\"./te\": \"XLvN\",\n\t\"./te.js\": \"XLvN\",\n\t\"./tet\": \"V2x9\",\n\t\"./tet.js\": \"V2x9\",\n\t\"./tg\": \"Oxv6\",\n\t\"./tg.js\": \"Oxv6\",\n\t\"./th\": \"EOgW\",\n\t\"./th.js\": \"EOgW\",\n\t\"./tl-ph\": \"Dzi0\",\n\t\"./tl-ph.js\": \"Dzi0\",\n\t\"./tlh\": \"z3Vd\",\n\t\"./tlh.js\": \"z3Vd\",\n\t\"./tr\": \"DoHr\",\n\t\"./tr.js\": \"DoHr\",\n\t\"./tzl\": \"z1FC\",\n\t\"./tzl.js\": \"z1FC\",\n\t\"./tzm\": \"wQk9\",\n\t\"./tzm-latn\": \"tT3J\",\n\t\"./tzm-latn.js\": \"tT3J\",\n\t\"./tzm.js\": \"wQk9\",\n\t\"./ug-cn\": \"YRex\",\n\t\"./ug-cn.js\": \"YRex\",\n\t\"./uk\": \"raLr\",\n\t\"./uk.js\": \"raLr\",\n\t\"./ur\": \"UpQW\",\n\t\"./ur.js\": \"UpQW\",\n\t\"./uz\": \"Loxo\",\n\t\"./uz-latn\": \"AQ68\",\n\t\"./uz-latn.js\": \"AQ68\",\n\t\"./uz.js\": \"Loxo\",\n\t\"./vi\": \"KSF8\",\n\t\"./vi.js\": \"KSF8\",\n\t\"./x-pseudo\": \"/X5v\",\n\t\"./x-pseudo.js\": \"/X5v\",\n\t\"./yo\": \"fzPg\",\n\t\"./yo.js\": \"fzPg\",\n\t\"./zh-cn\": \"XDpg\",\n\t\"./zh-cn.js\": \"XDpg\",\n\t\"./zh-hk\": \"SatO\",\n\t\"./zh-hk.js\": \"SatO\",\n\t\"./zh-tw\": \"kOpN\",\n\t\"./zh-tw.js\": \"kOpN\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"RnhZ\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "VyA4":
/*!*********************************!*\
  !*** ./src/component/hello.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"q1tI\");\nconst antd_1 = __webpack_require__(/*! antd */ \"gdfu\");\n;\nclass Hello extends React.PureComponent {\n    render() {\n        return [\n            React.createElement(\"h1\", null,\n                \"Hello from \",\n                this.props.compiler,\n                \" and \",\n                this.props.framework),\n            React.createElement(\"h1\", null,\n                \"Support by \",\n                this.props.buildTool),\n            React.createElement(antd_1.DatePicker, null)\n        ];\n    }\n    ;\n}\nexports.default = Hello;\n;\n\n\n//# sourceURL=webpack:///./src/component/hello.tsx?");

/***/ })

/******/ });