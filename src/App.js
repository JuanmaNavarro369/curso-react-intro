import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { TodoButton } from './TodoButton/TodoButton.js'

const allTodos = [
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
];

function App() {
  return (
    <>

    <TodoCounter completed={0} total={18} />
    <TodoSearch />

    <TodoList>
      {allTodos.map(todo => (
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