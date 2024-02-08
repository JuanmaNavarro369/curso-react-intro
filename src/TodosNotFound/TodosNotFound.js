import React from 'react';
import './TodosNotFound.css'

function TodosNotFound () {
    return (
        <span className='notFound'>
            No se
            <p className='green'>encuentra</p>
            ningún
            <p className='green'>TODO</p> 
        </span>
    )
};

export { TodosNotFound };