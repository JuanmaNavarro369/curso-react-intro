import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { TodoButton } from './TodoButton/TodoButton.js'

// const arrayTodos = [
//   {text: "Comer Kebab 1", completed: false},
//   {text: "Comer Kebab 2", completed: true},
//   {text: "Comer Kebab 3", completed: true},
//   {text: "Comer Kebab 5", completed: true},             EN CASO DE QUERER TODOs DE INICIO,
//   {text: "Comer Kebab 6", completed: true},             DEJAR ESTAS LÍNEAS COMENTADAS EN LA
//   {text: "Comer Kebab 7", completed: true},             CONSOLA DEL NAVEGADOR. SI NO, DE EXISTIR,
//   {text: "Comer Kebab 8", completed: true},             BORRAR DESDE LA CONSOLA EL STRING "TODOS_V1"
//   {text: "Comer Kebab 9", completed: true}              CON: localStorage.removeItem("TODOS_V1");
//   {text: "Comer Kebab 4", completed: true},
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(arrayTodos));

function App() {

  // Local Storage
    const saveTodos = (newArray) => {
      localStorage.setItem("TODOS_V1", JSON.stringify(newArray));

      setTodos(newArray);
      // Vinculado con completeTodo y deleteTodo en la última línea de cada función.
  };

    const parsedTodos = JSON.parse(localStorage.getItem("TODOS_V1"))

  // Estados
    const [todos, setTodos] = React.useState(() => parsedTodos || []);

    const [searchValue, setSearchValue] = React.useState("");


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
      saveTodos(newArray)
    };
    // const completeTodo = (text) => {
    //   const newArray = [...todos];
    //   const todoIndex = newArray.findIndex (
    //     (todo) => todo.text === text
    //   );
    //   newArray[todoIndex].completed = true;
    //   setTodos(newArray);
    // };
    
    const deleteTodo = (i) => {
      // filter establece el primer parámetro como valor y el segundo como índice
      // i es el todo al que has clickado
      const newArray = todos.filter((_, j) => {
        return i !== j;
      });
      saveTodos(newArray)
    };
    // const deleteTodo = (text) => {
    //   const newArray2 = [...todos];
    //   const todoIndex = newArray2.findIndex (
    //     (todo) => todo.text === text
    //   );
    //   newArray2.splice(todoIndex, 1);
    //   setTodos(newArray2);
    // };

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