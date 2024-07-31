/// <reference types="cypress" />
import '@/assets/styles/index.css';
import Card from './Card'

describe('<Card />', () => {
  it('Simple title', () => {
    cy.mount(<Card title='Bussines' />)
    cy.get('[data-cy=card]').should('be.visible')
    cy.get('[data-cy=card]').should('have.text', 'Bussines')
  })
  it('With slot', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card title='Bussines' slot={<div>😊</div>} />)
    cy.get('[data-cy=card]').should('be.visible')
    cy.get('[data-cy=card]').contains('div', '😊')
  })
})