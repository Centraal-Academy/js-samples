/* eslint-env mocha */
/* global cy */
describe('Index page', function () {
  before(function () {
    cy.visit('http://localhost:5000')
  })

  it('should have the correct page title', function () {
    cy.title().should('include', 'Puppeteer sample')
  })

  it('should have the correct header title', function () {
    cy.get('#header-title')
      .should('contain', 'Soy el título')
  })
})
