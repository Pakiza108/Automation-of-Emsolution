/// <reference types="cypress" />

import { before } from "lodash"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Testcases of Login Module ', function () {

  beforeEach(() => {

    cy.visit(Cypress.env('url'))
    cy.get('.text-center > a').click()
    cy.fixture('users').as('users')

  })
 
  // verification of element
  it('Verification of element  ', function () {

    cy.ElementVerification()
  })
  // Empty feilds 
  it('Verfiy empty feilds give error msg ', function () {
    
    cy.Empty_feilds_error(this.users.email)
  })
 
  // wrong password 
  it('Verify wrong password should give error msg ', function () {

    cy.Wrongpass(this.users.email, '1234567')
  })
   // invalid user 
   it('Invalid user ', function () {
    cy.login('xyz@gmail.com', '123456')
  })
  // navigate to signup 
  it('Verify navigation to signup page  ', function () {
    cy.navigatetosignup()

  })
  
  it('Successfuly logged in', function () {
    
    cy.login(this.users.email, this.users.passpos)

  })

})

