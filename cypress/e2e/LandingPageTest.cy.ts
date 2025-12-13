/// <reference types="cypress" />

import { LandingPage } from "../support/LandingPage";
import { Toolbar } from "../support/toolbar";

describe('Desmos home page tests', () => {

  let landingPage: LandingPage;

  beforeEach(() => {
    cy.visit('https://www.desmos.com/');
    landingPage = new LandingPage();
  });

  it('Verify page setup', () => {
    landingPage.getAnnouncement().should('have.text', " The 2025 Art Contest is open for submissions! Learn more. ");

    const topBanner = landingPage.getTopBanner();
    topBanner.getTitle().should('have.text', "Beautiful free math.");
    topBanner.getDescription().should('have.text', "At Desmos Studio, we want to help everyone learn math, love math, and grow with math.");
    topBanner.getButton("Open Graphing Calculator").should('exist');
    topBanner.getImage().should('exist');

    landingPage.getToolsSection().getNumberOfButtons().should('eq', 6);

    const classroomSection = landingPage.getDesmosClassroomSection();
    classroomSection.getHeader().should('have.text', "Looking for Desmos Classroom (Now Amplify Classroom)?");
    classroomSection.getSubheader().should('have.text', "Amplify Classroom is a powerful teaching and learning platform with hundreds of free, interactive K–12 lessons across math, science, and literacy!");
    classroomSection.getButton("I'm a Teacher").should('exist');
    classroomSection.getButton("I'm a Student").should('exist');

    const geometrySection = landingPage.getGeometrySection();
    geometrySection.getHeader().should('have.text', "The next generation of Desmos Geometry is here.");
    geometrySection.getSubheader().should('have.text', "Use the combined power of the Desmos Calculator and native construction and transformations tools to explore geometry as never before.");
    geometrySection.getButton("Open Geometry").should('exist');
    geometrySection.getButton("Examples").should('exist');
    geometrySection.getImage().should('exist');

    const section3d = landingPage.get3dSection();
    section3d.getHeader().should('have.text', "Jump into a new dimension of math.");
    section3d.getSubheader().should('have.text', "Have you ever felt like two dimensions isn't quite enough? The Desmos 3D Calculator lets you explore curves, surfaces, and points in all three dimensions.");
    section3d.getButton("Open 3D").should('exist');
    section3d.getButton("Examples").should('exist');
    section3d.getImage().should('exist');

    landingPage.getGraphLinksSection();
    landingPage.getTestingSection();
    landingPage.getPartnersSection().find('li[class*="logo"] a').each(partner =>{
      console.log(partner.prop('href'));
    });

    landingPage.getArtContestSection();
  });

  it('Verify Toolbar', () => {
    const toolbar = new Toolbar();
    toolbar.getHomeButton().should('exist');
    
    // Math Tools Dropdown
    const mathTools = toolbar.getMathTools();
    const tools = ["Graphing Calculator", "Scientific Calculator", "Four-Function Calculator", "Test Practice", "Matrix Calculator", "Geometry Tool", "3D Calculator"];
    mathTools.getElement().click();
    mathTools.getAllOptions().should('have.length', tools.length + 1); // +1 to account for app store message
    tools.forEach(tool => {
      mathTools.getAllOptions().contains(tool).should('exist');
    });


    // Resources Dropdown
    const resources = toolbar.getResources();
    const resourceOptions = ["About Us", "Careers", "Help Center", "Accessibility", "Assessments", "Guiding Principles", "Design Principles", "Des-Blog"];
    resources.getElement().click();
    resources.getAllOptions().should('have.length', resourceOptions.length);
    resourceOptions.forEach(option => {
      resources.getAllOptions().contains(option).should('exist');
    });


    // Partnerships
    const partnerships = toolbar.getPartnerships();
    const partnershipOptions = ["Desmos For Work", "Education Partnerships", "API Documentation"];
    partnerships.getElement().click();
    partnerships.getAllOptions().should('have.length', partnershipOptions.length);
    partnershipOptions.forEach(option => {
      partnerships.getAllOptions().contains(option).should('exist');
    });
    partnerships.getElement().click();

    toolbar.getLogInButton().should('exist');
    toolbar.getSignUpButton().should('exist');

    const languages = toolbar.getLanguages();
    languages.getElement().click();
    languages.getAllOptions().should('have.length', 20);

  });

  it('Verify Math Tools Navigation', () => {
    interface ToolsData {
      buttonName: string,
      url: string
    }

    cy.fixture("ToolsSectionTestData.json").then(data => {
      data.forEach((toolsData: ToolsData) => {
        landingPage.getToolsSection().getButton(toolsData.buttonName).should('have.text', toolsData.buttonName).click();
        cy.url().should('eq', toolsData.url);
        cy.go('back');
      });
    });
  });
});
