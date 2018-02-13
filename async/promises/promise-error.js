const { requestPromiseResolve } = require('../async-functions')

requestPromiseResolve(1000)
  .then(function (data) {
    throw new Error()
  })
  .then(function (data) {
    console.log(data)
  }, function (error) {
    console.log('Entrará aquí', error)
  })
  .catch(function (error) {
    console.log(error, 'oh my gosh')
    console.log('D:')
  })
  .then(function () {
    console.log('final')
  })
