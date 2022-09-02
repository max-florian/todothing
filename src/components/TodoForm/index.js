import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./index.css"

function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
    

    const {
      addTodo,
      setOpenModal,
    } = useContext(TodoContext);
    

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
    

    const onCancel = () => {
      setOpenModal(false);
    };
    

    const onSubmit = (event) => {
      event.preventDefault(); // Para que no se recargue toda la pagina luego de hacer submit
      addTodo(newTodoValue);
      setOpenModal(false);
      setNewTodoValue('')
    };
  
    return (
      <form onSubmit={onSubmit}>
        <label>Escribe un nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Comienza a escribir tu TODO"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            onClick={addTodo}
          >
            Agregar
          </button>
        </div>
      </form>
    );
  }

export { TodoForm };