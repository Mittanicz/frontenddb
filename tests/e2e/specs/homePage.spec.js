// https://docs.cypress.io/api/introduction/api.html

describe('Test of homepage', () => {
  it('Visti homepage', () => {
    cy.visit('/')
    cy.get('.c-titleHero__title').should('be.visible');
    cy.get('h2').should('be.visible');
    cy.get('h2').should('be.visible');
    cy.get('.c-ck').should('be.visible');
  });
  it('Cookie click working', () => {
    cy.visit('/')
    cy.get('.c-ck').should('be.visible');
    cy.get('.c-ck > .c-btn').click();
    cy.get('.c-ck').should('not.exist');
    cy.getCookies()
      .should('have.length', 1)
      .then((cookies) => {
        expect(cookies[0]).to.have.property('name', 'feDbCookie')
      })
  });
  it('Display list', () => {
    cy.visit('/')
    cy.get('.c-nav__link').contains('List').click();
  });
  it('Testing list page', () => {
    cy.visit('/list')
    cy.get('.l-sideBar__body').should('be.visible');
    cy.get('.c-filter__controls').should('be.visible');
    cy.get('.c-cardWrapper .c-btn').should('be.visible');
  });
})
