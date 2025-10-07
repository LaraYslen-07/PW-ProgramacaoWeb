const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Página de usuários');
});

router.get('/signup', (req, res) => {
  res.send('Página de cadastro (userid)');
});

router.get('/signin', (req, res) => {
  const userid = req.query.userid;
  if (!userid) {
    res.redirect('/users/signup');
  } else {
    res.send(`Login realizado, bem-vindo ${userid}!`);
  }
});
 module.exports = router;