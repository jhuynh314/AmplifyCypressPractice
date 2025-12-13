export class DropdownPopover {
    private alias: string

    constructor(element: Cypress.Chainable<JQuery<HTMLElement>>, alias: string = "dropdownPopover") {
        element.as(alias);
        this.alias = alias;
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    // Must first be opened
    getAllOptions(): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.getElement().find("li");
    }

    selectOption(text: string): void {
        this.getElement().click();
        this.getElement().contains("li", text).click();
    }
}