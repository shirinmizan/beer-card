import React from 'react'
import './Filter.scss'

const Filter = (props) => {
    const { label, value, onChange, filterId } = props;

  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        onChange={(event) => onChange(filterId)}
      />
      {label}
    </label>
  )
}

export default Filter;