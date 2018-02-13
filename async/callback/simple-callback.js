const { requestCallback, requestCallbackFail } = require('../async-functions')

function handleResponse (error, response) {
  if (error) {
    console.error(error)
    return
  }
  console.log(response)
}

requestCallback(handleResponse)
requestCallbackFail(handleResponse)
