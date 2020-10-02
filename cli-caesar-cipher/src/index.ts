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

  while (!isActionCorrect(cipher.Action)) {
    console.error("\nError: Action incorrect");
    const questions = [
      {
        name: "action",
        type: "list",
        choices: ["encode", "decode"],
        message: "Please, select what do you want?"
      }
    ];

    const answer = await inquirer.prompt(questions);
    cipher.Action = answer.action;
  }

  while (!isShiftCorrect(cipher.Shift)) {
    console.error("\nError: Shift incorrect");

    const questions = [
      {
        name: "shift",
        type: "number",
        message: "What shift do u want (from -26 to 26)?"
      }
    ];

    const answer = await inquirer.prompt(questions);
    cipher.Shift = answer.shift;
  }

  while (!(await isPathCorrect(cipher.input))) {
    console.error("\nError: path to input file is not exist or acess denied");

    const questions = [
      {
        name: "input",
        type: "input",
        message: "Print path to input file?"
      }
    ];

    const answer = await inquirer.prompt(questions);
    cipher.input = answer.input;
  }

  while (!(await isPathCorrect(cipher.output))) {
    console.error("\nError: path to output file is not exist or acess denied");

    const questions = [
      {
        name: "output",
        type: "output",
        message: "Print path to output file, please"
      }
    ];

    const answer = await inquirer.prompt(questions);
    cipher.output = answer.output;
  }

  const writeableStream = fs.createWriteStream(cipher.output);
  const readableStream = fs.createReadStream(cipher.input, "utf8");

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
