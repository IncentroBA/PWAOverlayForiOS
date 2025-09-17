'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var dist = {};
var common$2 = {};
var hasRequiredCommon$2;
function requireCommon$2() {
  if (hasRequiredCommon$2) return common$2;
  hasRequiredCommon$2 = 1;
  Object.defineProperty(common$2, "__esModule", {
    value: true
  });
  common$2.ensure = ensure;
  function ensure(arg) {
    if (arg == null) {
      throw new Error("Did not expect an argument to be undefined");
    }
    return arg;
  }
  return common$2;
}
var common$1 = {};
var hasRequiredCommon$1;
function requireCommon$1() {
  if (hasRequiredCommon$1) return common$1;
  hasRequiredCommon$1 = 1;
  Object.defineProperty(common$1, "__esModule", {
    value: true
  });
  common$1.mergeNativeStyles = mergeNativeStyles;
  common$1.extractStyles = extractStyles;
  function mergeNativeStyles(defaultStyle, overrideStyles) {
    var styles = [defaultStyle].concat(_toConsumableArray(overrideStyles.filter(function (object) {
      return object !== undefined;
    })));
    return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
      var styleItems = styles.map(function (object) {
        return object[currentKey];
      });
      return Object.assign(Object.assign({}, flattened), _defineProperty({}, currentKey, flattenObjects(styleItems)));
    }, {});
  }
  function flattenObjects(objects) {
    return objects.reduce(function (merged, object) {
      return Object.assign(Object.assign({}, merged), object);
    }, {});
  }
  function extractStyles(source, extractionKeys) {
    if (!source) {
      return [{}, {}];
    }
    return Object.entries(source).reduce(function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 2),
        extracted = _ref3[0],
        rest = _ref3[1];
      var _ref4 = _slicedToArray(_ref2, 2),
        key = _ref4[0],
        value = _ref4[1];
      if (extractionKeys.includes(key)) {
        extracted[key] = value;
      } else {
        rest[key] = value;
      }
      return [extracted, rest];
    }, [{}, {}]);
  }
  return common$1;
}
var common = {};
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  Object.defineProperty(common, "__esModule", {
    value: true
  });
  common.parseInlineStyle = parseInlineStyle;
  function parseInlineStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    try {
      return style.split(";").reduce(function (styleObject, line) {
        var pair = line.split(":");
        if (pair.length === 2) {
          var name = pair[0].trim().replace(/(-.)/g, function (match) {
            return match[1].toUpperCase();
          });
          styleObject[name] = pair[1].trim();
        }
        return styleObject;
      }, {});
    } catch (_) {
      return {};
    }
  }
  return common;
}
var typings = {};
var PageEditor = {};
var hasRequiredPageEditor;
function requirePageEditor() {
  if (hasRequiredPageEditor) return PageEditor;
  hasRequiredPageEditor = 1;
  Object.defineProperty(PageEditor, "__esModule", {
    value: true
  });
  return PageEditor;
}
var hasRequiredTypings;
function requireTypings() {
  if (hasRequiredTypings) return typings;
  hasRequiredTypings = 1;
  (function (exports) {
    var __createBinding = typings && typings.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = typings && typings.__exportStar || function (m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __exportStar(/*@__PURE__*/requirePageEditor(), exports);
  })(typings);
  return typings;
}
var utils = {};
var PageEditorUtils = {};
var hasRequiredPageEditorUtils;
function requirePageEditorUtils() {
  if (hasRequiredPageEditorUtils) return PageEditorUtils;
  hasRequiredPageEditorUtils = 1;
  Object.defineProperty(PageEditorUtils, "__esModule", {
    value: true
  });
  PageEditorUtils.hidePropertyIn = hidePropertyIn;
  PageEditorUtils.hidePropertiesIn = hidePropertiesIn;
  PageEditorUtils.hideNestedPropertiesIn = hideNestedPropertiesIn;
  PageEditorUtils.changePropertyIn = changePropertyIn;
  PageEditorUtils.transformGroupsIntoTabs = transformGroupsIntoTabs;
  PageEditorUtils.moveProperty = moveProperty;
  function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
    modifyProperty(function (_, index, container) {
      return container.splice(index, 1);
    }, propertyGroups, key, nestedPropIndex, nestedPropKey);
  }
  function hidePropertiesIn(propertyGroups, _value, keys) {
    keys.forEach(function (key) {
      return modifyProperty(function (_, index, container) {
        return container.splice(index, 1);
      }, propertyGroups, key, undefined, undefined);
    });
  }
  function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
    nestedPropKeys.forEach(function (nestedKey) {
      return hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey);
    });
  }
  function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
    modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
  }
  function transformGroupsIntoTabs(properties) {
    var groups = [];
    properties.forEach(function (property) {
      if (property.propertyGroups) {
        groups.push.apply(groups, _toConsumableArray(property.propertyGroups));
        property.propertyGroups = [];
      }
    });
    properties.push.apply(properties, groups);
  }
  function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
    propertyGroups.forEach(function (propGroup) {
      var _a;
      if (propGroup.propertyGroups) {
        modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
      }
      (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach(function (prop, index, array) {
        if (prop.key === key) {
          if (nestedPropIndex === undefined || nestedPropKey === undefined) {
            modify(prop, index, array);
          } else if (prop.objects) {
            modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
          } else if (prop.properties) {
            modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
          }
        }
      });
    });
  }
  function moveProperty(fromIndex, toIndex, properties) {
    if (fromIndex >= 0 && toIndex >= 0 && fromIndex < properties.length && toIndex < properties.length && fromIndex !== toIndex) {
      properties.splice.apply(properties, [toIndex, 0].concat(_toConsumableArray(properties.splice(fromIndex, 1))));
    }
  }
  return PageEditorUtils;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function (exports) {
    var __createBinding = utils && utils.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = utils && utils.__exportStar || function (m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __exportStar(/*@__PURE__*/requirePageEditorUtils(), exports);
  })(utils);
  return utils;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function (exports) {
    var __createBinding = dist && dist.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = dist && dist.__exportStar || function (m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __exportStar(/*@__PURE__*/requireCommon$2(), exports);
    __exportStar(/*@__PURE__*/requireCommon$1(), exports);
    __exportStar(/*@__PURE__*/requireCommon(), exports);
    __exportStar(/*@__PURE__*/requireTypings(), exports);
    __exportStar(/*@__PURE__*/requireUtils(), exports);
  })(dist);
  return dist;
}
var distExports = /*@__PURE__*/requireDist();

/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */

// export function getProperties(values, defaultProperties, target) {
// Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
/* Example
if (values.myProperty === "custom") {
    delete defaultProperties.properties.myOtherProperty;
}
*/
// }

function getProperties(values, defaultProperties) {
  var propsToHide = [];
  if (values.instructionCanBeClosed === false) {
    propsToHide.push("instructionClosed");
    // delete defaultProperties.properties.instructionClosed;
  }
  distExports.hidePropertiesIn(defaultProperties, values, propsToHide);
  return defaultProperties;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.
//    /* Example
//    if (values.myProperty !== "custom") {
//        errors.push({
//            property: `myProperty`,
//            message: `The value of 'myProperty' is different of 'custom'.`,
//            url: "https://github.com/myrepo/mywidget"
//        });
//    }
//    */
//    return errors;
// }

// /**
//  * @param {object} values
//  * @param {boolean} isDarkMode
//  * @returns {object}
//  */
// export function getPreview(values, isDarkMode) {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     };
// }

// /**
//  * @param {Object} values
//  * @param {("web"|"desktop")} platform
//  * @returns {string}
//  */
// export function getCustomCaption(values, platform) {
//     return "JavaScriptSnippet";
// }

exports.getProperties = getProperties;
