const generateWords = require('../numbertoword');

exports.getWords = (req, res) => {
  try {
    const words = generateWords(req.params.numbers);
    res.status(200);
    res.send(words);
  } catch (err) {
    console.log('error', err); // eslint-disable-line no-console
    res.status(500);
  }
};
