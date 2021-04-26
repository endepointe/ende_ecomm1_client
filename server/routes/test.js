const router = require('express').Router();

router.get('/', (req, res) => {
  // res.json({ test: 'at the test, redirecting' });
  res.redirect('http://google.com');
});

module.exports = router;