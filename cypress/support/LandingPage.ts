export class LandingPage {
    private alias = "LandingPage";

    constructor() {
        cy.get('.dcg-frontpage-landing').as(this.alias);
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    getAnnouncement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('aside[class*=announcement]');
    }

    getTopBanner(): LandingHero {
        const landingHeroElement = this.getElement().find('section[class*=landing-hero]');
        return new LandingHero(landingHeroElement);
    }

    getToolsSection(): ToolsSection {
        const toolsElement = this.getElement().find('section[class*=--tools]');
        return new ToolsSection(toolsElement)
    }

    getDesmosClassroomSection(): TwoColumnSection {
        const classroomElement = this.getElement().find('section[class*=classroom]');
        return new TwoColumnSection(classroomElement, "Classroom");
    }

    getGeometrySection(): TwoColumnSection {
        const geometrySection = this.getElement().find('section[class*=geometry]');
        return new TwoColumnSection(geometrySection, "GeometrySection");
    }

    get3dSection(): TwoColumnSection {
        const element = this.getElement().find('section[class*=3d]');
        return new TwoColumnSection(element, "3dSection");
    }

    getGraphLinksSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('div[class*=graph-links]');
    }

    getTestingSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('section[class*=testing]');
    }

    getPartnersSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('section[class*=partners]');
    }

    getArtContestSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('section[class*=art-contest]');
    }
}

class LandingHero {
    private alias: string

    constructor(element: Cypress.Chainable<JQuery<HTMLElement>>, alias: string = "LandingHero") {
        element.as(alias);
        this.alias = alias;
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('h1[class*="title"]');
    }
    getDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('div[class*="description"]');
    }
    getButton(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().contains('a', text);
    }
    getImage(): Cypress.Chainable<JQuery<HTMLElement>> {
        this.getElement().scrollIntoView();
        return this.getElement().find('canvas');
    }
}

class TwoColumnSection {
    private alias: string

    constructor(element: Cypress.Chainable<JQuery<HTMLElement>>, alias: string = "TwoColumnSection") {
        element.as(alias);
        this.alias = alias;
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    getHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('h2[class*="header"]');
    }
    getSubheader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().find('div[class*="subheader"]');
    }
    getButton(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().contains('a', text);
    }
    getImage(): Cypress.Chainable<JQuery<HTMLElement>> {
        this.getElement().scrollIntoView();
        return this.getElement().find('canvas');
    }
}

class ToolsSection {
        private alias: string

    constructor(element: Cypress.Chainable<JQuery<HTMLElement>>, alias: string = "ToolsSection") {
        element.as(alias);
        this.alias = alias;
    }

    getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`@${this.alias}`);
    }

    getButton(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement().contains('a', text);
    }

    getNumberOfButtons(): Cypress.Chainable<number> {
        return this.getElement().find('a').then(elements =>{
            return elements.length;
        });
    }
}