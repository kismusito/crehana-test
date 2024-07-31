import { mount } from 'cypress/react';
import Input from './Input';

describe('Input Component', () => {
  const filters = [
    {
      id: 'category',
      label: 'Category',
      options: [
        { label: 'Category 1', value: 'cat1' },
        { label: 'Category 2', value: 'cat2' },
      ],
    },
    {
      id: 'status',
      label: 'Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
  ];

  it('renders input field and button', () => {
    mount(<Input placeholder='Search...' />);

    cy.get('input').should('have.attr', 'placeholder', 'Search...');
    cy.get('button').should('exist');
  });

  it('renders dropdown filters', () => {
    mount(<Input filters={filters} />);

    filters.forEach((filter) => {
      cy.contains('select', filter.label).should('exist');
      filter.options.forEach((option) => {
        cy.get(`select[name=${filter.id}]`).should('contain', option.label);
      });
    });
  });

  it('handles input change', () => {
    mount(<Input placeholder='Search...' />);

    cy.get('input').type('Test search');
    cy.get('input').should('have.value', 'Test search');
  });

  it('handles dropdown selection', () => {
    mount(<Input filters={filters} />);

    cy.get(`select[name=${filters[0].id}]`).select(filters[0].options[1].label);
    cy.get(`select[name=${filters[0].id}]`).should(
      'have.value',
      filters[0].options[1].value,
    );
  });

  it('disable input', () => {
    mount(<Input placeholder='Search...' disabled />);

    cy.get('input').should('be.disabled');
  });

  it('initially renders dropdowns with no selected value', () => {
    mount(<Input filters={filters} />);

    filters.forEach((filter) => {
      cy.get(`select[name=${filter.id}]`).should('have.value', '');
    });
  });

  it('updates dropdown value on selection', () => {
    mount(<Input filters={filters} />);

    cy.get(`select[name=${filters[0].id}]`).select('Category 2');
    cy.get(`select[name=${filters[0].id}]`).should('have.value', 'cat2');

    // Select an option from the second dropdown
    cy.get(`select[name=${filters[1].id}]`).select('Inactive');
    cy.get(`select[name=${filters[1].id}]`).should('have.value', 'inactive');
  });

  it('handles multiple dropdown selections', () => {
    mount(<Input filters={filters} />);

    cy.get(`select[name=${filters[0].id}]`).select('Category 1');
    cy.get(`select[name=${filters[1].id}]`).select('Active');

    cy.get(`select[name=${filters[0].id}]`).should('have.value', 'cat1');
    cy.get(`select[name=${filters[1].id}]`).should('have.value', 'active');
  });
});
