var fs = require('fs');
const request = require('request');
var args = process.argv.slice(2,100);

var html = "<html><body><p>Type in your content:</p><h1>" + args[0] + "</h1></body></html>"

fs.writeFile ('part2-2.html', html, function(err,html){
  console.log("New html file is created as part2-2.html")
});
