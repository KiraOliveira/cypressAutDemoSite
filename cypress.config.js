const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://practice.automationtesting.in/',
  },
  "video": true,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 60000
});
