import React from 'react'

const TextInputField = props => {
  return(
    <label>{props.label}
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
      />
    </label>
  )
}

export default TextInputField
