'use strict'

class AbstractOperand {
    constructor (boolValue) {
        if (AbstractOperand === new.target) throw new TypeError('Cannot construct Abstract instances directly')

        if ('function' === typeof boolValue) boolValue = boolValue.call(null)

        // TODO: Circular require
        let AbstractOperation = require('./../operation/abstract')
        if ('boolean' === typeof boolValue) {
            this.boolValue = boolValue
        } else if (boolValue instanceof AbstractOperation) {
            this.boolValue = boolValue.result
        } else {
            throw new Error('Argument must be boolean value or Operation instance')
        }

        // TODO: Must be in the end, why?
        if (undefined === this.bool) throw new TypeError('Must override method')
    }
}

module.exports = AbstractOperand