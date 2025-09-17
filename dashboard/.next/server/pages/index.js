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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "(pages-dir-node)/./components/AttentionScatter.js":
/*!****************************************!*\
  !*** ./components/AttentionScatter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AttentionScatter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=CartesianGrid,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js\");\n\n\n\nfunction AttentionScatter() {\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AttentionScatter.useEffect\": ()=>{\n            fetch(\"/students.json\").then({\n                \"AttentionScatter.useEffect\": (res)=>res.json()\n            }[\"AttentionScatter.useEffect\"]).then({\n                \"AttentionScatter.useEffect\": (data)=>setStudents(data)\n            }[\"AttentionScatter.useEffect\"]);\n        }\n    }[\"AttentionScatter.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-2\",\n                children: \"Attention vs Assessment Score\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                width: \"100%\",\n                height: 300,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.ScatterChart, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {\n                            type: \"number\",\n                            dataKey: \"attention\",\n                            name: \"Attention\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {\n                            type: \"number\",\n                            dataKey: \"assessment_score\",\n                            name: \"Score\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                            cursor: {\n                                strokeDasharray: \"3 3\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Scatter, {\n                            data: students,\n                            fill: \"#8884d8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\AttentionScatter.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQXR0ZW50aW9uU2NhdHRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ3lEO0FBRTdGLFNBQVNVO0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0E7c0NBQUM7WUFDUlksTUFBTSxrQkFDSEMsSUFBSTs4Q0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTs2Q0FDcEJGLElBQUk7OENBQUNHLENBQUFBLE9BQVFMLFlBQVlLOztRQUM5QjtxQ0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQXlCOzs7Ozs7MEJBQ3ZDLDhEQUFDWCwySkFBbUJBO2dCQUFDWSxPQUFNO2dCQUFPQyxRQUFROzBCQUN4Qyw0RUFBQ25CLG9KQUFZQTs7c0NBQ1gsOERBQUNJLHFKQUFhQTs7Ozs7c0NBQ2QsOERBQUNGLDZJQUFLQTs0QkFBQ2tCLE1BQUs7NEJBQVNDLFNBQVE7NEJBQVlDLE1BQUs7Ozs7OztzQ0FDOUMsOERBQUNuQiw2SUFBS0E7NEJBQUNpQixNQUFLOzRCQUFTQyxTQUFROzRCQUFtQkMsTUFBSzs7Ozs7O3NDQUNyRCw4REFBQ2pCLCtJQUFPQTs0QkFBQ2tCLFFBQVE7Z0NBQUVDLGlCQUFpQjs0QkFBTTs7Ozs7O3NDQUMxQyw4REFBQ3ZCLCtJQUFPQTs0QkFBQ2EsTUFBTU47NEJBQVVpQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIRU1BTlRIIFMgS1xcT25lRHJpdmVcXERlc2t0b3BcXENvZ25pdGl2ZV9za2lsbHNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcQXR0ZW50aW9uU2NhdHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTY2F0dGVyQ2hhcnQsIFNjYXR0ZXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXR0ZW50aW9uU2NhdHRlcigpIHtcclxuICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL3N0dWRlbnRzLmpzb25cIilcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0U3R1ZGVudHMoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+QXR0ZW50aW9uIHZzIEFzc2Vzc21lbnQgU2NvcmU8L2gyPlxyXG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezMwMH0+XHJcbiAgICAgICAgPFNjYXR0ZXJDaGFydD5cclxuICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIC8+XHJcbiAgICAgICAgICA8WEF4aXMgdHlwZT1cIm51bWJlclwiIGRhdGFLZXk9XCJhdHRlbnRpb25cIiBuYW1lPVwiQXR0ZW50aW9uXCIgLz5cclxuICAgICAgICAgIDxZQXhpcyB0eXBlPVwibnVtYmVyXCIgZGF0YUtleT1cImFzc2Vzc21lbnRfc2NvcmVcIiBuYW1lPVwiU2NvcmVcIiAvPlxyXG4gICAgICAgICAgPFRvb2x0aXAgY3Vyc29yPXt7IHN0cm9rZURhc2hhcnJheTogXCIzIDNcIiB9fSAvPlxyXG4gICAgICAgICAgPFNjYXR0ZXIgZGF0YT17c3R1ZGVudHN9IGZpbGw9XCIjODg4NGQ4XCIgLz5cclxuICAgICAgICA8L1NjYXR0ZXJDaGFydD5cclxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTY2F0dGVyQ2hhcnQiLCJTY2F0dGVyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkF0dGVudGlvblNjYXR0ZXIiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidHlwZSIsImRhdGFLZXkiLCJuYW1lIiwiY3Vyc29yIiwic3Ryb2tlRGFzaGFycmF5IiwiZmlsbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/AttentionScatter.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/SkillBarChart.js":
/*!*************************************!*\
  !*** ./components/SkillBarChart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SkillBarChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,BarChart,CartesianGrid,Legend,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=Bar,BarChart,CartesianGrid,Legend,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js\");\n\n\n\nfunction SkillBarChart() {\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SkillBarChart.useEffect\": ()=>{\n            fetch(\"/students.json\").then({\n                \"SkillBarChart.useEffect\": (res)=>res.json()\n            }[\"SkillBarChart.useEffect\"]).then({\n                \"SkillBarChart.useEffect\": (data)=>setStudents(data)\n            }[\"SkillBarChart.useEffect\"]);\n        }\n    }[\"SkillBarChart.useEffect\"], []);\n    // Prepare data: average score per skill\n    const chartData = students.map((s)=>({\n            name: s.name,\n            comprehension: s.comprehension,\n            attention: s.attention,\n            focus: s.focus,\n            retention: s.retention\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-2\",\n                children: \"Cognitive Skills\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                width: \"100%\",\n                height: 300,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {\n                    data: chartData,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {\n                            strokeDasharray: \"3 3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {\n                            dataKey: \"name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Legend, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                            dataKey: \"comprehension\",\n                            fill: \"#8884d8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                            dataKey: \"attention\",\n                            fill: \"#82ca9d\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                            dataKey: \"focus\",\n                            fill: \"#ffc658\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_Legend_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                            dataKey: \"retention\",\n                            fill: \"#ff8042\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\SkillBarChart.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU2tpbGxCYXJDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBVWpDO0FBRUgsU0FBU1c7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQTttQ0FBQztZQUNSYSxNQUFNLGtCQUNIQyxJQUFJOzJDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJOzBDQUNwQkYsSUFBSTsyQ0FBQ0csQ0FBQUEsT0FBUUwsWUFBWUs7O1FBQzlCO2tDQUFHLEVBQUU7SUFFTCx3Q0FBd0M7SUFDeEMsTUFBTUMsWUFBWVAsU0FBU1EsR0FBRyxDQUFDQyxDQUFBQSxJQUFNO1lBQ25DQyxNQUFNRCxFQUFFQyxJQUFJO1lBQ1pDLGVBQWVGLEVBQUVFLGFBQWE7WUFDOUJDLFdBQVdILEVBQUVHLFNBQVM7WUFDdEJDLE9BQU9KLEVBQUVJLEtBQUs7WUFDZEMsV0FBV0wsRUFBRUssU0FBUztRQUN4QjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ25CLDBKQUFtQkE7Z0JBQUNvQixPQUFNO2dCQUFPQyxRQUFROzBCQUN4Qyw0RUFBQzVCLCtJQUFRQTtvQkFBQ2UsTUFBTUM7O3NDQUNkLDhEQUFDWixvSkFBYUE7NEJBQUN5QixpQkFBZ0I7Ozs7OztzQ0FDL0IsOERBQUMzQiw0SUFBS0E7NEJBQUM0QixTQUFROzs7Ozs7c0NBQ2YsOERBQUMzQiw0SUFBS0E7Ozs7O3NDQUNOLDhEQUFDRSw4SUFBT0E7Ozs7O3NDQUNSLDhEQUFDQyw2SUFBTUE7Ozs7O3NDQUNQLDhEQUFDTCwwSUFBR0E7NEJBQUM2QixTQUFROzRCQUFnQkMsTUFBSzs7Ozs7O3NDQUNsQyw4REFBQzlCLDBJQUFHQTs0QkFBQzZCLFNBQVE7NEJBQVlDLE1BQUs7Ozs7OztzQ0FDOUIsOERBQUM5QiwwSUFBR0E7NEJBQUM2QixTQUFROzRCQUFRQyxNQUFLOzs7Ozs7c0NBQzFCLDhEQUFDOUIsMElBQUdBOzRCQUFDNkIsU0FBUTs0QkFBWUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSEVNQU5USCBTIEtcXE9uZURyaXZlXFxEZXNrdG9wXFxDb2duaXRpdmVfc2tpbGxzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXFNraWxsQmFyQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCYXJDaGFydCxcclxuICBCYXIsXHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgQ2FydGVzaWFuR3JpZCxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxuICBSZXNwb25zaXZlQ29udGFpbmVyXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbEJhckNoYXJ0KCkge1xyXG4gIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvc3R1ZGVudHMuanNvblwiKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRTdHVkZW50cyhkYXRhKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBQcmVwYXJlIGRhdGE6IGF2ZXJhZ2Ugc2NvcmUgcGVyIHNraWxsXHJcbiAgY29uc3QgY2hhcnREYXRhID0gc3R1ZGVudHMubWFwKHMgPT4gKHtcclxuICAgIG5hbWU6IHMubmFtZSxcclxuICAgIGNvbXByZWhlbnNpb246IHMuY29tcHJlaGVuc2lvbixcclxuICAgIGF0dGVudGlvbjogcy5hdHRlbnRpb24sXHJcbiAgICBmb2N1czogcy5mb2N1cyxcclxuICAgIHJldGVudGlvbjogcy5yZXRlbnRpb25cclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPkNvZ25pdGl2ZSBTa2lsbHM8L2gyPlxyXG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezMwMH0+XHJcbiAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2NoYXJ0RGF0YX0+XHJcbiAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxyXG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgLz5cclxuICAgICAgICAgIDxZQXhpcyAvPlxyXG4gICAgICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgICAgIDxMZWdlbmQgLz5cclxuICAgICAgICAgIDxCYXIgZGF0YUtleT1cImNvbXByZWhlbnNpb25cIiBmaWxsPVwiIzg4ODRkOFwiIC8+XHJcbiAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJhdHRlbnRpb25cIiBmaWxsPVwiIzgyY2E5ZFwiIC8+XHJcbiAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJmb2N1c1wiIGZpbGw9XCIjZmZjNjU4XCIgLz5cclxuICAgICAgICAgIDxCYXIgZGF0YUtleT1cInJldGVudGlvblwiIGZpbGw9XCIjZmY4MDQyXCIgLz5cclxuICAgICAgICA8L0JhckNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiU2tpbGxCYXJDaGFydCIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNoYXJ0RGF0YSIsIm1hcCIsInMiLCJuYW1lIiwiY29tcHJlaGVuc2lvbiIsImF0dGVudGlvbiIsImZvY3VzIiwicmV0ZW50aW9uIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJmaWxsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/SkillBarChart.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/StudentRadar.js":
/*!************************************!*\
  !*** ./components/StudentRadar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentRadar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=PolarAngleAxis,PolarGrid,PolarRadiusAxis,Radar,RadarChart,ResponsiveContainer!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=PolarAngleAxis,PolarGrid,PolarRadiusAxis,Radar,RadarChart,ResponsiveContainer!=!./node_modules/recharts/lib/index.js\");\n\n\n\nfunction StudentRadar({ studentId = 1 }) {\n    const [student, setStudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"StudentRadar.useEffect\": ()=>{\n            fetch(\"/students.json\").then({\n                \"StudentRadar.useEffect\": (res)=>res.json()\n            }[\"StudentRadar.useEffect\"]).then({\n                \"StudentRadar.useEffect\": (data)=>{\n                    const s = data.find({\n                        \"StudentRadar.useEffect.s\": (st)=>st.student_id === studentId\n                    }[\"StudentRadar.useEffect.s\"]);\n                    setStudent(s);\n                }\n            }[\"StudentRadar.useEffect\"]);\n        }\n    }[\"StudentRadar.useEffect\"], [\n        studentId\n    ]);\n    if (!student) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n        lineNumber: 16,\n        columnNumber: 24\n    }, this);\n    const radarData = [\n        {\n            skill: \"Comprehension\",\n            value: student.comprehension\n        },\n        {\n            skill: \"Attention\",\n            value: student.attention\n        },\n        {\n            skill: \"Focus\",\n            value: student.focus\n        },\n        {\n            skill: \"Retention\",\n            value: student.retention\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-2\",\n                children: [\n                    student.name,\n                    \" - Skills Radar\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                width: \"100%\",\n                height: 300,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.RadarChart, {\n                    data: radarData,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.PolarGrid, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.PolarAngleAxis, {\n                            dataKey: \"skill\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.PolarRadiusAxis, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PolarAngleAxis_PolarGrid_PolarRadiusAxis_Radar_RadarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.Radar, {\n                            name: student.name,\n                            dataKey: \"value\",\n                            stroke: \"#8884d8\",\n                            fill: \"#8884d8\",\n                            fillOpacity: 0.3\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentRadar.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU3R1ZGVudFJhZGFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDMkQ7QUFFL0YsU0FBU1MsYUFBYSxFQUFFQyxZQUFZLENBQUMsRUFBRTtJQUNwRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQTtrQ0FBQztZQUNSWSxNQUFNLGtCQUNIQyxJQUFJOzBDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO3lDQUNwQkYsSUFBSTswQ0FBQ0csQ0FBQUE7b0JBQ0osTUFBTUMsSUFBSUQsS0FBS0UsSUFBSTtvREFBQ0MsQ0FBQUEsS0FBTUEsR0FBR0MsVUFBVSxLQUFLWDs7b0JBQzVDRSxXQUFXTTtnQkFDYjs7UUFDSjtpQ0FBRztRQUFDUjtLQUFVO0lBRWQsSUFBSSxDQUFDQyxTQUFTLHFCQUFPLDhEQUFDVztrQkFBSTs7Ozs7O0lBRTFCLE1BQU1DLFlBQVk7UUFDaEI7WUFBRUMsT0FBTztZQUFpQkMsT0FBT2QsUUFBUWUsYUFBYTtRQUFDO1FBQ3ZEO1lBQUVGLE9BQU87WUFBYUMsT0FBT2QsUUFBUWdCLFNBQVM7UUFBQztRQUMvQztZQUFFSCxPQUFPO1lBQVNDLE9BQU9kLFFBQVFpQixLQUFLO1FBQUM7UUFDdkM7WUFBRUosT0FBTztZQUFhQyxPQUFPZCxRQUFRa0IsU0FBUztRQUFDO0tBQ2hEO0lBRUQscUJBQ0UsOERBQUNQOzswQkFDQyw4REFBQ1E7Z0JBQUdDLFdBQVU7O29CQUEwQnBCLFFBQVFxQixJQUFJO29CQUFDOzs7Ozs7OzBCQUNyRCw4REFBQ3hCLDhKQUFtQkE7Z0JBQUN5QixPQUFNO2dCQUFPQyxRQUFROzBCQUN4Qyw0RUFBQzlCLHFKQUFVQTtvQkFBQ2EsTUFBTU07O3NDQUNoQiw4REFBQ2xCLG9KQUFTQTs7Ozs7c0NBQ1YsOERBQUNDLHlKQUFjQTs0QkFBQzZCLFNBQVE7Ozs7OztzQ0FDeEIsOERBQUM1QiwwSkFBZUE7Ozs7O3NDQUNoQiw4REFBQ0osZ0pBQUtBOzRCQUFDNkIsTUFBTXJCLFFBQVFxQixJQUFJOzRCQUFFRyxTQUFROzRCQUFRQyxRQUFPOzRCQUFVQyxNQUFLOzRCQUFVQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIRU1BTlRIIFMgS1xcT25lRHJpdmVcXERlc2t0b3BcXENvZ25pdGl2ZV9za2lsbHNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcU3R1ZGVudFJhZGFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhZGFyLCBSYWRhckNoYXJ0LCBQb2xhckdyaWQsIFBvbGFyQW5nbGVBeGlzLCBQb2xhclJhZGl1c0F4aXMsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwicmVjaGFydHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnRSYWRhcih7IHN0dWRlbnRJZCA9IDEgfSkge1xyXG4gIGNvbnN0IFtzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvc3R1ZGVudHMuanNvblwiKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IGRhdGEuZmluZChzdCA9PiBzdC5zdHVkZW50X2lkID09PSBzdHVkZW50SWQpO1xyXG4gICAgICAgIHNldFN0dWRlbnQocyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtzdHVkZW50SWRdKTtcclxuXHJcbiAgaWYgKCFzdHVkZW50KSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuICBjb25zdCByYWRhckRhdGEgPSBbXHJcbiAgICB7IHNraWxsOiBcIkNvbXByZWhlbnNpb25cIiwgdmFsdWU6IHN0dWRlbnQuY29tcHJlaGVuc2lvbiB9LFxyXG4gICAgeyBza2lsbDogXCJBdHRlbnRpb25cIiwgdmFsdWU6IHN0dWRlbnQuYXR0ZW50aW9uIH0sXHJcbiAgICB7IHNraWxsOiBcIkZvY3VzXCIsIHZhbHVlOiBzdHVkZW50LmZvY3VzIH0sXHJcbiAgICB7IHNraWxsOiBcIlJldGVudGlvblwiLCB2YWx1ZTogc3R1ZGVudC5yZXRlbnRpb24gfVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntzdHVkZW50Lm5hbWV9IC0gU2tpbGxzIFJhZGFyPC9oMj5cclxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMDB9PlxyXG4gICAgICAgIDxSYWRhckNoYXJ0IGRhdGE9e3JhZGFyRGF0YX0+XHJcbiAgICAgICAgICA8UG9sYXJHcmlkIC8+XHJcbiAgICAgICAgICA8UG9sYXJBbmdsZUF4aXMgZGF0YUtleT1cInNraWxsXCIgLz5cclxuICAgICAgICAgIDxQb2xhclJhZGl1c0F4aXMgLz5cclxuICAgICAgICAgIDxSYWRhciBuYW1lPXtzdHVkZW50Lm5hbWV9IGRhdGFLZXk9XCJ2YWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiBmaWxsPVwiIzg4ODRkOFwiIGZpbGxPcGFjaXR5PXswLjN9IC8+XHJcbiAgICAgICAgPC9SYWRhckNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmFkYXIiLCJSYWRhckNoYXJ0IiwiUG9sYXJHcmlkIiwiUG9sYXJBbmdsZUF4aXMiLCJQb2xhclJhZGl1c0F4aXMiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiU3R1ZGVudFJhZGFyIiwic3R1ZGVudElkIiwic3R1ZGVudCIsInNldFN0dWRlbnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInMiLCJmaW5kIiwic3QiLCJzdHVkZW50X2lkIiwiZGl2IiwicmFkYXJEYXRhIiwic2tpbGwiLCJ2YWx1ZSIsImNvbXByZWhlbnNpb24iLCJhdHRlbnRpb24iLCJmb2N1cyIsInJldGVudGlvbiIsImgyIiwiY2xhc3NOYW1lIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YUtleSIsInN0cm9rZSIsImZpbGwiLCJmaWxsT3BhY2l0eSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/StudentRadar.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/StudentTable.js":
/*!************************************!*\
  !*** ./components/StudentTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction StudentTable() {\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sortConfig, setSortConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        key: null,\n        direction: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"StudentTable.useEffect\": ()=>{\n            fetch(\"/students.json\").then({\n                \"StudentTable.useEffect\": (res)=>res.json()\n            }[\"StudentTable.useEffect\"]).then({\n                \"StudentTable.useEffect\": (data)=>setStudents(data)\n            }[\"StudentTable.useEffect\"]);\n        }\n    }[\"StudentTable.useEffect\"], []);\n    // Search filter\n    const filteredStudents = students.filter((s)=>s.name.toLowerCase().includes(search.toLowerCase()) || s.class.toLowerCase().includes(search.toLowerCase()));\n    // Sorting\n    const sortedStudents = [\n        ...filteredStudents\n    ];\n    if (sortConfig.key) {\n        sortedStudents.sort((a, b)=>{\n            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === \"ascending\" ? -1 : 1;\n            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === \"ascending\" ? 1 : -1;\n            return 0;\n        });\n    }\n    const requestSort = (key)=>{\n        let direction = \"ascending\";\n        if (sortConfig.key === key && sortConfig.direction === \"ascending\") direction = \"descending\";\n        setSortConfig({\n            key,\n            direction\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-2\",\n                children: \"Students\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by name or class...\",\n                value: search,\n                onChange: (e)=>setSearch(e.target.value),\n                className: \"mb-2 p-2 border rounded w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border px-2 py-1 cursor-pointer\",\n                                    onClick: ()=>requestSort(\"student_id\"),\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border px-2 py-1 cursor-pointer\",\n                                    onClick: ()=>requestSort(\"name\"),\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border px-2 py-1 cursor-pointer\",\n                                    onClick: ()=>requestSort(\"class\"),\n                                    children: \"Class\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border px-2 py-1 cursor-pointer\",\n                                    onClick: ()=>requestSort(\"assessment_score\"),\n                                    children: \"Score\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: sortedStudents.map((s)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"hover:bg-gray-100\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-2 py-1\",\n                                        children: s.student_id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-2 py-1\",\n                                        children: s.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-2 py-1\",\n                                        children: s.class\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-2 py-1\",\n                                        children: s.assessment_score\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, s.student_id, true, {\n                                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\components\\\\StudentTable.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU3R1ZGVudFRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRTtJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUVRLEtBQUs7UUFBTUMsV0FBVztJQUFLO0lBRTFFVixnREFBU0E7a0NBQUM7WUFDUlcsTUFBTSxrQkFDSEMsSUFBSTswQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO3lDQUN0QkYsSUFBSTswQ0FBQyxDQUFDRyxPQUFTWCxZQUFZVzs7UUFDaEM7aUNBQUcsRUFBRTtJQUVMLGdCQUFnQjtJQUNoQixNQUFNQyxtQkFBbUJiLFNBQVNjLE1BQU0sQ0FBQyxDQUFDQyxJQUN4Q0EsRUFBRUMsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2hCLE9BQU9lLFdBQVcsT0FDaERGLEVBQUVJLEtBQUssQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNoQixPQUFPZSxXQUFXO0lBR25ELFVBQVU7SUFDVixNQUFNRyxpQkFBaUI7V0FBSVA7S0FBaUI7SUFDNUMsSUFBSVQsV0FBV0UsR0FBRyxFQUFFO1FBQ2xCYyxlQUFlQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7WUFDdEIsSUFBSUQsQ0FBQyxDQUFDbEIsV0FBV0UsR0FBRyxDQUFDLEdBQUdpQixDQUFDLENBQUNuQixXQUFXRSxHQUFHLENBQUMsRUFBRSxPQUFPRixXQUFXRyxTQUFTLEtBQUssY0FBYyxDQUFDLElBQUk7WUFDOUYsSUFBSWUsQ0FBQyxDQUFDbEIsV0FBV0UsR0FBRyxDQUFDLEdBQUdpQixDQUFDLENBQUNuQixXQUFXRSxHQUFHLENBQUMsRUFBRSxPQUFPRixXQUFXRyxTQUFTLEtBQUssY0FBYyxJQUFJLENBQUM7WUFDOUYsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNaUIsY0FBYyxDQUFDbEI7UUFDbkIsSUFBSUMsWUFBWTtRQUNoQixJQUFJSCxXQUFXRSxHQUFHLEtBQUtBLE9BQU9GLFdBQVdHLFNBQVMsS0FBSyxhQUFhQSxZQUFZO1FBQ2hGRixjQUFjO1lBQUVDO1lBQUtDO1FBQVU7SUFDakM7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQXlCOzs7Ozs7MEJBR3ZDLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBTzdCO2dCQUNQOEIsVUFBVSxDQUFDQyxJQUFNOUIsVUFBVThCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDekNKLFdBQVU7Ozs7OzswQkFJWiw4REFBQ1E7Z0JBQU1SLFdBQVU7O2tDQUNmLDhEQUFDUztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQztvQ0FDQ1gsV0FBVTtvQ0FDVlksU0FBUyxJQUFNZixZQUFZOzhDQUM1Qjs7Ozs7OzhDQUdELDhEQUFDYztvQ0FDQ1gsV0FBVTtvQ0FDVlksU0FBUyxJQUFNZixZQUFZOzhDQUM1Qjs7Ozs7OzhDQUdELDhEQUFDYztvQ0FDQ1gsV0FBVTtvQ0FDVlksU0FBUyxJQUFNZixZQUFZOzhDQUM1Qjs7Ozs7OzhDQUdELDhEQUFDYztvQ0FDQ1gsV0FBVTtvQ0FDVlksU0FBUyxJQUFNZixZQUFZOzhDQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNnQjtrQ0FDRXBCLGVBQWVxQixHQUFHLENBQUMsQ0FBQzFCLGtCQUNuQiw4REFBQ3NCO2dDQUFzQlYsV0FBVTs7a0RBQy9CLDhEQUFDZTt3Q0FBR2YsV0FBVTtrREFBb0JaLEVBQUU0QixVQUFVOzs7Ozs7a0RBQzlDLDhEQUFDRDt3Q0FBR2YsV0FBVTtrREFBb0JaLEVBQUVDLElBQUk7Ozs7OztrREFDeEMsOERBQUMwQjt3Q0FBR2YsV0FBVTtrREFBb0JaLEVBQUVJLEtBQUs7Ozs7OztrREFDekMsOERBQUN1Qjt3Q0FBR2YsV0FBVTtrREFBb0JaLEVBQUU2QixnQkFBZ0I7Ozs7Ozs7K0JBSjdDN0IsRUFBRTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSEVNQU5USCBTIEtcXE9uZURyaXZlXFxEZXNrdG9wXFxDb2duaXRpdmVfc2tpbGxzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXFN0dWRlbnRUYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50VGFibGUoKSB7XHJcbiAgY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzb3J0Q29uZmlnLCBzZXRTb3J0Q29uZmlnXSA9IHVzZVN0YXRlKHsga2V5OiBudWxsLCBkaXJlY3Rpb246IG51bGwgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9zdHVkZW50cy5qc29uXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRTdHVkZW50cyhkYXRhKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBTZWFyY2ggZmlsdGVyXHJcbiAgY29uc3QgZmlsdGVyZWRTdHVkZW50cyA9IHN0dWRlbnRzLmZpbHRlcigocykgPT5cclxuICAgIHMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcy5jbGFzcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIC8vIFNvcnRpbmdcclxuICBjb25zdCBzb3J0ZWRTdHVkZW50cyA9IFsuLi5maWx0ZXJlZFN0dWRlbnRzXTtcclxuICBpZiAoc29ydENvbmZpZy5rZXkpIHtcclxuICAgIHNvcnRlZFN0dWRlbnRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGFbc29ydENvbmZpZy5rZXldIDwgYltzb3J0Q29uZmlnLmtleV0pIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gXCJhc2NlbmRpbmdcIiA/IC0xIDogMTtcclxuICAgICAgaWYgKGFbc29ydENvbmZpZy5rZXldID4gYltzb3J0Q29uZmlnLmtleV0pIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gXCJhc2NlbmRpbmdcIiA/IDEgOiAtMTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RTb3J0ID0gKGtleSkgPT4ge1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiYXNjZW5kaW5nXCI7XHJcbiAgICBpZiAoc29ydENvbmZpZy5rZXkgPT09IGtleSAmJiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gXCJhc2NlbmRpbmdcIikgZGlyZWN0aW9uID0gXCJkZXNjZW5kaW5nXCI7XHJcbiAgICBzZXRTb3J0Q29uZmlnKHsga2V5LCBkaXJlY3Rpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+U3R1ZGVudHM8L2gyPlxyXG5cclxuICAgICAgey8qIFNlYXJjaCBCb3ggKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lIG9yIGNsYXNzLi4uXCJcclxuICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0yIHAtMiBib3JkZXIgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIFRhYmxlICovfVxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0byB3LWZ1bGwgYm9yZGVyXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXF1ZXN0U29ydChcInN0dWRlbnRfaWRcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJRFxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXF1ZXN0U29ydChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBweC0yIHB5LTEgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlcXVlc3RTb3J0KFwiY2xhc3NcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbGFzc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXF1ZXN0U29ydChcImFzc2Vzc21lbnRfc2NvcmVcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTY29yZVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtzb3J0ZWRTdHVkZW50cy5tYXAoKHMpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17cy5zdHVkZW50X2lkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xXCI+e3Muc3R1ZGVudF9pZH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xXCI+e3MubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtMiBweS0xXCI+e3MuY2xhc3N9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTIgcHktMVwiPntzLmFzc2Vzc21lbnRfc2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0dWRlbnRUYWJsZSIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzb3J0Q29uZmlnIiwic2V0U29ydENvbmZpZyIsImtleSIsImRpcmVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyZWRTdHVkZW50cyIsImZpbHRlciIsInMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNsYXNzIiwic29ydGVkU3R1ZGVudHMiLCJzb3J0IiwiYSIsImIiLCJyZXF1ZXN0U29ydCIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwib25DbGljayIsInRib2R5IiwibWFwIiwidGQiLCJzdHVkZW50X2lkIiwiYXNzZXNzbWVudF9zY29yZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/StudentTable.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\index.js */ \"(pages-dir-node)/./pages/index.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/index\",\n    config,\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkYmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2luZGV4LmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDOEM7QUFDa0M7QUFDaEY7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLDRDQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLDRDQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLDRDQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLDRDQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyw0Q0FBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyw0Q0FBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLDRDQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLDRDQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0Q7QUFDQTtBQUNBLGFBQWEsOERBQVc7QUFDeEIsa0JBQWtCLG9FQUFnQjtBQUNsQyxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7QUFDTSxnQkFBZ0IsOEZBQVU7QUFDakM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgKiBhcyBkb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcaW5kZXguanNcIjtcbmltcG9ydCB7IGdldEhhbmRsZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL3BhZ2VzLWhhbmRsZXJcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2luZGV4XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBkZWZhdWx0IGV4cG9ydCBtaWdodCBub3QgZXhpc3Qgd2hlbiBvcHRpbWl6ZWQgZm9yIGRhdGEgb25seVxuICAgICAgICBBcHA6IGFwcC5kZWZhdWx0LFxuICAgICAgICBEb2N1bWVudDogZG9jdW1lbnQuZGVmYXVsdFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBnZXRIYW5kbGVyKHtcbiAgICBzcmNQYWdlOiBcIi9pbmRleFwiLFxuICAgIGNvbmZpZyxcbiAgICB1c2VybGFuZCxcbiAgICByb3V0ZU1vZHVsZSxcbiAgICBnZXRTdGF0aWNQYXRocyxcbiAgICBnZXRTdGF0aWNQcm9wcyxcbiAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBRTlCLFNBQVNBLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQU8sOERBQUNEO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSEVNQU5USCBTIEtcXE9uZURyaXZlXFxEZXNrdG9wXFxDb2duaXRpdmVfc2tpbGxzXFxkYXNoYm9hcmRcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_StudentTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StudentTable */ \"(pages-dir-node)/./components/StudentTable.js\");\n/* harmony import */ var _components_SkillBarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SkillBarChart */ \"(pages-dir-node)/./components/SkillBarChart.js\");\n/* harmony import */ var _components_AttentionScatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AttentionScatter */ \"(pages-dir-node)/./components/AttentionScatter.js\");\n/* harmony import */ var _components_StudentRadar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StudentRadar */ \"(pages-dir-node)/./components/StudentRadar.js\");\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkillBarChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AttentionScatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StudentRadar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                studentId: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StudentTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HEMANTH S K\\\\OneDrive\\\\Desktop\\\\Cognitive_skills\\\\dashboard\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0U7QUFDTTtBQUNSO0FBRXZDLFNBQVNJO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0wsaUVBQWFBOzs7OzswQkFDZCw4REFBQ0Msb0VBQWdCQTs7Ozs7MEJBQ2pCLDhEQUFDQyxnRUFBWUE7Z0JBQUNJLFdBQVc7Ozs7OzswQkFDekIsOERBQUNQLGdFQUFZQTs7Ozs7Ozs7Ozs7QUFHbkIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSEVNQU5USCBTIEtcXE9uZURyaXZlXFxEZXNrdG9wXFxDb2duaXRpdmVfc2tpbGxzXFxkYXNoYm9hcmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R1ZGVudFRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1N0dWRlbnRUYWJsZVwiO1xyXG5pbXBvcnQgU2tpbGxCYXJDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ta2lsbEJhckNoYXJ0XCI7XHJcbmltcG9ydCBBdHRlbnRpb25TY2F0dGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0F0dGVudGlvblNjYXR0ZXJcIjtcclxuaW1wb3J0IFN0dWRlbnRSYWRhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TdHVkZW50UmFkYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktNlwiPlxyXG4gICAgICA8U2tpbGxCYXJDaGFydCAvPlxyXG4gICAgICA8QXR0ZW50aW9uU2NhdHRlciAvPlxyXG4gICAgICA8U3R1ZGVudFJhZGFyIHN0dWRlbnRJZD17MX0gLz5cclxuICAgICAgPFN0dWRlbnRUYWJsZSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlN0dWRlbnRUYWJsZSIsIlNraWxsQmFyQ2hhcnQiLCJBdHRlbnRpb25TY2F0dGVyIiwiU3R1ZGVudFJhZGFyIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsInN0dWRlbnRJZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Bar,BarChart,CartesianGrid,Legend,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Bar,BarChart,CartesianGrid,Legend,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/recharts/lib/index.js */ "(pages-dir-node)/./node_modules/recharts/lib/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=CartesianGrid,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=CartesianGrid,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis!=!./node_modules/recharts/lib/index.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/recharts/lib/index.js */ "(pages-dir-node)/./node_modules/recharts/lib/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=PolarAngleAxis,PolarGrid,PolarRadiusAxis,Radar,RadarChart,ResponsiveContainer!=!./node_modules/recharts/lib/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=PolarAngleAxis,PolarGrid,PolarRadiusAxis,Radar,RadarChart,ResponsiveContainer!=!./node_modules/recharts/lib/index.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/recharts/lib/index.js */ "(pages-dir-node)/./node_modules/recharts/lib/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_HEMANTH_S_K_OneDrive_Desktop_Cognitive_skills_dashboard_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "decimal.js-light":
/*!***********************************!*\
  !*** external "decimal.js-light" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js-light");

/***/ }),

/***/ "es-toolkit":
/*!*****************************!*\
  !*** external "es-toolkit" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit");

/***/ }),

/***/ "es-toolkit/compat/get":
/*!****************************************!*\
  !*** external "es-toolkit/compat/get" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/get");

/***/ }),

/***/ "es-toolkit/compat/isPlainObject":
/*!**************************************************!*\
  !*** external "es-toolkit/compat/isPlainObject" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/isPlainObject");

/***/ }),

/***/ "es-toolkit/compat/last":
/*!*****************************************!*\
  !*** external "es-toolkit/compat/last" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/last");

/***/ }),

/***/ "es-toolkit/compat/maxBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/maxBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/maxBy");

/***/ }),

/***/ "es-toolkit/compat/minBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/minBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/minBy");

/***/ }),

/***/ "es-toolkit/compat/omit":
/*!*****************************************!*\
  !*** external "es-toolkit/compat/omit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/omit");

/***/ }),

/***/ "es-toolkit/compat/range":
/*!******************************************!*\
  !*** external "es-toolkit/compat/range" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/range");

/***/ }),

/***/ "es-toolkit/compat/sortBy":
/*!*******************************************!*\
  !*** external "es-toolkit/compat/sortBy" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/sortBy");

/***/ }),

/***/ "es-toolkit/compat/sumBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/sumBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/sumBy");

/***/ }),

/***/ "es-toolkit/compat/throttle":
/*!*********************************************!*\
  !*** external "es-toolkit/compat/throttle" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/throttle");

/***/ }),

/***/ "es-toolkit/compat/uniqBy":
/*!*******************************************!*\
  !*** external "es-toolkit/compat/uniqBy" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/uniqBy");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("reselect");

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ "use-sync-external-store/shim/with-selector":
/*!*************************************************************!*\
  !*** external "use-sync-external-store/shim/with-selector" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim/with-selector");

/***/ }),

/***/ "victory-vendor/d3-scale":
/*!******************************************!*\
  !*** external "victory-vendor/d3-scale" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-scale");

/***/ }),

/***/ "victory-vendor/d3-shape":
/*!******************************************!*\
  !*** external "victory-vendor/d3-shape" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-shape");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/recharts"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();