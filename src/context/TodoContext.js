import React, { useState, createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
      const [ searchValue, setSearchValue ] = useState('');
      const [ openModal, setOpenModal ] = useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({id: (newTodos.length>0 ? newTodos[newTodos.length-1].id+1 : 1), text: text, completed: false});
        saveTodos(newTodos);
      };

      const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider 
          value={{
              loading,
              error,
              totalTodos,
              completedTodos,
              searchValue,
              setSearchValue,
              searchedTodos,
              addTodo,
              completeTodo,
              deleteTodo,
              openModal,
              setOpenModal
          }}
      >
        { props.children }
      </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

