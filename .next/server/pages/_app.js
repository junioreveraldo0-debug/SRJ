/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\pages\\\\_app.js\",\n            lineNumber: 3,\n            columnNumber: 61\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\pages\\\\_app.js\",\n        lineNumber: 3,\n        columnNumber: 47\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDYztBQUM1QyxTQUFTQyxNQUFNLEVBQUNDLFNBQVMsRUFBQ0MsU0FBUyxFQUFDO0lBQUcscUJBQU8sOERBQUNILHFEQUFZQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUFtQjtBQUN2RyxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzdG9xdWUtc3JqLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCdcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQscGFnZVByb3BzfSl7IHJldHVybiA8QXV0aFByb3ZpZGVyPjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPjwvQXV0aFByb3ZpZGVyPiB9XG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const raw =  false ? 0 : null;\n        if (raw) setUser(JSON.parse(raw));\n    }, []);\n    const login = async (username, password)=>{\n        const res = await fetch(\"/api/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        if (res.ok) {\n            const j = await res.json();\n            localStorage.setItem(\"estoque_srj_user\", JSON.stringify({\n                username,\n                token: j.token\n            }));\n            setUser({\n                username,\n                token: j.token\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/dashboard\");\n            return true;\n        }\n        const err = await res.json().catch(()=>({\n                error: \"Login failed\"\n            }));\n        throw new Error(err.error || \"Login failed\");\n    };\n    const logout = ()=>{\n        if (false) {}\n        setUser(null);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\utils\\\\auth.js\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction getToken() {\n    if (true) return null;\n    const raw = localStorage.getItem(\"estoque_srj_user\");\n    if (!raw) return null;\n    try {\n        const j = JSON.parse(raw);\n        return j.token;\n    } catch (e) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDdEM7QUFDaEMsTUFBTUssNEJBQWNMLG9EQUFhQTtBQUMxQixTQUFTTSxhQUFhLEVBQUNDLFFBQVEsRUFBQztJQUNyQyxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ04sK0NBQVFBLENBQUM7SUFDOUJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsTUFBTSxNQUFnQixHQUFhQyxDQUFxQixHQUFxQjtRQUNuRixJQUFHRCxLQUFLRCxRQUFRSSxLQUFLQyxLQUFLLENBQUNKO0lBQzdCLEdBQUUsRUFBRTtJQUNKLE1BQU1LLFFBQVEsT0FBT0MsVUFBU0M7UUFDNUIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG1CQUFrQjtZQUFDQyxRQUFPO1lBQU9DLFNBQVE7Z0JBQUMsZ0JBQWU7WUFBa0I7WUFBRUMsTUFBS1QsS0FBS1UsU0FBUyxDQUFDO2dCQUFDUDtnQkFBU0M7WUFBUTtRQUFFO1FBQzdJLElBQUdDLElBQUlNLEVBQUUsRUFBQztZQUFFLE1BQU1DLElBQUksTUFBTVAsSUFBSVEsSUFBSTtZQUFJZixhQUFhZ0IsT0FBTyxDQUFDLG9CQUFvQmQsS0FBS1UsU0FBUyxDQUFDO2dCQUFDUDtnQkFBVVksT0FBT0gsRUFBRUcsS0FBSztZQUFBO1lBQUtuQixRQUFRO2dCQUFDTztnQkFBVVksT0FBT0gsRUFBRUcsS0FBSztZQUFBO1lBQUl4Qix1REFBVyxDQUFDO1lBQWUsT0FBTztRQUFLO1FBQzFNLE1BQU0wQixNQUFNLE1BQU1aLElBQUlRLElBQUksR0FBR0ssS0FBSyxDQUFDLElBQUs7Z0JBQUNDLE9BQU07WUFBYztRQUFLLE1BQU0sSUFBSUMsTUFBTUgsSUFBSUUsS0FBSyxJQUFFO0lBQy9GO0lBQ0EsTUFBTUUsU0FBUztRQUFNLElBQUcsS0FBZ0IsRUFBYXZCLEVBQXdCO1FBQXFCRixRQUFRO1FBQU9MLHVEQUFXLENBQUM7SUFBSztJQUNsSSxxQkFBTyw4REFBQ0MsWUFBWStCLFFBQVE7UUFBQ0MsT0FBTztZQUFDN0I7WUFBS087WUFBTW1CO1FBQU07a0JBQUkzQjs7Ozs7O0FBQzVEO0FBQ08sU0FBUytCO0lBQVcsT0FBT3JDLGlEQUFVQSxDQUFDSTtBQUFhO0FBQ25ELFNBQVNrQztJQUFZLElBQUcsSUFBZ0IsRUFBYSxPQUFPO0lBQU0sTUFBTTdCLE1BQU1DLGFBQWFDLE9BQU8sQ0FBQztJQUFxQixJQUFHLENBQUNGLEtBQUssT0FBTztJQUFNLElBQUc7UUFBRSxNQUFNZSxJQUFFWixLQUFLQyxLQUFLLENBQUNKO1FBQU0sT0FBT2UsRUFBRUcsS0FBSztJQUFDLEVBQUMsT0FBTVksR0FBRTtRQUFDLE9BQU87SUFBSTtBQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXN0b3F1ZS1zcmovLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSl7XG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdPXVzZVN0YXRlKG51bGwpXG4gIHVzZUVmZmVjdCgoKT0+eyBcbiAgICBjb25zdCByYXcgPSB0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlc3RvcXVlX3Nyal91c2VyJyk6IG51bGw7IFxuICAgIGlmKHJhdykgc2V0VXNlcihKU09OLnBhcnNlKHJhdykpIFxuICB9LFtdKVxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSxwYXNzd29yZCk9PntcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL2xvZ2luJyx7bWV0aG9kOidQT1NUJyxoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLHBhc3N3b3JkfSl9KVxuICAgIGlmKHJlcy5vayl7IGNvbnN0IGogPSBhd2FpdCByZXMuanNvbigpOyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXN0b3F1ZV9zcmpfdXNlcicsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgdG9rZW46IGoudG9rZW59KSk7IHNldFVzZXIoe3VzZXJuYW1lLCB0b2tlbjogai50b2tlbn0pOyBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpOyByZXR1cm4gdHJ1ZSB9XG4gICAgY29uc3QgZXJyID0gYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKT0+KHtlcnJvcjonTG9naW4gZmFpbGVkJ30pKTsgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvcnx8J0xvZ2luIGZhaWxlZCcpXG4gIH1cbiAgY29uc3QgbG9nb3V0ID0gKCk9PnsgaWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXN0b3F1ZV9zcmpfdXNlcicpOyBzZXRVc2VyKG51bGwpOyBSb3V0ZXIucHVzaCgnLycpIH1cbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3VzZXIsbG9naW4sbG9nb3V0fX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpeyByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCkgfVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCl7IGlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7IGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlc3RvcXVlX3Nyal91c2VyJyk7IGlmKCFyYXcpIHJldHVybiBudWxsOyB0cnl7IGNvbnN0IGo9SlNPTi5wYXJzZShyYXcpOyByZXR1cm4gai50b2tlbiB9Y2F0Y2goZSl7cmV0dXJuIG51bGx9IH1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwicmF3IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJvayIsImoiLCJqc29uIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImdldFRva2VuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();