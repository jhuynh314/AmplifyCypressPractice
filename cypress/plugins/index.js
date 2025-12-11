// cypress/plugins/index.js
import tagify from 'cypress-tags';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  on('file:preprocessor', tagify(config));
};