import './TodoCounter.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter () {

  const { loading, allTodos, completedTodos} = React.useContext(TodoContext);

    return (
      <h1 className='TodoCounter'>
        {loading ? (
          <span>Espera <span className='green'>un</span> momento<span className='green'>...</span></span>
        ) : (
          <>
      {allTodos === 0
        ? (<span>No tienes ningún <span className='green'>TODO</span></span>)
        : completedTodos === allTodos
        ? (<span>Has completado todos tus <span className='green'> TODOs</span>
          </span>)
        : (
          <span>
            Has completado <span className='green'> {completedTodos} </span>
            de <span className='green'> {allTodos} </span> TODOs
          </span>
          )}
        </>
        )}
    </h1>
    );
  };

  export { TodoCounter };