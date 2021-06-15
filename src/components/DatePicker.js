const DatePicker = ({ children, max = null, onChange = () => {}, testSelector }) => {
  const datePickerStyle = {
    margin: '20px 0 20px 20px'
  }

  return (
    <>
      <label htmlFor="date-picker">{ children }</label>
      <input
        data-cy={ testSelector ? `${testSelector}-date-field` : 'date-field' }
        max={max}
        name="date-picker"
        onChange={ onChange }
        style={ datePickerStyle }
        type="date"
      />
    </>
  )
}

export default DatePicker
