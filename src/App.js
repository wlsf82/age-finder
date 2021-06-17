import React from 'react'
import moment from 'moment'
import DatePicker from './components/DatePicker'
import today from './today'
import './App.css'

function App() {
  const [ message, setMessage ] = React.useState()

  const handleInputChange = event => {
    const age = moment().diff(
      moment(event.target.value, 'YYYY-MM-DD'), 'years'
    )

    if (age < 0) {
      setMessage()
    } else {
      age === 1 ?
        setMessage(`You're ${age} year old.`) :
        setMessage(`You're ${age} years old.`)
    }
  }

  return (
    <div className="App">
      <h1>Age finder</h1>
      <form>
        <DatePicker
          max={ today() }
          onChange={ handleInputChange }
          testSelector="birthdate"
        >
          When did you born?
        </DatePicker>
      </form>
      { message && <p>{ message }</p> }
    </div>
  )
}

export default App
