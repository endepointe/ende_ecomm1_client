const pgp = require('pg-promise')();

const cn = {
  host: 'localhost',
  port: 5432,
  database: process.env.PG_DB_NAME,
  user: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASS,
  max: 30
}

const db = pgp(cn);

module.exports = db;