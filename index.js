'use strict'

var extend = require('xtend')
var prefix = require('css-vendor-prefix')
var properties = require('./properties')
var display = require('./display')

module.exports = function prefixFlex (obj) {
  var copy = extend(obj)
  if (!prefix) return copy
  var prefixed = properties.reduce(addPrefixes, copy)
  prefixDisplay(prefixed)
  return prefixed
}

function addPrefixes (styles, key) {
  if (key in styles) {
    styles[prefix + capitalize(key)] = styles[key]
  }
  return styles
}

function prefixDisplay (styles) {
  if (styles.display && display.hasOwnProperty(styles.display)) {
    styles.display = display[styles.display]
  }
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.substring(1)
}
