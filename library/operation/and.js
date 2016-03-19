'use strict'

let AbstractOperation = require('./abstract')

class AndOperation extends AbstractOperation {
    static get alias () { return 'AND' }

    operate () {
        if (this.boolValueList.length < 2) throw new Error('Must 2 and more arguments')

        for (let i = 0; i < this.boolValueList.length; i++) {
            if (!this.boolValueList[i]) return false
        }
        return true
    }
}

module.exports = AndOperation