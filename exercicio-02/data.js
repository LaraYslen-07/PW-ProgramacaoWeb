const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log('Acessando rota /data');
  next();
});


router.post('/', (req, res) => {
  res.send('Dados recebidos via POST');
});

module.exports = router;
