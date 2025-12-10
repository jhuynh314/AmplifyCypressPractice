// cypress/plugins/index.js
const tagify = require('cypress-tags');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', tagify(config));
};