"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  variant: {
    small: {
      fontSize: 3,
      letterSpacing: 'looser'
    },
    medium: {
      fontSize: 4,
      letterSpacing: 'looser'
    },
    large: {
      fontSize: 5,
      letterSpacing: 'loose'
    }
  },
  overflow: {
    ellipsis: {
      overflowX: 'hidden',
      overflowY: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'inline-block'
    }
  }
};
const Text = _ref => {
  let {
    as: C = 'span',
    variant,
    overflow,
    ...props
  } = _ref;
  const modifierStyle = (0, _useModifiers.default)({
    variant,
    overflow
  }, modifiers);
  return (0, _jsxRuntime.jsx)(C, {
    ...props,
    css: [{
      color: 'zinc.800',
      [_darkColorMode.default]: {
        color: 'zinc.200'
      },
      fontFamily: 'inherit',
      fontWeight: 'thin',
      lineHeight: 'loose',
      strong: {
        fontWeight: 'bold'
      }
    }, modifierStyle]
  });
};
Text.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
  variant: _propTypes.default.oneOf(['small', 'medium', 'large']).isRequired,
  overflow: _propTypes.default.oneOf(['ellipsis'])
};
var _default = Text;
exports.default = _default;