const game = {
  __name__: 'Jojos Bizarre Adventure'
}

Reflect.defineProperty(game, 'name', {
  set (newName) {
    this.__name__ = newName
  },
  get () {
    return this.__name__
  }
})

var secondGame = {
  __name__: 'Devil may cry'
}

Reflect.set(game, 'name', 'Gears of wars', secondGame)
console.log(game.name)
console.log(secondGame.__name__)
console.log(secondGame.name)
