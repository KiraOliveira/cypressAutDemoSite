/// <reference types="cypress"/>

import homePage from "../support/pageObjects/homePage";
import registerPage from "../support/pageObjects/registerPage";

// Funcionalidade
describe('Criando um novo registro', () => {

    // Acessando site
    it('Acessando Site', () => {
        cy.visit('/')

        // Validando que acesso o site e validou que clicou no botão "My Account"
        homePage.acessSite();
        homePage.acessAccount();
    })

    it('Registro de um novo usuário com sucesso', () => {
        cy.visit('/')
        homePage.acessAccount();

        registerPage.registerNewUserSucess();
    })
    it('Não realizar o registro com E-mail inválido', () => {
        cy.visit('/')
        homePage.acessAccount();

        registerPage.emailInvalid();
    })

    it('Não realizar o registro com Senha inválida', () => {
        cy.visit('/')
        homePage.acessAccount();

        registerPage.passwordWrong();
    })

    it('Exibir mensagem de alert com registro em Duplicidade', () => {
        cy.visit('/')
        homePage.acessAccount();

        registerPage.duplicityRegister();
    })
})