const router = require('express').Router();
const passport = require('passport');
require('../config/passportConfig');

// authenicate via passport google
// router.get('/google', (req, res) => {
//   res.json({ obj: 'google auth route' });
// });
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login/failed'
},
  function (req, res) {
    res.redirect('/login/success');
  }
));

// returns login success response with user information
router.get('/login/success', (req, res) => {
  res.json({ obj: '/login/success' });
});

// returns login failed message
router.get('/login/failed', (req, res) => {
  res.json({ obj: '/login/failed' });
});

// logout and redirect to client home page
router.get('/logout', (req, res) => {
  res.json({ obj: '/logout' });
});

// redirect to home page if login succeeded or to 
// /auth/login/failed if failed
router.get('/redirect', (req, res) => {
  res.json({ obj: '/google/redirect' });
});

module.exports = router;