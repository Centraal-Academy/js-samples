function * simpleGenerator (a = 10) {
  yield sum(a, 4)
  yield
  return 5
}

function sum (a = 0, b = 0) {
  return a + b
}

const iterator = simpleGenerator(11)
console.log(iterator.next())
console.log('1')
