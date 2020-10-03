import React from 'react'
import PropTypes from 'prop-types'

function Search(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <label>
        Movie Search:
        <input type="text" name='name' />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}


Search.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default Search