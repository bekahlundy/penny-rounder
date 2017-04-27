const assert = require('chai').assert;
const { moneySplitter } = require('../lib/moneySplitter.js');

describe('moneySplitter', () => {

  it('if total = 800.0, return [266.66, 266.67, 266.67]', () => {
    assert.deepEqual(moneySplitter(800.0, 3), [266.66, 266.67, 266.67])
  })

  it('if total = 9, return [3, 3, 3]', () => {
    assert.deepEqual(moneySplitter(9, 3), [3, 3, 3])
  })

  it('if total = 345.8, return [ 115.26, 115.27, 115.27 ]', () => {
    assert.deepEqual(moneySplitter(345.8, 3), [115.26, 115.27, 115.27])
  })

  it('if total = 100.00, return [ 33.34, 33.33, 33.33 ]', () => {
    assert.deepEqual(moneySplitter(100.00, 3), [33.34, 33.33, 33.33])
  })

  it('if total = 8 and count = 4, return [2, 2, 2, 2]', () => {
    assert.deepEqual(moneySplitter(8, 4), [2, 2, 2, 2])
  })

  it('if total = 45.67 and count = 4, return [ 11.41, 11.42, 11.42, 11.42 ]', () => {
    assert.deepEqual(moneySplitter(45.67, 4), [ 11.41, 11.42, 11.42, 11.42 ])
  })

  it('if total = 100 and count = 10, return [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]', () => {
    assert.deepEqual(moneySplitter(100, 10), [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
  })

})
