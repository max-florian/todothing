import React from 'react';
import { TodoProvider, TodoContext } from './context/TodoContext';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';

import './App.css';

function AppContext() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
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
        {
          !!openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )
        }

        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

function App() {
  return (
    <TodoProvider>
      <AppContext/>
    </TodoProvider>
    );
}

export default App;
