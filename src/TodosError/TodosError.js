import React from 'react';
import './TodosError.css'

function TodosError () {
    return (
        <span className='error'>
            Lo sentimos, ha
            <p className='green'>ocurrido</p>
            un
            <p className='green'>ERROR</p>
        </span>
    )
};

export { TodosError };