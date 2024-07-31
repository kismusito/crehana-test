import { mount } from 'cypress/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders with given title', () => {
    const title = 'Loading...';
    mount(<Loader title={title} />);

    cy.contains('p', title).should('exist');
  });

  it('applies the correct styles for "section" type', () => {
    mount(<Loader title='Loading...' type='section' />);

    cy.get('div')
      .should('have.class', 'mt-10')
      .should('not.have.class', 'w-screen')
      .should('not.have.class', 'h-screen');
  });

  it('applies the correct styles for "page" type', () => {
    mount(<Loader title='Loading...' type='page' />);

    cy.get('div')
      .should('have.class', 'w-screen')
      .should('have.class', 'h-screen')
      .should('not.have.class', 'mt-10');
  });

  it('renders the Lottie animation', () => {
    mount(<Loader title='Loading...' />);

    cy.get('div')
      .first()
      .within(() => {
        cy.get('svg').should('exist');
      });
  });
});
