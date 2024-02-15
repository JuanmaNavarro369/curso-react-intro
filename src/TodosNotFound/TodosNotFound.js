import React from 'react';
import './TodosNotFound.css'

function TodosNotFound () {
    return (
        <span className='notFound'>
            No&nbsp;se&nbsp;
            <p className='green'>encuentra</p>
            &nbsp;ningún&nbsp;
            <p className='green'>TODO</p> 
        </span>
    )
};

export { TodosNotFound };