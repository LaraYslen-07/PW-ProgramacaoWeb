const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log('Acessando rota /about');
  next();
});

router.get('/', (req, res) => {
  res.render('about');
});

module.exports = router;