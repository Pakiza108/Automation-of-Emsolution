// This example support/index.js is processed and

import '@applitools/eyes-cypress/commands'


// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './Logincommands'
import './Registrationcommands'
import 'cypress-mochawesome-reporter/register'
import '@percy/cypress'

// Alternatively you can use CommonJS syntax:

