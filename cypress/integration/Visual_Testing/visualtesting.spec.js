/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Visual testing  ', function () {
beforeEach(()=>{

  cy.eyesOpen({
    appName: 'Etesting',
    browser: [
      { width: 1024 ,heigth : 768 }, // desktop
      { width: 600 ,heigth : 750 }, // tablet
      { width: 450 ,heigth : 650 }, // mbbile
      { width: 1024 ,heigth : 768 , name : 'firefox'},// firefox
      {
        iosDeviceInfo: {
          deviceName: 'Iphone XR',
        }
      },
      {mobile : true ,  // chrome device emulation 
        width : 800, heigth: 600, deviceScaleFactor:3,
      }
    ],
  })
})

    it('Verification of element  ', function () {

        
        it('Verify all the elements shoulbe be visible ', function () {
          cy.visit('https://etesting.futureplan.tech/employees/create')  
          cy.VerifyElements()
          cy.eyesCheckWindow({tag: 'App'})  // visual assertions
        })

      })
  


})