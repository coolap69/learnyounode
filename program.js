var argv = process.argv;
var total = 0;

for (var i = 2, max = argv.length; i < max; i++ ) {
  total += Number(argv[i]);
}

console.log(total);
