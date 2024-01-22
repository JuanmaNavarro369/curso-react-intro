import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton'

const defaultTodos = [
  {text: "Hacer ejercicio", completed: false},
  {text: "Estudiar", completed: true},
  {text: "Volver a Edimburgo", completed: false},
  {text: "Rejugar Resident Evil 4", completed: true}
];

function App() {
  return (
    <>

    <TodoCounter completed={27} total={69} />
    <TodoSearch />

    <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>

    <TodoButton />

    </>
  );
};

export default App;