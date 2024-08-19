"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  default: {
    color: 'zinc.900',
    [_darkColorMode.default]: {
      color: 'zinc.50'
    },
    fontFamily: 'inherit',
    fontWeight: 'bold',
    lineHeight: 'normal',
    maxWidth: 'heading',
    marginBottom: 3,
    '&:first-of-type': {
      marginTop: 0
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  variant: {
    h1: {
      marginBottom: 4,
      fontSize: 8,
      letterSpacing: 'tight'
    },
    h2: {
      marginBottom: 4,
      fontSize: 7,
      letterSpacing: 'tight'
    },
    h3: {
      fontSize: 6
    },
    h4: {
      fontSize: 5
    },
    h5: {
      fontSize: 4
    },
    h6: {
      fontSize: 3
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
const Heading = _ref => {
  let {
    as: C,
    overflow,
    variant,
    ...props
  } = _ref;
  const modifierStyle = (0, _useModifiers.default)({
    variant: variant || C,
    overflow
  }, modifiers);
  return (0, _jsxRuntime.jsx)(C, {
    ...props,
    css: modifierStyle
  });
};
Heading.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]).isRequired,
  variant: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  overflow: _propTypes.default.oneOf(['ellipsis'])
};
var _default = Heading;
exports.default = _default;