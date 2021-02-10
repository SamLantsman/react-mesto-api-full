const router = require('express').Router();
const displayUndefinedAddress = require('../controllers/addressUndefined');

router.get('/*', displayUndefinedAddress);

module.exports = router;