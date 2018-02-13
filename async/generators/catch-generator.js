function * main () {
  let result = 5
  try {
    result = 10
    throw new Error('hell no')
  } catch (exception) {
    result = 0
  }
  return result
}

const it = main()
console.log(it.next())
