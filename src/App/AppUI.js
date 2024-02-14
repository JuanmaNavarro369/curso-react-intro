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
import { Modal } from '../Modal/modal';
import { TodoContext } from '../TodoContext'
import { TodoForm } from '../TodoForm/TodoForm'

function AppUI(){

    const {
        todos,
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);
    return (
        <>
        <TodoCounter/>

        <TodoSearch/>

        <TodoList>

            {loading && < TodosLoading />}
            
            {error && < TodosError />}
            
            {(!loading && searchedTodos.length === 0 && todos.length > 0) && < TodosNotFound />}
            
            {(!loading && todos.length === 0) && < TodosEmpty />}
            
            {searchedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
            
            {!loading && <TodoButton />}

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </TodoList>
    </>
)};

export { AppUI };