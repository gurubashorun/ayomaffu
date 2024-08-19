"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _useControlledState = _interopRequireDefault(require("../../hooks/useControlledState"));
var _useRect = _interopRequireDefault(require("../../hooks/useRect"));
var _IconAlert = _interopRequireDefault(require("../Icons/IconAlert"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  default: {
    button: {
      padding: 0,
      margin: 0,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit'
    },
    tooltip: {
      position: 'fixed'
    }
  }
};
const Hint = _ref => {
  let {
    children,
    modifiers: customModifiers,
    textLabel = null,
    ...props
  } = _ref;
  const [rect, ref] = (0, _useRect.default)();
  const [open, setOpen] = (0, _useControlledState.default)(false);
  const modifierStyle = (0, _useModifiers.default)({}, modifiers, customModifiers);
  const openHint = (0, _react.useCallback)(() => {
    if (ref && !open) {
      return setOpen(true);
    }
  }, [open, ref, setOpen]);
  const closeHint = (0, _react.useCallback)(() => {
    if (ref && open) {
      return setOpen(false);
    }
  }, [open, ref, setOpen]);
  (0, _react.useEffect)(() => {
    const closeHintOnEscKeydown = event => {
      if ((event.keyCode || event.which) === 27) {
        closeHint();
      }
    };
    window.addEventListener('keydown', closeHintOnEscKeydown);
    window.addEventListener('scroll', closeHint, true);
    window.addEventListener('touchmove', closeHint, true);
    return () => {
      window.removeEventListener('keydown', closeHintOnEscKeydown);
      window.removeEventListener('scroll', closeHint, true);
      return window.removeEventListener('touchmove', closeHint, true);
    };
  }, [closeHint]);
  return (0, _jsxRuntime.jsxs)("span", {
    ...props,
    ref: ref,
    onMouseLeave: closeHint,
    css: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      height: '100%'
    },
    children: [(0, _jsxRuntime.jsx)("button", {
      "aria-label": "More information",
      type: "button",
      onBlur: closeHint,
      onFocus: openHint,
      onTouchStart: openHint,
      onMouseOver: openHint,
      css: [modifierStyle.button, textLabel && {
        textDecoration: 'underline'
      }, !textLabel && {
        borderRadius: '50%'
      }],
      children: textLabel ? textLabel : (0, _jsxRuntime.jsx)(_IconAlert.default, {
        css: {
          display: 'block'
        }
      })
    }), (0, _jsxRuntime.jsx)("span", {
      role: "status",
      css: [{
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center'
      }],
      children: rect && open && (0, _jsxRuntime.jsx)(_Tooltip.default, {
        modifiers: modifierStyle,
        parentCenterX: rect.x + rect.width / 2,
        top: rect.bottom,
        children: children
      })
    })]
  });
};
Hint.propTypes = {
  children: _propTypes.default.node.isRequired,
  modifiers: _propTypes.default.object,
  textLabel: _propTypes.default.string
};
var _default = Hint;
exports.default = _default;