const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieSession = require('cookie-session');
const port = 3001;
require('dotenv').config({ path: './dev.env' });
const passport = require('passport');
const psqldb = require('./psqldb');
const auth = require('./routes/auth');

app.set('psqldb', psqldb);

var corsOptions = {
  origin: true
}
// app.use(cors(corsOptions));
// app.use(cors());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));

//require('./config/passportConfig');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/auth', auth)

app.listen(port, () => {
  console.log(`ecommerce server running on port ${port}`);
});