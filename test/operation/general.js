'use strict'

let assert = require('assert')

let AbstractOperation = require(global.projectPath + '/operation/abstract')
let AndOperation = require(global.projectPath + '/operation/and')
let OrOperation = require(global.projectPath + '/operation/or')
let Operand = require(global.projectPath + '/operand')

// A && (B || C || D) || E && F
let A, B, C, D, E, F
let getResult = () => {
    let step1 = new OrOperation(new Operand(B), new Operand(C), new Operand(D))
    let step2 = new AndOperation(new Operand(E), new Operand(F))
    let step3 = new AndOperation(new Operand(A), step1)
    let step4 = new OrOperation(step3, step2)
    return step4.result
}

A = true
B = false
C = true
D = false
E = true
F = false
assert.strictEqual(getResult(), true)

A = false
B = true
C = false
D = false
E = false
F = false
assert.strictEqual(getResult(), false)

A = true
B = false
C = false
D = true
E = false
F = false
assert.strictEqual(getResult(), true)

let typeWithoutClassOperand = new AndOperation(new Operand(true), new OrOperation(new Operand(false), true))
assert.throws(() => typeWithoutClassOperand.result, Error)

assert.throws(() => new AbstractOperation(), TypeError)

class SomeOperationWithoutOperate extends AbstractOperation {}
assert.throws(
    () => new SomeOperationWithoutOperate(new Operand(true)),
    (error) => error instanceof TypeError && /Must override method operate()/.test(error)
)

class SomeOperation extends AbstractOperation { get operate () { return true }}
assert.throws(
    () => new SomeOperation(new Operand(true), new Operand(false)),
    (error) => error instanceof TypeError && 'Must override static method alias()' === error.message
)