/// <reference types="cypress" />
import 'cypress-file-upload'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Testcases of Registration Module', () => {
    const inputData = {
        "fname": "testing",
        "lname": "123",
        "contact": "(1341) 988-2686",
        "cnic": "41344-1234567-1",
        "email": "testing@gmail.com",
        "passneg": "123456",
        "passpos": "1234567895",
        "bloddgrp": "O+",
        "allergy": "Kidney diseases",
        "currentadres": "'Gulistan e johar block 11",
        "cnicadress": "'Gulistan e johar block 11",
        "banknme": "Alflah islamic",
        "accttile": "TEST!@#",
        "accnum": "'5214454515484",
        "emgrname": "testingggg",
        "emgrrel": "Father",
        "emgrcontct": "(1341) 888-2977",
        "emergemai": "testing12@gmail.com",
        "picture1": "cnicback.jpg",
        "picture2": "cnicfront.jpg",
        "picture3": "passport.jpg",
        "picture4": "salaryslip.jpg",
    }
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
    })
    // Elements verfiication 
    it('Verify all the elements shoulbe be visible ', function () {
        cy.VerifyElements()
    })
    // Required feilds 
    it('Verify empty feild should give error msg and focued  ', function () {
        cy.RequiredFeilds(inputData.fname, inputData.lname, inputData.contact, inputData.cnic)
    })
    // Password length Negative  
    it('Verify negative password length ', function () {
        cy.passwordlengthNeg(inputData.fname, inputData.lname, inputData.contact, inputData.cnic, inputData.email, inputData.passneg)
    })
    // Password length positive  
    it('Verify positive password length ', function () {
        cy.passwordlengthPos(inputData.fname, inputData.lname, inputData.contact, inputData.cnic, inputData.email, inputData.passpos)
    })

    // Creation of new user and wroite user file with records 
    it("Verification of successfuly create a new user and store the records", function () {
        
        cy.adduser(inputData.fname, inputData.lname, inputData.contact, inputData.cnic, inputData.email, inputData.passpos, inputData.bloddgrp, inputData.allergy, inputData.currentadres, inputData.cnic,
                inputData.banknme, inputData.accttile, inputData.accnum, inputData.emgrname, inputData.emgrrel, inputData.contact, inputData.emergemai)
        .then(() => {
            cy.get('input[name=profile_pic]').attachFile(inputData.picture1)
            cy.get('input[name=cnic_pic_front]').attachFile(inputData.picture2)
            cy.get('input[name=cnic_pic_back]').attachFile(inputData.picture3)
            cy.get('input[name=salary_slip_pic]').attachFile(inputData.picture4)
            cy.get('body > div > div > input').click()
            cy.screenshot()
            cy.writeFile("cypress/fixtures/users.json", inputData, { flag: 'a' })

        })
    })
    // Same email validation 
    it("Same email address error validation  ", function () {
     cy.SameEmailaddress(inputData.fname, inputData.lname, inputData.contact, inputData.cnic, inputData.email, inputData.passpos, inputData.bloddgrp, inputData.allergy, inputData.currentadres, inputData.cnic,
                inputData.banknme, inputData.accttile, inputData.accnum, inputData.emgrname, inputData.emgrrel, inputData.contact, inputData.emergemai)
        .then(() => {
            cy.get('input[name=profile_pic]').attachFile(inputData.picture1)
            cy.get('input[name=cnic_pic_front]').attachFile(inputData.picture2)
            cy.get('input[name=cnic_pic_back]').attachFile(inputData.picture3)
            cy.get('input[name=salary_slip_pic]').attachFile(inputData.picture4)
            cy.get('body > div > div > input').click()
            cy.screenshot()
        })


    })
    // Navigate to signin page  
    it("Verify navigation of signin page ", function () {
        cy.Navigatetosigninpage()
    })
})