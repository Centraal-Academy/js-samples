const { requestPromiseResolve } = require('../async-functions')

async function runAsync () {
  console.log('Inicie Async')
  try {
    const response = await requestPromiseResolve(1000)
    console.log(response)
    throw new Error('hell no')
  } catch (exception) {
    console.error(exception)
  }
  console.log('Termine Async')
}

runAsync()
