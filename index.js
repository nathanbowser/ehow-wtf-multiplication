module.exports = function (a, b) {
  var c = 0
  while (a !== 0) {
    c += b
    a -= 1
  }

  return c
}
