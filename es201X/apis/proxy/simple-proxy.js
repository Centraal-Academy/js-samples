const myPreciousObject = {
  gold: 100
}

const itsATrap = {
}

const objectDefender = new Proxy(myPreciousObject, itsATrap)
console.log('How many gold i have?', objectDefender.gold)
objectDefender.gold -= 10
console.log('How many gold i have?', myPreciousObject.gold)
