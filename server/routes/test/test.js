const router = require('express').Router();

router.get('/', (req, res) => {
  const tester = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
  ];
  res.json(tester);
});

module.exports = router;