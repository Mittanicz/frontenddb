// https://docs.cypress.io/api/introduction/api.html

describe('Test list page', () => {
  it('Testing list page', () => {
    cy.visit('/list')
    cy.get('.l-sideBar__body').should('be.visible');
    cy.get('.c-filter__controls').should('be.visible');
    cy.get('.c-btn--block').should('be.visible');
  });
  it('Filter by checkbox', () => {
    cy.visit('/list')
    cy.get(':nth-child(4) > .c-checkbox__text').click();
    cy.get('[href="/icoMoon"] > .c-card').should('not.exist');
  });
  it('Filter by search', () => {
    cy.visit('/list')
    cy.get('.c-filter .c-input').type('vue');
    cy.get('[href="/vue.js"]').should('be.visible');
  });
  it('Change list layout', () => {
    cy.visit('/list')
    cy.get('.c-filter__controls > :nth-child(2)').click()
    cy.get('.c-cardWrapper').should('have.class', 'c-cardWrapper--grid');
    cy.get('.c-filter__controls > :nth-child(3)').click()
    cy.get('.c-cardWrapper').should('not.have.class', 'c-cardWrapper--grid');
  });
});
describe('Test list page mobile', {
  viewportHeight: 667,
  viewportWidth: 375
}, () => {
  it('Testing list page', () => {
    cy.visit('/list')
    cy.get('.l-sideBar__body').should('not.be.visible');
    cy.get('.u-mb-30').should('be.visible');
    cy.get('.c-filter__controls .c-input').should('be.visible');
  });
  it('Show filter modal on click', () => {
    cy.visit('/list')
    cy.get('.u-mb-30').click();
    cy.get('.l-sideBar__body').should('be.visible');
    cy.get('.l-sideBar__close').click()
    cy.get('.l-sideBar__body').should('not.be.visible');
  });
  it('Filter by search', () => {
    cy.visit('/list')
    cy.get('.c-filter .c-input').type('vue');
    cy.get('[href="/vue.js"] > .c-card').should('be.visible');
  });
  it('Filter by checkbox', () => {
    cy.visit('/list')
    cy.get('.c-ck > .c-btn').click();
    cy.get('.u-mb-30').click();
    cy.get('.l-sideBar__body .c-checkbox:nth-child(5)').click();
    cy.get('.l-sideBar__close').click()
    cy.get('[href="/icoMoon"] > .c-card').should('not.exist');
  });
});
