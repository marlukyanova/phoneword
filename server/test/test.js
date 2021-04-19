require('chai').should();

const generateWords = require('../numbertoword');

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
