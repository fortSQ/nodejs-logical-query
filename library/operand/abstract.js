'use strict'

class AbstractOperand {
    constructor (boolValue) {
        if (AbstractOperand === new.target) throw new TypeError('Cannot construct Abstract instances directly')
        this.boolValue = boolValue
        if (undefined === this.bool) throw new TypeError('Must override method')
    }
}

module.exports = AbstractOperand