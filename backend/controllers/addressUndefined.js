const NotFoundError = require('../errors/not-fount-err');

const displayUndefinedAddress = (req, resm, next) => {
  next(new NotFoundError('Нет такого ресурса, сори...'));
};

module.exports = displayUndefinedAddress;
