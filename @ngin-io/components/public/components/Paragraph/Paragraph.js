"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Text = _interopRequireDefault(require("../Text/Text"));
var _jsxRuntime = require("mystical/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Paragraph = props => {
  return (0, _jsxRuntime.jsx)(_Text.default, {
    as: "p",
    ...props,
    css: {
      maxWidth: 'paragraph',
      marginBottom: [2, 3],
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      }
    }
  });
};
Paragraph.propTypes = _Text.default.propTypes;
var _default = Paragraph;
exports.default = _default;