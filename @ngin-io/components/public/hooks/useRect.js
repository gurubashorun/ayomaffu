"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
const useRect = () => {
  const ref = (0, _react.useRef)();
  const [rect, setRect] = (0, _react.useState)();
  const updateRect = (0, _react.useCallback)(() => {
    document.fonts.ready.then(() => {
      if (ref && ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    });
  }, [ref]);
  const useEffectInEvent = (event, useCapture) => {
    (0, _react.useEffect)(() => {
      updateRect();
      window.addEventListener(event, updateRect, useCapture);
      return () => {
        return window.removeEventListener(event, updateRect, useCapture);
      };
    }, [event, useCapture]);
  };
  useEffectInEvent('resize');
  useEffectInEvent('scroll', true);
  return [rect, ref];
};
var _default = useRect;
exports.default = _default;