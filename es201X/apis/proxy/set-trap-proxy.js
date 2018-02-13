const myPreciousObject = {
  gold: 100
}

const itsATrap = {
  set (target, key, value) {
    if (key in target) {
      target[key] = value
    }
  }
}

const objectDefender = new Proxy(myPreciousObject, itsATrap)
objectDefender.gold = 90
console.log('How many gold i have?', objectDefender.gold)
objectDefender.goldCoin = 90
console.log(objectDefender)
console.log(myPreciousObject)
