"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isShiftCorrect = function (shift) {
    var shiftNumber = +shift;
    var isNumber = Number.isInteger(shiftNumber);
    var isBiggerThanMinus27 = shiftNumber > -27;
    var isLessThanMinus27 = shiftNumber < 27;
    return isNumber && isLessThanMinus27 && isBiggerThanMinus27;
};
exports.default = isShiftCorrect;
