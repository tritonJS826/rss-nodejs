"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeStream = exports.EncodeStream = void 0;
var stream = require("stream");
var util = require("util");
var Transform = stream.Transform || require("readable-stream").Transform;
var alphabet = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
];
var EncodeStream = /** @class */ (function (_super) {
    __extends(EncodeStream, _super);
    function EncodeStream(opt, shift) {
        if (opt === void 0) { opt = {}; }
        var _this = _super.call(this, opt) || this;
        // console.log("\n -------- Transform in constructor");
        // console.log("objectMode ", this._writableState.objectMode); //false по умолчанию, если не задано явно true
        // console.log("highWaterMark ", this._writableState.highWaterMark); //16384
        // console.log("decodeStrings ", this._writableState.decodeStrings); //true по умолчанию; пеобразовывать ли в Buffer данные, до их передачи в метод _write()
        // console.log("buffer ", this._writableState.getBuffer()); //[] - пустой массив
        _this.shift = shift;
        _this.on("close", function () {
            console.log("\n------ Transform on close ------");
        })
            .on("drain", function () {
            console.log("\n------ Encode on drain ------");
        })
            .on("error", function (err) {
            console.log("\n------ Encode on error ------", err);
        })
            .on("finish", function () {
            console.log("\n------ Encode on finish ------");
        })
            .on("end", function () {
            console.log("\n------ Encode on end ------");
        })
            .on("pipe", function () {
            console.log("\n------ Encode on pipe ------");
        });
        return _this;
    }
    EncodeStream.prototype._transform = function (chunk, enc, cb) {
        var _this = this;
        var letters = chunk
            .toString()
            .split("")
            .map(function (letter) {
            var letterIndex = alphabet.indexOf(letter);
            if (letterIndex === -1)
                return letter;
            var newLetterIndex = (letterIndex + _this.shift * 2) % 52;
            var encodedLetter = alphabet[newLetterIndex];
            return encodedLetter;
        }).join('');
        this.push(letters);
        cb();
    };
    return EncodeStream;
}(Transform));
exports.EncodeStream = EncodeStream;
;
var DecodeStream = /** @class */ (function (_super) {
    __extends(DecodeStream, _super);
    function DecodeStream(opt, shift) {
        if (opt === void 0) { opt = {}; }
        var _this = _super.call(this, opt) || this;
        // console.log("\n -------- Transform in constructor");
        // console.log("objectMode ", this._writableState.objectMode); //false по умолчанию, если не задано явно true
        // console.log("highWaterMark ", this._writableState.highWaterMark); //16384
        // console.log("decodeStrings ", this._writableState.decodeStrings); //true по умолчанию; пеобразовывать ли в Buffer данные, до их передачи в метод _write()
        // console.log("buffer ", this._writableState.getBuffer()); //[] - пустой массив
        _this.shift = shift;
        _this.on("close", function () {
            console.log("\n------ Decode on close");
        })
            .on("drain", function () {
            console.log("\n------ Decode on drain");
        })
            .on("error", function (err) {
            console.log("\n------ Decode on error", err);
        })
            .on("finish", function () {
            console.log("\n------ Decode on finish");
        })
            .on("end", function () {
            console.log("\n------ Decode on end");
        })
            .on("pipe", function () {
            console.log("\n------ Decode on pipe");
        });
        return _this;
    }
    DecodeStream.prototype._transform = function (chunk, enc, cb) {
        var _this = this;
        var letters = chunk
            .toString()
            .split("")
            .map(function (letter) {
            var letterIndex = alphabet.indexOf(letter);
            if (letterIndex === -1)
                return letter;
            var newLetterIndex = (letterIndex - _this.shift * 2 + 52) % 52;
            var encodedLetter = alphabet[newLetterIndex];
            return encodedLetter;
        }).join('');
        this.push(letters);
        cb();
    };
    return DecodeStream;
}(Transform));
exports.DecodeStream = DecodeStream;
;
