const { requestPromiseResolve, requestPromiseReject } = require('../async-functions')

/*
Promise.all([requestPromiseResolve(1002), requestPromiseResolve(1000)])
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })
*/
/*
Promise.all([requestPromiseResolve(1000), requestPromiseResolve(1000),
  requestPromiseResolve(1000), requestPromiseResolve(1000),
  requestPromiseReject(1002)
])
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })
*/
const rj = requestPromiseReject(1002)
  .catch(function () {
    return 'Nothing happen here morra'
  })
Promise.all([requestPromiseResolve(1000), requestPromiseResolve(1000),
  requestPromiseResolve(1000), requestPromiseResolve(1000), rj ])
  .then(function (data) {
    console.log(data, rj)
  })
  .catch(function (error) {
    console.log(error)
  })
