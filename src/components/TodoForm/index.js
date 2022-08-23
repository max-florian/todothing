import React from "react";

function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
      addTodo,
      setOpenModal,
    } = React.useContext(TodoContext);
    

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
    

    const onCancel = () => {
      setOpenModal(false);
    };
    

    const onSubmit = (event) => {
      event.preventDefault();
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
          placeholder="Cortar la cebolla para el almuerzo"
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
          >
            Agregar
          </button>
        </div>
      </form>
    );
  }

export { TodoForm };