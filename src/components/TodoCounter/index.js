import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './index.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext);
    return (
        <h2 className="TodoCounter"> 
            Has completado {completedTodos} de {totalTodos} TODOs 
        </h2>
    );
}

export { TodoCounter };