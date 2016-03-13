'use strict'

let AbstractOperation = require('./abstract')

class OrOperation extends AbstractOperation {
    operate () {
        return this.boolValueList.reduce(
            (first, second) => first || second
        )
    }
}

module.exports = OrOperation