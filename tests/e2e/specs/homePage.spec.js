// https://docs.cypress.io/api/introduction/api.html

describe('Test of homepage', () => {
  it('Visti homepage', () => {
    cy.visit('/')
    cy.get('.c-titleHero__title').should('be.visible');
    cy.get('.c-ck').should('be.visible');
  });
  it('Cookie click working', () => {
    cy.visit('/')
    cy.get('.c-ck').should('be.visible');
    cy.get('.c-ck > .c-btn').click();
    cy.get('.c-ck').should('not.exist');
    cy.getCookie('feDbCookie')
      .should('have.property', 'value', '1')
      .then((cookie) => {
        // cookie is an object with "domain", "name" and other properties
      })
  });
  it('Display list', () => {
    cy.visit('/')
    cy.get('.c-nav__link').contains('List').click();
  });
})
