'use strict'

let Operand = require('./../operand')

class AbstractOperation {
    constructor () {
        if (AbstractOperation === new.target) throw new TypeError('Cannot construct Abstract instances directly')
        this._boolValueList = [].slice.call(arguments, 0)
        if (undefined === this.operate) throw new TypeError('Must override method operate()')
        if (undefined === new.target.alias) throw new TypeError('Must override static method alias()')
    }

    get result () {
        if (undefined === this.boolResult) {
            this.boolValueList = this._boolValueList.map(
                boolValue => {
                    if (boolValue instanceof AbstractOperation) return boolValue.result
                    if (boolValue instanceof Operand) return boolValue.bool
                    throw new Error('Values must be instance of AbstractOperation or Operand')
                }
            )
            this.boolResult = this.operate()
        }
        return this.boolResult
    }
}

module.exports = AbstractOperation