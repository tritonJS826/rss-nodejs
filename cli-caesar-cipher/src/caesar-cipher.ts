import fs from "fs";
const stream = require("stream");
const util = require("util");

const Transform = stream.Transform || require("readable-stream").Transform;

const alphabet = [
  "A",
  "a",
  "B",
  "b", //3
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
  "y", //49
  "Z", //50
  "z", //51
];

export class EncodeStream extends Transform {
  constructor(opt = {}, shift: number) {
    super(opt);
    // console.log("\n -------- Transform in constructor");
    // console.log("objectMode ", this._writableState.objectMode); //false по умолчанию, если не задано явно true
    // console.log("highWaterMark ", this._writableState.highWaterMark); //16384
    // console.log("decodeStrings ", this._writableState.decodeStrings); //true по умолчанию; пеобразовывать ли в Buffer данные, до их передачи в метод _write()
    // console.log("buffer ", this._writableState.getBuffer()); //[] - пустой массив

    this.shift = shift;

    this.on("close", () => {
      console.log("\n------ Transform on close ------");
    })
      .on("drain", () => {
        console.log("\n------ Encode on drain ------");
      })
      .on("error", (err: Error) => {
        console.log("\n------ Encode on error ------", err);
      })
      .on("finish", () => {
        console.log("\n------ Encode on finish ------");
      })
      .on("end", () => {
        console.log("\n------ Encode on end ------");
      })
      .on("pipe", () => {
        console.log("\n------ Encode on pipe ------");
      });
  }

  _transform(chunk: any, enc: any, cb: any) {
    const letters = chunk
      .toString()
      .split("")
      .map((letter: string) => {
        const letterIndex = alphabet.indexOf(letter);
        if (letterIndex === -1) return letter;

        const newLetterIndex = (letterIndex + this.shift * 2) % 52;
        const encodedLetter = alphabet[newLetterIndex];

        return encodedLetter
      }).join('');

    this.push(letters);
    cb();
  }
};

export class DecodeStream extends Transform {
  constructor(opt = {}, shift: number) {
    super(opt);
    // console.log("\n -------- Transform in constructor");
    // console.log("objectMode ", this._writableState.objectMode); //false по умолчанию, если не задано явно true
    // console.log("highWaterMark ", this._writableState.highWaterMark); //16384
    // console.log("decodeStrings ", this._writableState.decodeStrings); //true по умолчанию; пеобразовывать ли в Buffer данные, до их передачи в метод _write()
    // console.log("buffer ", this._writableState.getBuffer()); //[] - пустой массив

    this.shift = shift;

    this.on("close", () => {
      console.log("\n------ Decode on close");
    })
      .on("drain", () => {
        console.log("\n------ Decode on drain");
      })
      .on("error", (err: Error) => {
        console.log("\n------ Decode on error", err);
      })
      .on("finish", () => {
        console.log("\n------ Decode on finish");
      })
      .on("end", () => {
        console.log("\n------ Decode on end");
      })
      .on("pipe", () => {
        console.log("\n------ Decode on pipe");
      });
  }

  _transform(chunk: any, enc: any, cb: any) {
    const letters = chunk
      .toString()
      .split("")
      .map((letter: string) => {
        const letterIndex = alphabet.indexOf(letter);
        if (letterIndex === -1) return letter;

        const newLetterIndex = (letterIndex - this.shift * 2 + 52) % 52;
        const encodedLetter = alphabet[newLetterIndex];

        return encodedLetter
      }).join('');

    this.push(letters);
    cb();
  }
};
