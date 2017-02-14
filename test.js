'use strict'

const assert = require('assert')
const getClassAncestors = require('.')

class A {}
class B extends A {}
class C extends B {}

describe('getClassAncestors()', function () {
  it('should return an empty array for a non-function', function () {
    assert.strictEqual(getClassAncestors('test').length, 0)
    assert.strictEqual(getClassAncestors(1).length, 0)
    assert.strictEqual(getClassAncestors({}).length, 0)
  })

  it('should return an empty array for a class that does not extend another', function () {
    assert.strictEqual(getClassAncestors(A).length, 0)
  })

  it('should return one ancestor class for a child class', function () {
    const classes = getClassAncestors(B)
    assert.strictEqual(classes.length, 1)
    assert.strictEqual(classes[0], A)
  })

  it('should return two ancestor classes for a grandchild class', function () {
    const classes = getClassAncestors(C)
    assert.strictEqual(classes.length, 2)
    assert.strictEqual(classes[0], B)
    assert.strictEqual(classes[1], A)
  })
})

describe('getClassAncestors.names()', function () {
  it('should return an empty array for a non-function', function () {
    assert.strictEqual(getClassAncestors.names('test').length, 0)
    assert.strictEqual(getClassAncestors.names(1).length, 0)
    assert.strictEqual(getClassAncestors.names({}).length, 0)
  })

  it('should return an empty array for a class that does not extend another', function () {
    assert.strictEqual(getClassAncestors.names(A).length, 0)
  })

  it('should return one ancestor class for a child class', function () {
    const classes = getClassAncestors.names(B)
    assert.strictEqual(classes.length, 1)
    assert.strictEqual(classes[0], 'A')
  })

  it('should return two ancestor classes for a grandchild class', function () {
    const classes = getClassAncestors.names(C)
    assert.strictEqual(classes.length, 2)
    assert.strictEqual(classes[0], 'B')
    assert.strictEqual(classes[1], 'A')
  })
})
