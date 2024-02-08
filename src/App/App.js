import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from '../TodoContext/useLocalStorage'

function App() {

    // Custom Hook - Local Storage
    const {todos, saveTodos, loading, error} = useLocalStorage();

    // Estados
    const [searchValue, setSearchValue] = React.useState("");

    // Estados Derivados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    
    const allTodos = todos.length;
    
    const searchedTodos = todos.filter(
      (todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
      });
      
      const completeTodo = (id) => {
        const newArray = todos.map((todo) => {
          if(todo.id === id) {
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
    //   saveTodos(newArray);
    // };
    
    const deleteTodo = (id) => {
    // filter establece el primer parámetro como valor y el segundo como índice
      const newArray = todos.filter((todo) => {
        return todo.id !== id
      });
      saveTodos(newArray)
    };
    // const deleteTodo = (text) => {
      //   const newArray2 = [...todos];
      //   const todoIndex = newArray2.findIndex (
        //     (todo) => todo.text === text
        //   );
        //   newArray2.splice(todoIndex, 1);
        //   saveTodos(newArray2);
        // };

    return (
      <>

        < AppUI
        todos={todos}
        completedTodos={completedTodos}
        allTodos={allTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        loading={loading}
        error={error}
        />

      </>
  );
};

export { App };