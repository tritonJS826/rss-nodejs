"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Command = require("commander").Command; // (normal include)
var inquirer = require("inquirer");
var fs = require("fs");
var isActionCorrect_1 = __importDefault(require("./helpers/isActionCorrect"));
var isShiftCorrect_1 = __importDefault(require("./helpers/isShiftCorrect"));
var isPathCorrect_1 = __importDefault(require("./helpers/isPathCorrect"));
var caesar_cipher_1 = require("./caesar-cipher");
var cipher = new Command();
var encodeDecode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, writeableStream, readableStream, encodeStream, decodeStream;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                cipher
                    .version("0.0.1")
                    .description("An application for decode/encode text")
                    .option("-a, --Action <decode|encode>", 'action string: "decode" | "encode"')
                    .option("-s, --Shift <number>", "shift number: from -26 to 26")
                    .option("-i, --input <string>", "path to input file")
                    .option("-o, --output <string>", "path to output file");
                cipher.parse(process.argv);
                // start program
                if (!isActionCorrect_1.default(cipher.Action)) {
                    process.stderr.write("\nError: Action incorrect, please input correct parameter -a\n");
                    process.exit(1);
                }
                if (!isShiftCorrect_1.default(cipher.Shift)) {
                    process.stderr.write("\nError: Shift incorrect, please input correct parameter -s\n");
                    process.exit(1);
                }
                _a = cipher.input;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, isPathCorrect_1.default(cipher.input)];
            case 1:
                _a = !(_c.sent());
                _c.label = 2;
            case 2:
                if (_a) {
                    process.stderr.write("\nError: Input path incorrect, please input path parameter correct\n");
                    process.exit(1);
                }
                _b = cipher.output;
                if (!_b) return [3 /*break*/, 4];
                return [4 /*yield*/, isPathCorrect_1.default(cipher.output)];
            case 3:
                _b = !(_c.sent());
                _c.label = 4;
            case 4:
                if (_b) {
                    process.stderr.write("\nError: Output path incorrect, please input path parameter correct\n");
                    process.exit(1);
                }
                writeableStream = cipher.output ? fs.createWriteStream(cipher.output, { flags: 'a+' }) : process.stdout;
                readableStream = cipher.input ? fs.createReadStream(cipher.input, "utf8") : process.stdin;
                if (cipher.Action === "encode") {
                    encodeStream = new caesar_cipher_1.EncodeStream({}, cipher.Shift);
                    readableStream.pipe(encodeStream).pipe(writeableStream);
                }
                if (cipher.Action === "decode") {
                    decodeStream = new caesar_cipher_1.DecodeStream({}, cipher.Shift);
                    readableStream.pipe(decodeStream).pipe(writeableStream);
                }
                return [2 /*return*/];
        }
    });
}); };
encodeDecode();
