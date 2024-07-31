import '@/assets/styles/index.css';
import { mount } from '@cypress/react';
import Card from './Card';

describe('<Card />', () => {
  it('Simple title', () => {
    mount(<Card title='Bussines' />);
    cy.get('[data-cy=card]').should('be.visible');
    cy.get('[data-cy=card]').should('have.text', 'Bussines');
  });
  it('With slot', () => {
    mount(<Card title='Bussines' slot={<div>😊</div>} />);
    cy.get('[data-cy=card]').should('be.visible');
    cy.get('[data-cy=card]').contains('div', '😊');
  });
});
