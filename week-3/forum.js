// create app and express
var express = require('express');
var app = express();
//Look for the ven var first, and if there's no environmental var call PORT, use 8000 as default
var port = process.env.PORT || 8000;

//to handle the post function
var bodyParser = require ("body-parser");

// mustache express
var mustacheExpress = require('mustache-express');

//take the post content and past it to the page we asked it to
app.use(bodyParser.urlencoded({extended:false}));

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

// database:
const text1 = 'INSERT INTO forum(message) VALUES($1)';
const text2 = 'SELECT message FROM forum';

// Two kinds of imports, {Client} is more like a format

const { Client } = require('pg');
var client;
if (process.env.DATABASE_URL){
  client = new Client({connectionString: process.env.DATABASE_URL, ssl: true});
} else {
  client = new Client({database: 'my-first-database'});
}

client.connect();

// render the index page
app.get('/', function(req, res1) {

  client.query(text2, (err, res2) => {
    if (err) throw err;
    for (let row of res2.rows) {
          console.log(JSON.stringify(row));
        }

        var post_message = res2.rows;
        res1.render('index', {
        post_message
        });
      });
});


app.post('/post',function (req, res3){
   var info = [req.body.forum_message];
    if (info === undefined){
      res3.sendFile(path.join(__dirname + '/index.html'))
    }else{
      client.query(text1, info, function (error, results) {
      if (error) throw error;
      res3.redirect('/');
    });
    }
})


app.listen(port, function () {
  console.log('Listen to port: ' + port)
})
