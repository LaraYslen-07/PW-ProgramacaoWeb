const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log(`[LOG] Acesso: ${req.method} ${req.url}`);
  next();
});


const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const dataRouter = require('./routes/data');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/data', dataRouter);
app.use('/users', usersRouter);


app.use((req, res) => {
  res.status(404).send('Erro 404 - Página não encontrada.');
});

module.exports = app;