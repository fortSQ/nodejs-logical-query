'use strict'

let assert = require('assert')

let AbstractOperand = require(global.projectPath + '/operand/abstract')

assert.throws(() => new AbstractOperand(true), TypeError)

class SomeOperand extends AbstractOperand {}
assert.throws(() => new SomeOperand(true), TypeError)

class SomeSecondOperand extends AbstractOperand { get bool () { return this.boolValue }}
assert.doesNotThrow(() => new SomeSecondOperand(true), TypeError)