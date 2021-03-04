const UserModel = require('../models/users');

const getUsers = (req, res) => UserModel.find({})
  .then((users) => {
    if (users.length === 0) {
      res.status(404).send({ message: 'Пользователей нету, сорян(' });
      return;
    } res.status(200).send(users);
  })
  .catch((err) => res.status(500).send(err));

const getProfile = (req, res) => UserModel.findById(req.params.id)
  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'Нет такого пользователя, попробуйте другой айди' });
      return;
    } res.status(200).send(user);
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      res.status(400).send({ message: 'Такого пользователя нет, проверьте айди.' });
      return;
    } res.status(500).send({ message: 'Произошла ошибка' });
  });

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  UserModel.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
        return;
      } res.status(500).send({ message: 'Произошла ошибка' });
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  const id = req.user._id;
  UserModel.findByIdAndUpdate(id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Такого кользователя не сущесвует, попробуйте другой айди' });
        return;
      } res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.reason === null) {
        res.status(400).send({ message: 'Переданы некорректные данные. Возможно, вы заполнили не все поля в теле запроса.' });
        return;
      } res.status(500).send({ message: 'Произошла ошибка' });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const id = req.user._id;
  UserModel.findByIdAndUpdate(id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Такого кользователя не сущесвует, попробуйте другой айди' });
        return;
      } res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
        return;
      } res.status(500).send({ message: 'Произошла ошибка' });
    });
};

module.exports = {
  getUsers, getProfile, createUser, updateProfile, updateAvatar,
};
