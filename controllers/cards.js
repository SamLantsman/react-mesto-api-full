const path = require('path');
const getDataFromFile = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => getDataFromFile(dataPath)
  .then((cards) => {
    if (!cards) {
      res.status(500).send(({ message: 'Ой, кажется у нас возникла проблема на сервере...' }));
    }
    res.status(200).send(cards);
  })
  .catch((err) => res.status(400).send(err));

module.exports = getCards;
