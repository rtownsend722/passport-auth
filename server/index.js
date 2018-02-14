const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const db = require('../db/db.js');

const dist = path.join(__dirname, '/../client/dist');


/*================Middleware================*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(dist));

app.get('/*', (req, res) => {
  res.sendFile(dist + '/index.html');
})

app.use(cookieParser());
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

module.exports = app;

/*================Serialization================*/

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  return db.User.findOne({
    where: {
      id: user.id
    }
  }).then(foundUser => {
    done(null, user.id);
  }).catch(err => {
    console.log('Error deserializing record: ', err);
  })
});

/*================Encryption================*/

const generateHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

const isValidPassword = (password, storedHash) => {
  return bcrypt.compareSync(password, storedHash);
};

/*================Local Signup Strategy================*/

passport.use('local-signup', new LocalStrategy({
  passReqToCallback: true
},
function(req, username, password, done) {
  console.log('in the passport thing');
  process.nextTick(() => {
    return db.User.findOne({
      where: {
        username: username
      }
    }).then(user => {
      if (user) {
        done(null, false);
      } else {
        let hash = generateHash(password)
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: username,
          password: hash
        }).then(newUser => {
          done(null, newUser);
        })
      }
    }).catch(err => {
      console.log('Error creating new user record: ', err);
    })
  })
}));

app.post('/signup', 
  passport.authenticate('local-signup', {
    successRedirect: '/Home',
    failureRedirect: '/login'
  }));


app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    res.redirect('/login');
  })
});

app.get('/user', (req, res) => {
  if (req.session.passport === undefined) {
    res.redirect('/login');
  } else {
    console.log('in user route');
    console.log('sending', req.session.passport.user.firstName);
    res.end(JSON.stringify({
      firstName: req.session.passport.user.firstName
    }));
  }
});





















