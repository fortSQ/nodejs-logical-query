'use strict'

let assert = require('assert')

let OrOperation = require(global.projectPath + '/operation/or')
let Operand = require(global.projectPath + '/operand')

let first = new OrOperation(new Operand(false), new Operand(false))
assert.strictEqual(first.result, false)

let second = new OrOperation(new Operand(false), new Operand(true))
assert.strictEqual(second.result, true)

let third = new OrOperation(new Operand(true), new Operand(false))
assert.strictEqual(third.result, true)

let fourth = new OrOperation(new Operand(true), new Operand(true))
assert.strictEqual(fourth.result, true)

let trueOrFirst = new OrOperation(new Operand(true), first)
assert.strictEqual(trueOrFirst.result, true)

let falseOrFirst = new OrOperation(new Operand(false), first)
assert.strictEqual(falseOrFirst.result, false)

let firstOrSecond = new OrOperation(first, second)
assert.strictEqual(firstOrSecond.result, true)

let triple = new OrOperation(new Operand(false), new Operand(true), new Operand(false))
assert.strictEqual(triple.result, true)

let oneArgument = new OrOperation(new Operand(true))
assert.throws(
    () => oneArgument.result,
    (error) => error instanceof Error && 'Must 2 and more arguments' === error.message
)