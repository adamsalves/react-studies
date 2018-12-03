'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
