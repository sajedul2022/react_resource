import React from 'react';

const Search = () => {

  let searchTerm = '';

  const handleChange = (event) => {

    searchTerm = event.target.value;
  }

  return (
    <div className="col-sm-8" >
      <label> Search </label>
      <input type="text" onChange={handleChange} />

      <p>
        Searching for {searchTerm}.
      </p>
    </div>
  );
}


export default Search;
