const assert = require('chai').assert;
const { moneySplitter } = require('../lib/moneySplitter.js');

describe('moneySplitter', () => {

  it('exists', () => {
    assert.deepEqual(moneySplitter(800), 800)
  })
})
