import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch () {

  const {searchValue, setSearchValue, loading} = React.useContext(TodoContext);


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