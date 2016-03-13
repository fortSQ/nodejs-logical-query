'use strict'

global.projectPath = __dirname + '/../library'

let pathList = [
    './operand/abstract',
    './operand/operand',
    './operand/notOperand',
    './operation/and',
    './operation/or',
    './operation/general',
    './expressionParser',
]

pathList.forEach(path => { require(path); console.info(path + '..OK') })