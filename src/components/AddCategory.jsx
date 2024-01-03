import { useState } from 'react'

export const AddCategory = ({ onNewValue, placeholder }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const inputValueClean = inputValue.trim()
    if (inputValueClean.length <= 1) return

    onNewValue(inputValueClean)

    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
