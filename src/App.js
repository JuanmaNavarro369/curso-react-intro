import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { TodoButton } from './TodoButton/TodoButton.js'

const arrayTodos = [
  {text: "Comer Kebab1", completed: false},
  {text: "Comer Kebab2", completed: true},
  {text: "Comer Kebab3", completed: true},
  {text: "Comer Kebab4", completed: true},
  {text: "Comer Kebab5", completed: true},
  {text: "Comer Kebab6", completed: true},
  {text: "Comer Kebab7", completed: true},
  {text: "Comer Kebab8", completed: true},
  {text: "Comer Kebab9", completed: true}
];

function App() {

  // Estados
  const [todos, setTodos] = React.useState(arrayTodos);

  const [searchValue, setSearchValue] = React.useState("");


  // Estados Derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const allTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
      }
    );

    // const completeTodo = (text) => {
    //   const newArray = [...todos];
    //   const todoIndex = newArray.findIndex (
    //     (todo) => todo.text === text
    //   );
    //   newArray[todoIndex].completed = true;
    //   setTodos(newArray);
    // };

    // const deleteTodo = (text) => {
    //   const newArray2 = [...todos];
    //   const todoIndex = newArray2.findIndex (
    //     (todo) => todo.text === text
    //   );
    //   newArray2.splice(todoIndex, 1);
    //   setTodos(newArray2);
    // };
  
    const completeTodo = (i) => {
      const newArray = todos.map((todo, j) => {
        if(i === j) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      setTodos(newArray)
    };
    
  const deleteTodo = (i) => {
    const newArray = todos.filter((_, j) => {
      return i !== j;
    });
    setTodos(newArray)
      // filter establece el segundo parámetro como el índice (j)
      // la barra baja indica que el parámetro (valor) no va a ser utilizado
      // i es el todo al que has clickado
  };



    return (
      <>

    <TodoCounter
    completed={completedTodos}
    total={allTodos}
    />

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
        onComplete={() => completeTodo(index)} // completeTodo(todo.text)
        onDelete={() => deleteTodo(index)}     // deleteTodo(todo.text)
        />
        ))}
    <TodoButton />
    </TodoList>

    </>
  );
};

export default App;