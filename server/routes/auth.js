const router = require('express').Router();
const googleAuth = require('../middleware/googleOAuth2Config');
const passport = require('passport');

router.get('/google', googleAuth, passport.authenticate(
  'google',
  {
    scope: ['https://www.googleapis.com/auth/plus.login']
  }
));

router.get('/google/callback', passport.authenticate(
  'google',
  {
    failureRedirect: 'http://localhost:3000/login'
  }
),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = router;