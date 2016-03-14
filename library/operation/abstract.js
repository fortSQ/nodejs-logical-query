'use strict'

let AbstractOperand = require('./../operand/abstract')

class AbstractOperation {
    constructor () {
        if (AbstractOperation === new.target) throw new TypeError('Cannot construct Abstract instances directly')
        this._boolValueList = [].slice.call(arguments, 0)
        if (this._boolValueList.length < 2) throw new Error('Must 2 and more arguments')
        if (undefined === this.operate) throw new TypeError('Must override method')
    }

    get result () {
        if (undefined === this.boolResult) {
            this.boolValueList = this._boolValueList.map(
                boolValue => {
                    if (boolValue instanceof AbstractOperation) return boolValue.result
                    if (boolValue instanceof AbstractOperand) return boolValue.bool
                    throw new Error('Values must be instance of AbstractOperation or AbstractOperand')
                }
            )
            this.boolResult = this.operate()
        }
        return this.boolResult
    }
}

module.exports = AbstractOperation