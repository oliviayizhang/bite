import React from 'react'

const DropDownInput = props => {
  return(
    <label>{props.label}
      <select name="meal_type" onChange={props.handleInputChange}>
        <option name="meal_type" value="Breakfast">Breakfast</option>
        <option name="meal_type" value="Lunch">Lunch</option>
        <option name="meal_type" value="Dinner">Dinner</option>
        <option name="meal_type" value="Coffee/Dessert">Coffee/Dessert</option>
      </select>
    </label>
  )
}

export default DropDownInput
