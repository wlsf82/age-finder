const DatePicker = ({
  children,
  max = null,
  onChange = () => {},
  testSelector = 'date-field'
}) => {
  const datePickerStyle = {
    margin: '20px 0 20px 20px'
  }

  return (
    <>
      <label htmlFor='date-picker'>{children}</label>
      <input
        data-cy={testSelector !== 'date-field' ? `${testSelector}-date-field` : testSelector}
        max={max}
        name='date-picker'
        onChange={onChange}
        style={datePickerStyle}
        type='date'
      />
    </>
  )
}

export default DatePicker
