const assert = require('chai').assert;
const { moneySplitter } = require('../lib/moneySplitter.js');

describe('moneySplitter', () => {

  it('if total = 345.8, return [ 115.26, 115.27, 115.27 ]', () => {
    assert.deepEqual(moneySplitter(345.8, 3), [115.26, 115.27, 115.27])
  })

  it('if total = 100.00, return [ 33.34, 33.33, 33.33 ]', () => {
    assert.deepEqual(moneySplitter(100.00, 3), [33.34, 33.33, 33.33])
  })

  it('if total = 8 and count = 4, return [2, 2, 2, 2]', () => {
    assert.deepEqual(moneySplitter(8, 4), [2, 2, 2, 2])
  })

})
