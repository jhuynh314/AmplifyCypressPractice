import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', tagify(config));
    },
  },
});