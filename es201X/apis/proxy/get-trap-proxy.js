const myPreciousObject = {
  gold: 100
}

const itsATrap = {
  get (target, key) {
    console.log('Wild get has appeared', target, key)
    return target[key]
  }
}

const objectDefender = new Proxy(myPreciousObject, itsATrap)
console.log('How many gold i have?', objectDefender.gold)
