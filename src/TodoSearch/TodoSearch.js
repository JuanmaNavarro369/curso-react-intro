import React from 'react';
import './TodoSearch.css'

function TodoSearch ({searchValue, setSearchValue}) {


    return (
      <div className='FatherSearch'>

      <input placeholder="Comer Kebabs"
        className='TodoSearch'
        value = {searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />

      </div>
      )
  };

  export {TodoSearch};