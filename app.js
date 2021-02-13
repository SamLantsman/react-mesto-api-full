const express = require('express');

const app = express();

const path = require('path');
const usersRouter = require('./routes/user');
const cardsRouter = require('./routes/cards');
const undefinedRouter = require('./routes/addressUndefined');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', undefinedRouter);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} port`);
});
