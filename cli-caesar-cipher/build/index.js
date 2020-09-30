"use strict";
var Command = require('commander').Command; // (normal include)
var cipher = new Command();
var encodeDecode = function (
// action: "encode" | "decode" = "encode",
// shift: number = 0,
// input: string = "",
// output: string = "",
) {
    cipher
        .version('0.0.1')
        .description('An application for pizzas ordering')
        .option('-a, --Action <decode|encode>', 'action string: "decode" | "encode"')
        .option('-s, --Shift <number>', 'shift number: from -26 to 26')
        .option('-i, --input <string>', 'path to input file')
        .option('-o, --output <string>', 'path to output file');
    cipher.parse(process.argv);
    // console.log('u start a the program with parameters:');
    // if (cipher.Action) console.log('  - Action');
    // if (cipher.Shift) console.log('  - Shift');
    var isActionCorrect = function () {
        return (cipher.Action === 'decode' || cipher.Action === 'encode');
    };
    var isShiftCorrect = function () {
        var isNumber = typeof cipher.Shift === 'number';
        var isBiggerThanMinus27 = cipher.Shift > -27;
        var isLessThanMinus27 = cipher.Shift < 27;
        return (isNumber && isLessThanMinus27 || isBiggerThanMinus27);
    };
    var isInputCorrect = function () {
        return true;
    }; // !!!!!!!!!!!!
    var isOutputCorrect = function () {
        return true;
    }; // !!!!!!!!!!!!
    var readNewInput = function () { }; // !!!!!!!!!
    var readNewOutput = function () { }; // !!!!!!!!!
    var checkInput = function () {
        if (!isInputCorrect()) {
            console.error("incorrect input, write new input file path");
            readNewInput();
            checkInput();
        }
    }; // !!!!!!!!!
    var checkOutput = function () {
        if (!isOutputCorrect()) {
            console.error("incorrect output path, write new output file path");
            readNewOutput();
            checkOutput();
        }
    }; // !!!!!!!!!
    var cipherStart = function () {
        //    pipeline(
        //      input_stream, // input file stream or stdin stream
        //      transform_stream, // standard Transform stream or https://github.com/rvagg/through2
        //      output_stream // output file stream or stdout stream
        // )
        //.then(/* success and error callbacks */)
    }; // !!!!!!!!!
    // start program
    if (!isActionCorrect()) {
        console.error("Error: Action incorrect");
        process.exit(1);
    }
    if (!isShiftCorrect()) {
        console.error("Error: Shift incorrect");
        process.exit(1);
    }
    checkInput();
    checkOutput();
    cipherStart();
};
encodeDecode();
console.log("AAA");
