"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/monsters/[name]/page",{

/***/ "(app-pages-browser)/./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMonsterDB: function() { return /* binding */ fetchMonsterDB; },\n/* harmony export */   getMonsters: function() { return /* binding */ getMonsters; },\n/* harmony export */   getMonstersByName: function() { return /* binding */ getMonstersByName; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nasync function getMonsters(type, species) {\n    let path = \"https://mhw-db.com/monsters\";\n    if (type && !species) {\n        path += '?q={\"type\": \"'.concat(type, '\"}');\n    }\n    if (!type && species) {\n        path += '?q={\"species\": \"'.concat(species, '\"}');\n    }\n    if (type && species) {\n        path += '?q={ type: \"'.concat(type, '\", species: \"').concat(species, '\" }');\n    }\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(path);\n    return res.data;\n}\nasync function getMonstersByName(name) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('https://mhw-db.com/monsters?q={\"name\": \"'.concat(name, '\"}'));\n    return res.data;\n}\nfunction fetchMonsterDB() {\n    return request.get(\"/monster-hunter-DB/monsters.json\").then((param)=>{\n        let { data } = param;\n        return data;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwaS9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUVuQixlQUFlQyxZQUNwQkMsSUFBNEIsRUFDNUJDLE9BQWU7SUFFZixJQUFJQyxPQUFRO0lBQ1osSUFBSUYsUUFBUSxDQUFDQyxTQUFTO1FBQ3BCQyxRQUFRLGdCQUFxQixPQUFMRixNQUFLO0lBQy9CO0lBQ0EsSUFBSSxDQUFDQSxRQUFRQyxTQUFTO1FBQ3BCQyxRQUFRLG1CQUEyQixPQUFSRCxTQUFRO0lBQ3JDO0lBQ0EsSUFBSUQsUUFBUUMsU0FBUztRQUNuQkMsUUFBUSxlQUFtQ0QsT0FBcEJELE1BQUssaUJBQXVCLE9BQVJDLFNBQVE7SUFDckQ7SUFDQSxNQUFNRSxNQUFNLE1BQU1MLDZDQUFLQSxDQUFDTSxHQUFHLENBQUNGO0lBQzVCLE9BQU9DLElBQUlFLElBQUk7QUFDakI7QUFFTyxlQUFlQyxrQkFBa0JDLElBQVk7SUFDbEQsTUFBTUosTUFBTSxNQUFNTCw2Q0FBS0EsQ0FBQ00sR0FBRyxDQUN6QiwyQ0FBZ0QsT0FBTEcsTUFBSztJQUVsRCxPQUFPSixJQUFJRSxJQUFJO0FBQ2pCO0FBRU8sU0FBU0c7SUFDZCxPQUFPQyxRQUFRTCxHQUFHLENBQUMsb0NBQW9DTSxJQUFJLENBQUM7WUFBQyxFQUFFTCxJQUFJLEVBQUU7UUFDbkUsT0FBT0E7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9hcGkudHM/NzJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb25zdGVycyhcbiAgdHlwZTogXCJsYXJnZVwiIHwgXCJzbWFsbFwiIHwgXCJcIixcbiAgc3BlY2llczogc3RyaW5nXG4pIHtcbiAgbGV0IHBhdGggPSBgaHR0cHM6Ly9taHctZGIuY29tL21vbnN0ZXJzYDtcbiAgaWYgKHR5cGUgJiYgIXNwZWNpZXMpIHtcbiAgICBwYXRoICs9IGA/cT17XCJ0eXBlXCI6IFwiJHt0eXBlfVwifWA7XG4gIH1cbiAgaWYgKCF0eXBlICYmIHNwZWNpZXMpIHtcbiAgICBwYXRoICs9IGA/cT17XCJzcGVjaWVzXCI6IFwiJHtzcGVjaWVzfVwifWA7XG4gIH1cbiAgaWYgKHR5cGUgJiYgc3BlY2llcykge1xuICAgIHBhdGggKz0gYD9xPXsgdHlwZTogXCIke3R5cGV9XCIsIHNwZWNpZXM6IFwiJHtzcGVjaWVzfVwiIH1gO1xuICB9XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChwYXRoKTtcbiAgcmV0dXJuIHJlcy5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9uc3RlcnNCeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9taHctZGIuY29tL21vbnN0ZXJzP3E9e1wibmFtZVwiOiBcIiR7bmFtZX1cIn1gXG4gICk7XG4gIHJldHVybiByZXMuZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW9uc3RlckRCKCkge1xuICByZXR1cm4gcmVxdWVzdC5nZXQoXCIvbW9uc3Rlci1odW50ZXItREIvbW9uc3RlcnMuanNvblwiKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldE1vbnN0ZXJzIiwidHlwZSIsInNwZWNpZXMiLCJwYXRoIiwicmVzIiwiZ2V0IiwiZGF0YSIsImdldE1vbnN0ZXJzQnlOYW1lIiwibmFtZSIsImZldGNoTW9uc3RlckRCIiwicmVxdWVzdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./api/api.ts\n"));

/***/ })

});