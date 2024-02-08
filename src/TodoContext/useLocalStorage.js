import React from "react";

const arrayTodos = [
    {text: "Comer Kebab 1", completed: false, id: 1},
    {text: "Comer Kebab 2", completed: true, id: 2},
    {text: "Comer Kebab 3", completed: true, id: 3},
    {text: "Comer Kebab 4", completed: true, id: 4},
    {text: "Comer Kebab 5", completed: true, id: 5},             
    {text: "Comer Kebab 6", completed: true, id: 6},             
    {text: "Comer Kebab 7", completed: true, id: 7},             
    {text: "Comer Kebab 8", completed: true, id: 8},             
    {text: "Comer Kebab 9", completed: true, id: 9},             
];

// localStorage.setItem("TODOS_V1", JSON.stringify(arrayTodos));

function useLocalStorage() {
    
    // Estados
    const [todos, setTodos] = React.useState(() => []);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const saveTodos = (newArray) => {
        localStorage.setItem("TODOS_V1", JSON.stringify(newArray));
        setTodos(newArray);
        // Vinculado con completeTodo y deleteTodo en App.js
    };
    
    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            try{
                const parsedTodos = JSON.parse(localStorage.getItem("TODOS_V1"))
                if(!parsedTodos) {
                    setTodos(arrayTodos)
                } else {
                    setTodos(parsedTodos)
                } setLoading(false)

            } catch (error) {
                setError(true)
            }
        }, 2000)
    }, []);
    
    return {todos, saveTodos, loading, error,};
};

export { useLocalStorage };