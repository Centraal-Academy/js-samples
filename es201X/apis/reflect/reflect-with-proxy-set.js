const myPreciousObject = {
  gold: 100
}

const itsATrap = {
  set (target, key, value) {
    if (key in target) {
      Reflect.set(target, key, value)
    }
  }
}

const objectDefender = new Proxy(myPreciousObject, itsATrap)
objectDefender.gold = 90
console.log(myPreciousObject)
