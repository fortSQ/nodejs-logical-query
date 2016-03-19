# nodejs-logical-query

[![Build Status](https://travis-ci.org/fortSQ/nodejs-logical-query.svg?branch=master)](https://travis-ci.org/fortSQ/nodejs-logical-query)

### Install and use

`npm i nodejs-logical-query -S`

where `-S` - `--save` / `-D` - `--save-dev`

In your code:

```js
let ExpressionParser = require('nodejs-logical-query')
```

### Example

Expression: `A && !(B || C) || D && !E`

Set operand to true/false and define logical query:

```js
let A = true
let B = false
let C = true
let D = true
let E = false

let expressionObject = {
    'OR': [
        {'AND': [
            A,
            {'NOT' : {'OR': [B, C]}}
        ]},
        {'AND': [D, {'NOT': E}]}
    ]
}
```

And get result:

```js
let expressionParser = new ExpressionParser(expressionObject)
console.log(expressionParser.result) // true
```