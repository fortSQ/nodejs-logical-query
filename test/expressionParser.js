'use strict'

let assert = require('assert')

let ExpressionParser = require(global.projectPath + '/expressionParser')

let getResult = expression => {
    let expressionParser = new ExpressionParser(expression)
    return expressionParser.result
}

let trueAndFalse = {'AND': [true, false]}
assert.strictEqual(getResult(trueAndFalse), false)

let trueOrFalse = {'OR': [true, false]}
assert.strictEqual(getResult(trueOrFalse), true)

let notTrue = {'NOT': true}
assert.strictEqual(getResult(notTrue), false)

let notFalse = {'NOT': false}
assert.strictEqual(getResult(notFalse), true)

let tripleAnd = {'AND': [true, false, true]}
assert.strictEqual(getResult(tripleAnd), false)

let andInsideOr = {'OR': [true, {'AND': [true, false]}]}
assert.strictEqual(getResult(andInsideOr), true)

let orInsideAnd = {'AND': [{'OR': [false, true]}, true]}
assert.strictEqual(getResult(orInsideAnd), true)

let notExpression = {'NOT': orInsideAnd}
assert.strictEqual(getResult(notExpression), false)

let notExpressionNested = {'NOT': notExpression}
assert.strictEqual(getResult(notExpressionNested), true)

let fail = {'FAIL': [true, false]}
assert.throws(() => getResult(fail), Error)

// A && !(B || C) || D && !E
let A, B, C, D, E
let getExpression = () => {
    return {
        'OR': [
            {'AND': [
                A,
                {'NOT': {'OR': [B, C]}}
            ]},
            {'AND': [D, {'NOT': E}]}
        ]
    }
}

A = true
B = true
C = true
D = true
E = true
assert.strictEqual(getResult(getExpression()), false)

A = false
B = false
C = false
D = false
E = false
assert.strictEqual(getResult(getExpression()), false)

A = true
B = false
C = false
D = true
E = false
assert.strictEqual(getResult(getExpression()), true)

A = false
B = true
C = true
D = true
E = false
assert.strictEqual(getResult(getExpression()), true)

A = false
B = true
C = false
D = false
E = true
assert.strictEqual(getResult(getExpression()), false)