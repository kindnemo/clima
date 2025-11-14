/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n/* Header Styles */\r\nheader{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 40px;\r\n    margin-bottom: 50px;\r\n}\r\n#logo {\r\n    width: 5rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n#search-container{\r\n    position: relative;\r\n    width: 400px;\r\n    max-width: 400px;\r\n    padding: 0.2rem 0.2rem;\r\n    border-radius: 30px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    backdrop-filter: blur(10px);\r\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#search{\r\n    width: 100%;\r\n    padding: 1rem 1.5rem;\r\n    border: none;\r\n    border-radius: 25px;\r\n    background: transparent;\r\n    color: white;\r\n    font-size: 1rem;\r\n    outline: none;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n\r\n/* Content Structure */\r\n#content{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    gap: 2rem;\r\n}\r\n\r\n.card-container-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    margin: 20px;\r\n}\r\n\r\n.details-div{\r\n    background: rgba(255, 255, 255, 0.1);\r\n    border-radius: 25px;\r\n    padding: 1.5rem;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#hero-detail-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1rem;\r\n}\r\n\r\n#hero-weather-div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items:center;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    gap: 2rem;\r\n}\r\n\r\n.hero-details-div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.hourly-forecast-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.hourly-forecast-div{\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border-radius: 25px;\r\n    padding: 1rem 3rem;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.forecast-card{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items:center;\r\n    justify-content: space-between;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border-radius: 25px;\r\n    padding: 0.5rem 3rem;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.air-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.highlight-card{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.five-day-forecast-icon-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 30px;\r\n}\r\n/* ICON STYLES */\r\n.icons {\r\n    width: 10rem;\r\n    height: 10rem;\r\n}    \r\n.detail-icons {\r\n    width: 8rem;\r\n    height: auto;\r\n}\r\n.hourly-icons {\r\n    width: 5rem;\r\n    height: 5rem;\r\n}\r\n\r\n.highlight-icons {\r\n    width: 4rem;\r\n    height: 4rem;\r\n}\r\n\r\n/* FONT STYLES */\r\n\r\n#current-temperature{\r\n    font-size: 4rem;\r\n    font-weight: 300;\r\n    color: black;\r\n    margin-bottom: 4.5rem;\r\n    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-details-value, .hourly-temperature, .five-day-temperature{\r\n    font-size: 1.2rem;\r\n    font-weight: 400;\r\n    color: black;\r\n}\r\n\r\n#air-quality-number{\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    color: green;\r\n    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\r\n    margin: 0;\r\n}\r\n#air-quality-remark, .highlight-title{\r\n    margin: 0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    opacity: 0.5;\r\n} \r\n.highlight-value{\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color: black;\r\n    margin: 0;\r\n}\r\n\r\n/* Background Animation */\r\n/* CLOUD ANIMATION */\r\n.background-animation {\r\n    position: fixed;        \r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;   \r\n    z-index: -1;\r\n}\r\n\r\n.cloud {\r\n    position: absolute;\r\n    background: rgba(255, 255, 255, 0.1);  \r\n    border-radius: 50px;                    \r\n    animation: float 20s infinite ease-in-out;  \r\n}\r\n\r\n.cloud1 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 10%;\r\n    animation: float1 24s infinite ease-in-out;\r\n    animation-delay: -10s;\r\n}\r\n.cloud2 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 20%;\r\n    animation: float2 23s infinite ease-in-out;\r\n    animation-delay: -5s;\r\n}\r\n.cloud3 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 40%;\r\n    animation: float3 20s infinite ease-in-out;\r\n    animation-delay: -14s;\r\n}\r\n.cloud4 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 60%;\r\n    animation: float4 23s infinite ease-in-out;\r\n    animation-delay: -8s;\r\n}\r\n.cloud5 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 80%;\r\n    animation: float5 24s infinite ease-in-out;\r\n    animation-delay: -12s;\r\n}\r\n.cloud6 {\r\n    width: 180px;       \r\n    height: 60px;        \r\n    background: rgba(255, 255, 255, 0.15);  \r\n    border-radius: 100px;  \r\n    filter: blur(2px);\r\n    top: 50%;\r\n    animation: float5 26s infinite ease-in-out;\r\n    animation-delay: -3s;\r\n}\r\n\r\n@keyframes float1 {\r\n    0%, 100% { \r\n        transform: translateX(0) translateY(0); \r\n    }\r\n    25% { \r\n        transform: translateX(100vw) translateY(-20px);  /* Move right + up */\r\n    }\r\n    50% { \r\n        transform: translateX(120vw) translateY(0);      /* Off-screen right */\r\n    }\r\n    75% { \r\n        transform: translateX(100vw) translateY(20px);   /* Move right + down */\r\n    }\r\n}\r\n\r\n@keyframes float2 {\r\n    0% { transform: translateX(0) translateY(0) scale(1); }\r\n    25% { transform: translateX(-25vw) translateY(25px) scale(0.95); }\r\n    50% { transform: translateX(-55vw) translateY(10px) scale(1); }\r\n    75% { transform: translateX(-85vw) translateY(-20px) scale(1.05); }\r\n    100% { transform: translateX(-120vw) translateY(0) scale(1); }\r\n}\r\n@keyframes float3 {\r\n    0% { transform: translateX(0) translateY(0) scale(1) rotate(0deg); }\r\n    33% { transform: translateX(40vw) translateY(-25px) scale(1.08) rotate(2deg); }\r\n    66% { transform: translateX(80vw) translateY(15px) scale(0.92) rotate(-2deg); }\r\n    100% { transform: translateX(120vw) translateY(0) scale(1) rotate(0deg); }\r\n}\r\n\r\n@keyframes float4 {\r\n    0% { transform: translateX(0) translateY(0) scale(1); }\r\n    30% { transform: translateX(35vw) translateY(18px) scale(1.03); }\r\n    60% { transform: translateX(70vw) translateY(-12px) scale(0.97); }\r\n    100% { transform: translateX(120vw) translateY(0) scale(1); }\r\n}\r\n\r\n@keyframes float5 {\r\n    0% { transform: translateX(0) translateY(0) scale(1); }\r\n    28% { transform: translateX(-30vw) translateY(-22px) scale(1.06); }\r\n    56% { transform: translateX(-65vw) translateY(8px) scale(0.94); }\r\n    100% { transform: translateX(-120vw) translateY(0) scale(1); }\r\n}\r\n\r\n\r\n.cloud1::before, .cloud2::before, .cloud3::before, .cloud4::before, .cloud5::before, .cloud6::before {\r\n    content: '';              /* Required for pseudo-elements */\r\n    position: absolute;       /* Position relative to parent cloud */\r\n    width: 100px;            /* Circle width */\r\n    height: 100px;           /* Circle height (perfect circle) */\r\n    top: -40px;              /* Moves UP to sit on top of base */\r\n    left: 20px;              /* Positioned from left edge */\r\n    background: rgba(255, 255, 255, 0.15);\r\n    border-radius: 100%;     /* Makes it a perfect circle */\r\n}\r\n\r\n.cloud1::after, .cloud2::after, .cloud3::after, .cloud4::after, .cloud5::after, .cloud6::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 120px;            /* Slightly bigger circle */\r\n    height: 120px;\r\n    top: -50px;              /* Even higher up */\r\n    right: 30px;             /* Positioned from right edge */\r\n    background: rgba(255, 255, 255, 0.15);\r\n    border-radius: 100%;\r\n}\r\n\r\n/* RAIN ANIMATION */\r\n#rain-container {\r\n    display: none;\r\n    position: fixed; \r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    z-index: -1; /* Place it behind the main content */\r\n    background:     /* Soft mist overlay */\r\n    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03), transparent 40%),\r\n    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.02), transparent 40%),\r\n    /* Main dark gradient */\r\n    linear-gradient(to bottom right, #1a1c1f, #0d0f10);\r\n}\r\n\r\n/* Styling for an individual raindrop */\r\n.drop {\r\n    position: absolute;\r\n    width: 2px;\r\n    height: 20px; /* Length of the rain streak */\r\n    background: linear-gradient(to bottom, rgba(173, 216, 230, 0) 0%, rgba(173, 216, 230, 0.8) 100%); /* Light Blue/Gray streak */\r\n    bottom: 100%; /* Start off-screen */\r\n    pointer-events: none; /* Allows clicking through the drops */\r\n    transform: rotate(15deg); /* Slight angle for a wind effect */\r\n    animation: fall linear infinite;\r\n}\r\n/* Moving the raindrops */\r\n@keyframes fall {\r\n    to {\r\n        transform: translateY(120vh) rotate(15deg);\r\n    }\r\n}\r\n\r\n#rain-container::before{\r\n  content: '';\r\n  position: fixed;\r\n  inset: 0;\r\n  background: linear-gradient(\r\n    115deg,\r\n    rgba(255, 255, 255, 0) 0%,\r\n    rgba(255, 255, 255, 0.008) 40%,\r\n    rgba(255, 255, 255, 0.025) 50%,\r\n    rgba(255, 255, 255, 0.008) 60%,\r\n    rgba(255, 255, 255, 0) 100%\r\n  );\r\n  background-size: 800% 800%;\r\n  filter: blur(12px); /* ✨ magic — diffuses edges */\r\n  opacity: 0.7;\r\n  animation: shimmerFlow 30s cubic-bezier(0.42, 0, 0.58, 1) infinite;\r\n  mix-blend-mode: screen;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes shimmerFlow {\r\n  0%   { background-position: 100% 0; }\r\n  50%  { background-position: 0 100%; }\r\n  100% { background-position: -100% 0; }\r\n}\r\n\r\n\r\n\r\n/* LIGHTNING ANIMATION  */\r\n/* Lightning Styling */\r\n#lightning-overlay {\r\n    display: none;\r\n    background-color: white;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    z-index: 10;\r\n    mix-blend-mode: screen;\r\n    opacity: 0;\r\n    will-change: opacity;\r\n    pointer-events: none;\r\n    animation: thunder-flash 30s linear infinite;\r\n\r\n}\r\n@keyframes thunder-flash {\r\n  0%, 54%    { opacity: 0; }\r\n  55%        { opacity: 0.9; }\r\n  55.5%      { opacity: 0; }\r\n\r\n  68%        { opacity: 0; }\r\n  69%        { opacity: 1; }\r\n  69.3%      { opacity: 0; }\r\n\r\n  82%        { opacity: 0; }\r\n  82.2%      { opacity: 0.6; }\r\n  82.5%      { opacity: 0; }\r\n\r\n  /* rare strong flash */\r\n  95%        { opacity: 0; }\r\n  95.5%      { opacity: 0.95; }\r\n  96%        { opacity: 0; }\r\n\r\n  100%       { opacity: 0; }\r\n}\r\n\r\n\r\n/* SNOWFALL ANimation */\r\n.snowflake {\r\n    position: fixed;\r\n    top: -10px;\r\n    color: white;\r\n    font-size: 1em;\r\n    user-select: none;\r\n    pointer-events: none;\r\n    animation: fall linear infinite;\r\n    opacity: 0.8;\r\n}\r\n\r\n@keyframes fall {\r\n    to {\r\n        transform: translateY(100vh) rotate(360deg);\r\n    }\r\n}\r\n\r\n/* Gradients based on the time  */\r\n\r\n#background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -200; /* Behind all other content */\r\n    transition: background 1s ease-in-out;\r\n}\r\n\r\n.background-evening{\r\n        background: linear-gradient(\r\n        to top, \r\n        #0A0A2A 0%,     \r\n        #3B0764 45%,    \r\n        #A900A9 70%,    \r\n        #FF8C00 100%    \r\n    );\r\n}\r\n.background-morning{\r\n                background: linear-gradient(\r\n                to bottom,\r\n                #87CEFA 0%,   \r\n                #A0D8FF 25%,  \r\n                #FBD7A1 55%,   \r\n                #FFE8C8 100%   \r\n            );\r\n}\r\n.background-afternoon{\r\n    background: linear-gradient(135deg, #87CEEB 0%, #4682B4 100%);\r\n}\r\n\r\n.background-night{\r\n                background: linear-gradient(\r\n                to bottom,\r\n                #0A0F2D 0%,    \r\n                #111B3F 30%,    \r\n                #1A2A55 60%,    \r\n                #0C0F1A 100%   \r\n            );\r\n}\r\n\r\n\r\n/* Loading screen styling */\r\n#loader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #0A0F2D; /* Dark background */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9999; /* On top of all other content */\r\n}\r\n\r\n\r\n.dots {\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.dots div {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    background: white;\r\n    animation: pulse 0.6s infinite alternate;\r\n}\r\n\r\n.dots div:nth-child(2) { animation-delay: 0.2s; }\r\n.dots div:nth-child(3) { animation-delay: 0.4s; }\r\n\r\n@keyframes pulse {\r\n    from { transform: scale(1); opacity: 0.4; }\r\n    to   { transform: scale(1.7); opacity: 1; }\r\n}\r\n`, \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"body {\\r\\n    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\\r\\n    min-height: 100vh;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n/* Header Styles */\\r\\nheader{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 40px;\\r\\n    margin-bottom: 50px;\\r\\n}\\r\\n#logo {\\r\\n    width: 5rem;\\r\\n    max-width: 100%;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n#search-container{\\r\\n    position: relative;\\r\\n    width: 400px;\\r\\n    max-width: 400px;\\r\\n    padding: 0.2rem 0.2rem;\\r\\n    border-radius: 30px;\\r\\n    background: rgba(255, 255, 255, 0.2);\\r\\n    backdrop-filter: blur(10px);\\r\\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n#search{\\r\\n    width: 100%;\\r\\n    padding: 1rem 1.5rem;\\r\\n    border: none;\\r\\n    border-radius: 25px;\\r\\n    background: transparent;\\r\\n    color: white;\\r\\n    font-size: 1rem;\\r\\n    outline: none;\\r\\n    transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n\\r\\n/* Content Structure */\\r\\n#content{\\r\\n    display: grid;\\r\\n    grid-template-columns: 2fr 1fr;\\r\\n    gap: 2rem;\\r\\n}\\r\\n\\r\\n.card-container-div{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2rem;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\n.details-div{\\r\\n    background: rgba(255, 255, 255, 0.1);\\r\\n    border-radius: 25px;\\r\\n    padding: 1.5rem;\\r\\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n#hero-detail-container{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n#hero-weather-div{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items:center;\\r\\n    justify-content: space-around;\\r\\n    text-align: center;\\r\\n    font-size: 1.2rem;\\r\\n    gap: 2rem;\\r\\n}\\r\\n\\r\\n.hero-details-div{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.hourly-forecast-container{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.hourly-forecast-div{\\r\\n    background: rgba(255, 255, 255, 0.2);\\r\\n    border-radius: 25px;\\r\\n    padding: 1rem 3rem;\\r\\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.forecast-card{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items:center;\\r\\n    justify-content: space-between;\\r\\n    background: rgba(255, 255, 255, 0.2);\\r\\n    border-radius: 25px;\\r\\n    padding: 0.5rem 3rem;\\r\\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\r\\n    margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.air-container{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.highlight-card{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.five-day-forecast-icon-container {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-right: 30px;\\r\\n}\\r\\n/* ICON STYLES */\\r\\n.icons {\\r\\n    width: 10rem;\\r\\n    height: 10rem;\\r\\n}    \\r\\n.detail-icons {\\r\\n    width: 8rem;\\r\\n    height: auto;\\r\\n}\\r\\n.hourly-icons {\\r\\n    width: 5rem;\\r\\n    height: 5rem;\\r\\n}\\r\\n\\r\\n.highlight-icons {\\r\\n    width: 4rem;\\r\\n    height: 4rem;\\r\\n}\\r\\n\\r\\n/* FONT STYLES */\\r\\n\\r\\n#current-temperature{\\r\\n    font-size: 4rem;\\r\\n    font-weight: 300;\\r\\n    color: black;\\r\\n    margin-bottom: 4.5rem;\\r\\n    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.hero-details-value, .hourly-temperature, .five-day-temperature{\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 400;\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n#air-quality-number{\\r\\n    font-size: 2rem;\\r\\n    font-weight: 800;\\r\\n    color: green;\\r\\n    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\\r\\n    margin: 0;\\r\\n}\\r\\n#air-quality-remark, .highlight-title{\\r\\n    margin: 0;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 600;\\r\\n    opacity: 0.5;\\r\\n} \\r\\n.highlight-value{\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 600;\\r\\n    color: black;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n/* Background Animation */\\r\\n/* CLOUD ANIMATION */\\r\\n.background-animation {\\r\\n    position: fixed;        \\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    pointer-events: none;   \\r\\n    z-index: -1;\\r\\n}\\r\\n\\r\\n.cloud {\\r\\n    position: absolute;\\r\\n    background: rgba(255, 255, 255, 0.1);  \\r\\n    border-radius: 50px;                    \\r\\n    animation: float 20s infinite ease-in-out;  \\r\\n}\\r\\n\\r\\n.cloud1 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 10%;\\r\\n    animation: float1 24s infinite ease-in-out;\\r\\n    animation-delay: -10s;\\r\\n}\\r\\n.cloud2 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 20%;\\r\\n    animation: float2 23s infinite ease-in-out;\\r\\n    animation-delay: -5s;\\r\\n}\\r\\n.cloud3 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 40%;\\r\\n    animation: float3 20s infinite ease-in-out;\\r\\n    animation-delay: -14s;\\r\\n}\\r\\n.cloud4 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 60%;\\r\\n    animation: float4 23s infinite ease-in-out;\\r\\n    animation-delay: -8s;\\r\\n}\\r\\n.cloud5 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 80%;\\r\\n    animation: float5 24s infinite ease-in-out;\\r\\n    animation-delay: -12s;\\r\\n}\\r\\n.cloud6 {\\r\\n    width: 180px;       \\r\\n    height: 60px;        \\r\\n    background: rgba(255, 255, 255, 0.15);  \\r\\n    border-radius: 100px;  \\r\\n    filter: blur(2px);\\r\\n    top: 50%;\\r\\n    animation: float5 26s infinite ease-in-out;\\r\\n    animation-delay: -3s;\\r\\n}\\r\\n\\r\\n@keyframes float1 {\\r\\n    0%, 100% { \\r\\n        transform: translateX(0) translateY(0); \\r\\n    }\\r\\n    25% { \\r\\n        transform: translateX(100vw) translateY(-20px);  /* Move right + up */\\r\\n    }\\r\\n    50% { \\r\\n        transform: translateX(120vw) translateY(0);      /* Off-screen right */\\r\\n    }\\r\\n    75% { \\r\\n        transform: translateX(100vw) translateY(20px);   /* Move right + down */\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes float2 {\\r\\n    0% { transform: translateX(0) translateY(0) scale(1); }\\r\\n    25% { transform: translateX(-25vw) translateY(25px) scale(0.95); }\\r\\n    50% { transform: translateX(-55vw) translateY(10px) scale(1); }\\r\\n    75% { transform: translateX(-85vw) translateY(-20px) scale(1.05); }\\r\\n    100% { transform: translateX(-120vw) translateY(0) scale(1); }\\r\\n}\\r\\n@keyframes float3 {\\r\\n    0% { transform: translateX(0) translateY(0) scale(1) rotate(0deg); }\\r\\n    33% { transform: translateX(40vw) translateY(-25px) scale(1.08) rotate(2deg); }\\r\\n    66% { transform: translateX(80vw) translateY(15px) scale(0.92) rotate(-2deg); }\\r\\n    100% { transform: translateX(120vw) translateY(0) scale(1) rotate(0deg); }\\r\\n}\\r\\n\\r\\n@keyframes float4 {\\r\\n    0% { transform: translateX(0) translateY(0) scale(1); }\\r\\n    30% { transform: translateX(35vw) translateY(18px) scale(1.03); }\\r\\n    60% { transform: translateX(70vw) translateY(-12px) scale(0.97); }\\r\\n    100% { transform: translateX(120vw) translateY(0) scale(1); }\\r\\n}\\r\\n\\r\\n@keyframes float5 {\\r\\n    0% { transform: translateX(0) translateY(0) scale(1); }\\r\\n    28% { transform: translateX(-30vw) translateY(-22px) scale(1.06); }\\r\\n    56% { transform: translateX(-65vw) translateY(8px) scale(0.94); }\\r\\n    100% { transform: translateX(-120vw) translateY(0) scale(1); }\\r\\n}\\r\\n\\r\\n\\r\\n.cloud1::before, .cloud2::before, .cloud3::before, .cloud4::before, .cloud5::before, .cloud6::before {\\r\\n    content: '';              /* Required for pseudo-elements */\\r\\n    position: absolute;       /* Position relative to parent cloud */\\r\\n    width: 100px;            /* Circle width */\\r\\n    height: 100px;           /* Circle height (perfect circle) */\\r\\n    top: -40px;              /* Moves UP to sit on top of base */\\r\\n    left: 20px;              /* Positioned from left edge */\\r\\n    background: rgba(255, 255, 255, 0.15);\\r\\n    border-radius: 100%;     /* Makes it a perfect circle */\\r\\n}\\r\\n\\r\\n.cloud1::after, .cloud2::after, .cloud3::after, .cloud4::after, .cloud5::after, .cloud6::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    width: 120px;            /* Slightly bigger circle */\\r\\n    height: 120px;\\r\\n    top: -50px;              /* Even higher up */\\r\\n    right: 30px;             /* Positioned from right edge */\\r\\n    background: rgba(255, 255, 255, 0.15);\\r\\n    border-radius: 100%;\\r\\n}\\r\\n\\r\\n/* RAIN ANIMATION */\\r\\n#rain-container {\\r\\n    display: none;\\r\\n    position: fixed; \\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    overflow: hidden;\\r\\n    z-index: -1; /* Place it behind the main content */\\r\\n    background:     /* Soft mist overlay */\\r\\n    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03), transparent 40%),\\r\\n    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.02), transparent 40%),\\r\\n    /* Main dark gradient */\\r\\n    linear-gradient(to bottom right, #1a1c1f, #0d0f10);\\r\\n}\\r\\n\\r\\n/* Styling for an individual raindrop */\\r\\n.drop {\\r\\n    position: absolute;\\r\\n    width: 2px;\\r\\n    height: 20px; /* Length of the rain streak */\\r\\n    background: linear-gradient(to bottom, rgba(173, 216, 230, 0) 0%, rgba(173, 216, 230, 0.8) 100%); /* Light Blue/Gray streak */\\r\\n    bottom: 100%; /* Start off-screen */\\r\\n    pointer-events: none; /* Allows clicking through the drops */\\r\\n    transform: rotate(15deg); /* Slight angle for a wind effect */\\r\\n    animation: fall linear infinite;\\r\\n}\\r\\n/* Moving the raindrops */\\r\\n@keyframes fall {\\r\\n    to {\\r\\n        transform: translateY(120vh) rotate(15deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n#rain-container::before{\\r\\n  content: '';\\r\\n  position: fixed;\\r\\n  inset: 0;\\r\\n  background: linear-gradient(\\r\\n    115deg,\\r\\n    rgba(255, 255, 255, 0) 0%,\\r\\n    rgba(255, 255, 255, 0.008) 40%,\\r\\n    rgba(255, 255, 255, 0.025) 50%,\\r\\n    rgba(255, 255, 255, 0.008) 60%,\\r\\n    rgba(255, 255, 255, 0) 100%\\r\\n  );\\r\\n  background-size: 800% 800%;\\r\\n  filter: blur(12px); /* ✨ magic — diffuses edges */\\r\\n  opacity: 0.7;\\r\\n  animation: shimmerFlow 30s cubic-bezier(0.42, 0, 0.58, 1) infinite;\\r\\n  mix-blend-mode: screen;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n@keyframes shimmerFlow {\\r\\n  0%   { background-position: 100% 0; }\\r\\n  50%  { background-position: 0 100%; }\\r\\n  100% { background-position: -100% 0; }\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* LIGHTNING ANIMATION  */\\r\\n/* Lightning Styling */\\r\\n#lightning-overlay {\\r\\n    display: none;\\r\\n    background-color: white;\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    position: fixed;\\r\\n    z-index: 10;\\r\\n    mix-blend-mode: screen;\\r\\n    opacity: 0;\\r\\n    will-change: opacity;\\r\\n    pointer-events: none;\\r\\n    animation: thunder-flash 30s linear infinite;\\r\\n\\r\\n}\\r\\n@keyframes thunder-flash {\\r\\n  0%, 54%    { opacity: 0; }\\r\\n  55%        { opacity: 0.9; }\\r\\n  55.5%      { opacity: 0; }\\r\\n\\r\\n  68%        { opacity: 0; }\\r\\n  69%        { opacity: 1; }\\r\\n  69.3%      { opacity: 0; }\\r\\n\\r\\n  82%        { opacity: 0; }\\r\\n  82.2%      { opacity: 0.6; }\\r\\n  82.5%      { opacity: 0; }\\r\\n\\r\\n  /* rare strong flash */\\r\\n  95%        { opacity: 0; }\\r\\n  95.5%      { opacity: 0.95; }\\r\\n  96%        { opacity: 0; }\\r\\n\\r\\n  100%       { opacity: 0; }\\r\\n}\\r\\n\\r\\n\\r\\n/* SNOWFALL ANimation */\\r\\n.snowflake {\\r\\n    position: fixed;\\r\\n    top: -10px;\\r\\n    color: white;\\r\\n    font-size: 1em;\\r\\n    user-select: none;\\r\\n    pointer-events: none;\\r\\n    animation: fall linear infinite;\\r\\n    opacity: 0.8;\\r\\n}\\r\\n\\r\\n@keyframes fall {\\r\\n    to {\\r\\n        transform: translateY(100vh) rotate(360deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n/* Gradients based on the time  */\\r\\n\\r\\n#background {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: -200; /* Behind all other content */\\r\\n    transition: background 1s ease-in-out;\\r\\n}\\r\\n\\r\\n.background-evening{\\r\\n        background: linear-gradient(\\r\\n        to top, \\r\\n        #0A0A2A 0%,     \\r\\n        #3B0764 45%,    \\r\\n        #A900A9 70%,    \\r\\n        #FF8C00 100%    \\r\\n    );\\r\\n}\\r\\n.background-morning{\\r\\n                background: linear-gradient(\\r\\n                to bottom,\\r\\n                #87CEFA 0%,   \\r\\n                #A0D8FF 25%,  \\r\\n                #FBD7A1 55%,   \\r\\n                #FFE8C8 100%   \\r\\n            );\\r\\n}\\r\\n.background-afternoon{\\r\\n    background: linear-gradient(135deg, #87CEEB 0%, #4682B4 100%);\\r\\n}\\r\\n\\r\\n.background-night{\\r\\n                background: linear-gradient(\\r\\n                to bottom,\\r\\n                #0A0F2D 0%,    \\r\\n                #111B3F 30%,    \\r\\n                #1A2A55 60%,    \\r\\n                #0C0F1A 100%   \\r\\n            );\\r\\n}\\r\\n\\r\\n\\r\\n/* Loading screen styling */\\r\\n#loader {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    background-color: #0A0F2D; /* Dark background */\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    z-index: 9999; /* On top of all other content */\\r\\n}\\r\\n\\r\\n\\r\\n.dots {\\r\\n    display: flex;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n.dots div {\\r\\n    width: 15px;\\r\\n    height: 15px;\\r\\n    border-radius: 50%;\\r\\n    background: white;\\r\\n    animation: pulse 0.6s infinite alternate;\\r\\n}\\r\\n\\r\\n.dots div:nth-child(2) { animation-delay: 0.2s; }\\r\\n.dots div:nth-child(3) { animation-delay: 0.4s; }\\r\\n\\r\\n@keyframes pulse {\\r\\n    from { transform: scale(1); opacity: 0.4; }\\r\\n    to   { transform: scale(1.7); opacity: 1; }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1YsVUFBVTtBQUNWLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1YsVUFBVTtBQUNWLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNU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S0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyx3QkFBd0IsTUFBTSxLQUFLLHdCQUF3QixNQUFNLEtBQUssd0JBQXdCLE1BQU0sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsUUFBUSxLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksdUJBQXVCLFdBQVcsc0JBQXNCLHVCQUF1QixhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSx1QkFBdUIsU0FBUyxPQUFPLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxzQkFBc0IseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxZQUFZLHlCQUF5QixXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixTQUFTLFlBQVksYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixzQkFBc0IscUJBQXFCLHFCQUFxQixzQkFBc0IscUJBQXFCLHFCQUFxQixzQkFBc0IsYUFBYSxxQkFBcUIscUJBQXFCLHNCQUFzQixxQkFBcUIsUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsc0JBQXNCLGFB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QUE2QixxREFBcUQsU0FBUyw4QkFBOEIsbUJBQW1CLGFBQWEsbUJBQW1CLGVBQWUsbUJBQW1CLGFBQWEsdUJBQXVCLGFBQWEsbUJBQW1CLGFBQWEsbUJBQW1CLGFBQWEsdUJBQXVCLGFBQWEsbUJBQW1CLGVBQWUsbUJBQW1CLGFBQWEsb0RBQW9ELGFBQWEsbUJBQW1CLGdCQUFnQixtQkFBbUIsYUFBYSx1QkFBdUIsYUFBYSxLQUFLLG9EQUFvRCx3QkFBd0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsMEJBQTBCLDZCQUE2Qix3Q0FBd0MscUJBQXFCLEtBQUsseUJBQXlCLFlBQVksd0RBQXdELFNBQVMsS0FBSywrREFBK0Qsd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsdUJBQXVCLDRFQUE0RSxLQUFLLDRCQUE0QixzTEFBc0wsS0FBSyx3QkFBd0IsME9BQTBPLEtBQUssMEJBQTBCLHNFQUFzRSxLQUFLLDBCQUEwQiw4T0FBOE8sS0FBSyxxREFBcUQsd0JBQXdCLGVBQWUsZ0JBQWdCLHFCQUFxQixzQkFBc0IsbUNBQW1DLDJDQUEyQyxnQ0FBZ0MsNEJBQTRCLHVCQUF1QixzQ0FBc0MsbUJBQW1CLHNCQUFzQixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsMEJBQTBCLGlEQUFpRCxLQUFLLGlDQUFpQyx3QkFBd0IsNkJBQTZCLHdCQUF3QiwwQkFBMEIsZUFBZSxxQkFBcUIsZUFBZSxlQUFlLHVCQUF1QixhQUFhLEtBQUssdUJBQXVCO0FBQzdxbUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vc3JjL3N0eWxlcy5jc3M/ZTlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxlcyAqL1xyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuI2xvZ28ge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNzZWFyY2gtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbiNzZWFyY2h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcblxyXG4vKiBDb250ZW50IFN0cnVjdHVyZSAqL1xyXG4jY29udGVudHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmRldGFpbHMtZGl2e1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4jaGVyby1kZXRhaWwtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNoZXJvLXdlYXRoZXItZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uaGVyby1kZXRhaWxzLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWRpdntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZvcmVjYXN0LWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmFpci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQtY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpdmUtZGF5LWZvcmVjYXN0LWljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi8qIElDT04gU1RZTEVTICovXHJcbi5pY29ucyB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG59ICAgIFxyXG4uZGV0YWlsLWljb25zIHtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5ob3VybHktaWNvbnMge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi5oaWdobGlnaHQtaWNvbnMge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi8qIEZPTlQgU1RZTEVTICovXHJcblxyXG4jY3VycmVudC10ZW1wZXJhdHVyZXtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0LjVyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5oZXJvLWRldGFpbHMtdmFsdWUsIC5ob3VybHktdGVtcGVyYXR1cmUsIC5maXZlLWRheS10ZW1wZXJhdHVyZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2Fpci1xdWFsaXR5LW51bWJlcntcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuI2Fpci1xdWFsaXR5LXJlbWFyaywgLmhpZ2hsaWdodC10aXRsZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0gXHJcbi5oaWdobGlnaHQtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEJhY2tncm91bmQgQW5pbWF0aW9uICovXHJcbi8qIENMT1VEIEFOSU1BVElPTiAqL1xyXG4uYmFja2dyb3VuZC1hbmltYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAgICAgICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgICBcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY2xvdWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBhbmltYXRpb246IGZsb2F0IDIwcyBpbmZpbml0ZSBlYXNlLWluLW91dDsgIFxyXG59XHJcblxyXG4uY2xvdWQxIHtcclxuICAgIHdpZHRoOiAxODBweDsgICAgICAgXHJcbiAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdDEgMjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTBzO1xyXG59XHJcbi5jbG91ZDIge1xyXG4gICAgd2lkdGg6IDE4MHB4OyAgICAgICBcclxuICAgIGhlaWdodDogNjBweDsgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0MiAyM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC01cztcclxufVxyXG4uY2xvdWQzIHtcclxuICAgIHdpZHRoOiAxODBweDsgICAgICAgXHJcbiAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdDMgMjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTRzO1xyXG59XHJcbi5jbG91ZDQge1xyXG4gICAgd2lkdGg6IDE4MHB4OyAgICAgICBcclxuICAgIGhlaWdodDogNjBweDsgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0NCAyM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC04cztcclxufVxyXG4uY2xvdWQ1IHtcclxuICAgIHdpZHRoOiAxODBweDsgICAgICAgXHJcbiAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgIHRvcDogODAlO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdDUgMjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTJzO1xyXG59XHJcbi5jbG91ZDYge1xyXG4gICAgd2lkdGg6IDE4MHB4OyAgICAgICBcclxuICAgIGhlaWdodDogNjBweDsgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0NSAyNnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0zcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdDEge1xyXG4gICAgMCUsIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTsgXHJcbiAgICB9XHJcbiAgICAyNSUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpIHRyYW5zbGF0ZVkoLTIwcHgpOyAgLyogTW92ZSByaWdodCArIHVwICovXHJcbiAgICB9XHJcbiAgICA1MCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwdncpIHRyYW5zbGF0ZVkoMCk7ICAgICAgLyogT2ZmLXNjcmVlbiByaWdodCAqL1xyXG4gICAgfVxyXG4gICAgNzUlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KSB0cmFuc2xhdGVZKDIwcHgpOyAgIC8qIE1vdmUgcmlnaHQgKyBkb3duICovXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjV2dykgdHJhbnNsYXRlWSgyNXB4KSBzY2FsZSgwLjk1KTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01NXZ3KSB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDEpOyB9XHJcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTg1dncpIHRyYW5zbGF0ZVkoLTIwcHgpIHNjYWxlKDEuMDUpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjB2dykgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmxvYXQzIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDBkZWcpOyB9XHJcbiAgICAzMyUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDB2dykgdHJhbnNsYXRlWSgtMjVweCkgc2NhbGUoMS4wOCkgcm90YXRlKDJkZWcpOyB9XHJcbiAgICA2NiUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODB2dykgdHJhbnNsYXRlWSgxNXB4KSBzY2FsZSgwLjkyKSByb3RhdGUoLTJkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHZ3KSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0NCB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzV2dykgdHJhbnNsYXRlWSgxOHB4KSBzY2FsZSgxLjAzKTsgfVxyXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcwdncpIHRyYW5zbGF0ZVkoLTEycHgpIHNjYWxlKDAuOTcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHZ3KSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQ1IHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDI4JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzB2dykgdHJhbnNsYXRlWSgtMjJweCkgc2NhbGUoMS4wNik7IH1cclxuICAgIDU2JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjV2dykgdHJhbnNsYXRlWSg4cHgpIHNjYWxlKDAuOTQpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjB2dykgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG5cclxuLmNsb3VkMTo6YmVmb3JlLCAuY2xvdWQyOjpiZWZvcmUsIC5jbG91ZDM6OmJlZm9yZSwgLmNsb3VkNDo6YmVmb3JlLCAuY2xvdWQ1OjpiZWZvcmUsIC5jbG91ZDY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJzsgICAgICAgICAgICAgIC8qIFJlcXVpcmVkIGZvciBwc2V1ZG8tZWxlbWVudHMgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgLyogUG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IGNsb3VkICovXHJcbiAgICB3aWR0aDogMTAwcHg7ICAgICAgICAgICAgLyogQ2lyY2xlIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyAgICAgICAgICAgLyogQ2lyY2xlIGhlaWdodCAocGVyZmVjdCBjaXJjbGUpICovXHJcbiAgICB0b3A6IC00MHB4OyAgICAgICAgICAgICAgLyogTW92ZXMgVVAgdG8gc2l0IG9uIHRvcCBvZiBiYXNlICovXHJcbiAgICBsZWZ0OiAyMHB4OyAgICAgICAgICAgICAgLyogUG9zaXRpb25lZCBmcm9tIGxlZnQgZWRnZSAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7ICAgICAvKiBNYWtlcyBpdCBhIHBlcmZlY3QgY2lyY2xlICovXHJcbn1cclxuXHJcbi5jbG91ZDE6OmFmdGVyLCAuY2xvdWQyOjphZnRlciwgLmNsb3VkMzo6YWZ0ZXIsIC5jbG91ZDQ6OmFmdGVyLCAuY2xvdWQ1OjphZnRlciwgLmNsb3VkNjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTIwcHg7ICAgICAgICAgICAgLyogU2xpZ2h0bHkgYmlnZ2VyIGNpcmNsZSAqL1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHRvcDogLTUwcHg7ICAgICAgICAgICAgICAvKiBFdmVuIGhpZ2hlciB1cCAqL1xyXG4gICAgcmlnaHQ6IDMwcHg7ICAgICAgICAgICAgIC8qIFBvc2l0aW9uZWQgZnJvbSByaWdodCBlZGdlICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLyogUkFJTiBBTklNQVRJT04gKi9cclxuI3JhaW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIGl0IGJlaGluZCB0aGUgbWFpbiBjb250ZW50ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAgICAgLyogU29mdCBtaXN0IG92ZXJsYXkgKi9cclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSwgdHJhbnNwYXJlbnQgNDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzAlIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSwgdHJhbnNwYXJlbnQgNDAlKSxcclxuICAgIC8qIE1haW4gZGFyayBncmFkaWVudCAqL1xyXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzFhMWMxZiwgIzBkMGYxMCk7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIGFuIGluZGl2aWR1YWwgcmFpbmRyb3AgKi9cclxuLmRyb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMjBweDsgLyogTGVuZ3RoIG9mIHRoZSByYWluIHN0cmVhayAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNzMsIDIxNiwgMjMwLCAwKSAwJSwgcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjgpIDEwMCUpOyAvKiBMaWdodCBCbHVlL0dyYXkgc3RyZWFrICovXHJcbiAgICBib3R0b206IDEwMCU7IC8qIFN0YXJ0IG9mZi1zY3JlZW4gKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBBbGxvd3MgY2xpY2tpbmcgdGhyb3VnaCB0aGUgZHJvcHMgKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsgLyogU2xpZ2h0IGFuZ2xlIGZvciBhIHdpbmQgZWZmZWN0ICovXHJcbiAgICBhbmltYXRpb246IGZhbGwgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi8qIE1vdmluZyB0aGUgcmFpbmRyb3BzICovXHJcbkBrZXlmcmFtZXMgZmFsbCB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMHZoKSByb3RhdGUoMTVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jcmFpbi1jb250YWluZXI6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTE1ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMDgpIDQwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpIDUwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMDgpIDYwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MDAlIDgwMCU7XHJcbiAgZmlsdGVyOiBibHVyKDEycHgpOyAvKiDinKggbWFnaWMg4oCUIGRpZmZ1c2VzIGVkZ2VzICovXHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lckZsb3cgMzBzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSBpbmZpbml0ZTtcclxuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXJGbG93IHtcclxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwOyB9XHJcbiAgNTAlICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogTElHSFROSU5HIEFOSU1BVElPTiAgKi9cclxuLyogTGlnaHRuaW5nIFN0eWxpbmcgKi9cclxuI2xpZ2h0bmluZy1vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogdGh1bmRlci1mbGFzaCAzMHMgbGluZWFyIGluZmluaXRlO1xyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIHRodW5kZXItZmxhc2gge1xyXG4gIDAlLCA1NCUgICAgeyBvcGFjaXR5OiAwOyB9XHJcbiAgNTUlICAgICAgICB7IG9wYWNpdHk6IDAuOTsgfVxyXG4gIDU1LjUlICAgICAgeyBvcGFjaXR5OiAwOyB9XHJcblxyXG4gIDY4JSAgICAgICAgeyBvcGFjaXR5OiAwOyB9XHJcbiAgNjklICAgICAgICB7IG9wYWNpdHk6IDE7IH1cclxuICA2OS4zJSAgICAgIHsgb3BhY2l0eTogMDsgfVxyXG5cclxuICA4MiUgICAgICAgIHsgb3BhY2l0eTogMDsgfVxyXG4gIDgyLjIlICAgICAgeyBvcGFjaXR5OiAwLjY7IH1cclxuICA4Mi41JSAgICAgIHsgb3BhY2l0eTogMDsgfVxyXG5cclxuICAvKiByYXJlIHN0cm9uZyBmbGFzaCAqL1xyXG4gIDk1JSAgICAgICAgeyBvcGFjaXR5OiAwOyB9XHJcbiAgOTUuNSUgICAgICB7IG9wYWNpdHk6IDAuOTU7IH1cclxuICA5NiUgICAgICAgIHsgb3BhY2l0eTogMDsgfVxyXG5cclxuICAxMDAlICAgICAgIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG5cclxuLyogU05PV0ZBTEwgQU5pbWF0aW9uICovXHJcbi5zbm93Zmxha2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogZmFsbCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFsbCB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKSByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogR3JhZGllbnRzIGJhc2VkIG9uIHRoZSB0aW1lICAqL1xyXG5cclxuI2JhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwMDsgLyogQmVoaW5kIGFsbCBvdGhlciBjb250ZW50ICovXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1ldmVuaW5ne1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsIFxyXG4gICAgICAgICMwQTBBMkEgMCUsICAgICBcclxuICAgICAgICAjM0IwNzY0IDQ1JSwgICAgXHJcbiAgICAgICAgI0E5MDBBOSA3MCUsICAgIFxyXG4gICAgICAgICNGRjhDMDAgMTAwJSAgICBcclxuICAgICk7XHJcbn1cclxuLmJhY2tncm91bmQtbW9ybmluZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICM4N0NFRkEgMCUsICAgXHJcbiAgICAgICAgICAgICAgICAjQTBEOEZGIDI1JSwgIFxyXG4gICAgICAgICAgICAgICAgI0ZCRDdBMSA1NSUsICAgXHJcbiAgICAgICAgICAgICAgICAjRkZFOEM4IDEwMCUgICBcclxuICAgICAgICAgICAgKTtcclxufVxyXG4uYmFja2dyb3VuZC1hZnRlcm5vb257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODdDRUVCIDAlLCAjNDY4MkI0IDEwMCUpO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1uaWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICMwQTBGMkQgMCUsICAgIFxyXG4gICAgICAgICAgICAgICAgIzExMUIzRiAzMCUsICAgIFxyXG4gICAgICAgICAgICAgICAgIzFBMkE1NSA2MCUsICAgIFxyXG4gICAgICAgICAgICAgICAgIzBDMEYxQSAxMDAlICAgXHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuXHJcblxyXG4vKiBMb2FkaW5nIHNjcmVlbiBzdHlsaW5nICovXHJcbiNsb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEEwRjJEOyAvKiBEYXJrIGJhY2tncm91bmQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OyAvKiBPbiB0b3Agb2YgYWxsIG90aGVyIGNvbnRlbnQgKi9cclxufVxyXG5cclxuXHJcbi5kb3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5kb3RzIGRpdiB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmRvdHMgZGl2Om50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4uZG90cyBkaXY6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAwLjQ7IH1cclxuICAgIHRvICAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0dBQWdHO0lBQ2hHLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7O0FBR0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNs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QUFPLHFCQUFxQixFQUFFLFVBQVUsRUFBRTtBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheScsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgU3R5bGVzICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG4jbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2h7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIENvbnRlbnQgU3RydWN0dXJlICovXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250YWluZXItZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtZGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLWRldGFpbC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8td2VhdGhlci1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tZGV0YWlscy1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1kaXZ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNhcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFpci1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodC1jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXZlLWRheS1mb3JlY2FzdC1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi8qIElDT04gU1RZTEVTICovXFxyXFxuLmljb25zIHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbn0gICAgXFxyXFxuLmRldGFpbC1pY29ucyB7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi5ob3VybHktaWNvbnMge1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0LWljb25zIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9OVCBTVFlMRVMgKi9cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wZXJhdHVyZXtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQuNXJlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZXRhaWxzLXZhbHVlLCAuaG91cmx5LXRlbXBlcmF0dXJlLCAuZml2ZS1kYXktdGVtcGVyYXR1cmV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNhaXItcXVhbGl0eS1udW1iZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2Fpci1xdWFsaXR5LXJlbWFyaywgLmhpZ2hsaWdodC10aXRsZXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59IFxcclxcbi5oaWdobGlnaHQtdmFsdWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFja2dyb3VuZCBBbmltYXRpb24gKi9cXHJcXG4vKiBDTE9VRCBBTklNQVRJT04gKi9cXHJcXG4uYmFja2dyb3VuZC1hbmltYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7ICAgICAgICBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgICBcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5jbG91ZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7ICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgYW5pbWF0aW9uOiBmbG9hdCAyMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3VkMSB7XFxyXFxuICAgIHdpZHRoOiAxODBweDsgICAgICAgXFxyXFxuICAgIGhlaWdodDogNjBweDsgICAgICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXFxyXFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBmbG9hdDEgMjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xMHM7XFxyXFxufVxcclxcbi5jbG91ZDIge1xcclxcbiAgICB3aWR0aDogMTgwcHg7ICAgICAgIFxcclxcbiAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICBcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxcclxcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGFuaW1hdGlvbjogZmxvYXQyIDIzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XFxyXFxufVxcclxcbi5jbG91ZDMge1xcclxcbiAgICB3aWR0aDogMTgwcHg7ICAgICAgIFxcclxcbiAgICBoZWlnaHQ6IDYwcHg7ICAgICAgICBcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxcclxcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogZmxvYXQzIDIwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTRzO1xcclxcbn1cXHJcXG4uY2xvdWQ0IHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4OyAgICAgICBcXHJcXG4gICAgaGVpZ2h0OiA2MHB4OyAgICAgICAgXFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxuICAgIHRvcDogNjAlO1xcclxcbiAgICBhbmltYXRpb246IGZsb2F0NCAyM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLThzO1xcclxcbn1cXHJcXG4uY2xvdWQ1IHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4OyAgICAgICBcXHJcXG4gICAgaGVpZ2h0OiA2MHB4OyAgICAgICAgXFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxuICAgIHRvcDogODAlO1xcclxcbiAgICBhbmltYXRpb246IGZsb2F0NSAyNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEycztcXHJcXG59XFxyXFxuLmNsb3VkNiB7XFxyXFxuICAgIHdpZHRoOiAxODBweDsgICAgICAgXFxyXFxuICAgIGhlaWdodDogNjBweDsgICAgICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXFxyXFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBmbG9hdDUgMjZzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0zcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdDEge1xcclxcbiAgICAwJSwgMTAwJSB7IFxcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7IFxcclxcbiAgICB9XFxyXFxuICAgIDI1JSB7IFxcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KSB0cmFuc2xhdGVZKC0yMHB4KTsgIC8qIE1vdmUgcmlnaHQgKyB1cCAqL1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7IFxcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHZ3KSB0cmFuc2xhdGVZKDApOyAgICAgIC8qIE9mZi1zY3JlZW4gcmlnaHQgKi9cXHJcXG4gICAgfVxcclxcbiAgICA3NSUgeyBcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dykgdHJhbnNsYXRlWSgyMHB4KTsgICAvKiBNb3ZlIHJpZ2h0ICsgZG93biAqL1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXQyIHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxcclxcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1dncpIHRyYW5zbGF0ZVkoMjVweCkgc2NhbGUoMC45NSk7IH1cXHJcXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01NXZ3KSB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDEpOyB9XFxyXFxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODV2dykgdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMS4wNSk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwdncpIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmbG9hdDMge1xcclxcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgICAzMyUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDB2dykgdHJhbnNsYXRlWSgtMjVweCkgc2NhbGUoMS4wOCkgcm90YXRlKDJkZWcpOyB9XFxyXFxuICAgIDY2JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHZ3KSB0cmFuc2xhdGVZKDE1cHgpIHNjYWxlKDAuOTIpIHJvdGF0ZSgtMmRlZyk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjB2dykgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdDQge1xcclxcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XFxyXFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNXZ3KSB0cmFuc2xhdGVZKDE4cHgpIHNjYWxlKDEuMDMpOyB9XFxyXFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KSB0cmFuc2xhdGVZKC0xMnB4KSBzY2FsZSgwLjk3KTsgfVxcclxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHZ3KSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXQ1IHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxcclxcbiAgICAyOCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwdncpIHRyYW5zbGF0ZVkoLTIycHgpIHNjYWxlKDEuMDYpOyB9XFxyXFxuICAgIDU2JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjV2dykgdHJhbnNsYXRlWSg4cHgpIHNjYWxlKDAuOTQpOyB9XFxyXFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMHZ3KSB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jbG91ZDE6OmJlZm9yZSwgLmNsb3VkMjo6YmVmb3JlLCAuY2xvdWQzOjpiZWZvcmUsIC5jbG91ZDQ6OmJlZm9yZSwgLmNsb3VkNTo6YmVmb3JlLCAuY2xvdWQ2OjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJzsgICAgICAgICAgICAgIC8qIFJlcXVpcmVkIGZvciBwc2V1ZG8tZWxlbWVudHMgKi9cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAvKiBQb3NpdGlvbiByZWxhdGl2ZSB0byBwYXJlbnQgY2xvdWQgKi9cXHJcXG4gICAgd2lkdGg6IDEwMHB4OyAgICAgICAgICAgIC8qIENpcmNsZSB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4OyAgICAgICAgICAgLyogQ2lyY2xlIGhlaWdodCAocGVyZmVjdCBjaXJjbGUpICovXFxyXFxuICAgIHRvcDogLTQwcHg7ICAgICAgICAgICAgICAvKiBNb3ZlcyBVUCB0byBzaXQgb24gdG9wIG9mIGJhc2UgKi9cXHJcXG4gICAgbGVmdDogMjBweDsgICAgICAgICAgICAgIC8qIFBvc2l0aW9uZWQgZnJvbSBsZWZ0IGVkZ2UgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgICAgIC8qIE1ha2VzIGl0IGEgcGVyZmVjdCBjaXJjbGUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNsb3VkMTo6YWZ0ZXIsIC5jbG91ZDI6OmFmdGVyLCAuY2xvdWQzOjphZnRlciwgLmNsb3VkNDo6YWZ0ZXIsIC5jbG91ZDU6OmFmdGVyLCAuY2xvdWQ2OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMjBweDsgICAgICAgICAgICAvKiBTbGlnaHRseSBiaWdnZXIgY2lyY2xlICovXFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIHRvcDogLTUwcHg7ICAgICAgICAgICAgICAvKiBFdmVuIGhpZ2hlciB1cCAqL1xcclxcbiAgICByaWdodDogMzBweDsgICAgICAgICAgICAgLyogUG9zaXRpb25lZCBmcm9tIHJpZ2h0IGVkZ2UgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUkFJTiBBTklNQVRJT04gKi9cXHJcXG4jcmFpbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIGl0IGJlaGluZCB0aGUgbWFpbiBjb250ZW50ICovXFxyXFxuICAgIGJhY2tncm91bmQ6ICAgICAvKiBTb2Z0IG1pc3Qgb3ZlcmxheSAqL1xcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyksIHRyYW5zcGFyZW50IDQwJSksXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzAlIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSwgdHJhbnNwYXJlbnQgNDAlKSxcXHJcXG4gICAgLyogTWFpbiBkYXJrIGdyYWRpZW50ICovXFxyXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYTFjMWYsICMwZDBmMTApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsaW5nIGZvciBhbiBpbmRpdmlkdWFsIHJhaW5kcm9wICovXFxyXFxuLmRyb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIGhlaWdodDogMjBweDsgLyogTGVuZ3RoIG9mIHRoZSByYWluIHN0cmVhayAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE3MywgMjE2LCAyMzAsIDApIDAlLCByZ2JhKDE3MywgMjE2LCAyMzAsIDAuOCkgMTAwJSk7IC8qIExpZ2h0IEJsdWUvR3JheSBzdHJlYWsgKi9cXHJcXG4gICAgYm90dG9tOiAxMDAlOyAvKiBTdGFydCBvZmYtc2NyZWVuICovXFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBBbGxvd3MgY2xpY2tpbmcgdGhyb3VnaCB0aGUgZHJvcHMgKi9cXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpOyAvKiBTbGlnaHQgYW5nbGUgZm9yIGEgd2luZCBlZmZlY3QgKi9cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWxsIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLyogTW92aW5nIHRoZSByYWluZHJvcHMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZhbGwge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwdmgpIHJvdGF0ZSgxNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3JhaW4tY29udGFpbmVyOjpiZWZvcmV7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMTVkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMDgpIDQwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkgNTAlLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDA4KSA2MCUsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogODAwJSA4MDAlO1xcclxcbiAgZmlsdGVyOiBibHVyKDEycHgpOyAvKiDinKggbWFnaWMg4oCUIGRpZmZ1c2VzIGVkZ2VzICovXFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxuICBhbmltYXRpb246IHNoaW1tZXJGbG93IDMwcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSkgaW5maW5pdGU7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hpbW1lckZsb3cge1xcclxcbiAgMCUgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDsgfVxcclxcbiAgNTAlICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTsgfVxcclxcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDA7IH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTElHSFROSU5HIEFOSU1BVElPTiAgKi9cXHJcXG4vKiBMaWdodG5pbmcgU3R5bGluZyAqL1xcclxcbiNsaWdodG5pbmctb3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgYW5pbWF0aW9uOiB0aHVuZGVyLWZsYXNoIDMwcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdGh1bmRlci1mbGFzaCB7XFxyXFxuICAwJSwgNTQlICAgIHsgb3BhY2l0eTogMDsgfVxcclxcbiAgNTUlICAgICAgICB7IG9wYWNpdHk6IDAuOTsgfVxcclxcbiAgNTUuNSUgICAgICB7IG9wYWNpdHk6IDA7IH1cXHJcXG5cXHJcXG4gIDY4JSAgICAgICAgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICA2OSUgICAgICAgIHsgb3BhY2l0eTogMTsgfVxcclxcbiAgNjkuMyUgICAgICB7IG9wYWNpdHk6IDA7IH1cXHJcXG5cXHJcXG4gIDgyJSAgICAgICAgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICA4Mi4yJSAgICAgIHsgb3BhY2l0eTogMC42OyB9XFxyXFxuICA4Mi41JSAgICAgIHsgb3BhY2l0eTogMDsgfVxcclxcblxcclxcbiAgLyogcmFyZSBzdHJvbmcgZmxhc2ggKi9cXHJcXG4gIDk1JSAgICAgICAgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICA5NS41JSAgICAgIHsgb3BhY2l0eTogMC45NTsgfVxcclxcbiAgOTYlICAgICAgICB7IG9wYWNpdHk6IDA7IH1cXHJcXG5cXHJcXG4gIDEwMCUgICAgICAgeyBvcGFjaXR5OiAwOyB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNOT1dGQUxMIEFOaW1hdGlvbiAqL1xcclxcbi5zbm93Zmxha2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogLTEwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWxsIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhbGwge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpIHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIEdyYWRpZW50cyBiYXNlZCBvbiB0aGUgdGltZSAgKi9cXHJcXG5cXHJcXG4jYmFja2dyb3VuZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMjAwOyAvKiBCZWhpbmQgYWxsIG90aGVyIGNvbnRlbnQgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtZXZlbmluZ3tcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAgIHRvIHRvcCwgXFxyXFxuICAgICAgICAjMEEwQTJBIDAlLCAgICAgXFxyXFxuICAgICAgICAjM0IwNzY0IDQ1JSwgICAgXFxyXFxuICAgICAgICAjQTkwMEE5IDcwJSwgICAgXFxyXFxuICAgICAgICAjRkY4QzAwIDEwMCUgICAgXFxyXFxuICAgICk7XFxyXFxufVxcclxcbi5iYWNrZ3JvdW5kLW1vcm5pbmd7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAgICAgICAgICAgdG8gYm90dG9tLFxcclxcbiAgICAgICAgICAgICAgICAjODdDRUZBIDAlLCAgIFxcclxcbiAgICAgICAgICAgICAgICAjQTBEOEZGIDI1JSwgIFxcclxcbiAgICAgICAgICAgICAgICAjRkJEN0ExIDU1JSwgICBcXHJcXG4gICAgICAgICAgICAgICAgI0ZGRThDOCAxMDAlICAgXFxyXFxuICAgICAgICAgICAgKTtcXHJcXG59XFxyXFxuLmJhY2tncm91bmQtYWZ0ZXJub29ue1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODdDRUVCIDAlLCAjNDY4MkI0IDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1uaWdodHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgICAgICAgICAgICB0byBib3R0b20sXFxyXFxuICAgICAgICAgICAgICAgICMwQTBGMkQgMCUsICAgIFxcclxcbiAgICAgICAgICAgICAgICAjMTExQjNGIDMwJSwgICAgXFxyXFxuICAgICAgICAgICAgICAgICMxQTJBNTUgNjAlLCAgICBcXHJcXG4gICAgICAgICAgICAgICAgIzBDMEYxQSAxMDAlICAgXFxyXFxuICAgICAgICAgICAgKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTG9hZGluZyBzY3JlZW4gc3R5bGluZyAqL1xcclxcbiNsb2FkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEEwRjJEOyAvKiBEYXJrIGJhY2tncm91bmQgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7IC8qIE9uIHRvcCBvZiBhbGwgb3RoZXIgY29udGVudCAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZG90cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMgZGl2IHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMgZGl2Om50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxcclxcbi5kb3RzIGRpdjpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXHJcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDAuNDsgfVxcclxcbiAgICB0byAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjcpOyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/styles.css\n\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanM/MjRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanM/YWYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/sourceMaps.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcz8yZGJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcz9iMjE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertBySelector.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzP2RlNmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertStyleElement.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcz9kZGNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanM/ZTQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleDomAPI.js\n\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanM/MWRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleTagTransform.js\n\n}");

/***/ }),

/***/ "./src/images/animation-ready sync \\.(png%7Cjpe?g%7Csvg)$":
/*!******************************************************************************!*\
  !*** ./src/images/animation-ready/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./barometer.svg": "./src/images/animation-ready/barometer.svg",
	"./celsius.svg": "./src/images/animation-ready/celsius.svg",
	"./clear-day.svg": "./src/images/animation-ready/clear-day.svg",
	"./clear-night.svg": "./src/images/animation-ready/clear-night.svg",
	"./cloudy.svg": "./src/images/animation-ready/cloudy.svg",
	"./compass.svg": "./src/images/animation-ready/compass.svg",
	"./drizzle.svg": "./src/images/animation-ready/drizzle.svg",
	"./dust-day.svg": "./src/images/animation-ready/dust-day.svg",
	"./dust-night.svg": "./src/images/animation-ready/dust-night.svg",
	"./dust-wind.svg": "./src/images/animation-ready/dust-wind.svg",
	"./dust.svg": "./src/images/animation-ready/dust.svg",
	"./fahrenheit.svg": "./src/images/animation-ready/fahrenheit.svg",
	"./falling-stars.svg": "./src/images/animation-ready/falling-stars.svg",
	"./fog-day.svg": "./src/images/animation-ready/fog-day.svg",
	"./fog-night.svg": "./src/images/animation-ready/fog-night.svg",
	"./fog.svg": "./src/images/animation-ready/fog.svg",
	"./hail.svg": "./src/images/animation-ready/hail.svg",
	"./haze-day.svg": "./src/images/animation-ready/haze-day.svg",
	"./haze-night.svg": "./src/images/animation-ready/haze-night.svg",
	"./haze.svg": "./src/images/animation-ready/haze.svg",
	"./horizon.svg": "./src/images/animation-ready/horizon.svg",
	"./humidity.svg": "./src/images/animation-ready/humidity.svg",
	"./hurricane.svg": "./src/images/animation-ready/hurricane.svg",
	"./lightning-bolt.svg": "./src/images/animation-ready/lightning-bolt.svg",
	"./mist.svg": "./src/images/animation-ready/mist.svg",
	"./moon-first-quarter.svg": "./src/images/animation-ready/moon-first-quarter.svg",
	"./moon-full.svg": "./src/images/animation-ready/moon-full.svg",
	"./moon-last-quarter.svg": "./src/images/animation-ready/moon-last-quarter.svg",
	"./moon-new.svg": "./src/images/animation-ready/moon-new.svg",
	"./moon-waning-crescent.svg": "./src/images/animation-ready/moon-waning-crescent.svg",
	"./moon-waning-gibbous.svg": "./src/images/animation-ready/moon-waning-gibbous.svg",
	"./moon-waxing-crescent.svg": "./src/images/animation-ready/moon-waxing-crescent.svg",
	"./moon-waxing-gibbous.svg": "./src/images/animation-ready/moon-waxing-gibbous.svg",
	"./moonrise.svg": "./src/images/animation-ready/moonrise.svg",
	"./moonset.svg": "./src/images/animation-ready/moonset.svg",
	"./not-available.svg": "./src/images/animation-ready/not-available.svg",
	"./overcast-day.svg": "./src/images/animation-ready/overcast-day.svg",
	"./overcast-night.svg": "./src/images/animation-ready/overcast-night.svg",
	"./overcast.svg": "./src/images/animation-ready/overcast.svg",
	"./partly-cloudy-day-drizzle.svg": "./src/images/animation-ready/partly-cloudy-day-drizzle.svg",
	"./partly-cloudy-day-fog.svg": "./src/images/animation-ready/partly-cloudy-day-fog.svg",
	"./partly-cloudy-day-hail.svg": "./src/images/animation-ready/partly-cloudy-day-hail.svg",
	"./partly-cloudy-day-haze.svg": "./src/images/animation-ready/partly-cloudy-day-haze.svg",
	"./partly-cloudy-day-rain.svg": "./src/images/animation-ready/partly-cloudy-day-rain.svg",
	"./partly-cloudy-day-sleet.svg": "./src/images/animation-ready/partly-cloudy-day-sleet.svg",
	"./partly-cloudy-day-smoke.svg": "./src/images/animation-ready/partly-cloudy-day-smoke.svg",
	"./partly-cloudy-day-snow.svg": "./src/images/animation-ready/partly-cloudy-day-snow.svg",
	"./partly-cloudy-day.svg": "./src/images/animation-ready/partly-cloudy-day.svg",
	"./partly-cloudy-night-drizzle.svg": "./src/images/animation-ready/partly-cloudy-night-drizzle.svg",
	"./partly-cloudy-night-fog.svg": "./src/images/animation-ready/partly-cloudy-night-fog.svg",
	"./partly-cloudy-night-hail.svg": "./src/images/animation-ready/partly-cloudy-night-hail.svg",
	"./partly-cloudy-night-haze.svg": "./src/images/animation-ready/partly-cloudy-night-haze.svg",
	"./partly-cloudy-night-rain.svg": "./src/images/animation-ready/partly-cloudy-night-rain.svg",
	"./partly-cloudy-night-sleet.svg": "./src/images/animation-ready/partly-cloudy-night-sleet.svg",
	"./partly-cloudy-night-smoke.svg": "./src/images/animation-ready/partly-cloudy-night-smoke.svg",
	"./partly-cloudy-night-snow.svg": "./src/images/animation-ready/partly-cloudy-night-snow.svg",
	"./partly-cloudy-night.svg": "./src/images/animation-ready/partly-cloudy-night.svg",
	"./pressure-high-alt.svg": "./src/images/animation-ready/pressure-high-alt.svg",
	"./pressure-high.svg": "./src/images/animation-ready/pressure-high.svg",
	"./pressure-low-alt.svg": "./src/images/animation-ready/pressure-low-alt.svg",
	"./pressure-low.svg": "./src/images/animation-ready/pressure-low.svg",
	"./rain.svg": "./src/images/animation-ready/rain.svg",
	"./raindrop.svg": "./src/images/animation-ready/raindrop.svg",
	"./raindrops.svg": "./src/images/animation-ready/raindrops.svg",
	"./sleet.svg": "./src/images/animation-ready/sleet.svg",
	"./smoke-particles.svg": "./src/images/animation-ready/smoke-particles.svg",
	"./smoke.svg": "./src/images/animation-ready/smoke.svg",
	"./snow.svg": "./src/images/animation-ready/snow.svg",
	"./snowflake.svg": "./src/images/animation-ready/snowflake.svg",
	"./solar-eclipse.svg": "./src/images/animation-ready/solar-eclipse.svg",
	"./star.svg": "./src/images/animation-ready/star.svg",
	"./starry-night.svg": "./src/images/animation-ready/starry-night.svg",
	"./sunrise.svg": "./src/images/animation-ready/sunrise.svg",
	"./sunset.svg": "./src/images/animation-ready/sunset.svg",
	"./thermometer-celsius.svg": "./src/images/animation-ready/thermometer-celsius.svg",
	"./thermometer-colder.svg": "./src/images/animation-ready/thermometer-colder.svg",
	"./thermometer-fahrenheit.svg": "./src/images/animation-ready/thermometer-fahrenheit.svg",
	"./thermometer-glass-celsius.svg": "./src/images/animation-ready/thermometer-glass-celsius.svg",
	"./thermometer-glass-fahrenheit.svg": "./src/images/animation-ready/thermometer-glass-fahrenheit.svg",
	"./thermometer-glass.svg": "./src/images/animation-ready/thermometer-glass.svg",
	"./thermometer-mercury-cold.svg": "./src/images/animation-ready/thermometer-mercury-cold.svg",
	"./thermometer-mercury.svg": "./src/images/animation-ready/thermometer-mercury.svg",
	"./thermometer-warmer.svg": "./src/images/animation-ready/thermometer-warmer.svg",
	"./thermometer.svg": "./src/images/animation-ready/thermometer.svg",
	"./thunderstorms-day-rain.svg": "./src/images/animation-ready/thunderstorms-day-rain.svg",
	"./thunderstorms-day-snow.svg": "./src/images/animation-ready/thunderstorms-day-snow.svg",
	"./thunderstorms-day.svg": "./src/images/animation-ready/thunderstorms-day.svg",
	"./thunderstorms-night-rain.svg": "./src/images/animation-ready/thunderstorms-night-rain.svg",
	"./thunderstorms-night-snow.svg": "./src/images/animation-ready/thunderstorms-night-snow.svg",
	"./thunderstorms-night.svg": "./src/images/animation-ready/thunderstorms-night.svg",
	"./thunderstorms-rain.svg": "./src/images/animation-ready/thunderstorms-rain.svg",
	"./thunderstorms-snow.svg": "./src/images/animation-ready/thunderstorms-snow.svg",
	"./thunderstorms.svg": "./src/images/animation-ready/thunderstorms.svg",
	"./tornado.svg": "./src/images/animation-ready/tornado.svg",
	"./umbrella.svg": "./src/images/animation-ready/umbrella.svg",
	"./uv-index-0.svg": "./src/images/animation-ready/uv-index-0.svg",
	"./uv-index-1.svg": "./src/images/animation-ready/uv-index-1.svg",
	"./uv-index-10.svg": "./src/images/animation-ready/uv-index-10.svg",
	"./uv-index-11.svg": "./src/images/animation-ready/uv-index-11.svg",
	"./uv-index-2.svg": "./src/images/animation-ready/uv-index-2.svg",
	"./uv-index-3.svg": "./src/images/animation-ready/uv-index-3.svg",
	"./uv-index-4.svg": "./src/images/animation-ready/uv-index-4.svg",
	"./uv-index-5.svg": "./src/images/animation-ready/uv-index-5.svg",
	"./uv-index-6.svg": "./src/images/animation-ready/uv-index-6.svg",
	"./uv-index-7.svg": "./src/images/animation-ready/uv-index-7.svg",
	"./uv-index-8.svg": "./src/images/animation-ready/uv-index-8.svg",
	"./uv-index-9.svg": "./src/images/animation-ready/uv-index-9.svg",
	"./wind-beaufort-0.svg": "./src/images/animation-ready/wind-beaufort-0.svg",
	"./wind-beaufort-1.svg": "./src/images/animation-ready/wind-beaufort-1.svg",
	"./wind-beaufort-10.svg": "./src/images/animation-ready/wind-beaufort-10.svg",
	"./wind-beaufort-11.svg": "./src/images/animation-ready/wind-beaufort-11.svg",
	"./wind-beaufort-12.svg": "./src/images/animation-ready/wind-beaufort-12.svg",
	"./wind-beaufort-2.svg": "./src/images/animation-ready/wind-beaufort-2.svg",
	"./wind-beaufort-3.svg": "./src/images/animation-ready/wind-beaufort-3.svg",
	"./wind-beaufort-4.svg": "./src/images/animation-ready/wind-beaufort-4.svg",
	"./wind-beaufort-5.svg": "./src/images/animation-ready/wind-beaufort-5.svg",
	"./wind-beaufort-6.svg": "./src/images/animation-ready/wind-beaufort-6.svg",
	"./wind-beaufort-7.svg": "./src/images/animation-ready/wind-beaufort-7.svg",
	"./wind-beaufort-8.svg": "./src/images/animation-ready/wind-beaufort-8.svg",
	"./wind-beaufort-9.svg": "./src/images/animation-ready/wind-beaufort-9.svg",
	"./wind.svg": "./src/images/animation-ready/wind.svg",
	"./windsock.svg": "./src/images/animation-ready/windsock.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/animation-ready sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/images/animation-ready/barometer.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/barometer.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aa0e319b556f30173ad6.svg";

/***/ }),

/***/ "./src/images/animation-ready/celsius.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/celsius.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c5eabf230ed432f48f9a.svg";

/***/ }),

/***/ "./src/images/animation-ready/clear-day.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/clear-day.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1148f358aa1e13bee23.svg";

/***/ }),

/***/ "./src/images/animation-ready/clear-night.svg":
/*!****************************************************!*\
  !*** ./src/images/animation-ready/clear-night.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "35d2d7e81aaa60a01555.svg";

/***/ }),

/***/ "./src/images/animation-ready/cloudy.svg":
/*!***********************************************!*\
  !*** ./src/images/animation-ready/cloudy.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a5788db9979257e9e7f.svg";

/***/ }),

/***/ "./src/images/animation-ready/compass.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/compass.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9053869d5c7c96ba76c.svg";

/***/ }),

/***/ "./src/images/animation-ready/drizzle.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/drizzle.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7eaaf6a78d604bd38453.svg";

/***/ }),

/***/ "./src/images/animation-ready/dust-day.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/dust-day.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1ec8ac9f4c177fe0edf.svg";

/***/ }),

/***/ "./src/images/animation-ready/dust-night.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/dust-night.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9ea28c69b2919f7ba3b7.svg";

/***/ }),

/***/ "./src/images/animation-ready/dust-wind.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/dust-wind.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "def5073285d8e279de46.svg";

/***/ }),

/***/ "./src/images/animation-ready/dust.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/dust.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcc8ab9ac3ded6a7bc5f.svg";

/***/ }),

/***/ "./src/images/animation-ready/fahrenheit.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/fahrenheit.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b25975a14c7b02ba536a.svg";

/***/ }),

/***/ "./src/images/animation-ready/falling-stars.svg":
/*!******************************************************!*\
  !*** ./src/images/animation-ready/falling-stars.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab684bfe1e4332086f91.svg";

/***/ }),

/***/ "./src/images/animation-ready/fog-day.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/fog-day.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0918bf05e1f0e0224d0.svg";

/***/ }),

/***/ "./src/images/animation-ready/fog-night.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/fog-night.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c98a13d2c07eadc3d409.svg";

/***/ }),

/***/ "./src/images/animation-ready/fog.svg":
/*!********************************************!*\
  !*** ./src/images/animation-ready/fog.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9138e618fd545f23b697.svg";

/***/ }),

/***/ "./src/images/animation-ready/hail.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/hail.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b5d611bdfd4e7c72743e.svg";

/***/ }),

/***/ "./src/images/animation-ready/haze-day.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/haze-day.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "015bf4c99284c0d74b02.svg";

/***/ }),

/***/ "./src/images/animation-ready/haze-night.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/haze-night.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b754aa3cfebd9a0b037.svg";

/***/ }),

/***/ "./src/images/animation-ready/haze.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/haze.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "275da0b4f1673d534224.svg";

/***/ }),

/***/ "./src/images/animation-ready/horizon.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/horizon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f72438fe7c20c44f98b.svg";

/***/ }),

/***/ "./src/images/animation-ready/humidity.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/humidity.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "764c599eb3217ae1e79e.svg";

/***/ }),

/***/ "./src/images/animation-ready/hurricane.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/hurricane.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c4d7e8cef87eac07d4f3.svg";

/***/ }),

/***/ "./src/images/animation-ready/lightning-bolt.svg":
/*!*******************************************************!*\
  !*** ./src/images/animation-ready/lightning-bolt.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9fead612c84a948a12a3.svg";

/***/ }),

/***/ "./src/images/animation-ready/mist.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/mist.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e5a9a8b31445f1c001f.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-first-quarter.svg":
/*!***********************************************************!*\
  !*** ./src/images/animation-ready/moon-first-quarter.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31194aaeddf5d059af32.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-full.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/moon-full.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cedb67702b27599d5546.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-last-quarter.svg":
/*!**********************************************************!*\
  !*** ./src/images/animation-ready/moon-last-quarter.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2b5f1eafb20573402876.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-new.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/moon-new.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c24dbc25c5b9ff83b491.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-waning-crescent.svg":
/*!*************************************************************!*\
  !*** ./src/images/animation-ready/moon-waning-crescent.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1fb9acb5c7e16be2fa88.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-waning-gibbous.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/moon-waning-gibbous.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40e6638f6a8c7b9273ad.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-waxing-crescent.svg":
/*!*************************************************************!*\
  !*** ./src/images/animation-ready/moon-waxing-crescent.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a9b10ed218335df14228.svg";

/***/ }),

/***/ "./src/images/animation-ready/moon-waxing-gibbous.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/moon-waxing-gibbous.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4d8fe368e85445ff209.svg";

/***/ }),

/***/ "./src/images/animation-ready/moonrise.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/moonrise.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "750bede2a7a4c5e87112.svg";

/***/ }),

/***/ "./src/images/animation-ready/moonset.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/moonset.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe0316ebb2cb3206bc2d.svg";

/***/ }),

/***/ "./src/images/animation-ready/not-available.svg":
/*!******************************************************!*\
  !*** ./src/images/animation-ready/not-available.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8b0bf1c3cdca0a96461.svg";

/***/ }),

/***/ "./src/images/animation-ready/overcast-day.svg":
/*!*****************************************************!*\
  !*** ./src/images/animation-ready/overcast-day.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c6df5426dfedc7e945a.svg";

/***/ }),

/***/ "./src/images/animation-ready/overcast-night.svg":
/*!*******************************************************!*\
  !*** ./src/images/animation-ready/overcast-night.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79215d4bdacfb1596afa.svg";

/***/ }),

/***/ "./src/images/animation-ready/overcast.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/overcast.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c795617fe0b87acf926.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-drizzle.svg":
/*!******************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-drizzle.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "77ab2345fbe731e228f9.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-fog.svg":
/*!**************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-fog.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "404da9ed149baee0000b.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-hail.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-hail.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f75ab9c0ee96096363e.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-haze.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-haze.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6a5b3d9ab897052f959.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-rain.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-rain.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "674b01de159bc7519fe0.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-sleet.svg":
/*!****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-sleet.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3981d3fe67bebf7f8858.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-smoke.svg":
/*!****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-smoke.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce96c0c8e373278a9c89.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day-snow.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day-snow.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0646e11ceb541c2d891.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-day.svg":
/*!**********************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-day.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22af82f41162d6ba6559.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-drizzle.svg":
/*!********************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-drizzle.svg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ab9ffe52f3fc57a98eb.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-fog.svg":
/*!****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-fog.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8c60a70182b06d7d69f8.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-hail.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-hail.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "63920c1590eaf712fb6f.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-haze.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-haze.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "661b12ca21f9e69dee34.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-rain.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-rain.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dfa06420eea6da34ec40.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-sleet.svg":
/*!******************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-sleet.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b0fe6a0628df695aca2.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-smoke.svg":
/*!******************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-smoke.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c970ec6eca6321bca7ee.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night-snow.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night-snow.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "751793f411d07a47750a.svg";

/***/ }),

/***/ "./src/images/animation-ready/partly-cloudy-night.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/partly-cloudy-night.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7c7c3446f71d6776edbc.svg";

/***/ }),

/***/ "./src/images/animation-ready/pressure-high-alt.svg":
/*!**********************************************************!*\
  !*** ./src/images/animation-ready/pressure-high-alt.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "51b2238b07ab606fb2db.svg";

/***/ }),

/***/ "./src/images/animation-ready/pressure-high.svg":
/*!******************************************************!*\
  !*** ./src/images/animation-ready/pressure-high.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "74c3eb4ad723a16b3807.svg";

/***/ }),

/***/ "./src/images/animation-ready/pressure-low-alt.svg":
/*!*********************************************************!*\
  !*** ./src/images/animation-ready/pressure-low-alt.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e105e6314a03467c7313.svg";

/***/ }),

/***/ "./src/images/animation-ready/pressure-low.svg":
/*!*****************************************************!*\
  !*** ./src/images/animation-ready/pressure-low.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86dd429911b42f08b554.svg";

/***/ }),

/***/ "./src/images/animation-ready/rain.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/rain.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0dc8335e1b7493bf52c6.svg";

/***/ }),

/***/ "./src/images/animation-ready/raindrop.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/raindrop.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6fc13d6f1fb83c90ee08.svg";

/***/ }),

/***/ "./src/images/animation-ready/raindrops.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/raindrops.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a866778cc0b45e26b7ad.svg";

/***/ }),

/***/ "./src/images/animation-ready/sleet.svg":
/*!**********************************************!*\
  !*** ./src/images/animation-ready/sleet.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b34e224bc8413ada68f5.svg";

/***/ }),

/***/ "./src/images/animation-ready/smoke-particles.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/smoke-particles.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c70621d3f0a7b7dc241.svg";

/***/ }),

/***/ "./src/images/animation-ready/smoke.svg":
/*!**********************************************!*\
  !*** ./src/images/animation-ready/smoke.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9892f56df8e2ce7e8c4.svg";

/***/ }),

/***/ "./src/images/animation-ready/snow.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/snow.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "528543caae2adbd318d8.svg";

/***/ }),

/***/ "./src/images/animation-ready/snowflake.svg":
/*!**************************************************!*\
  !*** ./src/images/animation-ready/snowflake.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b83528d79fa914dd80ad.svg";

/***/ }),

/***/ "./src/images/animation-ready/solar-eclipse.svg":
/*!******************************************************!*\
  !*** ./src/images/animation-ready/solar-eclipse.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4cfa22346da1ceabe8dd.svg";

/***/ }),

/***/ "./src/images/animation-ready/star.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/star.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "048f9c5d4250493e1ee8.svg";

/***/ }),

/***/ "./src/images/animation-ready/starry-night.svg":
/*!*****************************************************!*\
  !*** ./src/images/animation-ready/starry-night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b03e1a5efa9f8958e21.svg";

/***/ }),

/***/ "./src/images/animation-ready/sunrise.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/sunrise.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7bd9ac1ef5536646bd0f.svg";

/***/ }),

/***/ "./src/images/animation-ready/sunset.svg":
/*!***********************************************!*\
  !*** ./src/images/animation-ready/sunset.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6251769d5f3fd2b94bfa.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-celsius.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-celsius.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6997f5852f3d55076b9a.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-colder.svg":
/*!***********************************************************!*\
  !*** ./src/images/animation-ready/thermometer-colder.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e86827d295da991c317a.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-fahrenheit.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-fahrenheit.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dc69c87cbd02fcdef1dc.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-glass-celsius.svg":
/*!******************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-glass-celsius.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f8f35bc9bb5661f9973.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-glass-fahrenheit.svg":
/*!*********************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-glass-fahrenheit.svg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ba708daee5ad61f75a96.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-glass.svg":
/*!**********************************************************!*\
  !*** ./src/images/animation-ready/thermometer-glass.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "822f92884a2bb143d526.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-mercury-cold.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-mercury-cold.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38fdac6d077119d1f86c.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-mercury.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/thermometer-mercury.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6cd121ff9c40c8d36494.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer-warmer.svg":
/*!***********************************************************!*\
  !*** ./src/images/animation-ready/thermometer-warmer.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7349c12b1770721ac2c5.svg";

/***/ }),

/***/ "./src/images/animation-ready/thermometer.svg":
/*!****************************************************!*\
  !*** ./src/images/animation-ready/thermometer.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "050919f99a2e91b11c4d.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-day-rain.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-day-rain.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80dbfa0196e5869a3d3e.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-day-snow.svg":
/*!***************************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-day-snow.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "048fd8608db4c05d57d5.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-day.svg":
/*!**********************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-day.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "490d90e29be7d928fb67.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-night-rain.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-night-rain.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86652965710f821c160f.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-night-snow.svg":
/*!*****************************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-night-snow.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "753671adfff0963274ec.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-night.svg":
/*!************************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-night.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d0b758a9d8495e50103.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-rain.svg":
/*!***********************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-rain.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94cd24cf6e2018f3471b.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms-snow.svg":
/*!***********************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms-snow.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "74d808645ebac9bd06a8.svg";

/***/ }),

/***/ "./src/images/animation-ready/thunderstorms.svg":
/*!******************************************************!*\
  !*** ./src/images/animation-ready/thunderstorms.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b376eb3bc79f73c3c6a9.svg";

/***/ }),

/***/ "./src/images/animation-ready/tornado.svg":
/*!************************************************!*\
  !*** ./src/images/animation-ready/tornado.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6ebebd8bc17fd5391be.svg";

/***/ }),

/***/ "./src/images/animation-ready/umbrella.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/umbrella.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3f119020d8c811e5c7f.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-0.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-0.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f34e74f8f3ed49439fb.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-1.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-1.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "44728f748b6a6f2759b5.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-10.svg":
/*!****************************************************!*\
  !*** ./src/images/animation-ready/uv-index-10.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1867ea37cbb8def7ab26.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-11.svg":
/*!****************************************************!*\
  !*** ./src/images/animation-ready/uv-index-11.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cbe49004e1317e9efeab.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-2.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-2.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98945ed19a065199b750.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-3.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-3.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f5af2a8ec62eacf41799.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-4.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-4.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5441f766edae763571b9.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-5.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-5.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8e03ffe41e7738b98d7a.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-6.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-6.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d12bc4a0ec8a32081a62.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-7.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-7.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9cdb1c475b484cecfec6.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-8.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-8.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "158e3c46364e07a5941f.svg";

/***/ }),

/***/ "./src/images/animation-ready/uv-index-9.svg":
/*!***************************************************!*\
  !*** ./src/images/animation-ready/uv-index-9.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "058290b068a167e67f98.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-0.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-0.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2fe38fb6c269aad81359.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-1.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-1.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7785890f44f4a26afa71.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-10.svg":
/*!*********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-10.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc82209833d019e45694.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-11.svg":
/*!*********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-11.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0da6e36c14edc3e518f0.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-12.svg":
/*!*********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-12.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "769991ae71892df88ccd.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-2.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-2.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cceb32120862d7cc0a00.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-3.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-3.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7c4cc85aaa9f5a0c1ec5.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-4.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-4.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c67ad9e646cf9e007151.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-5.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-5.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d07544c823ed47b14911.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-6.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-6.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d7b5a44bd191ba6399c.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-7.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-7.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a51869e521f8061bf5bd.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-8.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-8.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e071907d9be14e5d4982.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind-beaufort-9.svg":
/*!********************************************************!*\
  !*** ./src/images/animation-ready/wind-beaufort-9.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0315503a5a83f391539c.svg";

/***/ }),

/***/ "./src/images/animation-ready/wind.svg":
/*!*********************************************!*\
  !*** ./src/images/animation-ready/wind.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c6497960fb7f3c732a0.svg";

/***/ }),

/***/ "./src/images/animation-ready/windsock.svg":
/*!*************************************************!*\
  !*** ./src/images/animation-ready/windsock.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8a4d675cd8fb42e69fa.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _locationFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationFetch */ \"./src/locationFetch.js\");\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherFetch */ \"./src/weatherFetch.js\");\n/* harmony import */ var _updateWeatherData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateWeatherData */ \"./src/updateWeatherData.js\");\n\r\n\r\n\r\n\r\n\r\nconst searchButton = document.getElementById(\"search\");\r\nconsole.log(searchButton);\r\n\r\n(0,_updateWeatherData__WEBPACK_IMPORTED_MODULE_3__.updateData)();\r\n\r\nsearchButton.addEventListener(\"keydown\", (event) => {\r\n    if (event.key === \"Enter\") {\r\n        // updateData(searchButton.value.trim());\r\n        (0,_updateWeatherData__WEBPACK_IMPORTED_MODULE_3__.updateData)(searchButton.value.trim());\r\n        searchButton.value = \"\";\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0I7QUFDOEI7QUFDRjtBQUNEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQVU7QUFDbEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBmZXRjaExvY2F0aW9uRGF0YSB9IGZyb20gXCIuL2xvY2F0aW9uRmV0Y2hcIjtcclxuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJGZXRjaFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4vdXBkYXRlV2VhdGhlckRhdGFcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xyXG5jb25zb2xlLmxvZyhzZWFyY2hCdXR0b24pO1xyXG5cclxudXBkYXRlRGF0YSgpO1xyXG5cclxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgLy8gdXBkYXRlRGF0YShzZWFyY2hCdXR0b24udmFsdWUudHJpbSgpKTtcclxuICAgICAgICB1cGRhdGVEYXRhKHNlYXJjaEJ1dHRvbi52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/loadIcons.js":
/*!**************************!*\
  !*** ./src/loadIcons.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   icons: () => (/* binding */ icons)\n/* harmony export */ });\nfunction importAll(r) {\r\n  const images = {};\r\n  r.keys().forEach((key) => {\r\n    // Remove './' and keep filename\r\n    const name = key.replace('./', '').replace(/\\.\\w+$/, '');\r\n    images[name] = r(key);\r\n  });\r\n  return images;\r\n}\r\n\r\n// Exporting all icons from the specified directory because webpack requires static paths for imports\r\nconst icons = importAll(__webpack_require__(\"./src/images/animation-ready sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZEljb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTyx3QkFBd0IsZ0ZBQXdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWEvLi9zcmMvbG9hZEljb25zLmpzPzI3M2UiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICBjb25zdCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vIFJlbW92ZSAnLi8nIGFuZCBrZWVwIGZpbGVuYW1lXHJcbiAgICBjb25zdCBuYW1lID0ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoL1xcLlxcdyskLywgJycpO1xyXG4gICAgaW1hZ2VzW25hbWVdID0gcihrZXkpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbi8vIEV4cG9ydGluZyBhbGwgaWNvbnMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeSBiZWNhdXNlIHdlYnBhY2sgcmVxdWlyZXMgc3RhdGljIHBhdGhzIGZvciBpbXBvcnRzXHJcbmV4cG9ydCBjb25zdCBpY29ucyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FuaW1hdGlvbi1yZWFkeScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/loadIcons.js\n\n}");

/***/ }),

/***/ "./src/locationData.js":
/*!*****************************!*\
  !*** ./src/locationData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocationData: () => (/* binding */ getLocationData),\n/* harmony export */   locationDataPromise: () => (/* binding */ locationDataPromise)\n/* harmony export */ });\n/* harmony import */ var _locationFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationFetch */ \"./src/locationFetch.js\");\n\r\n\r\nlet locationData; //Shared Variable to store location data\r\n\r\n// Promise to fetch and store location data\r\nconst locationDataPromise = (0,_locationFetch__WEBPACK_IMPORTED_MODULE_0__.fetchLocationData)().then(data => {\r\n    locationData = data;\r\n    console.log(\"Location data ready in locationData.js\");\r\n});\r\n\r\nfunction getLocationData() {\r\n    if (!locationData) {\r\n        throw new Error(\"Location data is not yet available. Please wait for the promise to resolve.\");\r\n    }\r\n    return locationData;\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYXRpb25EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNwRDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ08sNEJBQTRCLGlFQUFpQjtBQUNwRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWEvLi9zcmMvbG9jYXRpb25EYXRhLmpzPzg5OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hMb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9sb2NhdGlvbkZldGNoXCI7XHJcblxyXG5sZXQgbG9jYXRpb25EYXRhOyAvL1NoYXJlZCBWYXJpYWJsZSB0byBzdG9yZSBsb2NhdGlvbiBkYXRhXHJcblxyXG4vLyBQcm9taXNlIHRvIGZldGNoIGFuZCBzdG9yZSBsb2NhdGlvbiBkYXRhXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbkRhdGFQcm9taXNlID0gZmV0Y2hMb2NhdGlvbkRhdGEoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgbG9jYXRpb25EYXRhID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gZGF0YSByZWFkeSBpbiBsb2NhdGlvbkRhdGEuanNcIik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uRGF0YSgpIHtcclxuICAgIGlmICghbG9jYXRpb25EYXRhKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gZGF0YSBpcyBub3QgeWV0IGF2YWlsYWJsZS4gUGxlYXNlIHdhaXQgZm9yIHRoZSBwcm9taXNlIHRvIHJlc29sdmUuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2F0aW9uRGF0YTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/locationData.js\n\n}");

/***/ }),

/***/ "./src/locationFetch.js":
/*!******************************!*\
  !*** ./src/locationFetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLocationData: () => (/* binding */ fetchLocationData)\n/* harmony export */ });\nconst apiKey = \"3f196642d656413bbcbc4bbebd35f738\";\r\n\r\nasync function fetchLocationData() {\r\n    try {\r\n        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);\r\n        if (!response.ok) {\r\n            throw new Error(`HTTP error! status: ${response.status}`);\r\n        }\r\n\r\n        const data = await response.json();\r\n\r\n        if(data.error && data.error.code){\r\n            throw new Error(`API error! code: ${data.error.code}, info: ${data.error.info}`);\r\n        }\r\n        console.log(\"Location data ready\");\r\n        return data;\r\n    } catch (error) {\r\n        console.error(\"Error fetching location data:\", error);\r\n        throw error;\r\n    }\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYXRpb25GZXRjaC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNPO0FBQ1A7QUFDQSxrRkFBa0YsT0FBTztBQUN6RjtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0IsVUFBVSxnQkFBZ0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hLy4vc3JjL2xvY2F0aW9uRmV0Y2guanM/MmZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSBcIjNmMTk2NjQyZDY1NjQxM2JiY2JjNGJiZWJkMzVmNzM4XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMb2NhdGlvbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vaXBnZW8/YXBpS2V5PSR7YXBpS2V5fWApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YS5lcnJvciAmJiBkYXRhLmVycm9yLmNvZGUpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBlcnJvciEgY29kZTogJHtkYXRhLmVycm9yLmNvZGV9LCBpbmZvOiAke2RhdGEuZXJyb3IuaW5mb31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiBkYXRhIHJlYWR5XCIpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbG9jYXRpb24gZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/locationFetch.js\n\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWEvLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles.css\n\n}");

/***/ }),

/***/ "./src/updateWeatherData.js":
/*!**********************************!*\
  !*** ./src/updateWeatherData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateData: () => (/* binding */ updateData)\n/* harmony export */ });\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherFetch */ \"./src/weatherFetch.js\");\n/* harmony import */ var _locationFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationFetch */ \"./src/locationFetch.js\");\n/* harmony import */ var _loadIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadIcons */ \"./src/loadIcons.js\");\n\r\n\r\n //Importing all icons \r\n// Entire weather data of the current location\r\n\r\n\r\n// Entire location data of the current location\r\n\r\n// UI ELEMENTS\r\nconst cityName = document.getElementById(\"city-name\");\r\nconst currentDate = document.getElementById(\"current-date\");\r\nconst weatherDescription = document.getElementById(\"weather-description\");\r\nconst currentTemp = document.getElementById(\"current-temperature\");\r\nconst feelsLike = document.getElementById(\"feels-like-value\");\r\nconst humidity = document.getElementById(\"humidity-value\");\r\nconst windSpeed = document.getElementById(\"wind-speed-value\");\r\nconst uvIndex = document.getElementById(\"uv-index-value\");\r\nconst hourlyTempNode = document.querySelectorAll(\".hourly-temperature\");\r\nconst airQualityNumber = document.getElementById(\"air-quality-number\");\r\nconst airQualityRemark = document.getElementById(\"air-quality-remark\");\r\nconst fiveDayNode = document.querySelectorAll(\".day\");\r\nconst fiveDayTempNode = document.querySelectorAll(\".five-day-temperature\");\r\nconst sunrise = document.getElementById(\"sunrise-value\");\r\nconst sunset = document.getElementById(\"sunset-value\");\r\nconst visibility = document.getElementById(\"visibility-value\");\r\nconst pressure = document.getElementById(\"pressure-value\");\r\nconst hourlyForecastTimeNodes = document.querySelectorAll(\".hourly-forecast-time\");\r\n\r\n// ICONS\r\nconst weatherIcon = document.getElementById(\"weather-icon\");\r\nconst feelsLikeIcon = document.getElementById(\"feels-like-icon\");\r\nconst windSpeedIcon = document.getElementById(\"wind-speed-icon\");\r\nconst uvIndexIcon = document.getElementById(\"uv-index-icon\");\r\nconst fiveDayIcons = document.querySelectorAll(\".five-day-icons\");\r\nconst hourlyIcons = document.querySelectorAll(\".hourly-icons\");\r\nconst pressureIcon = document.getElementById(\"pressure-icon\");\r\nconst visibilityIcon = document.getElementById(\"visibility-icon\");\r\n\r\n// UI ELEMENTS\r\nconst rainContainer = document.getElementById(\"rain-container\");\r\nconst lightningOverlay = document.getElementById(\"lightning-overlay\");\r\nconst snowflakeContainer = document.getElementById(\"snowflake-container\");\r\nconst background = document.getElementById(\"background\");\r\nconst loader = document.getElementById(\"loader\");\r\n\r\n\r\n// Function to display current weather data on the webpage\r\nasync function updateData(city) {\r\n    console.log(city)\r\n    const weatherData = await (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(city);\r\n    console.log(\"Data Loaded\")\r\n    loader.style.display = \"none\"; // Hide loader after data is loaded\r\n    // Update city name and country\r\n    cityName.textContent = `${weatherData.resolvedAddress}`;\r\n    let windSpeedValue = Math.round(weatherData.currentConditions.windspeed);\r\n    let uvIndexValue = weatherData.currentConditions.uvindex;\r\n    let pressureValue = weatherData.currentConditions.pressure;\r\n    let visibilityValue = weatherData.currentConditions.visibility;\r\n\r\n    // update current date\r\n    const timezone = weatherData.timezone; \r\n    const locationTime = new Date(new Date().toLocaleString(\"en-US\", { timeZone: timezone }));\r\n\r\n\r\n    // Now using the timezone info to get current date/time\r\n    currentDate.textContent = new Date().toLocaleString(\"en-US\", {\r\n        timeZone: timezone,\r\n        weekday: \"long\",\r\n        year: \"numeric\",\r\n        month: \"long\",\r\n        day: \"numeric\"\r\n    });\r\n\r\n    // Update weather description\r\n    weatherDescription.textContent = weatherData.currentConditions.conditions;\r\n\r\n    // Update current temperature\r\n    currentTemp.textContent = `${Math.round(weatherData.currentConditions.temp)}°C`;    \r\n\r\n    // Update \"feels like\" temperature\r\n    feelsLike.textContent = `${Math.round(weatherData.currentConditions.feelslike)}°C`;\r\n\r\n    // Update humidity\r\n    humidity.textContent = `${weatherData.currentConditions.humidity}%`;\r\n\r\n    // Update wind speed\r\n    windSpeed.textContent = `${windSpeedValue} km/h`;\r\n\r\n    // Update UV index\r\n    uvIndex.textContent = uvIndexValue;\r\n\r\n    // Update hourly temperatures for the next 12 hours\r\n    const currentDay = 0; // Assuming we are looking at today's data\r\n    const currentHour = locationTime.getHours();\r\n    \r\n    if(currentHour <= 19){\r\n        for (let i = 0; i < 4; i++) {\r\n            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay].hours\r\n            [currentHour + i].temp)}°C`;\r\n            hourlyIcons[i].src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[weatherData.days[currentDay].hours[currentHour + i].icon];\r\n        }\r\n    }else {\r\n        let changeDayOn = 24 - currentHour;\r\n        let counter = 0;\r\n        for (let i = 0; i < 4; i++) {\r\n            if(i == changeDayOn){\r\n                counter = 0;\r\n            }\r\n            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay + 1].hours[counter].temp)}°C`;\r\n            hourlyIcons[i].src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[weatherData.days[currentDay + 1].hours[counter].icon];\r\n            counter++;\r\n        }\r\n    }\r\n    // Update hourly forecast time labels\r\n    let isAM = false;\r\n    for (let i = 0; i < 3; i++) {\r\n        let forecastHour = (currentHour + i+1) % 12;\r\n        // Figuring out if its AM or PM\r\n        if (forecastHour === 0) {\r\n            forecastHour = 12;\r\n            isAM = true;\r\n        }\r\n        hourlyForecastTimeNodes[i].textContent = `${forecastHour} ${isAM ? 'AM' : 'PM'}`;\r\n    }\r\n\r\n    // Update air quality index and remark\r\n    // Whoever is reading this, please forgive the hardcoding, since the free tier of Visual Crossing API does not provide air quality data.\r\n    // I will simulate air quality data for demonstration purposes by randomly generating values between 0 and 300.\r\n    const simulatedAQI = Math.floor(Math.random() * 151);\r\n    airQualityNumber.textContent = simulatedAQI;\r\n\r\n    // Update air quality remark based on the simulated AQI\r\n    if (simulatedAQI <= 50) {\r\n        airQualityNumber.style.color = \"green\";\r\n        airQualityRemark.textContent = \"Good\";\r\n    } else if (simulatedAQI <= 100) {\r\n        airQualityNumber.style.color = \"light-yellow\";\r\n        airQualityRemark.textContent = \"Moderate\";\r\n    } else if (simulatedAQI <= 150) {\r\n        airQualityNumber.style.color = \"orange\";\r\n        airQualityRemark.textContent = \"Unhealthy\";\r\n    } else if (simulatedAQI <= 200) {\r\n        airQualityNumber.style.color = \"red\";\r\n        airQualityRemark.textContent = \"Unhealthy\";\r\n    } else if (simulatedAQI <= 300) {\r\n        airQualityNumber.style.color = \"purple\";\r\n        airQualityRemark.textContent = \"Hazardous\";\r\n    } else {\r\n        airQualityNumber.style.color = \"maroon\";\r\n        airQualityRemark.textContent = \"Very Hazardous\";\r\n    }\r\n\r\n    // Updating 5-day forecast\r\n    // getting the current day and then updating the next 5 days\r\n    const daysOfWeek = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n    const today = locationTime.getDay();\r\n    for (let i = 1; i <= 5; i++) {\r\n        const dayIndex = (today + i) % 7; // Wrap around using modulo\r\n        const dayName = daysOfWeek[dayIndex];\r\n\r\n        fiveDayNode[i - 1].textContent = dayName;\r\n        fiveDayTempNode[i - 1].textContent = `${Math.round(weatherData.days[i].tempmax)}°C/${Math.round(weatherData.days[i].tempmin)}°C`;\r\n        fiveDayIcons[i - 1].src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[weatherData.days[i].icon];\r\n    }\r\n\r\n    // Updating Today's Highlights\r\n    // Sunrise time\r\n    const sunriseTime = new Date(weatherData.days[0].sunriseEpoch * 1000).toLocaleTimeString(\"en-US\", {\r\n        timeZone: timezone,\r\n        hour: \"2-digit\",\r\n        minute: \"2-digit\",\r\n    });\r\n    sunrise.textContent = sunriseTime;\r\n\r\n    // Sunset time\r\n    const sunsetTime = new Date(weatherData.days[0].sunsetEpoch * 1000).toLocaleTimeString(\"en-US\", {\r\n        timeZone: timezone,\r\n        hour: \"2-digit\",\r\n        minute: \"2-digit\",\r\n    });\r\n    sunset.textContent = sunsetTime;\r\n\r\n    // Pressure\r\n    pressure.textContent = `${pressureValue} mb`;\r\n\r\n    // Visibility\r\n    visibility.textContent = `${visibilityValue} km`;\r\n\r\n\r\n    // Updating icons\r\n    weatherIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[weatherData.currentConditions.icon];\r\n    \r\n    // Feels like icon logic\r\n    let feelsLikeTemp = Math.round(weatherData.currentConditions.feelslike);\r\n    if (feelsLikeTemp <= 10){\r\n        feelsLikeIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"thermometer-colder\"];\r\n    }else if (feelsLikeTemp > 10 && feelsLikeTemp <=15){\r\n        feelsLikeIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"thermometer\"];\r\n    }else {\r\n        feelsLikeIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"thermometer-warmer\"];\r\n    }\r\n\r\n    // Wind speed icon logic\r\n    // Converting the wind speed to Beaufort scale and updating the icon accordingly\r\n    \r\n\r\n    if (windSpeedValue <=1){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-0\"];\r\n    }else if(windSpeedValue <= 5){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-1\"];\r\n    }else if(windSpeedValue <=11){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-2\"];\r\n    }else if(windSpeedValue <=19){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-3\"];\r\n    }else if(windSpeedValue <=28){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-4\"];\r\n    }else if(windSpeedValue <=38){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-5\"];\r\n    }else if(windSpeedValue <=49){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-6\"];\r\n    }else if(windSpeedValue <=61){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-7\"];\r\n    }else if(windSpeedValue <=74){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-8\"];\r\n    }else if(windSpeedValue <=88){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-9\"];\r\n    }else if(windSpeedValue <=102){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-10\"];\r\n    }else if(windSpeedValue <=117){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-11\"];\r\n    }else if(windSpeedValue >=118){\r\n        windSpeedIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"wind-beaufort-12\"];\r\n    }\r\n\r\n    // UV index \r\n    \r\n    uvIndexIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[`uv-index-${uvIndexValue}`];\r\n    \r\n    // Pressure icon logic\r\n    if (pressureValue < 1000){\r\n        pressureIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"pressure-low\"];\r\n    }else{\r\n        pressureIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"pressure-high\"];\r\n    };\r\n    \r\n    // Visibility icon logic\r\n\r\n    if (visibilityValue <= 1){\r\n        visibilityIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"fog\"];\r\n    }else if(visibilityValue <=5){\r\n        visibilityIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"mist\"];\r\n    }else if (visibilityValue <=10){\r\n        visibilityIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"partly-cloudy-day\"];\r\n    }else {\r\n        visibilityIcon.src = _loadIcons__WEBPACK_IMPORTED_MODULE_2__.icons[\"clear-day\"];\r\n    }\r\n\r\n\r\n    // UPDATING UI ELEMENTS BASED ON WEATHER CONDITIONS\r\n    // Rain conditions\r\n    rainContainer.style.display = \"none\"; // Hide rain container by default\r\n    lightningOverlay.style.display = \"none\"; // Hide lightning overlay by default\r\n    snowflakeContainer.innerHTML = \"\"; // Clear previous snowflakes if any\r\n\r\n    if (weatherData.currentConditions.preciptype && weatherData.currentConditions.preciptype.includes(\"rain\")) {\r\n        const numberOfDrops = 100;\r\n        rainContainer.style.display = \"block\";\r\n        rainContainer.innerHTML = \"\"; // Clear previous drops if any\r\n        for (let i = 0; i < numberOfDrops; i++) {\r\n            const drop = document.createElement('div');\r\n            drop.className = 'drop';\r\n            \r\n            // Randomize position, size, and animation duration for a natural look\r\n            drop.style.left = `${Math.random() * 100}vw`;\r\n            drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;\r\n            drop.style.animationDelay = `${Math.random() * 5}s`;\r\n            drop.style.opacity = `${0.3 + Math.random() * 0.7}`;\r\n            drop.style.width = `${1 + Math.random() * 2}px`;\r\n\r\n            rainContainer.appendChild(drop);\r\n        };\r\n        // Checking if there's lightning too\r\n        if (weatherData.currentConditions.preciptype.includes(\"thunderstorm\")) {\r\n            lightningOverlay.style.display = \"block\";\r\n        }\r\n\r\n    };\r\n\r\n    // Snow conditions\r\n    if( weatherData.currentConditions.preciptype && weatherData.currentConditions.preciptype.includes(\"snow\")) {\r\n            function createSnowflake() {\r\n            const snowflake = document.createElement('div');\r\n            snowflake.classList.add('snowflake');\r\n            snowflake.innerHTML = '❄';\r\n            \r\n            // Random starting position\r\n            snowflake.style.left = Math.random() * 100 + '%';\r\n            \r\n            // Random size\r\n            const size = Math.random() * 0.8 + 0.5;\r\n            snowflake.style.fontSize = size + 'em';\r\n            \r\n            // Random animation duration (fall speed)\r\n            const duration = Math.random() * 10 + 10;\r\n            snowflake.style.animationDuration = duration + 's';\r\n            \r\n            // Random delay\r\n            snowflake.style.animationDelay = Math.random() * 5 + 's';\r\n            \r\n            // Random opacity\r\n            snowflake.style.opacity = Math.random() * 0.6 + 0.4;\r\n            \r\n            snowflakeContainer.appendChild(snowflake);\r\n            \r\n            // Remove snowflake after animation completes\r\n            setTimeout(() => {\r\n                snowflake.remove();\r\n            }, (duration + 5) * 1000);\r\n        }\r\n\r\n        // Create initial snowflakes\r\n        for (let i = 0; i < 50; i++) {\r\n            createSnowflake();\r\n        }\r\n\r\n        // Continuously create new snowflakes\r\n        setInterval(createSnowflake, 300);\r\n    }\r\n\r\n    // Changing background based on day/night and weather condition\r\n    const backgroundHour = locationTime.getHours();\r\n    // change the font color based on background\r\n    document.body.style.color = \"black\";\r\n    if (weatherData.currentConditions.conditions === \"Clear\" || weatherData.currentConditions.conditions === \"Partially cloudy\") {\r\n        if(backgroundHour >=6 && backgroundHour <12){\r\n            background.className = \"background-morning\";\r\n        } else if (backgroundHour >=12 && backgroundHour <18){\r\n            background.className = \"background-afternoon\";\r\n        } else if (backgroundHour >=18 && backgroundHour <20){\r\n            background.className = \"background-evening\";\r\n            document.body.style.color = \"white\";\r\n        } else {\r\n            background.className = \"background-night\";\r\n            document.body.style.color = \"white\";\r\n        }\r\n    }\r\n   \r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWEvLi9zcmMvdXBkYXRlV2VhdGhlckRhdGEuanM/MjFlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckZldGNoXCI7XHJcbmltcG9ydCB7IGZldGNoTG9jYXRpb25EYXRhIH0gZnJvbSBcIi4vbG9jYXRpb25GZXRjaFwiO1xyXG5pbXBvcnQgeyBpY29ucyB9IGZyb20gXCIuL2xvYWRJY29uc1wiOyAvL0ltcG9ydGluZyBhbGwgaWNvbnMgXHJcbi8vIEVudGlyZSB3ZWF0aGVyIGRhdGEgb2YgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuXHJcblxyXG4vLyBFbnRpcmUgbG9jYXRpb24gZGF0YSBvZiB0aGUgY3VycmVudCBsb2NhdGlvblxyXG5cclxuLy8gVUkgRUxFTUVOVFNcclxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKTtcclxuY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZGF0ZVwiKTtcclxuY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWRlc2NyaXB0aW9uXCIpO1xyXG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wZXJhdHVyZVwiKTtcclxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlLXZhbHVlXCIpO1xyXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHktdmFsdWVcIik7XHJcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1zcGVlZC12YWx1ZVwiKTtcclxuY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXYtaW5kZXgtdmFsdWVcIik7XHJcbmNvbnN0IGhvdXJseVRlbXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHktdGVtcGVyYXR1cmVcIik7XHJcbmNvbnN0IGFpclF1YWxpdHlOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFpci1xdWFsaXR5LW51bWJlclwiKTtcclxuY29uc3QgYWlyUXVhbGl0eVJlbWFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWlyLXF1YWxpdHktcmVtYXJrXCIpO1xyXG5jb25zdCBmaXZlRGF5Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG5jb25zdCBmaXZlRGF5VGVtcE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpdmUtZGF5LXRlbXBlcmF0dXJlXCIpO1xyXG5jb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5yaXNlLXZhbHVlXCIpO1xyXG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bnNldC12YWx1ZVwiKTtcclxuY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJpbGl0eS12YWx1ZVwiKTtcclxuY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzdXJlLXZhbHVlXCIpO1xyXG5jb25zdCBob3VybHlGb3JlY2FzdFRpbWVOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5LWZvcmVjYXN0LXRpbWVcIik7XHJcblxyXG4vLyBJQ09OU1xyXG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xyXG5jb25zdCBmZWVsc0xpa2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlLWljb25cIik7XHJcbmNvbnN0IHdpbmRTcGVlZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtc3BlZWQtaWNvblwiKTtcclxuY29uc3QgdXZJbmRleEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInV2LWluZGV4LWljb25cIik7XHJcbmNvbnN0IGZpdmVEYXlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZml2ZS1kYXktaWNvbnNcIik7XHJcbmNvbnN0IGhvdXJseUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHktaWNvbnNcIik7XHJcbmNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmUtaWNvblwiKTtcclxuY29uc3QgdmlzaWJpbGl0eUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2liaWxpdHktaWNvblwiKTtcclxuXHJcbi8vIFVJIEVMRU1FTlRTXHJcbmNvbnN0IHJhaW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhaW4tY29udGFpbmVyXCIpO1xyXG5jb25zdCBsaWdodG5pbmdPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodG5pbmctb3ZlcmxheVwiKTtcclxuY29uc3Qgc25vd2ZsYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbm93Zmxha2UtY29udGFpbmVyXCIpO1xyXG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xyXG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGN1cnJlbnQgd2VhdGhlciBkYXRhIG9uIHRoZSB3ZWJwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEYXRhKGNpdHkpIHtcclxuICAgIGNvbnNvbGUubG9nKGNpdHkpXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEoY2l0eSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgTG9hZGVkXCIpXHJcbiAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIGxvYWRlciBhZnRlciBkYXRhIGlzIGxvYWRlZFxyXG4gICAgLy8gVXBkYXRlIGNpdHkgbmFtZSBhbmQgY291bnRyeVxyXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5yZXNvbHZlZEFkZHJlc3N9YDtcclxuICAgIGxldCB3aW5kU3BlZWRWYWx1ZSA9IE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkKTtcclxuICAgIGxldCB1dkluZGV4VmFsdWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy51dmluZGV4O1xyXG4gICAgbGV0IHByZXNzdXJlVmFsdWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5wcmVzc3VyZTtcclxuICAgIGxldCB2aXNpYmlsaXR5VmFsdWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy52aXNpYmlsaXR5O1xyXG5cclxuICAgIC8vIHVwZGF0ZSBjdXJyZW50IGRhdGVcclxuICAgIGNvbnN0IHRpbWV6b25lID0gd2VhdGhlckRhdGEudGltZXpvbmU7IFxyXG4gICAgY29uc3QgbG9jYXRpb25UaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmU6IHRpbWV6b25lIH0pKTtcclxuXHJcblxyXG4gICAgLy8gTm93IHVzaW5nIHRoZSB0aW1lem9uZSBpbmZvIHRvIGdldCBjdXJyZW50IGRhdGUvdGltZVxyXG4gICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcclxuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHdlYXRoZXIgZGVzY3JpcHRpb25cclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XHJcblxyXG4gICAgLy8gVXBkYXRlIGN1cnJlbnQgdGVtcGVyYXR1cmVcclxuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wKX3CsENgOyAgICBcclxuXHJcbiAgICAvLyBVcGRhdGUgXCJmZWVscyBsaWtlXCIgdGVtcGVyYXR1cmVcclxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlKX3CsENgO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBodW1pZGl0eVxyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eX0lYDtcclxuXHJcbiAgICAvLyBVcGRhdGUgd2luZCBzcGVlZFxyXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkVmFsdWV9IGttL2hgO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBVViBpbmRleFxyXG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IHV2SW5kZXhWYWx1ZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgaG91cmx5IHRlbXBlcmF0dXJlcyBmb3IgdGhlIG5leHQgMTIgaG91cnNcclxuICAgIGNvbnN0IGN1cnJlbnREYXkgPSAwOyAvLyBBc3N1bWluZyB3ZSBhcmUgbG9va2luZyBhdCB0b2RheSdzIGRhdGFcclxuICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbG9jYXRpb25UaW1lLmdldEhvdXJzKCk7XHJcbiAgICBcclxuICAgIGlmKGN1cnJlbnRIb3VyIDw9IDE5KXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBob3VybHlUZW1wTm9kZVtpXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuZGF5c1tjdXJyZW50RGF5XS5ob3Vyc1xyXG4gICAgICAgICAgICBbY3VycmVudEhvdXIgKyBpXS50ZW1wKX3CsENgO1xyXG4gICAgICAgICAgICBob3VybHlJY29uc1tpXS5zcmMgPSBpY29uc1t3ZWF0aGVyRGF0YS5kYXlzW2N1cnJlbnREYXldLmhvdXJzW2N1cnJlbnRIb3VyICsgaV0uaWNvbl07XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGxldCBjaGFuZ2VEYXlPbiA9IDI0IC0gY3VycmVudEhvdXI7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gY2hhbmdlRGF5T24pe1xyXG4gICAgICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaG91cmx5VGVtcE5vZGVbaV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRheXNbY3VycmVudERheSArIDFdLmhvdXJzW2NvdW50ZXJdLnRlbXApfcKwQ2A7XHJcbiAgICAgICAgICAgIGhvdXJseUljb25zW2ldLnNyYyA9IGljb25zW3dlYXRoZXJEYXRhLmRheXNbY3VycmVudERheSArIDFdLmhvdXJzW2NvdW50ZXJdLmljb25dO1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIGhvdXJseSBmb3JlY2FzdCB0aW1lIGxhYmVsc1xyXG4gICAgbGV0IGlzQU0gPSBmYWxzZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZvcmVjYXN0SG91ciA9IChjdXJyZW50SG91ciArIGkrMSkgJSAxMjtcclxuICAgICAgICAvLyBGaWd1cmluZyBvdXQgaWYgaXRzIEFNIG9yIFBNXHJcbiAgICAgICAgaWYgKGZvcmVjYXN0SG91ciA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3JlY2FzdEhvdXIgPSAxMjtcclxuICAgICAgICAgICAgaXNBTSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhvdXJseUZvcmVjYXN0VGltZU5vZGVzW2ldLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RIb3VyfSAke2lzQU0gPyAnQU0nIDogJ1BNJ31gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBhaXIgcXVhbGl0eSBpbmRleCBhbmQgcmVtYXJrXHJcbiAgICAvLyBXaG9ldmVyIGlzIHJlYWRpbmcgdGhpcywgcGxlYXNlIGZvcmdpdmUgdGhlIGhhcmRjb2RpbmcsIHNpbmNlIHRoZSBmcmVlIHRpZXIgb2YgVmlzdWFsIENyb3NzaW5nIEFQSSBkb2VzIG5vdCBwcm92aWRlIGFpciBxdWFsaXR5IGRhdGEuXHJcbiAgICAvLyBJIHdpbGwgc2ltdWxhdGUgYWlyIHF1YWxpdHkgZGF0YSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBieSByYW5kb21seSBnZW5lcmF0aW5nIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDMwMC5cclxuICAgIGNvbnN0IHNpbXVsYXRlZEFRSSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1MSk7XHJcbiAgICBhaXJRdWFsaXR5TnVtYmVyLnRleHRDb250ZW50ID0gc2ltdWxhdGVkQVFJO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBhaXIgcXVhbGl0eSByZW1hcmsgYmFzZWQgb24gdGhlIHNpbXVsYXRlZCBBUUlcclxuICAgIGlmIChzaW11bGF0ZWRBUUkgPD0gNTApIHtcclxuICAgICAgICBhaXJRdWFsaXR5TnVtYmVyLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIGFpclF1YWxpdHlSZW1hcmsudGV4dENvbnRlbnQgPSBcIkdvb2RcIjtcclxuICAgIH0gZWxzZSBpZiAoc2ltdWxhdGVkQVFJIDw9IDEwMCkge1xyXG4gICAgICAgIGFpclF1YWxpdHlOdW1iZXIuc3R5bGUuY29sb3IgPSBcImxpZ2h0LXllbGxvd1wiO1xyXG4gICAgICAgIGFpclF1YWxpdHlSZW1hcmsudGV4dENvbnRlbnQgPSBcIk1vZGVyYXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKHNpbXVsYXRlZEFRSSA8PSAxNTApIHtcclxuICAgICAgICBhaXJRdWFsaXR5TnVtYmVyLnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcclxuICAgICAgICBhaXJRdWFsaXR5UmVtYXJrLnRleHRDb250ZW50ID0gXCJVbmhlYWx0aHlcIjtcclxuICAgIH0gZWxzZSBpZiAoc2ltdWxhdGVkQVFJIDw9IDIwMCkge1xyXG4gICAgICAgIGFpclF1YWxpdHlOdW1iZXIuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIGFpclF1YWxpdHlSZW1hcmsudGV4dENvbnRlbnQgPSBcIlVuaGVhbHRoeVwiO1xyXG4gICAgfSBlbHNlIGlmIChzaW11bGF0ZWRBUUkgPD0gMzAwKSB7XHJcbiAgICAgICAgYWlyUXVhbGl0eU51bWJlci5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XHJcbiAgICAgICAgYWlyUXVhbGl0eVJlbWFyay50ZXh0Q29udGVudCA9IFwiSGF6YXJkb3VzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFpclF1YWxpdHlOdW1iZXIuc3R5bGUuY29sb3IgPSBcIm1hcm9vblwiO1xyXG4gICAgICAgIGFpclF1YWxpdHlSZW1hcmsudGV4dENvbnRlbnQgPSBcIlZlcnkgSGF6YXJkb3VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRpbmcgNS1kYXkgZm9yZWNhc3RcclxuICAgIC8vIGdldHRpbmcgdGhlIGN1cnJlbnQgZGF5IGFuZCB0aGVuIHVwZGF0aW5nIHRoZSBuZXh0IDUgZGF5c1xyXG4gICAgY29uc3QgZGF5c09mV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xyXG4gICAgY29uc3QgdG9kYXkgPSBsb2NhdGlvblRpbWUuZ2V0RGF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICBjb25zdCBkYXlJbmRleCA9ICh0b2RheSArIGkpICUgNzsgLy8gV3JhcCBhcm91bmQgdXNpbmcgbW9kdWxvXHJcbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IGRheXNPZldlZWtbZGF5SW5kZXhdO1xyXG5cclxuICAgICAgICBmaXZlRGF5Tm9kZVtpIC0gMV0udGV4dENvbnRlbnQgPSBkYXlOYW1lO1xyXG4gICAgICAgIGZpdmVEYXlUZW1wTm9kZVtpIC0gMV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRheXNbaV0udGVtcG1heCl9wrBDLyR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5kYXlzW2ldLnRlbXBtaW4pfcKwQ2A7XHJcbiAgICAgICAgZml2ZURheUljb25zW2kgLSAxXS5zcmMgPSBpY29uc1t3ZWF0aGVyRGF0YS5kYXlzW2ldLmljb25dO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0aW5nIFRvZGF5J3MgSGlnaGxpZ2h0c1xyXG4gICAgLy8gU3VucmlzZSB0aW1lXHJcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmRheXNbMF0uc3VucmlzZUVwb2NoICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcclxuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgfSk7XHJcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gc3VucmlzZVRpbWU7XHJcblxyXG4gICAgLy8gU3Vuc2V0IHRpbWVcclxuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5kYXlzWzBdLnN1bnNldEVwb2NoICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcclxuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgfSk7XHJcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBzdW5zZXRUaW1lO1xyXG5cclxuICAgIC8vIFByZXNzdXJlXHJcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke3ByZXNzdXJlVmFsdWV9IG1iYDtcclxuXHJcbiAgICAvLyBWaXNpYmlsaXR5XHJcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gYCR7dmlzaWJpbGl0eVZhbHVlfSBrbWA7XHJcblxyXG5cclxuICAgIC8vIFVwZGF0aW5nIGljb25zXHJcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uc1t3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uXTtcclxuICAgIFxyXG4gICAgLy8gRmVlbHMgbGlrZSBpY29uIGxvZ2ljXHJcbiAgICBsZXQgZmVlbHNMaWtlVGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlKTtcclxuICAgIGlmIChmZWVsc0xpa2VUZW1wIDw9IDEwKXtcclxuICAgICAgICBmZWVsc0xpa2VJY29uLnNyYyA9IGljb25zW1widGhlcm1vbWV0ZXItY29sZGVyXCJdO1xyXG4gICAgfWVsc2UgaWYgKGZlZWxzTGlrZVRlbXAgPiAxMCAmJiBmZWVsc0xpa2VUZW1wIDw9MTUpe1xyXG4gICAgICAgIGZlZWxzTGlrZUljb24uc3JjID0gaWNvbnNbXCJ0aGVybW9tZXRlclwiXTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBmZWVsc0xpa2VJY29uLnNyYyA9IGljb25zW1widGhlcm1vbWV0ZXItd2FybWVyXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdpbmQgc3BlZWQgaWNvbiBsb2dpY1xyXG4gICAgLy8gQ29udmVydGluZyB0aGUgd2luZCBzcGVlZCB0byBCZWF1Zm9ydCBzY2FsZSBhbmQgdXBkYXRpbmcgdGhlIGljb24gYWNjb3JkaW5nbHlcclxuICAgIFxyXG5cclxuICAgIGlmICh3aW5kU3BlZWRWYWx1ZSA8PTEpe1xyXG4gICAgICAgIHdpbmRTcGVlZEljb24uc3JjID0gaWNvbnNbXCJ3aW5kLWJlYXVmb3J0LTBcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA8PSA1KXtcclxuICAgICAgICB3aW5kU3BlZWRJY29uLnNyYyA9IGljb25zW1wid2luZC1iZWF1Zm9ydC0xXCJdO1xyXG4gICAgfWVsc2UgaWYod2luZFNwZWVkVmFsdWUgPD0xMSl7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtMlwiXTtcclxuICAgIH1lbHNlIGlmKHdpbmRTcGVlZFZhbHVlIDw9MTkpe1xyXG4gICAgICAgIHdpbmRTcGVlZEljb24uc3JjID0gaWNvbnNbXCJ3aW5kLWJlYXVmb3J0LTNcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA8PTI4KXtcclxuICAgICAgICB3aW5kU3BlZWRJY29uLnNyYyA9IGljb25zW1wid2luZC1iZWF1Zm9ydC00XCJdO1xyXG4gICAgfWVsc2UgaWYod2luZFNwZWVkVmFsdWUgPD0zOCl7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtNVwiXTtcclxuICAgIH1lbHNlIGlmKHdpbmRTcGVlZFZhbHVlIDw9NDkpe1xyXG4gICAgICAgIHdpbmRTcGVlZEljb24uc3JjID0gaWNvbnNbXCJ3aW5kLWJlYXVmb3J0LTZcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA8PTYxKXtcclxuICAgICAgICB3aW5kU3BlZWRJY29uLnNyYyA9IGljb25zW1wid2luZC1iZWF1Zm9ydC03XCJdO1xyXG4gICAgfWVsc2UgaWYod2luZFNwZWVkVmFsdWUgPD03NCl7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtOFwiXTtcclxuICAgIH1lbHNlIGlmKHdpbmRTcGVlZFZhbHVlIDw9ODgpe1xyXG4gICAgICAgIHdpbmRTcGVlZEljb24uc3JjID0gaWNvbnNbXCJ3aW5kLWJlYXVmb3J0LTlcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA8PTEwMil7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtMTBcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA8PTExNyl7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtMTFcIl07XHJcbiAgICB9ZWxzZSBpZih3aW5kU3BlZWRWYWx1ZSA+PTExOCl7XHJcbiAgICAgICAgd2luZFNwZWVkSWNvbi5zcmMgPSBpY29uc1tcIndpbmQtYmVhdWZvcnQtMTJcIl07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVVYgaW5kZXggXHJcbiAgICBcclxuICAgIHV2SW5kZXhJY29uLnNyYyA9IGljb25zW2B1di1pbmRleC0ke3V2SW5kZXhWYWx1ZX1gXTtcclxuICAgIFxyXG4gICAgLy8gUHJlc3N1cmUgaWNvbiBsb2dpY1xyXG4gICAgaWYgKHByZXNzdXJlVmFsdWUgPCAxMDAwKXtcclxuICAgICAgICBwcmVzc3VyZUljb24uc3JjID0gaWNvbnNbXCJwcmVzc3VyZS1sb3dcIl07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwcmVzc3VyZUljb24uc3JjID0gaWNvbnNbXCJwcmVzc3VyZS1oaWdoXCJdO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gVmlzaWJpbGl0eSBpY29uIGxvZ2ljXHJcblxyXG4gICAgaWYgKHZpc2liaWxpdHlWYWx1ZSA8PSAxKXtcclxuICAgICAgICB2aXNpYmlsaXR5SWNvbi5zcmMgPSBpY29uc1tcImZvZ1wiXTtcclxuICAgIH1lbHNlIGlmKHZpc2liaWxpdHlWYWx1ZSA8PTUpe1xyXG4gICAgICAgIHZpc2liaWxpdHlJY29uLnNyYyA9IGljb25zW1wibWlzdFwiXTtcclxuICAgIH1lbHNlIGlmICh2aXNpYmlsaXR5VmFsdWUgPD0xMCl7XHJcbiAgICAgICAgdmlzaWJpbGl0eUljb24uc3JjID0gaWNvbnNbXCJwYXJ0bHktY2xvdWR5LWRheVwiXTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB2aXNpYmlsaXR5SWNvbi5zcmMgPSBpY29uc1tcImNsZWFyLWRheVwiXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gVVBEQVRJTkcgVUkgRUxFTUVOVFMgQkFTRUQgT04gV0VBVEhFUiBDT05ESVRJT05TXHJcbiAgICAvLyBSYWluIGNvbmRpdGlvbnNcclxuICAgIHJhaW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIHJhaW4gY29udGFpbmVyIGJ5IGRlZmF1bHRcclxuICAgIGxpZ2h0bmluZ092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIGxpZ2h0bmluZyBvdmVybGF5IGJ5IGRlZmF1bHRcclxuICAgIHNub3dmbGFrZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciBwcmV2aW91cyBzbm93Zmxha2VzIGlmIGFueVxyXG5cclxuICAgIGlmICh3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5wcmVjaXB0eXBlICYmIHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZWNpcHR5cGUuaW5jbHVkZXMoXCJyYWluXCIpKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZEcm9wcyA9IDEwMDtcclxuICAgICAgICByYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcmFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciBwcmV2aW91cyBkcm9wcyBpZiBhbnlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRHJvcHM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRyb3AuY2xhc3NOYW1lID0gJ2Ryb3AnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmFuZG9taXplIHBvc2l0aW9uLCBzaXplLCBhbmQgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBhIG5hdHVyYWwgbG9va1xyXG4gICAgICAgICAgICBkcm9wLnN0eWxlLmxlZnQgPSBgJHtNYXRoLnJhbmRvbSgpICogMTAwfXZ3YDtcclxuICAgICAgICAgICAgZHJvcC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAkezAuNSArIE1hdGgucmFuZG9tKCkgKiAxLjV9c2A7XHJcbiAgICAgICAgICAgIGRyb3Auc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtNYXRoLnJhbmRvbSgpICogNX1zYDtcclxuICAgICAgICAgICAgZHJvcC5zdHlsZS5vcGFjaXR5ID0gYCR7MC4zICsgTWF0aC5yYW5kb20oKSAqIDAuN31gO1xyXG4gICAgICAgICAgICBkcm9wLnN0eWxlLndpZHRoID0gYCR7MSArIE1hdGgucmFuZG9tKCkgKiAyfXB4YDtcclxuXHJcbiAgICAgICAgICAgIHJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDaGVja2luZyBpZiB0aGVyZSdzIGxpZ2h0bmluZyB0b29cclxuICAgICAgICBpZiAod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMucHJlY2lwdHlwZS5pbmNsdWRlcyhcInRodW5kZXJzdG9ybVwiKSkge1xyXG4gICAgICAgICAgICBsaWdodG5pbmdPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gU25vdyBjb25kaXRpb25zXHJcbiAgICBpZiggd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMucHJlY2lwdHlwZSAmJiB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5wcmVjaXB0eXBlLmluY2x1ZGVzKFwic25vd1wiKSkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbm93Zmxha2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNub3dmbGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzbm93Zmxha2UuY2xhc3NMaXN0LmFkZCgnc25vd2ZsYWtlJyk7XHJcbiAgICAgICAgICAgIHNub3dmbGFrZS5pbm5lckhUTUwgPSAn4p2EJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJhbmRvbSBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgICAgICBzbm93Zmxha2Uuc3R5bGUubGVmdCA9IE1hdGgucmFuZG9tKCkgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSYW5kb20gc2l6ZVxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDAuOCArIDAuNTtcclxuICAgICAgICAgICAgc25vd2ZsYWtlLnN0eWxlLmZvbnRTaXplID0gc2l6ZSArICdlbSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSYW5kb20gYW5pbWF0aW9uIGR1cmF0aW9uIChmYWxsIHNwZWVkKVxyXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAxMCArIDEwO1xyXG4gICAgICAgICAgICBzbm93Zmxha2Uuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdzJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJhbmRvbSBkZWxheVxyXG4gICAgICAgICAgICBzbm93Zmxha2Uuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBNYXRoLnJhbmRvbSgpICogNSArICdzJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJhbmRvbSBvcGFjaXR5XHJcbiAgICAgICAgICAgIHNub3dmbGFrZS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5yYW5kb20oKSAqIDAuNiArIDAuNDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNub3dmbGFrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbm93Zmxha2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHNub3dmbGFrZSBhZnRlciBhbmltYXRpb24gY29tcGxldGVzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LCAoZHVyYXRpb24gKyA1KSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGluaXRpYWwgc25vd2ZsYWtlc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnRpbnVvdXNseSBjcmVhdGUgbmV3IHNub3dmbGFrZXNcclxuICAgICAgICBzZXRJbnRlcnZhbChjcmVhdGVTbm93Zmxha2UsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhbmdpbmcgYmFja2dyb3VuZCBiYXNlZCBvbiBkYXkvbmlnaHQgYW5kIHdlYXRoZXIgY29uZGl0aW9uXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSG91ciA9IGxvY2F0aW9uVGltZS5nZXRIb3VycygpO1xyXG4gICAgLy8gY2hhbmdlIHRoZSBmb250IGNvbG9yIGJhc2VkIG9uIGJhY2tncm91bmRcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICBpZiAod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyA9PT0gXCJDbGVhclwiIHx8IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMgPT09IFwiUGFydGlhbGx5IGNsb3VkeVwiKSB7XHJcbiAgICAgICAgaWYoYmFja2dyb3VuZEhvdXIgPj02ICYmIGJhY2tncm91bmRIb3VyIDwxMil7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kLW1vcm5pbmdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRIb3VyID49MTIgJiYgYmFja2dyb3VuZEhvdXIgPDE4KXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5jbGFzc05hbWUgPSBcImJhY2tncm91bmQtYWZ0ZXJub29uXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiYWNrZ3JvdW5kSG91ciA+PTE4ICYmIGJhY2tncm91bmRIb3VyIDwyMCl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kLWV2ZW5pbmdcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IFwiYmFja2dyb3VuZC1uaWdodFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/updateWeatherData.js\n\n}");

/***/ }),

/***/ "./src/weatherFetch.js":
/*!*****************************!*\
  !*** ./src/weatherFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ensureLocationData: () => (/* binding */ ensureLocationData),\n/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)\n/* harmony export */ });\n/* harmony import */ var _locationFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationFetch */ \"./src/locationFetch.js\");\n/* harmony import */ var _locationData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationData */ \"./src/locationData.js\");\n\r\n\r\n\r\n// Fetching location data to be used in weatherFetch.js\r\nasync function ensureLocationData() {\r\n    await _locationData__WEBPACK_IMPORTED_MODULE_1__.locationDataPromise;\r\n    const location =  (0,_locationData__WEBPACK_IMPORTED_MODULE_1__.getLocationData)();\r\n    return location;\r\n}\r\n\r\n\r\n\r\nconst weatherAPIKey = \"BZDVQEHYGZ2N3SH3FX8BUNAAY\";\r\nconst weatherBaseURL = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\";\r\n\r\nasync function fetchWeatherData(userInputCity) {\r\n\r\n    const location = await ensureLocationData();\r\n    // const city = location.city;\r\n    const city = userInputCity ? userInputCity : location.city;\r\n\r\n    try {\r\n        const response = await fetch(`${weatherBaseURL}${city}?unitGroup=metric&key=${weatherAPIKey}&contentType=json`);\r\n\r\n        if (!response.ok){\r\n            throw new Error(`HTTP error! status: ${response.status}`);\r\n        }\r\n\r\n        const weatherData = await response.json();\r\n        \r\n        if(weatherData.errorCode){\r\n            throw new Error(`API error! code: ${weatherData.errorCode}, message: ${weatherData.message}`);\r\n        }\r\n        \r\n        console.log(\"Weather data ready\");\r\n        console.log(weatherData);\r\n        return weatherData;\r\n    } catch (error) {\r\n        console.error(\"Error fetching weather data:\", error);\r\n        throw error;\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlckZldGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDa0I7QUFDdEU7QUFDQTtBQUNPO0FBQ1AsVUFBVSw4REFBbUI7QUFDN0Isc0JBQXNCLDhEQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlLEVBQUUsS0FBSyx3QkFBd0IsY0FBYztBQUNwRztBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixhQUFhLG9CQUFvQjtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWEvLi9zcmMvd2VhdGhlckZldGNoLmpzPzZiOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hMb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9sb2NhdGlvbkZldGNoXCI7XHJcbmltcG9ydCB7IGxvY2F0aW9uRGF0YVByb21pc2UsIGdldExvY2F0aW9uRGF0YSB9IGZyb20gXCIuL2xvY2F0aW9uRGF0YVwiO1xyXG5cclxuLy8gRmV0Y2hpbmcgbG9jYXRpb24gZGF0YSB0byBiZSB1c2VkIGluIHdlYXRoZXJGZXRjaC5qc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlTG9jYXRpb25EYXRhKCkge1xyXG4gICAgYXdhaXQgbG9jYXRpb25EYXRhUHJvbWlzZTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gIGdldExvY2F0aW9uRGF0YSgpO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdlYXRoZXJBUElLZXkgPSBcIkJaRFZRRUhZR1oyTjNTSDNGWDhCVU5BQVlcIjtcclxuY29uc3Qgd2VhdGhlckJhc2VVUkwgPSBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEodXNlcklucHV0Q2l0eSkge1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZW5zdXJlTG9jYXRpb25EYXRhKCk7XHJcbiAgICAvLyBjb25zdCBjaXR5ID0gbG9jYXRpb24uY2l0eTtcclxuICAgIGNvbnN0IGNpdHkgPSB1c2VySW5wdXRDaXR5ID8gdXNlcklucHV0Q2l0eSA6IGxvY2F0aW9uLmNpdHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3dlYXRoZXJCYXNlVVJMfSR7Y2l0eX0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9JHt3ZWF0aGVyQVBJS2V5fSZjb250ZW50VHlwZT1qc29uYCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih3ZWF0aGVyRGF0YS5lcnJvckNvZGUpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBlcnJvciEgY29kZTogJHt3ZWF0aGVyRGF0YS5lcnJvckNvZGV9LCBtZXNzYWdlOiAke3dlYXRoZXJEYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2VhdGhlciBkYXRhIHJlYWR5XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/weatherFetch.js\n\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;