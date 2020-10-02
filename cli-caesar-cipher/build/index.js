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
    var questions, answer, questions, answer, questions, answer, questions, answer, writeableStream, readableStream, encodeStream, decodeStream;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cipher
                    .version("0.0.1")
                    .description("An application for decode/encode text")
                    .option("-a, --Action <decode|encode>", 'action string: "decode" | "encode"')
                    .option("-s, --Shift <number>", "shift number: from -26 to 26")
                    .option("-i, --input <string>", "path to input file")
                    .option("-o, --output <string>", "path to output file");
                cipher.parse(process.argv);
                _a.label = 1;
            case 1:
                if (!!isActionCorrect_1.default(cipher.Action)) return [3 /*break*/, 3];
                console.error("\nError: Action incorrect");
                questions = [
                    {
                        name: "action",
                        type: "list",
                        choices: ["encode", "decode"],
                        message: "Please, select what do you want?"
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(questions)];
            case 2:
                answer = _a.sent();
                cipher.Action = answer.action;
                return [3 /*break*/, 1];
            case 3:
                if (!!isShiftCorrect_1.default(cipher.Shift)) return [3 /*break*/, 5];
                console.error("\nError: Shift incorrect");
                questions = [
                    {
                        name: "shift",
                        type: "number",
                        message: "What shift do u want (from -26 to 26)?"
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(questions)];
            case 4:
                answer = _a.sent();
                cipher.Shift = answer.shift;
                return [3 /*break*/, 3];
            case 5: return [4 /*yield*/, isPathCorrect_1.default(cipher.input)];
            case 6:
                if (!!(_a.sent())) return [3 /*break*/, 8];
                console.error("\nError: path to input file is not exist or acess denied");
                questions = [
                    {
                        name: "input",
                        type: "input",
                        message: "Print path to input file?"
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(questions)];
            case 7:
                answer = _a.sent();
                cipher.input = answer.input;
                return [3 /*break*/, 5];
            case 8: return [4 /*yield*/, isPathCorrect_1.default(cipher.output)];
            case 9:
                if (!!(_a.sent())) return [3 /*break*/, 11];
                console.error("\nError: path to output file is not exist or acess denied");
                questions = [
                    {
                        name: "output",
                        type: "output",
                        message: "Print path to output file, please"
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(questions)];
            case 10:
                answer = _a.sent();
                cipher.output = answer.output;
                return [3 /*break*/, 8];
            case 11:
                writeableStream = fs.createWriteStream(cipher.output);
                readableStream = fs.createReadStream(cipher.input, "utf8");
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
