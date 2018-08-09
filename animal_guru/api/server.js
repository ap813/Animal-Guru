var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cors = require('cors');
const jwt = require('jsonwebtoken');

var {DB_HOST, DB_USER, DB_PASSWORD, DB, SECRET} = require('./serverinfo')

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

app.get('/api/getDogs', function(req, res) {
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

app.get('/api/getCats', function(req, res) {
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

app.post('/api/register', function(req, res) {
  // Construct user in JSON
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  jwt.sign({user: user}, SECRET, function(err, token) {
    if(err) {
      res.send(err)
    }

    // Check to make sure that the email isn't in use
    const check = "select email from users where email='"+user.email + "';"

    con.query(check, function(error, result) {
      if(error) {
        res.json({error: error})
      }

      if(result.length === 0) {
        // Construct Query Insert
        const sql = "insert into users values ('" + user.username + "','" 
        + user.email + "','" + user.password + "','" + token + "');"

        // Add the token and the user into the database
        con.query(sql, function(err, result) {
          if (err) { 
            console.log(err);
            res.sendStatus(401);
          }

          // Send the Client the Token to Save
          res.json({token: token})
        })
      } else {
        res.sendStatus(401);
      }
    })
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port);

console.log('Server listening on port ' + port);
