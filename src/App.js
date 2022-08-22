import React from 'react';
import { TodoProvider, TodoContext } from './context/TodoContext';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

import './App.css';

function App() {

  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoContext.Consumer>
          {({
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => {
            return (
              <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {
                  searchedTodos.map(todo=>{
                    return(
                      <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={()=> completeTodo(todo.id)}
                        onDelete={()=> deleteTodo(todo.id)}
                      />
                    )
                  })
                }
              </TodoList>
            );
          }}
        </TodoContext.Consumer>

        <CreateTodoButton/>
      </React.Fragment>
    </TodoProvider>
    );
}

export default App;
