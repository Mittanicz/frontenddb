describe('Test detail page', () => {
    it('Testing list page', () => {
        cy.visit('/vue.js')
        cy.get('.c-banner img').should('be.visible');
        cy.get('.c-title__title').should('be.visible');
        cy.get('.c-title__title').contains('Vue.js');
        cy.get('.detailInfo').should('be.visible');
        cy.get('[href="https://vuejs.org/"]').should('be.visible');
        cy.get('.l-grid > .c-btn--secondary').should('be.visible');
        cy.get('.ul-list--row').should('be.visible');
    });
});
describe('Test detail page - mobile', {
    viewportHeight: 667,
    viewportWidth: 375
}, () => {
    it('Testing list page mobile', () => {
        cy.visit('/vue.js', {
            headers: {
                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
            }
        });
        cy.get('.c-banner img').should('be.visible');
        cy.get('.c-title__title').should('be.visible');
        cy.get('.c-title__title').contains('Vue.js');
        cy.get('.detailInfo').should('not.exist');
        cy.get('aside > .ul-list').should('be.visible');
        cy.get('[href="https://vuejs.org/"]').should('be.visible');
        cy.get('.l-grid > .c-btn--secondary').should('be.visible');
        cy.get('.ul-list--row').should('be.visible');
    });
});