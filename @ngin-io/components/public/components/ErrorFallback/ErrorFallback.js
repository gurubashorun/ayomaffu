"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _IconAlert = _interopRequireDefault(require("../Icons/IconAlert"));
var _Text = _interopRequireDefault(require("../Text/Text"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ErrorFallback = props => {
  return (0, _jsxRuntime.jsxs)("div", {
    ...props,
    css: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 2,
      fontSize: 5,
      backgroundColor: 'zinc.200',
      color: 'zinc.900',
      [_darkColorMode.default]: {
        backgroundColor: 'zinc.700',
        color: 'zinc.50'
      }
    },
    children: [(0, _jsxRuntime.jsx)(_IconAlert.default, {}), (0, _jsxRuntime.jsx)(_Text.default, {
      variant: "small",
      css: {
        fontWeight: 'bold',
        color: 'inherit',
        [_darkColorMode.default]: {
          color: 'inherit'
        }
      },
      children: "Failed to load"
    })]
  });
};
var _default = ErrorFallback;
exports.default = _default;