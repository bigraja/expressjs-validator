# Expressjs validator

This package can help you express server body, query, cookie validation.

## Installation

```
npm install expressjs-validator
```

Also make sure that you have Node.js 14 or newer in order to use it.

## Documentation

### Usage/Examples

```js file=app.js
const { validator } = require('enpressjs-validator')
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { validation, errorMessages, validationData } = validator(req.boy, {
        "name": ["required", "string"],
        "email": ["string", "email"] // required, string and email are validations rule
    });

    if (validation) {
        res.send('Hello World!')
    } else {
        res.send('Faild validation')
    }
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
```

### All Rule List

| Rule | Description |
| --- | --- |
| `string` | The field under validation must be a string. |
| `boolean` | The field under validation must be able to be cast as a boolean. Accepted input are true, false, 1, 0, "1", and "0". |
| `digits:value` | The integer under validation must have an exact length of value. |
| `email` | The field under validation must be formatted as an email address. |
| `required` | The field under validation must be present in the input data and not empty. |

### Make Custom Rule

Make file like this `customRule.js`

```js file=customRule.js
function customRule() {
    const inputName = this.inputName; // input name
    let inputData = this.inputData; // input data
    let errorMessage = `The ${inputName} must be a string.`; // send error message
    let validation = true;
    
    // check this is a string
    if ((typeof str === "string" && str.trim().length === 0) || str === null || /^\d+$/.test(inputData)) validation = false;

    return {
        validation: false,
        validatedData: inputData,
        errorMessage : errorMessage,
    };
}

module.exports = customRule;
```

Use this custom rule like this

```js file=app.js
const { validator, useRule } = require('enpressjs-validator')
const customRule = require('./customRule.js') // import custom rule function
const express = require('express')
const app = express()

useRule({ "customRule" : customRule })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { validation, errorMessages, validationData } = validator(req.boy, {
        "name": ["customRule"], // use custom rule
        "email": ["string", "email"]
    });

    if (validation) {
        res.send('Hello World!')
    } else {
        res.send('Faild validation')
    }
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
```

## Authors

- [@bigraja](https://www.github.com/bigraja)

## License

MIT License