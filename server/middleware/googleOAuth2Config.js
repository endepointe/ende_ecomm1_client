const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function (req, res, next) {
  let db = req.app.get('psqldb');
  let User = {};
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
    function (accessToken, refreshtoken, profile, done) {
      db.oneOrNone(`Select id 
                    FROM google_users
                    WHERE id = ${profile.id};`
      ).then((response) => {
        console.log('response: ', response)
        if (response === null) {
          db.one(`INSERT INTO google_users(id,
                                               fname
                                               lname,
                                               photo)
                      VALUES($1,$2,$3,$4) RETURNING id`,
            [
              profile.id,
              profile.name.givenName,
              profile.name.familyName,
              profile.photos[0].value
            ])
            .then((data) => {
              //User = data;
              console.log(data);
              return done(User);
            })
            .catch(error => {
              console.error(error);
            })
        }
      }).catch((err) => {
        console.error(err);
      })
      console.log('User: ', User);
      return done(User);
    }
  ));
  next();
}