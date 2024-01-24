import './TodoButton.css'

function TodoButton () {
    return (
      <button 
      className='CreateTodoButton'
      onClick={(event) => {
        console.log('Has pulsado el botón +')
        console.log(event.target)
      }}
      > + </button>
    );
};

export { TodoButton };