'use strict'

let AbstractOperation = require('./abstract')

class AndOperation extends AbstractOperation {
    static get alias () { return 'AND' }

    operate () {
        return this.boolValueList.reduce(
            (first, second) => first && second
        )
    }
}

module.exports = AndOperation