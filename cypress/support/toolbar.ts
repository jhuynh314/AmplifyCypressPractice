import { DropdownPopover } from "./DropdownPopover";

export class Toolbar {
    private alias = "toolbar";
 
    constructor() {
        cy.get(".dcg-main-header-container").as(this.alias);
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    getHomeButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find(".dcg-home-link");
    }

    getMathTools(): DropdownPopover {
        const mathToolsElement = this.getElement().contains("nav > div", "Math Tools");
        return new DropdownPopover(mathToolsElement, "MathTools");
    }

    getResources(): DropdownPopover {
        const resourcesElement = this.getElement().contains("nav > div", "Resources");
        return new DropdownPopover(resourcesElement, "Resources");
    }

    getPartnerships(): DropdownPopover {
        const partnershipsElement = this.getElement().contains("nav > div", "Partnerships");
        return new DropdownPopover(partnershipsElement, "Partnerships");
    }

    getLogInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().contains("button", "Log In");
    }

    getSignUpButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().contains("button", "Sign Up");
    }

    getLanguages(): DropdownPopover {
        const languageElement = this.getElement().find(".dcg-language-picker-container");
        return new DropdownPopover(languageElement, "Languages");
    }
}