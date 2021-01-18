/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import Checkbox from '@/components/Checkbox.vue'

describe('Check element', () => {
  it('Checkbox is rendered', () => {
    mount(Checkbox)

    cy.get('.c-checkbox__input').should('exist');
  });

  it('Checkbox label shoud exist', () => {
    const label = 'Continue';
    mount(Checkbox, {
      propsData: {
        label: 'This is checkbox'
      }
    })

    cy.get('.c-checkbox__text').contains('This is checkbox');
  });

  it('Checkbox label shoud not exist', () => {
    const label = 'Continue';
    mount(Checkbox)

    cy.get('.c-checkbox__text').should('have.text', '');
  });

  it('Checkbox can be checked', () => {
    mount(Checkbox)
    cy.get('.c-checkbox').click();
    cy.get('.c-checkbox__input').should('be.checked');
  });

})
