let http = require('http');
let port = process.env.PORT || 8000;

// Make a web server
http.createServer(function (req, res) {
  console.log(req);
  // Send an A-OK status
  // Go to the Network tab of your browser console
  // Reload the page to see the status message
  res.writeHead(200);
  // Send a message back to the client
  // No html required!
  res.end('Hello world!', req);
}).listen(port);

console.log('Server listening on port: ', port);

// var express = require ('express');
//
// var app = express();
//
//
// app.listen(8000, function(){
//   console.log('Our first server connected');
// })
//
// app.get('/', (req, res){
// res.send("Hello World!");
// })


// Create server
// let port = process.env.PORT || 8000;
// let express = require('express');
// let app = express();
// let server = require('http').createServer(app).listen(port, function (req, res) {
//   res.writeHead(200);
//   res.end('Hello world!', req);
//   console.log('Server listening at port: ', port);
// });
