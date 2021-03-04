const CardModel = require('../models/cards');

const getCards = (req, res) => CardModel.find({})
  .then((cards) => {
    if (cards.length === 0) {
      res.status(404).send({ message: 'Карточек нету, сорян(' });
      return;
    } res.status(200).send(cards);
  })
  .catch((err) => res.status(500).send(err));

const createCard = (req, res) => {
  const { name, link } = req.body;
  const id = req.user._id;
  CardModel.create({ name, link, owner: id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
        return;
      } res.status(500).send({ message: 'Произошла ошибка' });
    });
};

const deleteCard = (req, res) => CardModel.findByIdAndRemove(req.params.cardId)
  .then((card) => {
    if (!card) {
      res.status(404).send({ message: 'Нет такой карточки, попробуйте другой айди' });
      return;
    } res.status(200).send({ message: 'Удалил карточку, все ОК' });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      res.status(400).send({ message: 'Такой карточки нет, проверьте айди.' });
      return;
    } res.status(500).send({ message: 'Произошла ошибка' });
  });

const likeCard = (req, res) => CardModel.findByIdAndUpdate(req.params.cardId,
  { $addToSet: { likes: req.user._id } }, { new: true })
  .then((card) => {
    if (!card) {
      res.status(404).send({ message: 'Нет такой карточки, попробуйте другой айди' });
      return;
    } res.status(200).send({
      message: 'Залайкал карточку, все ОК',
      data: card,
    });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      res.status(400).send({ message: 'Такой карточки нет, проверьте айди.' });
      return;
    } res.status(500).send({ message: 'Произошла ошибка' });
  });

const dislikeCard = (req, res) => CardModel.findByIdAndUpdate(req.params.cardId,
  { $pull: { likes: req.user._id } }, { new: true })
  .then((card) => {
    if (!card) {
      res.status(404).send({ message: 'Нет такой карточки, поробуйте другой айди' });
      return;
    } res.status(200).send({
      message: 'Лайка больше нет, все ОК',
      data: card,
    });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      res.status(400).send({ message: 'Такой карточки нет, проверьте айди.' });
      return;
    } res.status(500).send({ message: 'Произошла ошибка' });
  });

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
