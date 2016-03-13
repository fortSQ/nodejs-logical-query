'use strict'

let assert = require('assert')

let AbstractOperand = require(global.projectPath + '/operand/abstract')

assert.throws(_ => new AbstractOperand(true), TypeError)

class SomeOperand extends AbstractOperand {}
assert.throws(_ => new SomeOperand(true), TypeError)

class SomeSecondOperand extends AbstractOperand { get bool () { return this.boolValue }}
assert.doesNotThrow(_ => new SomeSecondOperand(true), TypeError)