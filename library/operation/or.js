'use strict'

let AbstractOperation = require('./abstract')

class OrOperation extends AbstractOperation {
    static get alias () { return 'OR' }

    operate () {
        return this.boolValueList.reduce(
            (first, second) => first || second
        )
    }
}

module.exports = OrOperation