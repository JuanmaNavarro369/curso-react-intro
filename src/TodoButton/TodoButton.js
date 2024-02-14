import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoButton.css'

function TodoButton () {

  const { toggleModal } = React.useContext(TodoContext);

    return (

      <button
        className='CreateTodoButton'
        onClick={() => {
          toggleModal();
        }}> 
        +
      </button>
    );
};

export { TodoButton };