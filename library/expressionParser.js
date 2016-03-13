'use strict'

let Operand = require('./operand/operand')
let OrOperation = require('./operation/or')
let AndOperation = require('./operation/and')

let shortcutClassnameList = {
    'OR': OrOperation,
    'AND': AndOperation,
}

class expressionParser {
    constructor (expression) { this.expression = expression }

    buildOperation (objectExpression) {
        let objectOperation = Object.keys(objectExpression)[0]
        let className = shortcutClassnameList[objectOperation]
        if (undefined === className) throw new Error(`Class for ${objectOperation} not found`)

        let objectArray = objectExpression[objectOperation]
        let argumentsFromObjectArray = []
        objectArray.forEach(element => {
            let objectElement = 'object' === typeof element ? this.buildOperation(element) : new Operand(element)
            argumentsFromObjectArray.push(objectElement)
        })

        return new className(...argumentsFromObjectArray)
    }

    get result () { return this.buildOperation(this.expression).result }
}

module.exports = expressionParser