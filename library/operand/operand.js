'use strict'

let AbstractOperand = require('./abstract')

class Operand extends AbstractOperand {
    get bool () { return this.boolValue }
}

module.exports = Operand