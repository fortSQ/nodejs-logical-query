'use strict'

let assert = require('assert')

let AndOperation = require(global.projectPath + '/operation/and')
let Operand = require(global.projectPath + '/operand/operand')

let first = new AndOperation(new Operand(false), new Operand(false))
assert.strictEqual(first.result, false)

let second = new AndOperation(new Operand(false), new Operand(true))
assert.strictEqual(second.result, false)

let third = new AndOperation(new Operand(true), new Operand(false))
assert.strictEqual(third.result, false)

let fourth = new AndOperation(new Operand(true), new Operand(true))
assert.strictEqual(fourth.result, true)

let trueAndFourth = new AndOperation(new Operand(true), fourth)
assert.strictEqual(trueAndFourth.result, true)

let falseAndFourth = new AndOperation(new Operand(false), fourth)
assert.strictEqual(falseAndFourth.result, false)

let fourthAndFourth = new AndOperation(fourth, fourth)
assert.strictEqual(fourthAndFourth.result, true)

let triple = new AndOperation(new Operand(true), new Operand(false), new Operand(true))
assert.strictEqual(triple.result, false)