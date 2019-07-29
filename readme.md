# gk-factory

A package with faker data for filling data in the database

## Features

Data Generation:
- Names
- Last names
- cities
- objects
- colors
- age

## Usage

The main function is `ramdomdata`:

```js
const Factory = require('gk-factory');

var options = {
  length : 15,
  style: 'LOW|UPP',
  lang: 'EN|ES',
  type: 'names|last_names|cities|objects|colors|age',
  gen: 'M|W'
}

Factory.ramdomdata(options)
```

returns a `data`

## License

The MIT License (MIT)