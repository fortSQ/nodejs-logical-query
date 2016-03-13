'use strict'

let AbstractOperation = require('./abstract')

class AndOperation extends AbstractOperation {
    operate () {
        return this.boolValueList.reduce(
            (first, second) => first && second
        )
    }
}

module.exports = AndOperation