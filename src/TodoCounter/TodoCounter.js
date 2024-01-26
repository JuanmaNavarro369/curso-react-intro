import './TodoCounter.css'

function TodoCounter ({completed, total}) {
    return (
      <h1 className='TodoCounter'>
      {total === 0
        ? 'No tienes ningun TODO'
        : completed === total
        ? 'Has completado todos tus TODOS'
        : `Has completado ${completed} de ${total} TODOS`}
    </h1>
    );
  };

  export { TodoCounter };