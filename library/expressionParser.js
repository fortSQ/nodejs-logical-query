'use strict'

let Operand = require('./operand')
let OrOperation = require('./operation/or')
let AndOperation = require('./operation/and')
let NotOperation = require('./operation/not')

let shortcutClassnameList = {
    [OrOperation.alias]: OrOperation,
    [AndOperation.alias]: AndOperation,
    [NotOperation.alias]: NotOperation,
}

class expressionParser {
    constructor (expression) { this.expression = expression }

    buildOperation (objectExpression) {
        let objectOperation = Object.keys(objectExpression)[0]
        let className = shortcutClassnameList[objectOperation]
        if (undefined === className) throw new Error(`Class for ${objectOperation} not found`)

        let objectValue = objectExpression[objectOperation]
        let argumentsFromObjectArray;

        let parseElement = (element) => 'object' === typeof element ? this.buildOperation(element) : new Operand(element)

        if (objectValue instanceof Array) {
            argumentsFromObjectArray = []
            objectValue.forEach(element => {
                let objectElement = parseElement(element)
                argumentsFromObjectArray.push(objectElement)
            })
        } else {
            argumentsFromObjectArray = [parseElement(objectValue)]
        }

        return new className(...argumentsFromObjectArray)
    }

    get result () { return this.buildOperation(this.expression).result }
}

module.exports = expressionParser