/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import Button from '@/components/Button.vue'

describe('Greetings', () => {
  it('Button is rendered', () => {
    mount(Button)

    cy.get('button').should('exist');
  });

  it('Button work with slots', () => {
    const label = 'Continue';
    mount(Button, {
      slots: {
        default: label
      }
    })

    cy.get('button').should('contain', label)
  });
  it('Button is rendered as link', () => {
    const label = 'Continue';
    mount(Button, {
      slots: {
        default: label
      },
      propsData: {
        link: true
      }
    });

    cy.get('button').should('not.exist');
    cy.get('a').should('exist.and').should('contain', label);
  });
  it('Button change classes', () => {
    const label = 'Continue'
    mount(Button, {
      slots: {
        default: label
      },
      propsData: {
        link: false,
        block: true,
        secondary: true
      }
    });

    cy.get('button').should('have.class', 'c-btn--block');
    cy.get('button').should('have.class', 'c-btn--secondary');
  });
})
