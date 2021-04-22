const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieSession = require('cookie-session');
const port = 3001;
require('dotenv').config({ path: './dev.env' });
const passport = require('passport');
const psqldb = require('./psqldb');

app.set('psqldb', psqldb);

var corsOptions = {
  origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/test', require('./routes/test/test'));
app.use('/auth', require('./routes/auth/passport'));

app.listen(port, () => {
  console.log(`ecommerce server running on port ${port}`);
});