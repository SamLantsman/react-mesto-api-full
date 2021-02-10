const path = require("path");

const displayUndefinedAddress = (req, res) => {
  res.status(400).send({ message: "Запрашиваемый ресурс не найден" });
};

module.exports = displayUndefinedAddress;
