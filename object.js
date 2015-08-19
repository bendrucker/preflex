'use strict'

var extend = require('xtend')
var prefix = require('css-vendor-prefix')
var properties = require('./properties')

module.exports = function prefixFlex (obj) {
  var copy = extend(obj)
  if (!prefix) return copy
  return properties.reduce(addPrefixes, copy)
}

function addPrefixes (styles, key) {
  if (key in styles) {
    styles[prefix + capitalize(key)] = styles[key]
  }
  return styles
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.substring(1)
}
