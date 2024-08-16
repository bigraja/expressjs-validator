# Expressjs validator

This package can help you express server body, query, cookie validation.

## Installation

```
npm install expressjs-validator
```

Also make sure that you have Node.js 14 or newer in order to use it.

## Documentation

### Usage/Examples

```js app.js
const { validator } = require('enpressjs-validator')
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { validation, errorMessages, validationData } = validator(req.boy, {
        "name": ["string"],
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

- [@octokatherine](https://www.github.com/bigraja)

## License

MIT License