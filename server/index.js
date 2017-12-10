const express = require('express');
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

const app = express();

/*================Middleware================*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(dist));

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