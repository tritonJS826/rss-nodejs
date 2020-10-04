"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isActionCorrect = function (action) {
    return action === "decode" || action === "encode";
};
exports.default = isActionCorrect;
