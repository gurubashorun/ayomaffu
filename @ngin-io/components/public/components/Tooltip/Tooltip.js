"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _useRect = _interopRequireDefault(require("../../hooks/useRect"));
var _Text = _interopRequireDefault(require("../Text/Text"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  default: {
    tooltipArrow: {
      position: 'absolute',
      zIndex: 2,
      stroke: 'zinc.200',
      fill: 'zinc.50',
      [_darkColorMode.default]: {
        stroke: 'transparent',
        fill: 'zinc.600'
      }
    },
    tooltip: {
      width: 'min(100%, 32rem)',
      display: 'flex',
      zIndex: 1
    },
    tooltipContent: {
      padding: 3,
      marginTop: '9px',
      boxShadow: 100,
      backgroundColor: 'zinc.50',
      borderRadius: 2,
      borderColor: 'zinc.200',
      borderStyle: 'solid',
      borderWidth: 1,
      textAlign: 'left',
      zIndex: 1,
      fontSize: 2,
      fontWeight: 'normal',
      lineHeight: 'loose',
      letterSpacing: 'tight',
      [_darkColorMode.default]: {
        borderColor: 'transparent',
        backgroundColor: 'zinc.600'
      },
      '*, h1, h2, h3, h4, h5, h6, p, ul, ol, li': {
        color: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      },
      '>': {
        '*': {
          marginBottom: 2
        },
        '&:first-of-type': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        }
      },
      'ul, ol': {
        li: {
          marginBottom: 1,
          '&:last-child': {
            marginBottom: 0
          },
          'p:last-of-type': {
            marginBottom: 1
          }
        }
      },
      ul: {
        paddingLeft: 0,
        li: {
          paddingLeft: 3,
          ':before': {
            lineHeight: '80%'
          }
        }
      },
      ol: {
        paddingLeft: 3,
        li: {
          paddingLeft: 1
        }
      }
    }
  }
};
const Tooltip = _ref => {
  let {
    children,
    modifiers: customModifiers,
    parentCenterX,
    top,
    ...props
  } = _ref;
  const [rect, ref] = (0, _useRect.default)();
  const [alignment, setAlignment] = (0, _react.useState)(null);
  const modifierStyle = (0, _useModifiers.default)({}, modifiers, customModifiers);
  (0, _react.useEffect)(() => {
    if (parentCenterX && rect) {
      const {
        width
      } = rect;
      const halfWidth = width / 2;
      if (parentCenterX > halfWidth && parentCenterX + halfWidth < document.body.clientWidth) {
        return setAlignment('center');
      }
      if (parentCenterX - halfWidth <= 0) {
        return setAlignment('left');
      }
      if (parentCenterX + halfWidth >= document.body.clientWidth) {
        setAlignment('right');
      }
    }
  }, [parentCenterX, rect]);
  return (0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [(0, _jsxRuntime.jsx)("svg", {
      width: "20",
      height: "10",
      viewBox: "0 0 20 9",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      stroke: "none",
      css: modifierStyle.tooltipArrow,
      style: {
        ...(parentCenterX && !alignment && {
          visibility: 'hidden'
        })
      },
      children: (0, _jsxRuntime.jsx)("polyline", {
        points: "0,10 10,0 20,10",
        fill: "none",
        stroke: "none",
        strokeWidth: "1",
        css: {
          stroke: 'inherit',
          fill: 'inherit'
        }
      })
    }), (0, _jsxRuntime.jsx)("span", {
      ...props,
      ref: ref,
      css: modifierStyle.tooltip,
      style: {
        ...(top && {
          top: `${top}px`
        }),
        ...(alignment === 'center' && parentCenterX && rect ? {
          left: `${parentCenterX - rect.width / 2}px`
        } : alignment && {
          [alignment]: 0
        }),
        ...(parentCenterX && !alignment && {
          visibility: 'hidden'
        })
      },
      children: (0, _jsxRuntime.jsx)(_Text.default, {
        variant: "small",
        css: modifierStyle.tooltipContent,
        children: children
      })
    })]
  });
};
Tooltip.propTypes = {
  children: _propTypes.default.node.isRequired,
  modifiers: _propTypes.default.object,
  parentCenterX: _propTypes.default.number,
  top: _propTypes.default.number
};
var _default = Tooltip;
exports.default = _default;