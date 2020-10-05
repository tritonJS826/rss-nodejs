const { Command } = require("commander"); // (normal include)
const inquirer = require("inquirer");
const fs = require("fs");

import isActionCorrect from './helpers/isActionCorrect';
import isShiftCorrect from './helpers/isShiftCorrect';
import isPathCorrect from './helpers/isPathCorrect';

import { EncodeStream, DecodeStream } from "./caesar-cipher";

const cipher = new Command();

const encodeDecode = async () => {
  cipher
    .version("0.0.1")
    .description("An application for decode/encode text")
    .option(
      "-a, --Action <decode|encode>",
      'action string: "decode" | "encode"'
    )
    .option("-s, --Shift <number>", "shift number: from -26 to 26")
    .option("-i, --input <string>", "path to input file")
    .option("-o, --output <string>", "path to output file");

  cipher.parse(process.argv);
  
  // start program

  if (!isActionCorrect(cipher.Action)) {
    process.stderr.write("\nError: Action incorrect, please input correct parameter -a\n");
    process.exit(1);
  }

  if (!isShiftCorrect(cipher.Shift)) {
    process.stderr.write("\nError: Shift incorrect, please input correct parameter -s\n");
    process.exit(1);
  }

  if (cipher.input && !(await isPathCorrect(cipher.input))) {
    process.stderr.write("\nError: Input path incorrect, please input path parameter correct\n");
    process.exit(1);
  }

  if (cipher.output && !(await isPathCorrect(cipher.output))) {
    process.stderr.write("\nError: Output path incorrect, please input path parameter correct\n");
    process.exit(1);
  }

  const writeableStream = cipher.output ? fs.createWriteStream(cipher.output, { flags: 'a+' } ) : process.stdout;
  const readableStream = cipher.input ? fs.createReadStream(cipher.input, "utf8") : process.stdin;

  if (cipher.Action === "encode") {
    const encodeStream = new EncodeStream({}, cipher.Shift);
    readableStream.pipe(encodeStream).pipe(writeableStream);
  }

  if (cipher.Action === "decode") {
    const decodeStream = new DecodeStream({}, cipher.Shift);
    readableStream.pipe(decodeStream).pipe(writeableStream);
  }
};

encodeDecode();
