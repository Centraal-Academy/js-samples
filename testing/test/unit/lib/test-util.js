/* eslint-env mocha */

const { expect } = require('chai')
const { sum } = require('../../../src/libs/util')

describe('util test suite', function () {
  describe('sum function test suite', function () {
    it('should return 2 when a is 1 and b is 1', function () {
      const result = sum(1, 1)
      expect(result).equal(2)
    })
  })
})
