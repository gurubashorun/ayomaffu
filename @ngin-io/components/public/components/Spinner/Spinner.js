"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("@emotion/react");
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const animationName = (0, _react.keyframes)({
  to: {
    transform: 'rotate(360deg)'
  }
});
const Spinner = props => {
  return (0, _jsxRuntime.jsx)("div", {
    ...props,
    css: {
      content: '""',
      boxSizing: 'border-box',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '20px',
      height: '20px',
      marginTop: '-10px',
      marginLeft: '-10px',
      borderRadius: '50%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'zinc.200',
      borderTopColor: 'zinc.600',
      [_darkColorMode.default]: {
        borderColor: 'zinc.600',
        borderTopColor: 'zinc.400'
      },
      animationName,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDuration: '.6s'
    }
  });
};
var _default = Spinner;
exports.default = _default;