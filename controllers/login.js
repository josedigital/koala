var express = require('express');
var router = express.Router();
var passport = require('passport');
var model = require('../model/model');

//------------------- LOGIN
router.get('/login', function (req, res, next) {
  res.send('<a href="http://localhost:8080/auth/google">Login with Google</a>')
});


//------------------- AUTHORIZE
router.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
}));
//------------------- CALLBACK
router.get( '/auth/google/callback', passport.authenticate( 'google', { 
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login'
}));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

module.exports = router;
