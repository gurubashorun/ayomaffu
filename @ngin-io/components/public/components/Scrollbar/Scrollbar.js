"use strict";

exports.__esModule = true;
exports.default = void 0;
var _darkColorMode = _interopRequireDefault(require("mystical/darkColorMode.js"));
var _useTheme = _interopRequireDefault(require("mystical/useTheme.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _ScrollbarMasks = _interopRequireDefault(require("./ScrollbarMasks"));
var _ScrollbarShadows = _interopRequireDefault(require("./ScrollbarShadows"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isOverflow = ref => {
  const {
    clientHeight,
    clientWidth,
    offsetHeight,
    offsetWidth,
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth
  } = ref.current;
  return {
    overflowTop: scrollTop > 0,
    overflowBottom: scrollTop + clientHeight < scrollHeight,
    overflowLeft: scrollLeft > 0,
    overflowRight: scrollLeft + clientWidth < scrollWidth,
    scrollbarHeight: offsetHeight - clientHeight,
    scrollbarWidth: offsetWidth - clientWidth
  };
};
const Scrollbar = _ref => {
  let {
    children,
    overflowEffect = 'shadow',
    showScrollbar = true,
    ...props
  } = _ref;
  const ref = (0, _react.useRef)(null);
  const [overflowDirection, setOverflowDirection] = (0, _react.useState)({});
  const zinc200 = (0, _useTheme.default)('colors', 'zinc.200');
  const zinc400 = (0, _useTheme.default)('colors', 'zinc.400');
  const zinc700 = (0, _useTheme.default)('colors', 'zinc.700');
  const zinc500 = (0, _useTheme.default)('colors', 'zinc.500');
  const handleCheckOverflow = () => {
    if (ref && ref.current) {
      setOverflowDirection(isOverflow(ref));
    }
  };
  (0, _react.useEffect)(() => {
    handleCheckOverflow();
  }, []);
  let size = '0px';
  let scrollbarWidth = 'none';
  let borderRadius = '0px';
  if (showScrollbar) {
    size = '4px';
    scrollbarWidth = 'thin';
    borderRadius = '5px';
  }
  const C = overflowEffect === 'mask' ? _ScrollbarMasks.default : _ScrollbarShadows.default;
  return (0, _jsxRuntime.jsx)(C, {
    overflowDirection: overflowDirection,
    children: (0, _jsxRuntime.jsx)("div", {
      ...props,
      ref: ref,
      onClick: () => {
        setTimeout(() => {
          handleCheckOverflow();
        }, 20);
      },
      onScroll: () => {
        handleCheckOverflow();
      },
      css: [{
        display: 'flex',
        width: '100%',
        maxHeight: '100%',
        overflowX: 'auto',
        overflowY: 'auto',
        scrollbarWidth,
        scrollbarColor: `transparent transparent`,
        '::-webkit-scrollbar': {
          width: size,
          height: size,
          borderRadius,
          backgroundColor: 'transparent'
        },
        '::-webkit-scrollbar-thumb': {
          minHeight: '30px',
          borderRadius,
          backgroundColor: 'transparent'
        },
        '::-webkit-scrollbar-track': {
          width: size,
          height: size,
          borderRadius,
          backgroundColor: 'transparent'
        },
        '::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent'
        }
      }, showScrollbar && {
        scrollbarColor: `${zinc400} ${zinc200}`,
        '::-webkit-scrollbar': {
          backgroundColor: zinc400
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: zinc400
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: zinc200
        },
        '::-webkit-scrollbar-corner': {
          backgroundColor: zinc200
        },
        [_darkColorMode.default]: {
          scrollbarColor: `${zinc500} ${zinc700}`,
          '::-webkit-scrollbar': {
            backgroundColor: zinc500
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: zinc500
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: zinc700
          },
          '::-webkit-scrollbar-corner': {
            backgroundColor: zinc700
          }
        }
      }],
      children: children
    })
  });
};
Scrollbar.propTypes = {
  children: _propTypes.default.node.isRequired,
  overflowEffect: _propTypes.default.oneOf(['mask', 'shadow']),
  showScrollbar: _propTypes.default.bool
};
var _default = Scrollbar;
exports.default = _default;