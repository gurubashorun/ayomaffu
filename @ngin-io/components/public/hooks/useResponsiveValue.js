"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useMystical = _interopRequireDefault(require("mystical/useMystical.js"));
var _useBreakpointIndex = _interopRequireDefault(require("./useBreakpointIndex"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResponsiveValue = function (values, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    theme
  } = (0, _useMystical.default)();
  const array = typeof values === 'function' ? values(theme) : values;
  const index = (0, _useBreakpointIndex.default)(options);
  return array[index >= array.length ? array.length - 1 : index];
};
var _default = useResponsiveValue;
exports.default = _default;