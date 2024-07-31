import { mount } from 'cypress/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const label = 'Select an option';
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders the label as the first option', () => {
    mount(<Dropdown label={label} options={options} />);

    cy.get('select').should('contain', label);
  });

  it('renders the provided options', () => {
    mount(<Dropdown label={label} options={options} />);

    options.forEach((option) => {
      cy.get('select').should('contain', option.label);
    });
  });

  it('allows selecting an option', () => {
    mount(<Dropdown label={label} options={options} />);

    cy.get('select').select('Option 2');
    cy.get('select').should('have.value', 'option2');
  });

  it('applies additional props correctly', () => {
    mount(<Dropdown label={label} options={options} disabled />);

    cy.get('select').should('be.disabled');
  });
});
