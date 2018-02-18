/* eslint-env mocha */
const puppeteer = require('puppeteer')
const { expect } = require('chai')

const globalProperties = {
  'browser': global.browser,
  'expect': global.expect
}

const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000
}

before(async function () {
  global.expect = expect
  global.browser = await puppeteer.launch(opts)
})

after(function () {
  global.browser.close()
  global.browser = globalProperties.browser
  global.expect = globalProperties.expect
})
