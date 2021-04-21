require('chai').should();

const {generateWords, checkRealWords} = require('../numbertoword');

describe('generateWords', function () {
  it('should convert numbers to a list of corresponding words', function () {
    generateWords('2').should.eql(['a', 'b', 'c']);
    generateWords('23').should.eql([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });
});

describe('checkRealWords', function () {
  it('should return an array consisting of real words', function () {
    checkRealWords('44').should.eql(['gi', 'hi']);
  })
})
