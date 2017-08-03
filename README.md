# Er Number

A tool to convert numbers from arabic numerals to roman numerals.


### Installation
```sh
$ npm i /path/to/er-number
```

### Build
```sh
$ npm run build
```


### Usage
```js

const ErNumber = require('er-number');

ErNumber(5) // V
ErNumber(14) // XIV
ErNumber(129) // CXXIX

```

### Test
```sh
$ npm test
```

### Examples

Web
```sh
$ cd examples/web
$ npm i
$ node start
```

Node
```sh
$ cd examples/node
$ npm i
$ node start 5 # V
```
