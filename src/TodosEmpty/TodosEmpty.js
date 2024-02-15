import React from 'react';
import './TodosEmpty.css'

function TodosEmpty () {
    return (
        <span className='empty'>
            <p className='green'>Crea</p>
            &nbsp;tu&nbsp;primer&nbsp;
            <p className='green'>TODO</p>
        </span>
    )
};

export { TodosEmpty };