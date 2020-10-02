<h1>CLI casesar cipher</h1>

<hr>
To start cipher:</br>
1. Download this repo</br>
2. $ npm i</br>
3. $ npm run start</br>
after that the program will start in dialog mode in console</br>
<b>OR</b></br>
$ npm run build</br>
after that u can use index.js file in ./build directory like this:<br/>
$ node ./build -a encode -s -3 -i yourInputFile.txt -o yourOutputFile.txt
<br/>
If you enter any parameter incorrectly or do not enter it, the program will ask you to correct it in dialog mode
</br>

<hr>
parameters:<br/>
-a, --Action <decode|encode>, "action string: 'decode' | 'encode'"<br/>
-s, --Shift <number>, "shift number: from -26 to 26"<br/>
-i, --input <string>, "path to input file"<br/>
-o, --output <string>, "path to output file"<br/>
-h, --help, "display help for command"<br/>
-V, --version, "cipher version"<br/>
<hr>
