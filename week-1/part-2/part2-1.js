const request = require ('request');
var url = process.argv[2];

request(url, function(error, response, data){
console.log(data);
})
