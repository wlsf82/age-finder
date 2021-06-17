describe('Age finder', () => {
  beforeEach(() => {
    const now = new Date('2021-06-16').getTime()

    cy.clock(now) // Freezes date to June 16, 2021
    cy.visit('/')
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
        cy.setDate(input.birthdate)
    
        cy.contains('p', `You're ${input.age} years old`)
      })
    })
  })

  context('Singular', () => {
    it('singularizes when age is 1', () => {
      cy.setDate('2020-06-15')
  
      cy.contains('p', "You're 1 year old")
    })
  })

  context('Date more than one year ahead', () => {
    it('does not show paragraph', () => {
      cy.setDate('2022-06-17')
  
      cy.contains('p', "You're ").should('not.exist')
    })
  })
})
