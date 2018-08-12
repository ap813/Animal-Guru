var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cors = require('cors');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var {DB_HOST, DB_USER, DB_PASSWORD, DB, SECRET, EMAIL_PASSWORD} = require('./serverinfo')

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'animalguru.store@gmail.com',
    pass: EMAIL_PASSWORD
  }
}));

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

// Grab the list of Dogs
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

// Grab the list of Cats
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

// Register a new account, check to make sure
// There isn't a User already with that email
app.post('/api/register', function(req, res) {
  // Construct user in JSON
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    state: req.body.state,
    zip: req.body.zip
  }

  // Check to make sure that the email isn't in use
  const check = "select email from users where email='" + user.email + "';"

  con.query(check, function(error, result) {
    if(error) {
      res.json({error: error})
      return;
    }

    // Connector will return an array as result,
    // If the rows are equal to 0 then the email isn't in use
    if(result.length === 0) {
      // Generate Code to Send to the User's Email (6 Digit Code)
      const code = Math.floor(100000 + Math.random() * 900000)

      // Construct Query Insert
      const sql = "insert into users values ('" + user.username + "','" 
      + user.email + "','" + user.password + "','',false,"+code+",'" 
      + user.address + "','" + user.state + "','" + user.zip + "');"

      // Add the token and the user into the database
      con.query(sql, function(err, result) {
        if (err) { 
          console.log(err);
          res.sendStatus(401);
        }

        // Configure the Email Sent to the User
        const mailOptions = {
          from: 'animalguru.store@gmail.com',
          to: user.email,
          subject: 'Account Verification',
          text: 'Please enter the verifcation code into the website\n' +
                  'Verification Code: ' + code
        };
        
        // Send the Email out to the User
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        // Incorporate "Trigger" to allow the API to
        // Delete any user that doesn't validate within 30 minutes

        // Send the Client a Success Message
        res.json({message: "Account Created"})
      })
    } else {
      res.sendStatus(401);
    }
  })
})

app.post('/api/verify', function(req, res) {
  // Grab the verification code and email
  const user = {
    code: req.body.code,
    email: req.body.email
  }

  // Query to check if the code is correct
  const sql = "select code, verified from users where email='" + user.email + "';"

  // Send Query
  con.query(sql, function(err, result){
    if (err) res.sendStatus(401)
    // If result is Equal to 0, then the user doesn't exist
    if (result.length === 0) {
      res.sendStatus(401)
      return;
    }

    if (result[0].verified) {
      res.json({message: "Account already verified"})
      return;
    }

    // Compare the code from the user to the one in the database
    if(result[0].code === user.code) {
      // Update Verified bool in database
      const update = "update users set verified=true where email='" + user.email + "';"
      
      con.query(update, function(error, resultTwo){
        if (error) {
          res.json({message: "Problem Updating Database"})
          return;
        }

        // Tell the user it was verified
        res.json({message: "Verified"})
      })
    } else {
      // Let User know the code was incorrect
      res.json({message: "Invalid Code"})
    }
  })
})

// Login to an account and generate a token for that user
app.post('/api/login', function(req, res) {
  // Login Credentials
  const user = {
    email: req.body.email,
    password: req.body.password
  }

  /*
    Query!: Get verified to check if user has verified their email
    Cases: 
      1) User isn't doesn't match credentials => 401 Status
      2) User exists but isn't verified => "Account not verified"
      3) User exists and is verified => Generate and Serve Token
  */
  const check = "select verified from users where email='" + user.email+ "' && password='" + user.password +"';";

  con.query(check, function(err, result) {
    if(result.length  === 1) {
      if(result[0].verified) {
        jwt.sign({user: user}, SECRET, function(err, token) {
          if (err) res.json({error: "Error in Validation"})

          // Insert the token into the database

          // Return the token create
          res.json({token: token})
        })
      } else {
        // Prompt User to Verify their account
        res.json({message: "Account hasn't been verified"})
      }
    } else {
      // Account not found: let them know it might
      // have been deleted if 30 minutes have passed
      res.sendStatus(401);
    }
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port);

console.log('Server listening on port ' + port);
