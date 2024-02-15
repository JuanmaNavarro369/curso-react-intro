import React from 'react';
import './TodosError.css'

function TodosError () {
    return (
        <span className='error'>
            Lo&nbsp;sentimos,&nbsp;ha&nbsp;
            <p className='green'>ocurrido</p>
            &nbsp;un&nbsp;
            <p className='green'>ERROR</p>
        </span>
    )
};

export { TodosError };