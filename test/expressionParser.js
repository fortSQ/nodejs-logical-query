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

let tripleAnd = {'AND': [true, false, true]}
assert.strictEqual(getResult(tripleAnd), false)

let andInsideOr = {'OR': [true, {'AND': [true, false]}]}
assert.strictEqual(getResult(andInsideOr), true)

let orInsideAnd = {'AND': [{'OR': [false, true]}, true]}
assert.strictEqual(getResult(orInsideAnd), true)

let fail = {'FAIL': [true, false]}
assert.throws(_ => getResult(fail), Error)

// A && (B || C) || D && E
let A, B, C, D, E
let getExpression = _ => {
    return {
        'OR': [
            {'AND': [
                A,
                {'OR': [B, C]}
            ]},
            {'AND': [D, E]}
        ]
    }
}

A = false
B = true
C = false
D = true
E = true
assert.strictEqual(getResult(getExpression()), true)

A = false
B = true
C = false
D = false
E = false
assert.strictEqual(getResult(getExpression()), false)