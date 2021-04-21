var realWords = new Set(require('an-array-of-english-words'));

const dict = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function cartesianProduct(setA, setB) {
  const res = setA.flatMap((a) => setB.map((b) => a + b));
  return res;
}

function generateWords(input) {
  const numbers = input.split('');
  let res = [];
  if (numbers.length === 1) {
    res = dict[numbers[0]];
  } else {
    res = dict[numbers[0]];
    for (let i = 1; i < numbers.length; i++) {
      res = cartesianProduct(res, dict[numbers[i]]);
    }
  }
  return res;
}

function checkRealWords(input) {
  let allWords = generateWords(input);
  let res = [];
  for (let i = 0; i < allWords.length; i++) {
    let currentWord = allWords[i];
    if (realWords.has(currentWord)) res.push(currentWord);
  }
  return res;
}

module.exports = {generateWords, checkRealWords};
