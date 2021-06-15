describe('Age finder', () => {
  beforeEach(() => {
    const now = new Date('2021-06-16').getTime()

    cy.clock(now) // Freeze date to June 16, 2021
    cy.visit('/')
    cy.get('[data-cy=birthdate-date-field]')
      .as('dateField')
  })

  context('Plural', () => {
    const inputs = [
      {
        birthdate: '2021-06-16',
        age: '0'
      },
      {
        birthdate: '1982-04-15',
        age: '39'
      }
    ]

    inputs.forEach(input => {
      it(`pluralizes the found age - ${input.age}`, () => {
        cy.get('@dateField')
          .type(input.birthdate)
          .should('have.value', input.birthdate)
          .blur()
    
        cy.contains('p', `You're ${input.age} years old`)
      })
    })
  })

  context('Singular', () => {
    it('singularizes when age is 1', () => {
      const birthdate = '2020-06-15'
  
      cy.get('@dateField')
        .type(birthdate)
        .should('have.value', birthdate)
        .blur()
  
      cy.contains('p', "You're 1 year old")
    })
  })

  context('Date more than one year ahead', () => {
    it('does not show paragraph', () => {
      const birthdate = '2022-06-17'

      cy.get('@dateField')
        .type(birthdate)
        .should('have.value', birthdate)
        .blur()
  
      cy.contains('p', "You're ").should('not.exist')
    })
  })
})
