import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

import './App.css';

const todos = [
  { id: 1, text: 'Tarea 1', completed: false },
  { id:2, text: 'Tarea 2', completed: false },
  { id:3, text: 'Tarea 3', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {
          todos.map(todo=>{
            return(
              <TodoItem 
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed}
              />
            )
          })
        }
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
    );
}

export default App;
