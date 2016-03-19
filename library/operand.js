'use strict'

class Operand {
    constructor (boolValue) {
        if ('function' === typeof boolValue) boolValue = boolValue.call(null)

        if ('boolean' !== typeof boolValue) throw new Error('Argument must be boolean value')

        this.bool = boolValue
    }
}

module.exports = Operand