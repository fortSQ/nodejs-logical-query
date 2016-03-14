'use strict'

let assert = require('assert')

let Operand = require(global.projectPath + '/operand/operand')

let operandTrue = new Operand(true)
assert.strictEqual(operandTrue.bool, true)

let operandFalse = new Operand(false)
assert.strictEqual(operandFalse.bool, false)

assert.throws(_ => new Operand('true'), Error)