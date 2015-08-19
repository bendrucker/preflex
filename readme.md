# preflex [![Build Status](https://travis-ci.org/bendrucker/preflex.svg?branch=master)](https://travis-ci.org/bendrucker/preflex)

> Dynamically add vendor flexbox prefixes to CSS style dictionaries


## Install

```
$ npm install --save preflex
```


## Usage

```js
// In Safari
var prefix = require('preflex')

prefix({flex: 1})
//=> {flex: 1, webkitFlex: 1}

prefix({display: 'flex'})
//=> {display: '-webkit-flex'}
```

## API

#### `prefix(obj)` -> `object`

Returns a copy of the original object with both the standard flexbox property and the prefixed version.

##### obj

*Required*  
Type: `object`

An object containing CSS style properties. Keys should be camel cased, e.g. `flex-direction` should be `flexDirection`.

## License

MIT © [Ben Drucker](http://bendrucker.me)
