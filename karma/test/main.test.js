describe('main script', function () {
  it('should add myVar to window', function () {
    let window = {}
    addMyVarToWindow(window)
    expect(window.myVar).to.exist
  })

  it('should add myVar to windowq', function () {
    let window = {}
    addMyVarToWindow(window)
    expect(window.myVar).to.exist
  })
})