var express = require('express');
var mustacheExpress = require('mustache-express');
var port = process.env.PORT || 8000;
var insults = ["? This band sucks!", "? Gross", "? Ewww..."];
var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  if (req.query.form_input_name) {
    var min= 0;
    var max= 3;
    var i = Math.floor(Math.random() * (max - min)) + min;
    res.send(req.query.form_input_name + insults[i]);
    return;
  }
    res.render('band', {
      template_variable_name: req.query.form_input_name
    });
  }
)


app.listen(port, function () {
  console.log('Listen to port 8000')
})
