function request () {
  setTimeout(function () {
    it.next({body: 'Soy una respuesta'})
  }, 1000)
}

function * main () {
  const result = yield request()
  console.log(result)
  console.log('Terminé')
}

const it = main()
it.next()
console.log('Hilo principal')
