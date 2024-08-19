"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("mystical/jsx-runtime");
const width = 20;
const height = 12;
const IconArrow = props => {
  return (0, _jsxRuntime.jsx)("svg", {
    ...props,
    width: "1em",
    height: `${height / width}em`,
    viewBox: `0 0 ${width} ${height}`,
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.1956 11.7007C13.5826 12.0947 14.2158 12.1004 14.6098 11.7134L19.7007 6.71345C19.8922 6.52542 20 6.26834 20 6C20 5.73166 19.8922 5.47458 19.7007 5.28655L14.6098 0.286551C14.2158 -0.100441 13.5826 -0.0947371 13.1956 0.299291C12.8086 0.693317 12.8144 1.32646 13.2084 1.71345L16.5547 5L1 5C0.447715 5 0 5.44771 0 6C0 6.55228 0.447715 7 1 7L16.5547 7L13.2084 10.2866C12.8144 10.6735 12.8086 11.3067 13.1956 11.7007Z"
    })
  });
};
var _default = IconArrow;
exports.default = _default;