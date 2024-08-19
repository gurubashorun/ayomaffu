"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("@emotion/react");
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useModifiers = _interopRequireDefault(require("mystical/useModifiers.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = _interopRequireWildcard(require("react"));
var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modifiers = {
  default: {
    button: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      position: 'relative',
      fontFamily: 'inherit',
      fontWeight: 'normal',
      fontSize: 4,
      letterSpacing: 'loose',
      textDecorationLine: 'none',
      cursor: 'pointer',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      ':disabled': {
        opacity: 'disabled',
        cursor: 'not-allowed'
      }
    }
  },
  variant: {
    brand: {
      button: {
        color: 'brand.electric.900',
        backgroundColor: 'brand.electric.200',
        borderColor: 'brand.electric.200'
      },
      spinner: {
        borderColor: 'brand.electric.400',
        borderTopColor: 'brand.electric.600'
      }
    },
    primary: {
      button: {
        color: 'zinc.900',
        borderColor: 'zinc.900',
        backgroundColor: 'transparent',
        [_darkColorMode.default]: {
          color: 'zinc.50',
          borderColor: 'zinc.500'
        }
      },
      spinner: {
        borderColor: 'zinc.400',
        borderTopColor: 'zinc.600',
        [_darkColorMode.default]: {
          borderColor: 'zinc.400',
          borderTopColor: 'zinc.50'
        }
      }
    },
    secondary: {
      button: {
        color: 'zinc.900',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        [_darkColorMode.default]: {
          color: 'zinc.50'
        }
      },
      spinner: {
        borderColor: 'zinc.400',
        borderTopColor: 'zinc.600',
        [_darkColorMode.default]: {
          borderColor: 'zinc.400',
          borderTopColor: 'zinc.50'
        }
      }
    },
    buy: {
      button: {
        color: 'zinc.50',
        backgroundColor: 'emerald.500',
        borderColor: 'transparent'
      },
      spinner: {
        borderColor: 'emerald.400',
        borderTopColor: 'emerald.200'
      }
    },
    sell: {
      button: {
        color: 'zinc.50',
        backgroundColor: 'rose.500',
        borderColor: 'transparent'
      },
      spinner: {
        borderColor: 'rose.400',
        borderTopColor: 'rose.200'
      }
    },
    buyAlt: {
      button: {
        color: 'emerald.500',
        borderColor: 'emerald.500',
        backgroundColor: 'transparent'
      },
      spinner: {
        borderColor: 'emerald.200',
        borderTopColor: 'emerald.400'
      }
    },
    sellAlt: {
      button: {
        color: 'rose.500',
        borderColor: 'rose.500',
        backgroundColor: 'transparent'
      },
      spinner: {
        borderColor: 'rose.200',
        borderTopColor: 'rose.400'
      }
    }
  },
  size: {
    small: {
      button: {
        padding: '2 3',
        fontSize: 2
      }
    },
    medium: {
      button: {
        padding: '2 3'
      }
    },
    large: {
      button: {
        padding: '2 4'
      }
    }
  }
};
const makeVisible = (0, _react.keyframes)({
  to: {
    visibility: 'visible'
  }
});
const makeHidden = (0, _react.keyframes)({
  to: {
    visibility: 'hidden'
  }
});
const Button = _react2.default.forwardRef((_ref, ref) => {
  let {
    as: C = 'button',
    variant = 'primary',
    size = 'large',
    loading = false,
    modifiers: customModifiers,
    onClick,
    children,
    ...props
  } = _ref;
  const modifierStyle = (0, _useModifiers.default)({
    size,
    variant
  }, modifiers, customModifiers);
  const [isPending, startTransition] = (0, _react2.useTransition)({
    timeoutMs: 10000
  });
  return (0, _jsxRuntime.jsxs)(C, {
    ...props,
    ref: ref,
    onClick: C === 'a' ? onClick : () => {
      if (typeof onClick === 'function') {
        startTransition ? startTransition(() => {
          onClick();
        }) : onClick();
      }
    },
    css: modifierStyle.button,
    children: [(loading || isPending) && (0, _jsxRuntime.jsx)("span", {
      css: {
        animation: `0s linear 0.5s forwards ${makeVisible}`,
        visibility: 'hidden'
      },
      children: (0, _jsxRuntime.jsx)(_Spinner.default, {
        css: modifierStyle.spinner
      })
    }), (0, _jsxRuntime.jsx)("span", {
      css: [(loading || isPending) && {
        animation: `0s linear 0.5s forwards ${makeHidden}`
      }],
      children: children
    })]
  });
});
Button.displayName = 'Button';
Button.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
  variant: _propTypes.default.oneOf(['brand', 'primary', 'secondary', 'buy', 'sell', 'buyAlt', 'sellAlt']),
  onClick: _propTypes.default.func,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  loading: _propTypes.default.bool,
  modifiers: _propTypes.default.object,
  children: _propTypes.default.node.isRequired
};
var _default = Button;
exports.default = _default;