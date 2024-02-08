import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoButton } from '../TodoButton/TodoButton'
import { TodosLoading } from '../TodosLoading/TodosLoading'
import { TodosError } from '../TodosError/TodosError'
import { TodosEmpty } from '../TodosEmpty/TodosEmpty'
import { TodosNotFound } from '../TodosNotFound/TodosNotFound'

function AppUI({
    todos,
    completedTodos,
    allTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
}){

return (
<>
    <TodoCounter
        completed={completedTodos}
        total={allTodos}
        loading={loading}
        />

    <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
    />

    <TodoList>

        {loading && < TodosLoading />}

        {error && < TodosError />}

        {(!loading && searchedTodos.length === 0 && todos.length > 0) && < TodosNotFound />}

        {(!loading && todos.length === 0) && < TodosEmpty />}

        {searchedTodos.map((todo) => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)} // completeTodo(todo.text)
            onDelete={() => deleteTodo(todo.id)}     // deleteTodo(todo.text)
            />
            ))}

            <TodoButton />

    </TodoList>
</>
)
};

export { AppUI };