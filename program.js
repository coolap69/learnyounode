var fs = require('fs');

var argv = process.argv;
var filepath = argv[2];

var buffer = fs.readFileSync(filepath);
var str = buffer.toString();

var ary = str.split('\n');

console.log(ary.length - 1);
