"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useMystical = _interopRequireDefault(require("mystical/useMystical.js"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useBreakpointIndex = function (options) {
  if (options === void 0) {
    options = {};
  }
  const context = (0, _useMystical.default)();
  const {
    defaultIndex = 0
  } = options;
  const breakpoints = context.theme && context.theme.breakpoints;
  if (typeof defaultIndex !== 'number') {
    throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);
  } else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) {
    throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);
  }
  const [value, setValue] = (0, _react.useState)(defaultIndex);
  (0, _react.useEffect)(() => {
    const getIndex = () => {
      return breakpoints.filter(bp => {
        return window.matchMedia(`screen and (min-width: ${bp})`).matches;
      }).length;
    };
    const onResize = () => {
      const newValue = getIndex();
      if (value !== newValue) {
        setValue(newValue);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, [breakpoints, value]);
  return value;
};
var _default = useBreakpointIndex;
exports.default = _default;