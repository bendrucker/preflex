'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('object', function (t) {
  var raw = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
  t.test('no prefix', function (t) {
    var format = proxyquire('./object', {
      'css-vendor-prefix': ''
    })
    var formatted = format(raw)
    t.deepEqual(formatted, raw, 'content unchanged')
    t.notEqual(formatted, raw, 'returns copy')
    t.end()
  })

  t.test('with prefix', function (t) {
    var format = proxyquire('./object', {
      'css-vendor-prefix': 'webkit'
    })
    var formatted = format(raw)
    t.deepEqual(formatted, {
      flex: 1,
      webkitFlex: 1,
      flexDirection: 'column',
      webkitFlexDirection: 'column',
      justifyContent: 'flex-end',
      webkitJustifyContent: 'flex-end'
    })
    t.end()
  })
})
