const CardModel = require('../models/cards');
const NotFoundError = require('../errors/not-fount-err');
const BadRequestError = require('../errors/bad-request-err');

const getCards = (req, res, next) => CardModel.find({})
  .then((cards) => {
    if (cards.length === 0) {
      throw new NotFoundError('Карточек нету, сорян(');
    } res.send(cards);
  })
  .catch(next);

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const id = req.user._id;
  CardModel.create({ name, link, owner: id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      } next(err);
    });
};

const deleteCard = (req, res, next) => {
  CardModel.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Нет такой карточки, попробуйте другой айди');
      }
      if (card.owner.toString() !== req.user._id) {
        throw new BadRequestError('Чужие карточки удалять нельзя');
      } else {
        CardModel.deleteOne(card)
          .then(() => res.send({ message: 'Удалил карточку, все ОК' }));
      }
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new BadRequestError('Такой карточки нет, проверьте айди.'));
      } next(err);
    });
};

const likeCard = (req, res, next) => CardModel.findByIdAndUpdate(req.params.cardId,
  { $addToSet: { likes: req.user._id } }, { new: true })
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Нет такой карточки, попробуйте другой айди');
    } res.send({
      message: 'Залайкал карточку, все ОК',
      data: card,
    });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      next(new BadRequestError('Такой карточки нет, проверьте айди.'));
      return;
    } next(err);
  });

const dislikeCard = (req, res, next) => CardModel.findByIdAndUpdate(req.params.cardId,
  { $pull: { likes: req.user._id } }, { new: true })
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Нет такой карточки, поробуйте другой айди');
    } res.send({
      message: 'Лайка больше нет, все ОК',
      data: card,
    });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId') {
      next(new BadRequestError('Такой карточки нет, проверьте айди.'));
      return;
    } next(err);
  });

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
