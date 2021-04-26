const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieSession = require('cookie-session');
const port = 3001;
require('dotenv').config({ path: './dev.env' });
const psqldb = require('./db/psqldb');

app.set('psqldb', psqldb);

var corsOptions = {
  origin: 'http://localhost:3000'
}

// middleware
app.use(cors(corsOptions));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));

// routes
app.use('/auth', require('./routes/auth'));
app.use('/test', require('./routes/test'));

app.listen(port, () => {
  console.log(`ecommerce server running on port ${port}`);
});