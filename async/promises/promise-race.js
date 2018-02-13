const { requestPromiseResolve, requestPromiseReject } = require('../async-functions')

Promise.race([requestPromiseResolve(1000), requestPromiseResolve(1000)])
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })

Promise.race([requestPromiseResolve(1001), requestPromiseReject(1000)])
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })

Promise.race([requestPromiseReject(1001), requestPromiseReject(1000)])
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })
