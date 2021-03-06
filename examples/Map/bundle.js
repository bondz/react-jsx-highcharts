var example =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = Highcharts;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = ReactHighcharts;

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = ReactRequest;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRequest = __webpack_require__(34);

var _highmaps = __webpack_require__(32);

var _highmaps2 = _interopRequireDefault(_highmaps);

var _reactJsxHighmaps = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelFormatter = function labelFormatter() {
  if (this.point.value) {
    return this.point.name;
  }
};

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(
      _reactRequest.Fetch,
      { url: 'https://code.highcharts.com/mapdata/custom/europe.geo.json' },
      function (_ref) {
        var fetching = _ref.fetching,
            failed = _ref.failed,
            data = _ref.data;

        if (fetching) {
          return _react2.default.createElement(
            'div',
            null,
            'Loading\u2026'
          );
        }

        if (failed) {
          return _react2.default.createElement(
            'div',
            null,
            'Failed to load map.'
          );
        }

        if (data) {
          return _react2.default.createElement(
            _reactJsxHighmaps.HighchartsMapChart,
            { map: data },
            _react2.default.createElement(
              _reactJsxHighmaps.Title,
              null,
              'Nordic countries'
            ),
            _react2.default.createElement(
              _reactJsxHighmaps.Subtitle,
              null,
              'Demo of drawing all areas in the map, only highlighting partial data'
            ),
            _react2.default.createElement(_reactJsxHighmaps.MapSeries, {
              name: 'Area',
              data: [['is', 1], ['no', 1], ['se', 1], ['dk', 1], ['fi', 1]],
              dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                formatter: labelFormatter
              }
            }),
            _react2.default.createElement(
              _reactJsxHighmaps.MapNavigation,
              null,
              _react2.default.createElement(_reactJsxHighmaps.MapNavigation.ZoomIn, null),
              _react2.default.createElement(_reactJsxHighmaps.MapNavigation.ZoomOut, null)
            ),
            _react2.default.createElement(_reactJsxHighmaps.Tooltip, null),
            _react2.default.createElement(_reactJsxHighmaps.Credits, null)
          );
        }

        return null;
      }
    )
  );
};

exports.default = (0, _reactJsxHighmaps.withHighmaps)(App, _highmaps2.default);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(47);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });