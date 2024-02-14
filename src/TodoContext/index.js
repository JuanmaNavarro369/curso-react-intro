import React from "react";
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidv4 } from 'uuid';   // Generador de ID's únicos
const TodoContext = React.createContext();


function TodoProvider({ children }) { //La lógica que anteriormente estaba en App.js

    // Custom Hook - Local Storage
    const {todos, saveTodos, loading, error} = useLocalStorage();

    // Estados
    const [searchValue, setSearchValue] = React.useState("");

    const [openModal, setOpenModal] = React.useState(false);

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
    
    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => {
            return todo.id !== id
        });
        saveTodos(newArray)
    };

    const addTodo = (text) => {
        const newArray = [...todos]
        newArray.push({
            id: uuidv4(),
            text,
            completed: false,
        })
        saveTodos(newArray);
    };
    
    const toggleModal = () => {
        return setOpenModal(!openModal);
    };

    return(
        <TodoContext.Provider value={{
            todos,
            completedTodos,
            allTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            toggleModal,
        }}>

        {children}

        </TodoContext.Provider>
    );
};

export { TodoContext };
export { TodoProvider };