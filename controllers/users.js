const path = require('path');
const getDataFromFile = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => getDataFromFile(dataPath)
  .then((users) => {
    if (!users) {
      return res.status(500).send(JSON.stringify({ message: 'Ой, кажется у нас возникла проблема на сервере...' }));
    }
    return users;
  })
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(400).send(err));

const getProfile = (req, res) => getDataFromFile(dataPath)
  .then((users) => users.find((user) => user._id === req.params.id))
  .then((user) => {
    if (!user) {
      return res.status(400).send({ message: 'Нет пользователя с тамик id' });
    }
    return res.status(200).send(user);
  })
  .catch((err) => res.status(400).send(err));

module.exports = { getUsers, getProfile };
