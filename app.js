const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => { console.log('База Mongoose подключилась'); });

const usersRouter = require('./routes/user');
const cardsRouter = require('./routes/cards');
const undefinedRouter = require('./routes/addressUndefined');

const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '603d5f9063ae770f99d58f40',
  };

  next();
});

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', undefinedRouter);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} port`);
});
