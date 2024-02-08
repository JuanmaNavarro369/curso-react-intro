import React from 'react';
import './TodosEmpty.css'

function TodosEmpty () {
    return (
        <span className='empty'>
            <p className='green'>Crea</p>
            tu primer
            <p className='green'>TODO</p> 
        </span>
    )
};

export { TodosEmpty };