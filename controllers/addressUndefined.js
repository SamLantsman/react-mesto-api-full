const displayUndefinedAddress = (req, res) => {
  res.status(404).send({ message: 'Нет такого ресурса, сори...' });
};

module.exports = displayUndefinedAddress;
