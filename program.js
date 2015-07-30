var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function callback (error, files) {
  if (error) throw error;

  var filtered = files.filter(function callback (file) {
    return path.extname(file) === extension;
  });

  filtered.forEach(function callback (file) {
    console.log(file);
  });
});
