'use strict'

let AbstractOperation = require('./abstract')

class NotOperation extends AbstractOperation {
    static get alias () { return 'NOT' }

    operate () {
        if (this.boolValueList.length > 1) throw new Error('Must 1 argument')
        return !this.boolValueList[0]
    }
}

module.exports = NotOperation