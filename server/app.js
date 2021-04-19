const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  const tester = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
  ];
  res.json(tester);
  res.end();
});

app.listen(port, () => {
  console.log(`ecommerce server running on port ${port}`);
});