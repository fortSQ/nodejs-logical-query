'use strict'

let assert = require('assert')

let NotOperand = require(global.projectPath + '/operand/notOperand')

let operandNotTrue = new NotOperand(true)
assert.strictEqual(operandNotTrue.bool, false)

let operandNotFalse = new NotOperand(false)
assert.strictEqual(operandNotFalse.bool, true)