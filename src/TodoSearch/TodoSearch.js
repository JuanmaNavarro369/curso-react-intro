import './TodoSearch.css'

function TodoSearch () {
    return (
      <div className='FatherSearch'>

      <input placeholder="Escuchar al Canserbero"
        className='TodoSearch'
        onChange={(event) => {
          console.log('Usaste TodoSearch')
          console.log(event.target)
          console.log(event.target.value)
        }}/>
        
      </div>
      )
  };

  export {TodoSearch};