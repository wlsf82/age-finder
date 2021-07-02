import React from 'react'
import moment from 'moment'
import DatePicker from './components/DatePicker'
import './App.css'

function App () {
  const [message, setMessage] = React.useState()

  const handleInputChange = event => {
    const typedDate = event.target.value
    const typedDateAsNumber = new Date(typedDate)

    if (isNaN(typedDateAsNumber)) {
      setMessage()
      return
    }

    const isAfterToday = moment(typedDate, 'YYYY-MM-DD').isAfter(moment())
    const age = moment().diff(
      moment(typedDate, 'YYYY-MM-DD'), 'years'
    )

    if (isAfterToday) {
      setMessage('Are you from the future?')
    } else {
      age === 1
        ? setMessage(`You're ${age} year old.`)
        : setMessage(`You're ${age} years old.`)
    }
  }

  return (
    <div className='App'>
      <h1>Age finder</h1>
      <form>
        <DatePicker
          max={moment().format('YYYY-MM-DD')}
          onChange={handleInputChange}
          testSelector='birthdate'
        >
          What's your birth date?
        </DatePicker>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default App
