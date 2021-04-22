const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  let db = req.app.get('psqldb');
  db.any('select * from users')
    .then(data => {
      console.log(`Data: ${data}`)
    })
    .catch(error => {
      console.error(error);
    })
    .finally(db.$pool.end);

  res.json({
    test: 'at the auth route'
  });
});

module.exports = router;