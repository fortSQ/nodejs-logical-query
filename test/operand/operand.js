'use strict'

let assert = require('assert')

let Operand = require(global.projectPath + '/operand/operand')

let operandTrue = new Operand(true)
assert.strictEqual(operandTrue.bool, true)

let operandFalse = new Operand(false)
assert.strictEqual(operandFalse.bool, false)

let operandTrueAsFunction = new Operand(() => true)
assert.strictEqual(operandTrueAsFunction.bool, true)

assert.throws(() => new Operand('true'), Error)