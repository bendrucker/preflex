'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('main', function (t) {
  var raw = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
  t.test('no prefix', function (t) {
    var format = proxyquire('./', {
      'css-vendor-prefix': ''
    })
    var formatted = format(raw)
    t.deepEqual(formatted, raw, 'content unchanged')
    t.notEqual(formatted, raw, 'returns copy')
    t.end()
  })

  t.test('with prefix', function (t) {
    var format = proxyquire('./', {
      'css-vendor-prefix': 'webkit',
      './display': {
        flex: '-webkit-flex'
      }
    })
    var formatted = format(raw)
    t.deepEqual(formatted, {
      display: '-webkit-flex',
      flex: 1,
      webkitFlex: 1,
      flexDirection: 'column',
      webkitFlexDirection: 'column',
      justifyContent: 'flex-end',
      webkitJustifyContent: 'flex-end'
    })
    t.end()
  })

  t.end()
})

test('display', function (t) {
  t.test('no prefix', function (t) {
    var display = proxyquire('./display', {
      'css-vendor-prefix': ''
    })
    t.equal(display.flex, 'flex')
    t.equal(display['inline-flex'], 'inline-flex')
    t.end()
  })

  t.test('with prefix', function (t) {
    var display = proxyquire('./display', {
      'css-vendor-prefix': 'webkit'
    })
    t.equal(display.flex, '-webkit-flex')
    t.equal(display['inline-flex'], '-webkit-inline-flex')
    t.end()
  })

  t.end()
})
