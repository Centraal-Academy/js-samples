function requestPromiseResolve (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({title: 'fake data', delay})
    }, delay)
  })
}

function requestPromiseReject (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('me hackiaron'))
    }, delay)
  })
}
function requestCallback (callback) {
  const data = {title: 'fake data'}
  const error = null
  setTimeout(function () {
    callback(error, data)
  }, 1000)
}

function requestCallbackFail (callback) {
  const data = null
  const error = {message: 'Error'}
  setTimeout(function () {
    callback(error, data)
  }, 1000)
}

module.exports = {
  requestPromiseResolve,
  requestPromiseReject,
  requestCallback,
  requestCallbackFail
}
