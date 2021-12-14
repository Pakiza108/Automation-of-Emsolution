/// <reference types="cypress" />

  



// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// navigate to login page 


  
// LOGIN
Cypress.Commands.add('login', (email,password) => { 
    cy.get('input[id="email"]').type(email)
    cy.get('input[id="password"]').type(password)
    cy.get('.hidden-xs').click()
    // cy.get('p.text-center > a').click()
 })

 Cypress.Commands.add('Empty_feilds_error', (email,password) => { 
    cy.get('input[id="email"]').type(email)
    cy.get('.hidden-xs').click()
    cy.wait(2000)
    cy.get('input[id="password"]').focused()
    cy.screenshot()
  
 })
 // invalid user
 Cypress.Commands.add('invalid', (email,password) => { 
   cy.get('input[id="email"]').type(email)
   cy.get('input[id="password"]').type(password)
   cy.get('.hidden-xs').click()
   cy.wait(2000)
   cy.screenshot()

})
// navigate to signup 
Cypress.Commands.add('navigatetosignup', (email,password) => { 
  
   cy.get('p.text-center > a').click()
})
// Element verfication
Cypress.Commands.add('ElementVerification', () => { 
   cy.get('h3').contains('OutcastSolutions')
   cy.get(':nth-child(2) > label').contains('E-Mail Address')
   cy.get('.clearfix > .pull-left').contains('Password')
   cy.get('#RememberMe').uncheck()
   cy.get('.checkbox-custom > label').contains('Remember Me')
   cy.get('.hidden-xs').contains('Sign In')
   cy.get('p.text-center > a').contains('Sign Up!')
   cy.get('p.text-center').contains("Don't have an account yet? ")
})
// verify wrong password 
Cypress.Commands.add('Wrongpass', (email,password) => { 
  
   cy.get('input[id="email"]').type(email)
   cy.get('input[id="password"]').type(password)
   cy.get('.hidden-xs').click()
   cy.wait(2000)
   cy.screenshot()
})



