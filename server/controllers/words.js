const {generateWords, checkRealWords} = require('../numbertoword');

exports.getWords = (req, res) => {
  try {
    let words = [];
    if (req.query.words === 'true') {
      words = checkRealWords(req.params.numbers);
    } else {
      words = generateWords(req.params.numbers);
    }
    res.status(200);
    res.send(words);
  } catch (err) {
    console.log('error', err); // eslint-disable-line no-console
    res.status(500);
  }
};
