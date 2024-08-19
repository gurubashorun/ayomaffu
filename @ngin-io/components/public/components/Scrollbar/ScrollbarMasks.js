"use strict";

exports.__esModule = true;
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const maskSize = '32px';
const generateMaskImage = _ref => {
  let {
    scrollbarSize,
    showMaskEnd,
    showMaskStart,
    to
  } = _ref;
  return `
    linear-gradient(
      to ${to},
      ${showMaskStart ? 'transparent,' : ''}
      black ${maskSize},
      black calc(100% - ${maskSize}),
      ${showMaskEnd ? `transparent calc(100% - ${scrollbarSize}px),` : ''}
      black calc(100% - ${scrollbarSize}px),
      black 100%
    ),
    linear-gradient(black, black)
  `;
};
const ScrollbarMasks = _ref2 => {
  let {
    children,
    overflowDirection,
    ...props
  } = _ref2;
  const {
    overflowTop,
    overflowBottom,
    overflowLeft,
    overflowRight,
    scrollbarHeight,
    scrollbarWidth
  } = overflowDirection;
  return (0, _jsxRuntime.jsx)("div", {
    ...props,
    css: [{
      width: '100%',
      maxHeight: '100%',
      display: 'flex'
    }, (overflowTop || overflowBottom) && {
      maskImage: generateMaskImage({
        scrollbarSize: scrollbarHeight,
        showMaskEnd: overflowBottom,
        showMaskStart: overflowTop,
        to: 'bottom'
      }),
      maskSize: `100%, ${scrollbarWidth}px`,
      maskPosition: '0 0, 100% 0',
      maskRepeat: 'no-repeat'
    }],
    children: (0, _jsxRuntime.jsx)("div", {
      css: [{
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        position: 'relative'
      }, (overflowLeft || overflowRight) && {
        maskImage: generateMaskImage({
          scrollbarSize: scrollbarWidth,
          showMaskEnd: overflowRight,
          showMaskStart: overflowLeft,
          to: 'right'
        }),
        maskSize: `100%, 100% ${scrollbarHeight}px`,
        maskPosition: '0 0, 0 100%',
        maskRepeat: 'no-repeat'
      }],
      children: children
    })
  });
};
ScrollbarMasks.propTypes = {
  children: _propTypes.default.node.isRequired,
  overflowDirection: _propTypes.default.object.isRequired
};
var _default = ScrollbarMasks;
exports.default = _default;