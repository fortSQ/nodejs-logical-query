'use strict'

let assert = require('assert')

let NotOperand = require(global.projectPath + '/operand/notOperand')
let AndOperation = require(global.projectPath + '/operation/and')
let OrOperation = require(global.projectPath + '/operation/or')

let operandNotTrue = new NotOperand(true)
assert.strictEqual(operandNotTrue.bool, false)

let operandNotFalse = new NotOperand(false)
assert.strictEqual(operandNotFalse.bool, true)

assert.throws(() => new Operand(1), Error)

// ~(~false && ~false) == false || false
let operandNotOperationAnd = new NotOperand(new AndOperation(new NotOperand(false), new NotOperand(false)))
assert.strictEqual(operandNotOperationAnd.bool, false)

// ~(~true || ~true) == true && true
let operandNotOperationOr = new NotOperand(new OrOperation(new NotOperand(true), new NotOperand(true)))
assert.strictEqual(operandNotOperationOr.bool, true)