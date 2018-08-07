var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cors = require('cors');

var con = mysql.createConnection({
  host: "localhost",
  user: "server",
  password: "12#4eFpl",
  database: 'animalguru'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.Port || 80;

var router = express.Router();

app.use(express.static('build'));

router.use(function(req, res, next) {
  console.log('Server firing up')
});

app.get('/work', function(req, res) {
  res.send("I swear that I'm working")
})

app.get('/getDogs', function(req, res) {
  console.log("Puppies!");
  const sql = "SELECT * FROM dogs"
  con.query(sql, function(err, result) {
    if(err) {
      res.send(err);
    }
    else {
      res.json({dogs: result});
    }
  })
})



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port);

console.log('Server listening on port ' + port);
