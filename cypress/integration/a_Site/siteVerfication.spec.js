/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Testcases of Verification of Site', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })

  it('Verification of URL', () => {
    //passing url value to cy.visit()
    cy.url().should('include', 'employees/create')
  })
  it('Verification of Title ', () => {
    cy.title().should('be.equal', 'OutcastSolutions Employee Management System')
  })
})