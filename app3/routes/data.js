const express = require('express');
const router = express.Router();

let dataList = [
  { id: 1, title: 'Exemplo 1', value: 100 },
  { id: 2, title: 'Exemplo 2', value: 200 }
];

router.get('/', (req, res) => {
  res.render('data', { dataList });
});

module.exports = router;
