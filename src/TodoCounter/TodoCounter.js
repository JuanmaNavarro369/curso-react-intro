import './TodoCounter.css'

function TodoCounter ({completed, total}) {
    return (
      <h1 className='TodoCounter'>
        
      {total === 0
        ? (<span>No tienes ningún <span className='green'>TODO</span></span>)
        : completed === total
        ? (<span>Has completado todos tus <span className='green'> TODOs</span>
          </span>)
        : (
          <span>
            Has completado <span className='green'> {completed} </span>
            de <span className='green'> {total} </span> TODOs
          </span>
          )

        }
    </h1>
    );
  };

  export { TodoCounter };