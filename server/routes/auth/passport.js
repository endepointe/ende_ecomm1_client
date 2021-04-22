const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  let db = req.app.get('psqldb');
  let d;
  db.any('select * from users')
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.json(error)
    });
});

module.exports = router;