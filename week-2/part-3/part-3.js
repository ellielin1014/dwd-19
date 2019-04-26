var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require("body-parser");

var insults = ["? This band sucks!", "? Gross!", "? Ewww..."];
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function(req, res) {
  res.sendFile(__dirname + "/" + "band.html");
})

app.post('/', function(req, res) {
  if (req.body.form_input_name) {
    var min = 0;
    var max = 3;
    var i = Math.floor(Math.random() * (max - min)) + min;
    res.send(req.body.form_input_name + insults[i]);
    return;

  }
})

app.listen(8000, function() {
  console.log('Listen to port 8000')
})