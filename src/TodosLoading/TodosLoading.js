import React from 'react';
import { ClipLoader } from 'react-spinners';
import './TodosLoading.css'

function TodosLoading () {
    return (
        <div className='divLoading'>

            <span className='loading'> Cargando </span>
            <ClipLoader className='clipLoader' color="rgb(34, 160, 9)"/>

        </div>
    )
};

export { TodosLoading };