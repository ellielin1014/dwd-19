//var request = require ('request');
var express = require('express');
var mustacheExpress = require('mustache-express');

//var url = process.argv[2];
//var fs = require('fs');
var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

let port = process.env.PORT || 8000;
let server = require('http').createServer(app).listen(port, function() {
  console.log('Server is listening at port: ', port);
});

//app.use(express.static('public'));
app.get('/homework2c', function(req, res) {

  if (req.query.url){
    request(req.query.url, function (error, respose, html){
      res.send(html);
    });
  } else{
      res.render('2c');
    }
});
