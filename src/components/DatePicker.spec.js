import '../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import DatePicker from './DatePicker'

describe('DatePicker component', () => {
  it('renders with its defaults', () => {
    mount(
      <DatePicker>Pick a date</DatePicker>
    )

    cy.get('[data-cy=date-field]')
      .should('be.visible')
      .and('not.have.attr', 'max')
  })
})
