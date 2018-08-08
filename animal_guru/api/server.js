var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cors = require('cors');

var {DB_HOST, DB_USER, DB_PASSWORD, DB} = require('./serverinfo')

var con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB
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
app.use(express.static('public'));

router.use(function(req, res, next) {
  console.log('Server firing up')
});

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

app.get('/getCats', function(req, res) {
  console.log("Kittens!");
  const sql = "SELECT * FROM cats"
  con.query(sql, function(err, result) {
    if(err) {
      res.send(err);
    }
    else {
      res.json({cats: result});
    }
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port);

console.log('Server listening on port ' + port);
