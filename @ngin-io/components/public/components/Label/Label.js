"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Hint = _interopRequireDefault(require("../Hint/Hint"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  variant: {
    small: {
      fontSize: 2,
      lineHeight: 'tight'
    },
    medium: {
      fontSize: 3,
      lineHeight: 'normal'
    },
    large: {
      fontSize: 4,
      lineHeight: 'normal'
    },
    capsSmall: {
      textTransform: 'uppercase',
      fontSize: 2,
      lineHeight: 'tight',
      letterSpacing: 'loosest'
    },
    capsLarge: {
      textTransform: 'uppercase',
      fontSize: 3,
      lineHeight: 'tight',
      letterSpacing: 'loosest'
    }
  }
};
const Label = _ref => {
  let {
    as: C = 'label',
    bold = false,
    variant,
    modifiers: customModifiers,
    hint,
    children,
    ...props
  } = _ref;
  const modifierStyle = (0, _useModifiers.default)({
    variant
  }, modifiers, customModifiers);
  return (0, _jsxRuntime.jsxs)(C, {
    ...props,
    css: [{
      color: 'zinc.900',
      [_darkColorMode.default]: {
        color: 'zinc.50'
      },
      fontWeight: 'normal'
    }, hint && {
      display: 'flex',
      alignItems: 'center'
    }, bold && {
      fontWeight: 'bold'
    }, modifierStyle],
    children: [children, hint && (0, _jsxRuntime.jsx)(_Hint.default, {
      css: {
        marginLeft: 2
      },
      children: hint
    })]
  });
};
Label.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
  variant: _propTypes.default.oneOf(['small', 'medium', 'large', 'capsSmall', 'capsLarge']).isRequired,
  bold: _propTypes.default.bool,
  hint: _propTypes.default.node,
  children: _propTypes.default.node.isRequired
};
var _default = Label;
exports.default = _default;