
const { validator, useRule } = require('./index.js');
const email = require('./src/rules/email.js');

useRule({ "email": email })
useRule({ "email2": email })

const { validation, validated, errorMessagess } = validator(
    { "name": "Raja Khan", "email": "raja@gmail.com" },
    {
        "name": ["email"],
        "naml": ["email"],
    }
)

console.log(validation);