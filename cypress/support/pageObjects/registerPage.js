/// <reference types="Cypress" />

import registerElements from "../elements/registerElements";
import register from "../../fixtures/register.json"

class registerPage {
  
  registerNewUserSucess() {
    // Validando o título Register
    cy.get(registerElements.titleRegister())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Register');

    // Validando que aparece o Box Register
    cy.get(registerElements.boxRegister())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Register
    cy.get(registerElements.titleFieldName())
      .should("exist")
      .and("have.text", "Email address *")
      
    cy.get(registerElements.fieldName())
      .should('exist')  
      .and('be.visible')
      .type(register.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(registerElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(registerElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(register.senha.senhaSucess, {log: false})

    // Validando botão de Register
    cy.get(registerElements.buttonRegister())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

  };
  emailInvalid() {
    cy.get(registerElements.fieldName())
      .should('exist')  
      .and('be.visible')
      //.type('kira@email.com')
      .type(register.email.emailError, {log: false})
    
    // Validando título e campo Password  
    cy.get(registerElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(registerElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(register.senha.senhaSucess, {log: false})

    // Validando botão de Register
    cy.get(registerElements.buttonRegister())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

  }
  passwordWrong() {
    cy.get(registerElements.fieldName())
      .should('exist')  
      .and('be.visible')
      //.type('kira@email.com')
      .type(register.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(registerElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(registerElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(register.senha.senhaError, {flog: false})

    cy.get(registerElements.alertPasswordWeak())
      .should('exist')
      .and('be.visible')
      .and('have.text', register.mensagens.passwordWeak)

    cy.get(registerElements.explanationCreatePassword())  
      .should('exist')
      .and('be.visible')
      .and('contain.text', register.mensagens.createPassword)

    // Validando botão de Register
    cy.get(registerElements.buttonDisable())
      .should('exist')
      .and('be.disabled')
  }
  duplicityRegister() {
    // Validando título e campo Register
    cy.get(registerElements.titleFieldName())
      .should("exist")
      .and("have.text", "Email address *")
      
    cy.get(registerElements.fieldName())
      .should('exist')  
      .and('be.visible')
      .type(register.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(registerElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(registerElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(register.senha.senhaSucess), {log: false}

    // Validando botão de Register
    cy.get(registerElements.buttonRegister())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()
    
    cy.get(registerElements.alertAlreadyRegistered())
      .should('exist')  
      .and('be.visible')
    
    cy.get(registerElements.textAlreadyRegistered())
      .should('exist')  
      .and('be.visible')
      .and('have.text', register.mensagens.msgDuplicity)
  }
}

export default new registerPage();
