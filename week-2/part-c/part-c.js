const request = require ('request');
var url = process.argv[2];

let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let server = require('http').createServer(app).listen(port, function() {
  console.log('Server is listening at port: ', port);
});

//app.use(express.static('public'));
app.get('/', function(req, res) {
  res.redirect(url);
});
