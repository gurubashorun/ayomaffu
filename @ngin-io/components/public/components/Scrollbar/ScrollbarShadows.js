"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useTheme = _interopRequireDefault(require("mystical/useTheme.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _hexToRgbA = _interopRequireDefault(require("../../lib/hexToRgbA"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ShadowBase = props => {
  const shadowRgbA = (0, _hexToRgbA.default)((0, _useTheme.default)('colors', 'black'), 0.9);
  return (0, _jsxRuntime.jsx)("div", {
    ...props,
    css: {
      position: 'absolute',
      boxShadow: `0 0 20px 3px ${shadowRgbA}`
    }
  });
};
const ShadowHorizontal = props => {
  return (0, _jsxRuntime.jsx)(ShadowBase, {
    ...props,
    css: {
      width: 'calc(100% - 17px - 17px)',
      height: '0.02px',
      left: '17px'
    }
  });
};
const ShadowVertical = props => {
  return (0, _jsxRuntime.jsx)(ShadowBase, {
    ...props,
    css: {
      width: '0.02px',
      height: '100%',
      top: 0
    }
  });
};
const ScrollbarShadows = _ref => {
  let {
    children,
    overflowDirection,
    ...props
  } = _ref;
  const {
    overflowTop,
    overflowBottom,
    overflowLeft,
    overflowRight,
    scrollbarHeight,
    scrollbarWidth
  } = overflowDirection;
  return (0, _jsxRuntime.jsxs)("div", {
    ...props,
    css: {
      width: '100%',
      maxHeight: '100%',
      display: 'flex',
      overflowX: 'hidden',
      overflowY: 'hidden',
      position: 'relative'
    },
    children: [children, overflowTop && (0, _jsxRuntime.jsx)(ShadowHorizontal, {
      css: {
        top: 0
      }
    }), overflowRight && (0, _jsxRuntime.jsx)(ShadowVertical, {
      css: {
        right: `${scrollbarWidth}px`,
        clipPath: `inset(-100px 0px ${scrollbarHeight}px -100px)`
      }
    }), overflowBottom && (0, _jsxRuntime.jsx)(ShadowHorizontal, {
      css: {
        bottom: `${scrollbarHeight}px`,
        clipPath: 'inset(-100px -100px 0px -100px)'
      }
    }), overflowLeft && (0, _jsxRuntime.jsx)(ShadowVertical, {
      css: {
        left: 0,
        clipPath: `inset(-100px -100px ${scrollbarHeight}px 0px)`
      }
    })]
  });
};
ScrollbarShadows.propTypes = {
  children: _propTypes.default.node.isRequired,
  overflowDirection: _propTypes.default.object.isRequired
};
var _default = ScrollbarShadows;
exports.default = _default;