'use strict'

global.projectPath = __dirname + '/../library'

let pathList = [
    './operand',
    './operation/and',
    './operation/or',
    './operation/not',
    './operation/general',
    './expressionParser',
]

pathList.forEach(path => { require(path); console.info(path + '..OK') })