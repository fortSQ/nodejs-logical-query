'use strict'

let AbstractOperation = require('./abstract')

class OrOperation extends AbstractOperation {
    static get alias () { return 'OR' }

    operate () {
        if (this.boolValueList.length < 2) throw new Error('Must 2 and more arguments')

        for (let i = 0; i < this.boolValueList.length; i++) {
            if (this.boolValueList[i]) return true
        }
        return false
    }
}

module.exports = OrOperation