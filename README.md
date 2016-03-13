# nodejs-logical-query

[![Build Status](https://travis-ci.org/fortSQ/nodejs-logical-query.svg?branch=master)](https://travis-ci.org/fortSQ/nodejs-logical-query)

### Install and use

`npm i nodejs-logical-query -S`

where `-S` - `--save` / `-D` - `--save-dev`

In your code

```node
let ExpressionParser = require('nodejs-logical-query')
```

### Example

Expression: `A && (B || C) || D && E`

Set operand to true/false and define logical query:

```node
let expressionObject = {
    'OR': [
        {'AND': [
            true,
            {'OR': [false, true]}
        ]},
        {'AND': [false, true]}
    ]
}
```

And get result

```node
let expressionParser = new ExpressionParser(expressionObject)
console.log(expressionParser.result) // true
```