const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');
const NotFoundError = require('../errors/not-fount-err');
const BadRequestError = require('../errors/bad-request-err');
const UnauthorizedError = require('../errors/unauthorized-error');

const getUser = (req, res, next) => UserModel.findById(req.user._id)
  .orFail(() => new NotFoundError('Пользователь по заданному id отсутствует в базе'))
  .then((user) => {
    console.log(user);
    console.log(req.user);
    if (user.length === 0) {
      throw new NotFoundError('Пользователей нету, сорян(');
    } res.send(user);
  })
  .catch((err) => {
    console.log(err);
    console.log(req.user);
    next(err);
  });

const getProfile = (req, res, next) => UserModel.findById(req.params.id)
  .then((user) => {
    if (!user) {
      throw new NotFoundError('Нет такого пользователя, попробуйте другой айди');
    } res.send(user);
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      next(new BadRequestError('Такого пользователя нет, проверьте айди.'));
      return;
    } next(err);
  });

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => UserModel.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      } next(err);
    });
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  const id = req.user._id;
  UserModel.findByIdAndUpdate(id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Такого кользователя не сущесвует, попробуйте другой айди');
      } res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.reason === null) {
        next(new BadRequestError('Переданы некорректные данные. Возможно, вы заполнили не все поля в теле запроса.'));
        return;
      } next(err);
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  const id = req.user._id;
  UserModel.findByIdAndUpdate(id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Такого кользователя не сущесвует, попробуйте другой айди');
      } res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      } next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return UserModel.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      next(new UnauthorizedError('У вас не вышло войти. Возможно, вы не зарегистированы?'));
    });
};

module.exports = {
  getUser, getProfile, createUser, updateProfile, updateAvatar, login,
};
