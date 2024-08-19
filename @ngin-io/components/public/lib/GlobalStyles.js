"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Global = _interopRequireDefault(require("mystical/Global.js"));
var _react = require("react");
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GlobalStyles = () => {
  const [usingKeyboard, setUsingKeyboard] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const handleFirstTab = event => {
      if (event.keyCode === 9) {
        setUsingKeyboard(true);
        window.removeEventListener('keydown', handleFirstTab);
      }
    };
    window.addEventListener('keydown', handleFirstTab);
  }, []);
  return (0, _jsxRuntime.jsx)(_Global.default, {
    styles: [usingKeyboard ? {
      '*': {
        ':focus': {
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineColor: 'focus'
        }
      }
    } : {
      '*': {
        ':focus': {
          outline: 'none'
        }
      }
    }]
  });
};
var _default = GlobalStyles;
exports.default = _default;