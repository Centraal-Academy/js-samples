const { requestPromiseResolve, requestPromiseReject } = require('../async-functions')

let promisesResolved = requestPromiseResolve(1000)
  .then(function () {
    console.log('c')
    return requestPromiseReject(1000)
  })
  .then(function (message) {
  })
  .then(function (data) {
  })

promisesResolved = promisesResolved
  .then(function () {
    console.log('ultra')
  })
  .catch(function (error) {
    console.error(error)
  })

promisesResolved
  .then(function () {
    console.log('mamut')
  })
