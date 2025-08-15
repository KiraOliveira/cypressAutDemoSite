/// <reference types="cypress"/>

import homePage from "../support/pageObjects/homePage";
import loginPage from "../support/pageObjects/loginPage";

// Funcionalidade
describe('Realizando o Login', () => {

    // Acessando site
    it('Acessando Site', () => {
        cy.visit('/')

        // Validando que acesso o site e validou que clicou no botão "My Account"
        homePage.acessSite();
        homePage.acessAccount();
    })

    it('Realizando Login com sucesso', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLoginSucess();
    })
    it('Não realizar Login com E-mail ou Username inválido ou não registrado', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLoginEmailError();
    })
    it('Não realizar Login com Senha inválida', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLoginPasswordlWrong();
    })

    it('Não realizar Login com o campo E-mail vazio', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLoginEmailEmpty();
    })

    it('Não realizar Login com campo Password vazio', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLoginPasswordEmpty();
    })
    
})