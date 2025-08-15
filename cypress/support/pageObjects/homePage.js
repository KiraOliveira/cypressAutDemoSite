/// <reference types="Cypress" />

import homeElements from "../elements/homeElements";
const url = Cypress.config("baseUrl");

class homePage {
  // Acessar o ste que será testado
  acessSite() {
    cy.visit(url);
  }
  acessAccount() {
    cy.get(homeElements.home())
      .should("exist");
    cy.get(homeElements.optionMyAccount())
      .should("exist")
      .and("have.text", "My Account")
      .click();
  }
}

export default new homePage();
