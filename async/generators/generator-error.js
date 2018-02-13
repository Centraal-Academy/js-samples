function * main () {
  let result = 5
  try {
    yield
    result = 10
  } catch (exception) {
    result = 0
    console.error(result, exception)
  }
}

const it = main()
it.next()
it.throw(new Error('stop bro'))
console.log('Main thread')
