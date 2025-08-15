## Praticando automação de Interface

Repositório com fluxo automatizado para Login e Regostro de novo usuário
* Steps de Sucesso e Falha para ambas as rotas

* Utilizando o framewrok [Cypress](https://www.cypress.io/).

---

## Sobre o repositório

O site [Automation Testing Practice](https://practice.automationtesting.in/) foi utilizado para realizar a automação da interface web.

---

## Tecnologias Utilizadas

- Cypress 14.x
- JavaScript
- VS Code

---

## Estrutura do Projeto

```
CYPRESSMASTERCLASS/
├── cypress/
│   ├── e2e/
│   │   └── ├── login.cy.js
|   |       ├── register.cy.js
|   ├── fixtures/
│   │       ├── login.json
│   │       ├── register.json
|   ├── elements/
│   │       ├── homeElements.js
│   │       ├── loginElements.js
│   │       ├── registerElements.js
|   ├── pageObjects/
│   │       ├── homePage.js
│   │       ├── loginPage.js
│   │       ├── registerPage.js
├── package.json
└── README.md
```

---

## Como Realizar o clone do Repositório

```bash
git git@github.com:KiraOliveira/cypressAutDemoSite.git
cd cypressAutDemoSite.git
```

---

## Como Executar os Testes

```bash
npm install cypress
npx cypress open ou npx cypress run(heandless)
```

---

## Execução dos testes




