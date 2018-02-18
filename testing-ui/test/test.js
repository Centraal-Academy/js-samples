/* eslint-env mocha */
/* global expect browser */
describe('Index page', function () {
  let page

  before(async function () {
    page = await browser.newPage()
    await page.goto('http://localhost:5000')
  })

  after(async function () {
    await page.close()
  })

  it('should have the correct page title', async function () {
    expect(await page.title()).to.eql('Puppeteer sample')
  })

  it('should have the correct header title', async function () {
    const headerTitle = await page.$eval('#header-title', element => element.textContent)
    expect(headerTitle).to.eql('Soy el título')
  })
})
