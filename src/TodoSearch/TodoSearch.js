import React from 'react';
import './TodoSearch.css'

function TodoSearch ({searchValue, setSearchValue, loading}) {

return (

  <div className='FatherSearch'>

  {loading ? (
      <input
      className='TodoSearch'
      value = {searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}/>

  ) : (
    <>
      <input placeholder="Comer Kebabs"
      className='TodoSearch'
      value = {searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}/>
    </>
  )}

  </div>
)};

export {TodoSearch};