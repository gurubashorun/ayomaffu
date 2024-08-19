"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  default: {
    listStylePosition: 'outside',
    marginTop: 3,
    marginBottom: [2, 3],
    paddingLeft: 0,
    '&:first-of-type': {
      marginTop: 0
    },
    '&:last-child': {
      marginBottom: [0, 0]
    },
    '> li': {
      marginLeft: '1.5em',
      paddingLeft: 0
    }
  },
  variant: {
    ul: {
      '> li': {
        '::marker': {
          color: 'brand.electric.400'
        }
      }
    }
  }
};
const TextList = _ref => {
  let {
    as: C = 'ul',
    ...props
  } = _ref;
  const modifierStyle = (0, _useModifiers.default)({
    variant: C
  }, modifiers);
  return (0, _jsxRuntime.jsx)(C, {
    ...props,
    css: modifierStyle
  });
};
TextList.propTypes = {
  as: _propTypes.default.oneOf(['ul', 'ol']),
  children: _propTypes.default.node.isRequired
};
var _default = TextList;
exports.default = _default;