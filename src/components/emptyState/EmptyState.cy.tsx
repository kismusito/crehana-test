// EmptyState.cy.js

import { mount } from 'cypress/react';
import EmptyState from './EmptyState';
import { BrowserRouter as Router } from 'react-router-dom';

describe('EmptyState Component', () => {
  it('renders with given title', () => {
    const title = 'No items found';
    mount(
      <Router>
        <EmptyState title={title} />
      </Router>,
    );

    cy.contains('p', title).should('exist');
  });

  it('applies the correct styles for "section" type', () => {
    mount(
      <Router>
        <EmptyState title='No items found' type='section' />
      </Router>,
    );

    cy.get('div')
      .should('have.class', 'mt-10')
      .should('not.have.class', 'w-screen')
      .should('not.have.class', 'h-screen');
  });

  it('applies the correct styles for "page" type', () => {
    mount(
      <Router>
        <EmptyState title='No items found' type='page' />
      </Router>,
    );

    cy.get('div')
      .should('have.class', 'w-screen')
      .should('have.class', 'h-screen')
      .should('not.have.class', 'mt-10');
  });

  it('renders the Lottie animation', () => {
    mount(
      <Router>
        <EmptyState title='No items found' />
      </Router>,
    );

    cy.get('div')
      .first()
      .within(() => {
        cy.get('svg').should('exist');
      });
  });

  it('renders and triggers the action button', () => {
    const action = { title: 'Go Home', to: '/' };
    mount(
      <Router>
        <EmptyState title='No items found' action={action} />
      </Router>,
    );

    cy.contains('button', action.title).should('exist').click();
    cy.location('pathname').should('eq', action.to);
  });
});
