import React from 'react'
import './SearchField.css'
import { FaSearch } from 'react-icons/fa'

const SearchField = (props) => {
  return (
  	<div className="searchfield">
      <input 
        type="text" 
        placeholder="Type the item name" 
        className="searchfield__input"
        value={props.inputValue}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyPress}
      />
      <button 
        onClick={props.fetchNewItems}
        className="searchfield__button"
      >
        <FaSearch 
          className="searchfield__icon"
        />
      </button>
    </div>
  )
}

export default SearchField