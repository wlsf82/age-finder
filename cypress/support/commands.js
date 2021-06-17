Cypress.Commands.add('setDate', date => {
  cy.get('[data-cy=birthdate-date-field]')
    .type(date)
    .should('have.value', date)
    .blur()
})
