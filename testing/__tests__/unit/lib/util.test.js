/* eslint-env jest */
const { sum } = require('../../../src/libs/util')

describe('util test suite', () => {
  describe('sum function test suite', () => {
    test('should return 2 when a is 1 and b is 1', () => {
      const result = sum(1, 1)
      expect(result).toBe(2)
    })
  })
})
