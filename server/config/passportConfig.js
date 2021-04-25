const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const psqldb = require('../psqldb');

passport.serializeUser((user, done) => {
  console.log('serialize');
  done(null);
});

passport.deserializeUser((id, done) => {
  console.log('deserialize');
  done(null);
})

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
  function (accessToken, refreshToken, profile, done) {
    console.log(psqldb);
    console.log('inside google strat');
    return done(null);
  }
));