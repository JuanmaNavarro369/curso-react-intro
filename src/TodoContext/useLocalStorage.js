import React from "react";

// const arrayTodos = [
//     {text: "Comer Kebab 1", completed: false},
//     {text: "Comer Kebab 2", completed: true},
//     {text: "Comer Kebab 3", completed: true},
//     {text: "Comer Kebab 4", completed: true},
//     {text: "Comer Kebab 5", completed: true},             
//     {text: "Comer Kebab 6", completed: true},             
// ];

// Custom Hook
function useLocalStorage() {
    
    // Estados
    const [todos, setTodos] = React.useState(() => []);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const saveTodos = (newArray) => {
        localStorage.setItem("TODOS_V1", JSON.stringify(newArray));
        setTodos(newArray);
        // Vinculado con completeTodo y deleteTodo en TodoContext.js
    };
    
    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            try{
                const parsedTodos = JSON.parse(localStorage.getItem("TODOS_V1"))
                if(!parsedTodos) {
                    setTodos([])
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