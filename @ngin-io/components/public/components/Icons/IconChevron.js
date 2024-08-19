"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("mystical/jsx-runtime");
const width = 19;
const height = 11;
const IconChevron = props => {
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
      d: "M0.309526 0.276646C0.709024 -0.104693 1.34202 -0.0899723 1.72336 0.309526L9.5 8.45649L17.2766 0.309527C17.658 -0.0899713 18.291 -0.104692 18.6905 0.276647C19.09 0.657986 19.1047 1.29098 18.7234 1.69048L10.2234 10.5952C10.0347 10.7929 9.77328 10.9048 9.5 10.9048C9.22672 10.9048 8.96534 10.7929 8.77665 10.5952L0.276646 1.69048C-0.104693 1.29098 -0.0899723 0.657985 0.309526 0.276646Z"
    })
  });
};
var _default = IconChevron;
exports.default = _default;