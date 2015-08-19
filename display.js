'use strict'

var prefix = require('css-vendor-prefix')
var values = {
  webkit: {
    normal: '-webkit-flex',
    inline: '-webkit-inline-flex'
  },
  ms: {
    normal: '-ms-flexbox',
    inline: '-ms-inline-flexbox'
  },
  '': {
    normal: 'flex',
    inline: 'inline-flex'
  }
}
var flex = values[prefix]

module.exports = {
  flex: flex.normal,
  'inline-flex': flex.inline
}
