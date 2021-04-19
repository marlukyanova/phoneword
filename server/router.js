const router = require('express').Router();
const words = require('./controllers/words');

router.get('/words', words.getWords);

module.exports = router;
