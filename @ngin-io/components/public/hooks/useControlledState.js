"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
const useControlledState = (value, fn) => {
  const state = (0, _react.useState)(value);
  return fn ? [value, fn] : state;
};
var _default = useControlledState;
exports.default = _default;