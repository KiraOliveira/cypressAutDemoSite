/// <reference types="Cypress" />

import loginElements from "../elements/loginElements";
import login from "../../fixtures/login.json"

class loginPage {
  
  acessLoginSucess() {
    // Validando o título Login
    cy.get(loginElements.titleLogin())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Login');

    // Validando que aparece o Box Login  
    cy.get(loginElements.boxLogin())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Login  
    cy.get(loginElements.titleFieldName())
      .should("exist")
      .and("have.text", "Username or email address *")
      
    cy.get(loginElements.fieldName())
      .should('exist')  
      .and('be.visible')
      //.type('kira@email.com')
      .type(login.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(loginElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(loginElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(login.senha.senhaSucess, {log: false})
    
    // Validando Remember me
    cy.get(loginElements.labelRememberMe())
      .should('exist')
      .and('contain.text', 'Remember me')
    
    cy.get(loginElements.markRememberMe())
      .should('exist')
      .click()
    
    // Validando Link Lost Password -- https://practice.automationtesting.in/my-account/lost-password/
    cy.get(loginElements.linkLostPassword())
      .should('exist')
      .and('have.text', 'Lost your password?')//.click()

    // Validando botão de Login
    cy.get(loginElements.buttonLogin())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

  }
  acessLoginEmailError() {
    // Validando o título Login
    cy.get(loginElements.titleLogin())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Login');

    // Validando que aparece o Box Login  
    cy.get(loginElements.boxLogin())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Login  
    cy.get(loginElements.titleFieldName())
      .should("exist")
      .and("have.text", "Username or email address *")
      
    cy.get(loginElements.fieldName())
      .should('exist')  
      .and('be.visible')
      .type(login.email.emailError, {log: false})
    
    // Validando título e campo Password  
    cy.get(loginElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(loginElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(login.senha.senhaSucess, {log: false})
    
    // Validando Remember me
    cy.get(loginElements.labelRememberMe())
      .should('exist')
      .and('contain.text', 'Remember me')
    
    cy.get(loginElements.markRememberMe())
      .should('exist')
      .click()
    
    // Validando Link Lost Password -- https://practice.automationtesting.in/my-account/lost-password/
    cy.get(loginElements.linkLostPassword())
      .should('exist')
      .and('have.text', 'Lost your password?')//.click()

    // Validando botão de Login
    cy.get(loginElements.buttonLogin())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

    // Mensagem de erro
    cy.get(loginElements.alertMsgError())
      .should('exist')
      .and('be.visible')
    
    cy.get(loginElements.alertMsgErrorText())  
      .should('exist')
      .and('be.visible')
      .and('contain.text', login.mensagens.emailNaoRegistrado)
  }
  acessLoginPasswordlWrong() {
    // Validando o título Login
    cy.get(loginElements.titleLogin())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Login');

    // Validando que aparece o Box Login  
    cy.get(loginElements.boxLogin())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Login  
    cy.get(loginElements.titleFieldName())
      .should("exist")
      .and("have.text", "Username or email address *")
      
    cy.get(loginElements.fieldName())
      .should('exist')  
      .and('be.visible')
      .type(login.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(loginElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(loginElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      //.type('123456789')
      .type(login.senha.senhaError, {log: false})
    
    // Validando Remember me
    cy.get(loginElements.labelRememberMe())
      .should('exist')
      .and('contain.text', 'Remember me')
    
    cy.get(loginElements.markRememberMe())
      .should('exist')
      .click()
    
    // Validando Link Lost Password -- https://practice.automationtesting.in/my-account/lost-password/
    cy.get(loginElements.linkLostPassword())
      .should('exist')
      .and('have.text', 'Lost your password?')//.click()

    // Validando botão de Login
    cy.get(loginElements.buttonLogin())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

    // Mensagem de erro
    cy.get(loginElements.alertMsgError())
      .should('exist')
      .and('be.visible')
    
    cy.get(loginElements.alertMsgErrorText())  
      .should('exist')
      .and('be.visible')
      .and('contain.text', login.mensagens.passwordWrong)
  }
  acessLoginEmailEmpty() {
    // Validando o título Login
    cy.get(loginElements.titleLogin())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Login');

    // Validando que aparece o Box Login  
    cy.get(loginElements.boxLogin())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Login  
    cy.get(loginElements.titleFieldName())
      .should("exist")
      .and("have.text", "Username or email address *")
      
    cy.get(loginElements.fieldName())
      .should('exist')  
      .and('be.visible')
    
    // Validando título e campo Password  
    cy.get(loginElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(loginElements.fieldPassword())
      .should('exist')
      .and('be.visible')  
      .type(login.senha.senhaSucess, {log: false})
    
    // Validando Remember me
    cy.get(loginElements.labelRememberMe())
      .should('exist')
      .and('contain.text', 'Remember me')
    
    cy.get(loginElements.markRememberMe())
      .should('exist')
      .click()
    
    // Validando Link Lost Password -- https://practice.automationtesting.in/my-account/lost-password/
    cy.get(loginElements.linkLostPassword())
      .should('exist')
      .and('have.text', 'Lost your password?')//.click()

    // Validando botão de Login
    cy.get(loginElements.buttonLogin())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

    // Mensagem de erro
    cy.get(loginElements.alertMsgError())
      .should('exist')
      .and('be.visible')
    
    cy.get(loginElements.alertMsgErrorText())  
      .should('exist')
      .and('be.visible')
      .and('contain.text', login.mensagens.emailInvalidoVazio)
  }
  acessLoginPasswordEmpty() {
    // Validando o título Login
    cy.get(loginElements.titleLogin())
      .should("exist")
      .and('be.visible')
      .and('have.text', 'Login');

    // Validando que aparece o Box Login  
    cy.get(loginElements.boxLogin())
      .should('exist')
      .and('be.visible')

    // Validando título e campo Login  
    cy.get(loginElements.titleFieldName())
      .should("exist")
      .and("have.text", "Username or email address *")
      
    cy.get(loginElements.fieldName())
      .should('exist')  
      .and('be.visible')
      .type(login.email.emailSucess, {log: false})
    
    // Validando título e campo Password  
    cy.get(loginElements.titleFieldPassword())
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Password *')    
    
    cy.get(loginElements.fieldPassword())
      .should('exist')
      .and('be.visible')
    
    // Validando Remember me
    cy.get(loginElements.labelRememberMe())
      .should('exist')
      .and('contain.text', 'Remember me')
    
    cy.get(loginElements.markRememberMe())
      .should('exist')
      .click()
    
    // Validando Link Lost Password -- https://practice.automationtesting.in/my-account/lost-password/
    cy.get(loginElements.linkLostPassword())
      .should('exist')
      .and('have.text', 'Lost your password?')//.click()

    // Validando botão de Login
    cy.get(loginElements.buttonLogin())
      .should('exist')
      .and('be.visible')
      .and('contain.text', '')
      .click()

    // Mensagem de erro
    cy.get(loginElements.alertMsgError())
      .should('exist')
      .and('be.visible')
    
    cy.get(loginElements.alertMsgErrorText())  
      .should('exist')
      .and('be.visible')
      .and('contain.text', login.mensagens.senhaInvalidaVazia)
  }
}

export default new loginPage();
