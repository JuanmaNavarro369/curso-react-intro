import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { TodoButton } from './TodoButton/TodoButton.js'

const arrayTodos = [
  {text: "Comer Kebab1", completed: true},
  {text: "Comer Kebab2", completed: true},
  {text: "Comer Kebab3", completed: true},
  {text: "Comer Kebab4", completed: false},
  {text: "Comer Kebab5", completed: false},
  {text: "Comer Kebab6", completed: false},
  {text: "Comer Kebab7", completed: false},
  {text: "Comer Kebab8", completed: false},
  {text: "Comer Kebab9", completed: false},
  {text: "Comer Kebab10", completed: false},
  {text: "Comer Kebab11", completed: false},
  {text: "Comer Kebab12", completed: false},
  {text: "Comer Kebab13", completed: false},
  {text: "Comer Kebab14", completed: false},
  {text: "Comer Kebab15", completed: false},
  {text: "Comer Kebab16", completed: false},
  {text: "Comer Kebab17", completed: false},
  {text: "Comer Kebab18", completed: false},
  {text: "Comer Kebab19", completed: true}
];

function App() {

  // Estados
  const [todos, setTodos] = React.useState(arrayTodos);

  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue);

  
  // Estados Derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const allTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
      }
    );

    const completeTodo = (i) => {
      const newArray = todos.map((todo, j) => {
         if(i === j) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      setTodos(newArray)
    };
    
  const deleteTodo = (i /* <== i es el todo al que has clickado */) => {
    const newArray = todos.filter((_, j) => {
      return i !== j;
      /* filter establece el segundo parámetro como el índice (j)
        la barra baja indica que el primer parámetro no va a ser utilizado*/
    });
    setTodos(newArray)
  };



    return (
      <>

    <TodoCounter completed={completedTodos} total={allTodos} />

    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map((todo, index) => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(index)}
        onDelete={() => deleteTodo(index)}
        />
        ))}
    <TodoButton />
    </TodoList>

    </>
  );
};

export default App;