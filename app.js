
const { validator } = require('./index.js');


const result = validator(
    { "name": "250" },
    {"name" : ["digits:3"]}
)

console.log(result);