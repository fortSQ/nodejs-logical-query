'use strict'

let AbstractOperand = require('./abstract')

class NotOperand extends AbstractOperand {
    get bool () { return !this.boolValue }
}

module.exports = NotOperand