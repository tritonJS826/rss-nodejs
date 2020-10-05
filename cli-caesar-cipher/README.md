<h1>CLI casesar cipher</h1>

<hr>
To start cipher:</br>
1. Download this repo</br>
2. <i>$ npm install</br> </i>
3. <i>$ npm run encode </i><b> OR </b><i> $ npm run decode</i></br>
after that the program will start in your console</br>
<b>OR</b></br>
<i>$ npm run build</br> </i>
(we already created this folder with files for you)</br>

u can use index.js file in ./build directory like this:<br/>
$ node ./build/index.js -a encode -s -3 -i ./build/input.txt -o ./build/output.txt
<i>
</br>
$ node ./build/index.js -a encode -s 7 -i ./build/input.txt -o ./build/output.txt
</br>
$ node ./build/index.js --Action encode --Shift 7 --input ./build/input.txt --output ./build/output.txt
</br>
$ node ./build/index.js --Action decode --Shift 7 --input ./build/input.txt --output ./build/output.txt
</br>
</i>
Attention! parameter -a and -s are required)
<hr>
parameters:<br/>
-a, --Action <decode|encode>, "action string: 'decode' | 'encode'"<br/>
-s, --Shift <number>, "shift number: from -26 to 26"<br/>
-i, --input <string>, "path to input file"<br/>
-o, --output <string>, "path to output file"<br/>
-h, --help, "display help for command"<br/>
-V, --version, "cipher version"<br/>
<hr>
