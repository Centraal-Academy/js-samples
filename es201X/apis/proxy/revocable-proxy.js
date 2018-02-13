const myPreciousObject = {
  gold: 100
}

const itsATrap = {
}

const {proxy: objectDefender, revoke} = Proxy.revocable(myPreciousObject, itsATrap)
console.log(objectDefender, revoke)
console.log('How many gold i have?', objectDefender.gold)
revoke()
console.log('How many gold i have?', objectDefender.gold)
