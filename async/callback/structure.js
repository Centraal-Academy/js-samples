function saveData (info, callback) {
  /* do stuff */
  console.log('long task')
  callback()
}

function callbackTask () {
  console.log('ya terminé')
}

saveData({}, callbackTask)
