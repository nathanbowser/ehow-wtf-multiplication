#!/usr/bin/env node
var readline = require('readline')
  , multiply = require('../')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter the value of a,b:', function (answer) {
  var _a = answer.split(',')

  console.log('Multiplication is', multiply(parseInt(_a[0], 10), parseInt(_a[1], 10)))
  process.exit(0)
})
