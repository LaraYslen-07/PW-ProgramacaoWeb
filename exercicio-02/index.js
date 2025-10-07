const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log('Acessando rota /');
  next();
});

router.get('/', (req, res) => {
  res.send('Página inicial');
});

module.exports = router;
