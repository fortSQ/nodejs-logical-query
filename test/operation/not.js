'use strict'

let assert = require('assert')

let NotOperation = require(global.projectPath + '/operation/not')
let Operand = require(global.projectPath + '/operand')
let AndOperation = require(global.projectPath + '/operation/and')
let OrOperation = require(global.projectPath + '/operation/or')

let notTrueOperand = new NotOperation(new Operand(true))
assert.strictEqual(notTrueOperand.result, false)

let notFalseOperand = new NotOperation(new Operand(false))
assert.strictEqual(notFalseOperand.result, true)

let notOperationAnd = new NotOperation(new AndOperation(new Operand(true), new Operand(true)))
assert.strictEqual(notOperationAnd.result, false)

let notOperationOr = new NotOperation(new OrOperation(new Operand(false), new Operand(false)))
assert.strictEqual(notOperationOr.result, true)

// Error if 2 and more arguments
let twoArguments = new NotOperation(new Operand(true), new Operand(false))
assert.throws(() => twoArguments.result, Error)