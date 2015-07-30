var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback (error, contents) {
  if (error) throw error;
   console.log(contents.split('\n').length - 1);
});
