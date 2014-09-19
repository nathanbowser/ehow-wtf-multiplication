var assert = require('assert')
  , multiply = require('./')

assert.equal(multiply(0, 2), 0)
assert.equal(multiply(2, 2), 4)
assert.equal(multiply(10, 10), 100)
assert.equal(multiply(10, -10), -100)
