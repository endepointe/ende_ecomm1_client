const router = require('express').Router();
const googleAuth = require('../middleware/googleOAuth2Config');
const passport = require('passport');

router.get('/google', googleAuth, passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('http://localhost:3000/');
});

module.exports = router;