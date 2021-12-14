// Registration 
Cypress.Commands.add('adduser', (fname, lname, contact, cnic, email, pass, bloddgrp, allergy, currentadres, cnicadress, banknme
    , accttile, accnum, emgrname, emgrrel, emgrcontct,
    emergemail) => {
    cy.get('input[name=first_name]').type(fname)
    cy.get('input[name=last_name]').type(lname)
    cy.get('input[name=contact]').type(contact)
    cy.get('input[name=cnic]').type(cnic)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(pass)
    cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').type(bloddgrp)
    cy.get('input[name=allergies]').type(allergy)
    cy.get('input[name=address]').type(currentadres)
    cy.get('input[name=cnic_address]').type(cnicadress)
    cy.get('input[name=bank_name]').type(banknme)
    cy.get('input[name=account_title]').type(accttile)
    cy.get('input[name=account_number]').type(accnum)
    cy.get('input[name=emergency_name]').type(emgrname)
    cy.get('input[name=emergency_relationship]').type(emgrrel)
    cy.get('input[name=emergency_contact]').type(emgrcontct)
    cy.get('input[name=emergency_email]').type(emergemail)


})
// Password length Negative testcase 
Cypress.Commands.add('passwordlengthNeg', (fname, lname, contact, cnic, email, pass) => {
    cy.get('input[name=first_name]').type(fname)
    cy.get('input[name=last_name]').type(lname)
    cy.get('input[name=contact]').type(contact)
    cy.get('input[name=cnic]').type(cnic)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(pass).should('have.length', 2)
    cy.get('body > div > div > input').click()
    cy.screenshot()


})

// Password length positive testcase 
Cypress.Commands.add('passwordlengthPos', (fname, lname, contact, cnic, email, pass) => {
    cy.get('input[name=first_name]').type(fname)
    cy.get('input[name=last_name]').type(lname)
    cy.get('input[name=contact]').type(contact)
    cy.get('input[name=cnic]').type(cnic)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(pass).should('have.length', 1)
    cy.get('body > div > div > input').click()
    cy.screenshot()


})
//Required feilds 
Cypress.Commands.add('RequiredFeilds', (fname, lname, contact, cnic) => {
    cy.get('input[name=first_name]').type(fname)
    cy.get('input[name=last_name]').type(lname)
    cy.get('input[name=contact]').type(contact)
    cy.get('input[name=cnic]').type(cnic)
    cy.get('input[name=email]').should('be.empty')
    cy.get('body > div > div > input').click()
    cy.screenshot()


})
// Same email address 
Cypress.Commands.add('SameEmailaddress', (fname, lname, contact, cnic, email, pass, bloddgrp, allergy, currentadres, cnicadress, banknme
    , accttile, accnum, emgrname, emgrrel, emgrcontct,
    emergemail) => {
    cy.get('input[name=first_name]').type(fname)
    cy.get('input[name=last_name]').type(lname)
    cy.get('input[name=contact]').type(contact)
    cy.get('input[name=cnic]').type(cnic)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(pass)
    cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').select(bloddgrp)
    cy.get('input[name=allergies]').type(allergy)
    cy.get('input[name=address]').type(currentadres)
    cy.get('input[name=cnic_address]').type(cnicadress)
    cy.get('input[name=bank_name]').type(banknme)
    cy.get('input[name=account_title]').type(accttile)
    cy.get('input[name=account_number]').type(accnum)
    cy.get('input[name=emergency_name]').type(emgrname)
    cy.get('input[name=emergency_relationship]').type(emgrrel)
    cy.get('input[name=emergency_contact]').type(emgrcontct)
    cy.get('input[name=emergency_email]').type(emergemail)
 
})
// verfiy all elements are visible 
Cypress.Commands.add('VerifyElements', () => {
    cy.get('input[name=first_name]').should('be.visible')
    cy.get('input[name=last_name]').should('be.visible')
    cy.get('input[name=contact]').should('be.visible')
    cy.get('input[name=cnic]').should('be.visible')
    cy.get('input[name=email]').should('be.visible')
    cy.get('input[name=password]').should('be.visible')
    cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').should('be.visible')
    cy.get('input[name=allergies]').should('be.visible')
    cy.get('input[name=address]').should('be.visible')
    cy.get('input[name=cnic_address]').should('be.visible')
    cy.get('input[name=bank_name]').should('be.visible')
    cy.get('input[name=account_title]').should('be.visible')
    cy.get('input[name=account_number]').should('be.visible')
    cy.get('input[name=emergency_name]').should('be.visible')
    cy.get('input[name=emergency_relationship]').should('be.visible')
    cy.get('input[name=emergency_contact]').should('be.visible')
    cy.get('input[name=emergency_email]').should('be.visible')
    cy.get('body > div > div > input').should('be.visible')
    cy.get('.text-center > a').should('be.visible')
    cy.get('.text-center').should('be.visible').contains('Already have an account? ')

})
// navigation of sigin page
Cypress.Commands.add('Navigatetosigninpage', () => {
    cy.get('.text-center > a').contains('Sign In!').click()

})
