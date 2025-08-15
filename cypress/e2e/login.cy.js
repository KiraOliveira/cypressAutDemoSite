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

    it.only('Realizando Login', () => {
        cy.visit('/')
        homePage.acessAccount();

        loginPage.acessLogin();
    })
})