import { mount } from 'cypress/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar Component', () => {
  it('renders the Crehana logo', () => {
    mount(
      <Router>
        <Navbar />
      </Router>,
    );

    cy.get('img').should('have.attr', 'src').should('include', 'logo.svg');
    cy.get('img').should('have.attr', 'alt', 'Crehana Logo');
  });

  it('navigates to the home page when the logo is clicked', () => {
    mount(
      <Router>
        <Navbar />
      </Router>,
    );

    cy.get('img').click();
    cy.location('pathname').should('eq', '/');
  });
});
