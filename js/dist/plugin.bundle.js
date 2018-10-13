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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/src/plugin.scss":
/*!*****************************!*\
  !*** ./css/src/plugin.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./js/plugin.js":
/*!**********************!*\
  !*** ./js/plugin.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_src_plugin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/src/plugin.scss */ "./css/src/plugin.scss");
/* harmony import */ var _css_src_plugin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_src_plugin_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src */ "./js/src/index.js");
/////////////////////////////////////////////////
////////////// Simple Google Fonts //////////////
/////////////////////////////////////////////////


var registerPlugin = wp.plugins.registerPlugin;
/** 
 * Register the plugin 
 */

registerPlugin('simple-google-fonts', {
  icon: 'hidden',
  render: _src__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./js/src/components/global.js":
/*!*************************************!*\
  !*** ./js/src/components/global.js ***!
  \*************************************/
/*! exports provided: SGFGlobalOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SGFGlobalOption", function() { return SGFGlobalOption; });
var _wp$components = wp.components,
    Notice = _wp$components.Notice,
    ToggleControl = _wp$components.ToggleControl;
var __ = wp.i18n.__;
/**
 * Displays the global option and adds a notice if the post isn't published
 *
 * @since  1.0.0
 * @param  {Object} props Inherited props from `SimpleGoogleFonts`
 * @return {Void}
 */

var SGFGlobalOption = function SGFGlobalOption(props) {
  var isPublished = props.info.isPublished;
  var meta = props.meta,
      updateEl = props.updateEl;

  if (!isPublished) {
    return React.createElement(Notice, {
      className: "sgf-globally-warning",
      status: "warning",
      isDismissible: false
    }, __('You can not use this option if the post is not published. If the global option was enabled for this post and you switched to draft mode, you will have to enable it again after you publish.'));
  }

  return React.createElement(ToggleControl, {
    label: __('Make styles global'),
    checked: meta.sgf_is_global || false,
    help: __('Make the styles used for this post global? If the answer is yes, then the styles will apply globally as defaults for new posts and old posts that do not have any Google Fonts styles saved.'),
    onChange: function onChange(value) {
      return updateEl('global', 'is', value);
    }
  });
};

/***/ }),

/***/ "./js/src/components/info.js":
/*!***********************************!*\
  !*** ./js/src/components/info.js ***!
  \***********************************/
/*! exports provided: SGFInfoPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SGFInfoPanel", function() { return SGFInfoPanel; });
var Notice = wp.components.Notice;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
/**
 * Displays the information from the `Information` panel
 *
 * @since  1.0.0
 * @return {Void}
 */

var SGFInfoPanel = function SGFInfoPanel() {
  var props = {
    className: 'sgf-information-notice',
    status: 'success',
    isDismissible: false
  };
  return React.createElement(Fragment, null, React.createElement(Notice, props, __('It works only with posts and pages for now.')), React.createElement(Notice, props, __('It is safe to say that if you do not have an Internet connection, Google fonts will not display (unless you have them installed on your system).')), React.createElement(Notice, props, __('The plugin will dequeue other Google fonts registered by themes/plugins. WordPress Core registered styles are not dequeued. If you do not select a font, it will fallback to default system (OS) fonts.')), React.createElement(Notice, props, __('If you want to use the global option, make sure you publish the post. If for some reason you switch the post to draft mode, the global option will reset and you will need to enable it again.')));
};

/***/ }),

/***/ "./js/src/constants.js":
/*!*****************************!*\
  !*** ./js/src/constants.js ***!
  \*****************************/
/*! exports provided: PLUGIN_INFO, HEADINGS, FONT_WEIGHT, TEXT_TRANSFORM, HEADINGS_TABS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_INFO", function() { return PLUGIN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADINGS", function() { return HEADINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHT", function() { return FONT_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADINGS_TABS", function() { return HEADINGS_TABS; });
var PLUGIN_INFO = {
  sidebarId: 'sgf-sidebar',
  sidebarIcon: 'editor-textcolor',
  pluginName: 'Simple Google Fonts'
};
var HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
var FONT_WEIGHT = ['100', '100i', '200', '200i', '300', '300i', '400', '400i', '500', '500i', '600', '600i', '700', '700i', '800', '800i', '900', '900i'];
var TEXT_TRANSFORM = ['none', 'capitalize', 'uppercase', 'lowercase'];
var HEADINGS_TABS = [{
  name: 'h1',
  title: 'h1',
  className: 'tab-one'
}, {
  name: 'h2',
  title: 'h2',
  className: 'tab-two'
}, {
  name: 'h3',
  title: 'h3',
  className: 'tab-three'
}, {
  name: 'h4',
  title: 'h4',
  className: 'tab-four'
}, {
  name: 'h5',
  title: 'h5',
  className: 'tab-five'
}, {
  name: 'h6',
  title: 'h6',
  className: 'tab-six'
}];

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/google-fonts.json */ "./js/src/json/google-fonts.json");
var _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/google-fonts.json */ "./js/src/json/google-fonts.json", 1);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./js/src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./js/src/utils.js");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/global */ "./js/src/components/global.js");
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/info */ "./js/src/components/info.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./js/src/styles.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TabPanel = _wp$components.TabPanel,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var compose = wp.compose.compose;
var _lodash = lodash,
    uniq = _lodash.uniq;
/**
 * Simple Google Fonts
 * 
 * @since   1.0.0
 * @class   SimpleGoogleFonts
 * @extends {Component}
 */

var SimpleGoogleFonts =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleGoogleFonts, _Component);

  /**
   * Creates an instance of SimpleGoogleFonts.
   * 
   * @memberof SimpleGoogleFonts
   */
  function SimpleGoogleFonts() {
    var _this;

    _classCallCheck(this, SimpleGoogleFonts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleGoogleFonts).apply(this, arguments));
    _this.changeFontsWeights = _this.changeFontsWeights.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeTransform = _this.changeTransform.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeLineHeight = _this.changeLineHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeLetterSpacing = _this.changeLetterSpacing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeWordSpacing = _this.changeWordSpacing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeStyles = _this.changeStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateElement = _this.updateElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Do this once when the component did mount
   *
   * @todo     Maybe add some filters in future versions.
   * @memberof Component
   */


  _createClass(SimpleGoogleFonts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Create the link and style nodes
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createStyleNodes"])(); // Change fonts and weights in the Google Fonts URL

      var panels = ['body', 'headings'];
      var types = ['fonts', 'weights'];

      for (var _i = 0; _i < panels.length; _i++) {
        var panel = panels[_i];

        for (var _i2 = 0; _i2 < types.length; _i2++) {
          var type = types[_i2];
          this.changeFontsWeights(panel, type);
        }
      } // Make sure we have the correct/updated styles


      this.changeStyles();
    }
    /**
     * Do some checks
     *
     * @todo     Maybe take another look at this.
     * @param    {Object} prevProps
     * @memberof SimpleGoogleFonts
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var meta = this.props.meta;
      var isPublished = this.props.info.isPublished;
      var isPublishedPrev = prevProps.info.isPublished;

      if (isPublished !== isPublishedPrev) {
        if (isPublished === false && meta.sgf_is_global === true) {
          this.updateElement('global', 'is', false);
        }
      }
    }
    /**
     * All the font families as options to be used in a <select> element 
     * 
     * @since   1.0.0
     * @returns {Array} The label and index as its value
     */

  }, {
    key: "fontsOptions",
    value: function fontsOptions() {
      return _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__.map(function (font, i) {
        return {
          label: font.f,
          value: i
        };
      });
    }
    /**
     * All the font weights as options to be used in a <select> element 
     *
     * @since   1.0.0
     * @param   {Integer} font Font intex
     * @returns {Array}        The label and weight
     */

  }, {
    key: "weightsOptions",
    value: function weightsOptions(font) {
      return _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__[font].v.filter(function (weight) {
        return !weight.includes('0i');
      }).map(function (weight) {
        return {
          label: weight,
          value: weight
        };
      });
    }
    /**
     * All the text transform options to be used in a <select> element 
     * 
     * @since   1.0.0
     * @returns {Array} The label and transform
     */

  }, {
    key: "transformOptions",
    value: function transformOptions() {
      return _constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_TRANSFORM"].map(function (size) {
        return {
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["capitalizeWords"])(size),
          value: size
        };
      });
    }
    /**
     * Get meta value
     *
     * @since   1.0.0
     * @param   {String} item  Select a specific key from our post meta
     * @param   {String} panel The panel in which this option is located
     * @returns {Object}       Selected meta
     */

  }, {
    key: "getMeta",
    value: function getMeta(item, panel) {
      var newMeta = select('core/editor').getEditedPostAttribute('meta');

      var meta = _objectSpread({}, newMeta);

      meta = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addDefaultsToMeta"])(meta);
      meta = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addGlobalHeadings"])(meta);

      if (item && panel) {
        return meta["sgf_".concat(item, "_").concat(panel)];
      }

      return meta;
    }
    /**
     * Changes the styles for preview, check `../js/src/styles/`
     *
     * @since  1.0.0
     * @return {Void}
     */

  }, {
    key: "changeStyles",
    value: function changeStyles() {
      Object(_styles__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getMeta(), _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__);
    }
    /**
     * Changes the font families and font weights based on the selected values
     *
     * @since   1.0.0
     * @todo    Simplify the weights part, create a function for both.
     * @param   {String}         panel Either `headings` or `body`
     * @param   {String}         type  Either change `fonts` or `weights`
     * @returns {Object|Boolean}              An object containing the new/current link and decoded family argument 
     *                                        or false if no font is selected.
     */

  }, {
    key: "changeFontsWeights",
    value: function changeFontsWeights(panel, type) {
      var link = document.querySelector("#".concat(simpleGFonts["".concat(panel, "_id")]));
      var meta = this.getMeta;
      var fontID = meta('ff', panel);
      var newstyles = this.changeStyles;
      var def = '400';
      var idef = "".concat(def, "i");
      var _simpleGFonts = simpleGFonts,
          timeout = _simpleGFonts.timeout,
          default_url = _simpleGFonts.default_url,
          weights_def = _simpleGFonts.weights_def;

      if (fontID === 0) {
        link.href = default_url;
        setTimeout(newstyles, timeout);
        return false;
      }

      var variants = _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__[fontID].v;
      var newLink;
      var oldFamily = decodeURIComponent(link.href.split('?')[1]).split('&')[0].split('=')[1];

      switch (type) {
        case 'fonts':
          var newFont = _json_google_fonts_json__WEBPACK_IMPORTED_MODULE_0__[fontID].f.replace(' ', '+') + ":".concat(def);

          if (variants.find(function (variant) {
            return variant.includes(idef);
          })) {
            newFont = "".concat(newFont, ",").concat(idef);
          }

          newLink = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["newStyleLinkURL"])([oldFamily, newFont], link);
          break;

        case 'weights':
          var oldWeights = oldFamily.split(':')[1];
          var weights;

          switch (panel) {
            case 'headings':
              weights = meta('els', panel).map(function (heading) {
                return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseHeadingValues"])(heading);
              }).map(function (heading) {
                return heading.wt;
              });
              weights = uniq(weights);
              var italics = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                var _loop = function _loop() {
                  var weight = _step.value;
                  var italic = variants.find(function (variant) {
                    return variant.includes("".concat(weight, "i"));
                  });

                  if (italic) {
                    italics.push(italic);
                  }
                };

                for (var _iterator = weights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              if (weights_def) {
                if (weights.find(function (weight) {
                  return weight !== def;
                })) {
                  weights.push(def);
                }

                if (weights.find(function (weight) {
                  return weight !== idef;
                })) {
                  if (variants.find(function (variant) {
                    return variant.includes(idef);
                  })) {
                    weights.push(idef);
                  }
                }
              }

              weights = _toConsumableArray(weights).concat(italics).sort().join(',');
              newLink = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["newStyleLinkURL"])([oldWeights, weights], link, false);
              break;

            case 'body':
              var weight = meta('wt', panel);
              weights = [];
              weights.push(weight);
              var italic = variants.findIndex(function (variant) {
                return variant.includes("".concat(weight, "i"));
              });

              if (italic !== -1) {
                weights.push("".concat(variants[italic]));
              }

              if (weights_def) {
                if (weight !== def) {
                  weights.push(def);
                }

                if (variants.findIndex(function (variant) {
                  return variant.includes(idef);
                }) !== -1) {
                  weights.push(idef);
                }
              }

              newLink = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["newStyleLinkURL"])([oldWeights, weights.sort().join(',')], link, false);
              break;

            default:
              break;
          }

          break;

        default:
          break;
      }

      link.href = link.href.replace(link.href, newLink);
      setTimeout(newstyles, timeout);
      return {
        newLink: newLink,
        link: link,
        oldFamily: oldFamily
      };
    }
    /**
     * Wrapper for changeStyles(), in case we need to add something later
     *
     * @since  1.0.0
     * @return {Void}
     */

  }, {
    key: "changeTransform",
    value: function changeTransform() {
      this.changeStyles();
    }
    /**
     * Wrapper for changeStyles(), in case we need to add something later
     *
     * @since  1.0.0
     * @return {Void}
     */

  }, {
    key: "changeLineHeight",
    value: function changeLineHeight() {
      this.changeStyles();
    }
    /**
     * Wrapper for changeStyles(), in case we need to add something later
     *
     * @since  1.0.0
     * @return {Void}
     */

  }, {
    key: "changeLetterSpacing",
    value: function changeLetterSpacing() {
      this.changeStyles();
    }
    /**
     * Wrapper for changeStyles(), in case we need to add something later
     *
     * @since  1.0.2
     * @return {Void}
     */

  }, {
    key: "changeWordSpacing",
    value: function changeWordSpacing() {
      this.changeStyles();
    }
    /**
     * Updates meta value on event
     *
     * @since  1.0.0
     * @param  {String}  panel           The panel where this is used
     * @param  {String}  type            Propriety type
     * @param  {Mixed}   value           Depending on the component, it can be a string a boolean
     * @param  {Boolean} [heading=false] Update headings meta?
     * @return {Void}
     */

  }, {
    key: "updateElement",
    value: function updateElement(panel, type, value) {
      var heading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var _this$props = this.props,
          oldmeta = _this$props.oldmeta,
          updateSingleMeta = _this$props.updateSingleMeta,
          updateHeadingsMeta = _this$props.updateHeadingsMeta;
      var meta = this.getMeta();
      var changeFW = this.changeFontsWeights;
      var args = {
        panel: panel,
        type: type,
        value: value
      };

      if (!heading) {
        updateSingleMeta(args, meta, oldmeta);
      } else {
        var hargs = {
          el: panel,
          prop: type,
          value: value
        };
        updateHeadingsMeta(hargs, meta, oldmeta);
      }

      if (['ff', 'wt'].find(function (prop) {
        return prop === type;
      })) {
        if ('wt' === type) {
          var wt = 'weights';

          if (_constants__WEBPACK_IMPORTED_MODULE_1__["HEADINGS"].find(function (heading) {
            return heading === panel;
          })) {
            changeFW('headings', wt);
          } else {
            changeFW(panel, wt);
          }
        }

        if ('ff' === type) {
          changeFW(panel, 'fonts');
        }
      }

      switch (type) {
        case 'lh':
          this.changeLineHeight();
          break;

        case 'ls':
          this.changeLetterSpacing();
          break;

        case 'tt':
          this.changeTransform();
          break;

        case 'ws':
          this.changeWordSpacing();
          break;

        default:
          break;
      }
    }
    /**
     * Render the damn thing
     * 
     * @todo     Use <Autocomplete/> for selecting fonts
     * @memberof Component|SimpleGoogleFonts
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sidebarId = _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].sidebarId,
          pluginName = _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].pluginName,
          sidebarIcon = _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].sidebarIcon;
      var meta = this.props.meta;
      var updateEl = this.updateElement;
      return React.createElement(Fragment, null, React.createElement(PluginSidebar, {
        name: sidebarId,
        title: pluginName,
        icon: sidebarIcon,
        isPinnable: true
      }, React.createElement(PanelBody, {
        title: __('Headings'),
        initialOpen: false
      }, React.createElement(SelectControl, {
        label: __('Headings font family'),
        value: meta.sgf_ff_headings,
        options: this.fontsOptions(),
        onChange: function onChange(value) {
          return updateEl('headings', 'ff', value);
        }
      }), React.createElement(TabPanel, {
        className: "sgf-headings-tabs",
        activeClass: "active-tab",
        tabs: _constants__WEBPACK_IMPORTED_MODULE_1__["HEADINGS_TABS"]
      }, function (tab) {
        var tabName = tab.hasOwnProperty('name') ? tab.name : tab;
        return React.createElement(Fragment, null, React.createElement(SelectControl, {
          label: __('Font weight:'),
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHeadingValue"])(tabName, 'wt', meta),
          options: _this2.weightsOptions(meta.sgf_ff_headings),
          onChange: function onChange(value) {
            return updateEl(tabName, 'wt', value, true);
          }
        }), React.createElement(SelectControl, {
          label: __('Text transform:'),
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHeadingValue"])(tabName, 'tt', meta),
          options: _this2.transformOptions(),
          onChange: function onChange(value) {
            return updateEl(tabName, 'tt', value, true);
          }
        }), React.createElement(RangeControl, {
          label: __('Line height:'),
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHeadingValue"])(tabName, 'lh', meta),
          min: 1,
          max: 3,
          step: 0.05,
          onChange: function onChange(value) {
            return updateEl(tabName, 'lh', value, true);
          }
        }), React.createElement(RangeControl, {
          label: __('Letter spacing:'),
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHeadingValue"])(tabName, 'ls', meta),
          min: 0,
          max: 3,
          step: 0.01,
          onChange: function onChange(value) {
            return updateEl(tabName, 'ls', value, true);
          }
        }), React.createElement(RangeControl, {
          label: __('Word spacing:'),
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHeadingValue"])(tabName, 'ws', meta),
          min: 0,
          max: 3,
          step: 0.01,
          onChange: function onChange(value) {
            return updateEl(tabName, 'ws', value, true);
          }
        }));
      })), React.createElement(PanelBody, {
        title: __('Body'),
        initialOpen: false
      }, React.createElement(SelectControl, {
        label: __('Body font family'),
        value: meta.sgf_ff_body,
        options: this.fontsOptions(),
        onChange: function onChange(value) {
          return updateEl('body', 'ff', value);
        }
      }), React.createElement(SelectControl, {
        label: __('Font weight:'),
        value: meta.sgf_wt_body,
        options: this.weightsOptions(meta.sgf_ff_body),
        onChange: function onChange(value) {
          return updateEl('body', 'wt', value);
        }
      }), React.createElement(RangeControl, {
        label: __('Line height:'),
        value: meta.sgf_lh_body,
        min: 1,
        max: 3,
        step: 0.05,
        onChange: function onChange(value) {
          return updateEl('body', 'lh', value);
        }
      }), React.createElement(RangeControl, {
        label: __('Letter spacing:'),
        value: meta.sgf_ls_body,
        min: 0,
        max: 3,
        step: 0.01,
        onChange: function onChange(value) {
          return updateEl('body', 'ls', value);
        }
      }), React.createElement(RangeControl, {
        label: __('Word spacing:'),
        value: meta.sgf_ws_body,
        min: 0,
        max: 3,
        step: 0.01,
        onChange: function onChange(value) {
          return updateEl('body', 'ws', value);
        }
      })), React.createElement(PanelBody, {
        title: __('Global Options'),
        initialOpen: false
      }, React.createElement(_components_global__WEBPACK_IMPORTED_MODULE_3__["SGFGlobalOption"], _extends({}, this.props, {
        updateEl: this.updateElement
      }))), React.createElement(PanelBody, {
        title: __('Information'),
        initialOpen: false
      }, React.createElement(_components_info__WEBPACK_IMPORTED_MODULE_4__["SGFInfoPanel"], null))), React.createElement(PluginSidebarMoreMenuItem, {
        target: _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].sidebarId,
        icon: _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].sidebarIcon
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_INFO"].pluginName));
    }
  }]);

  return SimpleGoogleFonts;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  var editor = select('core/editor');
  var postMeta = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addDefaultsToMeta"])(editor.getEditedPostAttribute('meta'));
  var oldPostMeta = editor.getCurrentPostAttribute('meta');
  var isPublished = editor.isCurrentPostPublished();
  var pageID = editor.getCurrentPostId();
  var info = {
    meta: _objectSpread({}, oldPostMeta, postMeta),
    oldmeta: oldPostMeta,
    info: {
      pageID: pageID,
      isPublished: isPublished
    }
  };
  info.meta = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addGlobalHeadings"])(info.meta);
  return info;
}), withDispatch(function (dispatch) {
  return {
    /**
     * Updates meta for headings, `single` is set to `false` in `register_meta()` and this 
     * function will make sure it updates the correct string based on `el`
     *
     * @since  1.0.0
     * @todo   Maybe use state for headings defaults 
     * @param  {Object} elements An object with some info `{ el, prop, value }`
     * @param  {Object} newmeta  Updated/new meta
     * @param  {Object} oldmeta  Previous meta
     * @return {Void}
     */
    updateHeadingsMeta: function updateHeadingsMeta(elements, newmeta) {
      var el = elements.el,
          prop = elements.prop,
          value = elements.value;
      var stringified = _utils__WEBPACK_IMPORTED_MODULE_2__["stringifyHeadingValues"];
      var parsed = _utils__WEBPACK_IMPORTED_MODULE_2__["parseHeadingValues"];
      var defaults = simpleGFonts.headings[el];
      var hdskey = 'sgf_els_headings';
      var headings = newmeta[hdskey];

      var meta = _objectSpread({}, newmeta);

      if (headings.length) {
        var found = headings.findIndex(function (item) {
          return item.startsWith(el, 3);
        });
        meta[hdskey] = _toConsumableArray(headings);

        if (found === -1) {
          defaults[prop] = value;
          meta[hdskey].push(stringified(defaults));
        } else {
          var converted = parsed(headings[found]);
          converted[prop] = value;
          meta[hdskey][found] = stringified(converted);
        }
      } else {
        meta[hdskey] = [];
        defaults[prop] = value;
        meta[hdskey].push(stringified(defaults));
      }

      dispatch('core/editor').editPost({
        meta: meta
      });
    },

    /**
     * Updates meta for single components, `single` is set to `true` in `register_meta()` 
     *
     * @since  1.0.0
     * @param  {Object} elements An object with some info `{ panel, type, value }`
     * @param  {Object} newmeta  Updated/new meta
     * @param  {Object} oldmeta  Previous meta
     * @return {Void}
     */
    updateSingleMeta: function updateSingleMeta(elements, newmeta) {
      var panel = elements.panel,
          type = elements.type,
          value = elements.value;
      var defaultWt = '400';

      if (type === 'ff') {
        value = Number(value);
      }

      var meta = _objectSpread({}, newmeta, _defineProperty({}, "sgf_".concat(type, "_").concat(panel), value));

      if (panel === 'global' && type === 'is') {
        meta.sgf_date_global = meta.sgf_is_global ? Date.now().toString() : '';
      }

      if (panel === 'body' && type === 'ff') {
        meta.sgf_wt_body = defaultWt;
      }

      if (panel === 'headings' && type === 'ff') {
        var headings = meta.sgf_els_headings;

        if (headings.length) {
          var newHeadings = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = headings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var heading = _step2.value;
              var converted = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseHeadingValues"])(heading);
              newHeadings.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stringifyHeadingValues"])(converted, 'wt', defaultWt));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          meta.sgf_els_headings = newHeadings;
        }
      }

      dispatch('core/editor').editPost({
        meta: meta
      });
    }
  };
})])(SimpleGoogleFonts));

/***/ }),

/***/ "./js/src/json/google-fonts.json":
/*!***************************************!*\
  !*** ./js/src/json/google-fonts.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, default */
/***/ (function(module) {

module.exports = [{"f":"None","v":[]},{"f":"ABeeZee","v":["400","400i"]},{"f":"Abel","v":["400"]},{"f":"Abhaya Libre","v":["400","500","600","700","800"]},{"f":"Abril Fatface","v":["400"]},{"f":"Aclonica","v":["400"]},{"f":"Acme","v":["400"]},{"f":"Actor","v":["400"]},{"f":"Adamina","v":["400"]},{"f":"Advent Pro","v":["100","200","300","400","500","600","700"]},{"f":"Aguafina Script","v":["400"]},{"f":"Akronim","v":["400"]},{"f":"Aladin","v":["400"]},{"f":"Aldrich","v":["400"]},{"f":"Alef","v":["400","700"]},{"f":"Alegreya","v":["400","400i","500","500i","700","700i","800","800i","900","900i"]},{"f":"Alegreya SC","v":["400","400i","500","500i","700","700i","800","800i","900","900i"]},{"f":"Alegreya Sans","v":["100","100i","300","300i","400","400i","500","500i","700","700i","800","800i","900","900i"]},{"f":"Alegreya Sans SC","v":["100","100i","300","300i","400","400i","500","500i","700","700i","800","800i","900","900i"]},{"f":"Alex Brush","v":["400"]},{"f":"Alfa Slab One","v":["400"]},{"f":"Alice","v":["400"]},{"f":"Alike","v":["400"]},{"f":"Alike Angular","v":["400"]},{"f":"Allan","v":["400","700"]},{"f":"Allerta","v":["400"]},{"f":"Allerta Stencil","v":["400"]},{"f":"Allura","v":["400"]},{"f":"Almendra","v":["400","400i","700","700i"]},{"f":"Almendra Display","v":["400"]},{"f":"Almendra SC","v":["400"]},{"f":"Amarante","v":["400"]},{"f":"Amaranth","v":["400","400i","700","700i"]},{"f":"Amatic SC","v":["400","700"]},{"f":"Amethysta","v":["400"]},{"f":"Amiko","v":["400","600","700"]},{"f":"Amiri","v":["400","400i","700","700i"]},{"f":"Amita","v":["400","700"]},{"f":"Anaheim","v":["400"]},{"f":"Andada","v":["400"]},{"f":"Andika","v":["400"]},{"f":"Angkor","v":["400"]},{"f":"Annie Use Your Telescope","v":["400"]},{"f":"Anonymous Pro","v":["400","400i","700","700i"]},{"f":"Antic","v":["400"]},{"f":"Antic Didone","v":["400"]},{"f":"Antic Slab","v":["400"]},{"f":"Anton","v":["400"]},{"f":"Arapey","v":["400","400i"]},{"f":"Arbutus","v":["400"]},{"f":"Arbutus Slab","v":["400"]},{"f":"Architects Daughter","v":["400"]},{"f":"Archivo","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Archivo Black","v":["400"]},{"f":"Archivo Narrow","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Aref Ruqaa","v":["400","700"]},{"f":"Arima Madurai","v":["100","200","300","400","500","700","800","900"]},{"f":"Arimo","v":["400","400i","700","700i"]},{"f":"Arizonia","v":["400"]},{"f":"Armata","v":["400"]},{"f":"Arsenal","v":["400","400i","700","700i"]},{"f":"Artifika","v":["400"]},{"f":"Arvo","v":["400","400i","700","700i"]},{"f":"Arya","v":["400","700"]},{"f":"Asap","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Asap Condensed","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Asar","v":["400"]},{"f":"Asset","v":["400"]},{"f":"Assistant","v":["200","300","400","600","700","800"]},{"f":"Astloch","v":["400","700"]},{"f":"Asul","v":["400","700"]},{"f":"Athiti","v":["200","300","400","500","600","700"]},{"f":"Atma","v":["300","400","500","600","700"]},{"f":"Atomic Age","v":["400"]},{"f":"Aubrey","v":["400"]},{"f":"Audiowide","v":["400"]},{"f":"Autour One","v":["400"]},{"f":"Average","v":["400"]},{"f":"Average Sans","v":["400"]},{"f":"Averia Gruesa Libre","v":["400"]},{"f":"Averia Libre","v":["300","300i","400","400i","700","700i"]},{"f":"Averia Sans Libre","v":["300","300i","400","400i","700","700i"]},{"f":"Averia Serif Libre","v":["300","300i","400","400i","700","700i"]},{"f":"Bad Script","v":["400"]},{"f":"Bahiana","v":["400"]},{"f":"Baloo","v":["400"]},{"f":"Baloo Bhai","v":["400"]},{"f":"Baloo Bhaijaan","v":["400"]},{"f":"Baloo Bhaina","v":["400"]},{"f":"Baloo Chettan","v":["400"]},{"f":"Baloo Da","v":["400"]},{"f":"Baloo Paaji","v":["400"]},{"f":"Baloo Tamma","v":["400"]},{"f":"Baloo Tammudu","v":["400"]},{"f":"Baloo Thambi","v":["400"]},{"f":"Balthazar","v":["400"]},{"f":"Bangers","v":["400"]},{"f":"Barlow","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Barlow Condensed","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Barlow Semi Condensed","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Barrio","v":["400"]},{"f":"Basic","v":["400"]},{"f":"Battambang","v":["400","700"]},{"f":"Baumans","v":["400"]},{"f":"Bayon","v":["400"]},{"f":"Belgrano","v":["400"]},{"f":"Bellefair","v":["400"]},{"f":"Belleza","v":["400"]},{"f":"BenchNine","v":["300","400","700"]},{"f":"Bentham","v":["400"]},{"f":"Berkshire Swash","v":["400"]},{"f":"Bevan","v":["400"]},{"f":"Bigelow Rules","v":["400"]},{"f":"Bigshot One","v":["400"]},{"f":"Bilbo","v":["400"]},{"f":"Bilbo Swash Caps","v":["400"]},{"f":"BioRhyme","v":["200","300","400","700","800"]},{"f":"BioRhyme Expanded","v":["200","300","400","700","800"]},{"f":"Biryani","v":["200","300","400","600","700","800","900"]},{"f":"Bitter","v":["400","400i","700"]},{"f":"Black And White Picture","v":["400"]},{"f":"Black Han Sans","v":["400"]},{"f":"Black Ops One","v":["400"]},{"f":"Bokor","v":["400"]},{"f":"Bonbon","v":["400"]},{"f":"Boogaloo","v":["400"]},{"f":"Bowlby One","v":["400"]},{"f":"Bowlby One SC","v":["400"]},{"f":"Brawler","v":["400"]},{"f":"Bree Serif","v":["400"]},{"f":"Bubblegum Sans","v":["400"]},{"f":"Bubbler One","v":["400"]},{"f":"Buda","v":["300"]},{"f":"Buenard","v":["400","700"]},{"f":"Bungee","v":["400"]},{"f":"Bungee Hairline","v":["400"]},{"f":"Bungee Inline","v":["400"]},{"f":"Bungee Outline","v":["400"]},{"f":"Bungee Shade","v":["400"]},{"f":"Butcherman","v":["400"]},{"f":"Butterfly Kids","v":["400"]},{"f":"Cabin","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Cabin Condensed","v":["400","500","600","700"]},{"f":"Cabin Sketch","v":["400","700"]},{"f":"Caesar Dressing","v":["400"]},{"f":"Cagliostro","v":["400"]},{"f":"Cairo","v":["200","300","400","600","700","900"]},{"f":"Calligraffitti","v":["400"]},{"f":"Cambay","v":["400","400i","700","700i"]},{"f":"Cambo","v":["400"]},{"f":"Candal","v":["400"]},{"f":"Cantarell","v":["400","400i","700","700i"]},{"f":"Cantata One","v":["400"]},{"f":"Cantora One","v":["400"]},{"f":"Capriola","v":["400"]},{"f":"Cardo","v":["400","400i","700"]},{"f":"Carme","v":["400"]},{"f":"Carrois Gothic","v":["400"]},{"f":"Carrois Gothic SC","v":["400"]},{"f":"Carter One","v":["400"]},{"f":"Catamaran","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Caudex","v":["400","400i","700","700i"]},{"f":"Caveat","v":["400","700"]},{"f":"Caveat Brush","v":["400"]},{"f":"Cedarville Cursive","v":["400"]},{"f":"Ceviche One","v":["400"]},{"f":"Changa","v":["200","300","400","500","600","700","800"]},{"f":"Changa One","v":["400","400i"]},{"f":"Chango","v":["400"]},{"f":"Chathura","v":["100","300","400","700","800"]},{"f":"Chau Philomene One","v":["400","400i"]},{"f":"Chela One","v":["400"]},{"f":"Chelsea Market","v":["400"]},{"f":"Chenla","v":["400"]},{"f":"Cherry Cream Soda","v":["400"]},{"f":"Cherry Swash","v":["400","700"]},{"f":"Chewy","v":["400"]},{"f":"Chicle","v":["400"]},{"f":"Chivo","v":["300","300i","400","400i","700","700i","900","900i"]},{"f":"Chonburi","v":["400"]},{"f":"Cinzel","v":["400","700","900"]},{"f":"Cinzel Decorative","v":["400","700","900"]},{"f":"Clicker Script","v":["400"]},{"f":"Coda","v":["400","800"]},{"f":"Coda Caption","v":["800"]},{"f":"Codystar","v":["300","400"]},{"f":"Coiny","v":["400"]},{"f":"Combo","v":["400"]},{"f":"Comfortaa","v":["300","400","700"]},{"f":"Coming Soon","v":["400"]},{"f":"Concert One","v":["400"]},{"f":"Condiment","v":["400"]},{"f":"Content","v":["400","700"]},{"f":"Contrail One","v":["400"]},{"f":"Convergence","v":["400"]},{"f":"Cookie","v":["400"]},{"f":"Copse","v":["400"]},{"f":"Corben","v":["400","700"]},{"f":"Cormorant","v":["300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"Cormorant Garamond","v":["300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"Cormorant Infant","v":["300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"Cormorant SC","v":["300","400","500","600","700"]},{"f":"Cormorant Unicase","v":["300","400","500","600","700"]},{"f":"Cormorant Upright","v":["300","400","500","600","700"]},{"f":"Courgette","v":["400"]},{"f":"Cousine","v":["400","400i","700","700i"]},{"f":"Coustard","v":["400","900"]},{"f":"Covered By Your Grace","v":["400"]},{"f":"Crafty Girls","v":["400"]},{"f":"Creepster","v":["400"]},{"f":"Crete Round","v":["400","400i"]},{"f":"Crimson Text","v":["400","400i","600","600i","700","700i"]},{"f":"Croissant One","v":["400"]},{"f":"Crushed","v":["400"]},{"f":"Cuprum","v":["400","400i","700","700i"]},{"f":"Cute Font","v":["400"]},{"f":"Cutive","v":["400"]},{"f":"Cutive Mono","v":["400"]},{"f":"Damion","v":["400"]},{"f":"Dancing Script","v":["400","700"]},{"f":"Dangrek","v":["400"]},{"f":"David Libre","v":["400","500","700"]},{"f":"Dawning of a New Day","v":["400"]},{"f":"Days One","v":["400"]},{"f":"Dekko","v":["400"]},{"f":"Delius","v":["400"]},{"f":"Delius Swash Caps","v":["400"]},{"f":"Delius Unicase","v":["400","700"]},{"f":"Della Respira","v":["400"]},{"f":"Denk One","v":["400"]},{"f":"Devonshire","v":["400"]},{"f":"Dhurjati","v":["400"]},{"f":"Didact Gothic","v":["400"]},{"f":"Diplomata","v":["400"]},{"f":"Diplomata SC","v":["400"]},{"f":"Do Hyeon","v":["400"]},{"f":"Dokdo","v":["400"]},{"f":"Domine","v":["400","700"]},{"f":"Donegal One","v":["400"]},{"f":"Doppio One","v":["400"]},{"f":"Dorsa","v":["400"]},{"f":"Dosis","v":["200","300","400","500","600","700","800"]},{"f":"Dr Sugiyama","v":["400"]},{"f":"Duru Sans","v":["400"]},{"f":"Dynalight","v":["400"]},{"f":"EB Garamond","v":["400","400i","500","500i","600","600i","700","700i","800","800i"]},{"f":"Eagle Lake","v":["400"]},{"f":"East Sea Dokdo","v":["400"]},{"f":"Eater","v":["400"]},{"f":"Economica","v":["400","400i","700","700i"]},{"f":"Eczar","v":["400","500","600","700","800"]},{"f":"El Messiri","v":["400","500","600","700"]},{"f":"Electrolize","v":["400"]},{"f":"Elsie","v":["400","900"]},{"f":"Elsie Swash Caps","v":["400","900"]},{"f":"Emblema One","v":["400"]},{"f":"Emilys Candy","v":["400"]},{"f":"Encode Sans","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Encode Sans Condensed","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Encode Sans Expanded","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Encode Sans Semi Condensed","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Encode Sans Semi Expanded","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Engagement","v":["400"]},{"f":"Englebert","v":["400"]},{"f":"Enriqueta","v":["400","700"]},{"f":"Erica One","v":["400"]},{"f":"Esteban","v":["400"]},{"f":"Euphoria Script","v":["400"]},{"f":"Ewert","v":["400"]},{"f":"Exo","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Exo 2","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Expletus Sans","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Fanwood Text","v":["400","400i"]},{"f":"Farsan","v":["400"]},{"f":"Fascinate","v":["400"]},{"f":"Fascinate Inline","v":["400"]},{"f":"Faster One","v":["400"]},{"f":"Fasthand","v":["400"]},{"f":"Fauna One","v":["400"]},{"f":"Faustina","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Federant","v":["400"]},{"f":"Federo","v":["400"]},{"f":"Felipa","v":["400"]},{"f":"Fenix","v":["400"]},{"f":"Finger Paint","v":["400"]},{"f":"Fira Mono","v":["400","500","700"]},{"f":"Fira Sans","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Fira Sans Condensed","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Fira Sans Extra Condensed","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Fjalla One","v":["400"]},{"f":"Fjord One","v":["400"]},{"f":"Flamenco","v":["300","400"]},{"f":"Flavors","v":["400"]},{"f":"Fondamento","v":["400","400i"]},{"f":"Fontdiner Swanky","v":["400"]},{"f":"Forum","v":["400"]},{"f":"Francois One","v":["400"]},{"f":"Frank Ruhl Libre","v":["300","400","500","700","900"]},{"f":"Freckle Face","v":["400"]},{"f":"Fredericka the Great","v":["400"]},{"f":"Fredoka One","v":["400"]},{"f":"Freehand","v":["400"]},{"f":"Fresca","v":["400"]},{"f":"Frijole","v":["400"]},{"f":"Fruktur","v":["400"]},{"f":"Fugaz One","v":["400"]},{"f":"GFS Didot","v":["400"]},{"f":"GFS Neohellenic","v":["400","400i","700","700i"]},{"f":"Gabriela","v":["400"]},{"f":"Gaegu","v":["300","400","700"]},{"f":"Gafata","v":["400"]},{"f":"Galada","v":["400"]},{"f":"Galdeano","v":["400"]},{"f":"Galindo","v":["400"]},{"f":"Gamja Flower","v":["400"]},{"f":"Gentium Basic","v":["400","400i","700","700i"]},{"f":"Gentium Book Basic","v":["400","400i","700","700i"]},{"f":"Geo","v":["400","400i"]},{"f":"Geostar","v":["400"]},{"f":"Geostar Fill","v":["400"]},{"f":"Germania One","v":["400"]},{"f":"Gidugu","v":["400"]},{"f":"Gilda Display","v":["400"]},{"f":"Give You Glory","v":["400"]},{"f":"Glass Antiqua","v":["400"]},{"f":"Glegoo","v":["400","700"]},{"f":"Gloria Hallelujah","v":["400"]},{"f":"Goblin One","v":["400"]},{"f":"Gochi Hand","v":["400"]},{"f":"Gorditas","v":["400","700"]},{"f":"Gothic A1","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Goudy Bookletter 1911","v":["400"]},{"f":"Graduate","v":["400"]},{"f":"Grand Hotel","v":["400"]},{"f":"Gravitas One","v":["400"]},{"f":"Great Vibes","v":["400"]},{"f":"Griffy","v":["400"]},{"f":"Gruppo","v":["400"]},{"f":"Gudea","v":["400","400i","700"]},{"f":"Gugi","v":["400"]},{"f":"Gurajada","v":["400"]},{"f":"Habibi","v":["400"]},{"f":"Halant","v":["300","400","500","600","700"]},{"f":"Hammersmith One","v":["400"]},{"f":"Hanalei","v":["400"]},{"f":"Hanalei Fill","v":["400"]},{"f":"Handlee","v":["400"]},{"f":"Hanuman","v":["400","700"]},{"f":"Happy Monkey","v":["400"]},{"f":"Harmattan","v":["400"]},{"f":"Headland One","v":["400"]},{"f":"Heebo","v":["100","300","400","500","700","800","900"]},{"f":"Henny Penny","v":["400"]},{"f":"Herr Von Muellerhoff","v":["400"]},{"f":"Hi Melody","v":["400"]},{"f":"Hind","v":["300","400","500","600","700"]},{"f":"Hind Guntur","v":["300","400","500","600","700"]},{"f":"Hind Madurai","v":["300","400","500","600","700"]},{"f":"Hind Siliguri","v":["300","400","500","600","700"]},{"f":"Hind Vadodara","v":["300","400","500","600","700"]},{"f":"Holtwood One SC","v":["400"]},{"f":"Homemade Apple","v":["400"]},{"f":"Homenaje","v":["400"]},{"f":"IBM Plex Mono","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"IBM Plex Sans","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"IBM Plex Sans Condensed","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"IBM Plex Serif","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"IM Fell DW Pica","v":["400","400i"]},{"f":"IM Fell DW Pica SC","v":["400"]},{"f":"IM Fell Double Pica","v":["400","400i"]},{"f":"IM Fell Double Pica SC","v":["400"]},{"f":"IM Fell English","v":["400","400i"]},{"f":"IM Fell English SC","v":["400"]},{"f":"IM Fell French Canon","v":["400","400i"]},{"f":"IM Fell French Canon SC","v":["400"]},{"f":"IM Fell Great Primer","v":["400","400i"]},{"f":"IM Fell Great Primer SC","v":["400"]},{"f":"Iceberg","v":["400"]},{"f":"Iceland","v":["400"]},{"f":"Imprima","v":["400"]},{"f":"Inconsolata","v":["400","700"]},{"f":"Inder","v":["400"]},{"f":"Indie Flower","v":["400"]},{"f":"Inika","v":["400","700"]},{"f":"Inknut Antiqua","v":["300","400","500","600","700","800","900"]},{"f":"Irish Grover","v":["400"]},{"f":"Istok Web","v":["400","400i","700","700i"]},{"f":"Italiana","v":["400"]},{"f":"Italianno","v":["400"]},{"f":"Itim","v":["400"]},{"f":"Jacques Francois","v":["400"]},{"f":"Jacques Francois Shadow","v":["400"]},{"f":"Jaldi","v":["400","700"]},{"f":"Jim Nightshade","v":["400"]},{"f":"Jockey One","v":["400"]},{"f":"Jolly Lodger","v":["400"]},{"f":"Jomhuria","v":["400"]},{"f":"Josefin Sans","v":["100","100i","300","300i","400","400i","600","600i","700","700i"]},{"f":"Josefin Slab","v":["100","100i","300","300i","400","400i","600","600i","700","700i"]},{"f":"Joti One","v":["400"]},{"f":"Jua","v":["400"]},{"f":"Judson","v":["400","400i","700"]},{"f":"Julee","v":["400"]},{"f":"Julius Sans One","v":["400"]},{"f":"Junge","v":["400"]},{"f":"Jura","v":["300","400","500","600","700"]},{"f":"Just Another Hand","v":["400"]},{"f":"Just Me Again Down Here","v":["400"]},{"f":"Kadwa","v":["400","700"]},{"f":"Kalam","v":["300","400","700"]},{"f":"Kameron","v":["400","700"]},{"f":"Kanit","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Kantumruy","v":["300","400","700"]},{"f":"Karla","v":["400","400i","700","700i"]},{"f":"Karma","v":["300","400","500","600","700"]},{"f":"Katibeh","v":["400"]},{"f":"Kaushan Script","v":["400"]},{"f":"Kavivanar","v":["400"]},{"f":"Kavoon","v":["400"]},{"f":"Kdam Thmor","v":["400"]},{"f":"Keania One","v":["400"]},{"f":"Kelly Slab","v":["400"]},{"f":"Kenia","v":["400"]},{"f":"Khand","v":["300","400","500","600","700"]},{"f":"Khmer","v":["400"]},{"f":"Khula","v":["300","400","600","700","800"]},{"f":"Kirang Haerang","v":["400"]},{"f":"Kite One","v":["400"]},{"f":"Knewave","v":["400"]},{"f":"Kotta One","v":["400"]},{"f":"Koulen","v":["400"]},{"f":"Kranky","v":["400"]},{"f":"Kreon","v":["300","400","700"]},{"f":"Kristi","v":["400"]},{"f":"Krona One","v":["400"]},{"f":"Kumar One","v":["400"]},{"f":"Kumar One Outline","v":["400"]},{"f":"Kurale","v":["400"]},{"f":"La Belle Aurore","v":["400"]},{"f":"Laila","v":["300","400","500","600","700"]},{"f":"Lakki Reddy","v":["400"]},{"f":"Lalezar","v":["400"]},{"f":"Lancelot","v":["400"]},{"f":"Lateef","v":["400"]},{"f":"Lato","v":["100","100i","300","300i","400","400i","700","700i","900","900i"]},{"f":"League Script","v":["400"]},{"f":"Leckerli One","v":["400"]},{"f":"Ledger","v":["400"]},{"f":"Lekton","v":["400","400i","700"]},{"f":"Lemon","v":["400"]},{"f":"Lemonada","v":["300","400","600","700"]},{"f":"Libre Barcode 128","v":["400"]},{"f":"Libre Barcode 128 Text","v":["400"]},{"f":"Libre Barcode 39","v":["400"]},{"f":"Libre Barcode 39 Extended","v":["400"]},{"f":"Libre Barcode 39 Extended Text","v":["400"]},{"f":"Libre Barcode 39 Text","v":["400"]},{"f":"Libre Baskerville","v":["400","400i","700"]},{"f":"Libre Franklin","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Life Savers","v":["400","700"]},{"f":"Lilita One","v":["400"]},{"f":"Lily Script One","v":["400"]},{"f":"Limelight","v":["400"]},{"f":"Linden Hill","v":["400","400i"]},{"f":"Lobster","v":["400"]},{"f":"Lobster Two","v":["400","400i","700","700i"]},{"f":"Londrina Outline","v":["400"]},{"f":"Londrina Shadow","v":["400"]},{"f":"Londrina Sketch","v":["400"]},{"f":"Londrina Solid","v":["100","300","400","900"]},{"f":"Lora","v":["400","400i","700","700i"]},{"f":"Love Ya Like A Sister","v":["400"]},{"f":"Loved by the King","v":["400"]},{"f":"Lovers Quarrel","v":["400"]},{"f":"Luckiest Guy","v":["400"]},{"f":"Lusitana","v":["400","700"]},{"f":"Lustria","v":["400"]},{"f":"Macondo","v":["400"]},{"f":"Macondo Swash Caps","v":["400"]},{"f":"Mada","v":["200","300","400","500","600","700","900"]},{"f":"Magra","v":["400","700"]},{"f":"Maiden Orange","v":["400"]},{"f":"Maitree","v":["200","300","400","500","600","700"]},{"f":"Mako","v":["400"]},{"f":"Mallanna","v":["400"]},{"f":"Mandali","v":["400"]},{"f":"Manuale","v":["400","400i","500","500i","600","600i","700","700i"]},{"f":"Marcellus","v":["400"]},{"f":"Marcellus SC","v":["400"]},{"f":"Marck Script","v":["400"]},{"f":"Margarine","v":["400"]},{"f":"Marko One","v":["400"]},{"f":"Marmelad","v":["400"]},{"f":"Martel","v":["200","300","400","600","700","800","900"]},{"f":"Martel Sans","v":["200","300","400","600","700","800","900"]},{"f":"Marvel","v":["400","400i","700","700i"]},{"f":"Mate","v":["400","400i"]},{"f":"Mate SC","v":["400"]},{"f":"Maven Pro","v":["400","500","700","900"]},{"f":"McLaren","v":["400"]},{"f":"Meddon","v":["400"]},{"f":"MedievalSharp","v":["400"]},{"f":"Medula One","v":["400"]},{"f":"Meera Inimai","v":["400"]},{"f":"Megrim","v":["400"]},{"f":"Meie Script","v":["400"]},{"f":"Merienda","v":["400","700"]},{"f":"Merienda One","v":["400"]},{"f":"Merriweather","v":["300","300i","400","400i","700","700i","900","900i"]},{"f":"Merriweather Sans","v":["300","300i","400","400i","700","700i","800","800i"]},{"f":"Metal","v":["400"]},{"f":"Metal Mania","v":["400"]},{"f":"Metamorphous","v":["400"]},{"f":"Metrophobic","v":["400"]},{"f":"Michroma","v":["400"]},{"f":"Milonga","v":["400"]},{"f":"Miltonian","v":["400"]},{"f":"Miltonian Tattoo","v":["400"]},{"f":"Mina","v":["400","700"]},{"f":"Miniver","v":["400"]},{"f":"Miriam Libre","v":["400","700"]},{"f":"Mirza","v":["400","500","600","700"]},{"f":"Miss Fajardose","v":["400"]},{"f":"Mitr","v":["200","300","400","500","600","700"]},{"f":"Modak","v":["400"]},{"f":"Modern Antiqua","v":["400"]},{"f":"Mogra","v":["400"]},{"f":"Molengo","v":["400"]},{"f":"Molle","v":["400i"]},{"f":"Monda","v":["400","700"]},{"f":"Monofett","v":["400"]},{"f":"Monoton","v":["400"]},{"f":"Monsieur La Doulaise","v":["400"]},{"f":"Montaga","v":["400"]},{"f":"Montez","v":["400"]},{"f":"Montserrat","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Montserrat Alternates","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Montserrat Subrayada","v":["400","700"]},{"f":"Moul","v":["400"]},{"f":"Moulpali","v":["400"]},{"f":"Mountains of Christmas","v":["400","700"]},{"f":"Mouse Memoirs","v":["400"]},{"f":"Mr Bedfort","v":["400"]},{"f":"Mr Dafoe","v":["400"]},{"f":"Mr De Haviland","v":["400"]},{"f":"Mrs Saint Delafield","v":["400"]},{"f":"Mrs Sheppards","v":["400"]},{"f":"Mukta","v":["200","300","400","500","600","700","800"]},{"f":"Mukta Mahee","v":["200","300","400","500","600","700","800"]},{"f":"Mukta Malar","v":["200","300","400","500","600","700","800"]},{"f":"Mukta Vaani","v":["200","300","400","500","600","700","800"]},{"f":"Muli","v":["200","200i","300","300i","400","400i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Mystery Quest","v":["400"]},{"f":"NTR","v":["400"]},{"f":"Nanum Brush Script","v":["400"]},{"f":"Nanum Gothic","v":["400","700","800"]},{"f":"Nanum Gothic Coding","v":["400","700"]},{"f":"Nanum Myeongjo","v":["400","700","800"]},{"f":"Nanum Pen Script","v":["400"]},{"f":"Neucha","v":["400"]},{"f":"Neuton","v":["200","300","400","400i","700","800"]},{"f":"New Rocker","v":["400"]},{"f":"News Cycle","v":["400","700"]},{"f":"Niconne","v":["400"]},{"f":"Nixie One","v":["400"]},{"f":"Nobile","v":["400","400i","500","500i","700","700i"]},{"f":"Nokora","v":["400","700"]},{"f":"Norican","v":["400"]},{"f":"Nosifer","v":["400"]},{"f":"Nothing You Could Do","v":["400"]},{"f":"Noticia Text","v":["400","400i","700","700i"]},{"f":"Noto Sans","v":["400","400i","700","700i"]},{"f":"Noto Serif","v":["400","400i","700","700i"]},{"f":"Nova Cut","v":["400"]},{"f":"Nova Flat","v":["400"]},{"f":"Nova Mono","v":["400"]},{"f":"Nova Oval","v":["400"]},{"f":"Nova Round","v":["400"]},{"f":"Nova Script","v":["400"]},{"f":"Nova Slim","v":["400"]},{"f":"Nova Square","v":["400"]},{"f":"Numans","v":["400"]},{"f":"Nunito","v":["200","200i","300","300i","400","400i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Nunito Sans","v":["200","200i","300","300i","400","400i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Odor Mean Chey","v":["400"]},{"f":"Offside","v":["400"]},{"f":"Old Standard TT","v":["400","400i","700"]},{"f":"Oldenburg","v":["400"]},{"f":"Oleo Script","v":["400","700"]},{"f":"Oleo Script Swash Caps","v":["400","700"]},{"f":"Open Sans","v":["300","300i","400","400i","600","600i","700","700i","800","800i"]},{"f":"Open Sans Condensed","v":["300","300i","700"]},{"f":"Oranienbaum","v":["400"]},{"f":"Orbitron","v":["400","500","700","900"]},{"f":"Oregano","v":["400","400i"]},{"f":"Orienta","v":["400"]},{"f":"Original Surfer","v":["400"]},{"f":"Oswald","v":["200","300","400","500","600","700"]},{"f":"Over the Rainbow","v":["400"]},{"f":"Overlock","v":["400","400i","700","700i","900","900i"]},{"f":"Overlock SC","v":["400"]},{"f":"Overpass","v":["100","100i","200","200i","300","300i","400","400i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Overpass Mono","v":["300","400","600","700"]},{"f":"Ovo","v":["400"]},{"f":"Oxygen","v":["300","400","700"]},{"f":"Oxygen Mono","v":["400"]},{"f":"PT Mono","v":["400"]},{"f":"PT Sans","v":["400","400i","700","700i"]},{"f":"PT Sans Caption","v":["400","700"]},{"f":"PT Sans Narrow","v":["400","700"]},{"f":"PT Serif","v":["400","400i","700","700i"]},{"f":"PT Serif Caption","v":["400","400i"]},{"f":"Pacifico","v":["400"]},{"f":"Padauk","v":["400","700"]},{"f":"Palanquin","v":["100","200","300","400","500","600","700"]},{"f":"Palanquin Dark","v":["400","500","600","700"]},{"f":"Pangolin","v":["400"]},{"f":"Paprika","v":["400"]},{"f":"Parisienne","v":["400"]},{"f":"Passero One","v":["400"]},{"f":"Passion One","v":["400","700","900"]},{"f":"Pathway Gothic One","v":["400"]},{"f":"Patrick Hand","v":["400"]},{"f":"Patrick Hand SC","v":["400"]},{"f":"Pattaya","v":["400"]},{"f":"Patua One","v":["400"]},{"f":"Pavanam","v":["400"]},{"f":"Paytone One","v":["400"]},{"f":"Peddana","v":["400"]},{"f":"Peralta","v":["400"]},{"f":"Permanent Marker","v":["400"]},{"f":"Petit Formal Script","v":["400"]},{"f":"Petrona","v":["400"]},{"f":"Philosopher","v":["400","400i","700","700i"]},{"f":"Piedra","v":["400"]},{"f":"Pinyon Script","v":["400"]},{"f":"Pirata One","v":["400"]},{"f":"Plaster","v":["400"]},{"f":"Play","v":["400","700"]},{"f":"Playball","v":["400"]},{"f":"Playfair Display","v":["400","400i","700","700i","900","900i"]},{"f":"Playfair Display SC","v":["400","400i","700","700i","900","900i"]},{"f":"Podkova","v":["400","500","600","700","800"]},{"f":"Poiret One","v":["400"]},{"f":"Poller One","v":["400"]},{"f":"Poly","v":["400","400i"]},{"f":"Pompiere","v":["400"]},{"f":"Pontano Sans","v":["400"]},{"f":"Poor Story","v":["400"]},{"f":"Poppins","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Port Lligat Sans","v":["400"]},{"f":"Port Lligat Slab","v":["400"]},{"f":"Pragati Narrow","v":["400","700"]},{"f":"Prata","v":["400"]},{"f":"Preahvihear","v":["400"]},{"f":"Press Start 2P","v":["400"]},{"f":"Pridi","v":["200","300","400","500","600","700"]},{"f":"Princess Sofia","v":["400"]},{"f":"Prociono","v":["400"]},{"f":"Prompt","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Prosto One","v":["400"]},{"f":"Proza Libre","v":["400","400i","500","500i","600","600i","700","700i","800","800i"]},{"f":"Puritan","v":["400","400i","700","700i"]},{"f":"Purple Purse","v":["400"]},{"f":"Quando","v":["400"]},{"f":"Quantico","v":["400","400i","700","700i"]},{"f":"Quattrocento","v":["400","700"]},{"f":"Quattrocento Sans","v":["400","400i","700","700i"]},{"f":"Questrial","v":["400"]},{"f":"Quicksand","v":["300","400","500","700"]},{"f":"Quintessential","v":["400"]},{"f":"Qwigley","v":["400"]},{"f":"Racing Sans One","v":["400"]},{"f":"Radley","v":["400","400i"]},{"f":"Rajdhani","v":["300","400","500","600","700"]},{"f":"Rakkas","v":["400"]},{"f":"Raleway","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Raleway Dots","v":["400"]},{"f":"Ramabhadra","v":["400"]},{"f":"Ramaraja","v":["400"]},{"f":"Rambla","v":["400","400i","700","700i"]},{"f":"Rammetto One","v":["400"]},{"f":"Ranchers","v":["400"]},{"f":"Rancho","v":["400"]},{"f":"Ranga","v":["400","700"]},{"f":"Rasa","v":["300","400","500","600","700"]},{"f":"Rationale","v":["400"]},{"f":"Ravi Prakash","v":["400"]},{"f":"Redressed","v":["400"]},{"f":"Reem Kufi","v":["400"]},{"f":"Reenie Beanie","v":["400"]},{"f":"Revalia","v":["400"]},{"f":"Rhodium Libre","v":["400"]},{"f":"Ribeye","v":["400"]},{"f":"Ribeye Marrow","v":["400"]},{"f":"Righteous","v":["400"]},{"f":"Risque","v":["400"]},{"f":"Roboto","v":["100","100i","300","300i","400","400i","500","500i","700","700i","900","900i"]},{"f":"Roboto Condensed","v":["300","300i","400","400i","700","700i"]},{"f":"Roboto Mono","v":["100","100i","300","300i","400","400i","500","500i","700","700i"]},{"f":"Roboto Slab","v":["100","300","400","700"]},{"f":"Rochester","v":["400"]},{"f":"Rock Salt","v":["400"]},{"f":"Rokkitt","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Romanesco","v":["400"]},{"f":"Ropa Sans","v":["400","400i"]},{"f":"Rosario","v":["400","400i","700","700i"]},{"f":"Rosarivo","v":["400","400i"]},{"f":"Rouge Script","v":["400"]},{"f":"Rozha One","v":["400"]},{"f":"Rubik","v":["300","300i","400","400i","500","500i","700","700i","900","900i"]},{"f":"Rubik Mono One","v":["400"]},{"f":"Ruda","v":["400","700","900"]},{"f":"Rufina","v":["400","700"]},{"f":"Ruge Boogie","v":["400"]},{"f":"Ruluko","v":["400"]},{"f":"Rum Raisin","v":["400"]},{"f":"Ruslan Display","v":["400"]},{"f":"Russo One","v":["400"]},{"f":"Ruthie","v":["400"]},{"f":"Rye","v":["400"]},{"f":"Sacramento","v":["400"]},{"f":"Sahitya","v":["400","700"]},{"f":"Sail","v":["400"]},{"f":"Saira","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Saira Condensed","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Saira Extra Condensed","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Saira Semi Condensed","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Salsa","v":["400"]},{"f":"Sanchez","v":["400","400i"]},{"f":"Sancreek","v":["400"]},{"f":"Sansita","v":["400","400i","700","700i","800","800i","900","900i"]},{"f":"Sarala","v":["400","700"]},{"f":"Sarina","v":["400"]},{"f":"Sarpanch","v":["400","500","600","700","800","900"]},{"f":"Satisfy","v":["400"]},{"f":"Scada","v":["400","400i","700","700i"]},{"f":"Scheherazade","v":["400","700"]},{"f":"Schoolbell","v":["400"]},{"f":"Scope One","v":["400"]},{"f":"Seaweed Script","v":["400"]},{"f":"Secular One","v":["400"]},{"f":"Sedgwick Ave","v":["400"]},{"f":"Sedgwick Ave Display","v":["400"]},{"f":"Sevillana","v":["400"]},{"f":"Seymour One","v":["400"]},{"f":"Shadows Into Light","v":["400"]},{"f":"Shadows Into Light Two","v":["400"]},{"f":"Shanti","v":["400"]},{"f":"Share","v":["400","400i","700","700i"]},{"f":"Share Tech","v":["400"]},{"f":"Share Tech Mono","v":["400"]},{"f":"Shojumaru","v":["400"]},{"f":"Short Stack","v":["400"]},{"f":"Shrikhand","v":["400"]},{"f":"Siemreap","v":["400"]},{"f":"Sigmar One","v":["400"]},{"f":"Signika","v":["300","400","600","700"]},{"f":"Signika Negative","v":["300","400","600","700"]},{"f":"Simonetta","v":["400","400i","900","900i"]},{"f":"Sintony","v":["400","700"]},{"f":"Sirin Stencil","v":["400"]},{"f":"Six Caps","v":["400"]},{"f":"Skranji","v":["400","700"]},{"f":"Slabo 13px","v":["400"]},{"f":"Slabo 27px","v":["400"]},{"f":"Slackey","v":["400"]},{"f":"Smokum","v":["400"]},{"f":"Smythe","v":["400"]},{"f":"Sniglet","v":["400","800"]},{"f":"Snippet","v":["400"]},{"f":"Snowburst One","v":["400"]},{"f":"Sofadi One","v":["400"]},{"f":"Sofia","v":["400"]},{"f":"Song Myung","v":["400"]},{"f":"Sonsie One","v":["400"]},{"f":"Sorts Mill Goudy","v":["400","400i"]},{"f":"Source Code Pro","v":["200","300","400","500","600","700","900"]},{"f":"Source Sans Pro","v":["200","200i","300","300i","400","400i","600","600i","700","700i","900","900i"]},{"f":"Source Serif Pro","v":["400","600","700"]},{"f":"Space Mono","v":["400","400i","700","700i"]},{"f":"Special Elite","v":["400"]},{"f":"Spectral","v":["200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i"]},{"f":"Spectral SC","v":["200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i"]},{"f":"Spicy Rice","v":["400"]},{"f":"Spinnaker","v":["400"]},{"f":"Spirax","v":["400"]},{"f":"Squada One","v":["400"]},{"f":"Sree Krushnadevaraya","v":["400"]},{"f":"Sriracha","v":["400"]},{"f":"Stalemate","v":["400"]},{"f":"Stalinist One","v":["400"]},{"f":"Stardos Stencil","v":["400","700"]},{"f":"Stint Ultra Condensed","v":["400"]},{"f":"Stint Ultra Expanded","v":["400"]},{"f":"Stoke","v":["300","400"]},{"f":"Strait","v":["400"]},{"f":"Stylish","v":["400"]},{"f":"Sue Ellen Francisco","v":["400"]},{"f":"Suez One","v":["400"]},{"f":"Sumana","v":["400","700"]},{"f":"Sunflower","v":["300","500","700"]},{"f":"Sunshiney","v":["400"]},{"f":"Supermercado One","v":["400"]},{"f":"Sura","v":["400","700"]},{"f":"Suranna","v":["400"]},{"f":"Suravaram","v":["400"]},{"f":"Suwannaphum","v":["400"]},{"f":"Swanky and Moo Moo","v":["400"]},{"f":"Syncopate","v":["400","700"]},{"f":"Tajawal","v":["200","300","400","500","700","800","900"]},{"f":"Tangerine","v":["400","700"]},{"f":"Taprom","v":["400"]},{"f":"Tauri","v":["400"]},{"f":"Taviraj","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Teko","v":["300","400","500","600","700"]},{"f":"Telex","v":["400"]},{"f":"Tenali Ramakrishna","v":["400"]},{"f":"Tenor Sans","v":["400"]},{"f":"Text Me One","v":["400"]},{"f":"The Girl Next Door","v":["400"]},{"f":"Tienne","v":["400","700","900"]},{"f":"Tillana","v":["400","500","600","700","800"]},{"f":"Timmana","v":["400"]},{"f":"Tinos","v":["400","400i","700","700i"]},{"f":"Titan One","v":["400"]},{"f":"Titillium Web","v":["200","200i","300","300i","400","400i","600","600i","700","700i","900"]},{"f":"Trade Winds","v":["400"]},{"f":"Trirong","v":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]},{"f":"Trocchi","v":["400"]},{"f":"Trochut","v":["400","400i","700"]},{"f":"Trykker","v":["400"]},{"f":"Tulpen One","v":["400"]},{"f":"Ubuntu","v":["300","300i","400","400i","500","500i","700","700i"]},{"f":"Ubuntu Condensed","v":["400"]},{"f":"Ubuntu Mono","v":["400","400i","700","700i"]},{"f":"Ultra","v":["400"]},{"f":"Uncial Antiqua","v":["400"]},{"f":"Underdog","v":["400"]},{"f":"Unica One","v":["400"]},{"f":"UnifrakturCook","v":["700"]},{"f":"UnifrakturMaguntia","v":["400"]},{"f":"Unkempt","v":["400","700"]},{"f":"Unlock","v":["400"]},{"f":"Unna","v":["400","400i","700","700i"]},{"f":"VT323","v":["400"]},{"f":"Vampiro One","v":["400"]},{"f":"Varela","v":["400"]},{"f":"Varela Round","v":["400"]},{"f":"Vast Shadow","v":["400"]},{"f":"Vesper Libre","v":["400","500","700","900"]},{"f":"Vibur","v":["400"]},{"f":"Vidaloka","v":["400"]},{"f":"Viga","v":["400"]},{"f":"Voces","v":["400"]},{"f":"Volkhov","v":["400","400i","700","700i"]},{"f":"Vollkorn","v":["400","400i","600","600i","700","700i","900","900i"]},{"f":"Vollkorn SC","v":["400","600","700","900"]},{"f":"Voltaire","v":["400"]},{"f":"Waiting for the Sunrise","v":["400"]},{"f":"Wallpoet","v":["400"]},{"f":"Walter Turncoat","v":["400"]},{"f":"Warnes","v":["400"]},{"f":"Wellfleet","v":["400"]},{"f":"Wendy One","v":["400"]},{"f":"Wire One","v":["400"]},{"f":"Work Sans","v":["100","200","300","400","500","600","700","800","900"]},{"f":"Yanone Kaffeesatz","v":["200","300","400","700"]},{"f":"Yantramanav","v":["100","300","400","500","700","900"]},{"f":"Yatra One","v":["400"]},{"f":"Yellowtail","v":["400"]},{"f":"Yeon Sung","v":["400"]},{"f":"Yeseva One","v":["400"]},{"f":"Yesteryear","v":["400"]},{"f":"Yrsa","v":["300","400","500","600","700"]},{"f":"Zeyada","v":["400"]},{"f":"Zilla Slab","v":["300","300i","400","400i","500","500i","600","600i","700","700i"]},{"f":"Zilla Slab Highlight","v":["400","700"]}];

/***/ }),

/***/ "./js/src/styles.js":
/*!**************************!*\
  !*** ./js/src/styles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return theStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/src/utils.js");


/**
 * Creates the inline CSS styles based on the meta information it receives
 *
 * @since  1.0.0
 * @param  {Object} meta     Current post meta
 * @param  {Object} fontsObj Google Fonts object from JSON 
 * @return {Void}
 */

function theStyles(meta, fontsObj) {
  var ffh = meta.sgf_ff_headings,
      ffb = meta.sgf_ff_body;
  var hFont = fontsObj[ffh].f;
  var bFont = fontsObj[ffb].f;
  var styleTag = document.querySelector("#".concat(simpleGFonts['style_id']));
  var hMeta = meta.sgf_els_headings;
  var _simpleGFonts = simpleGFonts,
      defaults = _simpleGFonts.defaults,
      hDef = _simpleGFonts.headings;
  styleTag.textContent = '';

  if (ffb !== 0 || ffh !== 0) {
    styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] {\n                    font-weight: 400 !important;\n                    font-style: normal;\n                }\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h1,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h2,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h3,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h4,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h5,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h6,\n                body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                    font-weight: 400 !important;\n                    font-style: normal;\n                }";
  }

  if (ffb !== 0) {
    styleTag.textContent += "\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"],\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] *,\n            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input,\n            body.gutenberg-editor-page .editor-default-block-appender__content {\n                font-family: '".concat(bFont, "', sans-serif !important;\n            }");
  }

  if (ffh !== 0) {
    styleTag.textContent += "\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h1,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h2,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h3,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h4,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h5,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h6,\n            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h1 *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h2 *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h3 *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h4 *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h5 *,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] h6 *,\n            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input * {\n                font-family: '".concat(hFont, "', sans-serif !important;\n            }");
  }

  if (meta.sgf_wt_body !== '400') {
    styleTag.textContent += "\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"],\n            body.gutenberg-editor-page .editor-default-block-appender__content {\n                font-weight: ".concat(meta.sgf_wt_body, " !important;\n            }\n        ");
  }

  if (meta.sgf_lh_body !== defaults.body.lh) {
    styleTag.textContent += "\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"],\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] p,\n            body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] p {\n                line-height: ".concat(meta.sgf_lh_body, " !important;\n            }\n        ");
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var heading = _step.value;
      var headingMeta = hMeta.find(function (item) {
        return item.startsWith(heading, 3);
      });
      var hParsed = headingMeta ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseHeadingValues"])(headingMeta) : false;

      if (hParsed && hParsed.wt !== '400') {
        // recheck default
        if (heading === 'h1') {
          styleTag.textContent += "\n                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                        font-weight: ".concat(hParsed.wt, " !important;\n                    }\n                ");
        }

        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] ".concat(heading, ",\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] ").concat(heading, " {\n                    font-weight: ").concat(hParsed.wt, " !important;\n                    \n                }\n            ");
      }

      if (hParsed && hParsed.tt !== hDef[heading].tt) {
        if (heading === 'h1') {
          styleTag.textContent += "\n                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                        text-transform: ".concat(hParsed.tt, " !important;\n                    }\n                ");
        }

        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] ".concat(heading, " {\n                    text-transform: ").concat(hParsed.tt, " !important;\n                }\n            ");
      }

      if (hParsed && hParsed.lh !== hDef[heading].lh) {
        if (heading === 'h1') {
          styleTag.textContent += "\n                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                        line-height: ".concat(hParsed.lh, " !important;\n                    }\n                ");
        }

        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] ".concat(heading, " {\n                    line-height: ").concat(hParsed.lh, " !important;\n                }\n            ");
      }

      if (hParsed && hParsed.ls !== hDef[heading].ls) {
        if (heading === 'h1') {
          styleTag.textContent += "\n                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                        letter-spacing: ".concat(hParsed.ls, "em !important;\n                    }\n                ");
        }

        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] ".concat(heading, " {\n                    letter-spacing: ").concat(hParsed.ls, "em !important;\n                }\n            ");
      }

      if (hParsed && hParsed.ws !== hDef[heading].ws) {
        if (heading === 'h1') {
          styleTag.textContent += "\n                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {\n                        word-spacing: ".concat(hParsed.ws, "em !important;\n                    }\n                ");
        }

        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] ".concat(heading, " {\n                    word-spacing: ").concat(hParsed.ws, "em !important;\n                }\n            ");
      }

      if (meta.sgf_ls_body !== defaults.body.ls) {
        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"],\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] p,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] p {\n                    letter-spacing: ".concat(meta.sgf_ls_body, "em !important;\n                }\n            ");
      }

      if (meta.sgf_ws_body !== defaults.body.ws) {
        styleTag.textContent += "\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"],\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"],\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"wp-block-\"] p,\n                body.gutenberg-editor-page .editor-block-list__block div[class*=\"block-list__block\"] p {\n                    word-spacing: ".concat(meta.sgf_ws_body, "em !important;\n                }\n            ");
      }
    };

    for (var _iterator = _constants__WEBPACK_IMPORTED_MODULE_0__["HEADINGS"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./js/src/utils.js":
/*!*************************!*\
  !*** ./js/src/utils.js ***!
  \*************************/
/*! exports provided: capitalizeWords, newStyleLinkURL, reviewedData, parseHeadingValues, stringifyHeadingValues, getHeadingValue, createStyleNodes, addGlobalHeadings, addDefaultsToMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeWords", function() { return capitalizeWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newStyleLinkURL", function() { return newStyleLinkURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewedData", function() { return reviewedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHeadingValues", function() { return parseHeadingValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyHeadingValues", function() { return stringifyHeadingValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeadingValue", function() { return getHeadingValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleNodes", function() { return createStyleNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalHeadings", function() { return addGlobalHeadings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultsToMeta", function() { return addDefaultsToMeta; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/src/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _lodash = lodash,
    isEmpty = _lodash.isEmpty;
/**
 * Capitalizes the words in a string.
 *
 * @since   1.0.0
 * @param   {String} words
 * @returns {String}
 */

var capitalizeWords = function capitalizeWords(words) {
  return words.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};
/**
 * Makes sure the new <link/> url is encoded correctly
 *
 * @since   1.0.0
 * @param   {DOMNode} link      <link/> element
 * @param   {Array}   items     Old and current decoded elements
 * @param   {boolean} [ff=true] Should this be used for fonts or weights
 * @returns {String}            New <link/> URL
 */

var newStyleLinkURL = function newStyleLinkURL(items, link) {
  var ff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _items$map = items.map(function (item) {
    var newItem = encodeURIComponent(item);
    return ff ? newItem.replace('%2B', '+') : newItem;
  }),
      _items$map2 = _slicedToArray(_items$map, 2),
      old = _items$map2[0],
      current = _items$map2[1];

  return link.href.replace(old, current);
};
/**
 * Loop through the old meta and check if it has changed
 *
 * @since   1.0.0
 * @param   {Object} old     Old data
 * @param   {Object} current Current data
 * @returns {Object}         Reviewed data
 */

var reviewedData = function reviewedData(old, current) {
  return Object.keys(current).reduce(function (prev, key) {
    if (old[key] === current[key]) {
      return prev;
    }

    return _objectSpread({}, prev, _defineProperty({}, key, current[key]));
  }, {});
};
/**
 * Parses the a heading's meta values.
 * 
 * @since   1.0.0
 * @param   {String} heading Meta value in this format `el:h1|wt:400|tt:none|lh:1.4|ls:0`
 * @returns {Object}         Parsed keys and values in an object
 */

var parseHeadingValues = function parseHeadingValues(heading) {
  var parsed = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = heading.split('|')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      var _item$split = item.split(':'),
          _item$split2 = _slicedToArray(_item$split, 2),
          el = _item$split2[0],
          value = _item$split2[1];

      switch (el) {
        case 'lh':
        case 'ls':
        case 'ws':
          value = Number(value);
          break;

        default:
          break;
      }

      parsed[el] = value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return parsed;
};
/**
 * Undos `parseHeadingValues()`, converts it back to a string to be saved as meta.
 * It also changes a value for a selected key 
 *
 * @since   1.0.0
 * @param   {Object} parsed Parsed meta value, from string to object
 * @param   {String} prop   Propriety, key in object
 * @param   {Mixed}  value  New value for the selected propriety
 * @returns {String}        Converts the new obeject into a string, `el:h1|wt:400|tt:none|lh:1.4|ls:0`
 */

var stringifyHeadingValues = function stringifyHeadingValues(parsed, prop, value) {
  return Object.keys(parsed).map(function (item) {
    if (item === prop) {
      return [item, value].join(':');
    }

    return [item, parsed[item]].join(':');
  }).join('|');
};
/**
 * Gets a value for a specific heading from post meta
 *
 * @since   1.0.0
 * @param   {String} el   The heading, `h2` for example
 * @param   {String} prop The propriety to select, for example `wt` for weight
 * @param   {Object} meta Current post meta information
 * @returns {Mixed}       Meta value for the selected heading propriety or returns the default value for it
 */

var getHeadingValue = function getHeadingValue(el, prop, meta) {
  var _simpleGFonts = simpleGFonts,
      hdef = _simpleGFonts.headings;
  var defaults = hdef[el];
  var headings = meta.sgf_els_headings;

  if (headings.length) {
    var found = headings.findIndex(function (item) {
      return item.startsWith(el, 3);
    });

    if (found === -1) {
      return defaults[prop];
    } else {
      var converted = parseHeadingValues(headings[found]);
      return converted[prop];
    }
  } else {
    return defaults[prop];
  }
};
/**
 * Creates 3 DOMNodes, 2 for `<link>`s and one `<style>` tag used to enqueue Google fonts and
 * inline styles. 
 *
 * @since   1.0.0
 * @returns {Void}
 */

var createStyleNodes = function createStyleNodes() {
  var similar = {
    type: 'text/css',
    media: 'all',
    rel: 'stylesheet',
    href: simpleGFonts.default_url
  };
  var elements = [_objectSpread({
    tag: 'link',
    id: simpleGFonts.body_id
  }, similar), _objectSpread({
    tag: 'link',
    id: simpleGFonts.headings_id
  }, similar), {
    tag: 'style',
    id: simpleGFonts.style_id,
    type: 'text/css'
  }];

  for (var _i2 = 0; _i2 < elements.length; _i2++) {
    var element = elements[_i2];
    var elNode = document.createElement(element.tag);
    var elKeys = Object.keys(element);

    for (var _i3 = 0; _i3 < elKeys.length; _i3++) {
      var elKey = elKeys[_i3];
      if (elKey === 'tag') continue;
      elNode.setAttribute(elKey, element[elKey]);
    }

    document.head.appendChild(elNode);
  }
};
/**
 * Makes sure to add globals if no heading styles are not set. Also solves an issue with
 * REST API not displaying defaults if `$single` is set to `false` in `register_meta()` 
 *
 * @since   1.0.0
 * @param   {Object} meta 
 * @returns {Void}
 */

var addGlobalHeadings = function addGlobalHeadings(meta) {
  var _simpleGFonts2 = simpleGFonts,
      gvals = _simpleGFonts2.global_vals;

  if (gvals) {
    var gheadings = gvals.sgf_els_headings;

    if (gheadings && gheadings.length) {
      meta.sgf_els_headings = _toConsumableArray(gheadings);
    }
  }

  return meta;
};
/**
 * Adds defaults to meta if values don't exist.
 *
 * @todo    Clean-up, make it more readable
 * @since   1.0.2
 * @param   {Object} meta Meta without defaults
 * @returns {Object}      Meta with defaults
 */

var addDefaultsToMeta = function addDefaultsToMeta(meta) {
  var _simpleGFonts3 = simpleGFonts,
      defaults = _simpleGFonts3.defaults,
      headings = _simpleGFonts3.headings;
  var parsed = parseHeadingValues;
  var stringified = stringifyHeadingValues;
  var newDefaults = {};
  var newHeadingsDefs = [];

  var _arr2 = Object.keys(headings);

  for (var _i4 = 0; _i4 < _arr2.length; _i4++) {
    var headingType = _arr2[_i4];
    newHeadingsDefs.push(stringified(headings[headingType]));
  }

  var _arr3 = Object.keys(defaults);

  for (var _i5 = 0; _i5 < _arr3.length; _i5++) {
    var panelType = _arr3[_i5];

    var _arr4 = Object.keys(defaults[panelType]);

    for (var _i6 = 0; _i6 < _arr4.length; _i6++) {
      var option = _arr4[_i6];
      newDefaults["sgf_".concat(option, "_").concat(panelType)] = defaults[panelType][option];
    }
  }

  meta = _objectSpread({}, newDefaults, meta);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var heading = _step2.value;
      var hObj = meta.sgf_els_headings.find(function (hEl) {
        var hElparse = parsed(hEl);
        if (isEmpty(hElparse)) return false;
        return hElparse.el === heading;
      });

      if (hObj) {
        var hObjIndex = meta.sgf_els_headings.findIndex(function (hOel) {
          return parsed(hOel).el === heading;
        });
        meta.sgf_els_headings[hObjIndex] = stringified(_objectSpread({}, parsed(newHeadingsDefs.find(function (nHdef) {
          return parsed(nHdef).el === heading;
        })), parsed(hObj)));
      } else {
        var defHeading = newHeadingsDefs.find(function (nHdef) {
          return parsed(nHdef).el === heading;
        });
        var exists = meta.sgf_els_headings.findIndex(function (hOel) {
          return parsed(hOel).el === parsed(defHeading).el;
        });

        if (defHeading && exists === -1) {
          meta.sgf_els_headings.push(defHeading);
        }
      }
    };

    for (var _iterator2 = _constants__WEBPACK_IMPORTED_MODULE_0__["HEADINGS"][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return meta;
};

/***/ })

/******/ });
//# sourceMappingURL=plugin.bundle.js.map