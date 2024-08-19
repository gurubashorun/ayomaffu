"use strict";

exports.__esModule = true;
exports.default = void 0;
const hexToRgbA = function (hex, alpha) {
  if (alpha === void 0) {
    alpha = 1;
  }
  const c = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return `rgb(${c >> 16}, ${(c & 0xff00) >> 8}, ${c & 0xff}, ${alpha})`;
};
var _default = hexToRgbA;
exports.default = _default;