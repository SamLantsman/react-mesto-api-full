const path = require('path');
const getDataFromFile = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => getDataFromFile(dataPath)
  .then((users) => {
    if (!users) {
      res.status(500).send(({ message: 'Ой, кажется у нас возникла проблема на сервере... Не можем найти юзеров, куда-то пропали' }));
    } res.status(200).send(users);
  })
  .catch((err) => res.status(400).send(err));

const getProfile = (req, res) => getDataFromFile(dataPath)
  .then((users) => {
    if (!users) {
      res.status(500).send(({ message: 'Ой, кажется у нас возникла проблема на сервере...' }));
    }
    const currentUser = users.find((user) => user._id === req.params.id);
    if (!currentUser) {
      res.status(400).send({ message: 'Нет пользователя с тамик id' });
    }
    res.status(200).send(currentUser);
  })
  .catch((err) => res.status(400).send(err));

module.exports = { getUsers, getProfile };
