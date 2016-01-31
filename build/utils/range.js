'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Range = function Range(min, max) {
  if (max < min) {
    var _ref = [max, min];
    min = _ref[0];
    max = _ref[1];
  }

  return Array(max - min + 1).fill('').map(function (empty, index) {
    return index + min;
  });
};

exports.default = Range;
//# sourceMappingURL=range.js.map